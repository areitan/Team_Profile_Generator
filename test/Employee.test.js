// classes

// Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'



const Intern = require("../lib/employee");

describe("Intern", () => {
    // Test for all use cases when creating a new Intern
    
    describe("Create", () => {
        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
            // Verify that the new object has name
            expect(intern.name).toEqual("Jane");
        });

        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
            // Verify that the new object has id
            expect(intern.id).toEqual("1");
        });

        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
            // Verify that the new object has email
            expect(intern.email).toEqual("jane@jane.com");
        });

        it("should create an object with a name, id, email, and school", () => {
            const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
            // Verify that the new object has office nummber
            expect(intern.school).toEqual("M4-C123");
        });

    });

    it("should create an object with a name, id, email, and school", () => {
        const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
        expect(intern.getName()).toEqual("Jane");      
    });

    it("should create an object with a name, id, email, and school", () => {
        const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
        expect(intern.getId()).toEqual("1");      
    });

    it("should create an object with a name, id, email, and school", () => {
        const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
        expect(intern.getEmail()).toEqual("jane@jane.com");      
    });

    it("should create an object with a name, id, email, and school", () => {
        const intern = new Intern("Jane", "1", "jane@jane.com", "UCLA");
        expect(intern.getSchool()).toEqual("UCLA");      
    });
});



