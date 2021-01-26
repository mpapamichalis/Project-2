const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "cth04cej24",
  database: "blood_db"
});

connection.connect(err => {
  if (err) {
    console.error("error connectiong: " + err.stack);
    return;
    
  }
  console.log("connected as id "+ connection.threadId);
});

module.exports = connection;