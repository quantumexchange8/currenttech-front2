import React, { useState, useEffect } from 'react';
import {VerticalLine, AwesomeDesign, PowerfulFramwork, MobileFriendly, PremiumResources, SupportAndUpdate, Pos1, Pos2, Pos3, Pos4, Pos5, Pos6} from '../Components/Outline.jsx';
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import img_Education from "../Assets/Images/Home_Education.png"
import img_FoodBeverage from "../Assets/Images/Home_F&B.png"
import img_Wholesale from "../Assets/Images/Home_Wholesale.png"
import img_Logistic from "../Assets/Images/Home_Logistic.png"
import img_Enterprise from "../Assets/Images/Home_Enterprise.png"
import image5 from "../Assets/Images/Home/5.png";
import image6 from "../Assets/Images/Home/6.png";
import video1 from "../Assets/videos/Home/1.mp4";
import video2 from "../Assets/videos/Home/2.mp4";
import video3 from "../Assets/videos/Home/3.mp4";
import video4 from "../Assets/videos/Home/4.mp4";
import video5 from "../Assets/videos/Home/5.mp4";
import video6 from "../Assets/videos/Home/6.mp4";
import { useTranslation } from 'react-i18next';
import HomeSwiper from '../Components/HomeSwiper.jsx';
import HomeCircle from '../Components/HomeCircle.jsx';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';

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
          offset: 200,
        });
      }, []);

    return(
        <div className='flex flex-col w-full justify-center text-center gap-[250px] pb-[250px]'>
            <div className='flex flex-col w-full justify-center text-center gap-[200px]'>
                {/* Images */}
                <HomeSwiper />

                {/* MAKING YOUR IDEAS POSSIBLE */}
                <div className="flex flex-col items-center gap-[100px]">
                    <div data-aos="fade-up">
                        <VerticalLine />
                    </div>
                    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
                        <div className="flex flex-col gap-[50px] leading-tight">
                            <div className="flex flex-col gap-[10px]">
                                <div className="text-[32px] font-medium text-[#557AAA]" data-aos="fade-up">
                                    TECHNOLOGY DEFINES TOMORROW
                                </div>
                                <div className="text-5xl font-bold text-[#153764]" data-aos="fade-up" data-aos-delay="200">
                                    MAKING YOUR IDEAS POSSIBLE
                                </div>
                            </div>
                            <div className="text-2xl font-normal text-[#4B5563]">
                                <div className="fadeInText" data-aos="fade-up" data-aos-delay="400">
                                    Innovation and technology drive a prosperous future. With
                                </div>
                                <div className="fadeInText" data-aos="fade-up" data-aos-delay="600">
                                    intelligence, automation, and digitisation, industries transform.
                                </div>
                                <div className="fadeInText" data-aos="fade-up" data-aos-delay="800">
                                    Whether we embrace it or not, technology will reshape the future.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1000">
                        <VerticalLine />
                    </div>
                </div>

                {/* What We Do */}
                <div className="relative leading-tight">
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
                        <div className="flex justify-center items-center gap-[150px] text-sm font-normal text-[#D1D5DB]" data-aos="fade-up" data-aos-delay="400">
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
                <div className='flex flex-col items-center gap-[100px] leading-tight'>
                    <div data-aos="fade-up">
                        <VerticalLine />
                    </div>
                    
                    <div className='flex flex-col gap-[150px]'>
                        <div className='text-5xl font-bold text-[#153764]' data-aos="fade-up" data-aos-delay="200">
                            OUR CORE SERVICE
                        </div>

                        <div className="grid grid-cols-2 gap-x-[200px] gap-y-[150px]">
                            {/* Service 1 */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <video src={video1} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                    CMS SYSTEM
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Empower your business
                                    </div>
                                    <div>
                                        with bespoke software solutions.
                                    </div>
                                </div>
                            </div>
                            {/* Service 2 */}
                            <div data-aos="fade-up" data-aos-delay="800">
                                <video src={video2} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                    WEBSITE
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        We build websites end-to-end
                                    </div>
                                    <div>
                                        with precision from plan to backend.
                                    </div>
                                </div>
                            </div>
                            {/* Service 3 */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <video src={video3} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                MOBILE APPLICATIONS
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        We transform core ideas into
                                    </div>
                                    <div>
                                        innovative applications for mobile.
                                    </div>
                                </div>
                            </div>
                            {/* Service 4 */}
                            <div data-aos="fade-up" data-aos-delay="800">
                                <video src={video4} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                    HR MANAGEMENT SYSTEM
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Unlocks employee potential
                                    </div>
                                    <div>
                                        through intuitive dashboards.
                                    </div>
                                </div>
                            </div>
                            {/* Service 5 */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <video src={video5} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                    POS SYSTEM
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
                                    <div>
                                        Maximise your business, boosts
                                    </div>
                                    <div>
                                        productivity and customer satisfaction.
                                    </div>
                                </div>
                            </div>
                            {/* Service 6 */}
                            <div data-aos="fade-up" data-aos-delay="800">
                                <video src={video6} className='w-[500px] h-[500px]' />
                                <div className='text-2xl font-bold text-[#557AAA]'>
                                    SUPPORT & SERVICES
                                </div>
                                <div className='text-2xl font-normal text-[#4B5563]'>
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

                    <div data-aos="fade-up">
                        <VerticalLine />
                    </div>
                </div>

                {/* Sector Of Coverage */}
                <div className='flex flex-col gap-[200px]' data-aos="fade-up">
                    <div className='bg-[#D5E7FF] h-[500px] flex flex-col justify-center gap-[10px]'>
                        <div className='text-4xl font-normal text-[#557AAA]' data-aos="fade-up" data-aos-delay="200">
                            OUR UNIQUE PRODUCTS
                        </div>
                        <div className='text-[64px] font-bold tetxt-[#153764]' data-aos="fade-up" data-aos-delay="400">
                            SECTORS OF COVERAGE
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col justify-center gap-[60px] md:gap-[150px] max-w-[1200px]'>
                            {/* Education */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] justify-between'>
                                <img src={img_Education} alt="Education" className='w-[650px] h-[406px]'data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-base md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-semibold md:font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.educationImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#4B5563] text-sm md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col'>
                                            <div className="flex flex-col leading-normal text-left font-normal w-[353px] md:w-[500px]">
                                                {t("Home.ImgCombinationDescription.educationImgDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Food & Beverage */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] justify-between'>
                                <img src={img_FoodBeverage} alt="F&B" className='w-[650px] h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-base md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-semibold md:font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.F&BImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col text-left'>
                                            <div className="hidden md:flex flex-col font-normal w-[500px] leading-normal">
                                                {t("Home.ImgCombinationDescription.F&BImgDescription")}
                                            </div>

                                            <div className="md:hidden flex flex-col font-semibold w-[353px] leading-normal">
                                                <div className='block'>{t("Home.ImgCombinationDescription.F&BImgMobileDescription")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.F&BImgMobileDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Wholesale */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] justify-between'>
                                <img src={img_Wholesale} alt="Wholesale" className='w-[650px] h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-base md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-semibold md:font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.wholesaleImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col text-left'>
                                            <div className="hidden md:flex flex-col leading-normal font-normal w-[353px] md:w-[500px]">
                                                <div>
                                                    {t("Home.ImgCombinationDescription.wholesaleImgDescription")}
                                                </div>
                                                <div>
                                                    {t("Home.ImgCombinationDescription.wholesaleImgDescription2")}
                                                </div>
                                            </div>

                                            <div className="md:hidden flex flex-col leading-normal font-semibold w-[353px] md:w-[450px]">
                                                <div className='block'>{t("Home.ImgCombinationDescription.wholesaleImgMobileDescription")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.wholesaleImgMobileDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Logistic */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] justify-between'>
                                <img src={img_Logistic} alt="Logistic" className='w-[650px] h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-base md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-semibold md:font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.logisticImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex flex-col text-left'>
                                            <div className="flex flex-col leading-normal font-normal w-[353px] md:w-[500px]">
                                                <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Enterprise */}
                            <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] justify-between'>
                                <img src={img_Enterprise} alt="Enterprise" className='w-[650px] h-[406px]' data-aos="fade-up"/>
                                <div className='flex flex-col gap-[5px] md:gap-5'>
                                    <div className='text-black text-base md:text-[32px] text-left' data-aos="fade-up" data-aos-delay="200">
                                        <div className='flex flex-col font-semibold md:font-bold text-[#557AAA]'>
                                            {t("Home.ImgCombinationTitle.enterpriseImgTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-2xl' data-aos="fade-up" data-aos-delay="400">
                                        <div className='flex-flex-col text-left'>
                                            <div className="flex flex-col leading-normal font-normal w-[353px] md:w-full">
                                                {t("Home.ImgCombinationDescription.enterpriseImgDescription")}
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
                    <div>
                        <img src={image6} alt="Image 6" className='w-full object-cover h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[10px]'>
                        <div className='text-[32px] text-[#D1D5DB] font-normal' data-aos="fade-up" data-aos-delay="200"> 
                            WHY CHOOSE US
                        </div>
                        <div className='text-5xl text-[#D1D5DB] font-bold' data-aos="fade-up" data-aos-delay="400">
                            WE UNIQUE & DIFFERENT
                        </div>
                    </div>
                </div>

                {/* Circle */}
                <HomeCircle />

                {/* Our Mission */}
                <div className='flex flex-col justify-center items-center' data-aos="fade-up">
                    <div className='max-w-[1200px] flex flex-col gap-[250px]'>
                        <div className='flex flex-col gap-[30px] items-start text-start'>
                            <div className='text-5xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="200"> 
                                OUR MISSION
                            </div>
                            <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="400">
                                Build a tech-driven ROI model, redefining growth strategies with a professional approach. Activate innovation through unique resource integration and diverse collaborations for exceptional results.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='text-[32px] text-[#557AAA] font-medium' data-aos="fade-up" data-aos-delay="600">
                        NOTHING IS IMPOSSIBLE
                    </div>
                    <div className='text-5xl text-[#153764] font-bold' data-aos="fade-up" data-aos-delay="800">
                        DON’T LET HESITATION HOLD YOU BACK
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="1000">
                        <button 
                            className='w-[220px] text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'
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

            {/* Scroll To Top Button */}
            <div>
                <ScrollToTopButton />
            </div>
        </div>
    )
}
export default Home;