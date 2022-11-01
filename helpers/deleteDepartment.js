const promptInput = require('../utils/promptInput');
const promptList = require('../utils/promptList');
const promptNumber = require('../utils/promptNumber');

const deleteDepartment = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getDepartments();
        
  if (values.length === 0) 
    console.log(`\n${FgCyan}There are no Departments to delete.`)
  else {
    const deptChoices = values.map(el => ({name: el.name, value: el.id }));
    const department_id = await promptList('Which department would like to delete?', deptChoices); 
    const {name: departmentName} = deptChoices.find(el => el.value === department_id);
    
    await db.deleteDepartment(department_id);
    console.log(`\n${FgCyan}${departmentName} department was deleted from the database.`);

  res(true);
  };
});

module.exports = deleteDepartment;