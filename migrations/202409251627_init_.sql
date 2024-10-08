-- migrate:up

create extension if not exists "uuid-ossp";

create table classmate
(
	id uuid primary key default uuid_generate_v4(),
	name varchar(100),
    money int
);

create table cafeteria
(
	id uuid primary key default uuid_generate_v4(),
	name varchar(30),
    opening_time varchar(10),
    closing_time varchar(10)
);

create table product
(
	id uuid primary key default uuid_generate_v4(),
	name varchar(30),
	price int
);

create table cafeteria_product
(
	cafeteria_id uuid references cafeteria,
	product_id uuid references product,
	primary key(cafeteria_id, product_id)
);

create table classmate_product
(
	classmate_id uuid references classmate,
	product_id uuid references product,
	primary key(classmate_id, product_id)
);

-- migrate:down