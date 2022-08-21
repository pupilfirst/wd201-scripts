# Text

## Build and deploy the final To-do Manager application

This assignment completes the To-do Manager application, and by deploying it to Heroku you have a fully functioning SaaS application that can be used by any number of users on the web.

**The following requirements can be satisfied by following the tutorials and implementing the features explained there:**

1. Users should be able to sign up, sign-in, and sign-out.
2. A user should be able to see and manage only their own to-dos and nobody else's.
3. Show a flash message when attempting an invalid login.
4. Show a flash message when trying to create an empty to-do (aka blank text or due_date). Use **Sequelize** validations and `connect-flash` messages.
5. Deploy the final version to Heroku, so anyone can sign up and test the application.

### For maximum grades

Implement the following feature not covered in the tutorials:

- Do not allow users to sign-up without at least `first_name` and `email`. Use **Sequelize** validations and `connect-flash` messages to prevent this.

### Evaluation criteria

All aspects, except the user-interface, will be considered for evaluation. This includes functionality, code quality, and security.