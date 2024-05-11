### Video Script showing the development environment and process to be followed while going through the WD courses

**Introduction**

Hello, everyone! Over our last few lessons, we've focussed setting up our development environment. We've installed and configured a range of tools including WSL, Ubuntu, Visual Studio Code, Prettier, ESLint, Git, and GitHub. Now, it's time to see these tools in action. Today, we're going to build a simple Todo Application. This will help us understand how these tools work together to enhance our development workflow. In the upcoming lesson, you'll learn how to build a more professional and robust todo manager application. This session is designed to familiarize you with the development process that you should follow throughout the course.

**Setting Up the Project**

1. **Creating the Project Folder**

   - First up, let's create our project directory. Open your terminal and type `mkdir TodoApplication` followed by `cd TodoApplication` to navigate into our new folder.

2. **Opening in Visual Studio Code**
   - To open this project in Visual Studio Code, simply type `code .` in the terminal. This command opens up VS Code right in our project directory, ready for us to start coding.

**Initializing the Project**

1. **Git Initialization**

   - Our first step in version control is initializing a Git repository. By typing `git init`, we begin tracking the changes in our project.

2. **Creating the Files**

   - Let's create a files for our project. Type `touch index.html app.js README.md` in the terminal to create these files. Now, let’s fill them with content.

3. **Writing the README**

   - In `README.md`, we'll add a brief description: `This project demonstrates our developer setup.` Simple, yet informative.

4. **Writing Html Code**

- In `index.html`, let's construct the layout for our Todo application, including elements for input and listing todos.

```html
<!DOCTYPE html>

<html lang="en">
<head>
   <meta charset="UTF-8" />

   <title>Todo List App</title>

   <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
   />
</head>

<body class="bg-gray-100 h-screen">
   <div class="container mx-auto p-8">
      <h1 class="text-2xl font-bold text-center mb-6">Todo List App</h1>

      <div class="mb-4">
      <input
         type="text"
         id="todo-input"
         placeholder="Add a new todo"
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button
         onclick="addTodo()"
         class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
      >
         Add Todo
      </button>
      </div>

      <ul id="todo-list" class="list-disc space-y-2"></ul>
   </div>

   <script src="app.js"></script>
</body>
</html>
```

5.  **Writing Javascript code**

    - In `app.js`, let's develop the JavaScript functions to add and display todos.

      ```javascript
      let todos = [];

            function addTodo() {
            const input = document.getElementById('todo-input');
            if (input.value.trim() !== '') {
               todos.push(input.value.trim());
               input.value = '';
               renderTodos();
            }
            }

            function renderTodos() {
            const list = document.getElementById('todo-list');
            list.innerHTML = '';
            todos.forEach((todo, index) => {
               const listItem = document.createElement('li');
               listItem.textContent = todo;
               list.appendChild(listItem);
            });
            }
      ```

**Version Control with Git**

1.  **Initial Commit**
    - Now that we have our initial files, it's time to make our first commit. Run `git add .` to stage our changes, then `git commit -m 'Initial setup of Todo Application.'` to commit them. This marks the beginning of our project’s history.

**Using Prettier for Formatting**

1. **Introducing Formatting Issues**

   - Let's intentionally introduce some formatting inconsistencies in our `app.js` file, like misaligned brackets and inconsistent spacing.

2. **Applying Prettier**
   - After saving the file, Prettier automatically formats our code upon save. Ensure 'Format On Save' is enabled in VS Code settings to see this in action. Our code now looks much cleaner and adheres to standard formatting guidelines.

