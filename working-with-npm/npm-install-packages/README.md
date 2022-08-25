​​In the previous levels, we learned about working with an object and how to use `npm` to set up and run or application using the package.json. We also learned about using the `fs` module and `stream` module from Node.js to increase the ease of use in our application.

We also learned previously about how to also get at CLI command, wherein we get a user input for a file name and then use it to render an application. While rendering files through user input might not be a common practice in web development, getting the user's input through multiple variables or arguments is.

In this lesson, we will learn about how to use `npm` and its features to create a better version of our application. We will also learn about importing user arguments from the command line and using them in our application.

# What is `npm install`

While using STDIN to get inputs as a valid scenario, it becomes complicated very soon when the number of arguments or variables sent to the application increases exponentially. This is where the `npm` ecosystem comes in for help, where we can use already created packages which solve this issue for us in a better manner.

One such package is called `minimist` which helps us get multiple arguments from the command line to our application. But before we learn about this package, let us understand how we will use it inside our application.

In the root folder of your application, run the following command in the terminal

```
npm install minimist
```

Now if you go to the root folder, you will see a new folder called `node_modules` is created. Inside that, you will find a folder called `minimist` with all the required files for that application being present. This is called a node module or note package, which we will in turn use in our application. These node modules provide additional functions for us to import and use in our code base.

# Using Minimist

The `minimist` module will analyze arguments we pass to the command line. It converts the argument list into an array for simpler use. In this array, you can use index names, as well as index numbers to retrieve the values.

Let us import `minimist` into our application by importing it into `index.js`. Let us start with the following command.

```js
const args = require("minimist")(process.argv.slice(2));

console.log(args);
```

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