# Scripts for WD201 videos

This repository contains the scripts for videos and content for the WD201 course, to be hosted at Pupilfirst School.


## License

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

**&copy; Freshworks Inc. & Pupilfirst Pvt. Ltd.**

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

# Completed levels
## L1. Introduction to Node.js

### Intro to Node.js
1. [What is Node.js and how to install it](./introduction-to-nodejs/what-is-node-js-with-installation/README.md)
2. [Running our first program](./introduction-to-nodejs/running-first-program/README.md)
3. [Using Node.js REPL](./introduction-to-nodejs/nodejs-repl/README.md)

### Intro to Git and GitHub
4. [Using git to version control our code](./introduction-to-nodejs/intro-to-git/README.md)
5. [Github: How To](./introduction-to-nodejs/github-how-to/README.md)

### Orientation (old)

**Note**: Students in TA training can skip this section and proceed to Milestone.

6. [Orientation: Getting help](./get-started-with-git-and-github/getting-help)
7. [Screen recording tool](./get-started-with-git-and-github/getting-help/screen-recording.md)
8. [Orientation: Plagiarism](./get-started-with-git-and-github/plagiarism)

### Milestone
9. [Milestone](./introduction-to-nodejs/milestone/README.md)

## L2. Working with NPM
1. [Why is there a need for a library ecosystem?](./working-with-npm/package-management-and-library-ecosystem/README.md)
2. [What is NPM?](./working-with-npm/about-npm-and-uses/README.md)
3. [What is package.json](./working-with-npm/package-json-in-npm/README.md)
4. [What are NPM scripts](./working-with-npm/npm-scripts/README.md)
5. [Explore built in fs module](./working-with-npm/nodejs-fs-module/README.md)
6. [Explore streams](./working-with-npm/nodejs-stream-module/README.md)
7. [Accepting command line arguments](./working-with-npm/accepting-cli-commands/README.md)
8. [Let's write a program!](./working-with-npm/write-first-node-program/README.md)
9. [Milestone](./working-with-npm/milestone/README.md)


# Work in progress levels

## L3. Node.js deep dive

### Key Concepts
1. [What is an event loop?](./nodejs-deep-dive/what-is-event-loop/README.md)
2. [What is Closure in JavaScript?](./nodejs-deep-dive/closures-in-js/README.md)

### Apply closure
3. *[Let’s write a  to-do application](https://github.com/pupilfirst/wd201-scripts/pull/124/files) (Not merged yet)*
4. *Milestone Task (Not merged yet)*

## L4. Testing
1. [What is testing, and why do we need it?](./testing/why-need-testing/README.md)
2. [TDD workflow](./testing/tdd/README.md)
3. [What is jest?](./testing/jest/README.md)
4. [Git hooks: pre-commit hook](./testing/git-hooks/README.md)
5. [Running tests, and linting automatically as pre-commit hook using Husky, lint staged](./testing/husky-precommit-hook/README.md)

## L5. Databases and Sequelize

1. [Why Database?](./databases/why-database/README.md)
2. [Setting up Postgres](./databases/setting-up-postgres/README.md)
3. [Connect to Database and create table](./databases/connect-to-db/README.md)
4. [Creating Sequelize model and manipulating data](./databases/creating-sequelize-models/README.md)
5. [Database migrations](./databases/migrations/README.md)
6. [Using seperate database for testing](./databases/separate-db/README.md)
7. [Milestone](./databases/milestone/README.md)


## L6. Backend Web development with Express.js
1. [Hello world with Express.js!](backend-dev-with-express/introduction-to-express/README.md)
2. [Connect our PostgreSQL database to the Express.js application](backend-dev-with-express/connect-express-with-postgres/README.md)
3. [Routes in Express.js](backend-dev-with-express/routes-in-express/README.md)
4. *[Add two features: create a new to-do, and mark an existing to-do as completed](https://github.com/pupilfirst/wd201-scripts/pull/126/files) (Not merged yet)*
5. [Add tests to Express.js application](./backend-dev-with-express/add-tests/README.md)
6. *[Milestone Task + Tests (Automated)](https://github.com/pupilfirst/wd201-scripts/pull/121/files) (Not merged yet)*

## L7. Add User Interface for To-do Application
1. [Converting a design into a webpage](./todo-user-interface/converting-design-into-webpage/README.md)
2. [Create an interface for accepting a new to-do](./todo-user-interface/interface-for-new-to-do/README.md)
3. [Create an interface for listing the todos](./todo-user-interface/interface-for-listing-to-dos/README.md)
4. [Create an interface to delete a to-do](./todo-user-interface/interface-to-delete-to-do/README.md)
5. [Milestone Task + Tests (Automated)](./todo-user-interface/todo-interface-milestone/README.md)

## L8. EJS Templating
1. [Render dynamic data inside HTML with EJS templates](./ejs-templating/dynamic-html-with-ejs/README.md)
2. [Using view templates](./ejs-templating/view-templates/README.md)
3. [What is MVC?](./ejs-templating/mvc/README.md)
4. [Heroku: deploy your application](./ejs-templating/deploy-application-to-heroku/README.md)
5. [Use EJS templating to render to-do manager](./ejs-templating/ejs-templating-for-todo-manager/README.md)
6. [Milestone](./ejs-templating/milestone/README.md)

## L9.  HTML forms to save and accept user inputs

1. [Adding a new to-do with the help of <form>](./html-forms/add-new-todo/README.md)
2. [Updating a to-do with help of <form>](./html-forms/updating-todo/README.md)
3. [Deleting a to-do with help of <form>](./html-forms/delete-todo/README.md)
4. [What is Cross Site Request Forgery (CSRF) and why should we care?](./html-forms/why-csrf/README.md)
5. [Use csurf package in express.js application](./html-forms/use-csurf/README.md)

## L10. User Authentication and final wrap-up
1. [Introduction]('./user-authentication/introduction/README.md)
2. [Create the `users` table with a sequelize migration]('./../user-authentication/create-users-table-with-sequelize-migration/README.md)
3. [Associations: adding owners to todo]('./user-authentication/../../user-authentication/associations-adding-owners-to-todo/README.md)
4. [Creating a user sign-up page](./user-authentication/create-user-signup-page/README.md)
5. [Add user authentication using passport.js]('./../user-authentication/authentication-using-passport/README.md)
6. [Storing passwords with bcrypt](./user-authentication/storing-password-using-bcrypt/README.md)
7. [Create a simple sign-in page which verifies the user's password]('./../user-authentication/signin-with-password-verification/README.md)
8. What exactly is a cookie and why should you care?
9. *Let us store the signed-in user's id in the session! (covered in user authentication using passport.js script)*
10. *[Implement sign-out by resetting the user session](https://github.com/pupilfirst/wd201-scripts/pull/134/files) (Not merged yet)*
11. A logged-in user should see and modify only their own to-dos and nobody else's
12. Showing one-off messages to users with connect-flash
13. Ensure no blank to-dos are ever created, with Sequelize validations
