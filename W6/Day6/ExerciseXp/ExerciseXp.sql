-- CREATE TABLE items (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     price INTEGER
-- );
-- INSERT INTO items(name, price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);




-- Create table customers(
-- 	id SERIAL PRIMARY KEY,
-- 	name varchar(25),
-- 	lastname varchar(25)
-- );

-- Insert into customers(name, lastname)
-- Values
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott','Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- select * from customers
-- Select * from items

-- SELECT * FROM items
-- WHERE price > 80;

-- SELECT * FROM items
-- WHERE price <= 300;

-- SELECT * FROM customers
-- -- WHERE lastname = 'Smith'


-- SELECT * FROM customers
-- WHERE lastname = 'Jones';


SELECT * FROM customers
WHERE lastname != 'Scott';