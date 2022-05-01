// classes
// Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()


const Employee = require("../lib/employee");

describe("Employee", () => {
    // Test for all use cases when creating a new Intern
    
    describe("Create", () => {
        it("should create an object with a name, id, and email", () => {
            const employee = new Employee("Jane", "1", "jane@jane.com");
            // Verify that the new object has name
            expect(employee.name).toEqual("Jane");
        });

        it("should create an object with a name, id, and email", () => {
            const employee = new Employee("Jane", "1", "jane@jane.com");
            // Verify that the new object has id
            expect(employee.id).toEqual("1");
        });

        it("should create an object with a name, id, and email", () => {
            const employee = new Employee("Jane", "1", "jane@jane.com");
            // Verify that the new object has email
            expect(employee.email).toEqual("jane@jane.com");
        });
    });

    it("should create an object with a name, id, and email", () => {
        const employee = new Employee("Jane", "1", "jane@jane.com");
        expect(employee.getName()).toEqual("Jane");      
    });

    it("should create an object with a name, id, and email", () => {
        const employee = new Employee("Jane", "1", "jane@jane.com");
        expect(employee.getId()).toEqual("1");      
    });

    it("should create an object with a name, id, and email", () => {
        const employee = new Employee("Jane", "1", "jane@jane.com");
        expect(employee.getEmail()).toEqual("jane@jane.com");      
    });
});



