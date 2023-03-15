# Text
In the previous lesson, we successfully installed **Node.js** and **npm** in our system. Now we will use `npm` to create our first node project.

### First project

Start your Node.js journey by creating a folder:

````
mkdir hello-node
cd hello-node
````

Then we run the `npm init` command, which is used to initialize a node project.
````
npm init
````
The generator will ask you a few questions, it’s OK to just press [enter] for all of them.

Then open the project folder in your favourite editor. If you have VS Code Editor, then just type the following command inside the project folder.
````
code .
````

#### The `package.json` file
In the editor, you would find that we’ve created a `package.json` file. 
```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

This file is the heart of a Node.js application. It contains a lot of meta-information about this project like the name of the project, description, current version, license, author of the project etc. And in future, once our project advances, we might need to install certain `npm` libraries. Then the **package.json** file will hold the list of all such dependencies for this project, with specific version numbers.

You can read more about package.json in [this article](https://heynode.com/tutorial/what-packagejson/).

Currently, the `package.json` file of node application points to non-existing `index.js` file and has no dependencies.

#### Let’s write some code
Let's get started by creating an `index.js` file, with a simple `hello` function.
```js
function hello() {
  console.log("Hello Node.Js! Trying it for the first time");
}

hello();
```

This code would print some text to the console. Here we've used a `function`, just to add some more complexity, we could simply do `console.log("Hello Node.js!")` without writing any function as well.

#### Let’s run the code
The easiest way to run this program is by using the `node <filename.js>` command in the project directory:
````
node index.js
````
You should see the output, **Hello Node.Js! Trying it for first time** printed into the terminal. Congratulations! You just ran your first Node.js program!
