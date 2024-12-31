import React, { useState, useEffect } from 'react';
import {VerticalLine, AwesomeDesign, PowerfulFramwork, MobileFriendly, PremiumResources, SupportAndUpdate, Pos1M, Pos2M, Pos3M, Pos4M, Pos5M, Pos6M, VerticalLineM} from '../Components/Outline.jsx';
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import img_Education from "../Assets/Images/Home_Education.png"
import img_FoodBeverage from "../Assets/Images/Home_F&B.png"
import img_Wholesale from "../Assets/Images/Home_Wholesale.png"
import img_Logistic from "../Assets/Images/Home_Logistic.png"
import img_Enterprise from "../Assets/Images/Home_Enterprise.png"
import image5 from "../Assets/Images/Home/5.png";
import image6 from "../Assets/Images/Home/6.png";
import imageM1 from "../Assets/Images/Home/M1.png";
import imageM2 from "../Assets/Images/Home/M2.png";
import { useTranslation } from 'react-i18next';
import HomeSwiper from '../Components/HomeSwiper.jsx';
import HomeCircle from '../Components/HomeCircle.jsx';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';
import { Player } from '@lottiefiles/react-lottie-player';
import Website from "../Assets/Lottie/web-development.json";
import Support from "../Assets/Lottie/advertising-strategy.json";
import Hr from "../Assets/Lottie/business-recruiting.json";
import CMS from "../Assets/Lottie/digital-marketing.json";
import Pos from "../Assets/Lottie/online-shopping.json";
import Mobile from "../Assets/Lottie/social-network.json";

