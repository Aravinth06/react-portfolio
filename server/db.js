// server/db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Harshan@0903",
  database: "hapcomplaintdb",
});

module.exports = pool.promise();
