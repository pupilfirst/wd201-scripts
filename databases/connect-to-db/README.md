## Text

Let's now write our first Sequelize program. For this, you have to install `sequelize`, `pg` `pg-hstore` packages. Run the following command in the terminal:

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

Once a connection is established with the server, we can then issue commands to it using Sequelize. First, you have to modify `connectDB.js` to expose two functions.

```js

const Sequelize = require("sequelize");

const sequelize = new Sequelize('saas_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize
}

```

The next thing we want to do is to create a table called `todos`. For this, create a new file `createTodosTable.js` with the following contents:

```js
//  createTodosTable.js
const { DataTypes } = require('sequelize');
const { connect, sequelize } = require("./connectDB");

connect().then(() => {

  const Todo = sequelize.define('Todo', {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'todos'
  });

  Todo.sync(); // create the table
}).catch(err => console.error(err));

```

The `Todo.sync` method creates a table called `todos` in the currently connected database. Note that before we can talk to the database, we have to first connect to it. For this, we've _required_ the `connectDB.js` file, and invoked the `connect` method defined there. We have kept it in a separate file because every program we write from now on would want to connect to the database, so we can simply require this file rather than writing it again and again.

Let's now create the table by running `createTodosTable.js` from the shell:

```
$ node createTodosTable.js
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'todo'
Executing (default): CREATE TABLE IF NOT EXISTS "todo" ("id"   SERIAL , "title" VARCHAR(255) NOT NULL, "dueDate" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'todo' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
```

Alright, now we have set up Postgres on our computer and created a table! Next, we'll learn how to update and query the table using Sequelize.
