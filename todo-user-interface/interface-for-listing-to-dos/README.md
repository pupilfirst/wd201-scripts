# Text
In this lesson, we will create a list of To-Dos as per the design, and we will also group them in three categories: *Due Today*, *Due Tomorrow*, *Remaining*.

# Script
We will start with creating a wrapper for the list of To-Dos, and inside that we will keep the three top level To-Do categories: *Due Today*, *Due Tomorrow*, *Remaining*.
```html
<div class="mt-2">
  <h5>Due Today</h5>       
  <h5>Due Tomorrow</h5>
  <h5>Remaining</h5>
</div>
```
Next, for every group we will create a list of To-Dos. And for that we will use `<ul>`.
```html
<h5>Due Today</h5>
<ul class="list-none pl-4">
  <li></li>
  <li></li>
</ul>
```

As per design, every To-Do item has a checkbox, description text, and an *overdue* indicator (for To-Dos which has gone past the due date and not completed yet). The checkbox will be used in future to mark a To-Do as *complete*.

So, inside the `<l1>`, we will organise these contents using a flexbox.
```html
<li>
  <div class="flex items-center w-fit my-2 px-2 py-1">
    <input id="todo-checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
    <label for="todo-checkbox-1" class="ml-2 text-sm text-gray-600 cursor-pointer">Submit Saas Project</label>
  </div>              
</li>
```
Here, the `id` of the input type checkbox and the `for` attribute of the label must be same. Otherwise you wont be able to toggle check-uncheck the checkbox by clicking on the label.

So let's add one more To-Do item
```html
<li> 
  <div class="flex items-center w-fit my-2 px-2 py-1">
    <input id="todo-checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
    <label for="todo-checkbox-2" class="ml-2 text-sm text-gray-600 cursor-pointer">Call accountant</label>
  </div>                            
</li>
```

Next, we can add the `Overdue` indicator for any Todo item.
```html
<li>
  <div class="flex items-center w-fit my-2 px-2 py-1">
    <input id="todo-checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
    <label for="todo-checkbox-1" class="ml-2 text-sm text-gray-600 cursor-pointer">Submit Saas Project</label>
    <span class="text-xs text-red-500 px-4">Overdue</span>
  </div>              
</li>
```

One final touch, on-hover of any To-Do item, we have to change it's background color. Let's add it.
```html
<li>
  <div class="flex items-center w-fit my-2 px-2 py-1 rounded hover:bg-purple-50">
    ....
  </div>
</li>
```

That's it, now we can replicate the same for other categories as well. 

In the next lesson, we will add the interface to delete a To-do. See you there.
