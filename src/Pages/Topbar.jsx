import React, { useContext, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Earphone, Lang, Menus } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state
    const { t, language, updateLanguage } = useContext(LanguageContext);
    const [isAdvantageExpanded, setIsAdvantageExpanded] = useState(false);
    const [isProductExpanded, setIsProductExpanded] = useState(false);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const handleLanguageChange = (lang) => {
        updateLanguage(lang);
        setIsMenuOpen(false); // Close the menu after language change
    };

    const toggleAdvantage = (e) => {
        e.preventDefault();  // Prevent the Advantages menu from closing
        setIsAdvantageExpanded(!isAdvantageExpanded);
      };

      const toggleProducts = (e) => {
        e.preventDefault();  // Prevent the Products menu from closing
        setIsProductExpanded(!isProductExpanded);
      };

      const resetState = () => {
        setIsAdvantageExpanded(false);  //Set Expanded status into False
        setIsProductExpanded(false);
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
                        <Link className={`text-base font-medium ${location.pathname === '/customize' || location.pathname === '/advantage'  ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''}`}>
                        <Menu as="div" className="relative text-left">
                            <Menu.Button className="text-base font-medium">
                            <div className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.advantagePage")}
                            </div>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="flex flex-row absolute mt-6 w-[260px] h-[60px] rounded-[30px] bg-[#FFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-base font-medium left-1/2 transform -translate-x-1/2 justify-center">
                                    <div className="flex flex-row gap-[9px] items-center justify-center">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/advantage"
                                                    className={`text-base font-medium ${
                                                        location.pathname === '/advantage' ? 'bg-[#CCCCCC80] rounded-[35px]' : ''
                                                    }`}
                                                >
                                                    <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${language === 'en' ? 'font-medium' : 'font-semibold'}`}>
                                                        {t("Topbar.oneStopPage")}
                                                    </div>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/customize"
                                                    className={`text-base font-medium ${
                                                        location.pathname === '/customize' ? 'bg-[#CCCCCC80] rounded-[35px]' : ''
                                                    }`}
                                                >
                                                    <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${language === 'en' ? 'font-medium' : 'font-semibold'}`}>
                                                        {t("Topbar.customizePage")}
                                                    </div>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu> 
                        </Link>
                        <Link className={`text-base font-medium ${location.pathname === '/products' || location.pathname === '/ownSite'  ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''}`}>
                            <Menu as="div" className="relative text-left">
                                <Menu.Button className="text-base font-medium">
                                <div className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                    {t("Topbar.productsPage")}
                                </div>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="flex flex-row absolute mt-6 w-[348px] h-[60px] rounded-[30px] bg-[#FFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-base font-medium left-1/2 transform -translate-x-1/2 justify-center">
                                        <div className="flex flex-row gap-[19px] items-center justify-center">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/products"
                                                        className={`text-base font-medium ${
                                                            location.pathname === '/products' ? 'bg-[#CCCCCC80] rounded-[35px]' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${language === 'en' ? 'font-medium' : 'font-semibold'}`}>
                                                            {t("Topbar.developedPage")}
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/ownSite"
                                                        className={`text-base font-medium ${
                                                            location.pathname === '/ownSite' ? 'bg-[#CCCCCC80] rounded-[35px]' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${language === 'en' ? 'font-medium' : 'font-semibold'}`}>
                                                            {t("Topbar.ownSitePage")}
                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu> 
                        </Link>
                        <Link
                            to="/careers"
                            className={`text-base font-medium ${
                                location.pathname === '/careers' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className={language === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.careerPage")}
                            </div>
                        </Link>
                    </div>

                    {/* LogoSvg between Earphone and Lang on mobile version */}
                    <div className='flex flex-row justify-center items-center gap-[130px] md:hidden'>
                        {/* Language  component */}
                        <Menu as="div" className="relative text-left">
                            <div className='flex flex-col items-center'>
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
                                <Menu.Items className="absolute left-[110px] mt-4 w-[130px] rounded-[15px] bg-[#FFFFFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right">
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
                            <div className='flex flex-col items-center'>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <Menus/>
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
                                afterLeave={resetState}
                            >
                                <Menu.Items
                                className={`absolute right-[90px] mt-4 rounded-[15px] bg-[#FFFFFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-center object-center 
                                    ${language === 'en' ? 'w-[180px]' : 
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
                                                    } group flex flex-col w-full rounded-md py-3 ${
                                                      language === 'en' ? 'px-7 place-items-center' : 
                                                      language === 'zh' ? 'place-items-center ' : 
                                                      language === 'bm' ? 'px-7 place-items-center' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.homePage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    onClick={toggleAdvantage}
                                                    className= 'flex flex-col w-full py-3 px-7 place-items-center'>
                                                    {t("mobileTopbar.advantagePage")}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                                {isAdvantageExpanded && (
                                                <>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="/advantage"
                                                        className={`w-full text-center ${
                                                            active ? 'bg-gray-100' : ''
                                                        }`}
                                                        >
                                                        <button
                                                            className={`${
                                                            location.pathname === '/onestop'
                                                            } flex flex-col w-full py-3 px-7 place-items-center text-base font-medium`}
                                                        >
                                                            {t("mobileTopbar.oneStopPage")}
                                                        </button>
                                                        </Link>
                                                    )}
                                                    </Menu.Item>
                                                    
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="/customize"
                                                        className={`w-full text-center ${
                                                            active ? 'bg-gray-100' : ''
                                                        }`}
                                                        >
                                                        <button
                                                            className={`${
                                                            location.pathname === '/customize'
                                                            } flex flex-col w-full py-3 px-7 place-items-center text-base font-medium`}
                                                        >
                                                            {t("mobileTopbar.customizePage")}
                                                        </button>
                                                        </Link>
                                                    )}
                                                    </Menu.Item>
                                                </>
                                                )}
                                        </Link>

                                        <Link>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    onClick={toggleProducts}
                                                    className= 'flex flex-col w-full py-3 px-7 place-items-center'>
                                                    {t("mobileTopbar.productsPage")}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                                {isProductExpanded && (
                                                <>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="/products"
                                                        className={`w-full text-center ${
                                                            active ? 'bg-gray-100' : ''
                                                        }`}
                                                        >
                                                        <button
                                                            className={`${
                                                            location.pathname === '/products'
                                                            } flex flex-col w-full py-3 px-7 place-items-center text-base font-medium`}
                                                        >
                                                            {t("mobileTopbar.developedPage")}
                                                        </button>
                                                        </Link>
                                                    )}
                                                    </Menu.Item>
                                                    
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="/ownSite"
                                                        className={`w-full text-center ${
                                                            active ? 'bg-gray-100' : ''
                                                        }`}
                                                        >
                                                        <button
                                                            className={`${
                                                            location.pathname === '/ownSite'
                                                            } flex flex-col w-full py-3 px-7 place-items-center text-base font-medium`}
                                                        >
                                                            {t("mobileTopbar.ownSitePage")}
                                                        </button>
                                                        </Link>
                                                    )}
                                                    </Menu.Item>
                                                </>
                                                )}
                                        </Link>
                                    
                                        {/* <Link
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
                                                    } group flex flex-col w-full rounded-md py-3 ${
                                                        language === 'en' ? 'px-7 place-items-center' : 
                                                        language === 'zh' ? 'place-items-center ' : 
                                                        language === 'bm' ? 'px-7 place-items-center' : ''
                                                    }`}
                                                  >
                                                    {t("mobileTopbar.productsPage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link> */}
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
                                                    } group flex flex-col w-full rounded-md py-3 ${
                                                        language === 'en' ? 'px-7 place-items-center' : 
                                                        language === 'zh' ? 'place-items-center ' : 
                                                        language === 'bm' ? 'px-7 place-items-center' : ''
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
                                                  language === 'en' ? 'px-7 md:px-7 place-items-center' : 
                                                  language === 'zh' ? 'px-9 md:px-9 place-items-center' : 
                                                  language === 'bm' ? 'px-7 md:px-7 place-items-center' : ''
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
                                                    } group flex flex-row w-full text-base place-items-center rounded-[30px] px-6 py-5`}
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
                                                    } group flex flex-row w-full text-base place-items-center rounded-[30px] px-6 py-5`}
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
