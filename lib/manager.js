// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'
const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  };

  getofficeNumber();
  getRole();

module.exports = Manager;