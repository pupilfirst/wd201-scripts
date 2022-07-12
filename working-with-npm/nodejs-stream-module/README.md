# Text

In the previous lessons, you might have learned about **Node.js** and the `fs` module and how we can use their features to make interacting with the file system on our applications simpler.

In this lesson, we will learn about another major Node.js inbuilt feature called `streams` which also is mostly used in the case of file system operations.

## What are **Node.js** `streams`

Streams are a fundamental concept that powers Node.js applications.

They are a method of efficiently handling file reading/writing, network communications, or any other type of end-to-end information exchange. For example, when you ask the program to read a file, the file is read into memory from beginning to end and then processed.

Using streams, you read the files in small pieces, processing the content without having to keep it all in memory.

The Node.js stream module serves as the foundation for all [streaming APIs](https://nodejs.org/docs/latest-v16.x/api/stream.html).

## Benefits of using `streams`

Memory benefits where you don't have to load large amounts of data into memory before you can process it.

Time benefits where it takes limited time to begin processing data because you can start it as soon as you start receiving the data, instead of waiting for the entire data to be available.

## Reading a File using `stream`

We have already learned about using fs to read from a file in Node.js. Let us try using streams to do the same operation.

Let us use the example from the previous lessons and add an HTTP server where the content will be served as an output.

```js
// Using fs

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("sample.txt", (err, data) => {
    res.end(data);
  });
});
server.listen(3000);
```

`readFile()` here, reads the entire file contents and then calls the callback function.

The callback function `res.end(data)` returns the file contents to the HTTP client.

If you point the browser to `localhost:3000` you can see the content of the file there.

This is simpler when you have limited content in your file. Assume having millions of lines of data to read from a file, where the callback function might take a lot of time to get executed.

Let us try to rewrite the same using `streams`.

```js
// Using streams

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
});
server.listen(3000);
```

Rather than waiting for the file to be read entirely, the above function starts streaming it to the HTTP client as soon as it has some bits of data ready to send.

The above code uses the `pipe()` function which is used to get the data from a source, in our case the text file and pipe (guide) it to the destination, in this case, the HTTP location `localhost:3000`.

Most Node.js core modules provide stream handling capabilities, as this provides a lot of advantages. There are multiple types of `streams` available for different functions, and a combination of them can be used to solve different problems in your applications.

You can learn more about `streams` [here](https://nodejs.org/docs/latest-v16.x/api/stream.html)
