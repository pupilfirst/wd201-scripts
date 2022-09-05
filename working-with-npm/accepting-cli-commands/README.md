# Text

In the previous lessons, we learned about how to work with inbuilt features in **Node.js**. While they are very useful in creating applications, the **Node.js** CLI also provides some interesting options to work with user input.

Let us learn about how to use the CLI to get user input and use it for our application.

## Accepting input from CLI

Node.js has an inbuilt `readline` module to read input from a readable stream, such as the `process.stdin` stream, which is the one used by the CLI. This stream provides the input during the execution of a **Node.js** program, one line at a time.

Let us write a program to get the user's name and print a greeting for them.

```js
const readline = require("readline");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(`Please provide your name - `, (name) => {
  console.log(`Hi ${name}!`);
  lineDetail.close();
});
```

The above stream takes the input as a `string` to process the data.

Node.js CLI provides a lot more functionality with the `readline` module and the details of the same can be found [here.](https://nodejs.org/docs/latest-v16.x/api/readline.html)

## Using `npm` packages for CLI input

While using STDIN to get inputs as a valid scenario, it becomes complicated very soon when the number of arguments or variables sent to the application increases exponentially.

This is where the `npm` ecosystem comes in for help, where we can use already created packages which solve this issue for us in a better manner.

One such package is called `minimist` which helps us get multiple arguments from the command line to our application.

In the root folder of your application, run the following command in the terminal

```
npm install minimist
```

# Using Minimist to accept CLI input

The `minimist` module will analyze arguments we pass to the command line. It converts the argument list into an array for simpler use. In this array, you can use index names, as well as index numbers to retrieve the values.

Let us import `minimist` into our application by importing it into `index.js`. Let us start with the following command.

```js
const args = require("minimist")(process.argv.slice(2));

console.log(args);
```

​​In the above code, we use `process.argv` while importing `minimist`. The `process` is an inbuilt object in **Node.js** which gives you information about the current node process and ways to control it. You can read more about it [here](https://nodejs.org/docs/latest-v16.x/api/process.html#processargv). In the above case, we are using the `process` object to get the argument list using the `argv` attribute.

Now, let us run the above program using `npm` scripts. Run the command as below.

```
npm start -- --name Jane --age 32
```

You can see the below output on the terminal.

```js
{ _: [], name: 'Jane', age: 32 }
```

In the above code, we use the slice method of the `process.argv` global object. The slice method, in this case, removes all prior array elements starting from the index passed to it as the parameter. Here we know that the argument we manually pass is stored starting from the second index, we passed 2 to the slice function. We then printed the entire argument's object.

Minimist also has a few useful features like aliasing and defaults.

If you set an alias, then the argument of your program can use the alias in addition to the regular option name. This is useful if you want to have a short name for your variable options, as seen below:

```js
let args = minimist(process.argv.slice(2), {
 alias: {
   n: "name",
   a: "age",
 },
});
```

Running the above code with the `--n Jane` option sets both `n: 'Jane'` and `name: 'Jane'` in the output arguments.

As for minimist's defaults feature, if no value is passed for an option, then the default you set in your program will be used automatically.

```js
let args = minimist(process.argv.slice(2), {
 default: {
   greeting: "Hello",
 },
});
```

Running the above code without the `--greeting` option still yields you with a port value in the returned argument.

The features provided by many missed can be expanded to take in multiple arguments and said default values for making our application feature rich.

Next, we will create our first note JS program by using what we have learned so far to create an HTML rendering application.