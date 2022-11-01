const promptInput = require('../utils/promptInput');
const promptList = require('../utils/promptList');
const promptNumber = require('../utils/promptNumber');

const addRole = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
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

  res(true);
});

module.exports = addRole;