-- migrate:up

create extension if not exists "uuid-ossp";

create table users
(
	id uuid primary key default uuid_generate_v4(),
	username varchar(100),
    email varchar(100),
    password varchar(100)
);

-- migrate:down