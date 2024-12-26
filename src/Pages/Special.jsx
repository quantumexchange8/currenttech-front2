import React, { useState, useEffect } from 'react';
import Modal from '../Components/Modal';
import Cus1 from "../Assets/Images/Special/2.png"
import Cus1Mobile from "../Assets/Images/cus1Mobile.svg"
import Cus2Mobile from "../Assets/Images/cus2Mobile.svg"
import Cus3Mobile from "../Assets/Images/cus3Mobile.svg"
import Explore1 from "../Assets/Images/Special/3.png"
import Emoji from "../Assets/Images/Special/4.png"
import MobileEmoji from "../Assets/Images/mobileEmoji.svg"
import MobileColour from "../Assets/Images/mobileColour.svg"
import ConnectorLine4 from "../Assets/Images/ConnectorLine4.svg"
import ConnectorLine5 from "../Assets/Images/ConnectorLine5.svg"
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Special/1.png'
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
        <div className='flex flex-col gap-[200px] w-full justify-center text-center pt-[80px] pb-[250px]'>
            {/* Top Image */}
            <div className='w-full relative'>
                <img src={image1} alt="Special Image 1" className='w-full'/>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  text-[#D1D5DB] text-[64px] text-center font-light w-full'>
                    <div>
                        WE CARE DEEPLY THE
                    </div>
                    <div>
                        VISUAL AESTHETICS
                    </div>
                </div>
            </div>

            {/* Customisation */}
            <div className='flex justify-center'>
                <div className='flex flex-col gap-[30px] text-center max-w-[1200px] w-auto'> 
                    <div className="bg-text-gradient bg-clip-text text-transparent text-5xl font-normal flex flex-col gap-4" data-aos="fade-up">
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
            </div>

            {/* Body */}
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1200px] flex flex-col gap-[250px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-0 mx-5 md:mx-0'>   
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            {/* Text 1 */}
                            <div className="flex flex-col text-base md:text-4xl text-[#557AAA] font-normal w-[300px] md:w-[661px] text-left" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    {t("Customize.customizeIdea_Title1")}
                                </div>
                                <div>
                                    {t("Customize.customizeIdea_Titles")}
                                </div>
                            </div>

                            <div className='flex flex-col gap-[50px] md:gap-0'>
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
                                    <div className='w-[353px] text-base font-bold text-left'>
                                        {t("Customize.customizeIdea_Title2")}
                                    </div>

                                    <div>
                                        <img src={Cus2Mobile} alt="" />
                                    </div>
                                </div>

                                <div className='flex flex-col md:hidden'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img src={Cus3Mobile} alt="" />
                                    </div>
                                    <div className='relative'>
                                        <div className='flex justify-end pr-6'>
                                            <img src={ConnectorLine4} alt="" />
                                        </div>
                                        <div className='absolute top-[85px] w-[280px] text-base font-bold text-left'>
                                            {t("Customize.customizeIdea_Title3")}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={MobileEmoji} alt="Mobile Emoji"/>
                                    </div>
                                    <div className='relative'>
                                        <div className='flex justify-center pl-[100px]'>
                                            <img src={ConnectorLine5} alt="" />
                                        </div>
                                        <div className='absolute top-[65px] w-[290px] text-base font-bold text-left'>
                                            {t("Customize.customizeIdea_Title4")}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={MobileColour} alt="Mobile Colour"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Creating Page */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-[32px] text-[#557AAA] font-medium">PREPARING YOUR WEBPAGE</div>
                                    <div className="text-5xl text-[#153764] font-bold">BUILD AWESOME WEBSITE FOR YOU</div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center"   data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            href='creating'
                                            className="text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
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
            <div className='bg-opacity-20'>
                <ScrollToTopButton />
            </div>
        </div>
        
    )
}

        export default Special;