Currently, your application works in your local environment. But it's time to show the whole world what it can do.

In this section, we will be looking at deploying our Rails application code to Heroku. Heroku is a PaaS that lets companies build, deliver, monitor and scale apps.

Let's set up and configure the Heroku CLI and application:

1. Sign up for a [Heroku account](https://signup.heroku.com/devcenter).

2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

3. Ensure that you can log in via the command line using:
```
heroku login
```

4. In the directory that contains your **Node.js** application, run the following command to create a Heroku application. You can set any name you like, as long as it contains only letters, numbers and dashes.
```
heroku create <application-name>
```
Replace `<application-name>` with something like `your-name-todo-manager`. This command will host your application in `<application-name>.herokuapp.com`

It will also [add a new _remote_](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) to your Git configuration, so you can push your code to Heroku.

5. Since Heroku runs `npm start` by default for node projects, you’ll have to define that script in your `package.json`.
```js
"scripts": {
   "start": "node app.js",
   "test": "echo \"Error: no test specified\" && exit 1"
}
```
Update your scripts attribute in `package.json` to the above command. Basically, this command tells Heroku to run the command node app.js, which is the same command you’d use to run a node app on your terminal.

6. Next, we need our app to connect to your **Postgres** database in order for it to show data. To do that, we will start by installing the Heroku Postgres add-on.
```
heroku addons:create heroku-postgresql:hobby-dev
```
You can check if it installed successfully by going to your Heroku Dashboard and checking your app’s add-ons.

7. The next step is to re-configure the “Production” section of your config.json. You can find this in your DB folder, in Config. Find the “Production” section and add the following.
```js
"production": {
 "use_env_variable": "DATABASE_URL",
 "dialect": "postgres",
 "dialectOptions": {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    }
  }
}
```
Do not change the “DATABASE_URL” parameter.

8. Next we will add a Heroku config variable to signal that we are in the Production environment and not the local.
```
heroku config:set NODE_ENV=production
```

9. Let's push all these changes to Git and Heroku. Run the following commands.
```
git add .
git commit -m "Update database migrations"
git push // To push to GitHub
git push heroku main // To push to Heroku
```

10. At last, we’ll need to migrate our database to Heroku so our database shows up properly for the application. Let's run this command in the terminal.
```
heroku run sequelize db:migrate --env production --app <application-name>
```
Make sure to replace `<application-name>` with your application's name.

It usually takes some time for your Heroku app to build/migrate the database, but once it's done, you can view it by going to your Heroku app URL ("`<application-name>.herokuapp.com`").

When our application loads, we can only see a blank version of our app. It's because we have created a new **Postgres** database on the Heroku app, so we will have to manually add any previous data entries.

Once you add some sample entries to the DB, you are good to go ahead with working on your application.

See you at the next level!
