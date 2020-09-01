CREATE DATABASE lianxi3;
USE lianxi3;
CREATE TABLE post(
	post_id INT AUTO_INCREMENT PRIMARY KEY,
	post_name VARCHAR(50) NOT NULL
)
CREATE TABLE class(
	class_id INT AUTO_INCREMENT PRIMARY KEY,
	class_name VARCHAR(50) NOT NULL,
	class_time DATE NOT NULL
)
CREATE TABLE staff(
	staff_id INT AUTO_INCREMENT PRIMARY KEY,
	staff_name VARCHAR(50) NOT NULL,
	staff_sex NCHAR(2) DEFAULT '男',
	staff_city VARCHAR(255),
	staff_phone CHAR(11) NOT NULL UNIQUE,
	staff_time DATE,
	staff_classid INT REFERENCES class(class_id),
	CONSTRAINT FOREIGN KEY (staff_classid) REFERENCES class(class_id),
	staff_postid INT REFERENCES post(post_id),
	CONSTRAINT FOREIGN KEY (staff_postid) REFERENCES post(post_id)
)