## Text

In this lesson we will add capability to mark a to-do item as complete.

First, let's edit the `todos.js` file in `router` folder to add this capability. To update an entry in database, we use `put` request. So let's add such a route.

```js
router.put("/:id", async function (req, res, next) {
  await db.Todo.markAsComplete(req.params.id);
  res.json({ success: true });
});
```

Here, the `id` of the todo item which is to be updated is passed in the url. We just need to invoke the `markAsCompleted` method which we have already implemented earlier.

To add this capability to the front end, let's open the `todos.ejs` file in the `views` folder. Now, we need to add capability to update completion status while clicking the checkbox.

We will first wrap the `dueToday` items in its own form. Then add invoke `updateTodo` on clicking on it. Here we also pass the id to `updateTodo` to identify which item was invoked.

```html
<form>
  <input id="todo-checkbox-<%= dueToday[i].id %>" type="checkbox"
  <%=dueToday[i].completed ? 'checked' : '' %> class="w-4 h-4 text-blue-600
  bg-gray-100 rounded border-gray-300" onclick="updateTodo(<%= dueToday[i].id
  %>, <%= !dueToday[i].completed %>)">

  <label
    for="todo-checkbox-<%= dueToday[i].id %>"
    class="ml-2 text-sm text-gray-600 cursor-pointer"
  >
    <%= dueToday[i].title %>
  </label>
</form>
```

We will do the same for `dueLater` items also

```html
<form>
  <input id="todo-checkbox-<%= dueLater[i].id %>" type="checkbox"
  <%=dueLater[i].completed ? 'checked' : '' %> class="w-4 h-4 text-blue-600
  bg-gray-100 rounded border-gray-300" onclick="updateTodo(<%= dueLater[i].id
  %>, <%= !dueLater[i].completed %>)">
  <label
    for="todo-checkbox-<%= dueLater[i].id %>"
    class="ml-2 text-sm text-gray-600 cursor-pointer"
  >
    <%= dueLater[i].title %>
  </label>
</form>
```

Next, we update the `overdue` items.

```html
<form>
  <input id="todo-checkbox-<%= overdue[i].id %>" type="checkbox"
  <%=overdue[i].completed ? 'checked' : '' %> class="w-4 h-4 text-blue-600
  bg-gray-100 rounded border-gray-300" onclick="updateTodo(<%= overdue[i].id %>,
  <%= !overdue[i].completed %>)">
  <label
    for="todo-checkbox-<%= overdue[i].id %>"
    class="ml-2 text-sm text-gray-600 cursor-pointer"
  >
    <%= overdue[i].title %>
  </label>
</form>
```

Now, we have to add the actual JavaScript function `updateTodo` which actually sends the data to server and marks a todo complete.

```js
function updateTodo(id) {
  fetch(`/todos/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      window.location.reload(true);
    })
    .catch((err) => console.error(err));
}
```

Here we used built in `fetch` to do a network request. `fetch` takes first argument as the url to which request is to be made. The second argument is a cnfiguration object, which actually constructs the request. Here we specify to use `put` method and use `{ 'Content-Type': 'application/json' }` http request headers. You can read more about [http headers here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

We had to use `fetch` request here because, the `form` element doesn't allow `PUT` submission. It only allows `GET` and `POST` method. You can read more about [fetch here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


Now, let's run the express server.

```sh
DEBUG=todo-manager:* npm start
```
Open the browser and visit `http://localhost:3000/todos` to view our todo application. Now we should be able to click on each todo item and mark it as complete.
