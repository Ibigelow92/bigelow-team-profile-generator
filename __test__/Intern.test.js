const Intern = require("../lib/Intern");

test("can get school", () => {
    const testSchool = "Something University";
    const employeeInfo = new Intern("Hambone", 8, "HamboneFakenamington@gmail.com", testSchool);
    expect(employeeInfo.school).toBe(testSchool);
});

test("can get role.", () => {
    const returnValue = "Intern";
    const employeeInfo = new Intern("Hambone", 8, "HamboneFakenamington@gmail.com", "Something University");
    expect(employeeInfo.getRole()).toBe(returnValue);
});