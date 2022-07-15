## Text

In this lesson we will add capability to delete to-do item.

First, let's edit the `todos.js` file in `router` folder to add this capability. To delete an entry in database, we use `delete` request. So let's add such a route.

```js
router.delete('/:id', async function (req, res, next) {
  await db.Todo.removeTask(req.params.id);
  res.json({ success: true })
});
```

Here, the `id` of the todo item which is to be deleted is passed in the url. We just need to invoke the `removeTask` method which we have already implemented earlier.

To add this capability to the front end, let's open the `todos.ejs` file in the `views` folder. Now, we need to add capability to delete the todo when clicked on the thrash icon.

We will wrap the `<a>` tags in its own `form`. Then invoke `deleteTodo` when clicked on it. Here we also pass the id to `deleteTodo` to identify which item was invoked.

```html
<form>
  <a class="hidden trash-icon" href="#!" onclick="deleteTodo(<%= dueToday[i].id %>)">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
  </a>
</form>
```

We will do the same for `dueLater` items also

```html
<form>
  <a class="hidden trash-icon" href="#!" onclick="deleteTodo(<%= dueLater[i].id %>)">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
  </a>
</form>
```

Next, we update the `overdue` items.

```html
<form>
  <a class="hidden trash-icon" href="#!" onclick="deleteTodo(<%= overdue[i].id %>)">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
  </a>
</form>
```

Now, we have to implement the actual JavaScript function `deleteTodo` which actually sends the delete request to the server.

```js
function deleteTodo(id) {
      fetch(`/todos/${id}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        window.location.reload();
      }).catch(err => console.error(err))
    }
```

We used built in `fetch` to do the network request. Here we are making a `delete` request.

Now, let's run the express server.

```sh
DEBUG=todo-manager:* npm start
```
Open the browser and visit `http://localhost:3000/todos` to view our todo application. Now we should be able to click on thrash icon of the todo items and delete it.
