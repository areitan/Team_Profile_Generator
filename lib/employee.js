// classes

// Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'


class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    this.name;
  };
  getId() {
    this.id;
  };
  getEmail() {
    this.email;
  };
  getRole() {
    return "Employee";
  };
};



module.exports = Employee;