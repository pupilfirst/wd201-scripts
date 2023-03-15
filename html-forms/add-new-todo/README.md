## Text

In this lesson, we will use the UI to create new to-do items. Currently it doesn't work. If I try to add an item, nothing happens.

To create a new todo, the browser should send a `POST` request. The required parameters like `title` and `dueDate` should be sent as the body of the `POST` request.

The form is submitted as urlencoded
```js
app.use(express.urlencoded({ extended: false }));
```

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

Let's redirect the response once a new item is created.

```js
return response.redirect("/");
```
We will now adapt this functionality to the frontend.

Let's edit the `index.ejs` file to make sure the new todo item form has an `action` and `method` attribute.

```html
<form action="/todos" method="POST">...</form>
```

This makes sure that when the `Add` button is clicked, the form will be submitted as a `POST` request to `/todos` endpoint.

Next, we need to make sure the todo text is sent to server using the key `title` and the due date using the key `dueDate`. We can do this by adding `name` attribute on respective input fields. Let's add that:

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
