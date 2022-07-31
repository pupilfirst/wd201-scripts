## Text

In this lesson, we will use our newly designed UI to create new to-do items. To do that, first we have to update our backend to handle such requests.

Edit the `app.js` with following contents.

First, we need to import the database models.

```js
const db = require("../models/index");
```

Next, we can add the endpoint to display todo list in the browser.

```js
app.get("/todos", async function (req, res, next) {
  const overdue = await db.Todo.overdue();
  const dueToday = await db.Todo.dueToday();
  const dueLater = await db.Todo.dueLater();
  res.render("index", { overdue, dueToday, dueLater });
});
```

To create a new todo, web browser should send a `POST` request. The required parameters like `title` and `dueDate` are sent as body of the `POST` request. To create such a handler we need to declare it using `router.post`. Express.js would parse the body of the request and make them available at `req.body`. And we would be able to extract `title` and `dueDate` from `req.body`.

```js
app.post("/todos", async function (req, res, next) {
  await db.Todo.addTask({
    title: req.body.title,
    dueDate: new Date(req.body.dueDate),
  });
  res.redirect("/todos");
});
```

Now we have the backend functioning. We will now adapt this functionality to the frontend.

Let's edit the `todos.ejs` file to make sure the new todo item form has an `action` and `method` attribute.

```html
<form action="/todos" method="POST">...</form>
```

This makes sure that when the `Add` button is clicked, the form will be submitted as a `POST` request to `/todos` endpoint.

Next, we need to make sure the todo text is sent to server using the key `title` and the due date using the key `dueDate`. We can do this by adding `name` attribute on respective input fields. So the final for looks like:

```html
<form action="/todos" method="POST">
  <div class="flex gap-2 py-4">
    <div class="flex-auto w-64">
      <input
        type="text"
        class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2"
        placeholder="What's next?"
        name="title"
        autofocus
        required
      />
    </div>
    <div class="flex-auto w-32">
      <input
        type="date"
        name="dueDate"
        class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2 leading-4	"
      />
    </div>
    <div class="flex-none">
      <button
        type="submit"
        class="text-white bg-green-600 hover:bg-green-700 font-medium rounded text-sm px-5 py-2 mr-2 mb-2"
      >
        Add
      </button>
    </div>
  </div>
</form>
```

Save the file and restart the server. Now, we would be able to create new todo items from the user interface.
