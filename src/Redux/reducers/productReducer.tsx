import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DispatchType, GetStateMethodType } from "../store";
import { ProductDetailModelType } from "../../Model/ProductDetailModelType";

export interface ProductModelType {
    sizes: number[];
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
    imgLink: string;
}

export interface ProductStateType {
    arrProduct: ProductModelType[];
    detailProduct: ProductDetailModelType | null;
}

const initialState: ProductStateType = {
    arrProduct: [],
    detailProduct: null,
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setArrProductAction: (
            state: ProductStateType,
            action: PayloadAction<ProductModelType[]>
        ) => {
            state.arrProduct = action.payload;
        },
        setProductDetailAction: (
            state: ProductStateType,
            action: PayloadAction<ProductDetailModelType>
        ) => {
            state.detailProduct = action.payload;
        },
    },
});

export const { setArrProductAction, setProductDetailAction } =
    productReducer.actions;

export default productReducer.reducer;

// ------------------------------
// action async để call api get all product
export const getAllProductApi = () => {
    return async (dispatch: DispatchType, getState: GetStateMethodType) => {
        // call api
        const res = await axios({
            url: "https://apistore.cybersoft.edu.vn/api/Product",
            method: "GET",
        });

        // sau khi có data thì tạo action payload để đẩy lên store
        const action: PayloadAction<ProductModelType[]> = setArrProductAction(
            res.data.content
        );
        dispatch(action);
    };
};

/*
    1. tạo giao diện trang detail 
    2. tạo state của productDetail 
    3. tạo actionPayload 
    4. tạo actionAsync 
    5. bindingState 
    6. dispatch Action async tại detail page
*/
export const getDetailProductAction = (id: string) => {
    return async (dispatch: DispatchType) => {
        const res = await axios({
            url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
            method: "GET",
        });

        const action: PayloadAction<ProductDetailModelType> =
            setProductDetailAction(res.data.content);
        dispatch(action);
    };
};
