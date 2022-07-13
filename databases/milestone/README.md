> **Important Notes:**
>
> 1. You must format the code using `prettier` before submitting.
> 2. You must read the problem description carefully before making your submission. Do not miss the details - the program should perfectly match the specifications.
> 3. Take your time, sweat the details, and make every submission count!

## Problem Description

To complete this milestone, you have to make the following 3 programs work: `listTodos.js`, `addTodo.js`, and `completeTodo.js`.

The exact code for all three of these files will be provided in the following sections. The only thing you need to do is to fill in the `todo.js` file (the sequelize model) with appropriate methods so that these three files work correctly.

### 1. listTodos.js

Here is the code template for `listTodos.rb`:

```js
//  listTodos.rjs
import { connect } from "./connectDB.js";
import { Todo } from "./Todo.js";
connect()
  .then(() => {
    return Todo.showList();
  })
  .then(() => {})
  .catch((err) => console.error(err));
```

When running this program from the command line, it should print to-dos from the database in the following format:

```
My Todo-list

Overdue
24. [x] Submit assignment 2022-07-10


Due Today
25. [x] Pay rent
28. [ ] Service vehicle


Due Later
26. [ ] File taxes 2022-07-14
27. [ ] Call Acme Corp. 2022-07-14
```

- The output format is the same as the To-do assignment in the previous level, except that this time you also have to print the `id` of the row as the first column.

- You should have created `connectDB.js` as well as inserted some sample data in the `todos` table through `createItems.js` before attempting this. All of this is explained in the previous sections, so make sure you've followed them thoroughly.

- To solve this problem, you need to have a `todo.js` file which will define the Sequelize model. In it, define the class method `self.showList` that prints the list of to-dos as per the above format. You can use the following template to get started:

```js
Todo.showList = async function () {
  console.log("My Todo list \n");

  console.log("Overdue");
  // FILL IN HERE
  console.log("\n");

  console.log("Due Today");
  // FILL IN HERE
  console.log("\n");

  console.log("Due Later");
  // FILL IN HERE
};
```

### 2. addTodo.js

Here is the code template for `addTodo.js`:

```js
import * as readline from "readline";

import { Todo } from "./Todo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("todo text: ", (todoText) => {
  rl.question(
    "How many days from now is it due? (give an integer value) ",
    (days) => {
      const daysInt = parseInt(days.trim());
      rl.close();
      Todo.addTask({ title: todoText, days: daysInt }).then((todo) => {
        console.log(`New todo created with id ${todo.id}`);
        Todo.showList();
      });
    }
  );
});
```

When running this program from the command line, it should ask for details of a new to-do, save it to the database, and print the new list of to-dos.

- To solve this problem, you should implement the class method `addTask` in the `Todo` model. It will take an object as parameter, containing `dueInDays` and `title`.

- Note that `dueInDays` is not a date, but an integer. It is like saying "this task will be due in 3 days". So, when implementing `addTask`, you should compute the date before saving it to the database.

### 3. completeTodo.js

The code for this file is as follows:

```js
import * as readline from "readline";

import { connect } from "./connectDB.js";
import { Todo } from "./Todo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

connect()
  .then(() => {
    return Todo.showList();
  })
  .then(() => {
    rl.question(
      "Which todo do you want to mark as complete? (Enter id): ",
      async (todoID) => {
        rl.close();
        const id = parseInt(todoID.trim());
        await Todo.markAsComplete(id);
        await Todo.showList();
      }
    );
  })
  .catch((err) => console.error(err))
  .finally(() => {});
```

- Implement class method `markAsComplete` which takes a To-do ID, and sets its `complete` to `true`.

## Submission Guidelines

Please attach a link to your GitHub repo where the three files are present. The repo would also have files `connectDB.js` and `todo.js`. Please ensure that the files are in the root of the repository and not in any directory, and the submitted link is of the repository and not of any branch or directory.
