import { Cart, CartItem, Ingredient, ProductItem, Product } from '@prisma/client';
export type CartItemDTO = CartItem & {
    productItem: ProductItem & {
        product: Product;
    };
    ingredients: Ingredient[];
};

export interface CartDTO extends Cart{
    items: CartItemDTO[];
}

export interface CreateCartItemValues{
    productItemId: number;
    ingredients?: number[];
}