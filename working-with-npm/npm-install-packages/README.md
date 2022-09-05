# Script

Hi. In the previous levels, we learned about working with an object and how to use NPM to set up and run our application using the package JSON.    We also learned about using the FS module and the Stream module to interact with the file system and how to improve or use that to improve our application in general.

In this level, I want to talk about how to use NPM and its features. Like when we talk about the node package manager itself, how do we use a node package manager  ecosystem itself to build better applications? When we start building node applications and when you start using NPM, one common item you talk about after NPM  initialization is the NPM install.    You have seen this command in previous levels when we talk about ESLint and stuff where we talk about NPM install. 

So what does this do? While it is always possible for us to create new functions or add new functionalities to our application, there might always be a better version available somewhere that you can reuse, which provides better flexibility in implementing your application.  In these scenarios, what NodeJS does with NPM is to provide you with a system wherein you can implement or include a package which can be used inside your       application to create a better version of your application. 

So let me show how this works.   

> Action: Open the browser navigate to npmjs.com and explain the packages and installation

What exactly does this do? Right, let's go back to our code. I have an empty `index.js` file, and we have initialized NPM using `npm init` as we did previously, and we have an empty application right now.  

Let us start with doing an `npm install`.  What does NPM install do? Let me try to install a package right now.   

> Action: Do install for ESLint package and explain the successful installation

If you go to the code base, you can see that you have a new node_modules folder. And if you expand it, you can see that there are a lot of items which have been installed, and we also have ESLint which we are going to use in this specific application.   

So what it has done is when you do an `npm install`, it creates a local folder for you to access   ESLint within your application.   And anywhere inside your application, in any JavaScript file you want to include ESLint, you can import the same from the  node_modules folder.     


> Needs update after recording

> Action : Talk about npm install
> Action : Talk about npm install list
> Action : Talk about npm local gloabl installs
> Action : Talk about npm install save and save dev


