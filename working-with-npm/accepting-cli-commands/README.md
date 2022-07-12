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

Now, let us try and use the CLI to get user input to write our read content from a file function.

```js
const http = require("http");
const fs = require("fs");
const readline = require("readline");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(`Please provide the full file path - `, (path) => {
  const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(`${path}`);
    stream.pipe(res);
  });
  lineDetail.close();
  server.listen(3000);
});
```

The above code gets the user input for the file path to the file we want to read, and then streams the result to the HTTP client at `localhost:3000`.

Node.js CLI provides a lot more functionality with the `readline` module and the details of the same can be found [here.](https://nodejs.org/docs/latest-v16.x/api/readline.html)

There are other options to use for CLI interaction using packages like [Inquirer.js](https://github.com/SBoudrias/Inquirer.js), but for the limited use cases, we can work with the `readline` module that satisfies all scenarios.
