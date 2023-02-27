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
    inquirer.prompt([{
        message: "Please enter team member's name",
        name: "name"
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter team member's ID",
    },
    {
        type: "list",
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
        name: "id"},
    {
        
        message: "Enter team member's email",
        name: "email"
    },
    {
        message: "Enter team member's officeNumber",
        name: "officeNumber"}
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
                    if(answer.choose==='add') return addManager()
                    else return generatePage(employeeArray)
                }
               )

            }
        )
}

function generatePage(employeeArray){



const data =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<div class="card d-flex flex-wrap mx-auto" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${employeeArray[0].getName()}</h5>
  <h6>Manager</h6>
  <ul class="list-group">
    <li class="list-group-item">Id: ${employeeArray[0].getId()}</li>
    <li class="list-group-item">Email: ${employeeArray[0].getEmail()}</li>
    <li class="list-group-item">Office number: ${employeeArray[0].getOfficeNumber()}</li>
  </ul>
</div>
</div>
</body>
</html>`

fs.writeFileSync('index.html', data)}

