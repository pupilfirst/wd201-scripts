# Text
In this lesson, you will learn a very key concept of JavaScript, the **Closures**. 

You probably haven't heard of the term *closure* previously, and it is not very self-explanatory either. From today onwards, you can remember it with a reasonably simple term (or synonym) - Legacy! Why? Let's find out.

### What is a closure?
A closure is a feature in JavaScript, where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

- it has access to its own scope — that means the variables defined between its curly brackets
- it has access to the outer (or parent) function’s variables
- it has access to the global variables

Let's understand with a simple example:
```js
function generateGreetings(name) {
  function spanish() {
    console.log(`Hola ${name}!`);
  }
  function english() {
    console.log(`Hello ${name}!`);
  }
  return {spanish, english};
};

const name = 'John';
const greetings = generateGreetings(name);

console.log(typeof(greetings.spanish)); // function

greetings.spanish(); // Hola John!
greetings.english(); // Hello John!
```
Here we have three functions:
- an outer function `generateGreetings` which has a argument `name`, and returns two functions `spanish` and `english`.
- the two inner functions `spanish` and `english` has access to `name`, which is an argument passed to the parent function `generateGreetings`.

Which means, the arguments, variables defined in parent function is captured and stored in child function, till it goes out of scope or destroyed.

#### How does JavaScript handle this?
##### Answer: **Closures**

The *child* function can access the variables of the enclosing function due to **closures** in JavaScript. In other words, during the course of execution, the *parent* function passes its *scope chain* to the *child* function as **legacy**, and thus *child* function can access the ***legacy variables***.

In our example, the two functions `spanish` and `english` had preserved the legacy variable `name` when the `generateGreetings()` function was executed, and continued to preserve (closure) it.

#### To Conclude
Closures are one of those subtle concepts in JavaScript that are difficult to grasp at first. But I think, if you can recall **the Legacy analogy**, then you'll remember it forever.


