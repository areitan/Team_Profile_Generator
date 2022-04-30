// In addition to Employee's properties and methods, Manager subclass will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  };

  getRole() {
    return "Manager";
  }
  getName() {
    return this.name;
  };
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  };
  getofficeNumber() {
    this.officeNumber;
  };
};

module.exports = Manager;