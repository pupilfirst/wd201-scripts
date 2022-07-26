## Text

In this lesson, we will look into how to return different responses to different clients. A http client can let the server know what kind of response they are expecting. It is done using the `Accept` http header.

The following http header tells the server that the client will accept **html** content.

```
Accept: text/html
```

To accept any type of content, we can use:

```
Accept: */*
```

This is the default header that a browser sends, if nothing is specified.

If the client expects a `JSON` response, then the client should send the following header.

```
Accept: application/json
```

Let's modify the listing of Todos to return html when visited using browser and return a `JSON` response when it is invoked using Postman.

```js
app.get("/todos", async function (req, res, next) {
  const overdue = await db.Todo.overdue();
  const dueToday = await db.Todo.dueToday();
  const dueLater = await db.Todo.dueLater();
  if (req.accepts("html")) {
    res.render("index", {
      title: "Todo application",
      overdue,
      dueToday,
      dueLater,
      csrfToken: req.csrfToken(),
    });
  } else {
    res.json({
      overdue,
      dueToday,
      dueLater,
    });
  }
});
```

Here, we check whether the client accepts `html` response using `req.accept()`. If the client can accept html response, we render the html page. If it doesn't then we send back a `JSON` reponse.

Let's save the file and start the app.

```sh
DEBUG=todo-manager:* npm start
```

If we visit `http://localhost:3000/todos`, we can see the todo list being rendered as HTML. Next, send a request from API client like _Postman_, but also add a HTTP header with key `Accept` and value `application/json` to the same url. You will get a json reponse similar to this:

```json
{
  "overdue": [
    {
      "id": 18,
      "title": "Buy milk",
      "dueDate": "2022-07-19",
      "completed": false,
      "createdAt": "2022-07-20T13:09:57.148Z",
      "updatedAt": "2022-07-20T13:09:57.148Z"
    }
  ],
  "dueToday": [
    {
      "id": 19,
      "title": "Another one ",
      "dueDate": "2022-07-20",
      "completed": false,
      "createdAt": "2022-07-20T13:10:09.611Z",
      "updatedAt": "2022-07-20T13:10:09.611Z"
    }
  ],
  "dueLater": [
    {
      "id": 20,
      "title": "Buy groceries",
      "dueDate": "2022-07-22",
      "completed": false,
      "createdAt": "2022-07-20T13:10:35.127Z",
      "updatedAt": "2022-07-20T13:10:35.127Z"
    }
  ]
}
```

So, that's how we add capability to send HTML or JSON response to different client based on the type of reponse they accept.
