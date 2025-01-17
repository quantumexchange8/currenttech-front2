import React, { useEffect } from 'react';
import Cus1 from "../Assets/Images/Special/2.png";
import Cus1Mobile from "../Assets/Images/Special/M2.png";
import Cus2Mobile from "../Assets/Images/Special/M3.png";
import Cus3Mobile from "../Assets/Images/Special/M4.png";
import Explore1 from "../Assets/Images/Special/3.png";
import Emoji from "../Assets/Images/Special/4.png";
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Special/1.png';
import imageM1 from '../Assets/Images/Special/M1.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton';

const Special = () => {
    const { t } = useTranslation();

    useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: true,  
              offset: 200,
            });
          }, []);

    return (
        <div className='flex flex-col gap-[150px] md:gap-[200px] w-full justify-center text-center pt-[50p] md:pt-[80px] pb-[250px]'>
            {/* Top Image */}
            {/* Web */}
            <div className='hidden xl:block w-full relative'>
                <img src={image1} alt="Special 1" className='w-full'/>
                <div className='flex flex-col absolute inset-0 top-[60%] left-0 p-4 transform -translate-y-1/2 text-[#D1D5DB] text-[32px] md:text-4xl lg:text-[64px] text-center font-light w-full leading-normal'>
                    <div className='leading-normal'>
                        {t("Special.careDeeply")}
                    </div>
                    <div className='leading-normal'>
                        {t("Special.visual")}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='xl:hidden w-full relative'>
                <img src={imageM1} alt="Special Mobile 1" className='w-full'/>
                <div className='absolute top-3/4 left-0 p-4 transform -translate-y-1/2 text-[#D1D5DB] text-[32px] md:text-[64px] text-center font-light w-full leading-normal'>
                    <div>
                        {t("Special.careDeeply")}
                    </div>
                    <div>
                        {t("Special.visual")}
                    </div>
                </div>
            </div>

            {/* Customisation */}
            <div className='flex justify-center px-[25px]'>
                {/* Web */}
                <div className='hidden md:flex flex-col gap-[30px] justify-center items-center text-center max-w-[1200px] w-full'> 
                    <div className="flex flex-col bg-text-gradient bg-clip-text text-transparent md:text-3xl lg:text-5xl font-normal leading-normal" data-aos="fade-up">
                        <div className='leading-normal'>
                            {t("Special.customisation")}
                        </div>
                        <div className='leading-normal'>
                            {t("Special.directPath")}
                        </div>
                    </div>
                    <div className='md:text-lg lg:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            {t("Special.tailoredWebPages")}
                        </div>
                        <div>
                            {t("Special.preferences")}
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='md:hidden flex flex-col items-center gap-[30px] text-center max-w-[1200px] w-full'> 
                    <div className="flex flex-col bg-text-gradient bg-clip-text text-transparent text-[32px] font-normal " data-aos="fade-up">
                        <div>
                            {t("Special.customisationMobile")}
                        </div>
                        <div>
                            {t("Special.directMobile")}
                        </div>
                        <div>
                            {t("Special.PathMobile")}
                        </div>
                    </div>
                    <div className='text-base text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            {t("Special.tailoredWebPagesMobile")}
                        </div>
                        <div>
                            {t("Special.tailoredWebPagesMobile2")}
                        </div>
                        <div>
                            {t("Special.tailoredWebPagesMobile3")}
                        </div>
                        <div>
                            {t("Special.tailoredWebPagesMobile4")}
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className='w-full flex flex-col items-center justify-center md:px-5 '>
                <div className='max-w-[1200px] flex flex-col gap-[250px]'>
                    {/* Content */}
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-0 md:mx-0'>   
                        <div className='flex flex-col gap-[30px] md:gap-[50px] px-[25px] xl:p-0'>
                            {/* Text 1 */}
                            <div className="flex flex-col text-xl md:text-2xl lg:text-4xl text-[#557AAA] font-normal w-full lg:w-[661px] text-left" data-aos="fade-up" data-aos-delay="400">
                                <div className='leading-normal'>
                                    {t("Special.customizeIdea_Title1")}
                                </div>
                                <div className='leading-normal'>
                                    {t("Special.customizeIdea_Titles")}
                                </div>
                            </div>

                            <div className='flex flex-col gap-[100px] lg:gap-0'>
                                <img src={Cus1} alt="" className='hidden md:block' data-aos="fade-up" data-aos-delay="600"/>
                                <img src={Cus1Mobile} alt="" className='block md:hidden w-full' data-aos="fade-up" data-aos-delay="600"/>

                                {/* web */}
                                <div className='hidden md:block'>
                                    {/* Text 2 */}
                                    <div className='relative md:top-[-250px] lg:top-[-300px]'  data-aos="fade-up" data-aos-delay="400">
                                        <div className="absolute left-0 top-36 md:text-2xl lg:text-4xl text-[#557AAA] font-normal text-right w-full">
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title2")}
                                            </div>
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title2s")}
                                            </div>
                                        </div>
                                        
                                    </div>

                                    {/* Explore */}
                                    <div className='hidden md:flex items-center justify-between ' data-aos="fade-up" data-aos-delay="600">
                                        <img src={Explore1} alt="Explore 1"/>
                                    </div>

                                    {/* Text 3 */}
                                    <div className='relative hidden md:block' data-aos="fade-up" data-aos-delay="400">
                                        <div className=' absolute left-0 md:top-[-100px] lg:top-[-150px] lg:w-[860px] md:text-2xl lg:text-4xl text-[#557AAA] font-normal text-left'>
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title3")}
                                            </div>
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title3s")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Emoji */}
                                    <div data-aos="fade-up" data-aos-delay="600">
                                        <img src={Emoji} alt="Explore 3" />
                                    </div>

                                    {/* Text4 */}
                                    <div className='relative' data-aos="fade-up" data-aos-delay="400">                    
                                        <div className="absolute md:bottom-[-460px] lg:bottom-[610px] md:text-2xl lg:text-4xl font-normla text-right text-[#557AAA] w-full">
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title4")}
                                            </div>
                                            <div className='leading-normal'>
                                                {t("Special.customizeIdea_Title4s")}
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                                
                                {/* mobile */}
                                <div className='flex flex-col md:hidden gap-[30px]'>
                                    <div className='text-[#557AAA] text-xl font-normal text-right'data-aos="fade-up">
                                        <div>{t("Special.customizeIdea_Title2M")}</div>
                                        <div>{t("Special.customizeIdea_Title2M2")}</div>
                                        <div>{t("Special.customizeIdea_Title2M3")}</div>
                                    </div>

                                    <div>
                                        <div className='relative' data-aos="fade-up" data-aos-delay="200">
                                            <div>
                                                <img src={Cus2Mobile} alt="" />
                                            </div>
                                            <div className='absolute bottom-[70px] w-full text-[#557AAA] text-xl font-normal text-left' data-aos="fade-up" data-aos-delay="200">
                                                <div>{t("Special.customizeIdea_Title3")}</div>
                                                <div>{t("Special.customizeIdea_Title3s")}</div>
                                            </div>
                                        </div>
                                        <div className='relative' data-aos="fade-up" data-aos-delay="400">
                                            <div className='flex justify-end'>
                                                <img src={Cus3Mobile} alt="" />
                                            </div>
                                            <div className='absolute text-[#557AAA] text-xl font-normal text-right bottom-[230px] right-0' data-aos="fade-up" data-aos-delay="400">
                                                <div>
                                                    {t("Special.customizeIdea_Title4")}
                                                </div>
                                                <div>
                                                    {t("Special.customizeIdea_Title4s")}
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
                                <div className="flex flex-col gap-[10px] lg:gap-5" data-aos="fade-up" data-aos-delay="200">
                                    <div className="text-base md:text-2xl lg:text-[32px] text-[#557AAA] font-normal md:font-medium leading-normal">{t("Special.preparing")}</div>
                                    {/* Web */}
                                    <div className="hidden md:block md:text-3xl lg:text-5xl text-[#153764] font-bold">
                                        <div className='leading-normal'>{t("Special.buildAwesome")}</div>
                                        <div className='leading-normal'>{t("Special.buildAwesome2")}</div>
                                    </div>
                                    {/* Mobile */}
                                    <div className="md:hidden text-2xl text-[#153764] font-bold leading-normal">
                                        <div>{t("Special.buildAwesomeMobile")}</div>
                                        <div>{t("Special.buildAwesomeMobile2")}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center"   data-aos="fade-up" data-aos-delay="400">
                                        <a
                                            href='creating'
                                            className="text-base md:text-xl lg:text-2xl text-[#153764] font-normal leading-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            {t("Special.creatingPage")}
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