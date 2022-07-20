# Text
Previously, when we've implemented our user signup flow, we've stored the password as plain text in database. But it's not a good practice, as if anyone can hack into our database, they would be clearly able to see the user credentials. To prevent that from happening, we're going to store a digest of that password.

Before we do that, let's look at the bcrypt library, and see what a password digest looks like.

# Script
In this tutorial, we are going to see how we can store our users password in our database, in a secure manner. Now we have already discussed this before, we do not ever store the actual passwords as they are. In fact no modern service, saves your passwords in their databases. You can sort of notice that if you go to say Gmail or any other web service that you use on a on a very frequent basis, and if you forgot your password, what they do is they don't send you your original password back to you. They can't because they don't have that data with them. What they instead do is, they send a password reset link, so you can generate and create a new password by yourself. So the reason for this is again, companies don't want to store your original passwords in their databases. 

So a couple of questions:
  - What are they doing storing, instead of your actual password? 
  - And how do they verify when you type your password and you try to login, how do they verify whether your password is correct or not?

So we are going to answer both of those questions in this video and then we will look at how we can implement the say in our To-do manager application.

### Let's start with the installation of a library called bcrypt

#### Now what is bcrypt?
**Bcrypt** is a password hashing function which encrypts your password. 

**Hashing** a password refers to taking a plain text password and putting it through a hash algorithm. The hash algorithm takes in a string of any size and outputs a fixed-length string. No matter the size of the original string (i.e., the plain text password), the output (the hash) is always the same length. Since the same process is always applied, the same input always gives the same output.

In our application, we will use Bcrypt.js to encrypt passwords before saving it into the database. 

To install `bcrypt`, in the terminal we will execute the following command
```js
npm install bcrypt --save
```

### Use bcrypt to encrypt password
To use `bcript`, first we have to import the library in our `index.js` file.
```
const bcrypt = require('bcrypt')
```
Now, we have to define a **salt** to encrypt our password with bcrypt. A salt is a random string that makes the password hash unpredictable. By hashing a plain text password plus a salt, the hash algorithm’s output is no longer predictable.

Next, we set the `saltRounds` value. The higher the `saltRounds` value, the more time the hashing algorithm takes. We have to select a number that is high enough to prevent attacks, but not slower than potential user patience. In this example, we use the default value, 10.

```js
const saltRounds = 10;
```

To generate a hashed password while user signup, we will update the `POST /users` route.
```js
app.post('/users', async function (request, response) {
  const hashedPwd = await bcrypt.hash(request.body.password, saltRounds);
  console.log(hashedPwd);
  const user = await User.create({ 
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email, 
    password: hashedPwd
  }).catch((error) => {
    console.log(error)
  });
  // Create session after successful signup
  request.login(user, function(err) {
    if (err) {
      console.log(err);
    }
    return response.redirect('/todos');
  });
})
```

Now, let's try to signup once again, it works. Now let's see how the password looks in PGAdmin.
> Action: Show users table

So, we've successfully encrypted and stored hashed password in database. 

# Text
In the next lesson, we will design and implement the **User Signin** functionality. There we will learn to compare the plain text password with the hash stored in database. See you there.
