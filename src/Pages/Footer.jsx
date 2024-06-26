import React, {useContext, useState} from 'react';
import ct_logo from '../Assets/Images/currenttech_logo.svg';
import { FooterWhatsApp, FooterGmail, FooterFacebook, FooterInstagram } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import Footer_MobileInstagram from '../Assets/Images/FooterMobileInstagram.svg'
import { LanguageContext } from "../LanguagesContext";

const Footer = () => {
    const { t, language} = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div className="w-full py-[46px] md:py-[68px] h-[500px] md:h-[300px] bg-[#aaaaaa80] flex justify-center items-center">
            <div className='max-w-[1000px] w-full flex flex-col md:flex-row gap-[50px] md:gap-[100px] ml-5 md:ml-0'>
                <div className='flex flex-col gap-[50px] md:gap-[26px]'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <img src={ct_logo} alt='ct logo'/>
                        </div>
                        <div className='flex flex-col text-base font-normal text-left'>
                            <div className='hidden md:flex flex-col text-base font-normal leading-[1.20]'>
                                <div>Current Tech Industries is a leading technology solutions development provider. Founded in </div>
                                <div>2006, with a primary focus on technology development and distribution, the company is  </div>
                                <div>dedicated to driving innovative solutions for digital transformation. By offering cutting-edge IT </div>
                                <div>solutions, Current Tech Industries aims to meet the diverse needs of its partners and customers.</div>
                            </div>

                            <div className='flex flex-col text-sm font-semibold leading-[1.20] md:hidden'>
                                <div>Current Tech Industries is a leading technology</div>
                                <div>solutions development provider. Founded in</div>
                                <div>2006, with a primary focus on technology</div>
                                <div>development and distribution, the company is </div>
                                <div>dedicated to driving innovative solutions for</div>
                                <div>digital transformation. By offering cutting-edge</div>
                                <div>IT solutions, Current Tech Industries aims to meet</div>
                                <div>the diverse needs of its partners and customers.</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-left'>
                        <div className='hidden md:flex flex-col text-base font-bold leading-[1.20]'>
                            <div>Copyright © Current Tech Industries 2023. All rights reserved.</div>
                        </div>
                        <div className='flex flex-col text-sm font-bold leading-[1.20] md:hidden'>
                            <div>Copyright © Current Tech Industries 2023.</div>
                            <div>All rights reserved.</div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-4 items-end justify-center w-full text-right'>
                    <div className='text-sm font-bold w-full'>
                        {t("Footer.socialMediaDescription")}
                    </div>
                    <div className='flex flex-row gap-[20px]'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-white border border-white rounded-[10px] cursor-pointer'
                            onClick={() => handleButtonClick('whatsapp')}>
                            <div>
                                <FooterWhatsApp/>
                            </div>
                        </div>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-white border border-white rounded-[10px] cursor-pointer'
                            onClick={() => handleButtonClick('gmail')}>
                            <div>
                                <FooterGmail/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[20px]'>
                        <div className='w-[50px] h-[50px]'>
                            <FooterFacebook/>
                        </div>
                        <div className='w-[50px] h-[50px]'>
                            <FooterInstagram/>
                        </div>
                    </div>
                </div>

                {/* mobile version */}
                <div className='flex flex-col gap-5 justify-center md:hidden'>
                    <div className='text-sm font-bold'>
                        {t("Footer.socialMediaDescription")}
                    </div>
                    <div className='flex flex-row gap-[20px]'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-white border border-white rounded-[10px] cursor-pointer'
                            onClick={() => handleButtonClick('whatsapp')}>
                            <div>
                                <FooterWhatsApp/>
                            </div>
                        </div>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-white border border-white rounded-[10px] cursor-pointer'
                            onClick={() => handleButtonClick('gmail')}>
                            <div>
                                <FooterGmail/>
                            </div>
                        </div>
                    
                        <div className='w-[50px] h-[50px]'>
                            <a href="https://www.facebook.com/currenttechindustries/" target="_blank" rel="noopener noreferrer">
                                <FooterFacebook />
                            </a>
                        </div>
                        
                        <div>
                            {/* <FooterInstagram/> */}
                            <a href="https://www.instagram.com/currenttechindustries/" target="_blank" rel="noopener noreferrer">
                                <img src={Footer_MobileInstagram} alt="Footer Instagram" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}

export default Footer;