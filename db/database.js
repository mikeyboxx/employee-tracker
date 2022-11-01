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

  addEmployee: ({first_name, last_name, role_id, manager_id}) => 
    dbExecute(`INSERT INTO roles (first_name, last_name, role_id, manager_id) 
               VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id});`),

  updateDepartment: ({id, name}) => 
    dbExecute(`UPDATE departments 
               SET name = '${name}'
               WHERE id = ${id}`),
  
  updateRole: ({id, title, salary, department_id}) => 
    dbExecute(`UPDATE roles 
               SET title = '${title}', salary = '${salary}', department_id = '${department_id}'
               WHERE id = ${id}`),

  updateEmployee: ({id, first_name, last_name, role_id, manager_id}) => 
    dbExecute(`UPDATE roles 
               SET first_name = '${first_name}', last_name = '${last_name}', role_id = '${role_id}, manager_id = '${manager_id}'
               WHERE id = ${id}`),

  deleteDepartment: id => 
    dbExecute(`DELETE FROM departments 
               WHERE id = ${id}`),

  deleteRole: id => 
    dbExecute(`DELETE FROM roles 
               WHERE id = ${id}`),

  deleteEmployee: id => 
    dbExecute(`DELETE FROM employees 
               WHERE id = ${id}`),
}