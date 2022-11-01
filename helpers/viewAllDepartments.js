const viewAllDepartments = db => new Promise(async (res,rej)=>{
  const FgCyan = "\x1b[36m";
  const values = await db.getDepartments();

  if (values.length === 0) 
    console.log(`\n${FgCyan}There are no Departments.`)
  else
    console.table(`\n${FgCyan}Departments`, values);

  res(true);
});

module.exports = viewAllDepartments;