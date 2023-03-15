# Text

**Important Notes:**
>
> 1. You must format the code using `prettier` before submitting it.
> 2. You must read the problem description carefully before making your submission. Do not miss the details - the program should perfectly match the specifications.
> 3. Take your time, sweat the details, and make every submission count!

## Problem Description
**To complete this level**: Add a new `registration` route to the application and serve the registration form that you have created in the WD101 course. Also update the application to accept a `port` argument as input and use the supplied port number to create a server. 

## What you need to do

1. Create a new `registration.html` page in your application that you created in the previous lesson. You need to use the same `registration.html` page created in WD101 course as a part of Capstone.
2. Create a new route `/registration` in the application that serves the registration page created in the previous step.
3. Add a new link in the `project.html` page under `Projects List` that points to the new registration page. Ensure that you can now navigate from the projects page to the registration page using the link.
4. Add a new command line argument to the application named `port` and use the supplied port number while creating the server in `index.js`. For example, running `node index.js --port=5000` should spin up a server that listens to port 5000.
5.  Push the contents of the project to a new public repository and submit the same from the _Submissions_ tab. The files must be present in the root of the repository and not inside any folder.
    
## Please ensure that...

1. ...the submitted URL is that of a public repository and not of any branch or folder inside a repository.
2.  ...your repository has `index.js`, `project.html`, `home.html`, `registration.html` file in the root which contains your code.
3. ...the new route added is `/registration` that servers `registration.html`
4. ...the `/project` page has a link to the registration page
5. ...the `registration.html` content is precisely what was submitted in the WD101 capstone.
6.  ...running `node index.js --port=5000` starts a server that listens to the port `5000` and serves your pages.
7. ...argument name for port is named `port`

Your submission will be reviewed automatically using a test script. The conditions mentioned above should be followed exactly to ensure that these tests can identify the required files and test the application.
