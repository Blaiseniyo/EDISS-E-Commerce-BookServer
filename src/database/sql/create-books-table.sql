-- Description: SQL script to create Books table
-- Author: Blaise Niyonkuru

CREATE TABLE IF NOT EXISTS `Books` (
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
