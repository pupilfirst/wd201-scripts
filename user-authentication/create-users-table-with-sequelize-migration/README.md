# Text
To start with the implementation of user signup and signin feature, we have to create the `users` table using Sequelize migrations. 

Let's get started.

# Script
In this video, we will use the `sequelize-cli` to generate the migration for `users` table.

The `sequelize-cli` comes with a very handy command `db:generate`, which we can use to create our `User` model. We just have to pass the attributes and data type there. The `User` model will have the `firstName`, `lastName`, `email` and `password` fields.

Let's open the terminal and execute the following command:
```sh
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
```
The above command will create a `user.js` file in `model` folder and a migration file in the `migrations` folder. The generated migration file looks like this:
```js
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
```
Now, as our migration is ready, we can simply run it. 
But before that, I want to add some validations for the `email` column. I want to add constraints to it: `NOT NULL` and `UNIQUE`. For that, we will simply change:
```js
email: {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true
},
```
Let's run it.
```sh
npx sequelize-cli db:migrate
```

Yes! It executed successfully, let's check the database in PGAdmin
> Action: Open PGAdmin to show the newly created table

That's it for this video, see you in the next one.
