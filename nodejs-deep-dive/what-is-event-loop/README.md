# Text
In this lesson we will learn about the concept of **event loop** and **call stack** in Node.js.

In Node.js, JavaScript code runs on a single thread. This means it can handle one task at a time or a piece of code at a time. Thus, two statements in JavaScript can not be executed in parallel. Execution happens line by line, which means each line of JavaScript code (or statements) is synchronous.
But there is a way to run your code asynchronously. For example, you can use `setTimeout()` function, a Web API given by browser, which makes sure that your code executes after specified time (in millisecond). Let's take a look
```js
console.log('Hello 1');

// Print message after 100 millisecond
setTimeout(function() {
   console.log('Hello 2');
}, 100);
console.log('Hello 3');
```
Here, `setTimeout` takes a callback function as first parameter, and time in millisecond as second parameter.

After executing above statements, browser will print Hello 1” & Hello 3” first, then it will print Hello 2”. This is where event loop comes in, which makes sure your asynchronous code runs after all the synchronous code is done executing.

# Script 
### The call stack
Node.js has a single **call stack**, which along with other parts like *heap*, *queue* constitutes the JavaScript's concurrency behaviour.
The Call Stack is a data structure which records the function calls - which basically indicates where exactly in the program we are. If we *call* a function to execute, we *push* something on to the stack, and when we *return* from a function, we *pop* off the top of the stack.

The event loop continuously checks the call stack to see if there's any function that needs to run. Let's see a simple event loop implementation:

```js
const firstName = () => console.log('John');

const lastName = () => console.log('Doe');

const printName = () => {
  console.log('My name is:');
  firstName();
  lastName();
}

printName();
```
When this code runs, first `printName()` is called. Inside `printName()` we first call `firstName()`, then we call `lastName()`.

At this point the call stack looks like this:
> Action: Show the presentation 1 of call stack from google drawing.

The event loop on every iteration looks if there's something in the call stack, and executes it:
until the call stack is empty.
> Action: Show the presentation 2 of call stack from google drawing.

### A complex example
The previous example was bit simple, it's normal execution that happened as usual like any other programming language. Let's see a bit more complex call stack with an example of `setTimeout()`.

```js
const firstName = () => console.log('John');

const lastName = () => console.log('Doe');

const printName = () => {
  console.log('My name is:');
  setTimeout(firstName, 0);
  lastName();
}

printName();
```
The output would be:
````
My name is:
Doe
John
````
Wait, why did the last name get printed before the first name here?
Actually, when this code runs, first `printName()` is called. Inside `printName()` we first call `setTimeout`, passing `firstName` as an argument, and we instruct it to run immediately as fast as it can, passing 0 as the timer. 

When `setTimeout()` is called, the Browser or Node.js starts the timer. Here another important component named **Message Queue** comes into the picture. Once this timer expires, the callback function (firstName in this case) is put in the **Message Queue**.

The Message Queue is a place where events like: click, keyboard inputs or fetch requests are queued, before they can execute.

The event loop gives more priority to the pending items on the *call stack*, and once there's nothing in there, it goes to pick up things in the *message queue*.

The call stack of this code block would look something like this:
> Action: Show the presentation 2 of call stack from google drawing.

That's a short introduction to the event loop and call stack, see you in the next lesson.

<!-- ### Now what is the relevance of the Event Loop?
When we evaluate the performance of our JS code, a function in a *call stack* can make it slow or fast, for example: a `console.log()` will be fast, but performing iteration with `for` or `while` over thousands or millions of line items will be slower and it will keep the stack occupied or blocked. This is termed as blocking script.

Similarly, network requests can be slow, image requests can be slow. But thankfully the server requests can be done through AJAX, an asynchronous function. 

What if, these network requests are made through synchronous functions, then what would happen? The network requests are send to some server will eventually take some time to respond. In the meantime , if I click some CTA button, or some other rendering needs to be done, nothing will happen as the stack is blocked. In multi threaded language like Ruby, it can be handled, but in single threaded language like Javascript, this is not possible unless function inside the stack returns a value.  -->
