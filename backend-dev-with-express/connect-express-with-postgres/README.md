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

### Installing Sequelize-cli
`Sequelize` comes with a beautiful command line interface or CLI, which makes working with database super easy. To install `sequelize-cli`, run the following command:
```sh
npm install sequelize-cli --save-dev
```

Now, we can make use of this package to generate a folder structure to keep our database connection configurations, models and migrations.

```sh
npx sequelize-cli init
```

This will create folders like:

- `config` - which holds database connection parameters like username, db name, host, password.
- `migrations` - which contains state or alterations made to the tables over time.
- `models`- representation of tables that are being used in the project.
- `seeders` - initial data that can be populated to the database.

### Configuring the database connection parameters
First, we have to edit the `config/config.json` file to have the correct database credentials.
```json
{
  "development": {
    "username": "your-postgresql-username",
    "password": "your-postgresql-password",
    "database": "todo-db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
Here, we've defined the database credentials for `development` environment. The same file can be updated for `staging` and `production` environment as well. The default  value of `dialect` was set to `mysql`, which we've changed to `postgres` as we will be working with PostgreSQL.

Now to check if these credentials are correct and to create the database named `todo-db` in our PostgreSQL database server, we will run the follwoing command:
```sh
npx sequelize-cli db:create

Sequelize CLI [Node: 14.17.0, CLI: 6.4.1, ORM: 6.21.4]

Loaded configuration file "config/config.json".
Using environment "development".
Database **todo-db** created.
```

Our database got created. That's great!
See you in the next lesson.

