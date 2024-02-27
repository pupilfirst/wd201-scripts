### Video Script showing the development environment and process to be followed while going through the WD courses

**Introduction**

Hello, everyone! Over our last few lessons, we've focussed setting up our development environment. We've installed and configured a range of tools including WSL, Ubuntu, Visual Studio Code, Prettier, ESLint, Git, and GitHub. Now, it's time to see these tools in action. We'll embark on a simple project that ties everything together, showcasing how each tool facilitates our development process. Let’s get started.

**Setting Up the Project**

1. **Creating the Project Folder**

   - First up, let's create our project directory. Open your terminal and type `mkdir ExampleProject` followed by `cd ExampleProject` to navigate into our new folder.

2. **Opening in Visual Studio Code**
   - To open this project in Visual Studio Code, simply type `code .` in the terminal. This command opens up VS Code right in our project directory, ready for us to start coding.

**Initializing the Project**

1. **Git Initialization**

   - Our first step in version control is initializing a Git repository. By typing `git init`, we begin tracking the changes in our project.

2. **Creating the Files**

   - Let's create a README and a JavaScript file for our project. Type `touch README.md index.js` in the terminal to create these files. Now, let’s fill them with content.

3. **Writing the README**

   - In `README.md`, we'll add a brief description: `This project demonstrates our developer setup.` Simple, yet informative.

4. **Writing JavaScript Code**
   - In `index.js`, we’ll write a basic function to print a greeting:
     ```javascript
     function greet(name) {
       console.log(`Hello, ${name}!`);
     }
     greet('World');
     ```
     This function greets the name passed to it, showcasing basic JavaScript syntax.

**Version Control with Git**

1. **Initial Commit**
   - Now that we have our initial files, it's time to make our first commit. Run `git add .` to stage our changes, then `git commit -m 'Initial commit: Setup project structure.'` to commit them. This marks the beginning of our project’s history.

**Using Prettier for Formatting**

1. **Introducing Formatting Issues**

   - Let's intentionally introduce some formatting inconsistencies in our `index.js` file, like misaligned brackets and inconsistent spacing.

2. **Applying Prettier**
   - After saving the file, Prettier automatically formats our code upon save. Ensure 'Format On Save' is enabled in VS Code settings to see this in action. Our code now looks much cleaner and adheres to standard formatting guidelines.

**Enhancing Code Quality with ESLint**

1. **Setting Up ESLint**

   - To further improve our code quality, we install ESLint by running `npm install eslint --save-dev`. After installation, we'll set it up by running `npx eslint --init` to configure ESLint according to our project needs.

2. **Introducing a Common Mistake**

   - Now, let's introduce a common JavaScript mistake in our `index.js`. We'll use the loose equality operator (`==`) instead of the strict equality operator (`===`) to compare values. Here's the updated `index.js` file:
     ```javascript
     function checkValue(value) {
       if (value == '10') {
         console.log('The value is 10');
       } else {
         console.log('The value is not 10');
       }
     }
     checkValue(10); // This will log 'The value is 10' due to type coercion.
     ```
     This mistake is subtle but can lead to unexpected behavior due to JavaScript's type coercion.

3. **Resolving ESLint Warnings**

   - Upon saving the file, ESLint immediately flags the use of `==` as a potential issue, suggesting we use `===` for a strict comparison. This is because `===` does not perform type coercion, leading to more predictable and bug-free code. Let's correct our code as per ESLint's recommendation:
     ```javascript
     function checkValue(value) {
       if (value === '10') {
         // Note the use of === instead of ==
         console.log('The value is exactly 10 and of the same type');
       } else {
         console.log('The value is not exactly 10 or not of the same type');
       }
     }
     checkValue(10); // This will now log 'The value is not exactly 10 or not of the same type'
     ```
     By adhering to ESLint's suggestions and replacing `==` with `===`, our code becomes more reliable and less prone to errors.

**Final Commit and Push to GitHub**

1. **Finalizing Our Work**
   - With our code refined by Prettier and ESLint, it's time for the final commit. Run `git add .` and then `git commit -m 'Refine code with Prettier and ESLint.'` Lastly, we push our project to GitHub with `git push origin main`, showcasing our clean, well-maintained project to the world.

**Conclusion**

And there you have it! From setting up our project, making the initial commit, to refining our code with Prettier and ESLint, and finally pushing it to GitHub. This comprehensive workflow is a glimpse into the life of a developer. Remember, practice makes perfect. If you encounter any hurdles, our Discord community is here to help. Happy coding, everyone!
