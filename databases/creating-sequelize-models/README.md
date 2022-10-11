## Text

In this lesson, we'll learn how to use Sequelize to create a table and insert rows to it.

A database table is represented by a model in Sequelize. We can define a model in two equivalent ways in Sequelize.

- Calling `sequelize.define(modelName, attributes, options)`
- Extending `Model` and calling `init(attributes, options)`

The type of columns can be one of the following:

- `DataTypes.STRING` for VARCHAR(255)
- `DataTypes.TEXT` for Text
- `DataTypes.BOOLEAN` for Boolean
- `DataTypes.INTEGER` for Integer
- `DataTypes.DATE` for Date with timestamp
- `DataTypes.DATEONLY` for Date without timestamp

There are a lot more types available. You can find them [here](https://sequelize.org/docs/v7/other-topics/other-data-types/)

After a model is defined, it is available within `sequelize.models` by its model name. Let's first define a model for storing our Todos. Create a file named `TodoModel.js` and type in the following code.

```js
//  TodoModel.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("./connectDB.js");

const Todo = sequelize.define(
  "Todo",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    complete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "todos",
  }
);
module.exports = Todo;
Todo.sync(); // create the table
```

The second way of defining a model is by extending it from `Model` base class and then using the `init` method with model attributes.

```js
const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {}
Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

Todo.sync();
module.exports = Todo;
```
 We will use the second syntax to define our model.

### Adding rows

In this video we will learn how to insert, update and delete data from our todo table using seqelize.

We can add a record by using the `create` method and passing in values for the columns as an object.

Let's create a file named `index.js` and add `createTodo` function.

```js
// index.js
const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.create({
      title: "First Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await createTodo();
})();
```

You can execute the following command to create the first to-do item.

```sh
node index.js
```

You can further refactor the code to make testing easier by encapsulating the creation of todo item in a static function. Let's edit the `TodoModel`.

```js
class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }
}
```

Now, we can replace the call to `create` method in `index.js` with `addTask`.

```js
// index.js
const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "Second Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};
```

### Counting rows

Now we should be able to query the database and fetch the stored data. But first, let us check the number of rows.

Let's add a function to count the rows with the following code.

```js
// index.js
const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} items in the table!`);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  await countItems();
})();
```

You can execute the following command to count the number of todos.

```sh
node index.js
```

### Fetching results

We can get all the records using `findAll` method on the model. It would also attach some metadata to the result. To prevent that, we pass in an option `raw: true`. We can also specify SQL `ORDER BY` clause to sort the results. We specify to return the result in ascending order of the `id`.

Add `getAllTodos` in `index.js`

```js
const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll();
    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  // await countItems();
  await getAllTodos();
})();
```

Update `TodoModel` to return a readable string for an item.

```js
// TodoModel.js
class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }

  displayableString() {
    return `${this.id}. ${this.title} - ${this.dueDate}`;
  }
}
```

You can execute the file using the following command.

```sh
node index.js
```

We can get a specific record by using `findOne` method and passing the `where` clause to filter the records through.

Add `getSingleTodo` function in `index.js`.

```js
const getSingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });

    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  // await countItems();
  await getSingleTodo();
})();
```

You can fetch the todo item by executing following command.

```sh
node index.js
```

### Updating records

We can use the `update` method to update a record. The following code finds and updates the title for the record with `id` = 2. (You might have to pass a different id. See the available `id`s by fetching all to-dos)

Add `updateItem` function in `index.js`.

```js
const updateItem = async (id) => {
  try {
    const todo = await Todo.update(
      { completed: true },
      {
        where: {
          id: id,
        },
      }
    );

    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  // await countItems();
  await getAllTodos();
  await updateItem(2);
  await getAllTodos();
})();
```

Also update the Todo model to format the item in a redable format.

```js
// TodoModel.js
class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }

  displayableString() {
    return `${this.completed ? "[x]" : "[ ]"} ${this.id}. ${this.title} - ${
      this.dueDate
    }`;
  }
}
```

You can update the todo item by executing following command.

```sh
node index.js
```

### Deleting records

To delete a row, `Sequelize` provides `destroy` method on the model.

Create a file named `deleteTodo.js` with following code.

```js
const deleteItem = async (id) => {
  try {
    const deletedRowCount = await Todo.destroy({
      where: {
        id: id,
      },
    });

    console.log(`Deleted ${deletedRowCount} rows!`);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createTodo();
  // await countItems();
  await getAllTodos();
  // await updateItem(2);
  await deleteItem(2);
  await getAllTodos();
})();
```

You can delete the to-do item by executing following command.

```sh
node index.js
```

## Why use IIFE?

You might be wondering why we had to use the cryptic Immediately Invoked Function expression to do something simple as querying the database. The answer is you dont. Let's comment out the code block and invoke the `getAllTodos` function.

It works fine. Let's also get the count of records we have in the database. So I will add a call to `countItems` as well. Let's run it again.

Now, we can see the asynchronous nature of JavaScript kicking in. Both these functions are executed in parallel. So whichever finishes first, prints the result first.

We can mimic synchronous behaviour by `await`-ing on an `async` function. But since, we don't have a function context here, we cannot write `await getAllTodos()`.

Instead we can create another async function called `run` and move all these code into it.

```js
const run = async () => {
  // await createTodo();
  // await countItems();
  await getAllTodos();
  // await updateItem(2);
  await deleteItem(2);
  await getAllTodos();
};

run();
```
Then invoke the run function instead. Now, the results appear in the way we intended. Next, we can modify the run function to be an anonymous function, ie, a function which doesn't have any name associated with it. And here we have our Immediately Invoked Function Expression.

### Conclusion

In this lesson we have learned how to create Sequelize models and use them to query or update the records in database.

Read more about [IIFE at MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
[Sequelize model basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)
[Sequelize querying basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
