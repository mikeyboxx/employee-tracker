DELETE FROM employees;
DELETE FROM roles;
DELETE FROM departments;

INSERT INTO departments (name)
VALUES ('Marketing'),
       ('Human Resources'),
       ('Legal'),
       ('Bookkeeping'),
       ('Sales'),
       ('Finance'),
       ('Information Systems');

INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 150000, 5),
       ('Lead Engineer', 250000, 7),
       ('Software Engineer', 222000, 7),
       ('Account Manager', 170000, 5),
       ('Senior Recruiter', 185000, 2),
       ('Legal Team Lead', 350000, 3),
       ('Lawyer', 250000, 3),
       ('Accountant', 150000, 4),
       ('Financial Advisor', 550000, 6),
       ('Quantitative Analyst', 250000, 1)