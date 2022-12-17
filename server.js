const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// this connects mysql to the data base 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'rootroot',
    database: 'employeeTracker_db',
});


const menuPrompts = () => {
    inquirer
        .prompt([
            {
            name: 'choiceList',
            type: 'list',
            message: 'Welcome to the employee management program  please select a menu option...',
            choices: [
                'view all departments',
                 'view all roles', 
                 'view all employees', 
                 'add a department', 
                 'add a role', 
                 'add an employee',
                 'update an employee role',
                  'exit menu'
            ],
        }
    ]).then((res)=>{
        switch (res.choiceList) {
            case 'View all departments':
                viewAllDepartments();    
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
           
            case 'Add a department':
                addADepartment();
            break;
            case 'Add a role':
                addARole();
            break;
            case 'Add an employee':
                addAnEmployee();
            break;
            case 'Update employee role':
                updateEmployeeRole();
            break;
            case 'Exit program':
                connection.end();
                console.log('You have exited the employee management program!');
                return;
            default:
                break;
        }
    })
}

const viewAllEmployees = () => {
   
    connection.query(
        'SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    menuPrompts();
}



// connection.connect((err) => {
//     if (err) throw err;


    

// });
      




    