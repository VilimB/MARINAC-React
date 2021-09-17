require("dotenv").config();
var mysql = require("mysql");

const {
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_DATABASE,
  GMAIL_USER,
  GMAIL_PASSWORD,
} = process.env;

console.log(DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE, DB_HOST);

const db = mysql.createPool({
  user: DB_USER,
  port: DB_PORT,
  host: DB_HOST,
  password: "",
  database: DB_DATABASE,
});

module.exports = db;
