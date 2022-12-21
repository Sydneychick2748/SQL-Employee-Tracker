# SQL-Employee-Tracker


## Description

I want to view and manage my company's departments, roles, and employees to organize and plan my business.
This application is a backend solution for managing a company's employees using: "the console.table": "^0.10.0" "dotenv": "^16.0.3", "inquirer": "^8.2.4" ,   "chalk": "^4.1.2", "mysql2": "^2.3.3".The interface functions as a Content Management System for non-developers to easily view and interact with information stored in the   database from the terminal. As a business owner,


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Questions](#Questions)

## Installation

Make a new repo in the git hub and colon the repo in the terminal open vs code and create your working environment:
db folder - schema.sql and seeds.sql

server.js file 

.env file 

.gitignore file

Readme.md file

package-lock.json

package.json

To set up the environment in the terminal you will need the following:
npm init -y to create a package.son file to store your dependencies.

npm i inquirer to interact with the user via the command-line.

npm i chalk  for terminal string styling of Logo.

npm i console.table to print MySQL rows to the console.

npm i dotenv to store environmental variables.

npm i mysql2 to connect to your MySQL database and perform queries.



## Usage

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

The database schema as shown in the following image:



<img width="567" alt="image" src="https://user-images.githubusercontent.com/87034052/208741092-ffcfee70-9c69-4d91-953d-d8470375b938.png">

  
  Here is also  a video link to see how the project runs:  <iframe src="https://drive.google.com/file/d/1XM-ihh8mPoPsYHWf7ifXtE-BoZWXXZJ5/preview" width="640" height="480"></iframe>


## License

There is no license on this project  
---

## Contribute

If  you would like to contribute to this project, please go to my GitHub at : https://github.com/Sydneychick2748/SQL-Employee-Tracker

## Questions
If you have any questions about this project, please contact me at anabennett77@gmail.com 




