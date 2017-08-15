
drop database burgers_db;
create database  burgers_db;
use burgers_db;

create table burgers (

id int Not null auto_increment,
burger_name varchar(255) not null,
devoured boolean not null,
date TIMESTAMP,
primary key(id)
);