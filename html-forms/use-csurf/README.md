## Text

In this lesson, we will learn to secure our application against Cross site scripting attacks (XSS attacks).

We prevent XSS attacks by making sure a unique token for a client session is being passed with every request (CSRF token). We use `csurf` package to add this capability to our express.js application. Let's first add it to our project.

```sh
npm install csurf cookie-parser
```

Next, we need to use this package in our express.js application. Edit the `app.js` file to add the following content.

```js
var csrf = require("csurf");

// ...
var cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("shh! some secret string"));
app.use(csrf({ cookie: true }))
// app.use(csrf("this_should_be_32_character_long", ["POST", "PUT", "DELETE"]));
```

That's it! We are all set. Now, our application expects a CSRF token with every `POST`, `PUT` and `DELETE` requests.

If we try to add a new todo, we should get a error showing `invalid csrf token`.
![invalid csrf token](./invalid-csrf.png)

Let's fix that.

Edit the `app.js` file to generate a csrf token.

```js
app.get("/", async (request, response) => {
  const overdue = await Todo.overdue();
  const dueToday = await Todo.dueToday();
  const dueLater = await Todo.dueLater();
  if (request.accepts("html")) {
    response.render("index", {
      title: "Todo application",
      overdue,
      dueToday,
      dueLater,
      csrfToken: request.csrfToken(),
    });
  } else {
    response.json({
      overdue,
      dueToday,
      dueLater,
    });
  }
});
```

Next, we will render it in our todo creation form. We do that by adding the token as a _hidden_ field, which will automatically get submitted.

```html
<form action="/todos" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
  <div class="flex gap-2 py-4">
    <div class="flex-auto">
      <input
        type="text"
        placeholder="What's next?"
        name="title"
        class="border border-gray-300 rounded text-gray-900 w-full p-2 text-sm"
        required
      />
    </div>
    <div class="flex-auto">
      <input
        type="date"
        name="dueDate"
        class="border border-gray-300 rounded text-gray-900 w-full p-2 text-sm leading-4	"
      />
    </div>
    <div class="flex-none">
      <button
        type="submit"
        class="bg-green-600	text-white px-5 py-1.5 rounded font-medium mr-2 mb-2"
      >
        Add
      </button>
    </div>
  </div>
</form>
```

Save the file and server should restart automatically.

We should now be able to create new todo items as before. Next, we need to send the csrf token with our `PUT` and `DELETE` requests.

To do that, we will first add a `meta` tag which will render the token. Then we will get the token using JavaScript selector and then pass them with each request.

Add a new `meta` tag in `head` of the `index.ejs` file.

```html
<title>TO-DO Manager</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="csrf-token" content="<%= csrfToken %>" />
```

Next, before we fire a request using `fetch`, we will get the token and inject it into the request.

```js
var token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

function updateTodo(id) {
  fetch(`/todos/${id}/markAsCompleted`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _csrf: token,
    }),
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.error(err));
}

function deleteTodo(id) {
  console.log(id);

  fetch(`/todos/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _csrf: token,
    }),
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.error(err));
}
```

Now we should be able to get our back to working state. But our tests will be failing now. Try running our tests.

```js
npm test
```

Let's fix that.

To get the csrf token, we will simply send a `GET` request to our server, extract the CSRF token from response, then send it along with our `POST` or `PUT` requests. To inspect the response from server, we will use a package called `cheerio`. Let's install that.

```sh
npm install --save-dev cheerio
```

Now import it in our test file.

```js
var cheerio = require("cheerio");
```

Let's add a function in `__tests__/todo.js` to extract the csrf token

```js
function extractCsrfToken(res) {
  var $ = cheerio.load(res.text);
  return $("[name=_csrf]").val();
}
```

Now, we can rewrite the test for creating a new item

```js
test("create a new todo", async () => {
  agent = request.agent(server);
  const res = await agent.get("/");
  const csrfToken = extractCsrfToken(res);
  const response = await agent.post("/todos").send({
    _csrf: csrfToken,
    title: "Buy milk",
    dueDate: new Date().toISOString(),
    completed: false,
  });
  expect(response.statusCode).toBe(302);
});
```

Similarly, we can modify the test for mark as complete

```js
test("Mark a todo as complete", async () => {
  agent = request.agent(server);
  let res = await agent.get("/");
  let csrfToken = extractCsrfToken(res);
  await agent.post("/todos").send({
    _csrf: csrfToken,
    title: "Buy milk",
    dueDate: new Date().toISOString(),
    completed: false,
  });

  const groupedTodosResponse = await agent
    .get("/")
    .set("Accept", "application/json");
  const parsedGroupedResponse = JSON.parse(groupedTodosResponse.text);

  expect(parsedGroupedResponse.dueToday).toBeDefined();

  const dueTodayCount = parsedGroupedResponse.dueToday.length;
  const latestTodo = parsedGroupedResponse.dueToday[dueTodayCount - 1];

  res = await agent.get("/");
  csrfToken = extractCsrfToken(res);

  const markCompleteResponse = await agent.put(`/todos/${latestTodo.id}/markAsCompleted`).send({
    _csrf: csrfToken,
  });
  const parsedUpdateResponse = JSON.parse(markCompleteResponse.text);
  expect(parsedUpdateResponse.completed).toBe(true);
});
```

Save the file, and run the tests.

```
npm test
```

The tests should all be working now.

If you take a look at the csurf pacakge, it is shown as deprecated, that means, it isn't developed anymore. Insted let's search npm for other libraries. And this `tiny-csrf` looks like a good fit.

Let's use this package in our code.

Install the package using the command:

```
npm install tiny-csrf
```

Switch to `app.js` file. Replace the `csurf` with `tiny-csrf`. And edit the usage.

```js
app.use(csrf("this_should_be_32_character_long", ["POST", "PUT", "DELETE"]));
```
The secret key should exactly be 32 characters long, else it will throw an error.

Now, run the tests, and it should work just fine.

```
npm test
```
