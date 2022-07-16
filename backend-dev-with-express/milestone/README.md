# Text

## Problem Description
To complete this milestone, you have to make two changes to the Express application we've created earlier.

1. We've already defined the route to get a list of all To-Dos (`GET /todos`). Your task is to complete the implementation of that specific endpoint. First, query to the PostgreSQL database using Sequelize to get list of all TODOs. Then, send that results back as reponse. You can refer to the [Sequelize documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/) to find out the method which will ge helpful to get all To-Dos.
2. Similarly, we've defined the route to *delete* a To-Do by it's `id` (`DELETE /todos/:id`). You have to complete the implementation for that. You can refer to the same Sequelize document to find out the exact method to delete any record from a database table.

## Submission Requirements
1. After the implementation, commit your changes and push the code to GitHub.

#### Well-formatted code is a must.
Remember to format the code - keep proper indentation and add relevant comments if required. This one is non-negotiable as always.

Have fun!