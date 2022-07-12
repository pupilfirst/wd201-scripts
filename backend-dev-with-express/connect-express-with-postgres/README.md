# Text
In this lesson, we will learn to connect our **Express** server with **PostgreSQL** database, using **Sequelize**.

Sequelize is a promise-based ORM(Object-Relational Mapping) for Node.js. It saves a lot of time during development, as we don’t have to write or care about raw queries, as we can query the database in form of methods and functions. Plus, using Sequelize, we can define relation between two models (tables), effortlessly. 
So, let's get started.

### Installing Sequelize
First, we will install Sequelize in the same Express.js application, that we created in the previous lesson.
````
npm install sequelize --save
````

Sequelize also requires your database system driver. As we will be working with PostgreSQL, let's add PostgreSQL adapter which will allow Sequelize to connect and to the PostgreSQL server.
````
npm install pg --save
````
Next, we will establish the connection between Postgres and our Express server. So, open the project in VS Code, it's time to write some code.

### Configuring the database connection parameters
First, create a new folder named `src` in the root directory. Inside `src`, create a subfolder `db`, and there create a new file `connection.js`.
In  this file, we will open the connection steam between Sequelize and PostgreSQL server.
```js
const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo-app", "db-username", "db-password", {
  host: "127.0.0.1",
  dialect: "postgres"
});

sequelize.authenticate().then(() => {
  console.log("Successfully connected to database!");
}).catch((err) => {
  console.log(err);
});

module.exports = sequelize;
global.sequelize = sequelize;
```
Now, let's understand the above snippet, line by line.
```js
const Sequelize = require("sequelize");
```
Here, this line requires the **Sequelize** module that was installed via NPM.

Next,
```js
const sequelize = new Sequelize("todo-app", "db-username", "db-password", {
  host: "127.0.0.1",
  dialect: "postgres"
});
```
In these lines, we are providing a few key information to Sequelize about the PostgreSQL database. This includes, **database name** (*todo-app* in this case), *database username* and *password*, *host* and *dialect*. In dialect, we are providing `postgres` as we are working with PostgreSQL. Remember, using Sequelize we can connect with other database services as well, like MySQL, SQLite etc.

Next,
```js
sequelize.authenticate().then(() => {
  console.log("Connection with PostgreSQL has been established successfully.");
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
```
Here, using the `sequelize.authenticate()` function, we are checking if the connection is OK or not.

After that,
```js
module.exports = sequelize;
global.sequelize = sequelize;
```
Here, we are exporting the connection instance and making it globally accessible. This means, we can access the Sequelize instance from any module on our environment or application, without import.

### Connecting to database
Now, inside the `index.js` file, we just have to `require` the connection module to connect to the database and expose the connection instance globally.
```js
const express = require('express');
const app = express();

// Adding database connection to the app
require("./src/db/connection");
```

Next, run the code using the following command.
````
node index.js
````
But, since we haven’t created the database in PostgreSQL, it will return the following error.
````
{
  name: 'SequelizeConnectionError',
  message: 'database "todo-app" does not exist'
}
````
To solve this, open your PostgreSQL Admin or PostgreSQL Command Line Interface and create a database named `todo-app`.

Once done, run the same code again and this time you should see the message as shown below.
````
Executing (default): SELECT 1+1 AS result
Connection with PostgreSQL has been established successfully.
````

That's great! You've successfully established connection between your Express application and the PostgreSQL database. See you in the next lesson.


