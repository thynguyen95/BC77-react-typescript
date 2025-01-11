import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const HeaderHome = (props: Props) => {
    return (
        <div>
            <ul className="flex justify-center bg-blue-300 p-4 gap-5">
                <li>
                    <NavLink
                        to={"/home"}
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                        style={({ isActive }) =>
                            // const {isActive} = props;
                            isActive ? { color: "red" } : { color: "yellow" }
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/login"}
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                        style={({ isActive }) =>
                            // const {isActive} = props;
                            isActive ? { color: "red" } : { color: "yellow" }
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderHome;
