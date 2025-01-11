import React from "react";
import HeaderHome from "../Components/HeaderHome";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
    return (
        <>
            <HeaderHome />

            <div className="body min-h-screen">
                <Outlet />
            </div>

            <footer>Footer</footer>
        </>
    );
};

export default HomeTemplate;
