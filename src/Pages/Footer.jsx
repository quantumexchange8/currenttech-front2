import React from 'react';
// import logo from '../Assets/Images/Footer/Logo.png';
import logoMobile from '../Assets/Images/Footer/LogoMobile.png';
import currenttechLogo from '../Assets/Images/Footer/currenttech_logo.png';
import { FooterWhatsApp, FooterGmail, FooterFacebook, FooterFacebookM, FooterInstagram, FooterInstagramM, MobileGmail, MobileWhatsApp } from '../Components/Brand.jsx';
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';
import PrivacyPolicyModal from '../Components/PrivacyPolicyModal.jsx';
import DisclaimerModal from '../Components/DisclaimerModal.jsx';
import TermsAndConditionModal from '../Components/TermsAndConditionModal.jsx';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full py-[46px] md:py-[70px] bg-[#E5E7EB] flex justify-center items-center">
            {/* Website Footer */}
            <div className='hidden xl:flex flex-col gap-[50px] md:gap-[65px] max-w-[1300px] w-full'>
                <div className='flex justify-center gap-[141px]'> 
                    {/* Logo Web */}
                    <div className='hidden md:block'>
                        <img src={currenttechLogo} alt="Company Logo" />
                    </div>
                    {/*LINKS */}
                    <div className='hidden md:flex gap-[150px]'>
                        {/* Quick Links */}
                        <div className='flex gap-[50px]'>
                            <div className='text-[#153764] text-xl font-bold'>
                                {t("Footer.quickLinks")}:
                            </div>
                            <div>
                                <div className='flex  gap-[100px] text-[#557AAA] text-xl font-normal '>
                                    <div className='flex flex-col gap-5'>
                                        <a href="/">
                                            {t("mobileTopbar.homePage")}
                                        </a>
                                        <a href="/advantage">
                                            {t("mobileTopbar.advantagePage")}
                                        </a>
                                        <a href="/special">
                                            {t("mobileTopbar.specialPage")}
                                        </a>
                                        <a href="/products">
                                            {t("mobileTopbar.productsPage")}
                                        </a>
                                        <a href="/creating">
                                            {t("mobileTopbar.creatingPage")}
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <a href='/price'>
                                            {t("mobileTopbar.pricePage")}
                                        </a>
                                        <a href='/careers'>
                                            {t("mobileTopbar.careerPage")}
                                        </a>
                                        <a href='/about'>
                                            {t("mobileTopbar.aboutPage")}
                                        </a>
                                        <a href='/team'>
                                            {t("mobileTopbar.teamPage")}
                                        </a>
                                        <a href='/support'>
                                            {t("mobileTopbar.supportPage")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Legal */}
                        <div className='flex gap-[50px]'>
                            <div className='text-[#153764] text-xl font-bold'>
                                {t("Footer.legal")}:
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
                        <Link to="https://www.facebook.com/currenttechindustries">
                            <FooterFacebook />
                        </Link>
                        <Link to="https://www.instagram.com/currenttechindustries/">
                            <FooterInstagram />
                        </Link>
                        <Link to="">
                            <FooterWhatsApp />
                        </Link>
                        <Link to="">
                            <FooterGmail />
                        </Link>
                    </div>
                    {/* Office */}
                    <div className='flex flex-col items-center gap-[10px]'>
                        <div className='flex gap-10'>
                            <div className='flex gap-[10px]'>
                                <div className='text-[#153764] text-xl font-bold'>
                                    {t("Footer.office")}:
                                </div>
                                <div className='text-[#557AAA] text-xl font-normal '>
                                    {t("Footer.sunwayOffice")}
                                </div>
                            </div>
                            <div className='flex gap-[10px]'>
                                <div className='text-[#153764] text-xl font-bold'>
                                    {t("Footer.email")}:
                                </div>
                                <a href='mailto:marketing@currencttech.pro' className='text-[#557AAA] text-xl font-normal '>
                                    {t("Footer.marketing")}
                                </a>
                            </div>
                        </div>
                        <div className='text-[#557AAA] text-xl font-normal '>
                            {t("Footer.copyRight")} &copy; {t("Footer.currentTech")} {currentYear}. {t("Footer.allRightReserved")}
                        </div>
                    </div>
                </div>
                
            </div>

            {/* md Footer */}
            <div className='hidden xl:hidden md:flex flex-col justify-center items-center gap-7'>
                {/* Logo Mobile */}
                <div className='md:hidden'>
                    <img src={logoMobile} alt="Company Logo" className='w-[100px] h-[70px]' />
                </div>
                {/* Office */}
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='text-base text-[#153764] font-bold'>
                        {t("Footer.office")}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-base text-[#153764] font-bold'>
                            {t("Footer.currentTechMobile")}
                        </div>
                        <div className='flex flex-col justify-center items-center text-base text-[#557AAA] font-medium'>
                            <div>
                                {t("Footer.sunwayOfficeMobile")}
                            </div>
                            <div>
                                {t("Footer.sunwayOfficeMobile2")}
                            </div>
                        </div>
                    </div>
                    <a href='mailto:marketing@currencttech.pro' className='text-base text-[#557AAA] font-medium'>
                        {t("Footer.marketing")}
                    </a>
                </div>
                <div className="flex gap-[150px]">
                    {/* Quick Links */}
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='text-[#153764] text-base font-bold'>
                            {t("Footer.quickLinks")}
                        </div>
                        <div>
                            <div className='flex gap-[100px] text-[#557AAA] text-base font-medium '>
                                <div className='flex flex-col justify-center items-center gap-4 leading-normal h-auto'>
                                    <a href="/">
                                        {t("mobileTopbar.homePage")}
                                    </a>
                                    <a href="/advantage">
                                        {t("mobileTopbar.advantagePage")}
                                    </a>
                                    <a href="/special">
                                        {t("mobileTopbar.specialPage")}
                                    </a>
                                    <a href="/product">
                                        {t("mobileTopbar.productsPage")}
                                    </a>
                                    <a href="/creating">
                                        {t("mobileTopbar.creatingPage")}
                                    </a>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 leading-normal h-auto'>
                                    <a href='/price'>
                                        {t("mobileTopbar.pricePage")}
                                    </a>
                                    <a href='/career'>
                                        {t("mobileTopbar.aboutPage")}
                                    </a>
                                    <a href='/about'>
                                        {t("mobileTopbar.teamPage")}
                                    </a>
                                    <a href='/team'>
                                        {t("mobileTopbar.careerPage")}
                                    </a>
                                    <a href='/support'>
                                        {t("mobileTopbar.supportPage")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Legal */}
                    <div className='flex flex-col items-center gap-4'>
                        <div className='text-[#153764] text-base font-bold'>
                            {t("Footer.legal")}
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 text-[#557AAA] h-auto'>
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
                {/* Social Icon */}
                <div className='flex gap-5'>
                    <Link to="https://www.facebook.com/currenttechindustries">
                        <FooterFacebookM />
                    </Link>
                    <Link to="https://www.instagram.com/currenttechindustries/">
                        <FooterInstagramM />
                    </Link>
                    <Link to="#">
                        <MobileWhatsApp />
                    </Link>
                    <Link to="#">
                        <MobileGmail />
                    </Link>
                </div>
                {/* Copyright */}
                <div className='flex flex-col justify-center items-center text-sm text-[#557AAA] font-medium'>
                    {t("Footer.copyRight")} &copy; {t("Footer.currentTech")} {currentYear}. {t("Footer.allRightReserved")}
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
                        {t("Footer.office")}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-base text-[#153764] font-bold'>
                            {t("Footer.currentTechMobile")}
                        </div>
                        <div className='flex flex-col justify-center items-center text-base text-[#557AAA] font-medium'>
                            <div>
                                {t("Footer.sunwayOfficeMobile")}
                            </div>
                            <div>
                                {t("Footer.sunwayOfficeMobile2")}
                            </div>
                        </div>
                    </div>
                    <a href='mailto:marketing@currencttech.pro' className='text-base text-[#557AAA] font-medium'>
                        {t("Footer.marketing")}
                    </a>
                </div>
                {/* Quick Links */}
                <div className='flex flex-col justify-center items-center gap-[30px]'>
                    <div className='text-[#153764] text-base font-bold'>
                        {t("Footer.quickLinks")}
                    </div>
                    <div>
                        <div className='flex gap-[100px] text-[#557AAA] text-base font-medium '>
                            <div className='flex flex-col justify-center items-center gap-8 leading-normal h-[300px]'>
                                <a href="/">
                                    {t("mobileTopbar.homePage")}
                                </a>
                                <a href="/advantage">
                                    {t("mobileTopbar.advantagePage")}
                                </a>
                                <a href="/special">
                                    {t("mobileTopbar.specialPage")}
                                </a>
                                <a href="/products">
                                    {t("mobileTopbar.productsPage")}
                                </a>
                                <a href="/creating">
                                    {t("mobileTopbar.creatingPage")}
                                </a>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-8 leading-normal h-[300px]'>
                                <a href='/price'>
                                    {t("mobileTopbar.pricePage")}
                                </a>
                                <a href='/career'>
                                    {t("mobileTopbar.aboutPage")}
                                </a>
                                <a href='/about'>
                                    {t("mobileTopbar.teamPage")}
                                </a>
                                <a href='/team'>
                                    {t("mobileTopbar.careerPage")}
                                </a>
                                <a href='/support'>
                                    {t("mobileTopbar.supportPage")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Legal */}
                <div className='flex flex-col items-center gap-[30px]'>
                    <div className='text-[#153764] text-base font-bold'>
                        {t("Footer.legal")}
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
                    <Link to="https://www.facebook.com/currenttechindustries">
                        <FooterFacebookM />
                    </Link>
                    <Link to="https://www.instagram.com/currenttechindustries/">
                        <FooterInstagramM />
                    </Link>
                    <Link to="#">
                        <MobileWhatsApp />
                    </Link>
                    <Link to="#">
                        <MobileGmail />
                    </Link>
                </div>
                {/* Copyright */}
                <div className='flex flex-col justify-center items-center text-sm text-[#557AAA] font-medium'>
                    <div>{t("Footer.copyRight")} &copy; {t("Footer.currentTech")} {currentYear}.</div> 
                    <div>{t("Footer.allRightReserved")}</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;