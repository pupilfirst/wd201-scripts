## Text

In this lesson, we will learn how to delete a to-do item.

We will first add capability to remove an item to our model. Edit the `models/todo.js` to have a `remove` method.

```js
static async remove(id) {
      return this.destroy({
        where: {
          id,
        },
      });
    }
```

Next, let's edit the `app.js` file to add this capability. To delete an entry in database, we use `delete` request. So let's add such a route.

```js
app.delete("/todos/:id", async (request, response) => {
  try {
    await Todo.remove(request.params.id);
    return response.json({ success: true });
  } catch (error) {
    return response.status(422).json(error);
  }
});
```

Here, the `id` of the todo item which is to be deleted is passed in the url. We just need to invoke the `remove` method which we have already implemented earlier.

To add this capability to the front end, let's open the `todos.ejs` file in the `views` folder. Now, we need to add capability to delete the to-do when clicked on the trash icon.

We will add `onClick` handler to invoke a `deleteTodo` function when clicked on it. Here we also pass the id to `deleteTodo` to identify which item was invoked.

```html
<a
  href="#"
  class="hidden trash-icon ml-2"
  onclick="deleteTodo(<%= data[i].id %>)"
>
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
```

Now, we have to implement the actual JavaScript function `deleteTodo` which actually sends the delete request to the server.

```js
function deleteTodo(id) {
  fetch(`/todos/${id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if(res.ok) {
        window.location.reload();
      }
    })
    .catch((err) => console.error(err));
}
```

Here, We have used the built in `fetch` to do the network request of type `delete`.

Now, let's run the express server.

```sh
npm start
```

Open the browser and visit `http://localhost:3000/` to view our to-do application. Now we should be able to click on thrash icon of the todo items and delete it.
