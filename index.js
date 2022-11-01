const cTable = require('console.table');
const db = require('./db/database');
const promptList = require('./utils/promptList');
const choices = require('./utils/mainMenu');
const viewAllDepartments = require('./helpers/viewAllDepartments');
const viewAllRoles = require('./helpers/viewAllRoles');
const viewAllEmployees = require('./helpers/viewAllEmployees');
const addDepartment = require('./helpers/addDepartment');
const addRole = require('./helpers/addRole');
const addEmployee = require('./helpers/addEmployee');
const deleteDepartment = require('./helpers/deleteDepartment');
const deleteRole = require('./helpers/deleteRole');
const deleteEmployee = require('./helpers/deleteEmployee');
const updateEmployeeRole = require('./helpers/updateEmployeeRole');


// Prompt user for input until Quit is selected or DB error
const start = async ()=>{
  try {
    let choice = await promptList('What would you like to do?', choices); 

    while (choice !== 'Quit'){
      switch (choice) {
        case 'View All Departments': await viewAllDepartments(db); break;
        case 'View All Roles': await viewAllRoles(db); break;
        case 'View All Employees': await viewAllEmployees(db); break;
        case 'Add Department': await addDepartment(db); break;
        case 'Add Role': await addRole(db); break;
        case 'Add Employee': await addEmployee(db); break;
        case 'Delete Department': await deleteDepartment(db); break;
        case 'Delete Role': await deleteRole(db); break;
        case 'Delete Employee': await deleteEmployee(db); break;
        case 'Update Employee Role': await updateEmployeeRole(db); break;
      }
      choice = await promptList('\nWhat would you like to do now?', choices); 
    }

  } catch (err) {
    console.log(err.message);
  } 
  process.exit(1);
};

start(); // does all the work