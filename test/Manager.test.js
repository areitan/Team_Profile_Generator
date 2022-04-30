// In addition to Employee's properties and methods, Manager subclass will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

const { default: TestRunner } = require("jest-runner");
const manager = require("./lib/manager");

test('array contains correct values', () => {
    const newManager = new manager(["joe", 1,"joe@joe.com","M4-A123"])
    expect (newManager.officeNumber).toBe("M4-A123")
});