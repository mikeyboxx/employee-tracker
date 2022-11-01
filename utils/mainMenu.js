const inquirer = require('inquirer'); // import the inquirer.js library

module.exports = [
  'View All Departments',
  'View All Roles',
  'View All Employees',
  new inquirer.Separator(),
  'Add Department',
  'Add Role',
  'Add Employee',
  new inquirer.Separator(),
  'Update Employee Role',
  'Update Employee Manager',
  new inquirer.Separator(),
  'Delete Department',
  'Delete Role',
  'Delete Employee',
  new inquirer.Separator(),
  'Quit'
];