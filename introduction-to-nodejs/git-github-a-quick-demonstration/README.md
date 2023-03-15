## Git & GitHub: A quick demonstration

In this video, I'm going to show you the very basics of how to use the `git` command line interface. Specifically, we're going to try to teach you _just enough_ to work through this course.

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

Before we make our first commit, I want to add one file to this folder, so let me open this up in Visual Studio Code.

In the `wd201` folder, I'm going to create a file called `.gitignore`, and in this new file I'm going to write one line for now - `node_modules`. In the next couple of lessons, we're going to be writing names of certain packages we want to download in `package.json`. When NPM - the Node Package Manager - downloads these libraries, it keeps them inside a `node_modules` folder. We don't want git to track these third-party libraries. We only want git to track the history of files that _we_ create. Hence, we're telling git to ignore these `node_modules` folders.

We now have these three files staged for a commit. The word _staged_ in this context means that the changes to these files are now ready to be made into a commit. That brings up another question. What's a commit?

You can think of a commit like you're saving the state of how this directory looks right now. It's not exactly that, but after we make a commit, git will always be able to return to this particular state - the way all tracked files are right now - regardless of whatever future changes you make to them.

Because this commit goes into a sort-of permanent record, whenever we make a commit to save the state of some files, we need to give a message. This message will get stored alongside the commit. For the first commit in a repository, it's common to simply say `Initial commit`.

> Run `git commit -m "Initial commit"`

If I run `git log`, to see a log of all the commits in the repo, I can see that the commit is there, along with its message.

Now that we have a git repo with a commit, we can push this repository to GitHub so that others can see our work. We can do this using the `git push` command. Before we can do that, there's two things we need to do: first, we need to create a new _empty_ repository in GitHub where we can push our git commits to, and second we need to make sure that our git command line application is set up to authenticate itself with GitHub, i.e.

> Switch to browser showing GitHub profile page.

Let's start by creating a new repository on GitHub. From my profile page, I can click the _plus_ button at the top-right and choose the _New repository_ option. To keep things simple and straight-forward, I'll keep the name of the repo the same as the directory we created earlier - `wd201`. There's nothing else I need to change on this form, and I can click the _Create repository_ button.

We now have a new _empty_ repo, to which we can push commits from our local repo. To do so there are two standard methods: using HTTPS or SSH. The difference between these two is technical, but they achieve the same thing. When we're trying to push commits from our local repo...

> Show `git log` on the command line

...to GitHub, GitHub needs to make sure that it's actually _you_ who's trying to push code to the online repository, and not someone else. So both of these protocols, HTTPS and SSH acheive that in different ways

In this demo, I'm going to use HTTPS, simply because it's faster to demonstrate. But it's also possible to use SSH. The main difference between these two methods is how you'll authenticate with GitHub. HTTPS will need you to create a personal access token, whereas SSH will require you to register your SSH keys with GitHub.

For this course, we suggest using HTTPS, but both HTTPS and SSH are valid choices. There will be links below this video that contain instructions for setting up GitHub authentication for both HTTPS _and_ SSH.

With that out of the way, GitHub has given us two sets of commands to run, for two different cases - first if you don't have a repository already, and second if you have one. We already have a git repository on our local machine, so we need to use the second list of commands right now. I'll copy these commands one by one, and briefly describe what they're doing.

> Copy-paste the first command.

First, it's informing the local git repository that there's an online repository (what's referred to as a _remote_ here) that we want to link our local repo to, and the URL at which that remote repository is located.

> Copy-paste the second command.

Second, we're renaming the current branch that we're on to `main`. By default, git names the default branch `master`, and because that's an inappropriate historical term. More information about this will be below this video.

> Copy-paste the third command.

Third, we're invoking `git push` command to actually push our changes to the new remote (called `origin` that we added in the first step). The `-u` flag on the command is instructing git to remember that this is the default remote to which we'll want to push changes to all the time.

At this point GitHub will ask for username and a password, because GitHub - the online service - doesn't know who's trying commits to the online repository.

We don't want to have to type in our GitHub username and password everytime we push commits online, we're going to be doing that often, so let's set up the GitHub command line application - `gh` - that we installed in the previous lesson before we try running `git push` again.

To check whether we're signed in right now, we can run the command `gh auth status`. When you're starting out, it's going to say that we're not logged in, and that we should run `gh auth login`, so let's do that.

We want to connect to our GitHub.com account, so let's pick that option. For preferred protocol, let's pick `HTTPS`. Remember, `SSH` is also a valid choice, but we're going to demonstrate only HTTP in this video. For the next part, if you're on macOS, you can pick _Login with a web browser_ and that'll be the fastest method to get signed in. But we have a lot of students who are using Windows with WSL, so I'll pick the _Paste an authentication token_ which doesn't require a browser to installed inside WSL.

The CLI app immediately tells us that we need to generate a _Personal Access Token_ - it gives us a URL to visit, and tells us what the minimum required scopes are. So let's visit that URL.

> Visit https://github.com/settings/tokens in the browser.

Let's use the _Generate new token (classic)_ option. I'll give this token the note _GitHub CLI app_, set the _Expiration_ to 90 days (you can make a different selection here, if you want to), and finally select the scope `repo`, `workflow` and `read:org`. This is what the instruction in the command line told us to do. Finally I can scroll down, and hit the _Generate token_ button.

Remember to treat the generated token like a password. This will be shown only once, so right now, we want to copy that and paste it into the command line, and press _Enter_.

That's it. We can try running the `git push -u origin main` command again, and it'll say the push was successful, and that the branch `main` on our local repo has been set up to track branch `main` on the remote named `origin`. Perfect.

If we go to the repository on GitHub, and reload the page, we can see that the `hello-world` folder containing `package.json` and `index.js`, and the `.gitignore` file in the root of the course repo are all now on GitHub. Now that we've connected these two repositories - the one on your system, and the one here in GitHub, it's much easier to push changes to the repository.

> Switch to VS Code.

For example, if I make a small change to the `index.js` file. I'll change the console log message to `Hello GitHub!`. Now, if I run `git status`, git has detected the change. So I can `git add` the `index.js` file again, and commit the change: `git commit -m "Console log message changed"`. Now, all I need to run is `git push`, and that'll push the change to GitHub.

Indeed, if I check the repository on GitHub, the update has showed up there.

That was a quick demo of how to create a git repo, and how push code to GitHub. In this course, you're going to find many tasks that ask you submit your code as GitHub URLs. For the most part, you're going to be using this same repository to keep _all_ of the code you write as a part of this course.

Take some time to practise using the `git` command line application. There's a lot to learn here, and what I've demonstrated now are just the basics. Make sure that whenever you work on your code for this course, do so within this `wd201` repo, that you commit frequently, and that push those commits to your GitHub repository using the command-line.

As I mentioned in the beginning of the video, I just covered the minimum you need to know to use git in this course. There's a lot more to learn...

> Run command `git help`

...but you need to start with the basics of committing, pushing, checking logs, etc. So do those often.

If you're interested in learning more about what git can do right now, there will be a link below this video to a resource that teaches you more about git.

That's it for now. Move onto the next lesson!
