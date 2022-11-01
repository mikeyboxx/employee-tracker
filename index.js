// const Database = function (){

//   this.dbExecute = function (qry_str) { 
//     return new Promise(async (resolve, reject)=>{
//       try {
//         const conn = await require('./db/getConnection');
//         const [rows] = await conn.execute(`${qry_str};`);
//         resolve(rows);
//       } catch (err){
//         reject(err)
//       }
//     })
//   }
// };
  

// Database.prototype.getDepartments = function (){
//     return this.dbExecute(`SELECT * FROM departmens;`);
// }
// Database.prototype.getDepartments = function (){
//     return this.dbExecute(`SELECT * FROM departments;`);
// }
// Database.prototype.getDepartments = this.dbExecute.bind(this, `SELECT * FROM departments;`);
// Database.prototype.getDepartments = this.test;

// const db = new Database();

const db = require('./db/database');

(async ()=>{
  try {
    let rows = {};
  //   let rows = await db.getDepartments();
  //   console.log(rows);
    
  //   rows = await db.getRoles();
  //   console.log(rows);

    // const {insertId} = await db.addDepartment('Security');
    // console.log(insertId);

    // const {insertId} = await db.addRole({
    //   title: 'Jr. Programmer',
    //   salary: 85000,
    //   department_id: 7
    // });
    // console.log(insertId);

    const results = await db.updateDepartment({
      id: 8,
      name: 'Education',
    });
    console.log(results);


  } catch (err) {
    console.log(err.message);
  } 
})();
// db.getDepartments(`SELECT * FROM departments;`);


// const dbExecute = (qry_str)=> new Promise(async (resolve, reject)=>{
//   try {
//     const conn = await require('./db/getConnection');
//     const [rows] = await conn.execute(`${qry_str};`);
//     resolve(rows);
//   } catch (err){
//     reject(err)
//   }
// });


// const getDepartments = ()=> new Promise(async (resolve, reject)=>{
//   try {
//     const conn = await require('./db/getConnection');
//     const [rows] = await conn.execute(`SELECT * FROM department;`);
//     resolve(rows);
//   } catch (err){
//     reject(err)
//   }
// });

// Prompt user with list
//  - View all departments
//  - View all roles
//  - View all employees
//  ---------------- 
//  - Add department
//  - Add role
//  - Add employee
//  ---------------- 
//  - Update department
//  - Update role
//  - Update employee
//  ----------------
//  - Delete department
//  - Delete role
//  - Delete employee
//  ----------------


// dbExecute(`SELECT * FROM department`)
//   .then(departments => console.log(departments))
//   .catch(err => console.log(err.message));

// dbExecute(`DELETE FROM department WHERE id >=4`)
//   .then(departments => console.log(departments))
//   .catch(err => console.log(err.message));  





// (async ()=>{
//   try {
//     const conn = await require('./db/getConnection');

//     const [rows] = await conn.execute(`SELECT * FROM departmet;`)
//     console.log(rows);
//   } catch (err){
//     console.log(err.message);
//   }
// })();

// (async ()=>{
//   const conn = await getConnection();
//   const [error, rows, fields] = await conn.execute(`SELECT * FROM departmet;`);
// })();

// conn
//   .then(conn=> {
//     return conn.execute(`SELECT * FROM department;`);
//     // console.log(error, rows, fields);
//   })
//   .then(resp=>{
//     const [error, rows, fields] = resp;
//     console.log(error, rows, fields);
//   })
//   .catch(err=>console.log(err.message));



// conn.getConnection(()=>{console.log(`Connected to the employee_db database.`)});
// var query_str = `INSERT INTO department (name) VALUES ('Marketing');`;

//   conn.query(query_str, function (err, rows, fields) {
//       if (err) {
//           console.log(err);
//       }
//       console.log(rows);
//   });

 
  // function insertDepartment(name)
  // {
  //   return new Promise(function(resolve, reject) {
  //       // The Promise constructor should catch any errors thrown on
  //       // this tick. Alternately, try/catch and reject(err) on catch.

  //       var query_str = `INSERT INTO department (name) VALUES (${name});`;

  //       conn.query(query_str, function (err, rows, fields) {
  //           if (err) {
  //               return reject(err);
  //           }
  //           resolve(rows);
  //       });
  //   });
  // };

  // (async ()=>{
  //   await insertDepartment('P&S');
  //   await insertDepartment('Marketing');
  //   await insertDepartment('Human Resources');
  //   await insertDepartment('Legal');
  // })();

    

  // const insertDepartment = function({name}){
  //   console.log(name);
  //   console.log(this);
  //   this.query(`INSERT INTO department (name) VALUES (${name});`, function (err, results) {
  //     console.log(results);
  //     // return results;
  //   })
  // }.bind(mysql.createConnection(
  //   {
  //     host: 'localhost',
  //     user: 'root',
  //     password: 'password',
  //     database: 'employee_db'
  //   },
  //   console.log(`Connected to the employee_db database.`)
  // ));


  // process.exit(1);


  // connection.query('INSERT INTO posts SET ?', {title: 'test'}, function (error, results, fields) {
  //   if (error) throw error;
  //   console.log(results.insertId);
  // });
