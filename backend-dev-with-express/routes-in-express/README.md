# Text
Routing is an important part of a Web framework. It defines how the application should handle all the incoming HTTP requests. In this lesson we are about to explore, how to define routes in an express.js application.

We will work on the same express application that we've created in the **Hello world with Express.js!** lesson.

### Fundamentals of Routing
**Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, PUT, DELETE etc.).

The structure of route definition is:
````
app.METHOD(PATH, HANDLER)
or 
app.METHOD(path, callback [, callback ...])
````

An example route:
```js
app.get("/", function (request, response) {
  response.send('Hello World')
})
```
 Here:
 - `app` is the instance of `express`
 - `METHOD` is nothing but a **HTTP verb**, it could be GET, POST, PUT, PATCH, DELETE etc. While defining a route, we have to keep it in lowercase, like: `app.get()`, `app.post()`, `app.delete()`, and so on.
 - `PATH` is a path on the server. This is very important as it determines the actual endpoint where clients would send requests to. For example, let's say we are defining route for our Todo application, and the first route we got to define, is to get list of all Todos. So, our path would be, `/todos` and method would be `GET`.
 - `HANDLER` is the callback function which executed when the `PATH` and the `METHOD` are matched. This callback function that takes a `request` object and a `response` object. The *request* object contains information about the request that came from the client, for example: request headers, query parameters, request body, etc. The *response* object contains information that we want to send as a response back to the client. In the above example, the `response.send('hello world');` function sends a response with content in the body of the response (the plain text `hello world`).

### Let's define routes for our Todo app
1. Endpoint to get list of all Todos:
```js
app.get('/todos', function (request, response) {
  console.log('Processing list of all Todos ...')
  // First, we have to query our PostgerSQL database using Sequelize to get list of all Todos.
  // Then, we have to respond with all Todos, like:
  // response.send(todos)
})
```

2. Route to get details of a specific Todo by it's ID:
```js
app.get('/todos/:id', function (request, response) {
  console.log('Looking for Todo with ID: ', request.params.id)
  // First, we have to query our database to get details of a Todo with a specific ID.
  // Then, we have to respond back:
  // response.send(todo)
})
```
In this route definition, we have to send the Todo ID as a part of the endpoint URL. So the complete endpoint could look something like this: `GET http://mytodoapp.com/todos/123`, here **123** is the Todo ID. 
In this route definition, the ID is coming as parameter, which can be accessed inside the callback function with: `request.params.id`.

3. Route for creating a new Todo:
```js
app.post('/todos', function (request, response) {
  console.log('Creating new Todo: ', request.body)
  // First, we have to query our database to create the new Todo with all relevant attributes coming inside the request body.
  // Then, we have to respond back with the new Todo instance:
  // response.send(todo)
})
```
In this route definition, we've used the `POST` HTTP method, as we are creating a new entry in the database. Another important point to observe, the `PATH` value of this endpoint matches with the route to *get list of all Todos*, but notice the HTTP method is different there. So, whenever you are defining any routes, remember to keep the combination of `HTTP METHOD + PATH` unique, throughout the application.

4. Route to update a specific Todo by it's ID, to mark it as `completed`:
```js
app.put('/todos/:id/markAsCompleted', function (request, response) {
  console.log('We have to update a Todo with ID: ', request.params.id)
  // First, we have to query our database to update details of a Todo with a specific ID.
  // Then, we have to respond back with the updated Todo
})
```

5. Route to delete a specific Todo by it's ID:
```js
app.delete('/todos/:id', function (request, response) {
  console.log('We have to delete a Todo with ID: ', request.params.id)
  // First, we have to query our database to delete a Todo by ID.
  // Then, we have to respond back with some simplete message like "To-Do deleted successfully":
  // response.send("Todo deleted successfully")
})
```

So, in this lesson, we've learned to define routes in a Node.js application. See you in the next one.
