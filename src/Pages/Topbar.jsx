import React from 'react';
import {useState } from 'react'
import { Earphone, Lang } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Menu from "../Assets/Images/Menu.png"
import ButtonComponent from '../Components/ButtonComponent.jsx';

const Topbar = () => {
    const location = useLocation();

    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div className='flex flex-col mb-[54px] sm:mb-0'>
        <div className="sm:h-[60px] w-[390px] sm:w-full fixed z-50 bg-[#aaaaaae6] flex justify-center">
            <div className="h-[54px] sm:h-full w-[393px] sm:w-full max-w-full flex justify-center items-center gap-[50px]">
                {/* LogoSvg only shown on web version */}
                <div className='hidden sm:flex'>
                    <Link to="/" className='w-10 h-[26px]'>
                        <img src={LogoSvg} alt="icon" className='sm:w-full h-full'/>
                    </Link>
                </div>

                {/* Navigation links */}
                <div className="hidden sm:flex justify-center gap-[30px]">
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

                {/* LogoSvg between Earphone and Lang on mobile version */}
                <div className='flex justify-center gap-[130px] sm:hidden'>
                    <Lang />
                    <Link to="/" className='w-10 h-[26px]'>
                        <img src={LogoSvg} alt="icon" className='h-full'/>
                    </Link>
                    <img src={Menu} alt="Smart Dash" />
                </div>

                {/* Earphone and Lang icons on web version*/}
                <div className='hidden sm:flex justify-center gap-[30px] cursor-pointer'onClick={() => handleButtonClick('gmail')}>
                    <Earphone/>
                </div>
                <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                <div className='hidden sm:flex justify-center gap-[30px] cursor-pointer'>
                    <Lang/> 
                </div>
            </div>
        </div>
        {/* <div className="mb-[30px] sm:mb-0">
           
        </div> */}
    </div>
    )
}

export default Topbar;