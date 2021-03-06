// required variables
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Team = []

const generateHTML = () => {
  let employeeHTML = ``;
for (i = 0; i < Team.length; i++) {
if (Team[i].getRole() === "Manager") {
  employeeHTML = employeeHTML + `
<div class="card col-s-12 col-m-4 m-3" style="width: 18rem;">
<div class="card-header bg-primary text-white font-weight-bold">
${Team[i].getName()}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item font-weight-bold">${Team[i].getRole()}</li>
<li class="list-group-item">ID: ${Team[i].getId()}</li>
<li class="list-group-item">Email: <a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></li>
<li class="list-group-item">Office Number: ${Team[i].getofficeNumber()}</li>
</ul>
</div>
`
}

if (Team[i].getRole() === "Engineer") {
    employeeHTML = employeeHTML + `
<div class="card col-s-12 col-m-4 m-3" style="width: 18rem;">
<div class="card-header bg-primary text-white font-weight-bold">
${Team[i].getName()}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item font-weight-bold">${Team[i].getRole()}</li>
<li class="list-group-item">ID: ${Team[i].getId()}</li>
<li class="list-group-item">Email: <a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></li>
<li class="list-group-item">GitHub: <a href = "https://github.com/${Team[i].getGithub()}" target="_blank" rel="noopener noreferrer">${Team[i].getGithub()}</a></li>
</ul>
</div>
`
}

if (Team[i].getRole() === "Intern") {
  employeeHTML = employeeHTML + `
<div class="card col-s-12 col-m-4 m-3" style="width: 18rem;">
<div class="card-header bg-primary text-white font-weight-bold">
${Team[i].getName()}
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item font-weight-bold">${Team[i].getRole()}</li>
<li class="list-group-item">ID: ${Team[i].getId()}</li>
<li class="list-group-item">Email: <a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></li>
<li class="list-group-item">Education: ${Team[i].getSchool()}</li>
</ul>
</div>
`
  }
};

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<title>Team Profile</title>
</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid bg-primary text-white">
<div class="container">
<h1 class="display-4">Meet Our Team</h1>
<p class="lead">Exciting things are happening!</p>
</div>
</div>
<div class="container row mx-auto">
${employeeHTML}
</div>
</body>
</html>`
};

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is their employee ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is their email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
    },
  ])

  .then((data) => {
    const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
    Team.push(newManager);
    menu();
  })

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["Add engineer", "Add intern", "Build Team Profile"]
      },
    ])
    .then((data) => {
      if (data.choice === "Add engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is this engineer's name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is their employee ID?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "What is their email address?",
            },
            {
              type: "input",
              name: "github",
              message: "What is their GitHub username?",
            },
          ])

          .then((data) => {
            const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github)
            Team.push(newEngineer);
            menu();

          })
      }
      if (data.choice === "Add intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "What is this intern's name?",
            },
            {
              type: "input",
              name: "internId",
              message: "What is their employee ID?",
            },
            {
              type: "input",
              name: "internEmail",
              message: "What is their email address?",
            },
            {
              type: "input",
              name: "school",
              message: "What is their school name?",
            },
          ])
          .then((data) => {
            const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.school)
            Team.push(newIntern);
            menu();
          })
      }
      if (data.choice === "Build Team Profile") {
        writeFile(Team);
      };

      function writeFile(data) {
        fs.writeFile("./dist/index.html", generateHTML(data), (err) =>
          err ? console.error(err) : console.log('Your Team profile is complete')
        );
      };
    })
}