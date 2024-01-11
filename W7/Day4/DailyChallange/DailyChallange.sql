-- -- Part I
-- create table customer (
--     id serial primary key,
--     first_name varchar(255) not null,
--     last_name varchar(255) not null
-- );

-- create table customer_profile (
--     id serial primary key,
--     isloggedin boolean default false,
--     customer_id int references customer(id)
-- );

-- insert into customer (first_name, last_name) values
--     ('john', 'doe'),
--     ('jerome', 'lalu'),
--     ('lea', 'rive');

-- insert into customer_profile (isloggedin, customer_id) values
--     (true, (select id from customer where first_name = 'john' and last_name = 'doe')),
--     (false, (select id from customer where first_name = 'jerome' and last_name = 'lalu'));

-- select c.first_name
-- from customer c
-- join customer_profile cp on c.id = cp.customer_id
-- where cp.isloggedin = true;

-- select c.first_name, coalesce(cp.isloggedin, false) as isloggedin
-- from customer c
-- left join customer_profile cp on c.id = cp.customer_id;

-- select count(*)
-- from customer c
-- left join customer_profile cp on c.id = cp.customer_id
-- where cp.isloggedin = false or cp.isloggedin is null;

-- -- Part II
-- create table book (
--     book_id serial primary key,
--     title varchar(255) not null,
--     author varchar(255) not null
-- );

insert into book (title, author) values
    ('alice in wonderland', 'lewis carroll'),
    ('harry potter', 'j.k rowling'),
    ('to kill a mockingbird', 'harper lee');

-- create table student (
--     student_id serial primary key,
--     name varchar(255) not null unique,
--     age int check (age <= 15)
-- );

-- insert into student (name, age) values
--     ('john', 12),
--     ('lera', 11),
--     ('patrick', 10),
--     ('bob', 14);

-- create table library (
--     book_fk_id int references book(book_id) on delete cascade on update cascade,
--     student_fk_id int references student(student_id) on delete cascade on update cascade,
--     borrowed_date date,
--     primary key (book_fk_id, student_fk_id)
-- );

-- insert into library (book_fk_id, student_fk_id, borrowed_date) values
--     ((select book_id from book where title = 'alice in wonderland'), (select student_id from student where name = 'john'), '2022-02-15'),
--     ((select book_id from book where title = 'to kill a mockingbird'), (select student_id from student where name = 'bob'), '2021-03-03'),
--     ((select book_id from book where title = 'alice in wonderland'), (select student_id from student where name = 'lera'), '2021-05-23'),
--     ((select book_id from book where title = 'harry potter'), (select student_id from student where name = 'bob'), '2021-08-12');

-- select *
-- from library;

-- select s.name, b.title
-- from library l
-- join student s on l.student_fk_id = s.student_id
-- join book b on l.book_fk_id = b.book_id;

-- select avg(s.age)
-- from library l
-- join student s on l.student_fk_id = s.student_id
-- join book b on l.book_fk_id = b.book_id
-- where b.title = 'alice in wonderland';

delete from student where name = 'john';
select *
from library;