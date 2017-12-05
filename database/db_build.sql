BEGIN; 

DROP TABLE IF EXISTS users, events cascade;

  


CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL

);

CREATE TABLE events(
id SERIAL PRIMARY KEY NOT NULL,
title VARCHAR(100) NOT NULL,
dt DATE NOT NULL,
description VARCHAR(300) NOT NULL,
user_id INTEGER REFERENCES users(id)

);

INSERT INTO users(name) VALUES('captain');

INSERT INTO events(title,dt,description) VALUES('Dinner','2017-12-5','helo world');






COMMIT;