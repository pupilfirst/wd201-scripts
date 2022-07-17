# Text
Previously, we've created a signup form, where a user can enter their details along with their password to create an account.
In this lesson, we will implement the user authentication module for our To-Do application, using [Passport.Js](https://www.passportjs.org/).

# Script
In our To-Do manager application, we need users to authenticate in order to show user-specific To-Dos. The authentication process must be both functional and secure, and creating one from scratch can be quite lengthy process. Because of this, we will use Passport.Js, which is a popular Express middleware that facilitates the login process. So, let's get started.

First, we will install few npm packages.
```sh
npm install passport passport-local connect-ensure-login express-session --save
```
Here,
- `passport`, is the authentication library
- `passport-local` is our core authentication strategy. Now what is an authentication strategy, we will come to that part later on.
- `connect-ensure-login` is a authorization middleware library that makes it easy to restrict access to protected pages.
- `express-session` is a cookie-based session middleware that works for any Express.js application.

### Now what is a passport strategy?
To offer its various authentication options, Passport uses separate modules that implement different authentication strategies. Each module provides a different authentication method, such as username/password authentication and OAuth authentication, means *Signin with Google* *Facebook*, *Twitter* etc. 
In our case, we will use the local authentication strategy. It will allow us to implement a username/password based authentication mechanism.

### Now, let's start with the implementation
First, we will import the necessary libraries which we have just installed, in `index.js` file.
```js
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const session = require('express-session');  // session middleware for cookie support
const LocalStrategy = require('passport-local').Strategy
```

#### Session management
When creating an application that authenticates users, you have two main choices for authorization and storing user data:
1. Sessions
2. JSON Web Tokens (JWT)

Sessions are the traditional method and used by many applications. It is a straightforward and secure way to manage the user data. The `express-session` is a handy library for adding session handling into your ExpressJS applications.

Next, we will configure the `express-session` in `index.js` file.

```js
app.use(session({
  secret: 'my-super-secret-key-7218728182782818218782718hsjahsu8as8a8su88',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24* 60 * 60 * 1000 } // 24 hour
}));
```

Now, we have to ask `passport` to work with our Express application.
```js
app.use(passport.initialize());
app.use(passport.session());
```

#### Next, let's define the authentication strategy for passport
In `index.js`:
```js
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({ where: { email: username, password: password } }).then(function(user) {
      return done(null, user);
    }).catch((error) => {
      return done(err);
    });
  }
));
```
To authenticate, Passport first looks at the user's login details (i.e. email and password), then invokes a verified callback (`done`). Whenever the user gets properly authenticated, we are passing the `user` object into the callback. If the user does not get appropriately authenticated, we are passing the specific error message into the callback.

#### Next, we have to store and retrieve user information in session
As we are managing our app's sessions with Passport, as soon as a user gets appropriately authenticated, a new session begins. At that time, we will serialize the user data to the session and the user ID will be stored in `request.session.passport.user`. Let's do that
```js
passport.serializeUser(function(user, done) {
  console.log("Serializing user in session: ", user.id)
  done(null, user.id); 
});
```

To access user information from session, we will use the `deserializeUser` method.
```js
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error, null);
    });
});
```
As the `userId` is stored in session, we are just quering our database to get the user information, then we are passing the user data to the callback. The user data gets attached to `request.user`.