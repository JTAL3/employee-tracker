INSERT INTO departments
  (name)
VALUES
  ('Administration'),
  ('Research and Develpment'),
  ('Marketing and Sales'),
  ('Human Resources'),
  ('Customer Service'),



INSERT INTO roles
  (title, salary, department_id)
VALUES
    ('CEO', 500000, 1),
  ('Store Manager', 80000, 1),
  ('Clerk', 45000, 2),
  ('Bagger', 40000, 2),
  ('Assistant Manager', 60000, 1),
  ('Designer', 60000, 3),
  ('HR Rep', 53000, 3),


INSERT INTO employee
  (first_name, last_name, role_id)
VALUES
  ('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 1),
  ('Piers', 'Gaveston', 2),
  ('Charles', 'LeRoi', 2),
  ('Katherine', 'Mansfield', 2),
  ('Dora', 'Carrington', 3),
  ('Edward', 'Bellamy', 3),
  ('Montague', 'Summers', 3),
  ('Octavia', 'Butler', 3),
  ('Unica', 'Zurn', 1);