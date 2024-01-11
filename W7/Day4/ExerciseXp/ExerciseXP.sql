-- select name from language

-- select film.title, film.description, language.name
-- from film
-- inner join language on film.language_id = language.language_id;

-- select film.title, film.description, language.name
-- from language
-- left join film on film.language_id = language.language_id;

-- create table new_film (
--   id serial primary key,
--   name varchar(255) not null
-- );

-- insert into new_film(name)
-- Values
-- ('The man from earth'),
-- ('Home alone')


-- create table customer_review (
--   review_id serial primary key,
--   film_id int not null,
--   language_id int not null,
--   title varchar(255) not null,
--   score int check(score between 1 and 10),
--   review_text text,
--   last_update timestamp default current_timestamp,
--   foreign key (film_id) references new_film(id) on delete cascade,
--   foreign key (language_id) references language(language_id)
-- );

-- insert into customer_review (film_id, language_id, title, score, review_text)
-- values (1, 1, 'Great Film', 8, 'I really enjoyed this film.'), 
--        (2, 1, 'Not Bad', 6, 'The film was okay, not great.');


-- delete from new_film where id = 1;

-- select * from customer_review

-- Exercise 2

-- with cte as (
--   select film_id
--   from film
--   order by film_id
--   limit 50
-- )
-- update film
-- set language_id = floor(random() * 6 + 1)::int
-- from cte
-- where film.film_id = cte.film_id;


-- select * from film
-- order by language_id Desc

-- select 
--     conname as constraint_name, 
--     confrelid::regclass as referenced_table, 
--     a.attname as foreign_column, 
--     af.attname as referenced_column
-- from 
--     pg_constraint as c 
-- join 
--     pg_attribute as a on a.attnum = any(c.conkey)
-- join 
--     pg_attribute as af on af.attnum = any(c.confkey)
-- where 
--     conrelid = 'customer'::regclass;


-- drop table customer_review;

-- select count(*) 
-- from rental 
-- where return_date is null;

-- select count(*) 
-- from rental 
-- where return_date is null;

-- select movie 
-- from rental 
-- where return_date is null;

-- select film.title, film.rental_rate
-- from rental
-- join inventory on rental.inventory_id = inventory.inventory_id
-- join film on inventory.film_id = film.film_id
-- where rental.return_date is null
-- order by film.rental_rate desc
-- limit 30;


-- select film.title, film.description, actor.first_name, actor.last_name
-- from film
-- join film_actor on film.film_id = film_actor.film_id
-- join actor on film_actor.actor_id = actor.actor_id
-- where film.description like '%Sumo%'
-- and actor.first_name = 'Penelope' and actor.last_name = 'Monroe';
