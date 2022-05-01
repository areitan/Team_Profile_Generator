// In addition to Employee's properties and methods, Engineer subclass will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
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
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  };
};

module.exports = Engineer;
