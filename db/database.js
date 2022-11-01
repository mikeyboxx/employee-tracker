const dbExecute = function (qry_str) { 
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await require('./getConnection');
      const [rows] = await conn.execute(`${qry_str};`);
      resolve(rows);
    } catch (err){
      reject(err)
    }
  })
}
  
module.exports = {
  getDepartments: () => dbExecute(`SELECT * FROM departments;`),
  getRoles: () => dbExecute(`SELECT * FROM roles;`),
  getEmployees: () => dbExecute(`SELECT * FROM employees;`),

  addDepartment: name => 
    dbExecute(`INSERT INTO departments (name) 
               VALUES ('${name}');`),

  addRole: ({title, salary, department_id}) => 
    dbExecute(`INSERT INTO roles (title, salary, department_id) 
               VALUES ('${title}', ${salary}, ${department_id});`),

  addEmployee: ({title, salary, department_id}) => 
    dbExecute(`INSERT INTO roles (title, salary, department_id) 
               VALUES ('${title}', ${salary}, ${department_id});`),
}