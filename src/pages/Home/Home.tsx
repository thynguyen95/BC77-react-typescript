// tsrafce: cú pháp tạo nhanh component ts
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/store";
import { getAllProductApi } from "../../Redux/reducers/productReducer";
import { Button, Card } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Home = () => {
    // state được redux định nghĩa là unknow

    const number = useSelector((state: RootState) => state.number);

    const { arrProduct } = useSelector(
        (state: RootState) => state.productReducer
    );

    const dispatch: DispatchType = useDispatch();

    const getAllProduct = async () => {
        // dispatch action thunk
        const action = getAllProductApi();
        dispatch(action);
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div className="container mx-auto">
            <p>{number}</p>

            <h3 className="text-center text-red-500 text-4xl">
                Danh sách sản phẩm
            </h3>
            <div className="grid grid-cols-3 gap-5">
                {arrProduct.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={item.image}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.price}
                            </p>

                            <Button>
                                <NavLink to={`/detail/${item.id}`}>
                                    View detail
                                </NavLink>
                            </Button>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
