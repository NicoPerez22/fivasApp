// var mysql = require('mysql');
const env = {
  database: 'baseregistronodejs',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

// const connection = mysql.createConnection({
//   database: 'baseregistronodejs',
//   username: 'root',
//   password: '',
//   host: 'localhost',
//   dialect: 'mysql',
// });

module.exports = env;
// module.exports = connection;
