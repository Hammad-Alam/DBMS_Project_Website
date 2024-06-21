create database dbms;
use dbms;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email varchar(50),
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'sub-admin'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from  dbms.user;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    picture varchar(500) not null,
    price DECIMAL(10, 2) not null,
    stock INT NOT NULL,
    category varchar(20),
    type varchar(16),
    isFeature Boolean, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
create table support ( firstName varchar(20) , lastName varchar(20),email varchar(50),message text, createdAt timestamp default current_timestamp);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	address varchar(20),
    name varchar(20),
    phoneNo varchar(30),
    city varchar(20)
);

select * from product;
SELECT * FROM product WHERE category = 'Shirts';

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    productId INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id),
    FOREIGN KEY (productId) REFERENCES product(id)
);


select count(*) from orders where status = 'pending';
select * from orders;
select * from order_items;
select * from order_items inner join product;
truncate orders;
truncate order_items;
drop table orders;
drop table order_items;
INSERT INTO user (name,password,role,email)
VALUES ("admin", "abc12345","admin","admin@gmail.com");
select * from support;
select * from user;
drop table product;
truncate support;

