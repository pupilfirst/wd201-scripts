# Text
In this lesson, we will apply our knowledge of JavaScript **Closures**, to create a simple To-Do manager. 

### The plan
The plan is:
- We will create a *parent*(in context of closure) `todoList` function.
- Inside `todoList`, we will define two *child* functions `add` and `update` to perform respective operations.
- And in the end, we will make sure that the `todoList` function returns the *list of all todos* along with the `add` and `update` function.

### The implementation
In this lesson, we will make use of the Node.Js REPL. Open the terminal and run with the `node` command to go inside the REPL mode.

So, let's get started.

First, we will define the `todoList` function.
```js
function todoList() {
  all = []
```
Here, we will keep the list of all todos inside the `all` array.

Next, let's define the` add()` function.
```js
function todoList() {
  all = []
  function add(todoItem) {
    all.push(todoItem)
    console.log(all)
  }
```
The `add()` function takes a `todoItem` as argument, and pushes into the `all` array.

Similarly, we will define the `update()` function.
```js
function todoList() {
  all = []
  function add(todoItem) {
    all.push(todoItem)
    console.log(all)
  }
  function update(index, updatedTodo) {
    all[index] = updatedTodo
    console.log(all)
  }
```
Here, the `update()` function takes two arguments, `index` and `updatedTodo`. It updates the `all` array with the `updatedTodo` using the array index.

To complete the `todoList` function, we will return the `all` array and `add`, `update` functions.
```js
function todoList() {
  all = []
  function add(todoItem) {
    all.push(todoItem)
    console.log(all)
  }
  function update(index, updatedTodo) {
    all[index] = updatedTodo
    console.log(all)
  }
  return { all, add, update };
}
```

### Let's test it out
First, in the terminal, we will call the `todoList()` function.
````
> const todos = todoList()
````

Now, you will be able to see the list of all todos by:
````
> todos.all
[] // It will return an empty array
````

To add a new To-Do:
````
> todos.add('I need to go to gym')
['I need to go to gym'] // Output
> todos.add('Have to buy potato')
['I need to go to gym', 'Have to buy potato'] // Output
> todos.all
['I need to go to gym', 'Have to buy potato'] // Output
````

To update a To-Do
````
> todos.update(1, 'Have to buy tomato') // Here 1 is the array index
['I need to go to gym', 'Have to buy tomato'] // Output
````

So, it's working!

As we've learned before, in this example, the two functions `add` and `update` had preserved the legacy variable `all` when the `todoList()` function was executed, and continued to preserve (closure) it.


