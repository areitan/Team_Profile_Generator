// In addition to Employee's properties and methods, Manager subclass will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
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
  getofficeNumber() {
    return this.officeNumber;
  };
  getRole() {
    return "Manager";
  };
};

module.exports = Manager;