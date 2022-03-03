# Orientation: Getting help

Let's answer the question of what happens when you get stuck. Or from your perspective, the question would be: "What should I do when I get stuck with something"?

While you're going through this course, you'll probably encounter a few different kinds of places where you might feel stuck, or blocked, or confused. That's okay - it's normal to be stuck, or feel confused. When that happens, you need to ask questions.

The web development community is the place to ask those questions. To reach the web development community, the quickest way from your Dashboard would be to visit the communities tab, and then click _Visit Community_ on the _Web Development_ community that's listed there. The coaches and teaching assistants here at Pupilfirst regularly monitor the community for new questions, and we try to make sure that we answer each and every one of your queries.

**But**, you need to help us with that. When you're posting a new topic about some problem you've encountered on the community, you can use the following process to help us figure out what exactly is going wrong.

Let's go through this using an example. I'm going to type in the title for an imaginary issue that I'm having:

My app crashes when showing errors using a flash message

Before getting into examples, let me quickly list the information we'd like you to share:

**Describe the issue**\
A clear and concise description of what the issue is.

**What I expected would happen**\
Details about what you were doing when you encountered the issue, and what you expected would happen.

**The things I've done to try and fix the issue**\
Steps you've already taken to try and avoid or solve the issue.

This will tell us what _not_ to suggest.

**Code snippets (optional)**\
Snippets of code associated with your problem (don't share full files). If your problem is associated with a submission, let us know which one, and we can take a look at it.

**Logs (optional)**\
If there are any error logs, please share relevant/important portions of it. If you're unable to tell which portion might be useful, save everything into a text file, and upload the log file.

**Screenshots (optional)**\
If there's visual issues that you're discussing, share screenshots or videos. You can take screenshots and insert them directly into the Markdown editor, so that they're easy to see. You can attach files by clicking the button at the bottom of the markdown editor. If you select a file, it'll be uploaded and a link to the uploaded file will be inserted into the Markdown text.

You can also record videos of your screen and talk us through the problem you're facing. There will be [a separate video](./video_recording.md) that details how best you can do this. With both of these options, please try to avoid sharing any personal information - remember that community posts are visible to all students.

---

**Describe the issue**\
My application crashed when I attempted to show an error message using a flash message.

**What I expected would happen**\
Instead of the application crashing, when validation fails, I expected the error message to be shown as a flash.

**The things I've done to try and fix the issue**\
When there are no validation error, the app works fine, and I see a flash message, so something is wrong with on the `if todo.save!` line - I can't figure out what it is, though.

**Code snippets**

Here's the `create` action in my `TodosController` where the error is happening.

```ruby
class TodosController
  def create
    todo = Todo.new(title: params[:title])

    if todo.save!
      flash[:success] = 'A new todo has been created!'
      redirect_to root_path
    else
      flash[:error] = todo.errors.full_messages.join(', ')
      redirect_to new_todo_path
    end
  end
end
```

**Logs (optional)**

The error message that shows up in the browser is:

```
ActiveRecord::RecordInvalid in TodosController#create
ValidationFailed: Title can't be blank
```

As you can probably tell, the basic idea here is to share as much useful information as possible at the _beginning_ of your interaction - this helps save time in back and forth messages collecting required info. You don't need to follow these exact same steps - you just need to keep in mind that you should provide as much helpful info as possible when asking a question.

With all of your information typed in, all you need to do is hit _Create Topic_, and a new topic would be created on the Web Development community.

This pattern isn't something we came up with either.

> Demo issue template on Github: https://github.com/pupilfirst/pupilfirst/issues/new?assignees=&labels=bug&template=bug_report.md

This sort of structured approach to issue reporting is common in the industry. If you want to report an issue on a code repository, you'll often find yourself being asked a series of questions. The purpose is the same - to gather as much useful information as possible when a thread of conversation starts - this helps resolve issues quicker.
