
  const cTable = require('console.table');
  const inquirer = require('inquirer');
  const chalk = require('chalk');
  const db = require('./db/database');
  const promptList = require('./utils/promptList');
const promptInput = require('./utils/promptInput');
const promptNumber = require('./utils/promptNumber');
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

const FgCyan = "\x1b[36m";


(async ()=>{
  try {
    
    console.clear();
    let choice = await promptList('What would you like to do?', choices); 




    while (choice !== 'Quit'){
      if (choice === 'View All Departments'){
        await viewAllDepartments(db);
        // const values = await db.getDepartments();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Departments.`)
        // else
        //   console.table(`\n${FgCyan}Departments`, values);
      };
      
      if (choice === 'View All Roles'){
        await viewAllRoles(db);
        // const values = await db.getRoles();

        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Roles.`)
        // else
        //   console.table(`\n${FgCyan}Roles`, values);
      };

      if (choice === 'View All Employees'){
        await viewAllEmployees(db);
        // const values = await db.getEmployees();

        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Employees.`)
        // else
        //   console.table(`\n${FgCyan}Employees`, values);
      };

      if (choice === 'Add Department'){
        await addDepartment(db);
        // const name = await promptInput('What is the name of the department?');
        
        // const {insertId} = await db.addDepartment(name);
        // console.log(`\n${FgCyan}Added ${name} department to the database. id: ${insertId}`);
      };

      if (choice === 'Add Role'){
        await addRole(db);
        // const values = await db.getDepartments();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Departments to add the role to.`)
        // else {
        //   const deptChoices = values.map(el => ({name: el.name, value: el.id }));
        //   const title = await promptInput('What is the name of the role?');
        //   const salary = await promptNumber('What is the salary of the role?');
        //   const department_id = await promptList('Which department does the role belong to?', deptChoices); 
          
        //   const {insertId} = await db.addRole(title, salary, department_id);
        //   console.log(`\n${FgCyan}Added ${title} role to the database. id: ${insertId}`);
        // }
      }

      if (choice === 'Add Employee'){
        await addEmployee(db);
        // let values = await db.getRoles();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Roles and/or Departments to add the employee to.`)
        // else {
        //   const roleChoices = values.map(el => ({name:  el.Title + ' - ' + el.Department, value: el.Id }));
        //   const first_name = await promptInput(`What is the employee's first name?`);
        //   const last_name = await promptInput(`What is the employee's last name?`);
        //   const role_id = await promptList(`What is the employee's role?`, roleChoices); 

        //   let manager_id = null;
        //   values = await db.getEmployeeNames();
        //   if (values.length > 0) {
        //     const managerChoices = values.map(el => ({name: el.first_name + ' ' + el.last_name, value: el.id }));
        //     manager_id = await promptList(`What is the employee's manager?`, managerChoices);
        //   };

        //   const {insertId} = await db.addEmployee(first_name, last_name, role_id, manager_id);
        //   console.log(`\n${FgCyan}Added ${first_name} ${last_name} to the database. id: ${insertId}`);
        // }
      }
      
      if (choice === 'Delete Department'){
        await deleteDepartment(db);
        // const values = await db.getDepartments();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Departments to delete.`)
        // else {
        //   const deptChoices = values.map(el => ({name: el.name, value: el.id }));
        //   const department_id = await promptList('Which department would like to delete?', deptChoices); 
        //   const {name: departmentName} = deptChoices.find(el => el.value === department_id);
          
        //   await db.deleteDepartment(department_id);
        //   console.log(`\n${FgCyan}${departmentName} department was deleted from the database.`);
        // }
      };

      if (choice === 'Delete Role'){
        await deleteRole(db);
        // const values = await db.getRoles();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Roles to delete.`)
        // else {
        //   const roleChoices = values.map(el => ({name: el.name, value: el.id }));
        //   const role_id = await promptList('Which department would like to delete?', roleChoices); 
        //   const {name: title} = roleChoices.find(el => el.value === role_id);
         
        //   await db.deleteRole(role_id);
        //   console.log(`\n${FgCyan}${title} role was deleted from the database.`);
        // }
      };

      if (choice === 'Delete Employee'){
        await deleteEmployee(db);
        // const values = await db.getEmployees();
        
        // if (values.length === 0) 
        //   console.log(`\n${FgCyan}There are no Employees to delete.`)
        // else {
        //   const employeeChoices = values.map(el => ({name: el.first_name + ' ' + el.last_name, value: el.id }));
        //   const employee_id = await promptList('Which employee would like to delete?', employeeChoices); 
        //   const {name} = employeeChoices.find(el => el.value === employee_id);
        //   await db.deleteEmployee(employee_id);

        //   console.log(`\n${FgCyan}${name} employee was deleted from the database.`);
        // }
      };

      if (choice === 'Update Employee Role'){
        let values = await db.getEmployeeNames();
        
        if (values.length === 0) 
          console.log(`\n${FgCyan}There are no Employees to update.`)
        else {
            const employeeChoices = values.map(el => ({name: el.first_name + ' ' + el.last_name, value: el.id }));
            const employee_id = await promptList(`Which employee's role do you want to update?`, employeeChoices);
            
            values = await db.getRoles();
            const roleChoices = values.map(el => ({name:  el.Title + ' - ' + el.Department, value: el.Id }));
            const role_id = await promptList(`What is the employee's new role?`, roleChoices);

            const [{first_name, last_name,  manager_id }] = await db.getEmployee(employee_id);

            await db.updateEmployee(employee_id, first_name, last_name, role_id, manager_id);
            console.log(`\n${FgCyan}${first_name} ${last_name} has been updated.`);
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
