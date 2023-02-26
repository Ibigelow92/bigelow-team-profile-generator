const Intern = require("../lib/Intern");

test("can get school", () => {
    const testSchool = "Something University";
    const employeeInstance = new Intern("Hambone", 8, "HamboneFakenamington@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Hambone", 8, "HamboneFakenamington@gmail.com", "Something University");
    expect(employeeInstance.getRole()).toBe(returnValue);
});