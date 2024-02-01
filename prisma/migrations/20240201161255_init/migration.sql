-- CreateTable
CREATE TABLE "Hamburguesas" (
    "id" SERIAL NOT NULL,
    "pan" INTEGER NOT NULL,
    "hamburgusas" INTEGER NOT NULL,
    "mostaza" INTEGER NOT NULL,
    "tomate" INTEGER NOT NULL,
    "lechuga" INTEGER NOT NULL,
    "cheddar" INTEGER NOT NULL,
    "bacon" INTEGER NOT NULL,
    "cebolla" INTEGER NOT NULL,
    "mayoneza" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Hamburguesas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Hamburguesas" ADD CONSTRAINT "Hamburguesas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
