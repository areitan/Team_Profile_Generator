// In addition to Employee's properties and methods, Manager subclass will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

const manager = require("./lib/manager");

test('array contains officeNumber', () => {
    const newManager = new manager(["joe", 1,"joe@joe.com","M4-A123"])
    expect (manager.officeNumber).toEqual("M4-A123")
});

