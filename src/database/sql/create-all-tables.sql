-- Description: SQL script to create all tables
-- Author: Blaise Niyonkuru

-- Create Books table
CREATE TABLE IF NOT EXISTS books.Books (
  `ISBN` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `Author` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `quantity` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Customers table
CREATE TABLE IF NOT EXISTS books.Customers (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `address2` VARCHAR(255) NULL,
  `city` VARCHAR(255) NOT NULL,
  `state` VARCHAR(2) NOT NULL,
  `zipcode` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_unique` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
