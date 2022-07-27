# Text

In the previous lessons, we learned about **Node.js** and `npm` and how we can use their features to make our development easier.

In this lesson, we will learn about some major Node.js inbuilt features that you might use for your application development.

Node.js provides a lot of inbuilt modules for developers to work with. One such important module is the `fs` module, or the File system module. We will have a quick overview of what the `fs` module does and how you can use it to interact with your files. We will also learn to use some of its more common functions.

## Node.js `fs` module

The Node.js file system module allows you to work with the file system on your computer. It provides many beneficial functions to access and interact with the file system.

There is no need to install it separately. Being part of the Node.js core, it can be used by simply importing it using the `require` statement.

Let us open the file we created previously for our first node.js application. Clear the contents of the file. Enter the following code on the first line of the file to include the `fs` module.

```js
const fs = require("fs");
```

The Node.js `fs` module is used for some common tasks on the file system as follows:

— Read files
— Create files
— Update files
— Delete files
— Rename files

## Asynchronous vs Synchronous methods in **Node.js**

Before we learn more about using the `fs` module, it is better to have an understanding of how some functions/methods work in Node.js.

While using the built-in functions, you get an option to use both asynchronous and synchronous functions.

Asynchronous functions are defined as those that do not block the execution of the current program. Each step in our code is executed after the previous step, even if the previous step is not completed. The previous step runs in the background and loads the result once it has finished processing.

It is generally better to use asynchronous functions because they do not prevent the application from running until its processing is complete, whereas synchronous functions do.

## Write a new file using `fs`

Let us learn how we can use `fs` to write a new text file.

We will start by creating a text file `sample.txt` in the sample folder of our application where we have the **index.js** and **package.json**

Now let us try to write the content of the file using Node.js `fs`. The `fs` module provides us with two options to write files to the file system, `writeFile` and `writeFileSync`. Both perform the same operation, but in different ways.

The `writeFile` is an asynchronous function, which will return immediately before the file has been written and only its callback function will be run when the write operation is completed. In the case of `writeFileSync`, it will block all other execution until the file has been written/created.

> Note: A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. In our case after our `writeFile` function is completed.

Here we can use the `writeFile` function to write a new file to the file system, with our content.

```js
fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  function (err) {
    if (err) throw err;
    console.log("File created!");
  }
);
```

When you run this file using the `npm start` command, you can see that the new file is created in the application folder with the content we provided.

## Read file using `fs`

Let us learn how can we use `fs` to read a text file and print the data.

We will try to read the content of the file we created earlier using Node.js `fs`, `readFile` or `readFileSync`.

We will now use the `readFile` function to read the above file from the file system. First, we will read the file and use the `toString()` function to convert the data received to a string to display the same in the console.

```js
fs.readFile("sample.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
```

When you run this file using the `npm start` command, you can see that the content of the file is displayed on the Terminal.

## Other functions with `fs`

We can use other built-in functions to append content to the file created, rename the file and delete the same. Let us see how these can be achieved through the below code examples.

We can use `appendFile()` to add more content to the file already created.

```js
fs.appendFile("sample.txt", " This is my updated content", function (err) {
  if (err) throw err;
  console.log("File updated!");
});
```

We can use `rename()` to rename an existing file.

```js
fs.rename("sample.txt", "test.txt", function (err) {
  if (err) throw err;
  console.log("File name updated!");
});
```

We can use the `unlink()` to delete the files in the file system.

```js
fs.unlink("test.txt", function (err) {
  if (err) throw err;
  console.log("File test.txt deleted successfully!");
});
```

The `fs` module provides a lot more functionalities to perform more complex file tasks, such as reading from multiple files at once or writing formatted data. We can learn more about the same on the [`fs` module documentation](https://nodejs.org/docs/latest-v16.x/api/fs.html).
