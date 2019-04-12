DROP DATABASE IF EXISTS potions_db;
CREATE DATABASE potions_db;
USE potions_db;

CREATE TABLE potions
(
	id INT NOT NULL AUTO_INCREMENT,
	potion_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);