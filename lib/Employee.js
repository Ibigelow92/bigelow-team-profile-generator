class Employee {
    constructor (name, id, email) {
        //We use these three values in the employee class because they are common to all
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName (){
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;