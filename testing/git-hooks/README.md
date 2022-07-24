## Text

Git comes with a way to fire custom scripts when specific actions occur. It can be helpful to do certain checks or validate some specified rules. It can either be:

- a client-side hook
- a server-side hook


Client-side hooks get triggered on operations like `commit` and `merge`. In comparison, the server-side hooks get triggered on network events like receiving pushed commits.


The `hooks` are stored in `.git/hooks` folder. Any named executable script will work fine. In this lesson, we will only focus on a single client-side hook. You can find the other hooks at [git-scm website](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### pre-commit hook

The `pre-commit` hook runs just before a commit is made. If the hook returns a non-zero status, then the commit is aborted.

We can use this to enforce code formatting and styling. Another example would be to limit large files from being committed into the repository.


In the next lesson, we will look into how we can use pre-commit hook in our project.
