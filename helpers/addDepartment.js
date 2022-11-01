const promptInput = require('../utils/promptInput');

const addDepartment = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const name = await promptInput('What is the name of the department?');
        
  const {insertId} = await db.addDepartment(name);
  console.log(`\n${FgCyan}Added ${name} department to the database. id: ${insertId}`);

  res(true);
});

module.exports = addDepartment;