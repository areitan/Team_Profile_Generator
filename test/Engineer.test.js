// In addition to Employee's properties and methods, Engineer subclass will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    // Test for all use cases when creating a new Manager
    
    describe("Create", () => {
        it("should create an object with a name, id, email, and officeNumber", () => {
            const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
            // Verify that the new object has name
            expect(engineer.name).toEqual("Jane");
        });

        it("should create an object with a name, id, email, and officeNumber", () => {
            const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
            // Verify that the new object has id
            expect(engineer.id).toEqual("1");
        });

        it("should create an object with a name, id, email, and officeNumber", () => {
            const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
            // Verify that the new object has email
            expect(engineer.email).toEqual("jane@jane.com");
        });

        it("should create an object with a name, id, email, and officeNumber", () => {
            const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
            // Verify that the new object has office nummber
            expect(engineer.github).toEqual("jane");
        });
    });

    it("should verify name", () => {
        const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
        expect(engineer.getName()).toEqual("Jane");      
    });

    it("should verify email", () => {
        const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
        expect(engineer.getId()).toEqual("1");      
    });

    it("should verify email", () => {
        const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
        expect(engineer.getEmail()).toEqual("jane@jane.com");      
    });

    it("should verify github", () => {
        const engineer = new Engineer("Jane", "1", "jane@jane.com", "jane");
        expect(engineer.getGithub()).toEqual("jane");      
    });
});

