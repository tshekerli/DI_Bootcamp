--I don't have access to the previously created public database

--exercise 2:

-- select * from customer;

-- Select first_name || ' ' || last_name as full_name from customer

-- select create_date from customer

-- select distinct create_date from customer

-- select * from customer
-- order by first_name desc

-- select film_id, title, description, release_year, rental_rate from film
-- order  by rental_rate ASC

-- select address.address, address.phone
-- from address
-- inner join customer on customer.address_id = address.address_id
-- where address.district = 'Texas';

-- select * from film
-- where film_id = 15 or film_id = 150

-- select film_id, title, description, length, rental_rate from film
-- where title = 'Man from earth'

-- select film_id, title, description, length, rental_rate from film
-- where title = 'Man from earth'

-- select * 
-- from film
-- order by rental_rate asc
-- -- limit 10 
-- limit 10 offset 10;

-- select customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- from customer
-- inner join payment on customer.customer_id = payment.customer_id
-- order by customer.customer_id;

-- select title 
-- from film
-- where film_id not in (select film_id from inventory);

-- select city.city, country.country
-- from city
-- inner join country on city.country_id = country.country_id;

