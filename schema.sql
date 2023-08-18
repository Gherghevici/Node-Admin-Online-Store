CREATE DATABASE product_app;
USE product_app;

CREATE TABLE products(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    price integer NOT NULL,
    quantity integer NOT NULL,
    isActive boolean DEFAULT true
);

INSERT INTO products(title,content,price,quantity)
VALUES
('test','test descriere',300,10),
('test 2','test descriere 2',100,15);