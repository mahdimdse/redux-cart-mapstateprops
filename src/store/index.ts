import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export const store:any = configureStore({
    reducer
});

store.subscribe(() => {
    if(store.getState().cartReducers.cartItems) {
        localStorage.setItem("cartItems", JSON.stringify(store.getState().cartReducers.cartItems));
    }
});