const promptList = require('../utils/promptList');

const deleteEmployee = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getEmployees();
        
  if (values.length === 0) 
    console.log(`\n${FgCyan}There are no Employees to delete.`)
  else {
    const employeeChoices = values.map(el => ({name: el['First Name'] + ' ' + el['Last Name'], value: el.id }));
    const employee_id = await promptList('Which employee would like to delete?', employeeChoices); 
    const {name} = employeeChoices.find(el => el.value === employee_id);
    await db.deleteEmployee(employee_id);

    console.log(`\n${FgCyan}${name} employee was deleted from the database.`);
  }
  res(true);
});

module.exports = deleteEmployee;