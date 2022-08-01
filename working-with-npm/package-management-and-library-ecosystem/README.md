# Text

In the previous level, we've learned about **Node.js** and how to set it up. In the following level, we will learn more about the **Node.js** ecosystem and how packages or libraries are used to improve the developer experience. We also will learn about how to use these packages for the Web applications we develop.

### Package Management and Libraries

To understand the **Node.js** ecosystem better, we need to learn about, what package managers and package repositories are, why they are required, and the fundamentals of their use.

The **Node.js** packages are dependencies that we use in our application to solve a certain problem.

A dependency is a piece of external software that was most likely written by someone else and solves a single problem for you. Our web application can have any number of dependencies, and they may include sub-dependencies that you did not explicitly install.

Consider the following example. We are trying to build a web form, and we want to validate the `Date of birth` of a person entered in the form. We can write our own validation for this scenario, but what if we want to support different validations for different nationalities.

> Eg.: Country = India; Age Limit = 18 to 55, Country = USA, Age Limit = 21 to 60.

There might be prebuilt dependencies which you can use to solve this purpose instead of writing the code from scratch.

The same is the case for UI Libraries like jQuery, React etc., which are feature-rich dependencies which you can use to make better and rich user experiences with very limited code.

### Benefits of using Libraries/Packages

Consider a scenario where you need to include an external dependency, as we discussed above. In HTML, while we import external JavaScript dependencies, we use the `<script>` tag to refer to the location of the file. The problem with this approach is that anytime the original owner of the dependency updates the file, we might have to change the file details or the location of the file based on our approach.

This might not seem like a big issue for a single dependency, but when you start building complex applications, the number of dependencies might become huge. Maintaining this might become a big concern, and Package/Library management solutions solve this issue for us.

### Package Manager

A package manager is a system that manages the dependencies of your project.

The package manager allows you to install new dependencies/packages, manage where packages are stored on your file system, and publish your own packages.

You can also download and store your project dependencies without using a package manager, but a package manager will handle installing and uninstalling packages for you.

If we don't use a package manager, we might have to deal with the following scenarios manually,

1. Locating all the appropriate package JavaScript files.
2. Checking to ensure that there are no known bugs/issues.
3. Download them and place them in the appropriate places in your project.
4. Removing the packages means, manually removing all the files again.

In the upcoming lessons, we will learn more about the Node package manager, called `npm`. We will learn about the uses of the same, along with some packages/dependencies which we can rely on for our **Node.js** development needs.
