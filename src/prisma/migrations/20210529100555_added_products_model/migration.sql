-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `veg` BOOLEAN NOT NULL,
    `price` INTEGER NOT NULL,
    `image` VARCHAR(191),
    `discountedPrice` INTEGER,
    `description` VARCHAR(191),

    UNIQUE INDEX `Products.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
