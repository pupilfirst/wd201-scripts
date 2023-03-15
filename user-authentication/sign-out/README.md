# Text
In this tutorial, we'll implement the sign-out functionality.

# Script
Let's now make it possible for our currently logged-in user to sign out of the application. So we need to add a link for sign out, and when someone would click on that, we need to take the user to `/signout` endpoint, to destroy the current user session.

So, let's start by adding a route in `index.js` file
```js
app.delete('/signout', function(req, res, next) {
  // need to implement signout behaviour here
});
```
To destroy the user session, we've used the `DELETE` method.

Next, in our **Todos** template, we will add a `Signout` link.
```html
<a href="/signout" method="delete">Signout</a>
```
Here also, we've set the method as `delete`.

Now, if we would click the **Signout** link, nothing would happen. To make it work, we have to write some logic inside our route definition.

Do you remember? in our previous lesson, when we've implemented authentication using passport, we've used a library called `connect-ensure-login`. We've also protected our `/todos` route using the `connectEnsureLogin.ensureLoggedIn()` method from that library. With this one function call, we can authorize any routes, to only logged-in users. This `connectEnsureLogin.ensureLoggedIn()` also makes the session information available inside the `request` body. Not only that, it also gives us a `logout()` method to destroy the current user session.

```js
app.get('/signout', function(request, response, next) {
  request.logout(function(err) {
    if (err) { return next(err); }
    response.redirect('/');
  });
});
```
Here, `request.logout` logs out the user, and `response.redirect` redirects the user to another page. In this case, the user gets redirected to landing page `/`.

> Open browser to logout.
Now in the browser, if we try to logout now, it will work.

If we try to access the `/todos` page now, it will redirect us to `/login` page, just as expected.

That's it for this video, see you in the next lesson.