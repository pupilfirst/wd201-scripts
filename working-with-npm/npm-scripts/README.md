# Text

In the previous lessons, we learned about the `package.json` and its usage in creating **Node.js** applications. We will learn more about the inbuilt features in `package.json` to make our development easier.

## `npm` scripts property

The `scripts` property of your `package.json` supports many built-in scripts. These all can be executed by running `npm run <stage>` for short.

The `<stage>` above refers to the pre-built stages available for `package.json` which we can configure or custom ones that we can create and execute using `npm`.

You can refer to the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) reference document for mode details on the options available to use with this property.

## Running your first **Node.js** program using `npm`

In the previous levels, you might have already created your first **Node.js** program. While running the same, you might have used the below command.

```js
node index.js
```

While this is the right way to run the **Node.js** code, when you have a huge application with many dependencies which need to be combined before execution this will become tedious.

Using `npm` scripts, we can solve this issue.

Navigate to the `package.json` in your **Node.js** application folder.

Update the following to the scripts attribute along with the test attribute.

```js
"start": "node index.js"
```

The final `package.json` will look something like the one below.

```js
{
"name": "hello-node",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"
}
```

Now to execute the **Node.js** program, all you have to do is to navigate to the folder of the application and execute the following command in Terminal.

```js
npm run start
```

You can notice that the above command internally executes the `node index.js` command and the result is displayed in the Terminal.

You can also use the above command without the `run` keyword, as the `start` function is added by default in the `package.json`.

```js
npm start
```

The above execution also returns a similar result.

You can also add custom scripts based on your project requirements. We will learn more about these while working on the future levels.
