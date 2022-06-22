# Text: Introduction to Node.Js

Hello and welcome to WD201! 
In this course we will learn about a JavaScript framework called Node.Js. I'm assuming that you've already completed the [Web Development 101 course](https://www.pupilfirst.school/courses/1087/curriculum). This means that, you're quite familiar with JavaScript, right?

To recap, JavaScript is a **Programming Language**,  that runs on end user's browser, and allows us to calculate, manipulate and validate data. Where HTML and CSS are languages that give structure and style to web pages, JavaScript improves the user experience of the web page by converting it from a static page into an interactive one.

Now, have you ever wondered, the static HTML webpages or the forms that you've designed, how to make them dynamic? How to store that form's data in a database? Or what if, you want to send an confirmation email to an user who submits the form? 
This is where the role of **server-side programming** comes in.

## What is server-side programming?
Web browsers communicate with web servers using the HyperText Transfer Protocol (HTTP). When you click a link on a web page or submit a form, an HTTP request is sent from your browser to the target web server.
On the other hand, web servers wait for client request messages. It processes them when they arrive, and responds back to the browser with an HTTP response message.

The body of a successful response contains the requested resource (for example a new HTML page, or an image, etc...), which could then be displayed by the browser.

### Dynamic websites
A dynamic website is one where some response content is generated dynamically, only when needed. On a dynamic website, the HTML pages are normally created by fetching data from a database, then inserting that data into certain placeholders in HTML template. 

Most of the **code** to support a dynamic website must run on the server. Creating this code is known as **server-side programming** or **back-end programming**.

Now imagine, what if you could use your JavaScript knowledge to write back-end or server-side logic? This is where the role of Node.Js comes in.

## What is Node.Js?
Node.js is a framework for writing server-side JavaScript applications. Node.js is open-source and completely free, it's used by thousands of developers around the world.
Node is often used to build back end services that communicate with client-side applications.

Every browser has their own JavaScript engine that converts JavaScript into code that a computer can understand. For example, Microsoft Edge uses Chakra, Firefox uses spidermonkey, and chrome uses V8.

Before Node.JS, you could only run JavaScript in the browser. In 2009, Ryan Dahl came up with the idea of executing JavaScript code on the server-side, by using Chrome's v8 engine. Node.Js is a platform which is actually built on top of **Chrome's JavaScript Runtime environment**. Which makes it blazing fast when it comes down to the performance.

So, let's get started with the installation.

# Script: Installation of Node.Js

In this video, I'll show you, how easily you can setup your computer to write Node.Js applications.
I'm assuming that you're either running macOS, or some variant of Linux, or you're probably using WSL (Ubuntu) inside of Windows.

## Install Node.Js using NVM

There are a number of different ways you can install Node.Js on your system. However, one of the most popular is *nvm.* NVM stands for Node.Js Version Manager. It allows us to quickly install and use different versions of node in our computer.

Even if you only need a single version of Node.js right now, we still recommend using **nvm**. Because in future it will give you the flexibility to switch to another versions, depending on the requirements of your project, with minimal hassle.

So, to install NVM, follow the process I'll show next:

### 1. Download and install script

First, open the terminal or command prompt to execute the following command.

_COPY_TO_TERMINAL >_ `curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh -o install\_nvm.sh`

Here we will download the installation script, using curl or wget.

In this URL, **v0.39.1** is the latest version of NVM while I'm recording this video.
So when you are doing it, make sure you check the latest version from NVM's Github page, and replace it right here in the command.

*OPEN_URL (to show how to check latest NVM version) >* https://github.com/nvm-sh/nvm

Now, back in the terminal, let's execute it.

### 2. Run the installation script

Next, let's run the installation script, that we've just downloaded.

_COPY_TO_TERMINAL >_ `bash install\_nvm.sh`

This script clones the nvm repository into your home directory *~/.nvm* and updates your bash profile(*~/.bash\_profile*, *~/.zshrc*, *~/.profile*, or *~/.bashrc*).

### 3. Restart your terminal & check the NVM installation

In order to check whether the installation has succeeded or not, reopen the terminal and type the following command.

_COPY_TO_TERMINAL >_ `command -v nvm`

And, it should return `nvm`. 
_EXECUTE_

Yaay! It's working! This means, we've successfully installed NVM in our system. Next, I'll show you, how to use NVM effectively.

### 4. Install a stable Node.Js version

NVM comes with a lot of sub-commands which you can check by running:

`nvm --help`

*GO THROUGH THE MOST USED COMMANDS ONCE, FROM THE OUTPUT >*

##### 4.1 List all available Node.Js versions

To see the list of Node.js versions available to install, enter:

`nvm ls-remote`

*GO THROUGH THE OUTPUT >*

##### 4.2 Install the latest Node.Js version
Now, we will install a stable Node.Js version.
FYI, for any kind of software, a stable release is a version that has been tested as thoroughly as possible.
In case of node, it's marked as **LTS**, which stands for Long-term Support. Here, support means that throughout the lifetime of a release, there is a commitment to update and maintain the software.

To install a LTS version of Node.Js, just run:

`nvm install --lts`


The installation process will take some time to complete. Once it's done, check the Node.Js version using:

`node --version`

*SHOW Output*: *v16.14.2*

Ohh that's great! We've successfully installed it.

If you want, you can also install any specific version as well:

`nvm install 17`

### 5. Set a default version
As I said earlier, in future when you will work on other Node.Js applications, you may have to install other versions as well. If you would like to list all installed Node.Js version, then run:

`nvm ls`

*EXPLAIN Output*

To use a specific version in a project, run:

`nvm use 17`

### 6. Check npm version

**npm** is a package manager for the JavaScript programming language. It consists of a command line client, also called **npm**, and an online database of public and private packages. Open source developers use npm to share and borrow packages.

When you install a node.js version using nvm, npm also gets installed automatically. You can check npm version by:

`npm --version`
<br/><br/>

That’s it, your system is totally ready for starting your learning journey with Node.Js. See you in the next lesson.
