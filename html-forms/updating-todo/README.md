## Text

In this lesson, we will add capability to mark a to-do item as complete.

To update an entry in the database, we use a `put` request. We already have the endpoint in our application.

```js
app.put("/todos/:id/markAsCompleted", async (request, response) => {
  console.log("We have to update a todo with ID:", request.params.id);
  const todo = await Todo.findByPk(request.params.id);
  try {
    const updatedTodo = await todo.markAsCompleted();
    return response.json(updatedTodo);
  } catch (error) {
    console.log(error);
    return response.status(422).json(error);
  }
});
```

To add this capability to the front end, let's open the `todos.ejs` file in the `views` folder. Now, we need to add capability to update completion status while clicking the checkbox.

We will first add an id to the checkbox. We will also add `checked` attribute if the item is completed.

```html
<input id="todo-checkbox-<%= data[i].id %>" type="checkbox" <%=data[i].completed ? "checked" : "" %>
```

We would also want to complete the item when clicked on the lable text, so let's add a `for` attribute on the label.

````html
<label for="todo-checkbox-<%= data[i].id %>" class="ml-2 text-sm text-gray-600 cursor-pointer">
<%= data[i].title %>
</label>
```
Then we will add a handler which will be invoked when an item is clicked.
Here, we also pass the id to `updateTodo` to identify which item was clicked.
  ```html
  <li class="Todo-Item">
    <div
      class="flex items-center w-fit my-2 px-2 py-1 rounded hover:bg-purple-50"
    >
      <input id="todo-checkbox-<%= data[i].id %>"
      type="checkbox"<%=data[i].completed ? "checked" : "" %>
      onclick="updateTodo(<%= data[i].id %>)" class="w-4 h-4 text-blue-600
      bg-gray-100 rounded border-gray-300">

      <label
        for="todo-checkbox-<%= data[i].id %>"
        class="ml-2 text-sm text-gray-600 cursor-pointer"
      >
        <%= data[i].title %>
      </label>
      <a href="#" class="hidden trash-icon ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </a>
    </div></li
></label>
````

Now, we have to add the function `updateTodo`, which will send the data to server and marks an item as complete.

```js
  <script>
    function updateTodo(id) {
      fetch(`/todos/${id}/markAsCompleted`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  </script>
```

Here we used built in `fetch` to do a network request. `fetch` takes first argument as the url to which request is to be made. The second argument is a configuration object, which actually constructs the request. Here we specify to use `put` method and use `{ 'Content-Type': 'application/json' }` http request headers. You can read more about [http headers here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

The `fetch` returns a promise, on which we can

We had to use `fetch` request here because, the `form` element doesn't allow `PUT` submission. It only allows `GET` and `POST` method. You can read more about [fetch here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Now, let's run the express server.

```sh
npm start
```

Open the browser and visit `http://localhost:3000/` to view our todo application. Now we should be able to click on each todo item and mark it as complete.
