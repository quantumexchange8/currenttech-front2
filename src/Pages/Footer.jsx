import React, {useContext, useState} from 'react';
import ct_logo from '../Assets/Images/currenttech_logo.svg';
import logo from '../Assets/Images/Footer/Logo.png';
import { FooterWhatsApp, FooterGmail, FooterFacebook, FooterInstagram } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import Footer_MobileInstagram from '../Assets/Images/FooterMobileInstagram.svg'
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div className="w-full py-[46px] md:py-[100px]  bg-[#E5E7EB] flex justify-center items-center">
            <div className='max-w-[1300px] w-full flex flex-col gap-[50px] md:gap-[65px]'>
                <div className='flex justify-center gap-[141px]'> 
                    <div>
                        <img src={logo} alt="Company Logo" className='w-[100px] h-[70px]' />
                    </div>
                    <div className='flex gap-[150px]'>
                        <div className='flex gap-[50px]'>
                            <div className='text-[#153764] text-xl font-bold'>
                                QUICK LINKS:
                            </div>
                            <div>
                                <div className='flex  gap-[100px] text-[#557AAA] text-xl font-normal '>
                                    <div className='flex flex-col gap-5'>
                                        <a href="/">
                                            HOME
                                        </a>
                                        <a href="/advantage">
                                            ADVANTAGE
                                        </a>
                                        <a href="/special">
                                            SPECIAL
                                        </a>
                                        <a href="/product">
                                            PRODUCT
                                        </a>
                                        <a href="/creating">
                                            CREATING
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <a href='/price'>
                                            PRICE
                                        </a>
                                        <a href='/career'>
                                            CAREER
                                        </a>
                                        <a href='/about'>
                                            ABOUT
                                        </a>
                                        <a href='/team'>
                                            TEAM
                                        </a>
                                        <a href='/support'>
                                            SUPPORT
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[50px]'>
                            <div className='text-[#153764] text-xl font-bold'>
                                LEGAL:
                            </div>
                            <div className='flex flex-col gap-[20px] text-[#557AAA] text-xl font-normal '>
                                <a href="">
                                    PRIVACY POLICY
                                </a>
                                <a href="">
                                    DISCLAIMER
                                </a>
                                <a href="">
                                    TERMS & CONDITIONS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[21px]'>
                    <div className='flex gap-5'>
                        <a href="#">
                            <FooterFacebook />
                        </a>
                        <a href="#">
                            <FooterInstagram />
                        </a>
                        <a href="#">
                            <FooterWhatsApp />
                        </a>
                        <a href="#">
                            <FooterGmail />
                        </a>
                    </div>
                    <div className='flex flex-col items-center gap-[10px]'>
                        <div className='flex gap-10'>
                            <div className='flex gap-[10px]'>
                                <div className='text-[#153764] text-xl font-bold'>
                                    OFFICE:
                                </div>
                                <div className='text-[#557AAA] text-xl font-normal '>
                                    Sunway Velocity Office, (VO6) Signature 2 55100, Kuala Lumpur MALAYSIA.
                                </div>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-[#153764] text-xl font-bold'>
                                    EMAIL:
                                </div>
                                <a href='mailto:marketing@currencttech.pro' className='text-[#557AAA] text-xl font-normal '>
                                    marketing@currencttech.pro
                                </a>
                            </div>
                        </div>
                        <div className='text-[#557AAA] text-xl font-normal '>
                            Copyright &copy; Current Tech Industries 2024. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;