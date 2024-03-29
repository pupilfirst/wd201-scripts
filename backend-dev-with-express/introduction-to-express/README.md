# Script
In this lesson, we will create an HTTP server using Express.js.

Express.js is a fast and lightweight framework, used majorly for web application development. Express is built on top of Node.js. It is designed to develop websites, web apps, & API’s easily.
With that being said, let's create our first ever Express application.

From this lesson onwards, we will gradually build a todo-management application, where you will be able to add tasks with a due date, and once you finish the task, you will be able to mark it as completed. It's as simple as that. With  that being said, let's get started.

### Installing Express.js
First, we will initialize node project using `npm init`.
Then, to install the Express.js in that application, we will run the following command in the terminal:
````
npm install express --save
````
Once that process gets complete, open the project in VS Code.

### Configuring the Express server
Node.js has a built-in `http` module as well as `https` module, to create an HTTP/HTTPS server. But the implementation process is kind of difficult.
Whereas, Express wraps the built-in `http` module and provides a cleaner interface to create an HTTP web server.

First, create a new file called `index.js`, there we will create and configure our Express.js server.
```js
const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Hello World')
})

app.listen(3000)
```

In your terminal, start the server using the command:
````
node index.js
````
Then head on over to **localhost:3000** in your browser, and you should see **"Hello World"** printed on the webpage. 

That's Great!

### Decoding the server configuration
Now, let's understand the above snippet, line by line.
```js
const express = require('express');
const app = express();
```
Here, the first line requires the **Express** module that was installed via NPM, and the second line sets up our Express application. With this application (`app`), you can configure and add functionality to the server.

Then,
```js
app.listen(3000)
```
The `app.listen()` function tells the server to start listening for connections on a particular port, in this case, port `3000`. This is why we went to `localhost:3000` to look at our **Hello World** example.

The last part is the route handler:
```js
app.get('/', function (request, response) {
  response.send('Hello World')
})
```
This part is very important. Here, using the `app.get()` method, Express creates a route handler to listen for GET requests from a client. The first argument in this function is the route path. In this case, we’re listening for GET requests on `localhost:3000/`. If we wanted to listen for a POST request, then we would use `app.post()`.

The second argument is a callback function that takes a `request` object and a `response` object. The *request* object contains information about the request that came from the client, for example: request headers, query parameters, request body, etc. The *response* object contains information that we want to send as a response back to the client.

Inside `app.get()`, the `response.send('hello world');` function sends a response with content in the body of the response. In this case, the body contains the plain text `hello world`.

Alright! Now we know how to set up a route!
