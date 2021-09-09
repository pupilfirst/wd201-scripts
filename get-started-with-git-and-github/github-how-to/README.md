# Github: How To

I'm going to quickly introduce Github, and how to use the `git` command line application to submit work in this course. You're going to be doing this quite a bit, so let's start off this course by getting comfortable with git.

First of all, you should install git on your system if you haven't done that already. On Ubuntu Linux, you'll simply need to type in the command `sudo apt-get install git`, and that'll take care of installation.

If you're using macOS, you should already have `git` installed on your system - no additional step should be required.

Before continuing, let me quickly mention why this course requires you to use git. git is the defacto standard for version control in the coding industry. Regardless of which language you use in your work, you'll almost certainly be using git as your version control system. So it's pretty much necessary knowledge to work as a developer.

In this lesson, let's simply play around with git, and start getting comfortable with it. I'll start by creating a folder called `wd-github-demo` to hold some code that we plan to write. Let's go into the folder, and try out the `git status` command. git will tell us that this isn't a git repository. So let's turn this folder that we just created _into_ a git repository by typing in the command `git init`. This creates a hidden folder `.git` (`ls -al`). This folder is where git is going store its own information. Don't edit anything inside this `.git` folder unless you know what you're doing.

Now if we try the `git status` command again, git tells us that we're on the branch `master`, but that there are no commits yet. You can think of commits as _changes_, and git tracks changes inside a repository, usually called by its short-form _repo_, as a series of commits.

So far, we've only created an _empty_ repository, so let's get things going by creating a new file. We can create a `README` file with the `touch` command (`ls -l`). This command just created an empty file with the filename `README`.

If we run `git status` again, git tells us that there's now an untracked file, and that we can add it with the `git add` command. So let's do that. If we try `git status` again, it tells us that there is a change that is ready to be committed. So we can finally make our first commit.

Whenever we make a commit, when we save this change, we need to give a message. For the first commit, it's common to simply say `Initial commit`.

Now that we have a git repo with with a commit, we can push this repository to Github so that others can see our work. You should create a new repository in Github with the same name.

I'll create a repo in my account with the name `wd-github-demo`.

Now we can clone the repository using two methods: HTTPS or SSH. In this demo, I'm going to use HTTPS, simply because it's faster to demonstrate. But it's also possible to use SSH. The main difference between these two methods is how you'll authenticate with Github. HTTPS will need you to create a personal access token, whereas SSH will require you to register your SSH keys with Github.

For this course, we suggest using HTTPS _or_ SSH, but both are valid choices, so there will be links below this video that contain instructions for setting up Github authentication for both HTTPS _and_ SSH.

With that out of the way, Github has given commands to run for two cases - first if you don't have a repository already, and second if you have one. I'm going to copy the second list of commands, because I already have a repo, and I'm simply paste those into my terminal and execute them.

At this point Github will ask for username and a password. When using HTTPS, instead of using your Github account password, we're going to have to create what's known as a _Personal Access Token_. To create one, let's head back to Github, and visit the _Settings_ page... _Developer Settings_... _Personal access tokens_, and click the _Generate new token_ button. I'll give this token the note _Repo control_, set the _Expiration_ to 90 days (you can make a different selection here, if you want), and finally select the scope _repo_. This restricts the token to only be used to manage your repositories. Finally I can scroll down, and hit the _Generate token_ button.

Treat the token that is created like a password. This will be shown only once, so save it in a secure location - if you use a password manager, this string should go in there. I'll copy this string by hitting the copy button next to it.

Now I can switch back to the terminal, and type in my username. When it asks for the password, I'll simply paste the copied value. Note that it won't show up on-screen - it's a common practice for password inputs to not show anything on-screen so as to avoid anyone looking over your shoulder from seeing your passwords. So just paste in the token, and press _Enter_.

Now if we go to the repository on Github, and reload the page, we can see that the `README` file is now in Github. Now that we've connected these two repositories, it's much easier to push changes to the repository.

> Run `code .` in the repo.

For example, if I make a small change to the README file. I'll edit the file to include the string `Hello Github!`. Now, if I run `git status`, git has detected the change. So I can `git add` the `README` file again, and commit the change: `git commit -m "Say hello"`. Now, all I need to run is `git push`, and that'll push the change to Github.

Indeed, if I check the repository on Github, the message has showed up there.

That was a quick demo of how to push code to Github. In this course, you're going to find many tasks that ask you submit your code as Github URLs. When that happens you'll want to push your code to a Github repo, and then share the URL to that repository or a folder within the repo, with us as a part of your submission.

That's it for now. Have fun with the course!
