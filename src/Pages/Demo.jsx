import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useState } from 'react';
import Demo_Teamwork from '../Assets/Images/demo_Teamwork.png'
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Ecommerce_1 from "../Assets/Images/E-commerce/aia.png";
import Ecommerce_2 from "../Assets/Images/E-commerce/furniture.png";
import Ecommerce_3 from "../Assets/Images/E-commerce/etrans.png";
import Ecommerce_4 from "../Assets/Images/E-commerce/neoncart.png";
import Ecommerce_5 from "../Assets/Images/E-commerce/onlinesale.png";
import Ecommerce_6 from "../Assets/Images/E-commerce/topico.png";
import Ecommerce_7 from "../Assets/Images/E-commerce/vue.png";
import Ecommerce_8 from "../Assets/Images/E-commerce/medsy.png";
import Cards from "../Components/Card"
import { useTranslation } from 'react-i18next';


const Demo = () => {
    const { t, i18n } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    //   E-commerce Dashboard
    const Ecom_images = 
    [
        Ecommerce_1, Ecommerce_2, Ecommerce_3, Ecommerce_4, Ecommerce_5, Ecommerce_6, Ecommerce_7, Ecommerce_8,
    ];
    const Ecom_links = [
        'https://ctweb-template1.currenttech.pro/',
        'https://ctweb-template2.currenttech.pro/',
        'https://ctweb-template3.currenttech.pro/', 
        'https://ctweb-template4.currenttech.pro/', 
        'https://ctweb-template5.currenttech.pro/',
        'https://ctweb-ecommerce-template.currenttech.pro/',
        'https://ctweb-ecommerce-template2.currenttech.pro/',
        'https://ctweb-ecommerce-template3.currenttech.pro/'
    ];

    const create_EcomCardData = (num) => ({
        image: Ecom_images[(num - 1) % Ecom_images.length],
        title: `e-Commerce Demo ${num}`,
        code: `EC36900${num}`,
        rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169,
               7293, 7650, 6294, 6192, 4412, 8511, 2915, 8491,
               5918, 7412, 4747, 2194, 111, 4991, 3192, 1749,
               9470, 1820, 3519, 5491, 6363, 6184, 6129, 1429,
               7412, 6720, 7439, 7812, 9287, 1441, 1298, 1094][num - 1],
        link: Ecom_links[(num - 1) % Ecom_links.length]
    });
        
    const Ecom_cardData = Array.from({ length: 8 }, (_, i) => create_EcomCardData(i + 1));

    const itemsPerPage = 20; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1); // Set initial page = 1
    const totalPages = Math.ceil(Ecom_cardData.length / itemsPerPage); //Calculates the total number of pages based on the number of images and items per page

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

    const currentCards = Ecom_cardData.slice(   // To calculate and get the current image for the specific page
        (currentPage - 1) * itemsPerPage,       // Start index
        currentPage * itemsPerPage              // End index
    );

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col max-w-[1000px] mt-[110px] md:mt-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0">
                <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col gap-[75px] md:gap-[150px]'>
                        <div className="flex flex-col gap-[75px] md:gap-[100px]">
                            <div className="flex flex-col gap-[20px] md:gap-[50px] items-center">
                                <div className='flex flex-col text-center items-center'>
                                    <div
                                        style={{
                                            background: 'linear-gradient(92deg, #F00 0%, #FF7A00 13.5%, #DBFF00 27.5%, #00FF0A 39%, #00DED0 52%, #0019FF 64%, #C0F 75%, #FF429D 89%, #000 97%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline',
                                        }}
                                    >
                                        {
                                            i18n.language === 'en' ? (
                                                <div className='text-2xl md:text-6xl font-bold w-[300px] md:w-[740px]'>
                                                    {t("Demo.DemoTitle")}
                                                </div>
                                            ) : (
                                                <div className='text-2xl md:text-6xl font-bold w-[200px] md:w-[480px]'>
                                                    {t("Demo.DemoTitle")}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                <div className="hidden md:flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold leading-[1.20] text-center w-[353px] md:w-[740px]">
                                    <div className="block">{t("Demo.DemoDescription")}</div>
                                    <div className="block">{t("Demo.DemoDescription2")}</div>
                                    <div className="block">{t("Demo.DemoDescription3")}</div>
                                </div>
                                
                                {/* Mobile Version */}
                                <div className="flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold leading-[1.20] text-center w-[353px] md:w-[740px] md:hidden">
                                    <div className="block">{t("Demo.Mobile_DemoDescription")}</div>
                                    <div className="block">{t("Demo.Mobile_DemoDescription2")}</div>
                                    <div className="block">{t("Demo.Mobile_DemoDescription3")}</div>
                                    <div className="block">{t("Demo.Mobile_DemoDescription4")}</div>
                                    <div className="block">{t("Demo.Mobile_DemoDescription5")}</div>
                                </div>
                            </div>

                            <div>
                                <img src={Demo_Teamwork} alt="Teamwork_Image" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[50px]'>
                            <div className='flex flex-col gap-[30px] md:gap-[20px]'>
                                <div className='w-full h-[1px] bg-[#666]'></div>

                                <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                    <div className='text-xl md:text-[32px] font-bold text-center'>
                                        <div style={{
                                            background: 'linear-gradient(90deg, #000AFF 0%, #00A3FF 37%, #008D0E 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline'
                                        }}
                                        >
                                            {t("Demo.DemoTheme.e-CommerceTitle")}
                                        </div>
                                    </div>

                                    <div className='hidden md:flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold text-center leading-[1.20] w-[740px]'>
                                        <div className="block">{t("Demo.DemoTheme.e-CommerceDescription")}</div>
                                        <div className="block">{t("Demo.DemoTheme.e-CommerceDescription2")}</div>
                                        <div className="block">{t("Demo.DemoTheme.e-CommerceDescription3")}</div>
                                    </div>

                                    {/* Mobile Version */}
                                    <div className='flex flex-col text-[#666] text-sm md:text-xl font-semibold md:font-bold text-center leading-[1.20] w-[353px] md:hidden'>
                                        <div className="block">{t("Demo.DemoTheme.Mobile_e-CommerceDescription")}</div>
                                        <div className="block">{t("Demo.DemoTheme.Mobile_e-CommerceDescription2")}</div>
                                        <div className="block">{t("Demo.DemoTheme.Mobile_e-CommerceDescription3")}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className="flex flex-wrap gap-[10px] justify-center">
                                    {currentCards.map((card, index) => (
                                        <Cards 
                                            key={index}
                                            card={card}
                                            index={index}
                                            handleButtonClick={handleButtonClick}
                                        />
                                    ))}
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
                                    {t("Demo.demoReminderTitle")}
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-[32px] text-left leading-[1.20]'>
                                    <div className='font-semibold md:w-[1000px]'>
                                        {t("Demo.demositeReminderDescription")}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div 
                                    className='hidden md:flex flex-col items-start md:gap-10'>
                                    <div className='flex flex-row'>
                                        <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                            <div 
                                                className='flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px]'>
                                                <WhatsApp/>
                                            </div>
                                            <div className='flex flex-col text-[#666] text-2xl text-left'>
                                                <div className="flex flex-col leading-[1.20] font-semibold w-[300px]">
                                                    <div className='hidden md:flex'>{t("Home.whatsappDescription")}</div>
                                                    <div className='hidden md:flex'>{t("Home.whatsappDescription2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row'>
                                        <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                            <div 
                                                className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px] cursor-pointer'>
                                                <Gmail/> 
                                            </div>
                                            <div className='flex flex-col text-[#666] text-2xl text-left'>
                                                <div className="flex flex-col leading-[1.20] font-semibold w-[400px]">
                                                    <div className='hidden md:flex'>{t("Home.gmailDescription")}</div>
                                                    <div className='hidden md:flex'>{t("Home.gmailDescription2")}</div>
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
                                                <div className="flex flex-col leading-[1.20] text-left font-semibold w-[190px]">
                                                    <div className='block'>{t("Home.whatsappDescriptionMobile")}</div>
                                                    <div className='block'>{t("Home.whatsappDescriptionMobile2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row'>
                                        <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                            <div 
                                                className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'
                                                onClick={() => handleButtonClick('gmail')}>
                                                <MobileGmail/>
                                            </div>
                                            <div className='flex flex-col text-[#666] text-sm'>
                                                <div className="flex flex-col leading-[1.20] text-left font-semibold w-[220px]">
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
                <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton} />
            </div>
        </div>
    )
}

export default Demo;
