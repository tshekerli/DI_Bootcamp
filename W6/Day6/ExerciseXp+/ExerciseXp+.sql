-- Create TABLE students(
-- 	id serial,
-- 	first_name varchar(50),
-- 	last_name varchar(50),
-- 	birth_date varchar(20)
-- )

-- Insert into students(first_name, last_name, birth_date)
-- Values
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980')

-- ALTER TABLE students
-- ALTER COLUMN birth_date TYPE DATE USING TO_DATE(birth_date, 'DD/MM/YYYY');

select * from students

-- select first_name, last_name from students
-- select first_name, last_name from students
-- where id = 2
-- where last_name = 'Benichou' and first_name = 'Marc'
-- where last_name = 'Benichou' or first_name = 'Marc'
-- where first_name Like '%a%'
-- where first_name ILIKE 'a%'
-- where first_name LIKE '%a'

-- WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a';
-- where id = 1 or id = 3 

-- WHERE birth_date >= TO_DATE('1/01/2000', 'DD/MM/YYYY');
