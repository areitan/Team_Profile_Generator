// In addition to Employee's properties and methods, Manager subclass will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'


const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    this.officeNumber;
  };
  getRole() {
    return "Manager";
  };
};

module.exports = Manager;