# Text
Now that we can sign up new users and store their password digests, we're ready to sign in existing users.

For this, we need a simple sign-in form, and then we will use the `compare` method ob bcrypt to authenticate the passwords against the digests stored in our users table.

Let's see how!

# Script
In this tutorial we are going to implement the sign-in functionality. We should be able to type in the email which is our identifier and we should be able to type in a password and when we click on sign in, if the password is correct it should take us to the protected `/todos` path, else  if the password is not correct it should show the error message.

To start with, first we have to add a route for showing the signin page. We will do that in our `index.js` file.
```js
app.get("/login", (request, response) => {
  response.render("login"); // it refers to login.ejs in views folder
});
```
Next, we will create the `login.ejs` template for this login page, inside the views folder.
```html
<html>
  <head>
    <title>TO-DO Manager</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="grid grid-cols-6">
      <div class="col-start-3 col-span-2 py-10">
        <h1 class="text-xl text-slate-600 font-semibold mb-4">To-Do Manager</h1>
        <h6 class="py-4">Login to you account</h6>
        <form action="/session" method="post">
          <div class="py-3">
            <label for="email">Email: </label>
            <input name="email" type="email" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required>
          </div>
          <div class="py-3">
            <label for="password">Password: </label>
            <input name="password" type="password" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required>
          </div>
          <div class="py-3">
            <button type="submit" class="text-white bg-green-600 hover:bg-green-700 font-medium rounded text-sm px-5 py-2 mr-2 mb-2">Sign-in</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
```
> Action: explain the code, while writing.

Our signin form's action is set to `/session` path with `POST` request. Let's define that route in the `index.js` file
```js
app.post('/session', passport.authenticate('local', { failureRedirect: '/login' }),  function(request, response) {
  console.log(request.user)
	response.redirect('/todos');
});
```
In our route handler, we are calling the call `passport.authenticate`, with two parameters:
- 'local': The primary strategy we are using
- failureRedirect: If the user does not authenticate, they get redirected to the login page.

If the user fails to authenticate, they are sent back to the login page. If they do authenticate, the code inside the callback will execute:
- Which means, once the user authenticates, they are redirected to /todos page (which we've already declared as a protected route).

> Action: Signin in browser.
Now if you would try to signin, well it isn't working. And the reason is, we've encrypted our password while storing in database. So, we have to upgrade our *passport strategy* to encrypt and compare the password submitted via the login form, with the one present in database.


### So, we will use a bcrypt method to verify password
We have to compare the plain text password to the hash stored in database. We do so by using the bcrypt `compare` function.

We have to pass the following parameters to `bcrypt.compare()`:
- The password we are comparing
- The hash that is stored in the database
- Callback of error and the result: If the password matches the hash, the result equals `true`. If it is not a match, the result equals `false`.


So, it's time to tell our *passport strategy*, to compare the password coming in login request, with the encrypted password stored in database.
In `index.js`:
```js
// Passport Local Strategy
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({ where: { email: username } }).then(async function(user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user);
      } else {
        return done("Invalid password");
      }
    }).catch((error) => {
      return done(err);
    });
  }
));
```
> Action : explain code on the go

Now, try to login once again, and this time it works. Great!

### Fixing CSRF vulnerablity
Now, this login form has one major security concern, as it is vulnerable to CSRF attacks. To fix it, we will edit the `index.js` file to generate a csrf token.

```js
app.get("/login", (request, response) => {
  response.render("login", { csrfToken: request.csrfToken() });
});
```
Next, we will render the `csrfToken` in our login form, as a hidden field, which will automatically get submitted.
```html
<h6 class="py-4">Login to you account</h6>
<form action="/session" method="post">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  ...
  ...
</form>
```
Save the file and let's restart our server.
> Action: try loigin once again.

As you can see, login feature works as expected.


That's it for this video, see you in the next lesson.