import React, { useState, useEffect } from 'react';
import Cus1 from "../Assets/Images/Special/2.png";
import Cus1Mobile from "../Assets/Images/Special/M2.png";
import Cus2Mobile from "../Assets/Images/Special/M3.png";
import Cus3Mobile from "../Assets/Images/Special/M4.png";
import Explore1 from "../Assets/Images/Special/3.png";
import Emoji from "../Assets/Images/Special/4.png";
import MobileEmoji from "../Assets/Images/mobileEmoji.svg";
import MobileColour from "../Assets/Images/mobileColour.svg";
import ConnectorLine4 from "../Assets/Images/ConnectorLine4.svg";
import ConnectorLine5 from "../Assets/Images/ConnectorLine5.svg";
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Special/1.png';
import imageM1 from '../Assets/Images/Special/M1.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton';

const Special = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: false,  
              offset: 200,
            });
          }, []);

    return (
        <div className='flex flex-col gap-[150px] md:gap-[200px] w-full justify-center text-center pt-[50p] md:pt-[80px] pb-[250px]'>
            {/* Top Image */}
            <div className='w-full relative'>
                <img src={image1} alt="Special Image 1" className='hidden md:block w-full'/>
                <img src={imageM1} alt="Special Image Mobile 1" className='md:hidden w-full'/>
                <div className='absolute top-[60%] left-0 p-4 transform -translate-y-1/2 text-[#D1D5DB] text-[32px] md:text-[64px] text-center font-light w-full'>
                    <div>
                        WE CARE DEEPLY THE
                    </div>
                    <div>
                        VISUAL AESTHETICS
                    </div>
                </div>
            </div>

            {/* Customisation */}
            <div className='flex justify-center px-[25px]'>
                {/* Web */}
                <div className='hidden md:flex flex-col gap-[30px] text-center max-w-[1200px] w-auto'> 
                    <div className="flex flex-col gap-4 bg-text-gradient bg-clip-text text-transparent text-5xl font-normal " data-aos="fade-up">
                        <div>
                            CUSTOMISATION IS YOUR
                        </div>
                        <div>
                            DIRECT PATH TO ADVANTAGE
                        </div>
                    </div>
                    <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            Tailored web pages and apps enhance engagement by catering to user 
                        </div>
                        <div>
                            preferences, boosting satisfaction, retention, and loyalty.
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='md:hidden flex flex-col gap-[30px] text-center max-w-[1200px] w-auto'> 
                    <div className="flex flex-col bg-text-gradient bg-clip-text text-transparent text-[32px] font-normal " data-aos="fade-up">
                        <div>
                            CUSTOMISATION
                        </div>
                        <div>
                            IS YOUR DIRECT
                        </div>
                        <div>
                            PATH TO ADVANTAGE
                        </div>
                    </div>
                    <div className='text-base text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            Tailored web pages and apps enhance engagement by catering to user preferences, boosting satisfaction, retention, and loyalty.
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1200px] flex flex-col gap-[250px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-0 mx-5 md:mx-0'>   
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            {/* Text 1 */}
                            <div className="flex flex-col text-xl md:text-4xl text-[#557AAA] font-normal w-[300px] md:w-[661px] text-left" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    {t("Customize.customizeIdea_Title1")}
                                </div>
                                <div>
                                    {t("Customize.customizeIdea_Titles")}
                                </div>
                            </div>

                            <div className='flex flex-col gap-[100px] md:gap-0'>
                                <img src={Cus1} alt="" className='hidden md:block' data-aos="fade-up" data-aos-delay="600"/>
                                <img src={Cus1Mobile} alt="" className='block md:hidden' data-aos="fade-up" data-aos-delay="600"/>

                                {/* web */}
                                <div className='hidden md:block'>
                                    {/* Text 2 */}
                                    <div className='relative top-[-300px] left-[330px] hidden md:block'  data-aos="fade-up" data-aos-delay="400">
                                        <div className="absolute left-0 top-40 md:text-4xl text-[#557AAA] font-normal text-right w-[860px]">
                                            <div>
                                                {t("Customize.customizeIdea_Title2")}
                                            </div>
                                            <div>
                                                {t("Customize.customizeIdea_Title2s")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Explore */}
                                    <div className='hidden md:flex items-center justify-between ' data-aos="fade-up" data-aos-delay="600">
                                        <img src={Explore1} alt="Explore 1"/>
                                    </div>

                                    {/* Text 3 */}
                                    <div className='relative hidden md:block' data-aos="fade-up" data-aos-delay="400">
                                        <div className=' absolute left-0 top-[-140px] md:w-[860px] md:text-4xl text-[#557AAA] font-normal text-left'>
                                            <div>
                                                {t("Customize.customizeIdea_Title3")}
                                            </div>
                                            <div>
                                                {t("Customize.customizeIdea_Title3s")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Emoji */}
                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <img src={Emoji} alt="Explore 3" />
                                    </div>

                                    <div className='relative' data-aos="fade-up" data-aos-delay="400">                    
                                        <div className="absolute left-[330px] top-[-680px] md:text-4xl font-normla text-right text-[#557AAA] w-[860px]">
                                            <div>
                                                {t("Customize.customizeIdea_Title4")}
                                            </div>
                                            <div>
                                                {t("Customize.customizeIdea_Title4s")}
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                                
                                {/* mobile */}
                                <div className='flex flex-col md:hidden gap-[30px]'>
                                    <div className='text-[#557AAA] text-xl font-normal text-right'data-aos="fade-up">
                                        <div>{t("Customize.customizeIdea_Title2")}</div>
                                        <div>{t("Customize.customizeIdea_Title2s")}</div>

                                    </div>

                                    <div>
                                        <div className='relative' data-aos="fade-up" data-aos-delay="200">
                                            <div>
                                                <img src={Cus2Mobile} alt="" />
                                            </div>
                                            <div className='absolute bottom-[70px] w-[280px] text-[#557AAA] text-xl font-normal text-left' data-aos="fade-up" data-aos-delay="200">
                                                <div>{t("Customize.customizeIdea_Title3")}</div>
                                                <div>{t("Customize.customizeIdea_Title3s")}</div>
                                            </div>
                                        </div>
                                        <div className='relative' data-aos="fade-up" data-aos-delay="400">
                                            <div className='flex justify-end'>
                                                <img src={Cus3Mobile} alt="" />
                                            </div>
                                            <div className='absolute text-[#557AAA] text-xl font-normal text-right bottom-[210px] right-0' data-aos="fade-up" data-aos-delay="400">
                                                <div>
                                                    {t("Customize.customizeIdea_Title4")}
                                                </div>
                                                <div>
                                                    {t("Customize.customizeIdea_Title4s")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Creating Page */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="200">
                                    <div className="text-base md:text-[32px] text-[#557AAA] font-normal md:font-medium">PREPARING YOUR WEBPAGE</div>
                                    <div className="hidden md:block text-5xl text-[#153764] font-bold">BUILD AWESOME WEBSITE FOR YOU</div>
                                    <div className="md:hidden text-2xl text-[#153764] font-bold">
                                        <div>BUILD AWESOME WEBSITE</div>
                                        <div> FOR YOU</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center"   data-aos="fade-up" data-aos-delay="400">
                                        <a
                                            href='creating'
                                            className="text-base md:text-2xl text-[#153764] font-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            CREATING PAGE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll To Top Button */}
            <div className='absolute bg-opacity-20'>
                <ScrollToTopButton />
            </div>
        </div>
        
    )
}

        export default Special;