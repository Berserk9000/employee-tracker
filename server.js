//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const db = require(".");

//Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_info_db"
});

connection.connect((err) => {
    if (err) throw err;
  startScreen();
});


  //Selection
  function startScreen() {
    inquirer
      .prompt({
        type: "list",
        choices: [
        "View departments", 
        "View roles",
        "View employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
        "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
      })
      .then(function(result) {
        console.log("You entered: " + result.option);
  
        switch (result.option) {
          case "Add department":
            addDepartment();
            break;
          case "Add role":
            addRole();
            break;
          case "Add employee":
            addEmployee();
            break;
          case "View departments":
            viewDepartment();
            break;
          case "View roles":
            viewRoles();
            break;
          case "View employees":
            viewEmployees();
            break;
          case "Update employee role":
            updateEmployee();
            break;
          default:
            quit();
        }
      });
  }

  // Getting results from tables

  function viewDepartment() {
    // select from the db
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startScreen();
    });
    // show the result to the user (console.table)
  }
  
  function viewRoles() {
    // select from the db
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startScreen();
    });
    // show the result to the user (console.table)
  }
  
  function viewEmployees() {
    // select from the db
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startScreen();
    });
    // show the result to the user (console.table)
  }

// functions to add
  function addDepartment() {


    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startScreen()
    })
    })
}
