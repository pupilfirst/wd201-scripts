## Script

In this video, we will modify our tests to make sure it works.

Right now we have tests for creating a new todo, marking a todo as complete, and one for deleting a todo. So if we try to run the tests,

> Action: run the command `npm test`

we can see, it is failing. Let's now fix it.

When we wrote the tests, we didn't have any authentication mechanism. Right now, all these functionality is associated with a user account. So let's begin by writing a test for verifying the signup functionality.

> Action add the following test.

```js
test("Sign up", async () => {
  let res = await agent.get("/signup");
  const csrfToken = extractCsrfToken(res);
  res = await agent.post("/users").send({
    firstName: "Test",
    lastName: "User A",
    email: "user.a@test.com",
    password: "12345678",
    _csrf: csrfToken,
  });
  expect(res.statusCode).toBe(302);
});
```

Here, we first send a request to the `/signup` page.

> Action: Show `signup.ejs` and highlight hidden input csrf field

And extract the CSRF token from the html response.

> Action: Switch back to test file

Then send a `POST` request to `/users` to create a new user.

> Action: show `/users` handler in `app.js`

If the requests gets succeeded, we will be redirected to `/todos` page.

Now, let's run our tests.

```sh
npm test
```

You can see the signup test works fine. Now Let's fix the other tests.

We only need to change the url, which we use to get the csrf token.

> Action: Change the initial url in tests to get the csrf token

```js
`/todos`;
```

So we will change the url in `create new todo` test, `marking as complete`, and in the `delete` test as well.

Let's run our tests now.

```
npm test
```

All of our tests are now passing. But, how did that happen? We didn't specify any user credentials. All these functionalities are supposed to be private or only available to a logged in user.

The answer is in the `signup` test that we wrote. We use a common agent across our tests, and once we signup, we automatically logs in a user.

> Action: Show the automatic login code in signup handler.

Hence while running the other tests, the agent is already logged in.

We can break this by simply adding a test for `signout`.

```js
test("Sign out", async () => {
  let res = await agent.get("/todos");
  expect(res.statusCode).toBe(200);
  res = await agent.get("/signout");
  expect(res.statusCode).toBe(302);
  res = await agent.get("/todos");
  expect(res.statusCode).toBe(302);
});
```

So, if an agent is already logged in, visiting `/todos` will render the todo list, or the status code will be 200. Then we will make a `GET` request to `/signout` where the session will be destroyed and the agent will be redirected to `root` page. Then again visiting `/todos` should redirect the agent to `/login` page, because now the agent is not authenticated.

Let's run the tests.

```
npm test
```

And all our other tests now fails.

Let's add a helper function to do the login.

```js
const login = async (agent, username, password) => {
  let res = await agent.get("/login");
  let csrfToken = extractCsrfToken(res);
  res = await agent.post("/session").send({
    email: username,
    password: password,
    _csrf: csrfToken,
  });
};
```

So this helper function would take an agent, issue a request to `/login`, extract the csrf token, then use the username and password along with csrf token to login. If username and password are correct, the agent will be authenticated. And it can be used for sending authenticated requests.

So let's replace this global agent in all our tests with a local agent.

> Action: change agent in tests with following code

```js
const agent = request.agent(server);
await login(agent, "user.a@test.com", "12345678");
```

We will reuse the same user credentials which we used to signup.


You can add few more tests to check the permissions, like adding tests which verifies user A cannot update and delete todos of user B. Usually it is a good engineering practise to write tests for all of the functionality of a system. Doing so helps in reducing manual testing needed when a new change is made to the system. We can simply run the tests to make sure everything works fine.
