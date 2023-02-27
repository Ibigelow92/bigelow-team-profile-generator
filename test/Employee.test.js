const Employee = require("../lib/Employee");

test("Can create an new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Can set name", () => {
    const name = "Hambone";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Can set ID", () => {
    const id = 8;
    const employeeInstance = new Employee("Hambone", id);
    expect(employeeInstance.id).toBe(id);
})

test("Can set email", () => {
    const email = "HamboneFakenamington@gmail.com";
    const employeeInstance = new Employee("Hambone", 8, email);
    expect(employeeInstance.email).toBe(email);
})

test("can get name", () => {
    const testName = "Hambone";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("can get ID", () => {
    const testID = 8;
    const employeeInstance = new Employee("Hambone", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("can get email", () => {
    const testEmail = "HamboneFakenamington@gmail.com";
    const employeeInstance = new Employee("Hambone", 8, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("can get role", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Hambone", 8, "HamboneFakenamington@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})