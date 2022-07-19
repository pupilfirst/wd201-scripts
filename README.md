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
> TODO

## L3. Node.js deep dive

### Key Concepts
- [What is an event loop?](./nodejs-deep-dive/what-is-event-loop/README.md)
- *What is Closure in JavaScript? (Not merged yet)*

### Apply closure
- *Let’s write a  to-do application (Not merged yet)*
- *Milestone Task (Not merged yet)*

## L4. Testing
> TODO

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
- *Add two features: create a new to-do, and mark an existing to-do as completed (Not merged yet)*
- *Add tests (Not merged yet)*
- *Milestone Task + Tests (Automated) (Not merged yet)*

## L7. Add User Interface for To-do Application
- [Converting a design into a webpage](./todo-user-interface/converting-design-into-webpage/README.md)
- [Create an interface for accepting a new to-do](./todo-user-interface/interface-for-new-to-do/README.md)
- [Create an interface for listing the todos](./todo-user-interface/interface-for-listing-to-dos/README.md)
- [Create an interface to delete a to-do](./todo-user-interface/interface-to-delete-to-do/README.md)
- *Milestone Task + Tests (Automated) (Not merged yet)*

## L8. EJS Templating
> TODO

## L9.  HTML forms to save and accept user inputs

- [Adding a new to-do with the help of <form>](./html-forms/add-new-todo/README.md)
- [Updating a to-do with help of <form>](./html-forms/updating-todo/README.md)
- [Deleting a to-do with help of <form>](./html-forms/delete-todo/README.md)
- [What is Cross Site Request Forgery (CSRF) and why should we care?](./html-forms/why-csrf/README.md)
- [Use csurf package in express.js application](./html-forms/use-csurf/README.md)
- [What are APIs](./html-forms/what-are-apis/README.md)

## L10. User Authentication and final wrap-up
- *Introduction (Not merged yet)*
- *Create the `users` table with a sequelize migration (Not merged yet)*
- *Associations: adding owners to todo  (Not merged yet)*
- *Creating a user sign-up page  (Not merged yet)*
- *Add user authentication using passport.js  (Not merged yet)*
- *Storing passwords with bcrypt (Not merged yet)*
- *Create a simple sign-in page which verifies the user's password (Not merged yet)*
- What exactly is a cookie and why should you care?
- *Let us store the signed-in user's id in the session! (Not merged yet)*
- *Implement sign-out by resetting the user session (Not merged yet)*
- A logged-in user should see and modify only their own to-dos and nobody else's
- Showing one-off messages to users with connect-flash
- Ensure no blank to-dos are ever created, with Sequelize validations
