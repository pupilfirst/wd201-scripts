## Text

In this lesson, we will use our newly designed UI to create new to-do items. To do that, first we have to update our backend to handle such requests.

Edit the `app.js` with following contents.

First, we need to import the database models.

```js
const { Todo } = require("../models");
```

Next, we can add the endpoint to display todo list in the browser.

```js
app.get("/", async function (request, response) {
  const overdue = await Todo.overdue();
  const dueToday = await Todo.dueToday();
  const dueLater = await Todo.dueLater();
  res.render("index", { overdue, dueToday, dueLater });
});
```

To create a new todo, web browser should send a `POST` request. The required parameters like `title` and `dueDate` are sent as body of the `POST` request. To create such a handler we need to declare it using `app.post`. Express.js would parse the body of the request and make them available at `request.body`. And we would be able to extract `title` and `dueDate` from `request.body`.

```js
app.post("/todos", async (request, response) => {
  console.log("Creating a todo", request.body);
  try {
    await Todo.addTodo({
      title: request.body.title,
      dueDate: request.body.dueDate,
    });
    return response.redirect("/");
  } catch (error) {
    console.log(error);
    return response.status(422).json(error);
  }
});
```

Now we have the backend functioning. We will now adapt this functionality to the frontend.

Let's edit the `index.ejs` file to make sure the new todo item form has an `action` and `method` attribute.

```html
<form action="/todos" method="POST">...</form>
```

This makes sure that when the `Add` button is clicked, the form will be submitted as a `POST` request to `/todos` endpoint.

Next, we need to make sure the todo text is sent to server using the key `title` and the due date using the key `dueDate`. We can do this by adding `name` attribute on respective input fields. So the final for looks like:

```html
<form action="/todos" method="POST">
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

Save the file and restart the server. Now, we would be able to create new todo items from the user interface.
