# Scripts for WD201 videos

This repository contains the scripts for videos used in [the WD201 course, hosted at Pupilfirst School](https://www.pupilfirst.school/courses/123/curriculum).

Note that this collection of scripts is incomplete - only a few videos presented in the WD201 course have a corresponding script stored here.

## License

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

**&copy; Freshworks Inc. & Pupilfirst Pvt. Ltd.**

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## L1. Introduction to Node.Js

### Intro to Node.Js
- [What is Node.js and how to install it](./introduction-to-nodejs/what-is-node-js-with-installation/README.md)
- [Running our first program](./introduction-to-nodejs/running-first-program/README.md)
- [Using Node.js REPL](./introduction-to-nodejs/nodejs-repl/README.md)

### Intro to git and Github
- [Using git to version control our code](./introduction-to-nodejs/intro-to-git/README.md)
- [Github: How To](./introduction-to-nodejs/github-how-to/README.md)

### Orientation (old)

- [Orientation: Getting help](./get-started-with-git-and-github/getting-help)
  - [Screen recording tool](./get-started-with-git-and-github/getting-help/screen-recording.md)
- [Orientation: Plagiarism](./get-started-with-git-and-github/plagiarism)

### Milestone
- [Milestone](./introduction-to-nodejs/milestone/README.md)

## L2. Working with NPM
- [Why is there a need for a library ecosystem?](./working-with-npm/package-management-and-library-ecosystem/README.md)
- [What is NPM?](./working-with-npm/about-npm-and-uses/README.md)
- [What is package.json](./working-with-npm/package-json-in-npm/README.md)
- [What are NPM scripts](./working-with-npm/npm-scripts/README.md)
- [Explore built in fs module](./working-with-npm/nodejs-fs-module/README.md)
- [Explore streams](./working-with-npm/nodejs-stream-module/README.md)
- [Accepting command line arguments](./working-with-npm/accepting-cli-commands/README.md)
- [Let's write a program!](./working-with-npm/write-first-node-program/README.md)
- [Milestone](./working-with-npm/milestone/README.md)

## L3. Node.js deep dive

### Key Concepts
- [What is an event loop?](./nodejs-deep-dive/what-is-event-loop/README.md)
- [What is Closure in JavaScript?](./nodejs-deep-dive/closures-in-js/README.md)

### Apply closure
- *[Let’s write a  to-do application](https://github.com/pupilfirst/wd201-scripts/pull/124/files) (Not merged yet)*
- *Milestone Task (Not merged yet)*

## L4. Testing
- [What is testing, and why do we need it?](./testing/why-need-testing/README.md)
- [TDD workflow](./testing/tdd/README.md)
- [What is jest?](./testing/jest/README.md)
- [Git hooks: pre-commit hook](./testing/git-hooks/README.md)
- [Running tests, and linting automatically as pre-commit hook using Husky, lint staged](./testing/husky-precommit-hook/README.md)

## L5. Databases and Sequelize

- [Why Database?](./databases/why-database/README.md)
- [Setting up Postgres](./databases/setting-up-postgres/README.md)
- [Connect to Database and create table](./databases/connect-to-db/README.md)
- [Creating Sequelize model and manipulating data](./databases/creating-sequelize-models/README.md)
- [Database migrations](./databases/migrations/README.md)
- [Using seperate database for testing](./databases/separate-db/README.md)
- [Milestone](./databases/milestone/README.md)


## L6. Backend Web development with Express.js
- [Hello world with Express.js!](backend-dev-with-express/introduction-to-express/README.md)
- [Connect our PostgreSQL database to the Express.js application](backend-dev-with-express/connect-express-with-postgres/README.md)
- [Routes in Express.js](backend-dev-with-express/routes-in-express/README.md)
- *[Add two features: create a new to-do, and mark an existing to-do as completed](https://github.com/pupilfirst/wd201-scripts/pull/126/files) (Not merged yet)*
- [Add tests to Express.js application](./backend-dev-with-express/add-tests/README.md)
- *[Milestone Task + Tests (Automated)](https://github.com/pupilfirst/wd201-scripts/pull/121/files) (Not merged yet)*

## L7. Add User Interface for To-do Application
- [Converting a design into a webpage](./todo-user-interface/converting-design-into-webpage/README.md)
- [Create an interface for accepting a new to-do](./todo-user-interface/interface-for-new-to-do/README.md)
- [Create an interface for listing the todos](./todo-user-interface/interface-for-listing-to-dos/README.md)
- [Create an interface to delete a to-do](./todo-user-interface/interface-to-delete-to-do/README.md)
- [Milestone Task + Tests (Automated)](./todo-user-interface/todo-interface-milestone/README.md)

## L8. EJS Templating
- [Render dynamic data inside HTML with EJS templates](./ejs-templating/dynamic-html-with-ejs/README.md)
- [Using view templates](./ejs-templating/view-templates/README.md)
- [What is MVC?](./ejs-templating/mvc/README.md)
- [Heroku: deploy your application](./ejs-templating/deploy-application-to-heroku/README.md)
- [Use EJS templating to render to-do manager](./ejs-templating/ejs-templating-for-todo-manager/README.md)
- [Milestone](./ejs-templating/milestone/README.md)

## L9.  HTML forms to save and accept user inputs

- [Adding a new to-do with the help of <form>](./html-forms/add-new-todo/README.md)
- [Updating a to-do with help of <form>](./html-forms/updating-todo/README.md)
- [Deleting a to-do with help of <form>](./html-forms/delete-todo/README.md)
- [What is Cross Site Request Forgery (CSRF) and why should we care?](./html-forms/why-csrf/README.md)
- [Use csurf package in express.js application](./html-forms/use-csurf/README.md)

## L10. User Authentication and final wrap-up
- [Introduction]('./user-authentication/introduction/README.md)
- [Create the `users` table with a sequelize migration]('./../user-authentication/create-users-table-with-sequelize-migration/README.md)
- [Associations: adding owners to todo]('./user-authentication/../../user-authentication/associations-adding-owners-to-todo/README.md)
- [Creating a user sign-up page](./user-authentication/create-user-signup-page/README.md)
- [Add user authentication using passport.js]('./../user-authentication/authentication-using-passport/README.md)
- [Storing passwords with bcrypt](./user-authentication/storing-password-using-bcrypt/README.md)
- [Create a simple sign-in page which verifies the user's password]('./../user-authentication/signin-with-password-verification/README.md)
- What exactly is a cookie and why should you care?
- *Let us store the signed-in user's id in the session! (covered in user authentication using passport.js script)*
- *[Implement sign-out by resetting the user session](https://github.com/pupilfirst/wd201-scripts/pull/134/files) (Not merged yet)*
- A logged-in user should see and modify only their own to-dos and nobody else's
- Showing one-off messages to users with connect-flash
- Ensure no blank to-dos are ever created, with Sequelize validations
