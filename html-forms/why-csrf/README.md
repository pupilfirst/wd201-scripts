## Text

You saw that we could create a new to-do by doing a POST request from both Postman and from our own website.

Now consider a malicious website, in which you have to click a button to do something.

However, what you may not realize is that the button causes a _form submit_, and the form looks like this:

```html
<form action="http://the-todo-app.com/todos" method="post">
  <!-- ... -->
  <!-- ... -->
</form>
```

This means when you press that _Submit_ button, your browser will send a POST request to our To-do application, and whatever content was in that form will get saved as a new to-do.

This is a reasonably benign attack, but what if the form was to your bank to withdraw funds... or if it were to change your password from your Instagram account?

These kinds of attacks are called Cross Site Request Forgeries (CSRF), and is one of the most common security vulnerabilities on the internet.

There is a world-wide community project called OWASP - Open Web Application Security Project - which is the gold standard in security best practices for web applications. [They describe the CSRF attack in a highly readable manner](https://owasp.org/www-community/attacks/csrf). Please read it.

In addition to the above reading, you can also watch the following video which describes this attack.


> Add https://www.youtube.com/watch?v=vRBihr41JTo
