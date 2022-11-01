const mysql = require('mysql2/promise');

// Export mysql2 connection object, implemented with Promises
module.exports = 
  mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'password',
      database : 'employee_db'
    });



  
  
  
  
