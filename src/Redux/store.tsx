import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
    reducer: {
        number: (state: number = 1) => state,
        productReducer,
        //....
    },
});

/*
    getState()
    + là phương thức của store do configureStore cung cấp 
    + trả về toàn bộ trạng thái hiện tại của Redux store(kiểu của object reducer)
*/

// store.getState(); // lấy state hiện tại của redux
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export type GetStateMethodType = typeof store.getState;
