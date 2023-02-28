const Engineer = require("../lib/Engineer");

test("can create github", () => {
    const testGithub = "HamboneFakenamington92";
    const employeeInstance = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("can get github", () => {
    const testGithub = "HamboneFakenamington92";
    const employeeInstance = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("can get role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", "HamboneFakenamington92");
    expect(employeeInstance.getRole()).toBe(returnValue);
});