
CREATE DATABASE t_bus;
USE t_bus;
CREATE TABLE t_bus
(
    b_id INT,
    b_name VARCHAR(50),
    b_busNo VARCHAR(20),
    b_reDate DATE,
    b_maxNo CHAR(20)
)
USE t_bus;
CREATE TABLE t_person
(
    p_id VARCHAR(20),
    p_name VARCHAR(50)
)
DROP DATABASE t_bus;