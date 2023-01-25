## GitHub: How To

In this video, I'm going to show you, how to use the `git` command line interface.

Before continuing, let me quickly mention why this course requires you to use git. Git is the de facto standard for version control in the software industry. Regardless of language you use in your work, you'll almost certainly be using git as your version control system. So it's pretty much necessary for every developer out there.

In this lesson, we will simply play around with git, and start getting comfortable with it.

We're going to do that by creating the course repository that we'll be using throughout this course.

I'm going to go to my `code` folder, and then create a directory called `wd201` - this is going to be our course repo. Into this folder, I'm going to move the `hello-world` application that we built a little while ago. This will be the first project that we commit into this repo.

Let's go into the `wd201` directory, and try out the `git status` command. git will tell us that this isn't a git repository. So let's turn this folder that we just created _into_ a git repository by typing in the command `git init`.

This creates a hidden folder called `.git`. We can see that folder by running `ls -al`. We can even go into this folder and take a look at what's inside (`cd .git`). This folder is where git is going store its own information. Don't edit anything inside this `.git` folder unless you know what you're doing.

> Head back out: `cd ..`

Now if we try the `git status` command again, git tells us that we're on the branch `master`, but that there are no commits yet. You can think of commits as _changes_, and git tracks changes inside a repository, as a series of commits.

git is also telling us that there's now one untracked file, which is actually the `hello-world` directory that I'd moved here just a few seconds ago. git also tells us that we can _track_ these new files using the `git add` command. So let's do that.

If we try `git status` again, it tells us that there is a change that is ready to be committed, and it lists the two files in the folder.

Before we make our first commit, I want to do one more thing. In the `wd201` directory, I'm going to create a file called `.gitignore`, and in this new file I'm going to write one line for now - `node_modules`. In the next couple of lessons, we're going to be writing names of certain packages we want to download in `package.json`. When NPM - the Node Package Manager - downloads these libraries, it keeps them inside a `node_modules` folder. We don't want git to track these third-party libraries. We only want git to track the history of files that _we_ create. Hence, we're telling git to ignore these `node_modules` folders.

Now that we have these three files staged for a commit, we can make our first commit.

You can think of a commit like you're saving the state of how this directory looks right now. After we make a commit, git will always be able to return to this particular state - the way all tracked files are right now, regardless of whatever future changes you make to them.

Because this is a permanent record, whenever we make a commit to save a change, we need to give a message. This message will get stored alongside the commit. For the first commit in a repository, it's common to simply say `Initial commit`.

> Run `git commit -m "Initial commit"`

If I run `git log`, to see a log of all the commits in the repo, I can see that the commit is there, along with its message.

Now that we have a git repo with with a commit, we can push this repository to GitHub so that others can see our work. We can do this using the `git push` command. Before we can do that, we'll need to a new _empty_ repository in GitHub with the same name.

So, I'll go ahead create a repo in my account with the same name as the directory we created - `wd201`.

Now we can push and pull code to and from the repository using two methods: HTTPS or SSH. In this demo, I'm going to use HTTPS, simply because it's faster to demonstrate. But it's also possible to use SSH. The main difference between these two methods is how you'll authenticate with GitHub. HTTPS will need you to create a personal access token, whereas SSH will require you to register your SSH keys with Github.

For this course, we suggest using HTTPS, but both HTTPS and SSH are valid choices. There will be links below this video that contain instructions for setting up GitHub authentication for both HTTPS _and_ SSH.

With that out of the way, GitHub has given commands to run for two cases - first if you don't have a repository already, and second if you have one. I'm going to copy the second list of commands, because I already have a repo (we just created one on our system), and I'm simply going to paste these commands into my terminal and execute them.

At this point GitHub will ask for username and a password. When using HTTPS, instead of using your GitHub account password, we're going to have to create what's known as a _Personal Access Token_. To create one, let's head back to GitHub, and visit the _Settings_ page... _Developer Settings_... _Personal access tokens_, and click the _Generate new token_ button. I'll give this token the note _Repo control_, set the _Expiration_ to 90 days (you can make a different selection here, if you want to), and finally select the scope _repo_. This restricts the token to only be used to manage your repositories. Finally I can scroll down, and hit the _Generate token_ button.

Treat the token that is created like a password. This will be shown only once, so save it in a secure location - if you use a password manager, this string should go in there. I'll copy this string by hitting the copy button next to it.

Now I can switch back to the terminal, and type in my username. When it asks for the password, I'll simply paste the copied value. Note that it won't show up on-screen - it's a common practice for password inputs to not show anything on-screen so as to avoid anyone looking over your shoulder from seeing your passwords. So just paste in the token, and press _Enter_.

Now if we go to the repository on GitHub, and reload the page, we can see that the `hello-world` folder containing `package.json` and `index.js`, and the `.gitignore` file in the root of the course repo are all now on Github. Now that we've connected these two repositories - the one on your system, and the one here in GitHub, it's much easier to push changes to the repository.

> Run `code .` in the repo.

For example, if I make a small change to the `index.js` file. I'll change the console log message to `Hello GitHub!`. Now, if I run `git status`, git has detected the change. So I can `git add` the `index.js` file again, and commit the change: `git commit -m "Console log message changed"`. Now, all I need to run is `git push`, and that'll push the change to GitHub.

Indeed, if I check the repository on GitHub, the update has showed up there.

That was a quick demo of how to create a git repo, and how push code to GitHub. In this course, you're going to find many tasks that ask you submit your code as GitHub URLs. For the most part, you're going to be using this same repository to keep _all_ of the code you write as a part of this course.

That's it for now. See you in the next lesson!
