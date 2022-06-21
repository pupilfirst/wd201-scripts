## Text

### What is Testing?

Software testing is evaluating and verifying that software does what it is supposed to do. Testing can vary from validating a few lines of code to verifying a full-fledged system feature.

### Why do we need testing?

The most important reason to have a test suite is that people write software. And people make mistakes. These mistakes can be costly if not detected and fixed early. With tests, we have proof that the system works as we have intended.

### Types of testing

There are various types of testing. But, we will mainly look into:

- Unit test
- Integration test

### Unit testing

Unit testing is a software development process in which the minor testable parts of an application, called units, are individually and independently scrutinized for proper operation. By writing unit tests, we ensure that different system parts perform their function correctly. This can act as a building block for the validation of the entire system. Let's see how we can write a unit test for the sample todo application. We can write a test to validate if the function `toggleTodoCompleteStatus` works as intended. We can use `console.assert` to assert the conditions.

We have a wrong implementation here, which doesn't change the completion status.

```js
// assert.js

let toggleTodoCompletedStatus = (todoItem) => {
  return todoItem;
};

let testToggleCompletion = () => {
  let item = {
    title: 'Buy Milk',
    completed: false,
  }
  item = toggleTodoCompletedStatus(item);

  console.assert(item.completed === true, 'Todo item should be completed');

}

testToggleCompletion()
```
If we run the following program, we will get an `Assertion failed: Todo item should be completed` error message.

```sh
node assert.js
```
If we replace the `toggleTodoCompletedStatus` with the correct implementation, the error goes away.

```js
let toggleTodoCompletedStatus = (todoItem) => {
  todoItem.completed = !todoItem.completed;
  return todoItem;
};
```
Here, we only tested a single function, which is how unit tests can help test each component in an extensive system.


### Integration test

Integration tests ensure that different modules or units in the system work together in harmony and produce the desired output. All modules or a few other modules are combinedly tested. Integration test is black-box testing, where the tests don't care for internal design.

An example for an integration test will be to check if the todo `title` text field has been cleared on adding a new entry. Another example will be to verify if the user gets redirected to the homepage after authentication etc.
