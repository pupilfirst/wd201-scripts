# Text

## Problem Description
To complete this milestone, you have to work on top of the To-Do manager application that we've just created using Closure.

Your program must output a to-do list that looks like this:
````
My Todo-list

Overdue
[ ] Submit assignment 2022-07-21


Due Today
[x] Pay rent
[ ] Service vehicle


Due Later
[ ] File taxes 2022-07-23
[ ] Pay electric bill. 2022-07-23
````
  
```js
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = (item) => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const dueToday = (item) => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const dueLater = (item) => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var d = new Date();
const today = formattedDate(d)
const yesterday = formattedDate(new Date(d.setDate(d.getDate() - 1)))
const tomorrow = formattedDate(new Date(d.setDate(d.getDate() + 1)))

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue\n")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today\n")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedTodaydues)
console.log("\n\n")

console.log("Due Later\n")
let itemsDueLater = todos.dueLater()
var formattedlaterdues = todos.toDisplayableList(laterdues)
console.log(formattedItemsDueLater)
console.log("\n\n")
```  
####  Please read the following notes:

1. For todos that are due today, do not show the date. For all other todos, show the date.
2. Do not print anything (using `console.log` for example) in the code you write. All methods should just return a value - it is the calling code's responsibility to print to screen (like in `console.log todos.toDisplayableList(laterdues)`). This means `toDisplayableList` should return a string that is printable.
3. Do not implement any extra features since this makes grading your assignments difficult. For the given input, the output should be exactly as given in the assignment.
4. Ensure proper naming and formatted code.
   
Have fun!