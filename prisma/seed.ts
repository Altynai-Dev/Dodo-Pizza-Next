import { Prisma } from "@prisma/client";
import { categories, _ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import {hashSync} from "bcrypt"

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max-min) * 10 + min *10) / 10
};

const generateProductItem = ({productId, pizzaType, size} : {productId: number; pizzaType?: 1 | 2; size?: 20 | 30 | 40}) => {
    return {
      productId,
      price: randomNumber(198, 600),
      pizzaType,
      size,
    } as Prisma.ProductItemUncheckedCreateInput
  };

async function up(){
    await prisma.user.createMany({
        data: [
            {
                fullName: "User Test",
                email: "user@test.ru",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "USER"
            },
            {
                fullName: "Admin Admin",
                email: "admin@test.ru",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "ADMIN"
            }
        ]
    });
    await prisma.category.createMany({
        data: categories
    })
    await prisma.ingredient.createMany({
        data: _ingredients
    })
    await prisma.product.createMany({
        data: products
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: "Пепперони фреш",
            imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D5FFC0EE4D5A53D2067EF1E84FA.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(0, 5)
            }
        }
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: "Сырная",
            imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D600BC7B9F1B6888AF021E5C198.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(5, 10)
            }
        }
    })

    const pizza3 = await prisma.product.create({
        data: {
            name: "Чоризо фреш",
            imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF02C883A425BD913D8AE9E223A518.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(10, 15)
            }
        }
    });

    await prisma.productItem.createMany({
        data: [
            generateProductItem({productId: pizza1.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza1.id, pizzaType: 1, size: 30}),
            generateProductItem({productId: pizza1.id, pizzaType: 2, size: 40}),

            generateProductItem({productId: pizza2.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza2.id, pizzaType: 1, size: 30}),
            generateProductItem({productId: pizza2.id, pizzaType: 1, size: 40}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 20}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza2.id, pizzaType: 2, size: 40}),

            generateProductItem({productId: pizza3.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza3.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza3.id, pizzaType: 2, size: 40}),

        ]
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22333'
            }
        ]
    });

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{id: 1}, {id: 2}, {id: 3}]
            }
        }
    })
}

async function down(){
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`,
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
}
async function main(){
    try{
        await down()
        await up()
    }catch(e){
        console.error(e);
    }
}


main().then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})