USE employee_info_db;

INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("Engineering");
INSERT into department (name)VALUES ("Finance");
INSERT into department (name) VALUES ("Legal");


INSERT into role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Software Engineer", 60000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Lawyer", 99999999999, 4);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Planter", "Nuts", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Nature", "Valley", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Glenda", "Gomero", 2, 2);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Ken", "Cruz", 3, 1);