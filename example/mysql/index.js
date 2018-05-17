var mysql = require('mysql');
var connection = mysql.createConnection({
  //insecureAuth: true,
  host: '127.0.0.1',
  username: 'root',
  password: '123456',
  database: 'mysql',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();