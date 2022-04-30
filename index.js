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
    let special = ``
    if (Team[i].getRole() === "Manager") {
      special = Team[i].getofficeNumber();
      employeehtml = employeeHTML + `
   <div class="card">
   <h2>${Team[i].getName()}</h2>
   <p>${Team[i].getRole()}</p>
   <p>${Team[i].getId()}</p>
   <p><a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></p>
   <p>[${special}](https://github.com/${special})</p>
   </div>
   `
    }

    if (Team[i].getRole() === "Engineer") {
      special = Team[i].getGithub();
      employeehtml = employeeHTML + `
   <div class="card">
   <h2>${Team[i].getName()}</h2>
   <p>${Team[i].getRole()}</p>
   <p>${Team[i].getId()}</p>
   <p><a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></p>
   <p>${special}</p>
   </div>
   `
    }

    if (Team[i].getRole() === "Intern") {
      special = Team[i].getSchool();
      employeehtml = employeeHTML + `
   <div class="card">
   <h2>${Team[i].getName()}</h2>
   <p>${Team[i].getRole()}</p>
   <p>${Team[i].getId()}</p>
   <p><a href = "mailto: ${Team[i].getEmail()}">${Team[i].getEmail()}</a></p>
   <p>${special}</p>
   </div>
   `
    }

  //  employeehtml = employeeHTML + `
  //  <div class="card">
  //  <h2>${Team[i].getName()}</h2>
  //  <p>${Team[i].getRole()}</p>
  //  <p>${Team[i].getId()}</p>
  //  <p>${special}</p>
  //  </div>
  //  `
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
${employeehtml}
</body>
</html>`};

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
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
    },
  ])

  .then((data) => {
    const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
    Team.push(newManager);
    menu();
  })

function menu() {
  console.log(Team);
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
              message: "What is the engineer's name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is your employee ID?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "What is your email address?",
            },
            {
              type: "input",
              name: "github",
              message: "What is your GitHub username?",
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
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "internId",
              message: "What is your employee ID?",
            },
            {
              type: "input",
              name: "internEmail",
              message: "What is your email address?",
            },
            {
              type: "input",
              name: "school",
              message: "What is your school name?",
            },
          ])
          .then((data) => {
            const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.school)
            Team.push(newIntern);
            menu();

          })
      }
      if (data.choice === "Build Team Profile") {
        
        writeFile();
      };

      function writeFile(data) {
        fs.writeFile("index.html", generateHTML(data), (err) =>
          err ? console.error(err) : console.log('Done')
        );
      };
    })
}