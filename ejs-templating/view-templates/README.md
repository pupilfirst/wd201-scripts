# Text 

In this level we will learn about using EJS templating in the application. We will also learn how to make use of some important features of EJS to create reusable templates.

We will learn about importing CSS and JS into the EJS files. We will also learn how we can better organize and structure these files for our development purposes.

## Importing CSS and JS

Let us start by creating a new folder which will serve as the base for all content we create in CSS and JS. 

Create a new folder with the name **public** inside our application and also create a **css** folder within it.

Add **styles.css** inside it with the following content.

```css
body {
  font-family: sans-serif;
  background: #cccccc;
}
```

Next let us add a link to this css file inside the `views/index.ejs` file. Include the following before the end of `head` tag.

```html
<link rel="stylesheet" href="/css/styles.css" />
```

To load the files created in the **public** folder, add the below code to the `index.js` file.

```js
app.use(express.static(path.join(__dirname, "public")));
```

If we open `localhost:3000` now we can see that the styling we created is applied to the page.

Next to add JavaScript files, let us create a new **js** folder inside **public** folder and add `script.js` file inside it.

Let us for now add a simple `console.log` statement to check if the code is working.

```js
// script.js
console.log("First JS import on an EJS application!");
```

SAving this file does not restart the nodemon as we have not configured it to listen to changes made in js files.

Let us change that by updating the config of `package.json` scripts. Replace the `start` script with the below code.

```js
"start": "nodemon -e js,ejs"
```

This makes sure that the nodemon listens to changes in all files with extension `.js` and `.ejs`.

Wee can restart nodemon using `npm start` and we can see that the changes are reflected on the browser when we open `localhost:3000`.









