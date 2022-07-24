# Text
In this lesson, we will learn to define associations(a.k.a. **relationships**) between two Sequelize models. 

In our application, to show the To-Dos of a logged-in user, we have to define the relationship between the `Todo` and `User` model. The relation would be **user has many todos**, right? Let's define that.

# Script
In this video, we will learn about the steps associated in defining association between two Sequelize models.
1. First, we have to update our `Todos` table to add a new foreign key `userId`, which will reference to the `Users` table.
2. Then, we have to define the `has many` and `belongs to` relation in both `User` and `Todo`  model, respectively.

So, let's get started.

### Creating a new Migration
To add the `userId` column in `Todos` table, we will create a new migration file in the terminal. 
```sh
npx sequelize-cli migration:create --name add-user-id-in-todos
```
In VS Code, let's open the migration file. It already comes with a default template, where we have to write just few lines of code to add a new column.
```js
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Todos', 'userId', {
      type: Sequelize.DataTypes.INTEGER
    })
    await queryInterface.addConstraint('Todos', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Todos', 'userId');
  }
};
```
Here, we've used `addConstraint` from the Sequelize `queryInterface` to define that, `userId` is a foreign key in `Todos` table, which actually refers to the `id` column of `Users` table.

So, we can run our migration:
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

That's it, in this lesson, we've successfully defined all associations. See you in the next video.
