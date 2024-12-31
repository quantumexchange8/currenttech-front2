import React, {useContext, useState} from 'react';
import logo from '../Assets/Images/Footer/Logo.png';
import logoMobile from '../Assets/Images/Footer/LogoMobile.png';
import { FooterWhatsApp, FooterGmail, FooterFacebook, FooterFacebookM, FooterInstagram, FooterInstagramM, MobileGmail, MobileWhatsApp } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import Footer_MobileInstagram from '../Assets/Images/FooterMobileInstagram.svg'
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';
import PrivacyPolicyModal from '../Components/PrivacyPolicyModal.jsx';
import DisclaimerModal from '../Components/DisclaimerModal.jsx';
import TermsAndConditionModal from '../Components/TermsAndConditionModal.jsx';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const [privacyModal, setPrivacyModal] = useState(false);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const handlePrivacyButton = () => {
        setPrivacyModal(true);
    }

    return (
        <div className="w-full py-[46px] md:py-[100px]  bg-[#E5E7EB] flex justify-center items-center">
            {/* Website Footer */}
            <div className='hidden md:flex flex-col gap-[50px] md:gap-[65px] max-w-[1300px] w-full'>
                <div className='flex justify-center gap-[141px]'> 
                    {/* Logo Web */}
                    <div className='hidden md:block'>
                        <img src={logo} alt="Company Logo" className='w-[100px] h-[70px]' />
                    </div>
                    {/*LINKS */}
                    <div className='hidden md:flex gap-[150px]'>
                        {/* Quick Links */}
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
                                        <a href="/products">
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
                        {/* Legal */}
                        <div className='flex gap-[50px]'>
                            <div className='text-[#153764] text-xl font-bold'>
                                LEGAL:
                            </div>
                            <div className='flex flex-col gap-[20px] text-[#557AAA] text-xl font-normal '>
                                <div>
                                    {/* Privacy Modal */}
                                    <PrivacyPolicyModal />
                                </div>
                                <div>
                                    {/* Disclaimer Modal */}
                                    <DisclaimerModal />
                                </div>
                                <div>
                                    {/* Terms and Conditions Modal */}
                                    <TermsAndConditionModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-col items-center gap-[21px]'>
                    {/* Social Media */}
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
                    {/* Office */}
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

            {/* Mobile Footer */}
            <div className='md:hidden flex flex-col justify-center items-center gap-10'>
                {/* Logo Mobile */}
                <div className='md:hidden'>
                    <img src={logoMobile} alt="Company Logo" className='w-[100px] h-[70px]' />
                </div>
                {/* Office */}
                <div className='flex flex-col justify-center items-center gap-8'>
                    <div className='text-base text-[#153764] font-bold'>
                        OFFICE
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-base text-[#153764] font-bold'>
                            Current Tech Industries Sdn Bhd
                        </div>
                        <div className='flex flex-col justify-center items-center text-base text-[#557AAA] font-medium'>
                            <div>
                                Sunway Velocity Office, (VO6) Signature 2.
                            </div>
                            <div>
                                55100 Kuala Lumpur, MALAYSIA.
                            </div>
                        </div>
                    </div>
                    <a href='mailto:marketing@currencttech.pro' className='text-base text-[#557AAA] font-medium'>
                        marketing@currencttech.pro
                    </a>
                </div>
                {/* Quick Links */}
                <div className='flex flex-col justify-center items-center gap-[30px]'>
                    <div className='text-[#153764] text-base font-bold'>
                        QUICK LINKS
                    </div>
                    <div>
                        <div className='flex gap-[100px] text-[#557AAA] text-base font-medium '>
                            <div className='flex flex-col justify-center items-center gap-8 leading-normal h-[300px]'>
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
                            <div className='flex flex-col justify-center items-center gap-8 leading-normal h-[300px]'>
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
                {/* Legal */}
                <div className='flex flex-col items-center gap-[30px]'>
                    <div className='text-[#153764] text-xl font-bold'>
                        LEGAL
                    </div>
                    <div className='flex flex-col justify-center items-center gap-8 text-[#557AAA] h-[180px]'>
                        <div>
                            {/* Privacy Modal */}
                            <PrivacyPolicyModal />
                        </div>
                        <div>
                            {/* Disclaimer Modal */}
                            <DisclaimerModal />
                        </div>
                        <div>
                            {/* Terms and Conditions Modal */}
                            <TermsAndConditionModal />
                        </div>
                    </div>
                </div>
                {/* Social Icon */}
                <div className='flex gap-5'>
                    <a href="#">
                        <FooterFacebookM />
                    </a>
                    <a href="#">
                        <FooterInstagramM />
                    </a>
                    <a href="#">
                        <MobileWhatsApp />
                    </a>
                    <a href="#">
                        <MobileGmail />
                    </a>
                </div>
                {/* Copyright */}
                <div className='flex flex-col justify-center items-center text-sm text-[#557AAA] font-medium'>
                    <div>
                        Copyright &copy; Current Tech Industries 2024.
                    </div>
                    <div>
                        All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;