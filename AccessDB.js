module.exports = function(){

  var mysql = require('mysql');
  var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1501',
    database : 'locationdb'
  });
  conn.connect();
  return conn;


}
