/*
  Warnings:

  - You are about to drop the `_DocumentCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_DocumentCategories" DROP CONSTRAINT "_DocumentCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_DocumentCategories" DROP CONSTRAINT "_DocumentCategories_B_fkey";

-- DropTable
DROP TABLE "public"."_DocumentCategories";

-- CreateTable
CREATE TABLE "DocumentCategories" (
    "documentId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "DocumentCategories_pkey" PRIMARY KEY ("documentId","categoryId")
);

-- AddForeignKey
ALTER TABLE "DocumentCategories" ADD CONSTRAINT "DocumentCategories_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentCategories" ADD CONSTRAINT "DocumentCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
