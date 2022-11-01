const promptInput = require('../utils/promptInput');
const promptList = require('../utils/promptList');
const promptNumber = require('../utils/promptNumber');

// Prompt user for role data to be added to the DB
const addRole = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getDepartments();  // query the departments table
        
  if (values.length === 0)  // nothing to add, no departments
    console.log(`\n${FgCyan}There are no Departments to add the role to.`)
  else {
    // build choices array from results of the SQL query 
    const deptChoices = values.map(el => ({name: el.name, value: el.id }));

    // prompt user for title, salary, and department
    const title = await promptInput('What is the title of the role?');
    const salary = await promptNumber('What is the salary of the role?');
    const department_id = await promptList('Which department does the role belong to?', deptChoices); 
    
    // add role to the DB
    const {insertId} = await db.addRole(title, salary, department_id);
    console.log(`\n${FgCyan}Added ${title} role to the database. id: ${insertId}`);
  }

  res(true);
});

module.exports = addRole;