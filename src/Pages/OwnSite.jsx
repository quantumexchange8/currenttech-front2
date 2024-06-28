import React, { useContext, useState } from "react";
import { LanguageContext } from "../LanguagesContext";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import Modal from "../Components/Modal";
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from "../Components/Brand.jsx";
import { MoreButton } from "../Components/Outline.jsx";
import Ecommerce_1 from "../Assets/Images/Ecom_1.svg";
import Ecommerce_2 from "../Assets/Images/Ecom_2.svg";
import Cards from "../Components/Card"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OwnSite = () => {
  const location = useLocation();
  const { t, language } = useContext(LanguageContext);
  const [openButton, setOpenButton] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setOpenButton(true);
    setSelectedButton(button);
  };

//   E-commerce Dashboard
    const Ecom_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];

    const create_EcomCardData = (num) => ({
        image: Ecom_images[(num - 1) % Ecom_images.length],
        title: `e-Commerce ShoeHouse ${num}`,
        code: `EC36900${num}`,
        rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169][num - 1],
        link: "/demo"
    });
        
    const Ecom_cardData = Array.from({ length: 8 }, (_, i) => create_EcomCardData(i + 1));

    // Commercial Dashboard
    const Com_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];

    const create_ComCardData = (num) => ({
        image: Com_images[(num - 1) % Com_images.length],
        title: `e-Commerce ShoeHouse ${num}`,
        code: `EC36900${num}`,
        rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169][num - 1],
        link: "/demo"
      });
        
        const Com_cardData = Array.from({ length: 8 }, (_, i) => create_ComCardData(i + 1));

    // Admin Dashboard
    const Admin_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];

    const create_AdminCardData = (num) => ({
    image: Admin_images[(num - 1) % Admin_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169][num - 1],
    link: "/demo"
    });
    
    const admin_cardData = Array.from({ length: 8 }, (_, i) => create_AdminCardData(i + 1));

    // Investment Dashboard
    const Invest_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];

    const create_InvestCardData = (num) => ({
    image: Invest_images[(num - 1) % Invest_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169][num - 1],
    link: "/demo"
    });
    
    const invest_cardData = Array.from({ length: 8 }, (_, i) => create_InvestCardData(i + 1));

    // Digital Dashboard
    const Digital_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];

    const create_DigitalCardData = (num) => ({
    image: Digital_images[(num - 1) % Digital_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: [1531, 1264, 5131, 6150, 2212, 6150, 2115, 3169][num - 1],
    link: "/demo"
    });
    
    const digital_cardData = Array.from({ length: 8 }, (_, i) => create_DigitalCardData(i + 1));

    // Sliders Condition
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };


  return (
    <div className="flex flex-col w-full justify-center items-center text-center">
      <div className="relative mt-[60px] md:mt-0">
        <video autoPlay muted playsInline loop className="w-full">
          <source src="/assets/videos/ownsite.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col absolute bottom-[50px] md:bottom-[100px] left-[20px] md:left-[410px] text-left text-white gap-5">
          <div className="text-2xl md:text-[80px] font-bold">{t("OwnSite.ownsiteVideoTitle")}</div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[1000px] mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0">
            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                    <div className='flex flex-col text-base md:text-5xl font-bold text-left'>
                        {t("OwnSite.ownsiteDescription1")}
                    </div>
                    <div className='flex flex-col text-sm md:text-2xl font-semibold text-[#666] text-left leading-[1.20]'>
                        {t("OwnSite.ownsiteSubDescription")}
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                <div className='flex flex-col text-base md:text-[32px] font-bold text-left leading-[1.20]'>
                    {t("OwnSite.ownsiteDescription2")}
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col text-xl md:text-5xl text-left font-bold'>
                            {t("OwnSite.ownsiteTheme.e-Commerce_Title")}
                        </div>
                        <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] leading-[1.20] text-left'>
                            {t("OwnSite.ownsiteTheme.e-Commerce_Description")}
                        </div>
                    </div>
                    
                    {/* Web View */}
                    <div className="hidden md:flex flex-wrap gap-[26px]">
                        {Ecom_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-[353px] md:hidden">
                        <Slider {...settings}>
                            {Ecom_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                            ))}
                        </Slider>
                    </div>

                    <div className='flex gap-[20px] items-center'>
                        <MoreButton/>
                        <Link
                            to="/demo"
                            className={`text-base font-medium ${
                                location.pathname === '/demo' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-pointer'>
                                {t("OwnSite.ownsiteTheme.e-Commerce_Button")}
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                {/*----- Commercial----- */}

                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col text-xl md:text-5xl font-bold text-left'>
                            {t("OwnSite.ownsiteTheme.Commercial_Title")}
                        </div>
                        <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] text-left leading-[1.20]'>
                            {t("OwnSite.ownsiteTheme.Commercial_Description")}
                        </div>
                    </div>

                    {/* Web View */}
                    <div className="hidden md:flex flex-wrap gap-[26px]">
                        {Com_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-[353px] md:hidden">
                        <Slider {...settings}>
                            {Com_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                            ))}
                        </Slider>
                    </div>

                    <div className='flex gap-[20px] items-center'>
                        <MoreButton/>
                        <Link
                            to="/demo"
                            className={`text-base font-medium ${
                                location.pathname === '/demo' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-pointer'>
                                {t("OwnSite.ownsiteTheme.Commercial_Button")}
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                {/*----- Admin----- */}

                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col text-xl md:text-5xl font-bold text-left'>
                            {t("OwnSite.ownsiteTheme.Admin_Title")}
                        </div>
                        <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] text-left leading-[1.20]'>
                            {t("OwnSite.ownsiteTheme.Admin_Description")}
                        </div>
                    </div>
                    {/* Web View */}
                    <div className="hidden md:flex flex-wrap gap-[26px]">
                        {admin_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-[353px] md:hidden">
                        <Slider {...settings}>
                            {admin_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                            ))}
                        </Slider>
                    </div>
                    
                    <div className='flex gap-[20px] items-center'>
                        <MoreButton/>
                        <Link
                            to="/demo"
                            className={`text-base font-medium ${
                                location.pathname === '/demo' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-pointer'>
                                {t("OwnSite.ownsiteTheme.Admin_Button")}
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                {/*----- Investment----- */}

                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col text-xl md:text-5xl font-bold text-left'>
                            {t("OwnSite.ownsiteTheme.Investment_Title")}
                        </div>
                        <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] text-left leading-[1.20]'>
                            {t("OwnSite.ownsiteTheme.Investment_Description")}
                        </div>
                    </div>
                    {/* Web View */}
                    <div className="hidden md:flex flex-wrap gap-[26px]">
                        {invest_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-[353px] md:hidden">
                        <Slider {...settings}>
                            {invest_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                            ))}
                        </Slider>
                    </div>
                    <div className='flex gap-[20px] items-center'>
                        <MoreButton/>
                        <Link
                            to="/demo"
                            className={`text-base font-medium ${
                                location.pathname === '/demo' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-pointer'>
                                {t("OwnSite.ownsiteTheme.Investment_Button")}
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#666]'></div>

                {/*----- Digital Board----- */}

                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col text-xl md:text-5xl font-bold text-left'>
                            {t("OwnSite.ownsiteTheme.Digital_Title")}
                        </div>
                        <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] text-left leading-[1.20]'>
                            {t("OwnSite.ownsiteTheme.Digital_Description")}
                        </div>
                    </div>
                    {/* Web View */}
                    <div className="hidden md:flex flex-wrap gap-[26px]">
                        {digital_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-[353px] md:hidden">
                        <Slider {...settings}>
                            {digital_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                            />
                            ))}
                        </Slider>
                    </div>
                    <div className='flex gap-[20px] items-center'>
                        <MoreButton/>
                        <Link
                            to="/demo"
                            className={`text-base font-medium ${
                                location.pathname === '/demo' ? 'bg-[#ffffff80] px-[15px] rounded-[35px]' : ''
                            }`}
                        >
                            <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-pointer'>
                                {t("OwnSite.ownsiteTheme.Digital_Button")}
                            </div>
                        </Link>
                    </div>
                </div>

                
                <div className='w-full h-[1px] bg-[#666]'></div>

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
                                        <WhatsApp/>
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
                                        <Gmail/> 
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
                                        <MobileGmail/>
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
      </div>
      <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton} />
    </div>
  );
};

export default OwnSite;
