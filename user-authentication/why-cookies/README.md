# Text

While learning about User authentication with sign-in and sign-up, we also need to learn a bit more about how this impacts the way we use the application.

Once a user signs in successfully, they should be able to access the rest of the application and see data that is theirs.

But each of them would be a different HTTP request. So in the second request, the server wouldn't know that this is already a signed-in user. We need a way to persist the state between requests.

That's what a cookie is used for. Any web application that wants to track a user across many requests needs to use cookies. Cookies are a foundational part of the web and are widely used by every website you have ever visited.

Let's learn a bit more in detail about them to understand how they work.

## How Do Cookies and Session Work?

In the last few lessons, you've learned to sign up a new user that creates an entry in the user's table and then sign in by authenticating with a password. The next thing that we need to do is to keep track of the session. Once a user is signed in, every request that our web server receives needs to know that this is a currently logged-in user.

While **Node.js** and **Express** abstract away a lot of complexity about knowing how cookies and sessions work, it is important to know how these things work at a high level.

When we logged in to our application, then it gave us a message that the user is signed in and displayed our created to-do list. What if we wanted to refresh the page and still see the same to-do list being available for us without having to log in again. To make sure that the user, who is logged in, is in the session, the application sends additional data to the server. While getting the list of to-do, this additional data is what we call the `Cookie`, using which the application identifies which user is logged in and what data is to be sent back.

So what are these Cookies? These are small pieces of data that the server sends to the user's browser after logging in or signing in, and we attach this data to every other request we sent to the same server. If the data being sent matches the data which was returned from the server, it knows that the user identity is the same.

Any time the logged-in user requests data from the server, it responds only if the Cookie is valid and matches with the user requesting the data.

If the Cookie is not a part of the data we sent across, the server understands that the cookie is not available or valid anymore and logs out the user in our application.

Updating or interfering with the cookie data in any sort will make sure that any new request being sent to the server fails for authentication and the user is logged out.

For example, let's make a change to the cookie which is already created by changing a single character. Refreshing the page, the cookie that is being sent across to the server is not the same as the one it sent to us while logging in. The application signs us out and redirects us to the Sign-in page.

A cookie is encrypted data, and it's not possible for us to decrypt it from our application. It's only the server that will be able to match it and then send the necessary response to our webpage/application.

Another advantage of cookies is that, the browser stores this cookie data for an entire session. That is, if you open a new tab, and navigate to the to-do list page you will still be able to see the to-do list instead of having to sign in back again.

Ideally, there are two ways to log out a user from a session. One is by removing the cookies which are already stored from the browser session itself. Two is to send a request to the server to remove the session cookie, which is available. This means that any new request using the current session cookie will be invalidated, and the user will be logged out of the current session.

The general drawback of the cookie is that if you share the specific cookie, which is basically an access cookie, with a third party, they can use this to steal data related to you from your application.

`Express` and `passport` have built-in mechanisms wherein we can set a particular expiry time for a cookie. This makes sure that if you are not in session, or you are not accessing the data for an extended period of time, it can invalidate the cookie automatically.

Browsers also have inbuilt mechanisms wherein they don't share private data across different web applications/domains. This means that even if you want to share data with another domain or web application, you might not be able to share the cookie itself. The browsers have mechanisms to block this kind of request, called Cross-site request forgery.

While a lot of this might seem complicated, most of the scenarios covered here or explained here or already taken care of by Node.js and express. The expectation here is just for you to understand how cookies and sessions work, as it is an integral part of web development. Understanding this gives you a better view of how to create secure web applications in general. See you at the next level.
