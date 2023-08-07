CREATE DATABASE my_classmates;
USE my_classmates;

CREATE TABLE classmates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

INSERT INTO classmates (name, age, address)
VALUES
    ('Иван Петров', 19, 'Москва, ул. Пушкина, д. 10'),
    ('Анна Иванова', 21, 'Санкт-Петербург, пр. Невский, д. 20'),
    ('Петр Сидоров', 19, 'Казань, ул. Габдуллы Тукая, д. 15'),
    ('Мария Васильева', 22, 'Екатеринбург, ул. Ленина, д. 5');
