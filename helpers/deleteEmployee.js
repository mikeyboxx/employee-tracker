const promptList = require('../utils/promptList');

// Prompt user for employee to be deleted from the DB
const deleteEmployee = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getEmployees(); // query the employees table
        
  if (values.length === 0) // nothing to delete, table is empty 
    console.log(`\n${FgCyan}There are no Employees to delete.`)
  else {
    // build choices array from results of the SQL query 
    const employeeChoices = values.map(el => ({name: el['First Name'] + ' ' + el['Last Name'], value: el.id }));

    // prompt user for employee to delete
    const employee_id = await promptList('Which employee would like to delete?', employeeChoices); 
    const {name} = employeeChoices.find(el => el.value === employee_id);
    await db.deleteEmployee(employee_id);

    // delete from DB
    console.log(`\n${FgCyan}${name} employee was deleted from the database.`);
  }
  res(true);
});

module.exports = deleteEmployee;