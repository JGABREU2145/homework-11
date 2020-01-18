DROP DATABASE IF EXISTS burgers_db;
create DATABASE burgers_db;

USE burgers_db;

create table burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);