const Home = () => {

    const { t, i18n } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactUsClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,  
          offset: 100,
        });
      }, []);

    return(
        <div className='flex flex-col w-full justify-center gap-[250px] pb-[250px]'>
            <div className='flex flex-col w-full justify-center text-center gap-[150px] md:gap-[200px]'>
                {/* Images */}
                <HomeSwiper />

                {/* MAKING YOUR IDEAS POSSIBLE */}
                <div className="flex flex-col items-center gap-[100px] px-[25px] md:p-0">
                    <div className='hidden md:block' data-aos="fade-up">
                        <VerticalLine />
                    </div>
                    <div className='md:hidden' data-aos="fade-up">
                        <VerticalLineM />
                    </div>
                    <div className="w-wull max-w-[1200px] flex flex-col items-center">
                        <div className="flex flex-col gap-[30px] md:gap-[50px]">
                            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-base md:text-[32px] font-normal md:font-medium text-[#557AAA] leading-normal">
                                    TECHNOLOGY DEFINES TOMORROW
                                </div>
                                <div className="text-xl md:text-5xl font-bold text-[#153764] leading-normal">
                                    MAKING YOUR IDEAS POSSIBLE
                                </div>
                            </div>
                            {/* Website Description */}
                            <div className="hidden md:block text-2xl font-normal text-[#4B5563]" data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    Innovation and technology drive a prosperous future. With
                                </div>
                                <div>
                                    intelligence, automation, and digitisation, industries transform.
                                </div>
                                <div>
                                    Whether we embrace it or not, technology will reshape the future.
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className='md:hidden text-base text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    Innovation and technology drive a
                                </div>
                                <div>
                                    prosperous future. With intelligence, 
                                </div>
                                <div>
                                    automation, and digitisation, industries 
                                </div>
                                <div>
                                    transform. Whether we embrace it or not, 
                                </div>
                                <div>
                                    technology will reshape the future.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block' data-aos="fade-up" data-aos-delay="200">
                        <VerticalLine />
                    </div>
                    <div className='md:hidden' data-aos="fade-up" data-aos-delay="200">
                        <VerticalLineM />
                    </div>
                </div>

                {/* What We Do (Website) */}
                <div className="hidden md:block relative leading-tight">
                    {/* Background Image */}
                    <div data-aos="fade-up">
                        <img src={image5} alt="Image 5" className="w-full h-[500px] object-cover" />
                    </div>

                    {/* Centered Content */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[50px]">
                        {/* Main Title */}
                        <div className="text-center text-5xl font-bold text-[#D1D5DB] leading-tight" data-aos="fade-up" data-aos-delay="200">
                            WHAT WE DO
                        </div>

                        {/* Icons Section */}
                        <div className="flex justify-center items-center gap-[150px] text-sm font-normal text-[#D1D5DB]" data-aos="fade-up" data-aos-delay="200">
                            {/* Icon 1 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <AwesomeDesign />
                                <div>
                                    <div>
                                        AWESOME 
                                    </div>
                                    <div>
                                        DESIGN
                                    </div>
                                </div>
                            </div>
                            {/* Icon 2 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <PowerfulFramwork />
                                <div>
                                    <div>
                                        POWERFUL
                                    </div>
                                    <div>
                                        FRAMEWORK
                                    </div>
                                </div>
                            </div>
                            {/* Icon 3 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <MobileFriendly />
                                <div>
                                    <div>
                                        MOBILE
                                    </div>
                                    <div>
                                        FRIENDLY
                                    </div>
                                </div>
                            </div>
                            {/* Icon 4 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <PremiumResources />
                                <div>
                                    <div>
                                        PREMIUM
                                    </div>
                                    <div>
                                        RESOURCES
                                    </div>
                                </div>
                            </div>
                            {/* Icon 5 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <SupportAndUpdate />
                                <div>
                                    <div>
                                        SUPPORT
                                    </div>
                                    <div>
                                        & UPDATE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Do (Mobile)*/}
                <div className="md:hidden leading-tight">
                    {/* Background Image */}
                    <div data-aos="fade-up">
                        <img src={imageM1} alt="Image 5" className="w-full h-[1020px]" />
                    </div>

                    {/* Centered Content */}
                    <div className="absolute top-[2358px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[50px] p-[100px]">
                        {/* Main Title */}
                        <div className="text-center text-2xl font-bold text-[#D1D5DB] leading-tight">
                            WHAT WE DO
                        </div>

                        {/* Icons Section */}
                        <div className="flex flex-col justify-center items-center gap-[50px] text-base font-normal text-[#D1D5DB]" data-aos="fade-up">
                            {/* Icon 1 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <AwesomeDesign />
                                <div>
                                    <div>
                                        AWESOME 
                                    </div>
                                    <div>
                                        DESIGN
                                    </div>
                                </div>
                            </div>
                            {/* Icon 2 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <PowerfulFramwork />
                                <div>
                                    <div>
                                        POWERFUL
                                    </div>
                                    <div>
                                        FRAMEWORK
                                    </div>
                                </div>
                            </div>
                            {/* Icon 3 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <MobileFriendly />
                                <div>
                                    <div>
                                        MOBILE
                                    </div>
                                    <div>
                                        FRIENDLY
                                    </div>
                                </div>
                            </div>
                            {/* Icon 4 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <PremiumResources />
                                <div>
                                    <div>
                                        PREMIUM
                                    </div>
                                    <div>
                                        RESOURCES
                                    </div>
                                </div>
                            </div>
                            {/* Icon 5 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <SupportAndUpdate />
                                <div>
                                    <div>
                                        SUPPORT
                                    </div>
                                    <div>
                                        & UPDATE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Core Service */}
                <div className='flex flex-col items-center gap-[100px] leading-tight px-[25px] md:p-0'>
                    <div className='hidden md:block' data-aos="fade-up">
                        <VerticalLine />
                    </div>
                    <div className='md:hidden' data-aos="fade-up">
                        <VerticalLineM />
                    </div>
                    
                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-xl md:text-5xl font-bold text-[#153764]' data-aos="fade-up" data-aos-delay="200">
                            OUR CORE SERVICE
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[200px] gap-y-[100px] md:gap-y-[150px]">
                            {/* Service 1 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                <Player
                                    autoplay
                                    loop
                                    src={CMS} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video1} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    CMS SYSTEM
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Empower your business
                                    </div>
                                    <div>
                                        with bespoke software solutions.
                                    </div>
                                </div>
                            </div>
                            {/* Service 2 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="800">
                                <Player
                                    autoplay
                                    loop
                                    src={Website} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video2} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    WEBSITE
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        We build websites end-to-end
                                    </div>
                                    <div>
                                        with precision from plan to backend.
                                    </div>
                                </div>
                            </div>
                            {/* Service 3 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                <Player
                                    autoplay
                                    loop
                                    src={Mobile} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video3} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    MOBILE APPLICATIONS
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        We transform core ideas into
                                    </div>
                                    <div>
                                        innovative applications for mobile.
                                    </div>
                                </div>
                            </div>
                            {/* Service 4 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="800">
                                <Player
                                    autoplay
                                    loop
                                    src={Hr} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video4} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    HR MANAGEMENT SYSTEM
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Unlocks employee potential
                                    </div>
                                    <div>
                                        through intuitive dashboards.
                                    </div>
                                </div>
                            </div>
                            {/* Service 5 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                <Player
                                    autoplay
                                    loop
                                    src={Pos} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video5} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    POS SYSTEM
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Maximise your business, boosts
                                    </div>
                                    <div>
                                        productivity and customer satisfaction.
                                    </div>
                                </div>
                            </div>
                            {/* Service 6 */}
                            <div className='flex flex-col justify-center items-center md:gap-[10px]' data-aos="fade-up" data-aos-delay="800">
                                <Player
                                    autoplay
                                    loop
                                    src={Support} // Pass the Lottie JSON file
                                    className='md:w-[500px] md:h-[500px]' // Set dimensions
                                />
                                {/* <video src={video6} className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' /> */}
                                <div className='text-base md:text-2xl font-bold text-[#557AAA]'>
                                    SUPPORT & SERVICES
                                </div>
                                <div className='text-base md:text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Ensuring your systems operate
                                    </div>
                                    <div>
                                        at peak performance and efficiency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block' data-aos="fade-up">
                        <VerticalLine />
                    </div>
                    <div className='md:hidden' data-aos="fade-up">
                        <VerticalLineM />
                    </div>
                </div>

                {/* Sector Of Coverage */}
                <div className='flex flex-col gap-[150px] md:gap-[200px]' data-aos="fade-up">
                    {/* Title */}
                    <div className='bg-[#D5E7FF] h-auto flex flex-col justify-center gap-[10px] py-[62px] md:py-[170px] px-[60px] md:px-[485px]'>
                        <div className='flex justify-center text-xl md:text-4xl font-normal text-[#557AAA] leading-normal' data-aos="fade-up" data-aos-delay="200">
                            OUR UNIQUE PRODUCTS
                        </div>
                        <div className='flex justify-center text-2xl md:text-[64px] font-bold text-[#153764] leading-normal' data-aos="fade-up" data-aos-delay="400">
                            SECTORS OF COVERAGE
                        </div>
                    </div>

                    {/* Sectors */}
                    <div className='flex justify-center items-center px-[25px] md:p-0'>
                        <div className='flex flex-col justify-center gap-[150px] max-w-[1200px]'>
                            {/* Education */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] text-left'>
                                <img src={img_Education} alt="Education" className='object-cover h-[238px] md:h-[406px]'data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-xl md:text-[32px]' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.educationImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#4B5563] text-base md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col'>
                                            <div className="flex flex-col leading-normal font-normal w-full">
                                                <div className='hidden md:block'>
                                                    {t("Home.ImgCombinationDescription.educationImgDescription")}
                                                </div>
                                                <div className='md:hidden'>
                                                    <div>
                                                        {t("Home.ImgCombinationDescription.educationImgDescriptionM")}
                                                    </div>
                                                    <div>
                                                        {t("Home.ImgCombinationDescription.educationImgDescriptionM2")}
                                                    </div>
                                                    <div>
                                                        {t("Home.ImgCombinationDescription.educationImgDescriptionM3")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Food & Beverage */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] text-left'>
                                <img src={img_FoodBeverage} alt="F&B" className='object-cover h-[238px] md:h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5 text-left'>
                                    <div className='text-black text-xl md:text-[32px]' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-bold text-[#557AAA] text-left'>
                                            {t("Home.ImgCombinationTitle.F&BImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#4B5563] text-base md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col'>
                                            {/* Web */}
                                            <div className="hidden md:flex flex-col font-normal leading-normal">
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescription")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescription2")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescription3")}
                                                </div>
                                            </div>
                                            {/* Mobile */}
                                            <div className="md:hidden flex flex-col font-normal leading-normal">
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescriptionMobile")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescriptionMobile2")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.F&BImgDescriptionMobile3")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Wholesale */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] text-left'>
                                <img src={img_Wholesale} alt="Wholesale" className='object-cover h-[238px] md:h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-xl md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.wholesaleImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#4B5563] text-base md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col text-left'>
                                            <div className="flex flex-col leading-normal font-normal ">
                                                <div>
                                                    {t("Home.ImgCombinationDescription.wholesaleImgDescription")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.wholesaleImgDescription2")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.wholesaleImgDescription3")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Logistic */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] text-left'>
                                <img src={img_Logistic} alt="Logistic" className='object-cover h-[238px] md:h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-xl md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.logisticImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#4B5563] text-base md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex flex-col text-left'>
                                            <div className="flex flex-col leading-normal font-normal ">
                                                <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription2")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription3")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Enterprise */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] text-left'>
                                <img src={img_Enterprise} alt="Enterprise" className='object-cover h-[238px] md:h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-xl md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.enterpriseImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-base md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col text-left'>
                                            <div className="flex flex-col leading-normal font-normal w-[353px] md:w-full">
                                                <div>{t("Home.ImgCombinationDescription.enterpriseImgDescription")}</div>
                                                <div>{t("Home.ImgCombinationDescription.enterpriseImgDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* We Unique & Different */}
                <div className='relative' data-aos="fade-up">
                    <div className='hidden md:flex'>
                        <img src={image6} alt="Image 6" className='w-full object-cover h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                    <div className='md:hidden'>
                        <img src={imageM2} alt="Image 6" className='w-full object-cover h-[200px]' data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[10px] px-[45px] md:px-0 py-[62px] md:py-0'>
                        <div className='text-xl md:text-[32px] text-[#D1D5DB] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200"> 
                            WHY CHOOSE US
                        </div>
                        <div className='text-2xl md:text-5xl text-[#D1D5DB] font-bold leading-normal' data-aos="fade-up" data-aos-delay="400">
                            WE UNIQUE & DIFFERENT
                        </div>
                    </div>
                </div>

                {/* Circle */}
                {/* Web */}
                <div className='hidden md:block'>
                    <HomeCircle />
                </div>
                {/* Mobile */}
                <div className='md:hidden flex justify-center px-[25px]' data-aos="fade-up" data-aos-delay="200">
                    {/* vertical line */}
                    <div>
                        <div className='absolute h-[1135px] w-[1px] bg-[#153764] ml-[35px]' />
                    </div>
                    {/* content */}
                    <div className='relative top-0'>
                        <div className='flex flex-col gap-[90px]' data-aos="fade-up" data-aos-delay="200">
                            {/* 1 */}
                            <div className='flex gap-5'>
                                <Pos1M />
                                <div className='flex flex-col gap-[10px] bg-[#E5E7EB] rounded-[10px] p-5 text-left w-full'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        POS SYSTEM
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div className='flex gap-1'>
                                            With over <div className='text-[#374151] font-medium'>400+</div> premium retail 
                                        </div>
                                        <div>
                                            clients using our POS system.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className='flex gap-5'>
                                <Pos2M />
                                <div className='flex flex-col gap-[10px] bg-[#E5E7EB] rounded-[10px] p-4 text-left w-full'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        HR & CMS SYSTEM
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div>
                                            Our management system supports 
                                        </div>
                                        <div className='flex gap-1'>
                                            over <div className='text-[#374151] font-medium'>30+</div> traditional industry firms
                                        </div>
                                        <div>
                                             and brokerages.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='flex gap-5'>
                                <Pos3M />
                                <div className='flex flex-col gap-[10px] bg-[#E5E7EB] rounded-[10px] p-5 text-left w-full'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        STOCKS CONTROL
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div>
                                            Wine & alcohol storage system
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className='text-[#374151] font-medium'>amazes</div> bars and venues, easing
                                        </div>
                                        <div>
                                            record-keeping hassles.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className='flex gap-5'>
                                <Pos4M />
                                <div className='flex flex-col gap-[10px] bg-[#E5E7EB] rounded-[10px] p-5 text-left w-full'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        FOOD ORDERING
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div className='flex gap-1'> 
                                            Food ordering system <div className='text-[#374151] font-medium'>impresses </div>
                                        </div>
                                        <div>
                                            restaurants and cafes, simplifying order management effortlessly.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className='flex gap-5'>
                                <Pos5M />
                                <div className='flex flex-col gap-[10px] bg-[#E5E7EB] rounded-[10px] p-5 text-left w-full'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        e-INVOICE
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div className='flex gap-1'>
                                            Our e-Invoice system, <div className='text-[#374151] font-medium'>certified</div> 
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className='text-[#374151] font-medium'>by LHDN. </div>streamlining invoicing
                                        </div>
                                        <div>
                                            processes and ensuring compliance effortlessly.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <Pos6M />
                                <div className='bg-[#E5E7EB] rounded-[10px] p-4 text-left w-[250px]'>
                                    <div className='text-base text-[#153764] font-bold'>
                                        FOREX LABEL SOLUTION
                                    </div>
                                    <div className='text-sm text-[#4B5563] font-normal'>
                                        <div className='flex gap-1'>
                                            Over <div className='text-[#374151] font-medium'>10+ brokerages</div> have gained 
                                        </div>
                                        <div>
                                            licensing and are operational through our Label solution.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Mission */}
                <div className='flex flex-col justify-center items-center px-[25px] md:p-0' data-aos="fade-up">
                    <div className='max-w-[1200px] flex flex-col gap-[250px]'>
                        <div className='flex flex-col gap-[10px] md:gap-[30px] items-start text-start'>
                            <div className='text-xl md:text-5xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="200"> 
                                OUR MISSION
                            </div>
                            <div className='hidden md:block text-base md:text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="400">
                                <div className="leading-normal">
                                    Build a tech-driven ROI model, redefining growth strategies with a professional
                                </div>
                                <div className="leading-normal">
                                     approach. Activate innovation through unique resource integration and diverse 
                                </div>
                                <div className="leading-normal">
                                    collaborations for exceptional results.
                                </div>
                            </div>
                            <div className='md:hidden text-base text-[#4B5563] font-normal'>
                                <div>
                                    Build a tech-driven ROI model, redefining growth strategies with a professional
                                </div>
                                <div>
                                    approach. Activate innovation through unique resource integration and diverse collaborations for exceptional results.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div className="flex justify-center">
                <div className='flex flex-col gap-[50px] max-w-[1200px]'>
                    <div className='flex flex-col items-center gap-[10px]'>
                        <div className='text-xl md:text-[32px] text-[#557AAA] font-normal md:font-medium leading-normal' data-aos="fade-up" data-aos-delay="600">
                            NOTHING IS IMPOSSIBLE
                        </div>
                        <div className='hidden md:block text-5xl text-[#153764] font-bold leading-normal' data-aos="fade-up" data-aos-delay="800">
                            DON’T LET HESITATION HOLD YOU BACK
                        </div>
                        <div className='md:hidden text-2xl text-[#153764] font-bold' data-aos="fade-up" data-aos-delay="800">
                            <div className="leading-normal">
                                DON’T LET HESITATION 
                            </div>
                            <div className="leading-normal">
                                HOLD YOU BACK
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="1000">
                            <button 
                                className='w-auto text-base md:text-2xl text-[#153764] font-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] leading-normal'
                                onClick={handleContactUsClick}  
                            >
                                CONTACT US
                            </button>
                        </div>

                        <Modal 
                            open={isModalOpen} 
                            onClose={closeModal} 
                            title="Contact Us"
                            content="Please enter your details to get in touch with us." 
                            selectedButton="gmail" 
                        />
                    </div>
                </div>
            </div>

            {/* Scroll To Top Button */}
            <div className='absolute'>
                <ScrollToTopButton />
            </div>
        </div>
    )
}
export default Home;