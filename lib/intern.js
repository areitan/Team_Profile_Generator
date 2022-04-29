// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    const school;
    this.school = school;
  }
};


Intern.getSchool();
Intern.getRole(Intern);

module.exports = Intern;