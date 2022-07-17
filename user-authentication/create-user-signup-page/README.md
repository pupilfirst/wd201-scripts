# Text
Now that we have created the `users` table and using Sequelize migration, let's create an HTML form where new users can sign up.

# Script
In this video, we are going to create a user signup form. So, when someone new comes to our To-Do application, they should see a link to signup. When we click on the signup link, we should take them to the signup form, where they have to fill some details like: firstName, lastName (which we will keep as optional), email and password. Then, when they click on the signup button, it should take them to a new `users` route as a POST request, to create an entry for this new user in our database. Then, we have to sign-in the user in local browser session. Let's start.

First, we will start with the landing page, open the `views/index.ejs` file, there we will add a link to our signup page.
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
        <p class="py-2">Welcome to the To-Do Manager</p>
        <p class="py-2">New here? <a href="/signup" class="text-green-600">Sign-up now</a></p>
        <p class="py-2">Already have an account? <a href="/login" class="text-green-600">Sign-in</a></p>
      </div>
    </div>
  </body>
</html>
```

Now, in the browser, if we would click the **Signup** link, ohh it shows an error `Cannot GET /signup`. This error is coming, because we haven't defined the route for signup page yet. Let's define that, in our `index.js` file.
```js
app.get("/signup", (request, response) => {
  response.render("signup");
});
```
Here, in response, we are asking our app to render a **ejs** template named `signup`. So, in the `views` folder, we will create this `signup.ejs` file. And inside this file, we will design our signup form using HTML.
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
        <h6 class="py-4">Signup as a new user</h6>
        <form action="/users" method="post">
          <div class="py-3">
            <label for="firstName">First name: </label>
            <input name="firstName" type="text" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" autofocus required>
          </div>
          <div class="py-3">
            <label for="lastName">Last name: </label>
            <input name="lastName" type="text" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2">
          </div>
          <div class="py-3">
            <label for="email">Email: </label>
            <input name="email" type="email" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required>
          </div>
          <div class="py-3">
            <label for="password">Password: </label>
            <input name="password" type="password" class="border border-gray-300 text-gray-900 text-sm rounded w-full p-2" required>
          </div>
          <div class="py-3">
            <button type="submit" class="text-white bg-green-600 hover:bg-green-700 font-medium rounded text-sm px-5 py-2 mr-2 mb-2">Sign-up</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
```
> Action: Explain the HTML on the go.
Now, as you can see, the form's *action* is set to `/users` path with `POST` method. So, once again, in browser, if we would try to submit the form, it will show me an error `Cannot POST /users`. Because, we haven't defined the route yet. TO do that, open the `index.js` file
```js
app.post('/users', async function (request, response) {
  // Have to create user here.
})
```
Now if we would try to submit the form once again, in the browser's network console, we will be able to see all four values (firstName, lastName, email & password) are getting submitted to the the endpoint we've just created. Now, lets see we are geeting these values in our *user signup endpint* or not.
```js
app.post('/users', async function (request, response) {
  console.log("firstName", request.body.firstName)
  console.log("lastName", request.body.lastName)
  console.log("email", request.body.email)
  console.log("password", request.body.password)
})
```
Submit the form again, and, ohh, in the terminal, all of these values shows `undefined`. This problem is coming because Express is unable to read form values from the request body. 
To fix it, we will use a built-in Express middleware function called, `express.urlencoded()`. This function parses incoming requests with urlencoded payloads. To configure it, in your `index.js` file, we have add the following code:
```js
// Handling form values
app.use(express.urlencoded({
  extended: true
}))
```
Let's resubmit the form, and yes! This time it shows the submitted values in terminal. 

Great! Now we have to use the `User` model, to save the new user information into database.
First, we've to import the `User` model at top of the `index.js` file.
```js
const { User, Todo } = require("./models");
```
Now we will create the user:
```js
app.post('/users', async function (request, response) {
  const user = await User.create({ 
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email, 
    password: request.body.password 
  }).catch((error) => {
    console.log(error)
  });
  response.redirect("/"); // Redirected to root path
})
```
Let's try it out.
> Action: fill the form
Yay! On successful submission, it redirected me back to the root URL. To check the user entry in database, let me open PGAdmin.

See, in `Users` table, the new user information got saved successfully. But, the `password` is stored as a plain text here, which is kind of a very risky thing. As, if anybody can manage to seek into the database, they will be able to see complete user credentials. We will fix this issue in future.

That's it for this video, see you in the next one.

