// Query the DB for all Employees. Returns a Promise.
const viewAllEmployees = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getEmployees();

  if (values.length === 0) 
    console.log(`\n${FgCyan}There are no Employees.`)
  else
    console.table(`\n${FgCyan}Employees`, values);

  res(true);
});

module.exports = viewAllEmployees;