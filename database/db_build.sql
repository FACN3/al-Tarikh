BEGIN;

DROP TABLE IF EXISTS users, events cascade;




CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL

);

CREATE TABLE events(
id SERIAL PRIMARY KEY NOT NULL,
title VARCHAR(100),
dt DATE,
description VARCHAR(300),
user_id INTEGER REFERENCES users(id)

);

INSERT INTO users(name) VALUES('Sophia');
INSERT INTO users(name) VALUES('Mynah');
INSERT INTO users(name) VALUES('Hasan');
INSERT INTO users(name) VALUES('Idan');
INSERT INTO users(name) VALUES('Neil');
INSERT INTO users(name) VALUES('Sami');
INSERT INTO users(name) VALUES('Amir');
INSERT INTO users(name) VALUES('Marlen');
INSERT INTO users(name) VALUES('Hoslack');
INSERT INTO users(name) VALUES('Haitham');
INSERT INTO users(name) VALUES('Pavel');
INSERT INTO users(name) VALUES('Ghasan');
INSERT INTO users(name) VALUES('Nick');

INSERT INTO events(title,dt,description) VALUES('Dinner','2017-12-5','helo world');






COMMIT;
