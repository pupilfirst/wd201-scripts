# Script
In this lesson, we will add a **delete** icon for every To-Do item, and it should only show up on the mouse hover event.

>Action: Visit heroicons

For icons, we will use [heroicons](https://heroicons.com/), which has hundreds of simple and beautiful SVG icons. Also, it comes from the makers of **Tailwind CSS**.
Let's search for the delete icon, and from the results simply copy the **SVG** code.

Now, in our HTML, we will add this icon. Another point is, the delete icon must be wrapped by an anchor (`<a>`) tag as it has to be actionable.
```html
<a href="#!">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
</a>
```
Great! The icon is now visible. 

But the problem is, it's always visible. A better user experience would be to show the delete icon only when user hovers over the To-Do item. For that, we have to write some custom CSS.

To hide the *delete* link by default, we will add the `hidden` class to the `<a>` tag.
```html
<a class="hidden trash-icon" href="#!">
  ....
</a>
```
I've also added the `trash-icon` class which we will use later in our custom CSS.

Next, we'll add the `Todo-Item` classname to the outer` <li>` tag.
```html
<li class="Todo-Item">
  ....
</li>
```

After that, we have to write some custom CSS to show/hide the delete icon based on `hover` event. For the time being, we will add the custom CSS in the `<head>` section of this HTML file. Later we will move it to separate file.
```html
<style>
  .Todo-Item:hover .trash-icon{
    display: block;
  }
</style>
```

Now refresh the browser, Yes! the delete icon is showing and hiding as expected.

So, we've successfully designed the To-Do application. 

See you in the next lesson.