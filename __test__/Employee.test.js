const Employee = require("../lib/Employee");

test("Can set name", () => {
    const name = "Hambone";
    const employeeInfo = new Employee(name);
    expect(employeeInfo.name).toBe(name);
})

test("Can set ID", () => {
    const id = 8;
    const employeeInfo = new Employee("Hambone", id);
    expect(employeeInfo.id).toBe(id);
})

test("Can set email", () => {
    const email = "HamboneFakenamington@gmail.com";
    const employeeInfo = new Employee("Hambone", 8, email);
    expect(employeeInfo.email).toBe(email);
})

test("can get name", () => {
    const testName = "Hambone";
    const employeeInfo = new Employee(testName);
    expect(employeeInfo.getName()).toBe(testName);
})

test("can get ID", () => {
    const testID = 8;
    const employeeInfo = new Employee("Hambone", testID);
    expect(employeeInfo.getId()).toBe(testID);
})

test("can get email", () => {
    const testEmail = "HamboneFakenamington@gmail.com";
    const employeeInfo = new Employee("Hambone", 8, testEmail);
    expect(employeeInfo.getEmail()).toBe(testEmail);
})

test("can get role", () => {
    const testRole = "Employee";
    const employeeInfo = new Employee("Hambone", 8, "HamboneFakenamington@gmail.com");
    expect(employeeInfo.getRole()).toBe(testRole);
})