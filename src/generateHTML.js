//Employee lib
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

//Generates manager card
//Need to ask how to generate this 
<div class="card d-flex flex-wrap mx-auto" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${manager.getName()}</h5>
  <h6>Manager</h6>
  <ul class="list-group">
    <li class="list-group-item">Id: ${manager.getId()}</li>
    <li class="list-group-item">Email: ${manager.getEmail()}</li>
    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>
</div>

<div class="card d-flex flex-wrap mx-auto" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${engineer.getName()}</h5>
  <h6>Manager</h6>
  <ul class="list-group">
    <li class="list-group-item">Id: ${engineer.getId()}</li>
    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
    <li class="list-group-item">Office number: ${engineer.getGithub()}</li>
  </ul>
</div>
</div>

<div class="card d-flex flex-wrap mx-auto" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${intern.getName()}</h5>
  <h6>Intern</h6>
  <ul class="list-group">
    <li class="list-group-item">Id: ${engineer.getId()}</li>
    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
    <li class="list-group-item">School: ${engineer.getSchool()}</li>
  </ul>
</div>
</div>

