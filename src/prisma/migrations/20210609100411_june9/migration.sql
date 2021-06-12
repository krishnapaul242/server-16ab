/*
  Warnings:

  - Made the column `image` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discountedPrice` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `discountedPrice` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;
