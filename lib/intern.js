// In addition to Employee's properties and methods, Intern subclass will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  };
 
  getName() {
    return this.name;
  };
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  };
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  };
};

module.exports = Intern;