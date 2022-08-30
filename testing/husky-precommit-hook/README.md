## Script

In this lesson, we will add a `pre-commit` hook to run the tests  automatically before each commit.

We will run these tools automatically with the help of a package called `husky`.

> Action: Open https://www.npmjs.com/package/husky in a browser.

Let's first add `husky` to our project. Open the integrated terminal and install the package using the following command.

> Action: Switch over to terminal and execute following command

```sh
npm install husky --save-dev
```

Next, we will add a prepare script, which will configure `git` to use `.husky` folder to use as hooks path.

> Action: Switch over to terminal and execute following command

```sh
npm pkg set scripts.prepare="husky install"
```

Now, we need to run the `prepare` script to fulfill the prerequisites.

> Action: Switch over to terminal and execute following command

```sh
npm run prepare
```

Next, we can add a `pre-commit` hook using husky to run the tests.

> Action: Switch over to terminal and execute following command

```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Let's try to do a commit now.

> Action: Switch over to terminal and execute following command

```sh
git commit -m "Add pre-commit hook to run tests"
```

We can see that the tests are automatically executed before the changes are committed.

> Action: Highlight the test result showing up in the terminal.

In this lesson, we will learn to run the tools like ESLint and prettier as pre commit hooks. In software development, it is a usual for a project to have a set of rules or conventions. It can be a rule on how the files should be formatted or prevent a bad coding pattern.

We already have pre-commit hook set up with the help of husky. We will now use a package called `lint-staged` to run ESLint and Prettier in the pre-commit hook.

> Action: Open https://www.npmjs.com/package/lint-staged in browser.

Let's add it to our project.

> Action: Open the terminal and execute the command.

```sh
npm install lint-staged --save-dev
```

Next, we will configure lint-staged to run eslint and prettier. We would do that by editing the package.json file.

> Action: Open `package.json` file and add the following configuration

```json
"lint-staged": {
    "*.js": [
      "eslint",
      "prettier --write ."
    ]
  },

```

We need to make sure we have `eslint` and `prettier` configurations in our project.

We can add eslint configuration by executing `npm init @eslint/config`

```sh
npm init @eslint/config
```
Select the choices to match our setup.

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ What format do you want your config file to be in? · JSON
```
or you can just create a `.eslintrc.json` file in project root with following content.

```json
{
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}

```

Next, we need configuration for prettier.

Let's install prettier in our project as a developer dependency.

```sh
npm i prettier --save-dev
```
Create `.prettierrc.json` in project root with the following content.

```json
{}
```

Next, we will edit the pre-commit hook configuration to run lint-staged as well. Let's switch to the terminal and execute the following command.

> Action: switch to terminal and execute the command

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

Now let's test the whole set up. Let's edit `todo.test.js` file to test overdue items and stage it.

> Action: Add following code

```js
test("Should return overdue items", () => {
  expect(all.length).toEqual(1);
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  add({
    title: "An overdue test item",
    completed: false,
    dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString("en-CA"),
  });
  expect(all.length).toEqual(2);
  overdueItems = overDue();
  expect(overdueItems.length).toBe(1);
});
```

Let's switch over to the terminal and stage the file.

```sh
git add --all
```

Now, when we try to commit, husky should run our tests and `lint-staged` automatically. Let's try that.

```sh
git commit -m "Add lint-staged"
```

As you can see, our tests, eslint rules, and prettier were run as intended. This helps us in making sure the code that is being committed adheres to a common standard that we have put across for the project.

## Text

We use `husky` to add a pre-commit hook to our project. To install and configure `husky`:

```sh
npm install husky -D
npm set-script prepare "husky install"
npm run prepare
```

Add a pre-commit hook by executing following commands:

```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

To see pre-commit hook in action:

```sh
git commit -m "Add pre-commit hook to run tests"
```

We can enforce consistent code formatting, styling in our codebase by making use of `lint-staged`. To add it to our project, install it first.

```sh
npm install lint-staged --save-dev
```

Edit `package.json` to add configuration for `lint-staged`.

```json
"lint-staged": {
    "*.js": [
      "eslint",
      "prettier --write"
    ]
  },

```

Update pre-commit hook enabled by husky.

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

That's all there to do automatic linting and formatting using husky in a Node.js project.
