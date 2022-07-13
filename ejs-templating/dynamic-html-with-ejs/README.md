# Text

In the previous levels, we learned about Express.js and worked on building a UI with HTML and CSS. At this level, let's learn more about how we can render the User Interface using **Node.js,** which is very helpful to display static or dynamic content.

We will learn about EJS (Embedded JavaScript templating) and how we can use them to display dynamic HTML for a **Node.js** application.

## What are templates?

Templates allow us to render dynamic content inside HTML, enabling us to use loops, if conditions, and other features. It allows us to inject dynamic data at the runtime of an application.

There are a lot of UI libraries that we can use to create this dynamic HTML. But in this level, we will build an entire front-end using just templating in **Node.js** without using UI libraries.

We will be using **Express.js** to handle routing and [EJS](https://ejs.co/) which is a very popular library for handling dynamic content templates.

One of the reasons EJS is so popular is because it allows writing JavaScript code directly inside the template, so we can use loops, if conditions, and all things provided by JavaScript. Other template libraries use their own syntax and do not directly write JavaScript.

## Setting up EJS

Let us start by setting up a new project for our To-Do application, which we will update to work with Dynamic HTML.

First, let us move to the To-Do project folder we created in the previous lesson.

Let us initialize `package.json` by running the following command.

```
npm init -y
```

Next, we will install `express` (assuming you have not installed it earlier. Else skip this step.) and `ejs` by running the below statement.

```
npm install express --save
npm install ejs --save
```

Next, let us also install `nodemon` as a dev dependency by running the below command. `nodemon` here monitors any changes to your Node.js files, so you don't have to restart the server every time you make an update.

```
npm install nodemon  --save-dev
```

Now, let us create the base `index.js` file by importing `express` to send HTML as a response.

```js
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Welcome to your first EJS app!</h1>");
});

app.listen(3000, () => {
  console.log("Server started at localhost:3000");
});
```

Finally, update the `start` script in the `package.json` as below:

```
"start": "nodemon index.js"
```

Your final `package.json` will look something like this.

```js
{
 "name": "todo-manager",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
   "start": "nodemon index.js",
   "test": "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [],
 "author": "",
 "license": "ISC",
 "dependencies": {
   "ejs": "^3.1.8",
   "express": "^4.18.1"
 },
 "devDependencies": {
   "nodemon": "^2.0.19"
 }
}
```

Now let’s add the `ejs` functionality into the application.

Create a new folder called **views** and add an `index.ejs` file inside it with the following content:

```js
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Index page</title>
 </head>
 <body>
   <h1>This is index page!</h1>
 </body>
</html>
```

To render this file, we need to add some code in our `express` app.

First we need to specify the render engine by adding the following code in the `index.js` file.

```js
app.set("view engine", "ejs");
```

And to render the `index.ejs`, we need to use the render method of the response object and pass the name of the ejs file without providing the `.ejs` extension.

Express will automatically search for the file with the `.ejs` extension inside the default views directory.

```js
app.get("/", (request, response) => {
  response.render("index"); // index refers to index.ejs
});
```

Now, if you navigate to `localhost:3000`, you will see the content from `index.ejs` being rendered.

In the future lessons, we will learn more about how to use `ejs` effectively and build a full UI using templating.
