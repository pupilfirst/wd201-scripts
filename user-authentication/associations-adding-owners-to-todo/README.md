# Text
In this lesson, we will learn to define associations(a.k.a relationships) between two Sequelize models. 

In our application, to show the To-Dos of a logged in user, we have to define relationship between the `Todo` and `User` model. The relation would be **user has many todos**, right? Let's define that.

# Script
In this video, we will learn about the steps associated in defining association between two Sequelize models.
1. First, we have to update our `Todos` table to add a new foreign key `userId`, which will reference to the `Users` table.
2. Then, we have to define the `has many` and `belongs to` relation in both `User` and `Todo`  model respectively.

So, let's get started.

### Updating Migration
Open the migration file which we've generated before to create the `Todos` table. There we will add the following code to add the `userId` column.
```js
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ...
      ...
      ...
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Todos');
  }
};
```
The `references` section of the `userId` column will set up the `Todos` table in our database to reflect the same relationships we described above. 

But, first we will revert back our database to the initial state by undoing all migrations with the `db:migrate:undo:all` command.
```sh
npx sequelize-cli db:migrate:undo:all
```
Now, we can run our migration:
```sh
npx sequelize-cli db:migrate
```
The command executed successfully, great!
Let's check the database once.
> Open PGAdmin to show the db structure.

### Defining Associations
Now, open the `User` model, which you'll find in the `models` folder. There we will define the association details:
```js
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, {
        foreignKey: 'userId',
      })
    }
  }
```
Here, we've defined that `User` has many `Todo` and the foreign key is userId (in the `Todos` table).

Similarly, open the `Todo` model:
```js
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
```
Here, we've defined that, every `Todo` belongs to an `User`.

That's it, in this lesson, we've successfully defined all associations. See you in next video.
