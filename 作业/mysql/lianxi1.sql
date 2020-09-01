CREATE DATABASE lianxi1;
USE lianxi1;
CREATE TABLE t_bus(
	b_id INT,
	b_name VARCHAR(20),
	b_busNo VARCHAR(20),
	b_reDate DATE,
	b_maxNo CHAR (17)
)
CREATE TABLE t_person(
	p_id INT,
	p_name VARCHAR(20),
	p_nationalid VARCHAR(20),
	p_sex NCHAR(2),
	p_age VARCHAR(3),
	p_birthday DATE
)
CREATE TABLE t_national(
	n_id INT,
	n_nationalName VARCHAR(20)
)