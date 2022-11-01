const promptInput = require('../utils/promptInput');
const promptList = require('../utils/promptList');

// Prompt user for employee data to be added to the DB
const addEmployee = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  let values = await db.getRoles();  // query the roles table
        
  if (values.length === 0) // no roles, nothing to add to
    console.log(`\n${FgCyan}There are no Roles and/or Departments to add the employee to.`)
  else {
    // build choices array from results of the SQL query 
    const roleChoices = values.map(el => ({name:  el.Title + ' - ' + el.Department, value: el.Id }));
    
    // prompt user for name and role
    const first_name = await promptInput(`What is the employee's first name?`);
    const last_name = await promptInput(`What is the employee's last name?`);
    const role_id = await promptList(`What is the employee's role?`, roleChoices); 

    // query the employees table for names of managers
    let manager_id = null;
    values = await db.getEmployeeNames();
   
    // build choices array from results of the SQL query 
    if (values.length > 0) {
      const managerChoices = values.map(el => ({name: el.first_name + ' ' + el.last_name, value: el.id }));
      manager_id = await promptList(`What is the employee's manager?`, managerChoices);
    };

    // add employee to DB
    const {insertId} = await db.addEmployee(first_name, last_name, role_id, manager_id);
    console.log(`\n${FgCyan}Added ${first_name} ${last_name} to the database. id: ${insertId}`);
  }  

  res(true);
});

module.exports = addEmployee;