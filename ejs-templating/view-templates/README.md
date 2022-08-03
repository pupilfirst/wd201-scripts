# Text

In this section, we will learn about using EJS templating in the application. We will also learn how to make use of some important features of EJS to create reusable templates.

We will learn about importing CSS and JS into the EJS files. We will also learn how we can better organize and structure these files for our development purposes.

## Importing CSS and JS

Let us start by creating a new folder which will serve as the base for all content we create in CSS and JS.

Create a new folder with the name **public** inside our application, and also create a **css** folder within it.

Add **styles.css** inside it with the following content.

```css
body {
  font-family: sans-serif;
  background: #cccccc;
}
```

Next, let us add a link to this CSS file inside the `views/index.ejs` file. Include the following before the end of the `head` tag.

```html
<link rel="stylesheet" href="/css/styles.css" />
```

To load the files created in the **public** folder, add the below code to the `index.js` file.

```js
app.use(express.static(path.join(__dirname, "public")));
```

If we open `localhost:3000` now we can see that the styling we created is applied to the page.

Next to add JavaScript files, let us create a new **js** folder inside **public** folder and add `script.js` file inside it.

Let us, for now, add a simple `console.log` statement to check if the code is working.

```js
// script.js
console.log("First JS import on an EJS application!");
```

Saving this file does not restart the nodemon, as we have not configured it to listen to changes made in js files.

Let us change that by updating the config of `package.json` scripts. Replace the `start` script with the below code.

```js
"start": "nodemon -e js,ejs"
```

This makes sure that the nodemon listens for changes in all files with extensions `.js` and `.ejs`.

We can restart nodemon using `npm start` and we can see that the changes are reflected on the browser when we open `localhost:3000`.

## Organizing files using View Templates

EJS allows us to split a single file into separate files, so we can have common files that we can reuse across the application.

In our case, let us create a Header for the Todo application with the text "This is my Todo Application" as a common view template.

Let us create a new file called `header.ejs` in our application within the `views` folder.

Next, let's remove the `h1` element from the index.ejs to this newly created file.

To include the content from the `header.ejs` we use the following syntax.

```js
<%- include('header.ejs') %>
```

The file path provided inside the _include_ command is rendered inside the location of the above tag. In our case, we use it where the `h1` tag was earlier, so that the content from `header.ejs` is rendered there.

Similar to including files, we can also include variables in the HTML document using the following command.

```js
<p><%=variable_name%></p>
```

To display any value in the EJS file, we use the variable name between `<%=` and `%>`.

To write JavaScript code inside the EJS file, we use the function between `<%` and `%>`.

In the next levels, we will learn more about using the EJS templates and how to utilize the view templates to make our Todo application render in a much simpler and reusable way.
