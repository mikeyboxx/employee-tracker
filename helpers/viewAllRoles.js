// Query the DB for all Roles. Returns a Promise.
const viewAllRoles = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getRoles();

  if (values.length === 0)  // table is empty
    console.log(`\n${FgCyan}There are no Roles.`)
  else
    console.table(`\n${FgCyan}Roles`, values);

  res(true);
});

module.exports = viewAllRoles;