Refer to this [target](https://www.pupilfirst.school/targets/18691) for Installing the Prettier VSCode extension.

### Enhancing Code Quality with ESLint

1. **Setting Up ESLint**

   - To further improve our code quality, we install ESLint by running `npm install eslint --save-dev`. After installation, we'll set it up by running `npx eslint --init` to configure ESLint according to our project needs.

2. **Introducing a Common Mistake**

   - Now, let's introduce a common JavaScript mistake in our `app.js` file. We'll forget to use the `let` keyword when declaring a new variable in the `addTodo` function. Here’s the updated `app.js`:

     ```javascript
     todos = []; // Missing 'let' keyword

     function addTodo() {
       const input = document.getElementById('todo-input');
       if (input.value.trim() !== '') {
         todos.push(input.value.trim());
         input.value = '';
         renderTodos();
       }
     }

     function renderTodos() {
       const list = document.getElementById('todo-list');
       list.innerHTML = '';
       todos.forEach((todo, index) => {
         const listItem = document.createElement('li');
         listItem.textContent = todo;
         list.appendChild(listItem);
       });
     }
     ```

3. **Resolving ESLint Warnings**

   - Upon saving the file, ESLint immediately flags the absence of the `let` keyword, which could lead to `todos` being treated as a global variable. This can cause unexpected behavior in larger applications. We should correct our code as per ESLint's recommendation:

     ```javascript
     let todos = [];

     function addTodo() {
       const input = document.getElementById('todo-input');
       if (input.value.trim() !== '') {
         todos.push(input.value.trim());
         input.value = '';
         renderTodos();
       }
     }

     function renderTodos() {
       const list = document.getElementById('todo-list');
       list.innerHTML = '';
       todos.forEach((todo, index) => {
         const listItem = document.createElement('li');
         listItem.textContent = todo;
         list.appendChild(listItem);
       });
     }
     ```

     By adhering to ESLint's suggestions and declaring `todos` properly with `let`, our code becomes more reliable and less prone to errors.
     
     Refer to this [target](https://www.pupilfirst.school/targets/18909) for detailed instructions on Code quality using ESLint.

   - With our code refined by Prettier and ESLint, it's time for the commit. Run `git add .` and then `git commit -m 'Refine code with Prettier and ESLint.'` Lastly, we push our project to GitHub with `git push origin main`, showcasing our clean, well-maintained project to the world.

**Enhancing Functionality with "Remove Todo" Feature**

Building upon our existing JavaScript code, let's enhance our Todo application by adding a feature that allows users to remove todos. This functionality will improve user interaction by allowing them to delete tasks they no longer need to track.

1.  **Updating the `renderTodos` Function**

    - First, we will modify the `renderTodos` function to include a "Remove" button next to each todo item. This button will trigger the removal of the todo item from the list.

```javascript
function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = todo;

    // Create a remove button for each todo
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.color = 'red';
    removeBtn.onclick = function () {
      removeTodo(index);
    }; // Attach click handler to remove todo
    listItem.appendChild(removeBtn);

    list.appendChild(listItem);
  });
}
```

2.  **Adding the `removeTodo` Function**

    - Next, we need to define the `removeTodo` function that gets called when a user clicks the "Remove" button. This function will update the todos array by removing the selected todo and then re-render the list to reflect the changes.

```javascript
function removeTodo(index) {
  todos.splice(index, 1); // Remove the todo at the specified index
  renderTodos(); // Re-render the todo list
}
```

3.  **Stage, Commit, and Push Changes**

    - Once the new feature is implemented, the next step is to stage, commit, and push the changes to the remote repository. This will involve the following commands:

```bash
git add app.js
git commit -m 'Add remove todo feature'
git push origin main
```

Refer to this [target](https://www.pupilfirst.school/targets/18848) for detailed instructions on setting up Git & GitHub.

These steps will save your changes to the git history and share them with other team members or sync them across different machines, ensuring that everyone's work is up-to-date.

**Conclusion**

And there you have it! From setting up our project, making the initial commit, to refining our code with Prettier and ESLint, and finally pushing it to GitHub. This comprehensive workflow is a glimpse into the life of a developer. Remember, practice makes perfect. If you encounter any hurdles, our Discord community is here to help. Happy coding, everyone!
