/*
  Warnings:

  - You are about to drop the column `documentId` on the `Categories` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Categories" DROP CONSTRAINT "Categories_documentId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "documentId";

-- CreateTable
CREATE TABLE "_DocumentCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DocumentCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DocumentCategories_B_index" ON "_DocumentCategories"("B");

-- AddForeignKey
ALTER TABLE "_DocumentCategories" ADD CONSTRAINT "_DocumentCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentCategories" ADD CONSTRAINT "_DocumentCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
