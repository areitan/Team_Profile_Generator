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
            // Verify that the new object has the correct properties--test sepertely
            expect(manager.name).toEqual("Jane");
        });
        it("should create an object with a name, id, email, and officeNumber", () => {
            const manager = new Manager("Jane", 1, "jane@jane.com", "M4-C123");
            // Verify that the new object has the correct properties--test sepertely
            expect(manager.id).toEqual(1);

        });

        it("should create an object with a name, id, email, and officeNumber", () => {
            const manager = new Manager("Jane", 1, "jane@jane.com", "M4-C123");
            // Verify that the new object has the correct properties--test sepertely
            expect(manager.email).toEqual("jane@jane.com");
        });

        it("should create an object with a name, id, email, and officeNumber", () => {
            const manager = new Manager("Jane", 1, "jane@jane.com", "M4-C123");
            // Verify that the new object has the correct properties--test sepertely
            expect(manager.officeNumber).toEqual("M4-C123");
        });

    });

    it("should not add a child over the 'ageLimit'", () => {
        const manager = new Manager("Jane", 1, "jane@jane.com", "M4-C123");
        expect(manager.getName()).toEqual("Jane");

        

    });
});

