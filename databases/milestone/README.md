> **Important Notes:**
>
> 1. You must format the code using `prettier` before submitting.
> 2. You must read the problem description carefully before making your submission. Do not miss the details - the program should perfectly match the specifications.
> 3. Take your time, sweat the details, and make every submission count!

## Problem Description

To complete this milestone, you have to make the following 3 programs work: `listTodos.js`, `addTodo.js`, and `completeTodo.js`.

The exact code for all three of these files will be provided in the following sections. You need to fill in the `models/todo.js` file (the sequelize model) with appropriate methods, so that these three files work correctly.

### 1. listTodos.js

Here is the code template for `listTodos.js`:

```js
//  listTodos.js
const db = require("./models/index");

const listTodo = async () => {
  try {
    await db.Todo.showList();
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await listTodo();
})();
```

When running this program from the command line, it should print to-dos from the database in the following format:

```
My Todo-list

Overdue
24. [ ] Submit assignment 2022-07-10


Due Today
25. [ ] Pay rent
28. [ ] Service vehicle


Due Later
26. [ ] File taxes 2022-07-14
27. [ ] Call Acme Corp. 2022-07-14


Completed Items
20. [x] Buy Groceries
22. [x] Clean apartment
```

- The output format is the same as the To-do assignment in the previous level, except that this time you also have to print the `id` of the row as the first column. Make sure to remove any leading or trailing spaces while printing the todo item.

- You should have inserted some sample data in the todos table through addTodo.js before attempting this. All of this is explained in the previous sections, so make sure you've followed them thoroughly.

- To solve this problem, you need to have a `models/todo.js` file which will define the Sequelize model. In `todo.js`, define the class (static) method `showList` which will print the list of to-dos as per the format given above. You can use the following template to get started:

```js
// models/todo.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      // FILL IN HERE
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      console.log("\n");

      console.log("Completed Items");
      // FILL IN HERE
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
    }

    static async completed() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE

    }

    static associate(models) {
      // define association here
    }
    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
```

### 2. addTodo.js

Here is the code template for `addTodo.js`:

```js
// addTodo.js
var argv = require('minimist')(process.argv.slice(2));
const db = require("./models/index")

const createTodo = async (params) => {
  try {
    await db.Todo.addTask(params);
  } catch (error) {
    console.error(error);
  }
};

const getJSDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  return new Date(today.getTime() + days * oneDay)
}
(async () => {
  const { title, dueInDays } = argv;
  if (!title || dueInDays === undefined) {
    throw new Error("title and dueInDays are required. \nSample command: node addTodo.js --title=\"Buy milk\" --dueInDays=-2 ")
  }
  await createTodo({ title, dueDate: getJSDate(dueInDays), completed: false })
  await db.Todo.showList();
})();

```

When running this program from the command line, it should accept title, due in days as command line argument for details of a new to-do, save it to the database, and print the new list of to-dos. You can add a todo using the command:

```sh
node addTodo.js --title="hello there" --dueInDays=2
```
- Note that `dueInDays` is not a date, but an integer. It is like saying "this task will be due in 3 days".

### 3. completeTodo.js

The code for this file is as follows:

```js
// completeTodo.js
var argv = require('minimist')(process.argv.slice(2));
const db = require("./models/index");
const markAsComplete = async (id) => {
  try {
    await db.Todo.markAsComplete(id);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  const { id } = argv;
  if(!id) {
    throw new Error("Need to pass an id");
  }
  if(!Number.isInteger(id)) {
    throw new Error("The id needs to be an integer")
  }
  await markAsComplete(id);
  await db.Todo.showList();
})();

```

- Implement a class method `markAsComplete` on `models/todo.js` which takes a To-do ID, and sets its `completed` attribute  to `true`. The `id` should be accepted as a commandline argument.

## Submission Guidelines

Please attach a link to your GitHub repo where the these files are present. The repo would also have files generated by the sequelize-cli. Please ensure that the files are in the root of the repository and not in any directory, and the submitted link is of the repository and not of any branch or directory.
