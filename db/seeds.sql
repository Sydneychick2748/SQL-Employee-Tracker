USE employeeTracker_db;


INSERT INTO department
(name)

VALUES
('Sales'),
('IT'),
('Marketing'),
('Development'),
('Programming'),
('HR');

INSERT INTO role 
(title, salary, department_id)

VALUES
('Sales Director', 100000, 1),
('HR Director', 100000, 2),
('Marketing Manager', 70000, 3),
('Jr. Developer', 75000, 3),
('Sr. Developer', 13000, 3),
('Development Manager', 100000, 4),
('IT Project Manager', 850000, 4),
('IT Project Director', 100000, 4);




INSERT INTO employees
(first_name, last_name, role_id, manager_id)

VALUES
('Conrad', 'Keynes', 1, null),
('Nikita', 'Lee', 2, 1),
('Gia', 'Venter', 3, 1),
('Marcelo', 'Barca', 4, 3),
('Ben', 'Bingham', 5, 3),
('Shari', 'Espinoza', 6, 5),
('Wayland', 'Charles', 7, 5),
('Rose', 'Calcar', 7, 7);