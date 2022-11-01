const promptList = require('../utils/promptList');

// Prompt user for employee to be updated on the DB
const updateEmployeeRole = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  let values = await db.getEmployeeNames(); // query the employees table
        
  if (values.length === 0) // nothing to delete, table is empty
    console.log(`\n${FgCyan}There are no Employees to update.`)
  else {
    // build choices array from results of the SQL query 
      const employeeChoices = values.map(el => ({name: el.first_name + ' ' + el.last_name, value: el.id }));

      // prompt user for employee to update
      const employee_id = await promptList(`Which employee's role do you want to update?`, employeeChoices);
      
      values = await db.getRoles();  // query the roles table
      
      // build choices array from results of the SQL query      
      const roleChoices = values.map(el => ({name:  el.Title + ' - ' + el.Department, value: el.Id }));
      
      // prompt user for new role 
      const role_id = await promptList(`What is the employee's new role?`, roleChoices);

      // query DB to get record before updating
      const [{first_name, last_name,  manager_id }] = await db.getEmployee(employee_id);

      // update DB
      await db.updateEmployee(employee_id, first_name, last_name, role_id, manager_id);
      console.log(`\n${FgCyan}${first_name} ${last_name} has been updated.`);
  }

  res(true);
});

module.exports = updateEmployeeRole;