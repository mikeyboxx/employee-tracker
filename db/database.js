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
  getDepartments: () => dbExecute(`SELECT * FROM departments ORDER BY id;`),
  
  getRoles: () => dbExecute(`SELECT a.id as 'Id', a.title as 'Title', a.salary as 'Salary', b.name as 'Department'
                               FROM roles a, departments b
                              WHERE a.department_id = b.id
                              ORDER BY b.name, a.title;`),

  getEmployees: () => dbExecute(`SELECT a.id, a.first_name as 'First Name', a.last_name as 'Last Name', 
                                        c.title as 'Title', c.salary as 'Salary', d.name as 'Department', 
                                        IFNULL(CONCAT(b.first_name, " ", b.last_name), '') as 'Manager'
                                   FROM (employees a, roles c, departments d)
                        LEFT OUTER JOIN employees b 
                                     ON a.manager_id = b.id
                                  WHERE a.role_id = c.id 
                                    AND c.department_id = d.id
                               ORDER BY a.id;`),

  getEmployeeNames: () => dbExecute(`SELECT id, first_name, last_name FROM employees ORDER BY id;`), 

  getEmployee: (id) => dbExecute(`SELECT * FROM employees 
                                   WHERE id = ${id};`),

  addDepartment: name => 
    dbExecute(`INSERT INTO departments (name) 
               VALUES ('${name}');`),

  addRole: (title, salary, department_id) => 
    dbExecute(`INSERT INTO roles (title, salary, department_id) 
               VALUES ('${title}', ${salary}, ${department_id});`),

  addEmployee: (first_name, last_name, role_id, manager_id) => 
    dbExecute(`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
               VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id});`),

  updateDepartment: (id, name) => 
    dbExecute(`UPDATE departments 
               SET name = '${name}'
               WHERE id = ${id}`),
  
  updateRole: (id, title, salary, department_id) => 
    dbExecute(`UPDATE roles 
               SET title = '${title}', salary = ${salary}, department_id = ${department_id}
               WHERE id = ${id}`),

  updateEmployee: (id, first_name, last_name, role_id, manager_id) => 
    dbExecute(`UPDATE employees 
               SET first_name = '${first_name}', last_name = '${last_name}', role_id = ${role_id}, manager_id = ${manager_id}
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

  // getDepartmentColumns: () => dbExecute(`SHOW COLUMNS FROM departments`)
}