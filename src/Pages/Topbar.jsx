import React from 'react';
import { Earphone, Lang } from '../Components/Outline';
import Logo from '../Assets/Images/Logo.png';
import { Link } from "react-router-dom";

const Topbar = () => {

    return (
        <div className="w-full h-[60px] fixed z-50 bg-[#aaaaaae6] flex justify-center">
            <div className="w-full max-w-[480px] h-full flex justify-center items-center gap-[50px]">
                <div>
                <Link
                    to="/"
                >
                    <img src={Logo} alt="icon"/>
                </Link>

                {/* <NavLink
                        to="/Products"
                        className={`${
                            location.pathname === "/Products" ? `${linkStyles.base} ${linkStyles.active}` : ""
                        }`}
                    >
                        Products
                    </NavLink> */}
                </div>

                <div className="flex justify-center gap-[30px]">
                    <Link
                        to="/Advantage"
                        className="text-base font-medium"
                    >
                        Advantage
                    </Link>
                    <Link
                        to="/Products"
                        className="text-base font-medium"
                    >
                        Products
                    </Link>
                    <Link
                        to="/Careers"
                        className="text-base font-medium"
                    >
                        Career
                    </Link>
                </div>

                <div className='flex justify-center gap-[30px]'>
                    <Earphone/>
                    <Lang/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;