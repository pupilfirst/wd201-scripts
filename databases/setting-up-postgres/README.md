## Text

The process for setting up PostgreSQL is different for Ubuntu and macOS, but it's the same for Ubuntu and WSL. So we'll document these two processes separately, starting with Ubuntu & WSL.

Scroll down to view the instructions for macOS.

## Installation on Ubuntu & WSL

Open your Terminal and type in the following commands:

(press Y when it asks, "Do you want to continue? [Y/n]")

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

This will install the PostgreSQL database server on your computer. Let's make sure that its server is up and running using the following command:

```bash
sudo service postgresql start
```

> **Note for WSL users:** You'll need to run the above command each time you restart Windows and open up Ubuntu for the first time.

## Installation on macOS

We'll use [Homebrew](https://brew.sh) to install the PostgreSQL server and client:

```bash
brew install postgresql
```

Once that's done, follow the instructions printed to the console and run some additional commands:

```bash
# To have launchd start postgresql at login:
brew services start postgresql
```

## After installation: Run `psql` and create your first database

On Ubuntu, installing Postgres will also have created a user called `postgres` on our machine, which we'll need to use to connect to the database. On macOS, this additional user isn't created, so we'll create it instead.

Let's begin by giving the user a password to secure databases under it. Type the following in the terminal:

### On Ubuntu & WSL

```bash
# Switch the shell to the `postgres` user, and then run psql.
sudo -i -u postgres
psql
```

### On macOS

```bash
# Create the `postgres` DB user, and then sign in as that user.
createuser -s postgres
psql -U postgres
```

`psql` is similar to a Node.js console - it is an interactive console where we can execute database commands and SQL queries.

Once `psql` is running, type the following commands:

```sql
# First, set a password for the `postgres` user.
alter user postgres password 'changeme';

# Let's create a database that we can use for our webapp.
create database todo_db;

# Finally, quit from the psql application.
\q
```

> **Quick tips:**
> 1. Don't forget the semicolon (`;`) at the end of each command.
> 2. Don't type in `changeme`. _Change_ your password to something else.

This will set the database password for the database user to `changeme` (whatever password you typed). It will also create a new blank database called `todo_db` which we will use to build our web application. The final `\q` will allow you to exit from `psql` and return to the shell.

Once you're in the shell, type `exit`, so you go back to your original user.

Now you have setup a Postgres database server in your Ubuntu machine, given the database username a password, and created a database called `todo_db`. Next, we'll learn to use Sequelize to work with this database.
