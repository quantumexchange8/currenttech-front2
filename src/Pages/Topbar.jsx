import React, { useContext, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Earphone, Lang } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Menu_Option from "../Assets/Images/Menu.png"
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state
    const { t, language, updateLanguage } = useContext(LanguageContext);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const handleLanguageChange = (lang) => {
        updateLanguage(lang);
        setIsMenuOpen(false); // Close the menu after language change
    };

    return (
        <div className='flex flex-col'> 
            <div className="md:h-[60px] h-[60px] w-full fixed z-50 bg-[#aaaaaae6] flex justify-center backdrop-blur-sm">
                <div className="w-[393px] md:w-full max-w-full flex justify-center items-center gap-[50px]">
                    {/* LogoSvg only shown on web version */}
                    <div className='hidden md:flex'>
                        <Link to="/" className='w-10 h-[26px]'>
                            <img src={LogoSvg} alt="icon" className='md:w-full h-full'/>
                        </Link>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden md:flex justify-center gap-[30px]">
                        <Link
                            to="/advantage"
                            className={`text-base ${
                                location.pathname === '/advantage' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }
                            `}
                        >
                            <span className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.advantagePage")}
                            </span>
                            
                        </Link>
                        <Link
                            to="/products"
                            className={`text-base font-medium ${
                                location.pathname === '/products' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <span className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.productsPage")}
                            </span>
                        </Link>
                        <Link
                            to="/careers"
                            className={`text-base font-medium ${
                                location.pathname === '/careers' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <span className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.careerPage")}
                            </span>
                        </Link>
                    </div>

                    {/* LogoSvg between Earphone and Lang on mobile version */}
                    <div className='flex flex-row justify-center gap-[130px] md:hidden space-y-1'>
                        {/* Language  component */}
                        <Menu as="div" className="relative text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                <Lang />
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
                                <Menu.Items className="absolute left-0 mt-4 w-[120px] rounded-[15px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                                onClick={() => handleLanguageChange('en')}
                                            >
                                                English {language === 'en'}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                                onClick={() => handleLanguageChange('bm')}
                                            >
                                                Malay {language === 'bm'}
                                            </button>
                                        )}
                                    </Menu.Item>
                            
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                                onClick={() => handleLanguageChange('zh')}
                                            >
                                                中文 {language === 'zh'}
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        
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
                                <Menu.Items
                                className={`absolute right-0 mt-4 rounded-[15px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-center object-center 
                                    ${language === 'en' ? 'w-[160px]' : 
                                      language === 'zh' ? 'w-[112px]' : 
                                      language === 'ms' ? 'w-[160px]' : ''}`}
                                >
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
                                                    } group flex flex-col w-full place-items-end rounded-md py-3 ${
                                                      language === 'en' ? 'px-7 md:px-7' : 
                                                      language === 'zh' ? 'px-9 md:px-9' : 
                                                      language === 'bm' ? 'px-7 md:px-7' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.homePage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/advantage"
                                            className={`${
                                                location.pathname === '/advantage' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className={`${
                                                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex flex-col w-full place-items-end rounded-md py-3 ${
                                                      language === 'en' ? 'px-7 md:px-7' : 
                                                      language === 'zh' ? 'px-9 md:px-9' : 
                                                      language === 'bm' ? 'px-7 md:px-7' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.advantagePage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                    
                                        <Link
                                            to="/products"
                                            className={`${
                                                location.pathname === '/products' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className={`${
                                                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex flex-col w-full place-items-end rounded-md py-3 ${
                                                      language === 'en' ? 'px-7 md:px-7' : 
                                                      language === 'zh' ? 'px-9 md:px-9' : 
                                                      language === 'bm' ? 'px-7 md:px-7' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.productsPage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/careers"
                                            className={`${
                                                location.pathname === '/careers' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className={`${
                                                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex flex-col w-full place-items-end rounded-md py-3 ${
                                                      language === 'en' ? 'px-7 md:px-7' : 
                                                      language === 'zh' ? 'px-9 md:px-9' : 
                                                      language === 'bm' ? 'px-7 md:px-7' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.careerPage")}
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
                                                } group flex flex-col w-full place-items-end rounded-md py-3 ${
                                                  language === 'en' ? 'px-7 md:px-7' : 
                                                  language === 'zh' ? 'px-9 md:px-9' : 
                                                  language === 'bm' ? 'px-7 md:px-7' : ''
                                                }`}
                                              >
                                                {t("mobileTopbar.supportPage")}
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
                    <div className='hidden md:flex justify-center gap-[30px] cursor-pointer'>
                        <Menu as="div" className="relative text-left">
                            <div className="flex items-center">
                                <Menu.Button className="inline-flex justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                    <Lang />
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
                                <Menu.Items className="absolute mt-5 w-[300px] h-[64px] rounded-[30px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right left-1/2 transform -translate-x-1/2">
                                    <div className="flex flex-row">
                                        
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-row w-full text-base place-items-center rounded-[30px] px-7 py-5`}
                                                        onClick={() => handleLanguageChange('en')}
                                                    >
                                                        English {language === 'en'}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        
                                        
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-row w-full text-base place-items-center rounded-[30px] px-7 py-5`}
                                                        onClick={() => handleLanguageChange('bm')}
                                                    >
                                                        Malay {language === 'bm'}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        
                                        
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex flex-row w-full text-base place-items-center rounded-[30px] px-[30px] py-5`}
                                                        onClick={() => handleLanguageChange('zh')}
                                                    >
                                                        中文 {language === 'zh'}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu> 
                    </div>

                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    );
};

export default Topbar;
