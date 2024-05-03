import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Earphone, Lang } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Menu_Option from "../Assets/Images/Menu.png"
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
        <div className='flex flex-col mb-[54px] md:mb-0'> 
            <div className="md:h-[60px] w-full fixed z-50 bg-[#aaaaaae6] flex justify-center">
                <div className="h-[54px] md:h-full w-[393px] md:w-full max-w-full flex justify-center items-center gap-[50px]">
                    {/* LogoSvg only shown on web version */}
                    <div className='hidden md:flex'>
                        <Link to="/" className='w-10 h-[26px]'>
                            <img src={LogoSvg} alt="icon" className='md:w-full h-full'/>
                        </Link>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden md:flex justify-center gap-[30px]">
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
                    <div className='flex flex-row justify-center gap-[130px] md:hidden space-y-1'>
                        <div className='mt-1'>
                            <Lang />
                        </div>
                        
                        <Link to="/" className='w-10 h-[26px]'>
                            <img src={LogoSvg} alt="icon" className='h-full'/>
                        </Link>
                        {/* Menu component */}
                        <Menu as="div" className="relative text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <img src={Menu_Option} alt="Menu" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-4 w-[160px] origin-top-right rounded-[15px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right">
                                    
                                        <Link
                                            to="/"
                                            className={`${
                                                location.pathname === '/' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-col w-full place-items-end rounded-md px-7 py-3`}
                                                    >
                                                        Home
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/Advantage"
                                            className={`${
                                                location.pathname === '/Advantage' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-col w-full place-items-end rounded-md px-7 py-3`}
                                                    >
                                                        Advantage
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                    
                                        <Link
                                            to="/Products"
                                            className={`${
                                                location.pathname === '/Products' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-col w-full place-items-end rounded-md px-7 py-3`}
                                                    >
                                                        Products
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/Careers"
                                            className={`${
                                                location.pathname === '/Careers' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-col w-full place-items-end rounded-md px-7 py-3`}
                                                    >
                                                        Careers
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                    
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                onClick={() => handleButtonClick('gmail')}
                                                    className={`${
                                                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex flex-col w-full place-items-end rounded-md px-7 py-3`}
                                                >
                                                    Support
                                                </button>
                                            )}
                                        </Menu.Item>
                                    
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                    {/* Earphone and Lang icons on web version*/}
                    <div className='hidden md:flex justify-center gap-[30px] cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                        <Earphone/>
                    </div>
                    <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                    <div className='hidden md:flex justify-center gap-[30px] cursor-pointer'>
                        <Lang/> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;