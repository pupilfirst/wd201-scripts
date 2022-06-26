# Text

If you are working on a project over time, you may want to keep track of which changes were made, by whom, and when those changes were made. This becomes increasingly important if you end up having a bug in your code! Git can help you with this.

Git is a version control system and in this lesson we will learn more about that.

### What is Version Control System?
As we all know, any software product is developed by several engineers. A version control system helps these developers to track and manage changes done to the software code. So they can simultaneously work on the same project, without interfering with another person's work.

Normally most people gets confused between Git and GitHub. They think both are same. But that's not true. Git is the Vision Control System which you can install in your computer to manage source code history. Whereas, Github is the hosting service for projects that use git.

### What you can do with Git?
With git you can:
- Record changes in your project and its files
- Revert back to previous state of a file, at different points in time
- Collaborate with multiple people on one codebase
- See changes over time
- Develop multiple features at once

### What is a repository?
A *repository*, or a *git project* is an entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called **commits**. Multiple commits can be organised into multiple lines of development called **branches**.

Using the command line, a git repository allows us to:  interact with the file's history, clone a project, create branches, commit changes to a file, compare changes with other versions of a file, and more.

### How GitHub fits in?
GitHub is a Git hosting repository that allows us to share a project with other developers. 

GitHub brings collaboration directly into the development process. Work is organised into repositories, where developers can outline requirements or direction and set expectations for team members. Then, using the GitHub flow, developers simply create a branch to work on requirements, commit changes to save them, open a pull request to propose and discuss changes, and merge pull requests once everyone is on the same page.

### Install git in your system and create a GitHub account
First, follow the link given below to install git in your system. This link will lead you to Git's official website. Check the installation steps based on the operating system you have.

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Once the installation is complete, verify it by using the following command in the terminal:

````
git --version
````

Secondly, signup for a new [GitHub account here](https://github.com/).

After you have a GitHub account, you'll need to create an SSH key to push your code from your local machine to GitHub (this key proves to GitHub when you push code that you are "you").

It's not difficult—just [follow the steps here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Great! see you in the next lesson.
