import React, { useContext, useState } from 'react';
import Demo_Teamwork from '../Assets/Images/demo_Teamwork.png'
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Ecommerce_1 from "../Assets/Images/Ecom_1.svg"
import Hover from "../Components/Hover.jsx"

const Demo = () => {
    const { t, language } = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const imageDetails = [
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse1", code: "EC369001", rate: 1264 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse2", code: "EC369002", rate: 1045 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse3", code: "EC369003", rate: 2014 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse4", code: "EC369004", rate: 1941 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse5", code: "EC369005", rate: 857 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse6", code: "EC369006", rate: 990 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse7", code: "EC369007", rate: 1004 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse8", code: "EC369008", rate: 2000 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse9", code: "EC369009", rate: 400 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse10", code: "EC369010", rate: 5003 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse11", code: "EC369011", rate: 1990 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse12", code: "EC369012", rate: 1152 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse13", code: "EC369013", rate: 2582 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse14", code: "EC369014", rate: 3331 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse15", code: "EC369015", rate: 5120 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse16", code: "EC369016", rate: 2156 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse17", code: "EC369017", rate: 4829 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse18", code: "EC369018", rate: 3160 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse19", code: "EC369019", rate: 2144 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse20", code: "EC369020", rate: 1529 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse21", code: "EC369021", rate: 3241 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse22", code: "EC369022", rate: 4473 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse23", code: "EC369023", rate: 3166 },
        { src: Ecommerce_1, name: "e-Commerce ShoeHouse24", code: "EC369024", rate: 1526 },
        // Add more objects for each image
    ];

    const itemsPerPage = 8; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1); // Set initial page = 1
    const totalPages = Math.ceil(imageDetails.length / itemsPerPage); //Calculates the total number of pages based on the number of images and items per page

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber); // Set the current page to the clicked page number
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentImages = imageDetails.slice(   // To calculate and get the current image for the specific page
        (currentPage - 1) * itemsPerPage,       // Start index
        currentPage * itemsPerPage              // End index
    );

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col max-w-[1000px] mt-[110px] md:mt-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0">
                <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col gap-[75px] md:gap-[150px]'>
                        <div className="flex flex-col gap-[75px] md:gap-[100px]">
                            <div className="flex flex-col gap-[20px] md:gap-[50px]">
                                <div className='flex flex-col text-2xl md:text-6xl font-bold text-center'>
                                    <div
                                        style={{
                                            background: 'linear-gradient(92deg, #F00 0%, #FF7A00 13.5%, #DBFF00 27.5%, #00FF0A 39%, #00DED0 52%, #0019FF 64%, #C0F 75%, #FF429D 89%, #000 97%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline'
                                        }}
                                    >
                                        The Powerhouse for Your Web and App Needs
                                    </div>
                                </div>

                                <div className="flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold leading-[1.20] text-center">
                                    Welcome to the realm of innovative and transformative web and app
                                    development. Exciting and captivating designs are all centered around user
                                    experience, enhancing your digital presence. Harness our expert solutions
                                    to unlock the potential of your online business.
                                </div>
                            </div>

                            <div>
                                <img src={Demo_Teamwork} alt="Teamwork_Image" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[50px]'>
                            <div className='flex flex-col gap-[30px] md:gap-[20px]'>

                                <div className='w-full h-[1px] bg-[#666]'></div>

                                <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                    <div className='text-xl md:text-[32px] font-bold text-center'>
                                        <div style={{
                                            background: 'linear-gradient(90deg, #000AFF 0%, #00A3FF 37%, #008D0E 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline'
                                        }}
                                        >
                                            e-Commerce Demo
                                        </div>
                                    </div>

                                    <div className='flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold text-center leading-[1.20]'>
                                        Unlock the ultimate potential of your online presence with our
                                        premium web template products! Stay on the cutting edge with trending
                                        designs, unrivalled functionality, and seamless customisation options.
                                        Elevate your website today!
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex flex-row overflow-x-auto'>
                                    <div className='flex flex-wrap gap-[20px] md:gap-[26px] overflow-auto justify-center'>
                                        {currentImages.map((imgDetail, index) => (
                                            <div className="relative group flex-shrink-0" key={index}>
                                                <img
                                                    src={imgDetail.src}
                                                    alt={`E-commerce ${index + 1}`}
                                                    className="w-[150px] md:w-full h-[180px] md:h-full object-cover"
                                                />
                                                <Hover name = {imgDetail.name} code = {imgDetail.code} rate = {imgDetail.rate}></Hover>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='flex justify-end gap-[15px] md:gap-[30px]'>
                                    <div
                                        className={`text-[#666] text-sm md:text-xl font-medium ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                        onClick={handlePrevious}
                                    >
                                        Previous
                                    </div>
                                    <div className='flex text-[#0038FF] text-sm md:text-xl font-medium gap-[15px] md:gap-[20px]'>
                                        {[...Array(totalPages)].map((_, index) => (
                                            <div
                                                key={index}
                                                className={`cursor-pointer ${currentPage === index + 1 ? 'font-bold underline' : ''}`}
                                                onClick={() => handleClick(index + 1)}
                                            >
                                                {index + 1}
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className={`text-[#0038FF] text-sm md:text-xl font-medium ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                        onClick={handleNext}
                                    >
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-col gap-5 md:gap-[30px]'>
                                <div className='text-base md:text-5xl font-bold text-left'>
                                    {t("Products.productsReminderTitle")}
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-[32px] text-left leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-semibold md:w-[1000px]' :
                                        language === 'zh' ? 'font-semibold md:w-[1000px]' :
                                            language === 'bm' ? 'font-semibold w-[353px] md:w-[950px]' : ''}`}>
                                        {t("Products.productsReminderDescription")}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className='hidden md:flex flex-col gap-[30px] md:gap-[50px]'>
                                    <div className='flex flex-row'>
                                        <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                            <div
                                                className='flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px]'>
                                                <WhatsApp />
                                            </div>
                                            <div className='flex flex-col text-[#666] text-2xl text-left'>
                                                <div className="flex flex-col leading-[1.20]">
                                                    <div className={`${language === 'en' ? 'font-semibold w-[190px] md:w-[300px]' :
                                                        language === 'zh' ? 'font-semibold w-[168px]' :
                                                            language === 'bm' ? 'font-semibold w-[330px]' : ''}`}>
                                                        <div className='hidden md:flex'>{t("Home.whatsappDescription")}</div>
                                                        <div className='hidden md:flex'>{t("Home.whatsappDescription2")}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row'>
                                        <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                            <div
                                                className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px] cursor-pointer'>
                                                <Gmail />
                                            </div>
                                            <div className='flex flex-col text-[#666] text-2xl text-left'>
                                                <div className="flex flex-col leading-[1.20]">
                                                    <div className={`${language === 'en' ? 'font-semibold w-[170px] md:w-[300px]' :
                                                        language === 'zh' ? 'font-semibold w-[229px]' :
                                                            language === 'bm' ? 'font-semibold w-[350px]' : ''}`}>
                                                        <div className='hidden md:flex'>{t("Home.gmailDescription")}</div>
                                                        <div className='hidden md:flex'>{t("Home.gmailDescription2")}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Version */}
                                <div
                                    className='flex flex-col items-left gap-5 md:hidden'>
                                    <div className='flex flex-row'>
                                        <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                            <div
                                                className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'>
                                                <MobileWhatsApp />
                                            </div>
                                            <div className='flex flex-col text-[#666] text-sm'>
                                                <div className="flex flex-col leading-[1.20] text-left">
                                                    <div className={`${language === 'en' ? 'w-[190px] font-semibold' :
                                                        language === 'zh' ? 'font-semibold' :
                                                            language === 'bm' ? 'font-medium' : ''}`}>
                                                        <div className='block'>{t("Home.whatsappDescriptionMobile")}</div>
                                                        <div className='block'>{t("Home.whatsappDescriptionMobile2")}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row'>
                                        <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                            <div
                                                className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'>
                                                <MobileGmail />
                                            </div>
                                            <div className='flex flex-col text-[#666] text-sm'>
                                                <div className="flex flex-col leading-[1.20] text-left">
                                                    <div className={`${language === 'en' ? 'w-[190px] font-semibold' :
                                                        language === 'zh' ? 'font-semibold' :
                                                            language === 'bm' ? 'font-medium' : ''}`}>
                                                        <div className='block'>{t("Home.gmailDescriptionMobile")}</div>
                                                        <div className='block'>{t("Home.gmailDescriptionMobile2")}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton} />
            </div>
        </div>
    )
}

export default Demo;
