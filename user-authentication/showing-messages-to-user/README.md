# Text

Presently, there is no feedback from the application when you try signing in with the wrong email or password.

It should say that the login attempt was invalid, so users are not left wondering what's going on.

That's what we'll do in this lesson, using **Node.js** `connect-flash` module.

## `connect-flash` Module

When a user is redirected to a certain page, pop messages can be displayed or rendered using the connect-flash module in Node.js.

In our application, we can show messages when users to add or remove items from a to-do list. We can also use it to alert the user every time they log in or out, along with showing any error messages.

## Using `connect-flash` to display Flash Messages

To set up `connect-flash` run the below command inside out project folder. As connect-flash requires express, ejs and express-session to work, do make sure all these are installed.

```
npm i connect-flash --save
```

This command adds `connect-flash` module to your application and you can start using this on your `index.js`

Import the module using the below statement in your `index.js` file after the `express-session` declaration.

```js
const flash = require("connect-flash");
```

Make sure your views folder is accessible globally with the below code.

```js
const path = require("path");
app.set("views", path.join(__dirname, "views"));
```

Next let us create a session function to be used within the app using the below code.

```js
app.use(
  session({
    secret: "mytodoapp",
    saveUninitialized: true,
    resave: true,
  })
);
```

The `secret` here is a string key which is used to authenticate this message session.

Next we will write a flash function which connects to the `connect-flash` module as below.

```js
app.use(flash());
```

To display a flash message you can use it as a part of the route you send the user to after the success or failure of the step using the below code.

```js
res.render(req.flash(type, message));
```

Where, type is usually set to `success`, `info` or `error`. And you can access the message in your views folder by using the below code in any `.ejs` file you want the message to be displayed. If no `type` is set, it is treated as an `error` type.

```js
<%= message.success %>
```

The above process of setting flash to a res.render() will not work in our application, as we use passport for authentication. Let us learn how to achieve the same with passport.

## Setup messages through Passport

As we have set up `connect-flash` let us try and use it in passport to provide right error messages to the user.

First, let's update the authenticate function with an option to enable flash messages.

`passport.authenticate provides three options to do that.

- failureFlash: true - In this case when you call done(null, false, {type: 'info', message: 'my message'}) passport will take the type and message and use it to call req.flash(type, message).
- failureFlash: "some generic message" - This will ignore whatever {type: "myflashtype", message: "my message"} that you pass in the done(null, false, {...} and directly display the message.
- failureFlash: { "type": "info" } - This overwrites the flash type of all messages to info. So regardless of what type is specified by the call to done(null, false, {type: "myflashtype", message: "my message"} that will be effectively overwritten to req.flash('info', 'my message').

Let's use the first option to set our message. Update the following code in `index.js`

```js
app.post(
  "/session",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (request, response) {
    console.log(request.user);
    response.redirect("/todos");
  }
);
```

In the `index.js` file under the _passport strategy_ update the conditional check with the below code.

```js
User.findOne({ where: { email: username } })
  .then(async function (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Invalid password" });
    }
  })
  .catch((error) => {
    return done(err);
  });
```

Now in the `login.ejs` page, update the below code after the `form` element.

```js
<%= message.error %>
```

You can also add custom styling to the same using CSS. If you try to log in with a wrong password now, you will see that the "Invalid password" message is displayed just below the Sign-in form.

You can use this to create other messages to for events like adding a new to-do, deleting a to-do and so on. Do explore more about this by implmenting other usecases. See you in the next lesson.
