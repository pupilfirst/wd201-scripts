## Text

In this lesson, we will look into how to test the routes that we have created for our Todo web application. First, we need to install a npm package `supertest` to help us with the testing. We will install it as a development dependency.

```sh
npm install -D supertest
```

We will use `supertest` to send request to our express.js routes.

Next, we will edit the test scripts in `package.json` to drop and create the database before running the tests. We will use the `db:drop` command available with `sequelize-cli` to destroy the test database. Then we create a clean slate by using the `db:create` command.

```json
"pretest": "NODE_ENV=test npx sequelize-cli db:drop && NODE_ENV=test npx sequelize-cli db:create",
"test": "NODE_ENV=test jest"
```

Now let's start writing some tests!

## Test listing of todos

Create a folder `__tests__` in the project root and create a file named `todos.js`. We make sure the tables are created before running the tests using the `beforeAll` global function available with `jest`.

To list the todos, we send a `get` request to `/todos`. We also set a HTTP header specifying the client expects a `json` response.

With the test, we make sure:

- The endpoint is available
- Returns a JSON response

```js
const request = require("supertest");

const db = require("../models/index");
const app = require("../app");

describe("List the todo items", function () {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("responds with json at /todos", async () => {
    const response = await request(app)
      .get("/todos")
      .set("Accept", "application/json");
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    expect(response.statusCode).toBe(200);
  });
});
```

Run the tests using the command `npm test`. You should see the tests running and something similar to the following as output.

```
> todo-manager@0.0.0 pretest
> NODE_ENV=test npx sequelize-cli db:drop && NODE_ENV=test npx sequelize-cli db:create


Sequelize CLI [Node: 16.13.0, CLI: 6.4.1, ORM: 6.21.3]

Loaded configuration file "config/config.json".
Using environment "test".
Database database_test dropped.

Sequelize CLI [Node: 16.13.0, CLI: 6.4.1, ORM: 6.21.3]

Loaded configuration file "config/config.json".
Using environment "test".
Database database_test created.

> todo-manager@0.0.0 test
> NODE_ENV=test jest --detectOpenHandles

GET /todos 200 21.281 ms - 42
 PASS  __tests__/todos.js
  List the todo items
    ✓ responds with json at /todos (58 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.496 s, estimated 2 s
Ran all test suites.
```

We can also make sure the response contains data in a specified format that we require. The To-do items are supposed to be returned as a JSON object with the following structure:

```json
{
  "dueToday": [],
  "dueLater": [],
  "overdue": []
}
```

Let's ensure that by adding a new test.

```js
test("returns data in specified format", async () => {
  const res = await request(app)
    .get("/todos")
    .set("Accept", "application/json");
  expect(res.header["content-type"]).toBe("application/json; charset=utf-8");

  const parsedResponse = JSON.parse(res.text);
  expect(parsedResponse.overdue).toBeDefined();
  expect(parsedResponse.dueLater).toBeDefined();
  expect(parsedResponse.dueToday).toBeDefined();
});
```

Now, run the tests again. You should see our new test also passing.

```
> todo-manager@0.0.0 test
> NODE_ENV=test jest --detectOpenHandles

GET /todos 200 20.950 ms - 42
GET /todos 200 33.074 ms - 42
 PASS  __tests__/todos.js
  List the todo items
    ✓ responds with json at /todos (57 ms)
    ✓ returns data in specified format (44 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.454 s, estimated 2 s
Ran all test suites.
```

Next, let's add a test to check the creation of to-do. Since, we have protected our to-do creation route using a CSRF token, we have to make sure we pass in the token in the request as well. To help us with that, we will install another package named `cheerio`. We will simply send a request to list the to-dos, extract the CSRF token from the response, and then send out the actual request to create the to-do.

Let's modify our test script

```js
const request = require("supertest");
const cheerio = require("cheerio");

// ...

function extractCsrfToken(res) {
  var $ = cheerio.load(res.text);
  return $("[name=_csrf]").val();
}
```

We just added a function to extract the CSRF token from the HTML response. Let's add a test now. We will require cookies as well. So we will use a super request `agent`.

```js
test("create new todo ", async () => {
  const agent = request.agent(app);
  const response = await agent.get("/todos");
  const csrfToken = extractCsrfToken(response);
  const createTodoResponse = await agent.post("/todos").send({
    _csrf: csrfToken,
    title: "Buy groceries",
    dueDate: new Date().toISOString(),
    complete: false,
  });
  expect(createTodoResponse.statusCode).toBe(302);
  const todoListResponse = await request(app)
    .get("/todos")
    .set("Accept", "application/json");
  const dueToday = JSON.parse(todoListResponse.text).dueToday;
  expect(dueToday.length).toBe(1);
});
```

Here, we try to create a todo item with today's date as the due date. We expect the http status code to be `302` once a todo item is created. Then we send a request to list the todo items and verify there is indeed an item which is due today.

If you run the tests again using the command `npm run`, you should see following output.

```
> todo-manager@0.0.0 test
> NODE_ENV=test jest --detectOpenHandles

GET /todos 200 20.933 ms - 42
GET /todos 200 12.028 ms - 42
GET /todos 200 14.395 ms - 2452
POST /todos 302 25.177 ms - 28
GET /todos 200 9.860 ms - 185
 PASS  __tests__/todos.js
  List the todo items
    ✓ responds with json at /todos (56 ms)
    ✓ returns data in specified format (23 ms)
    ✓ create new todo  (96 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.601 s, estimated 2 s
Ran all test suites.
```

We have successfully added tests for listing and creating todo items. Next, let's add test to check the mark complete functionality.

```js
test("Mark a todo as complete ", async () => {
  const agent = request.agent(app);
  const res = await agent.get("/todos");
  const csrfToken = extractCsrfToken(res);
  const createTodoResponse = await agent.post("/todos").send({
    _csrf: csrfToken,
    title: "Buy groceries",
    dueDate: new Date().toISOString(),
    complete: false,
  });

  const listTodoResponse = await request(app)
    .get("/todos")
    .set("Accept", "application/json");
  const dueToday = JSON.parse(listTodoResponse.text).dueToday;
  expect(dueToday.length).toBeGreaterThan(0);

  const markCompleteResponse = await agent
    .put(`/todos/${dueToday[0].id}`)
    .send({
      _csrf: csrfToken,
    });

  expect(markCompleteResponse.statusCode).toBe(200);
});
```

Let's run the tests again.

```sh
npm test
```

You should be able to see the following output.

```
> todo-manager@0.0.0 test
> NODE_ENV=test jest --detectOpenHandles

GET /todos 200 23.136 ms - 42
GET /todos 200 11.535 ms - 42
GET /todos 200 15.431 ms - 2452
POST /todos 302 44.169 ms - 28
GET /todos 200 18.461 ms - 188
GET /todos 200 12.311 ms - 3610
POST /todos 302 7.612 ms - 28
GET /todos 200 6.853 ms - 340
PUT /todos/1 200 5.699 ms - 16
 PASS  __tests__/todos.js
  List the todo items
    ✓ responds with json at /todos (62 ms)
    ✓ returns data in specified format (24 ms)
    ✓ create new todo  (133 ms)
    ✓ Mark a todo as complete  (96 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.661 s, estimated 2 s
Ran all test suites.
```

## Conclusion
You have now added tests to back your code. This would ensure the code will work as it is intended.
