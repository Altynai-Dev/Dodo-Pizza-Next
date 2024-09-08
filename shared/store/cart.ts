import { updateItemQuantity } from './../services/cart';
import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";


export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    
    fetchCartItems: () => Promise<void>;
    updateCartItem: (id: number, amount: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,
    fetchCartItems: async () => {
        try{
            set({loading: true, error: false});
            const data = await Api.cart.getCart();
            set(getCartDetails(data));
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false})
        }
    },

    updateItemQuantity: async (id: number, quantity: number) => {
        try{
            set({loading: true, error: false});
            const data = await Api.cart.updateItemQuantity(id, quantity);
            set(getCartDetails(data));
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false})
        }
    },

    removeCartItem: async (id: number) => {
        try{
            set({loading: true, error: false});
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        }catch(error){
            console.error(error);
            set({error: true});
        }finally{
            set({loading: false})
        }
    },
    updateCartItem: async(id: number, quantity: number) => {},
    addCartItem: async(values: []) => {}

}));
