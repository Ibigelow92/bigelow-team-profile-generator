const Manager = require("../lib/Manager");

test("can create office number.", () => {
    const testOfficeNumber = 23;
    const employeeInstance = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("can get office number.", () => {
    const testOfficeNumber = 23;
    const employeeInstance = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("can get role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Hambone", 8, "HamboneFakenamington@gmail.com", 23);
    expect(employeeInstance.getRole()).toBe(returnValue);
});