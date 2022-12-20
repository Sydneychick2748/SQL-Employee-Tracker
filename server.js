const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require("dotenv").config();
//  const { prompt } = require('inquirer');
// this connects mysql to the data base
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("We have connected to the database")
);

//connection to the database
console.log(
  chalk.yellow.bold(
    "======================================================================================================="
  )
);
console.log(``);
console.log(chalk.red.bold(figlet.textSync("EMPLOYEE TRACKER")));
console.log(``);
console.log(
  chalk.green.bold(
    `======================================================================================================`
  )
);

// console.log(chalk.yellow.bold("Welcome to the employee management program!"));
// menuPrompts();

//this starts the program
const menuPrompts = () => {
  inquirer
    .prompt([
      {
        name: "choiceList",
        type: "list",
        message:
          "Welcome to the employee management program  please select a menu option...",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          chalk.red(),
          chalk.red(),
          chalk.red(),
          chalk.red(),
          "exit menu",
        ],
      },
      //this is the switch statement that will take the user to the correct function
    ])
    .then((res) => {
      switch (res.choiceList) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;

        case "Add a department":
          addADepartment();
          break;
        case "Add a role":
          addARole();
          break;
        case "Add an employee":
          addAnEmployee();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        case "Exit program":
          exitProgram();
          break;
      }
    });
};

//this is the function that will start the program
const viewAllDepartments = () => {
  connection.query(
    `SELECT department.name AS department, employees.first_name, employees.last_name FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY department.id`,
    (err, res) => {
      if (err) throw err;
      cTable(res);
      menuPrompts();
    }
  );
};

//  this is the function that will view all roles
const viewAllRoles = () => {
  connection.query(
    `SELECT role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id`,
    (err, res) => {
      if (err) throw err;
      cTable(res);
      menuPrompts();
    }
  );
};

//  this is the function that will view all employees
const viewAllEmployees = () => {
  connection.query(
    `SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employees manager ON manager.id = employees.manager_id`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      menuPrompts();
    }
  );
};

//
const addADepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((res) => {
      connection.query(
        `INSERT INTO department SET ?`,
        {
          name: res.department,
        },
        (err) => {
          if (err) throw err;
          console.log("The department was added successfully!");
          menuPrompts();
        }
      );
    });
};

//  this is the function that will add a role to the database
const addARole = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the role you would like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role you would like to add?",
      },
      {
        name: "department",
        type: "input",
        message: "What is the department id of the role you would like to add?",
      },
    ])
    .then((res) => {
      connection.query(
        `INSERT INTO role SET ?`,
        {
          title: res.title,
          salary: res.salary,
          department_id: res.department,
        },
        (err) => {
          if (err) throw err;
          console.log("The role was added successfully!");
          menuPrompts();
        }
      );
    });
};

//  this is the function that will add an employee to the database
const addAnEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message:
          "What is the first name of the employee you would like to add?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the last name of the employee you would like to add?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the role id of the employee you would like to add?",
      },
      {
        name: "manager",
        type: "input",
        message:
          "What is the manager id of the employee you would like to add?",
      },
    ])
    .then((res) => {
      connection.query(
        `INSERT INTO employees SET ?`,
        {
          first_name: res.firstName,
          last_name: res.lastName,
          role_id: res.role,
          manager_id: res.manager,
        },
        (err) => {
          if (err) throw err;
          console.log("The employee was added successfully!");
          menuPrompts();
        }
      );
    });
};

//  this is the function that will update an employee's role
const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        name: "employee",
        type: "input",
        message: "What is the id of the employee you would like to update?",
      },
      {
        name: "role",
        type: "input",
        message:
          "What is the role id of the employee you would like to update?",
      },
    ])
    .then((res) => {
      connection.query(
        `UPDATE employees SET role_id = ? WHERE id = ?`,
        [res.role, res.employee],
        (err) => {
          if (err) throw err;
          console.log("The employee was updated successfully!");
          menuPrompts();
        }
      );
    });
};

//  this is the function that will exit the program
const exitProgram = () => {
  connection.end();
  console.log("You have exited the employee management program!");
  return;
};

//this is the function that will start the program
menuPrompts();
