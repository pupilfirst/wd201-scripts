## Text

In this lesson, we will learn, how to test the web endpoints of our application. But before doing that, make sure you have configured the pre-commit hook to run tests and lint-staged using husky.

To run the tests, we use jest. Along with jest, we will also install another npm package called `supertest`. We will use `supertest` to send request to our express.js routes.

```sh
npm install -D jest supertest
```

Next, we will edit the test scripts in `package.json` to drop and create the database before running the tests. We will use the `db:drop` command available with `sequelize-cli` to destroy the test database. Then we create a clean slate by using the `db:create` command.

```json
"pretest": "NODE_ENV=test npx sequelize-cli db:drop && NODE_ENV=test npx sequelize-cli db:create",
"test": "NODE_ENV=test jest --detectOpenHandles"
```

Next, let's make sure we have correct parameters to connect to database in `config/config.json`. We will also use a separate database for testing.

```json
{
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "wd-todo-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "wd-todo-test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

And finally, let's make sure `jest` is installed in our project. Make sure you have configured pre-commit hook to run the tests and lint staged as we learned in Level 4.

Now let's start writing some tests!

## Test listing of todos

To make our code testable, we will rename our `index.js` to `app.js`. And export the file as a module. We will also remove the `app.listen` from the file.

```js
app.delete("/todos/:id", (request, response) => {
  console.log("Delete a todo by ID: ", request.params.id)
})


module.exports = app;
```

Create a new `index.js` file with following content:

```js
//  index.js
const app = require("./app");

app.listen(3000, () => {
  console.log("Started express server at port 3000")
})

```
Create a folder `__tests__` in the project root and create a file named `todos.js`. We make sure the tables are created before running the tests using the `beforeAll` global function available with `jest`. We also tear down the temporary server once testing is complete using the `afterAll` global function.

We will now test creating a new todo.

With the test, we make sure:

- The endpoint is available
- Returns a JSON response
- The response contains id of newly created todo.

```js
const request = require("supertest");

const db = require("../models/index");
const app = require("../app");

let server, agent;

describe("List the todo items", function () {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    server = app.listen(3000, () => { });
    agent = request.agent(server);
  });

  afterAll(async () => {
    await db.sequelize.close();
    server.close()
  })

  test("responds with json at /todos", async () => {
    const response = await agent.post('/todos').send({
      'title': 'Buy milk',
      dueDate: new Date().toISOString(),
      completed: false
    });
    expect(response.statusCode).toBe(200);
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    const parsedResponse = JSON.parse(response.text);
    expect(parsedResponse.id).toBeDefined();
  });
});
```

Run the tests using the command `npm test`. You should see the tests running and something similar to the following as output.

```
> todo-manager@1.0.0 test
> NODE_ENV=test jest --detectOpenHandles

  console.log
    Creating a todo {
      title: 'Buy milk',
      dueDate: '2022-09-20T19:23:20.961Z',
      complete: false
    }

      at log (app.js:13:11)

 PASS  __tests__/todo.js
  List the todo items
    ✓ create a new todo (83 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.079 s, estimated 2 s
Ran all test suites.
```

We have successfully added test for creating todo items. Next, let's add test to check the mark complete functionality.

```js
test("Mark a todo as complete", async () => {
    const response = await agent.post('/todos').send({
      'title': 'Buy milk',
      dueDate: new Date().toISOString(),
      completed: false
    });
    const parsedResponse = JSON.parse(response.text);
    const todoID = parsedResponse.id;

    expect(parsedResponse.completed).toBe(false);

    const markCompleteResponse = await agent.put(`/todos/${todoID}/markASCompleted`).send();
    const parsedUpdateResponse = JSON.parse(markCompleteResponse.text);
    expect(parsedUpdateResponse.completed).toBe(true);
  });
```

Let's run the tests again.

```sh
npm test
```

You should be able to see the following output.

```

 PASS  __tests__/todo.js
  List the todo items
    ✓ create a new todo (87 ms)
    ✓ Mark a todo as complete (46 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.113 s, estimated 2 s
Ran all test suites.
```

## Conclusion
You have now added tests to back your code. This would ensure the code will work as it is intended.
