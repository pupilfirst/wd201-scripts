# Text

Let us create a sample Node.js program based on the content we learned earlier to render some HTML to our browser.

In this lesson, we will create a Node.js program to read HTML from a file and render it in different URLs in our web browser. And all of this will be done using the inbuilt functions in Node.js.

## Creating our HTML files

We will create 2 HTML files that are interlinked, similar to the project you worked on at WD101. Our web application will have 2 pages: Home and Project.

Let us create the first-page `home.html`. This will have links to the other page.

```html
<!-- home.html -->
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>My Application</title>
</head>
<body>
   <h1>My Application Home</h1>
   <a href="./project">Projects</a>
</body>
</html>
```

Next, we will create the `project.html` that lists the projects we have worked on. We will keep the project list empty for now.

```html
<!-- project.html -->
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>My Project</title>
</head>
<body>
   <h1>Projects</h1>
   <h3>Project List</h3>
   <a href="/">&lt;- Back to home</a>
</body>
</html>
```

## Using Node.js to display HTML

We have all the necessary files created for our first application. This will be rendered over a HTTP server. 

Let us write the Node.js program to render these pages.

We already have an `index.js` file in our application. We will clear all the contents of the file and start fresh.

First, include the `http` and `fs` modules in the application.

```js
const http = require("http");
const fs = require("fs");
```

Now, let's start reading the file from the local folder. We will use the `readFile` method we learned about earlier.

```js
fs.readFile("home.html", function (err, home) {
  console.log(home.toString());
});
```

The `readFile` function in the above command provides you with the content of the file `home.html`. Next, we will use the HTTP server to render the above content in a port of our choice, here the `localhost:3000`.

```js
fs.readFile("home.html", function (err, home) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(home);
      response.end();
    })
    .listen(3000);
});
```

Save the file and run the same using `npm start`. Now, if you navigate to `localhost:3000` you can see that the file is rendered as expected.

The `writeHeader` function informs the Node.js HTTP server that the content should be served as HTML. The `write` function transmits the content received from `readFile`.

But clicking on the **Projects** link doesn't take you anywhere and the browser shows a different URL but nothing loads. Let us fix that.

We will create routes inside our application. Routes are an important part of the **Node.js** application and they are used to specify an URL path/pattern that is understood by the application to render or return some content.

The routes we create here specify the HTTP server and what content to serve based on the URL we are pointing to. This is similar to how APIs work, where a particular URL route provides a version of data as specified by the route.

To achieve this, we will read both the files and store their contents in a variable.

```js
const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";

fs.readFile("home.html", function (err, home) {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", function (err, project) {
  if (err) {
    throw err;
  }
  projectContent = project;
});
```

Now we will add our routes to the HTTP server function. Add the below code after the previous lines.

```js
http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000);
```

We can run the program again with `npm start`. We can see that the navigation from the Home page to the Project page works and vice versa.

We have successfully created a Node server that receives data and transmits the same to the browser, all with the help of inbuilt functions. In this level, we have covered the most common use cases with Node.js and npm and how we can use them to improve the quality of our application in general.

We will learn about more such use cases, for easier and meaningful implementations of the same, in the upcoming levels.
