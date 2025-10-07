-- CreateTable
CREATE TABLE "table_secondary" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "del" BOOLEAN NOT NULL DEFAULT false,
    "field_3" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "table_secondary_pkey" PRIMARY KEY ("id")
);
