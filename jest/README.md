## Script

In this lesson, we will learn how to test our JavaScript codebase using the `jest` framework.

> Action: todo open https://jestjs.io/ in browser

According to the website,

> "Jest is a delightful JavaScript Testing Framework with a focus on simplicity."

Also, it works with Node.js, React, Angular etc. Basically, it supports testing popular JavaScript libraries and frameworks.

Let's open our project in Visual Studio Code and add `jest` to our project. Let's head to the integrated terminal and run the command.

> Action: run following command

```sh
npm install jest --save-dev
```

We now have jest in our package.json as a dev dependency. Let's replace the `test` command in the `scripts` section in `package.json` file to use `jest`

> Action: Open package.json in editor, and edit the npm test script

```json
  "scripts": {
    "test": "jest"
  }
```

Now, let's try running the test script. We will use the npm script that we edited to run the test suite.

> Action: switch to the terminal and run the following command.

```sh
npm test
```

We can see that `jest` is complaining that it didn't find any tests. With the default configuration, jest looks for files in `__tests__` folder or files with name that ends with `.spec.js` or `.test.js`.

Let's create a folder with name `__tests__` and create a file named `first.js`

> Action: create a folder in project root with name `__tests__` and a file with name `first.js`.

We do testing by having different test suites, with several test cases within a suite.

Jest comes with various `globals` that can be used in tests without explicitly importing it.

> Action: open https://jestjs.io/docs/api and highlight the `Globals` and `Expect`.

The `describe` can be used to group together related tests. And each such test can be written using `test` block. Also we assert or check the correctness using the `expect` construct. Let's write our first test using `Jest`.

> Action: switch VS Code and open the `first.js` file.

```js
describe("First Test Suite", () => {
  test("My First Test Case", () => {
    expect(true).toEqual(true);
  });
});
```

The `describe` takes two arguments, the first one is the test suite name. The second one is a method which wraps all the related tests in the suite.

Here let's verify whether the value `true` is equal to `true`. Save the file. Let's head to the terminal and run the command again.

> Action: run the test command again

```sh
npm test
```

Now, we can see that, jest picks up our file and it reports everything has passed. Let's see what happens when we change the test and make it fail intentionally.

> Action: edit the test

```js
describe("First Test Suite", () => {
  test("My First Test Case", () => {
    expect(true).toEqual(false);
  });
});
```

Here, we are expecting the value `true` to be equal to `false`, which is obviously not correct. Let's see what jest reports.

Switch to the terminal and run the command again.

> Action: Run the test command again.

```sh
npm test
```

Now, we can see Jest reporting error.


We can now try to write tests for our todo application. Let's remove `first.js` file. And create a file named `todo.test.js`

> TODO: Add test according to example from previous level.


### Conclusion

So, in this lesson, we have learned how to use Jest and write test cases. See you in the next lesson.


## Text

[Jest](https://jestjs.io/) is a testing framework that supports testing of React, Node.js, Angular projects. We can add jest to our project by running the following command.

```sh
npm install jest --save-dev
```

To run our tests using jest, edit the `package.json` file to contain the test script.

```json
"scripts": {
    "test": "jest"
  }
```

By default `jest` looks for tests in folder named `__tests__` or files that end with `.test.js` and `.spec.js`.
