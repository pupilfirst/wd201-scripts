# Text

In this lesson, you will learn about the `package.json` file and why it is the basis of any **Node.js** application.

Any **Node.js** project or `npm` package is built around the `package.json` file. It stores project information describing the details of the project and its dependencies. It is made up of a single object in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) that stores information in key-value pairs.

There are only two required fields: “name” and “version”, but it's a good idea to provide additional information about your project that fellow developers might find useful.

## Creating a new `package.json`

Let us start by creating a new folder for our application. Let us call it 'my-node-app'.

While in your Terminal, navigate inside your application folder.

```js
cd my-node-app
```

Next, we will create a new `package.json` file for our application.

We have two options to create a `package.json` file.

1. Create a new file called `package.json` and manually enter the configuration.
2. Use the `npm` CLI that we discussed earlier to generate one for us automatically.

In our scenario, let us use the second method to create one.

In your Terminal, while inside the application folder, enter the following command.

```js
npm init
```

It will execute and ask for a few details to create your `package.json`. First input the name of your package, in our case `my-node-app` and press enter.

> The "name" field contains your package's name, must be lowercase and one word, and can contain hyphens and underscores.

Next, the CLI asks for the version. Just press enter as it will take version `1.0.0` as the default version number for your application.

Next, we need to enter the description of the application. We can input `My first node application` and press enter.

Next, the CLI requires us to provide an entry point, which is the file which gets executed first when this application is run. Just press enter to default it to `index.js`.

Just press enter to the set of questions asked next as they are not mandatory requirements for a `package.json` file. These can still be updated at a later point in time.

After the last Enter is pressed, the `npm` CLI creates a base `package.json` file and shows a preview of the file on the Terminal window. If we are sure about the changes just type in `yes` on the terminal and press enter.

The CLI creates a new package.json file with the details we entered above.

We can go to our application folder and open this `package.json` file created in the code editor we use.

Following would be the details of the file we just created using CLI.

```js
{
 "name": "my-node-app",
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

## Setting defaults to `package.json`

You can use the init command to configure the `package.json` with default configuration options. On the Terminal, we can run the following commands to set the default author email, and author name.

```js
npm set init.author.name “Jane Doe”
npm set init.author.email “jane.doe@gmail.com”
```

We will learn more about the other options on `package.json`, which we will use, to configure what dependencies are used and how the application runs in the following lessons.
