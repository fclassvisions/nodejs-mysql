CREATE DATABASE youtube;

USE youtube;

CREATE TABLE user (id BIGINT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255) NOT NULL UNIQUE, email VARCHAR(255));

CREATE USER 'youtubeuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT SELECT, INSERT, UPDATE, DELETE ON youtube.* TO 'youtubeuser'@'localhost';

FLUSH PRIVILEGES;