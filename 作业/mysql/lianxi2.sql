CREATE DATABASE lianxi2;
USE lianxi2;
CREATE TABLE student(
	xuehao INT,
	xs_name VARCHAR(20),
	age INT,
	sex CHAR(4),
	csday DATE,
	rxday DATETIME,
	bianhao VARCHAR(20)
)
CREATE TABLE class(
	class_bianhao VARCHAR (20),
	class_name VARCHAR (50),
	class_bzr VARCHAR (20),
	class_day DATE
)
CREATE TABLE sorce(
	sorce_id INT,
	sorce_studentid INT,
	sorce_bianhao VARCHAR (40),
	sorce_cj INT,
	sorce_day DATE
)
CREATE TABLE course(
	course_bianhao VARCHAR (40),
	course_name VARCHAR (40)
)