const promptList = require('../utils/promptList');

const deleteRole = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getRoles();
        
  if (values.length === 0) 
    console.log(`\n${FgCyan}There are no Roles to delete.`)
  else {
    const roleChoices = values.map(el => ({name:  el.Title + ' - ' + el.Department, value: el.Id }));
    const role_id = await promptList('Which Role would like to delete?', roleChoices); 
    const {name: title} = roleChoices.find(el => el.value === role_id);
    
    await db.deleteRole(role_id);
    console.log(`\n${FgCyan}${title} role was deleted from the database.`);
  }
  res(true);
});

module.exports = deleteRole;