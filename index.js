// required variables
const inquirer = require("inquirer");
const fs = require("fs");



const generateHTML = (data) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>







</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "teamManager",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "officeNum",
      message: "What is your office number?",
    },
  
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
