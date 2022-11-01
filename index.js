
  const cTable = require('console.table');
  const inquirer = require('inquirer');
  const chalk = require('chalk');
  const db = require('./db/database');
  const promptList = require('./utils/promptList');
const promptInput = require('./utils/promptInput');
const promptNumber = require('./utils/promptNumber');

(async ()=>{
  try {
    // let rows = {};
    // const values = await db.getDepartments();
    // console.table(values);

    // const choices = [
    //   {
    //     name: 'View All Departments',
    //     value: 0,
    //   },
    //   {
    //     name: 'View All Roles',
    //     value: 1,
    //   },
    //   {
    //     name: 'View All Employees',
    //     value: 2,
    //   },
    //   {
    //     name: new inquirer.Separator(),
    //     value: -1,
    //   }
    //   {
    //     name: 'View All Departments',
    //     value: 4,
    //   },
    //   {
    //     name: 'View All Roles',
    //     value: 5,
    //   },
    //   {
    //     name: 'View All Employees',
    //     value: 2,
    //   },
    //   {
    //     name: new inquirer.Separator(),
    //     value: 3,
    //   }
    // ];
    const choices = [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      new inquirer.Separator(),
      'Add Department',
      'Add Role',
      'Add Employee',
      new inquirer.Separator(),
      'Update Department',
      'Update Role',
      'Update Employee',
      new inquirer.Separator(),
      'Delete Department',
      'Delete Role',
      'Delete Employee',
      new inquirer.Separator(),
      'Quit'
    ];

const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";
    
    console.clear();
    let choice = await promptList('What would you like to do?', choices); 


    while (choice !== 'Quit'){
      if (choice === 'View All Departments'){
        const values = await db.getDepartments();

        if (values.length === 0) 
          console.log(`\n${FgCyan}There are no Departments.`)
        else
          console.table(`\n${FgCyan}Departments`, values);
      };
      
      if (choice === 'View All Roles'){
        const values = await db.getRoles();

        if (values.length === 0) 
          console.log(`\n${FgCyan}There are no Roles.`)
        else
          console.table(`\n${FgCyan}Roles`, values);
      };

      if (choice === 'View All Employees'){
        const values = await db.getEmployees();

        if (values.length === 0) 
          console.log(`\n${FgCyan}There are no Employees.`)
        else
          console.table(`\n${FgCyan}Employees`, values);
      };

      if (choice === 'Add Department'){
        const name = await promptInput('What is the name of the department?');
        const {insertId} = await db.addDepartment(name);
        console.log(`\n${FgCyan}Added ${name} department to the database. id: ${insertId}`);
      };

      if (choice === 'Add Role'){
        const values = await db.getDepartments();
        
        if (values.length === 0) 
          console.log(`\n${FgCyan}There are no Departments to add the role to.`)
        else {
          const deptChoices = values.map(el => ({name: el.name, value: el.id }));
          const title = await promptInput('What is the name of the role?');
          const salary = await promptNumber('What is the salary of the role?');
          const department_id = await promptList('Which department does the role belong to?', deptChoices); 
          const {insertId} = await db.addRole(title, salary, department_id);
          console.log(`\n${FgCyan}Added ${title} role to the database. id: ${insertId}`);
        }
      }
      
      choice = await promptList('\nWhat would you like to do now?', choices); 
    }

    process.exit(1);
    
    // rows = await db.getRoles();
    // console.table(rows);

    // let rows = await db.getDepartmentColumns();

    // const fields = rows.map(({Field})=>Field);
    // console.table(fields, values);



    // const {insertId} = await db.addDepartment('Security');
    // console.log(insertId);

    // const {insertId} = await db.addRole({
    //   title: 'Jr. Programmer',
    //   salary: 85000,
    //   department_id: 7
    // });
    // console.log(insertId);

    // const results = await db.updateDepartment({
    //   id: 8,
    //   name: 'Education',
    // });
    // console.log(results);


  } catch (err) {
    console.log(err.message);
  } 
})();




// Prompt user with list
//  - View all departments
//  - View all roles
//  - View all employees
//  ---------------- 
//  - Add department
//  - Add role
//  - Add employee
//  ---------------- 
//  - Update department
//  - Update role
//  - Update employee
//  ----------------
//  - Delete department
//  - Delete role
//  - Delete employee
//  ----------------
