require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "granttracker",
  multipleStatements: true
});


/* CREATE TABLE `Users` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`org_name` varchar(255) NOT NULL,
	`project_name` varchar(255) NOT NULL,
	`project code` INT(255) NOT NULL,
	`region` TEXT(40) NOT NULL,
	`city` TEXT(40) NOT NULL,
	`grant_amount` varchar(70) NOT NULL,
	`grant_period` DATE(70) NOT NULL,
	PRIMARY KEY (`ID`)
);
 */

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, org_name TEXT (255), project_name TEXT (255), project_code INT, region TEXT(40), city TEXT(40), grant_amount varchar(70), grant_period DATE , PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");

    console.log("Closing...");
  });

 /*  CREATE TABLE `narrative` (
    `ID` INT NOT NULL,
    `report period` varchar(255) NOT NULL,
    `project_summary` varchar(1000) NOT NULL,
    `tasks_completed` TEXT NOT NULL,
    `tasks_delayed` TEXT NOT NULL,
    `tasks_pending` TEXT NOT NULL,
    `risks` TEXT NOT NULL,
    `issues` TEXT NOT NULL
  ); */

  sql = "DROP TABLE if exists narrative; CREATE TABLE narrative(id INT NOT NULL AUTO_INCREMENT, report_period VARCHAR(255), project_summary VARCHAR(5000),task_completed TEXT, task_pending TEXT, task_delayed TEXT, risks TEXT, issues TEXT,PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `narratives` was successful!");

    console.log("Closing...");
  });

 /*  CREATE TABLE `financial` (
    `budget_line` varchar(1000) NOT NULL,
    `project_budget` varchar(255) NOT NULL,
    `forecast_amount` varchar(1000) NOT NULL,
    `actual_amount` varchar(1000) NOT NULL,
    `totals` DECIMAL NOT NULL
  ); */ 

  sql = "DROP TABLE if exists financial; CREATE TABLE financial(id INT NOT NULL AUTO_INCREMENT, `budget_line` varchar(1000), project_budget varchar(255), forecast_amount varchar(1000), actual_amount varchar(1000), totals DECIMAL , PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `financial` was successful!");

    console.log("Closing...");
  });

  con.end();
});


