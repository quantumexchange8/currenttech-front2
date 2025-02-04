import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Chinese, Earphone, English, Lang, Malay, Menus, MenusM } from '../Components/Outline';
// import LogoSvg from '../Assets/Images/Topbar/currentTechLogo.png';
import LogoNewSvg from '../Assets/Images/Topbar/currentTechLogoNew.png';
import { Link, useLocation } from "react-router-dom";
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton] = useState(null);
    const { t, i18n } = useTranslation();
    const toggleLanguage = (langCode) => { 
        i18n.changeLanguage(langCode);
        localStorage.setItem('i18nextLng', langCode);
        closeMenuModal();
    };

    const closeMenuModal = () => {
        setOpenButton(false);
    };

    return (
        <div className='flex flex-col'> 
            <div className="xl:h-[80px] h-[50px] w-full fixed z-50 bg-[#FFF] flex justify-center backdrop-blur-sm">
                <div className="w-full xl:w-[1500px] max-w-[1500px] xl:px-8 flex justify-between items-center xl:gap-[50px]">
                    {/* LogoSvg only shown on web version */}
                    <div className='hidden xl:flex'>
                        <Link to="/">
                            <img src={LogoNewSvg} alt="icon" />
                        </Link>
                    </div>

                    {/* LogoSvg between Earphone and Lang on mobile version */}
                    <div className='xl:hidden flex w-full justify-between items-center px-[25px] '>
                        {/* Logo */}
                        <Link to="/">
                            <img src={LogoNewSvg} alt="icon" className='w-[113px] h-[30px]' />
                        </Link>

                        {/* Menu */}
                        <div className="xl:hidden flex justify-center items-center gap-[30px] cursor-pointer">
                            <Menu as="div" className="relative text-left">
                                <Menu.Button className="flex justify-center items-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                    <div className="transition duration-300 ease-in-out transform hover:scale-110">
                                        <MenusM />
                                    </div>
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-300"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-200"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="fixed flex flex-col justify-center items-center gap-5 p-[30px] md:p-[50px] rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] text-xl font-normal text-center w-[300px] z-50 left-1/2 transform -translate-x-1/2 mt-[30px] shadow-lg">
                                        {/* Home Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/"
                                                    className={`${
                                                        location.pathname === '/' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.homePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Advantage Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/advantage"
                                                    className={`${
                                                        location.pathname === '/advantage' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.advantagePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Special Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/special"
                                                    className={`${
                                                        location.pathname === '/special' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.specialPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Product Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/products"
                                                    className={`${
                                                        location.pathname === '/products' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.productsPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Creating Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/creating"
                                                    className={`${
                                                        location.pathname === '/creating' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.creatingPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Price Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/price"
                                                    className={`${
                                                        location.pathname === '/price' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.pricePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Career Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/careers"
                                                    className={`${
                                                        location.pathname === '/careers' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.careerPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* About Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/about"
                                                    className={`${
                                                        location.pathname === '/about' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.aboutPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Team Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/team"
                                                    className={`${
                                                        location.pathname === '/team' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.teamPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Support Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/support"
                                                    className={`${
                                                        location.pathname === '/support' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={"group flex flex-col w-full items-center"}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.supportPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        <div className="flex justify-center gap-[30px] md:gap-4 pt-4">
                                            {/* English Icon */}
                                            <button className="transform hover:scale-110 transition duration-300 ease-in-out" onClick={() => toggleLanguage('en')}>
                                                <English />
                                            </button>

                                            {/* Malay Icon */}
                                            <button className="transform hover:scale-110 transition duration-300 ease-in-out" onClick={() => toggleLanguage('bm')}>
                                                <Malay />
                                            </button>

                                            {/* Chinese Icon */}
                                            <button className="transform hover:scale-110 transition duration-300 ease-in-out" onClick={() => toggleLanguage('zh')}>
                                                <Chinese />
                                            </button>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>


                    {/* Earphone and Lang icons on web version*/}
                    <div className='hidden xl:flex gap-[50px] items-center'>
                        {/* Earphone */}
                        <a href='/support' className='transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer'>
                            <Earphone />
                        </a>
                        
                        {/* Language */}
                        <div className='hidden md:flex justify-center gap-[30px] cursor-pointer'>
                            <Menu as="div" className="relative text-left">
                                <Menu.Button className="inline-flex justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-[5px]">
                                    <div className="transition duration-300 ease-in-out transform hover:scale-110">
                                        <Lang />
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
                                    <Menu.Items className="absolute flex flex-col justify-center gap-[30px] mt-[50px] p-[50px] rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-lg ring-1 ring-black/5 focus:outline-none text-2xl font-normal text-center right-0">
                                        <div className="flex flex-col items-stretch gap-[30px]">
                                            <Menu.Item>
                                                    <button
                                                        className={`${
                                                            i18n.language === 'en' ? 'text-[#153764] font-semibold text-2xl' : 'text-[#557AAA]'
                                                        } group flex flex-col w-full text-2xl font-normal items-center `}
                                                        onClick={() => toggleLanguage('en')}
                                                    >
                                                        ENGLISH {i18n === 'en'}
                                                    </button>
                                            </Menu.Item>
                                            
                                            <Menu.Item>
                                                    <button 
                                                        className={`${
                                                            i18n.language === 'bm' ? 'text-[#153764] font-semibold text-2xl' : 'text-[#557AAA]'
                                                        } group flex flex-col w-full text-2xl font-normal items-center `}
                                                        onClick={() => toggleLanguage('bm')}
                                                    >
                                                        MALAY {i18n === 'bm'}
                                                    </button>
                                            </Menu.Item>
                                            
                                            <Menu.Item>
                                                    <button
                                                        className={`${
                                                            i18n.language === 'zh' ? 'text-[#153764] font-semibold text-2xl' : 'text-[#557AAA]'
                                                        } group flex flex-col w-full text-2xl font-normal items-center `}
                                                        onClick={() => toggleLanguage('zh')}
                                                    >
                                                        中文 {i18n === 'zh'}
                                                    </button>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu> 
                        </div>

                        {/* Menu */}
                        <div className="hidden md:flex justify-center gap-[30px] cursor-pointer">
                            <Menu as="div" className="relative text-left">
                                <Menu.Button className="inline-flex justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-[5px]">
                                    <div className="transition duration-300 ease-in-out transform hover:scale-110">
                                        <Menus />
                                    </div>
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-300"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-200"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute flex flex-col justify-center gap-[30px] mt-[50px] p-[50px] rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-lg ring-1 ring-black/5 focus:outline-none text-2xl font-normal text-center right-0 w-[243px]">
                                        {/* Home Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/"
                                                    className={`${
                                                        location.pathname === '/' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.homePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Advantage Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/advantage"
                                                    className={`${
                                                        location.pathname === '/advantage' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.advantagePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Special Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/special"
                                                    className={`${
                                                        location.pathname === '/special' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.specialPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Product Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/products"
                                                    className={`${
                                                        location.pathname === '/products' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.productsPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Creating Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/creating"
                                                    className={`${
                                                        location.pathname === '/creating' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.creatingPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Price Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/price"
                                                    className={`${
                                                        location.pathname === '/price' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.pricePage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Career Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/careers"
                                                    className={`${
                                                        location.pathname === '/careers' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.careerPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* About Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/about"
                                                    className={`${
                                                        location.pathname === '/about' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.aboutPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* Team Page */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/team"
                                                    className={`${
                                                        location.pathname === '/team' ? 'text-[#153764]' : 'text-[#557AAA]'
                                                    }`}
                                                >
                                                    <button
                                                        className={'w-full items-center'}
                                                        onClick={closeMenuModal}
                                                    >
                                                        {t("mobileTopbar.teamPage")}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    );
};

export default Topbar;
