# Text

In the previous levels, we learned about Express.js and defined the routes for our Todo Manager. At this level, let's learn more about how we can render the User Interface using **Node.js,** which is very helpful to display static or dynamic content.

We will learn about EJS (Embedded JavaScript templating) and how we can use them to display dynamic HTML for a **Node.js** application.

## What are templates?

Templates allow us to render dynamic content inside HTML, enabling us to use loops, if conditions, and other features. It allows us to inject dynamic data at the runtime of an application.

There are a lot of UI libraries that we can use to create this dynamic HTML. But in this level, we will build an entire front-end using just templating in **Node.js** without using UI libraries.

We will be using **Express.js** to handle routing and [EJS](https://ejs.co/) which is a very popular library for handling dynamic content templates.

One of the reasons EJS is so popular is because it allows writing JavaScript code directly inside the template. This means, we can use loops, if conditions, and all other features provided by JavaScript. Other template libraries use their own syntax and do not directly write JavaScript.

## Setting up EJS

Let us start by installing `ejs` in our Todo application.

```
npm install ejs --save
```

Next, let us also install `nodemon` as a dev dependency by running the below command. Here, `nodemon`  monitors any changes to our Node.js files, so we don't have to restart the server every time we make a change in our code.

```
npm install nodemon  --save-dev
```

To use `nodemon`, we have to update the `start` script in the `package.json` as below:

```
"scripts": {
  "start": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
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
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "pg": "^8.7.3",
    "sequelize": "^6.21.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.19",
    "sequelize-cli": "^6.4.1"
  }
}

Now we can start our Express application using the `npm run start` command.
```

## First EJS template
Now, let’s add the `ejs` functionality into the application.

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

First, we have to tell our express application, that we will be using EJS as template engine. We can specify the render engine, by adding the following code in the `app.js` file.

```js
app.set("view engine", "ejs");
```

And to render the `index.ejs`, we need to use the `render` method of the `response` object and pass the name of the ejs file without providing the `.ejs` extension.

Express will automatically search for the file with the `.ejs` extension inside the default views directory. So, we will add a root route to render our `index.ejs` file.

```js
app.get("/", (request, response) => {
  response.render("index"); // index refers to index.ejs
});
```

Now, if you navigate to `localhost:3000`, you will see the content from `index.ejs` being rendered.

In the future lessons, we will learn more about "how to use `ejs` effectively and build a fully functional user interface using templating".
