import { CartItem } from "../../types";
import { SET_CART, ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const setCart = (cartItems: CartItem[] | null) => {
    return {
        type: SET_CART,
        cartItems
    };
}

export const addItem = (newItem: CartItem) => {
    return {
        type: ADD_ITEM,
        newItem
    };
}

export const removeItem = (deleteItemId: number) => {
    return {
        type: REMOVE_ITEM,
        deleteItemId
    };
}