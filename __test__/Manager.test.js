const Manager = require("../lib/Manager");

test("can create office number.", () => {
    const testOfficeNumber = 23;
    const employeeInfo = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", testOfficeNumber);
    expect(employeeInfo.officeNumber).toBe(testOfficeNumber);
});

test("can get office number.", () => {
    const testOfficeNumber = 23;
    const employeeInfo = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", testOfficeNumber);
    expect(employeeInfo.getOfficeNumber()).toBe(testOfficeNumber);
});

test("can get role.", () => {
    const returnValue = "Manager";
    const employeeInfo = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", 23);
    expect(employeeInfo.getRole()).toBe(returnValue);
});