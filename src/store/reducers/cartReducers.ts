import { SET_CART, ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";
import { Cart, DefaultAction, CartItem } from "../../types";

export const initialState:Cart = {
    cartItems: [],
};

export const defaultAction:DefaultAction = {
    type: '',
    cartItems: [],
    newItem: null,
    deleteItemId: null,
}

const cartReducers = (state = initialState, action = defaultAction) => {
    switch(action.type){
        case SET_CART:
            return {
                ...state,
                cartItems: action.cartItems,
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems : action.newItem && addToCart([...state.cartItems], action.newItem),
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems : action.deleteItemId && deleteFromCart([...state.cartItems], action.deleteItemId),
            }
        default: return state;
    }
}


const addToCart = (existingCart: CartItem[] | [], newItem: CartItem) => {
    const newCart: CartItem[] = existingCart || [];
    if(newCart.length){
        newCart.push(newItem);
    }
    else {
        newCart.push(newItem);
    }
    return newCart;
}

const deleteFromCart = (existingCart: CartItem[] | null, deleteItemId:number) => {
    const newCart: CartItem[] = existingCart || [];
    const findIndex:number = newCart ? newCart.findIndex(item => item.id === deleteItemId) : -1;
    if(findIndex !== -1){
        newCart.splice(findIndex , 1)
    }
    return newCart;
}

export default cartReducers;