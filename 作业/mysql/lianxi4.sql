CREATE DATABASE lianxi4;
USE lianxi4;
CREATE TABLE shop_jb(
	jb_id INT AUTO_INCREMENT PRIMARY KEY,
	jb_name VARCHAR(50) NOT NULL UNIQUE,
	jb_spec VARCHAR(50)NOT NULL,
	jb_stock INT NOT NULL DEFAULT'0',
	jb_price DECIMAL NOT NULL,
	jb_date DATE
)
CREATE TABLE shop_yw(
	yw_id INT AUTO_INCREMENT PRIMARY KEY,
	yw_name VARCHAR(20),
	yw_sex NCHAR(2) DEFAULT'男',
	yw_age NCHAR(3) DEFAULT'0',
	yw_tel NCHAR(11) NOT NULL,
	yw_address VARCHAR(255) NOT NULL,
	yw_salary DECIMAL(10,4) NOT NULL
)
CREATE TABLE shop_xs(
	xs_id INT AUTO_INCREMENT PRIMARY KEY,
	xs_jb_id INT REFERENCES shop_jb(jb_id),
	CONSTRAINT FOREIGN KEY (xs_jb_id) REFERENCES shop_jb(jb_id),
	xs_sale DECIMAL(10,4) NOT NULL DEFAULT'0',
	xs_quantity VARCHAR(20) NOT NULL DEFAULT'0',
	xs_date DATE,
	xs_yw_id INT REFERENCES shop_yw(yw_id),
	CONSTRAINT FOREIGN KEY (xs_yw_id) REFERENCES shop_yw(yw_id)
)
