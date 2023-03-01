const Engineer = require("../lib/Engineer");

test("can create github", () => {
    const testGithub = "HamboneFakenamington92";
    const employeeInfo = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", testGithub);
    expect(employeeInfo.github).toBe(testGithub);
});

test("can get github", () => {
    const testGithub = "HamboneFakenamington92";
    const employeeInfo = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", testGithub);
    expect(employeeInfo.getGithub()).toBe(testGithub);
});

test("can get role", () => {
    const returnValue = "Engineer";
    const employeeInfo = new Engineer("Hambone", 8, "HamboneFakenamington@gmail.com", "HamboneFakenamington92");
    expect(employeeInfo.getRole()).toBe(returnValue);
});