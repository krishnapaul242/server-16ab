/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `veg` BOOLEAN NOT NULL,
    `price` INTEGER NOT NULL,
    `image` VARCHAR(191),
    `discountedPrice` INTEGER,
    `description` VARCHAR(191),

    UNIQUE INDEX `product.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
