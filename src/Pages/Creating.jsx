import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import image1 from '../Assets/Images/Creating/1.png';
import imageM1 from '../Assets/Images/Creating/M1.png';
import Creating1 from '../Assets/Images/Creating/creating1.png';
import Creating2 from '../Assets/Images/Creating/creating2.png';
import Creating3 from '../Assets/Images/Creating/creating3.png';
import Creating4 from '../Assets/Images/Creating/creating4.png';
import Creating5 from '../Assets/Images/Creating/creating5.png';
import CreatingM1 from '../Assets/Images/Creating/creatingM1.png';
import CreatingM2 from '../Assets/Images/Creating/creatingM2.png';
import CreatingM3 from '../Assets/Images/Creating/creatingM3.png';
import CreatingM4 from '../Assets/Images/Creating/creatingM4.png';
import CreatingM5 from '../Assets/Images/Creating/creatingM5.png';
import AOS from 'aos'; 
import ScrollToTopButton from '../Components/ScrollToTopButton';
import { useTranslation } from 'react-i18next';


const Creating = () => {

    const [t, i18n] = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleContactUsClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleExplore = (type) => {
        navigate('/creating_explore', { state: { exploreType: type } });
      };

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
            offset: 200,
        });
    }, []);

    return (
        <div className="flex flex-col pt-[50px] md:pt-20 pb-[250px] w-full">
            <div className='flex flex-col gap-[150px] md:gap-[200px]'>
                {/* Top Image */}
                <div className='relative'>
                    <div><img src={image1} alt="" className='hidden xl:block w-full object-cover' /></div>
                    <div><img src={imageM1} alt="" className='xl:hidden w-full' /></div>
                    <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-16 text-center text-[32px] md:text-6xl xl:text-5xl xl:text-[64px] text-[#D1D5DB] font-light leading-normal'>
                        {t("Creating.pickWhat")}
                    </div>
                </div>
                {/* Title */}
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-[30px] text-center md:max-w-[1200px] md:w-auto'> 
                        {/* Web */}
                        <div className="hidden md:flex flex-col bg-text-gradient bg-clip-text text-transparent md:text-5xl font-normal leading-normal" data-aos="fade-up">
                            <div className='leading-normal'>
                                {t("Creating.powerhouse")}
                            </div>
                            <div className='leading-normal'>
                                {t("Creating.webAndApp")}
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className=" md:hidden flex flex-col bg-text-gradient bg-clip-text text-transparent text-[32px] md:text-5xl font-normal " data-aos="fade-up">
                            <div>
                                {t("Creating.powerhouseMobile")}
                            </div>
                            <div>
                                 {t("Creating.forYouMobile")}
                            </div>
                            <div>
                                {t("Creating.webAndAppMobile")}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className='flex flex-col justify-center items-center gap-[250px] md:px-5'>
                    {/* Creating */}
                    <div className='md:max-w-[1500px] md:w-auto flex flex-col items-center gap-[200px] md:gap-[300px] px-[25px] md:p-0'>
                        {/* 1 */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-[30px] xl:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <img src={Creating1} alt="" className='hidden md:block'/>
                                <img src={CreatingM1} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full xl:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] xl:w-[500px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="500">
                                        {t("Creating.e-commerce")}
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                        {t("Creating.unmatchedConvenience")}
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="700">
                                    <button onClick={() => handleExplore("E-COMMERCE")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        {t("Creating.exploreE-commerce")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-[30px] xl:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <img src={Creating2} alt="" className='hidden md:block'/>
                                <img src={CreatingM2} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full xl:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] xl:w-[500px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="300">
                                        {t("Creating.commercial")}
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal xl:w-[500px]' data-aos="fade-up" data-aos-delay="400">
                                        {t("Creating.commercialWebPage")}                            
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="500">
                                    <button onClick={() => handleExplore("COMMERCIAL")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        {t("Creating.exploreCommercial")} 
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-[30px] xl:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <img src={Creating3} alt=" " className='hidden md:block'/>
                                <img src={CreatingM3} alt=" " className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full xl:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] xl:w-[500px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="400">
                                        {t("Creating.cmsDashboard")}
                                    </div>
                                    {/* Web */}
                                    <div className='hidden md:block text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="500">
                                        {t("Creating.adminDashboard")}
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="500">
                                        <div>
                                            {t("Creating.adminDashboardMobile")}
                                        </div> 
                                        <div>
                                            {t("Creating.adminDashboardMobile2")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="600">
                                    <button onClick={() => handleExplore("CMSDASHBOARD")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        {t("Creating.exploreCMS")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-[30px] xl:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <img src={Creating4} alt="" className='hidden md:block'/>
                                <img src={CreatingM4} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full xl:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] xl:w-[500px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                        {t("Creating.investment")}
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                        {t("Creating.investmentWebsite")}
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="700">
                                    <button onClick={() => handleExplore("INVESTMENT")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        {t("Creating.exploreInvestment")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-[30px] xl:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="500">
                                <img src={Creating5} alt="" className='hidden md:block'/>
                                <img src={CreatingM5} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full xl:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] xl:w-[500px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="600">
                                        {t("Creating.digitalBoard")}
                                    </div>
                                    {/* Web */}
                                    <div className='hidden md:block text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="700">
                                        {t("Creating.fintechWebsite")}
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="700">
                                        <div>
                                            {t("Creating.fintechWebsiteMobile")}
                                        </div> 
                                        <div>
                                            {t("Creating.fintechWebsiteMobile2")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="800">
                                    <button onClick={() => handleExplore("DIGITALBOARD")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        {t("Creating.exploreDigitalBoard")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DISCOVER UNIQUE */}
                    <div className="flex flex-col justify-center items-center w-full px-[25px]">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-base md:text-[32px] text-[#557AAA] text-center font-medium leading-normal">{t("Creating.weDoMore")}</div>
                                    {/* Web */}
                                    <div className="hidden md:block text-5xl text-[#153764] font-bold leading-normal">
                                        <div>
                                            {t("Creating.noMatter")}
                                        </div>
                                        <div>
                                            {t("Creating.industry")}
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className="md:hidden flex flex-col items-center text-2xl text-[#153764] font-bold">
                                        <div>
                                            {t("Creating.noMatterMobile")}
                                        </div>
                                        <div>
                                            {t("Creating.industryMobile")}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            href='/products'
                                            className="w-auto text-base md:text-2xl text-[#153764] font-normal leading-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            {t("Creating.discoverUnique")}
                                        </a>
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
                    </div>
                </div>
                {/* Scroll To Top Button */}
                <div className='absolute bg-opacity-20'>
                    <ScrollToTopButton />
                </div>
            </div>
        </div>
    )
 }

 export default Creating;