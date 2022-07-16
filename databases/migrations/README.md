## Text

### Database migrations

We have created table by running a script. But it would become tedious to track the changes made to the structure of any table over the time of development. Any command that modifies the structure of the database, like creating tables, or adding and removing columns from an existing table, are all called "migrations". The word is used in the sense that we're "migrating" the database from one state to another new state.

`Sequelize` comes with helper functions that makes migrations easy. First we will have to install a package `sequelize-cli`.

```sh
npm install sequelize-cli
```

Now, we can make use of this package to generate a folder structure to keep our database connection configurations and the models.

```sh
npx sequelize-cli init
```

This will create folders like:

- `config` - which holds database connection parameters like username, db name, host, password
- `migrations` - which contains state or alterations made to the tables over time
- `models`- representation of tables that are being used in the project
- `seeders` - initial data that can be populated to the database.

Let's start from clean slate and drop the database we had created earlier. `sequelize-cli` comes with many such helper commmands. You can use `db:drop` to delete a database.

Let's make sure the configuration has correct parameters to connect to the database.

```json
{
  "development": {
    "username": "postgres",
    "password": "changeme",
    "database": "saas_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
  }
}

```

Now, let's execute the command to drop the database.

```sh
npx sequelize-cli db:drop


Sequelize CLI [Node: 16.13.0, CLI: 6.4.1, ORM: 6.21.2]

Loaded configuration file "config/config.json".
Using environment "development".
Database saas_db dropped.
```

To create the database, we can use `db:create` command.

```sh
npx sequelize-cli db:create

Sequelize CLI [Node: 16.13.0, CLI: 6.4.1, ORM: 6.21.2]

Loaded configuration file "config/config.json".
Using environment "development".
Database saas_db created.
```

Now, you can simply generate a model using `db:generate` command and passing in the attributes and types. Let's create a model for Todo. We will have a `title` with type `string`, then `dueDate` of type `date` and a `complete` of type `boolean`

```sh
npx sequelize-cli model:generate --name Todo --attributes title:string,dueDate:dateonly,completed:boolean

```

The above command will create a `todo.js` file in `model` folder and migration file in the `migrations` folder. The generated migration file looks like this:

```js
"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      dueDate: {
        type: Sequelize.DATEONLY,
      },
      completed: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Todos");
  },
};
```

Now that you have the migration generated for you, we can run it.

> Note: You have to remove the `type: module` entry from `package.json` for the migration to work.

```sh
npx sequelize-cli db:migrate
```

`Sequelize` keeps track of the migrations that have already been run, so it doesn't apply the same changes when run again.
