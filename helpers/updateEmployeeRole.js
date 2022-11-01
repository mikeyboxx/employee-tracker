const promptInput = require('../utils/promptInput');
const promptList = require('../utils/promptList');
const promptNumber = require('../utils/promptNumber');

const updateEmployeeRole = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
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

  res(true);
});

module.exports = updateEmployeeRole;