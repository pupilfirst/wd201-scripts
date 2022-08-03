# Text

In this lesson, you will learn how to set up validations and constraints for your models in Sequelize. In the to-do application we created, while creating the Database we set up certain constraint for sequelize work with as below.

```js
const Todo = sequelize.define(
  "Todo",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "todo",
  }
);
```

In the sequelize model, we added a constraint of `allowNull` to be `false`. This means that when you add a new to-do, it should always have a to-do text associated with it. If not, the database throws an error, which is being sent back to the application from the server.

Validation is a check performed at the JavaScript level. Providing custom validation capabilities can be tricky. We can also use one of the built-in validators provided by Sequelize. If validation fails, no SQL queries are sent to the database.

Constraints, on the other hand, are rules defined at the SQL level. A simple example of a constraint is the `allowNull` constraint. If the constraint check fails, the database generates an error and Sequelize redirects this error to JavaScript.

## Adding Validations

Let us add validations for the to-do model, restricting the query flow itself if the to-do text is empty. Let us also create a validation to restrict a non-informative to-do text by restricting the minimum character limit to 5.

First, let us add the non-null validation. You can implement the same by updating the `title` attribute of the model with the following code.

```js
title: {
   type: DataTypes.STRING,
   allowNull: false
   validate: {
       notNull: true
   }
}
```

Next, let us add a validation for making sure the minimum character limit is 5 by adding the `len` validator.

```js
title: {
   type: DataTypes.STRING,
   allowNull: false
   validate: {
       notNull: true,
       len: 5
   }
}
```

The `len` attribute can also be modified to take two values, with both minimum length and maximum length defined.

When the built-in validators are not sufficient for your application, you can even create a custom validator by passing a function as an entry to the validate attribute.

You learn more about all the options available for you to work with [here](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/).

See you in the next lesson.
