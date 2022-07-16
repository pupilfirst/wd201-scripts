## Text

In this lesson, we will learn to secure our application against Cross site scripting attacks (XSS attacks).

We prevent XSS attacks by making sure a unique token for a client session is being passed with every request (CSRF token). We use `csurf` package to add this capability to our express.js application. Let's first add it to our project.

```sh
npm install csurf
```
Next, we need to use this package in our express.js application. Edit the `app.js` file to add the following content.

```js
var csrf = require('csurf')

// ...

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }))
```
That's it! We are all set. Now, our application expects a CSRF token with every `POST`, `PUT` and `DELETE` requests.

If we try to add a new todo, we should get a error showing `invalid csrf token`.
![invalid csrf token](./invalid-csrf.png)

Let's fix that.

Edit the `app.js` file to generate a csrf token.

```js
router.get('/todos', async function (req, res, next) {
  const overdue = await db.Todo.overdue();
  const dueToday = await db.Todo.dueToday();
  const dueLater = await db.Todo.dueLater();
  res.render('index', { title: 'Todo application', overdue, dueToday, dueLater, csrfToken: req.csrfToken() });
});
```
Next, we will render it in our todo creation form. We do that by adding the token as a _hidden_ field, which will automatically get submitted.

```html
<form action="/todos" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <div class="flex gap-2 py-4">
    <div class="flex-auto w-64">
      <input type="text" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2"
        placeholder="What's next?" name="title" autofocus required>
    </div>
    <div class="flex-auto w-32">
      <input type="date" name="dueDate"
        class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2 leading-4	">
    </div>
    <div class="flex-none">
      <button type="submit"
        class="text-white bg-green-600 hover:bg-green-700 font-medium rounded text-sm px-5 py-2 mr-2 mb-2">Add</button>
    </div>
  </div>
</form>
```
Save the file and let's restart our server.

```sh
DEBUG=todo-manager:* npm start
```

We should now be able to create new todo items as before. Next, we need to send the csrf token with our `PUT` and `DELETE` requests.

To do that, we will first add a `meta` tag which will render the token. Then we will get the token using JavaScript selector and then pass them with each request.

Add a new `meta` tag in `head` of the `todos.ejs` file.

```html
 <title>TO-DO Manager</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="<%= csrfToken %>">
```
Next, before we fire a request using `fetch`, we will get the token and inject it into the request.

```js
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
function updateTodo(id) {
  fetch(`/todos/${id}`, {
    credentials: 'same-origin', // send cookies
    method: 'put',
    headers: { 'Content-Type': 'application/json', 'CSRF-Token': token  },
  }).then((res) => {
    window.location.reload(true);
  }).catch(err => console.error(err))
}

function deleteTodo(id) {
  fetch(`/todos/${id}`, {
    credentials: 'same-origin', // send cookies
    method: 'delete',
    headers: { 'Content-Type': 'application/json', 'CSRF-Token': token  },
  }).then((res) => {
    window.location.reload(true);
  }).catch(err => console.error(err))
}
```
We pass the token as a http header. We also ask the browser to send the cookies along with the requests using `credentials: 'same-origin'`.

Now we should be able to get our back to working state.
