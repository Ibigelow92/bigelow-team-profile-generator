//packages
const inquirer = require('inquirer');
const fs = require('fs');

//employee libraries
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const employeeArray = [];

function initApp() {
    addMember();
}

function addMember() {
    inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: "Select team member's role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ],
    },
   ]).then( answer=>{

        switch(answer.role){
            case"Manager": return addManager();
            case"Engineer": return addEngineer();
            case"Intern": return addIntern();
            // case"Manager": return addManager();
            // case"Manager": return addManager();
    
        }
    }
   ) 
}

initApp()

function addManager(){

    inquirer.prompt([
    {
        message: "Enter team member's name",
        name: "name"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        
        message: "Enter team member's email",
        name: "email"
    },
    {
        message: "Enter team member's email officeNumber",
        name: "officeNumber"
    }
    ])
    .then(
            answer=>{
               const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
               employeeArray.push(newManager)

               inquirer.prompt({
                type:"list",
                message:"do you want to add another team or generate html?",
                choices:['add', 'generate'],
                name: "choose"
               }).then(
                answer=>{
                    if(answer.choose==='add') return addMember()
                    else return generatePage(employeeArray)
                }
               )

            }
        )
}

function addEngineer(){

    inquirer.prompt([
    {
        message: "Enter team member's name",
        name: "name"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        
        message: "Enter team member's email",
        name: "email"
    },
    {
        message: "Enter team member's GitHub",
        name: "GitHub"
    }
    ])
    .then(
            answer=>{
               const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
               employeeArray.push(newEngineer)

               inquirer.prompt({
                type:"list",
                message:"do you want to add another teammate or generate html?",
                choices:['add', 'generate'],
                name: "choose"
               }).then(
                answer=>{
                    if(answer.choose==='add') return addMember()
                    else return generatePage(employeeArray)
                }
               )

            }
        )
}

function addIntern(){

    inquirer.prompt([
    {
        message: "Enter team member's name",
        name: "name"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        
        message: "Enter team member's email",
        name: "email"
    },
    {
        message: "Enter team member's school",
        name: "school"
    }
    ])
    .then(
            answer=>{
               const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
               employeeArray.push(newIntern)

               inquirer.prompt({
                type:"list",
                message:"do you want to add another teammate or generate html?",
                choices:['add', 'generate'],
                name: "choose"
               }).then(
                answer=>{
                    if(answer.choose==='add') return addMember()
                    else return generatePage(employeeArray)
                }
               )

            }
        )
}

function generateCard(employee){
    return `<div class="card d-flex flex-wrap mx-auto" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${employee.getName()}</h5>
    <h6>Manager</h6>
    <ul class="list-group">
        <li class="list-group-item">Id: ${employee.getId()}</li>
        <li class="list-group-item">Email: ${employee.getEmail()}</li>
        <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
    </ul>
    </div>
</div>`
}

function generatePage(employeeArray){

//need a for loop
    //what function do I put here??


let html =
//for manager
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`





employeeArray.forEach(employee => {
    html += generateCard(employee)
    
});

html += `</body></html>`

fs.writeFileSync('index.html', html)}
