import React from 'react';
import { Earphone, Lang } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";

const Topbar = () => {
    const location = useLocation();

    return (
        <div className="w-full h-[60px] fixed z-50 bg-[#aaaaaae6] flex justify-center">
            <div className="w-full max-w-full h-full flex justify-center items-center gap-[50px]">
                <div className='flex'>
                    <Link
                        to="/"
                        className='w-10 h-[26px]'
                    >
                        <img src={LogoSvg} alt="icon" className='w-full h-full'/>
                    </Link>
                </div>

                <div className="flex justify-center gap-[30px]">
                    <Link
                        to="/Advantage"
                        className={`text-base font-medium ${
                            location.pathname === '/Advantage' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        Advantage
                    </Link>
                    <Link
                        to="/Products"
                        className={`text-base font-medium ${
                            location.pathname === '/Products' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        Products
                    </Link>
                    <Link
                        to="/Careers"
                        className={`text-base font-medium ${
                            location.pathname === '/Careers' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                        }`}
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