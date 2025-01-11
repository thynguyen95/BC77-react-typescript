import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../Redux/store";
import { getDetailProductAction } from "../../Redux/reducers/productReducer";

type Props = {};

const Detail = (props: Props) => {
    const params = useParams();
    const { id } = params;

    const { detailProduct } = useSelector(
        (state: RootState) => state.productReducer
    );

    const dispatch: DispatchType = useDispatch();

    const getDetailProduct = async () => {
        const actionAsync = getDetailProductAction(id as string);
        dispatch(actionAsync);
    };

    useEffect(() => {
        getDetailProduct();
    }, [id]);

    return (
        <div>
            <h1 className="text-center text-red-500 text-4xl">Detail - {id}</h1>

            <div className="flex justify-between gap-3">
                <div className="image w-1/4">
                    <img src={detailProduct?.image} alt="" />
                </div>
                <div className="w-2/4">
                    <h2>{detailProduct?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Detail;
