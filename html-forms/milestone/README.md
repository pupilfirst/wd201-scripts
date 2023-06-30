**To complete this level**: You have to implement the To-do page so that it has these features:

## Requirements

1. Make it possible to add a new to-do.
2. Add client-side validation in new to-do form to ensure that, no to-do gets created in database with empty `title` or `dueDate`.
3. Mark a to-do as complete. Instead of `markAsCompleted`, implement a `setCompletionStatus` method in the `Todo` model, which accepts a boolean value and updates the to-do item accordingly.
4. Mark a to-do as incomplete. 
5. Replace `/todos/:id/markAsCompleted` with `/todos/:id` to accept a `PUT` request, and use a `completed` key in the `PUT` request body to update the to-do item.
6. Allow users to delete a to-do.
7. Move completed items to their own section. So, there would be `Overdue`, `Due Today`, `Due Later` and `Completed Items` sections.
8. The todo input field should have name attribute as `title`, the due date input field should have name attribute as `dueDate`. 
9. The button to add a todo item should be of type `submit`.
10. When displaying count, the corresponding element should have following ids ie, `count-overdue`, `count-due-today`, `count-due-later` and `count-completed`.
11. Each todo item should have a `Todo-Item` in it's list of CSS classes.
12. The todo item should be displayed within a `label` element with a checkbox attached to it using the `for` attribute.

## You should also...

* Add tests for all web endpoints: creating a to-do, updating a to-do, and deleting a to-do. Your tests should address both marking a to-do as complete or incomplete. 
* Ensure that all tests pass.
* Ensure that CSRF attacks are prevented.
* Ensure the application is similar to that of the design provided.
* Deploy to Render (or any cloud platform of your choice) and ensure it works well there. We will visit the live application URL to test your submission.

## Repo structure

At this point in the course, this is how your repo should be structured:

```
.
├── hello-world
├── http-server
├── todo-cli
├── todo-app
|   ├── __tests__
|   |   └── todos.js
|   ├── .husky
|   |   └── pre-commit
|   ├── migrations
|   |   └── [TIMESTAMP]-create-todo.js
|   ├── models
|   |   ├── index.js
|   |   └── todo.js
|   ├── public
|   |   └── css
|   |       └── styles.css
|   ├── views
|   |   ├── footer.ejs
|   |   ├── header.ejs
|   |   ├── index.ejs
|   |   └── todos.ejs OR todo.ejs
│   ├── package.json
│   ├── package-lock.json
│   ├── app.js
│   └── index.js
└── .gitignore
```
## Manual review, after automated review

In this assignment, your submitted work will be reviewed by a teaching assistant or a coach. This manual review will be done only if the automated review of your submission doesn't fail.

If your submission gets rejected by our automated review process, before you make a resubmission, please go carefully through the feedback given, test locally on your system and only then resubmit on LMS.

In case your submission is rejected more than a couple of times by the automated review process, and you cannot understand the reason even after going through the feedback, please ask for help on the #wd-forum channel on Pupilfirst School Discord server.

In most cases, when automated review doesn't raise any issues, manual review should be completed within 2 working days. However, if many students submit at the same time (usually close to a deadline), then review can take much longer. Because of this, please wait at least 4 working days before asking for a review on Discord. Posts asking for a review before this period is over may be deleted without a response.
