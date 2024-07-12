import React, { useContext, useState, Fragment } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react'
import { Earphone, Lang, Menus } from '../Components/Outline';
import LogoSvg from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    // const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state
    // const { t, language, updateLanguage } = useContext(LanguageContext);
    const { t, i18n } = useTranslation();
    const [isAdvantageExpanded, setIsAdvantageExpanded] = useState(false);
    const [isProductExpanded, setIsProductExpanded] = useState(false);
    const [langIsOpen, setLangIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const toggleLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('i18nextLng', langCode);
        setLangIsOpen(false)
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

      const openLangModal = () => {
        setLangIsOpen(true);
    };

    const closeLangModal = () => {
        setLangIsOpen(false);
        resetState();
    };

      const openMenuModal = () => {
        setMenuIsOpen(true);
    };

    const closeMenuModal = () => {
        setMenuIsOpen(false);
        resetState();
    };

    return (
        <div className='flex flex-col'> 
            <div className="md:h-[60px] h-[60px] w-full fixed z-50 bg-[#FFF] flex justify-center backdrop-blur-sm">
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
                                <Menu.Button className="text-base font-medium hover:rounded-[35px]">
                                    <div className={i18n === 'en' ? 'font-medium' : 'font-semibold'}>
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
                                                            location.pathname === '/advantage' ? 'bg-[#CCCCCC80] rounded-[35px] text-black' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${i18n === 'en' ? 'font-medium' : 'font-semibold'} ${
                                                            location.pathname !== '/advantage' ? 'hover:bg-white hover:rounded-[35px] hover:text-black hover:shadow-lg hover:shadow-neutral-400 hover:duration-300' : ''
                                                        }`}>
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
                                                            location.pathname === '/customize' ? 'bg-[#CCCCCC80] rounded-[35px] text-black' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${i18n === 'en' ? 'font-medium' : 'font-semibold'} ${
                                                            location.pathname !== '/customize' ? 'hover:bg-white hover:rounded-[35px] hover:text-black hover:shadow-lg hover:shadow-neutral-400 hover:duration-300' : ''
                                                        }`}>
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
                                <Menu.Button className="text-base font-medium hover:rounded-[35px]">
                                    <div className={i18n === 'en' ? 'font-medium' : 'font-semibold'}>
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
                                                            location.pathname === '/products' ? 'bg-[#CCCCCC80] rounded-[35px] text-black' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${i18n === 'en' ? 'font-medium' : 'font-semibold'} ${
                                                            location.pathname !== '/products' ? 'hover:bg-white hover:rounded-[35px] hover:text-black hover:shadow-lg hover:shadow-neutral-400 hover:duration-300' : ''
                                                        }`}>
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
                                                            location.pathname === '/ownSite' ? 'bg-[#CCCCCC80] rounded-[35px] text-black' : ''
                                                        }`}
                                                    >
                                                        <div className={`group flex flex-col w-full items-center text-center px-[13px] py-[4px] ${i18n === 'en' ? 'font-medium' : 'font-semibold'} ${
                                                            location.pathname !== '/ownSite' ? 'hover:bg-white hover:rounded-[35px] hover:text-black hover:shadow-lg hover:shadow-neutral-400 hover:duration-300' : ''
                                                        }`}>
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
                            className={`text-base font-medium hover:rounded-[35px]${
                                location.pathname === '/careers' ? 'bg-[#CCCCCC80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className={i18n === 'en' ? 'font-medium' : 'font-semibold'}>
                                {t("Topbar.careerPage")}
                            </div>
                        </Link>
                    </div>

                    {/* LogoSvg between Earphone and Lang on mobile version */}
                    <>
                    <div className='flex flex-row justify-center items-center gap-[130px] md:hidden'>
                        {/* Language  component */}
                        <div className='relative text-left'>
                            <div className='flex flex-col items-center'>
                                <button 
                                type="button"
                                onClick={openLangModal}
                                className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                    <Lang />
                                </button>
                            </div>
                        </div>

                        <Transition appear show={langIsOpen} as={Fragment}>
                            <Dialog as="div" className="fixed inset-0 z-10 flex items-start justify-center pt-16" onClose={closeLangModal}>
                                <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-[#1a1b1dc2] opacity-100" />
                                </Transition.Child>

                                <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                                >
                                <Dialog.Panel className="relative mt-2 w-[130px] rounded-[15px] bg-[#FFFFFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right">
                                    <button
                                    className={`group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                    onClick={() => { toggleLanguage('en'); closeLangModal(); }}
                                    >
                                    English {i18n === 'en'}
                                    </button>
                                    {/* <button
                                    className={`group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                    onClick={() => { toggleLanguage('bm'); closeLangModal(); }}
                                    >
                                    Malay {i18n === 'bm'}
                                    </button> */}
                                    <button
                                    className={`group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                    onClick={() => { toggleLanguage('zh'); closeLangModal(); }}
                                    >
                                    中文 {i18n === 'zh'}
                                    </button>
                                </Dialog.Panel>
                                </Transition.Child>
                            </Dialog>
                        </Transition>
                        
                        <Link to="/" className='w-10 h-[26px]'>
                            <img src={LogoSvg} alt="icon" className='h-full'/>
                        </Link>
                        {/* Menu component */}
                        <div className="relative text-left">
                            <div className='flex flex-col items-center'>
                                <button 
                                type="button"
                                onClick={openMenuModal}
                                className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                    <Menus/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition appear show={menuIsOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 z-10 flex items-start justify-center pt-16" onClose={closeMenuModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[#1a1b1dc2] opacity-100 backdrop-blur-sm" />
                            </Transition.Child>

                            <div className='fixed'>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className={`mt-2 rounded-[15px] bg-[#FFFFFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-center
                                        ${i18n === 'en' ? 'w-[180px]' :
                                            i18n === 'zh' ? 'w-[112px]' :
                                            i18n === 'ms' ? 'w-[160px]' : ''}`}>

                                        <Link
                                            to="/"
                                            className={`${
                                                location.pathname === '/' ? 'text-blue-500' : ''
                                            }`}
                                        >
                                            <button
                                                className="group flex flex-col w-full rounded-md py-3 items-center"
                                                onClick={closeMenuModal}>
                                                {t("mobileTopbar.homePage")}
                                            </button>
                                        </Link>
                                        
                                        <Link>
                                            <button
                                                onClick={toggleAdvantage}
                                                className= 'flex flex-col w-full py-3 px-7 place-items-center'>
                                                {t("mobileTopbar.advantagePage")}
                                            </button>
                                            {isAdvantageExpanded && (
                                                <>
                                                    <Link
                                                        to="/advantage"
                                                        className={`w-full text-center`}
                                                        >
                                                        <button
                                                            className={`flex flex-col w-full py-3 px-7 items-center text-base font-medium ${
                                                                location.pathname === '/advantage' ? 'text-blue-500' : ''
                                                            }`}
                                                            onClick={closeMenuModal}
                                                        >
                                                            {t("mobileTopbar.oneStopPage")}
                                                        </button>
                                                    </Link>
                                                    
                                                    <Link
                                                        to="/customize"
                                                        className='w-full text-center'
                                                        >
                                                        <button
                                                            className={`flex flex-col w-full py-3 px-7 items-center text-base font-medium ${
                                                                location.pathname === '/customize' ? 'text-blue-500' : ''
                                                            }`}
                                                            onClick={closeMenuModal}
                                                        >
                                                            {t("mobileTopbar.customizePage")}
                                                        </button>
                                                    </Link></>
                                                )}
                                        </Link>

                                        <Link>
                                            <button
                                                onClick={toggleProducts}
                                                className= 'flex flex-col w-full py-3 px-7 items-center'>
                                                {t("mobileTopbar.productsPage")}
                                            </button>
                                            {isProductExpanded && (
                                            <>
                                                <Link
                                                    to="/products"
                                                    className='w-full text-center'
                                                    >
                                                    <button
                                                        className={`flex flex-col w-full py-3 px-7 items-center text-base font-medium ${
                                                            location.pathname === '/products' ? 'text-blue-500' : ''
                                                        }`}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.developedPage")}
                                                    </button>
                                                </Link>

                                                <Link
                                                    to="/ownSite"
                                                    className='w-full text-center'
                                                >
                                                    <button
                                                        className={`flex flex-col w-full py-3 px-7 items-center text-base font-medium ${
                                                            location.pathname === '/ownSite' ? 'text-blue-500' : ''
                                                        }`}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.ownSitePage")}
                                                    </button>
                                                </Link>
                                            </>
                                            )}
                                        </Link>

                                        <Link
                                            to="/careers"
                                            className={`${
                                                location.pathname === '/careers'  ? 'text-blue-500':''
                                            }`}
                                        >
                                            <button
                                                className="group flex flex-col w-full rounded-md py-3 items-center"
                                                onClick={closeMenuModal}
                                            >
                                                {t("mobileTopbar.careerPage")}
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => {handleButtonClick('gmail'); closeMenuModal();} }
                                            className="group flex flex-col w-full items-center rounded-md py-3"
                                            >
                                            {t("mobileTopbar.supportPage")}
                                        </button>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                    </>

                    {/* Earphone and Lang icons on web version*/}
                    <div className='hidden md:flex justify-center gap-[30px] cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                        <div className="transition duration-300 ease-in-out transform hover:scale-110">
                            <Earphone />
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center gap-[30px] cursor-pointer'>
                        <Menu as="div" className="relative text-left">
                            <div className="flex items-center">
                                <Menu.Button className="inline-flex justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                    <div className="transition duration-300 ease-in-out transform hover:scale-110">
                                        <Lang />
                                    </div>
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
                                <Menu.Items className="absolute flex flex-col justify-center mt-5 w-[220px] h-[60px] rounded-[30px] bg-[#FFF] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right left-1/2 transform -translate-x-1/2">
                                    <div className="flex flex-row px-[20px] py-[10px] items-stretch gap-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active ? ' bg-[#CCCCCC80] rounded-[35px] text-black font-bold shadow-lg shadow-slate-400 transform scale-105 transition duration-100' : 'text-gray-900'
                                                    } group flex flex-col w-full text-base font-medium items-center rounded-[20px] py-1 px-4`}
                                                    onClick={() => toggleLanguage('en')}
                                                >
                                                    English {i18n === 'en'}
                                                </button>
                                            )}
                                        </Menu.Item>
                                        
                                        {/* <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active ? 'bg-[#CCCCCC80] rounded-[35px] text-white' : 'text-gray-900'
                                                    } group flex flex-col w-full text-base items-center rounded-[30px]`}
                                                    onClick={() => toggleLanguage('bm')}
                                                >
                                                    Malay {language === 'bm'}
                                                </button>
                                            )}
                                        </Menu.Item> */}
                                        
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active ? 'bg-[#CCCCCC80] rounded-[35px] text-black font-bold shadow-lg shadow-slate-400 transform scale-105 transition duration-100' : 'text-gray-900'
                                                    } group flex flex-col w-full text-base font-semibold items-center rounded-[20px] py-1 px-4`}
                                                    onClick={() => toggleLanguage('zh')}
                                                >
                                                    中文 {i18n === 'zh'}
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
