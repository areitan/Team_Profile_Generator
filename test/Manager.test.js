// In addition to Employee's properties and methods, Manager subclass will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'
// based on week 10 exercise 16
const Manager = require("./lib/manager");

describe("Manager", () => {
    // Test for all use cases when creating a new Manager
    describe("Create", () => {
        it("should create an object with a name, id, email, and officeNumber", () => {
            const manager = new Manager("Jane", 1, "jane@jane.com", "M4-C123");

            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Jane");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("jane@jane.com");
            expect(manager.officeNumber).toEqual("M4-C123");
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });

        it("should error if 'name' is not a string", () => {
            const cb = () => new Manager(2, 1, "jane@jane.com", "M4-C123");
            const err = new Error("Expected parameter 'name' a string");

            expect(cb).toThrowError(err);
        });
    });
});
