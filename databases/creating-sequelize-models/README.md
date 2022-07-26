## Text

In this target, we'll learn how to use Sequelize to create a table and insert rows to the table.

A database table is represented by a model in Sequelize. We can define a model in two equivalent ways in Sequelize.

- Calling `sequelize.define(modelName, attributes, options)`
- Extending `Model` and calling `init(attributes, options)`

The type of columns can be one of the following:

- `DataTypes.STRING` for VARCHAR(255)
- `DataTypes.TEXT` for Text
- `DataTypes.BOOLEAN` for Boolean
- `DataTypes.INTEGER` for Integer
- `DataTypes.DATE` for Date with timestamp

There are a lot more types available. You can find them [here](https://sequelize.org/docs/v7/other-topics/other-data-types/)

After a model is defined, it is available within `sequelize.models` by its model name. Let's first define a model for our storing our Todos. Create a file named `Todo.js` and type in the following code.

```js
//  Todo.js

const  { sequelize } = require("./connectDB.js");

const Todo = sequelize.define(
  "Todo",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
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
// Todo.sync(); // create the table
```

The second way of defining a model is by extending it from `Model` base class. Then using the `init` method with model attributes.

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
      type: DataTypes.DATE,
    },
    complete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    tableName: "todos",
  }
);

module.exports =  Todo;
```

### Adding rows

Once we have defined a model, we can use it to create, update or delete data in the table. We can add a record by using the `create` method and passing in values for the columns as an object.

```js
const { connect } = rquire("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then() => {
    return Todo.create({
      title: "First Item",
      dueDate: new Date(),
      complete: false,
    });
  })
  .then((todo) => {
    console.log(todo);
  })
  .catch((err) => console.error(err));
```

### Counting rows

Now we should be able to query the database and fetch the stored data. But first, let us check the number of rows.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.count();
  })
  .then((todoCount) => {
    console.log(todoCount); // Shows '1'
  })
  .catch((err) => console.error(err));
```

### Fetching results

We can get all the records using `findAll` method on the model. It would also attach some metadata to the result. To prevent that, we pass in an option `raw: true`.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then((Todo) => {
    return Todo.findAll({ raw: true });
  })
  .then((todos) => {
    console.log(todos); // prints all the saved todos
  })
  .catch((err) => console.error(err));
```

We can get a specific record by using `findOne` method and passing the `where` clause to filter the records through.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then((Todo) => {
    return Todo.findOne({ where: { id: 2 } });
  })
  .then((todo) => {
    console.log(todo.get({ plain: true }));
  })
  .catch((err) => console.error(err));
```

### Updating records

We can use the `update` method to update a record. The following code finds and updates the title for the record with `id` = 2.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then((Todo) => {
    return Todo.update({ title: "Updated title" }, { where: { id: 2 } });
  })
  .then((todo) => {
    console.log(todo.get({ plain: true }));
  })
  .catch((err) => console.error(err));
```

It is possible to make changes to a model instance and write back the update to database using the `save` method.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then((Todo) => {
    return Todo.findOne({ where: { id: 2 } });
  })
  .then((todo) => {
    todo.title = "Update using save()";
    return todo.save();
  })
  .then((updatedTodo) => console.log(updatedTodo.get({ plain: true })))
  .catch((err) => console.error(err));
```

### Deleting records

To delete a row, `Sequelize` provides `destroy` method on the model.

```js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then((Todo) => {
    return Todo.destroy({ where: { id: 2 } });
  })
  .then((deletedRowCount) => {
    console.log(deletedRowCount);
  })
  .catch((err) => console.error(err));
```

### Conclusion

In this lesson we have learned how to create Sequelize models and use them to query or update the records in database.
