# Text
In the previous lesson, you've learned about the key areas which you should keep in mind while designing a webpage. Now, it's time to use those principles to convert the To-Do manager design into a webpage. Let's get started.

# Script
In this lesson, we will start designing our To-Do manager application, to convert the design into a webpage.

We will start with the `index.ejs` file, which is present inside the `views` folder.

First, we will add the **TailwindCSS** into the `<head>` section of this EJS template. Previously, we've already introduced you to TailwindCSS, a utility-first CSS framework, packed with tons of CSS classes, which can be composed to build any webpage.
```html
<head>
  <title>TO-DO Manager</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

To check, if the Tailwind CSS is loaded properly, first will try to style `h1` tag present in `header.ejs`:
```html
<h1 class="text-2xl font-semibold text-gray-600">
  My Todo-list
</h1>
```
Great! It's working.

The background color is not looking that good, so in the `public/css/styles.css`, we will change it to **white**.
```css
body {
  font-family: sans-serif;
  background: #FFFFFF;
}
```

### Now, let's define the Layout
To define the layout, we will use Grids from TailwindCSS. You can read their [documentation](https://tailwindcss.com/docs/grid-template-columns) for more information.
As per the design image, the Todo-Manager is positioned at the center of the page, with even blank spaces on both left and right sides.
```html
<body>
  <div class="grid grid-cols-6">
    <div class="col-start-3 col-span-2">
      <%- include('header.ejs') %>
    </div>
  </div>
<body>
```
Here, `grid-cols-6` divides the whole screen into six columns, and `col-start-3` defines that our primary container will start from **third** column. `col-span-2` says the browser that the container will be 2 columns wide. Let's see the output in the browser.

> Action: Also show using the inspect element.

### Alright, now we will design the form
After the heading, we will start with the default `form` tag. As per the design, the form has three elements in a row:
- An input field to capture the To-Do text
- A date picker to get the *due date*.
- A form submit button.

To design this row layout, we will use CSS flexbox. TailwindCSS already has some [ready-made CSS classes](https://tailwindcss.com/docs/flex) to implement flexbox, let's use them.
```html
<form>
  <div class="flex gap-2 py-4">
    <div class="flex-auto w-64">
      <input type="text" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" placeholder="What's next?" autofocus required>
    </div>
    <div class="flex-auto w-32">
      <input type="date" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2 leading-4	">
    </div>
    <div class="flex-none">
      <button type="submit" class="text-white bg-green-600 hover:bg-green-700 font-medium rounded text-sm px-5 py-2 mr-2 mb-2">Add</button>
    </div>            
  </div>
</form>
```
> Action: go through the TailwindCSS classes once.

So, our form UI is ready. In the next lesson, we will design the To-Do list. See you there.