// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github)
      this.github = github;
       }
  };

Engineer.getGithub()
Engineer.getRole()

module.exports = Engineer;
