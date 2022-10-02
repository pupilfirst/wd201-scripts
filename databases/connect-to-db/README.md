## Text

Let's now write our first Sequelize program. For this, you have to install `sequelize`, `pg` `pg-hstore` packages. We will continue using the same project from previous level. Run the following command in the terminal:

```
npm install sequelize pg pg-hstore
```

Once the packages are installed, create a new file `connectDB.js`:

```js
// connectDB.js

const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "changeme";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

```

This file, `connectDB.js`, will connect our program with the Postgres database server running on our computer. Postgres is a multi-user database server - this means its process runs in the background of our computer, and any program that wants to talk to it has to first connect to it. This is what we're doing with the `sequelize.authenticate()`. Note that we've used the database name as `todo_db`, and password as `changeme` - both of these were set in the previous target.

Once a connection is established with the server, we can then issue commands to it using Sequelize. First, you have to modify `connectDB.js` to export two functions. In Node.js, we export functions, objects etc. in a module to outside world to consume using `module.exports`.

```js

const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "changeme";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize
}

```

Alright, now we have set up Postgres on our computer and used `Sequelize` to connect to the database! Next, we'll learn how to create, update and query the table using Sequelize.
