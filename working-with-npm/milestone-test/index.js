const http = require("http");
const fs = require("fs");
const readline = require("readline");

let homeContent = "";
let projectContent = "";
let registrationFormProjectPath = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(
  `Please provide the full file path for registration form project - `,
  (path) => {
    registrationFormProjectPath = path;
    console.log(`Visit your local server at http://localhost:3000 to see the application`);
    lineDetail.close();
  }
);

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        const stream = fs.createReadStream(registrationFormProjectPath);
        stream.on("error", (err) => {
          response.write(
            `<h2>Provided path is invalid !, Please provide right path</h2>`
          );
          response.end();
        });
        stream.pipe(response);
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000);
