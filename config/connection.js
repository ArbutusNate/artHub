//Almost certainly can remove the jawsDB part of this but leaving it until we settle on storage.

var mysql = require('mysql');


// Mysql

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var keys = require('./apikey/keys.js');
  var connection = mysql.createConnection(keys.sqlConnect);
}



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;