# Text
In this lesson, you will learn a very key concept of JavaScript, the **Closures**. 

You probably haven't heard of the term *closure* previously, and it is not very self-explanatory either. From today onwards, you can remember it with a reasonably simple term (or synonym) - Legacy! Why? Let's find out.

### What is a closure?
A closure is a feature in JavaScript, where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

- it has access to its own scope — that means the variables defined between its curly brackets
- it has access to the outer function’s variables
- it has access to the global variables

Let's understand with a simple example:
```js
function parent() {
    var house = 'Home Sweet Home';
   
    function child() {   
        var mobile = 'iPhone 13'; 
        console.log('I have: ', house, mobile);
    }
   
    return child;
}
var legacy = parent();
console.log(typeof(legacy)); //legacy is of type function
legacy(); // Output: I have: Home Sweet Home iPhone 13
```

Here we have two functions:
- an outer function `parent` which has a variable `house`, and returns the `child` function
- an inner function `child` which has its variable called `mobile`, and accesses a parent variable house, within its function body

Here, the scope of variable `house` is limited to the `parent` function, and the scope of variable `mobile` is limited to the `child` function.
When we called the `parent()` function, the result of the `parent()` function is stored in  `legacy` variable.

So let’s examine, step-by-step, what happens when `legacy()` function is called:
1. Variable `mobile` is created, and its value is set to `iPhone 13`.
2. When JavaScript tries to execute `console.log('I have: ', house, mobile)`, something interesting happens. JavaScript knows that `mobile` exists, since it just created it. However, variable `house` no longer exists. Since it is part of the `parent` function, `house` would only exist while the `parent()` function is in execution. Since the `parent()` function finished execution long before we invoked `legacy()`, any variables within the scope of the `parent` function cease to exist, and hence variable `house` no longer exists.

#### How does JavaScript handle this?
##### Answer: **Closures**

The `child` function can access the variables of the enclosing function due to closures in JavaScript. In other words, during the course of execution, the `parent` function passes its *scope chain* to the `child` function as **legacy**, and thus `child` function can access the ***legacy variables***.

In our example, the `child` function had preserved the legacy variable` house='Home Sweet Home'` when the `parent()` function was executed, and continued to preserve (closure) it.

On `child()` function execution, it now refers to its own scope chain and notices that it does have the value of variable `house` within its scope chain, since it had ***preserved the legacy variable*** `**house**` within a closure at the point when the `parent` function had executed.

Thus, JavaScript knows `mobile='iPhone 13'` and `house='Home Sweet Home'`, and can execute `console.log('I have: ', house, mobile);`.


#### To Conclude
Closures are one of those subtle concepts in JavaScript that are difficult to grasp at first. But I think, if you can recall **the Legacy analogy**, then you'll remember it forever.


