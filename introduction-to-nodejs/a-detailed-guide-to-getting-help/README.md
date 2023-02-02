# A detailed guide to getting help

Let's answer the question of what happens when you get stuck. Or from your perspective, the question would be: "What should I do when I get stuck with something"?

While you're going through this course, you'll probably encounter a few different kinds of places where you might feel stuck, or blocked, or confused. That's okay - it's normal to be stuck, or feel confused. When that happens, you need to ask questions.

The Pupilfirst School Discord server is the place to ask those questions. You should already be a member of this community. In the Discord server, the best place to ask doubts related to the course is the `#wd-forum` channel. The coaches and teaching assistants here at Pupilfirst regularly monitor Discord for new questions, and we try to make sure that we answer each and every one of your queries.

**But**, you need to help us with that. When you're creating a new post about some problem you've encountered, you can use the following process to help us figure out what exactly is going wrong.

Let's go through this using an example. I'm going to type in the title for an imaginary issue that I'm having:

> Type in `Unexpected token error when parsing JSON`.

When you first type this into the wd-forum channel, it'll do a quick search to see whether posts like this have been created in the past. If any show up, make sure that you go through those quickly to see if your issue was encountered in the past by someone else, and maybe even resolved.

In this case, there are no matching posts, so I'm going to click the _New Post_ button, which will let me add more details before creating a new post.

When creating a post in the forum, there's a method that you can use to make sure that you're making a _good_ post. I'm going to quickly list the information we'd like you to share
Before getting into examples, let me quickly list the information we'd like you to share:

> Paste in the following headings, and then describe them.

```
**Describe the issue**\

**What I expected would happen**\

**The things I've done to try and fix the issue**\

**Code snippets (optional)**\

**Logs (optional)**\

**Screenshots (optional)**\
```

### Describe the issue

A clear and concise description of what the issue is.

> Replace heading with:

```
My program is crashing with an `Unexpected token < in JSON at position 0` error when I attempted to fetch some data from my API, and then parse it.
```

### What I expected would happen

Details about what you were doing when you encountered the issue, and what you expected would happen.

> Replace heading with:

```
Instead of the crash, I was expecting to see a console message with the parsed data.
```

### The things I've done to try and fix the issue

Steps you've already taken to try and avoid or solve the issue.

This will tell us what _not_ to suggest.

> Replace heading with:

```
I tried visiting the URL that is being called in my browser, and the response looks like valid JSON.
```

### Code snippets

Snippets of code associated with your problem (don't share full files). If your problem is associated with a submission, let us know which one, and we can take a look at it.

> Replace heading with:

````
Here's the snippet of code that I'm having trouble with:

```js
fetch('https://example.com/some/path/to/json')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
```
````

### Logs

If there are any error logs, please share relevant/important portions of it. If you're unable to tell which portion might be useful, save everything into a text file, and upload the log file.

> Replace heading with:

````
The error message that shows up in the JS console:

```
Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```
````

## Screenshots

If there's visual issues that you're discussing, share screenshots or videos. You can take screenshots and insert them directly into the Markdown editor, so that they're easy to see. You can attach files by clicking the button at the bottom of the markdown editor. If you select a file, it'll be uploaded and a link to the uploaded file will be inserted into the Markdown text.

You can also record videos of your screen and talk us through the problem you're facing. There will be [a separate video](./video_recording.md) that details how best you can do this. With both of these options - screenshots and screen recordings - please try to avoid sharing any personal information; remember that Discord posts are visible to everyone who has access to the server.

---

As you can probably tell, the basic idea here is to share as much useful information as possible at the _beginning_ of your interaction - this helps save time in back and forth messages collecting required info. You don't need to follow these exact same steps - you just need to keep in mind that you should provide as much helpful info as possible when asking a question.

This pattern of using a template, a structured method, to make post like this isn't something we came up with either.

> Demo issue template on Github: https://github.com/pupilfirst/pupilfirst/issues/new?assignees=&labels=bug&template=bug_report.md

This sort of structured approach to issue reporting is common in the industry. If you want to report an issue on a project's GitHub repository, you'll often find yourself being asked a series of questions. The purpose is the same - to gather as much useful information as possible when a thread of conversation starts - this helps resolve issues quicker.

> Switch back to Discord.

Let's recap: When you have a doubt, come to `#wd-forum`. Start by typing the name of the topic just to search is someone has already asked a question related to your problem.

> Paste in topic title `I have a tricky problem (Don't actually write this! Write something more helpful)`

If there are no previous questions or answers, provide lots of details about your problem. If you're not sure how to ask a question, use the template that I described in this video.

> Paste in the template from earlier in the script.

That'll help save time by avoid unnecessary back & forth messages. Finally, hit the _Post_ button, and a coach or a teaching assistant, or perhaps even a fellow student will reply shortly.
