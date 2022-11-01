const promptList = require('../utils/promptList');

// Prompt user for department to be deleted from the DB
const deleteDepartment = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getDepartments(); // query the departments table
        
  if (values.length === 0) // nothing to delete, table is empty
    console.log(`\n${FgCyan}There are no Departments to delete.`)
  else {
    // build choices array from results of the SQL query 
    const deptChoices = values.map(el => ({name: el.name, value: el.id }));

    // prompt user for department to delete
    const department_id = await promptList('Which department would like to delete?', deptChoices); 
    const {name: departmentName} = deptChoices.find(el => el.value === department_id);
    
    // delete from DB
    await db.deleteDepartment(department_id);
    console.log(`\n${FgCyan}${departmentName} department was deleted from the database.`);
  };
  res(true);
});

module.exports = deleteDepartment;