# Text

## Milestone Evaluation Specs

1. Validate present of 3 HTML files. Home, Project and Registration.
2. Running `npm start` requests a File path from the command line interface for the registration.html.
3. Valid path shows a success message and Invalid path an error.
4. Navigation to `localhost:3000` loads `home.html` with a link to `project.html`
5. Navigating to `project.html` provides a link to `registration.html`.
6. `registration.html` holds the content the same as WD101 submission. (Can be evaluated with same logic for WD101 final submission or can be simplified to evaluate the presence of few DOM elements).

## Requirements

1. Usage of `readFile` function to read Home and Project pages.
2. Usage of `readLine` to get input for file path.
3. usage of `createReadStream` to read the Registration page.
