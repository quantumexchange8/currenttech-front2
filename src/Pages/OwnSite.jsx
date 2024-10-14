import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import Modal from "../Components/Modal";
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from "../Components/Brand.jsx";
import { MoreButton } from "../Components/Outline.jsx";
import Ecommerce_1 from "../Assets/Images/E-commerce/aia.png";
import Ecommerce_2 from "../Assets/Images/E-commerce/furniture.png";
import Ecommerce_3 from "../Assets/Images/E-commerce/etrans.png";
import Ecommerce_4 from "../Assets/Images/E-commerce/neoncart.png";
import Ecommerce_5 from "../Assets/Images/E-commerce/onlinesale.png";
import Commercial_1 from "../Assets/Images/Commercial/assurance.png";
import Admin_1 from "../Assets/Images/Admin/adomx.png";
import Cards from "../Components/Card"
import ownsiteVideo from '../Assets/videos/ownsite.mp4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const OwnSite = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [openButton, setOpenButton] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  // Initialize click counts from localStorage if available. If not, it defaults to an array with 8 zeros
  const [ecomClickCounts, setEcomClickCounts] = useState(() => {
    const savedCounts = localStorage.getItem('ecomClickCounts');
    return savedCounts ? JSON.parse(savedCounts) : Array(8).fill(0);
  });

  const [comClickCounts, setComClickCounts] = useState(() => {
    const savedCounts = localStorage.getItem('comClickCounts');
    return savedCounts ? JSON.parse(savedCounts) : Array(8).fill(0);
  });

  const [adminClickCounts, setAdminClickCounts] = useState(() => {
    const savedCounts = localStorage.getItem('adminClickCounts');
    return savedCounts ? JSON.parse(savedCounts) : Array(8).fill(0);
  });

  const [investClickCounts, setInvestClickCounts] = useState(() => {
    const savedCounts = localStorage.getItem('investClickCounts');
    return savedCounts ? JSON.parse(savedCounts) : Array(8).fill(0);
  });

  const [digitalClickCounts, setDigitalClickCounts] = useState(() => {
    const savedCounts = localStorage.getItem('digitalClickCounts');
    return savedCounts ? JSON.parse(savedCounts) : Array(8).fill(0);
  })

  useEffect(() => {
    localStorage.setItem('ecomClickCounts', JSON.stringify(ecomClickCounts));
    localStorage.setItem('comClickCounts', JSON.stringify(comClickCounts));
    localStorage.setItem('adminClickCounts', JSON.stringify(adminClickCounts));
    localStorage.setItem('investClickCounts', JSON.stringify(investClickCounts));
    localStorage.setItem('digitalClickCounts', JSON.stringify(digitalClickCounts));
  }, [ecomClickCounts, comClickCounts, adminClickCounts, investClickCounts, digitalClickCounts]);

  const handleButtonClick = (button) => {
    setOpenButton(true);
    setSelectedButton(button);
  };

  // Helper function to handle image click
  const handleImageClick = (index, setClickCounts, clickCounts) => {
    const newClickCounts = [...clickCounts];
    newClickCounts[index]++;
    setClickCounts(newClickCounts);
  };

//   E-commerce Dashboard
    const Ecom_images = [Ecommerce_1, Ecommerce_2, Ecommerce_3, Ecommerce_4, Ecommerce_5];
    const Ecom_links = ['https://ctweb-template1.currenttech.pro/','https://ctweb-template2.currenttech.pro/','https://ctweb-template3.currenttech.pro/', 'https://ctweb-template4.currenttech.pro/', 'https://ctweb-template5.currenttech.pro/'];

    const create_EcomCardData = (num) => ({
        image: Ecom_images[(num - 1) % Ecom_images.length],
        title: `e-Commerce ShoeHouse ${num}`,
        code: `EC36900${num}`,
        rate: ecomClickCounts[num - 1],
        link: Ecom_links[(num - 1) % Ecom_links.length]
    });
        
    const Ecom_cardData = Array.from({ length: Ecom_images.length }, (_, i) => create_EcomCardData(i + 1));

    // Commercial Dashboard
    const Com_images = [Commercial_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];
    const Com_links = ['https://ctweb-commercial-template1.currenttech.pro/', 'https://ctweb-commercial-template2.currenttech.pro/'];
    const create_ComCardData = (num) => ({
        image: Com_images[(num - 1) % Com_images.length],
        title: `e-Commerce ShoeHouse ${num}`,
        code: `EC36900${num}`,
        rate: comClickCounts[num - 1],
        link: Com_links[(num - 1) % Com_links.length]
      });
        
        const Com_cardData = Array.from({ length: Com_images.length }, (_, i) => create_ComCardData(i + 1));

    // Admin Dashboard
    const Admin_images = [Admin_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];
    const Admin_links = ['https://ctweb-admin-template1.currenttech.pro/'];
    const create_AdminCardData = (num) => ({
    image: Admin_images[(num - 1) % Admin_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: adminClickCounts[num - 1],
    link: Admin_links[(num - 1) % Admin_links.length]
    });
    
    const admin_cardData = Array.from({ length: Admin_images.length }, (_, i) => create_AdminCardData(i + 1));

    // Investment Dashboard
    const Invest_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];
    const Invest_links = ['https://ctweb-investment-template1.currenttech.pro/'];
    const create_InvestCardData = (num) => ({
    image: Invest_images[(num - 1) % Invest_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: investClickCounts[num - 1],
    link: Invest_links[(num - 1) % Invest_links.length]
    });
    
    const invest_cardData = Array.from({ length: Invest_images.length }, (_, i) => create_InvestCardData(i + 1));

    // Digital Dashboard
    const Digital_images = [Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2, Ecommerce_1, Ecommerce_2];
    const Digital_links = ['https://ctweb-digital-template1.currenttech.pro/'];
    const create_DigitalCardData = (num) => ({
    image: Digital_images[(num - 1) % Digital_images.length],
    title: `e-Commerce ShoeHouse ${num}`,
    code: `EC36900${num}`,
    rate: digitalClickCounts[num - 1],
    link: Digital_links[(num - 1) % Digital_links.length]
    });
    
    const digital_cardData = Array.from({ length: Digital_images.length }, (_, i) => create_DigitalCardData(i + 1));

    // Sliders Condition
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay:true,
        nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
        className= 'absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 z-10 cursor-pointer'
        onClick={onClick}
      >
        <svg
          className="w-8 h-8 text-gray-700 animate-bounce-right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
        );
      }
    
    //   function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={`absolute top-1/2 transform -translate-y-1/2 ml-5 left-0 z-10 cursor-pointer`}
    //         style={{ ...style, background: "gray", borderRadius:9 }}
    //         onClick={onClick}
    //       >
    //         <svg
    //           className="w-8 h-8 text-gray-700 animate-bounce-left"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M15 19l-7-7 7-7"
    //           />
    //         </svg>
    //       </div>
    //     );
    //   }


  return (
    <div className="flex flex-col w-full justify-center text-center">
      <div className="relative mt-[60px] md:mt-0">
        <video autoPlay muted playsInline loop className="w-full">
          <source src={ownsiteVideo} type="video/mp4" />
        </video>
        <div className="flex flex-col absolute inset-0 justify-center items-center text-center text-white/80 gap-5">
          <div className="text-[32px] md:text-[96px] font-bold">{t("OwnSite.ownsiteVideoTitle")}</div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1000px] mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px] px-5 md:px-0">
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
                                handleImageClick={() => handleImageClick(index, setEcomClickCounts, ecomClickCounts)} // Pass the click handler
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className="container w-full md:hidden">
                        <Slider {...settings}>
                            {Ecom_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                                handleImageClick={() => handleImageClick(index, setEcomClickCounts, ecomClickCounts)} // Pass the click handler
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
                                handleImageClick={() => handleImageClick(index, setComClickCounts, comClickCounts)} // Pass the click handler
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-full md:hidden">
                        <Slider {...settings}>
                            {Com_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                                handleImageClick={() => handleImageClick(index, setComClickCounts, comClickCounts)} // Pass the click handler
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
                                handleImageClick={() => handleImageClick(index, setAdminClickCounts, adminClickCounts)} // Pass the click handler
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-full md:hidden">
                        <Slider {...settings}>
                            {admin_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                                handleImageClick={() => handleImageClick(index, setAdminClickCounts, adminClickCounts)} // Pass the click handler
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
                                handleImageClick={() => handleImageClick(index, setInvestClickCounts, investClickCounts)} // Pass the click handler
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-full md:hidden">
                        <Slider {...settings}>
                            {invest_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                                handleImageClick={() => handleImageClick(index, setInvestClickCounts, investClickCounts)} // Pass the click handler
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
                                handleImageClick={() => handleImageClick(index, setDigitalClickCounts, digitalClickCounts)} // Pass the click handler
                            />
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className=" container w-full md:hidden">
                        <Slider {...settings}>
                            {digital_cardData.map((card, index) => (
                            <Cards 
                                key={index}
                                card={card}
                                index={index}
                                handleButtonClick={handleButtonClick}
                                handleImageClick={() => handleImageClick(index, setDigitalClickCounts, digitalClickCounts)} // Pass the click handler
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

                <div className='flex flex-col md:gap-[50px]'>
                    <div className='flex flex-col gap-5 md:gap-[30px]'>
                        <div className='text-base md:text-5xl font-bold text-left'>
                            {t("Products.productsReminderTitle")}
                        </div>
                        <div className='flex flex-col text-[#666] text-sm md:text-[32px] text-left font-semibold md:w-[1000px] leading-[1.20]'>
                            {t("Products.productsReminderDescription")}
                        </div> 
                    </div>
                    <div 
                        className='flex flex-col gap-[30px] md:gap-[50px]'>
                        <div className='flex flex-row'>
                            <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                <div 
                                    className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px]'>
                                    <WhatsApp/>
                                </div>
                                <div className='flex flex-col text-[#666] text-2xl text-left'>
                                    <div className="flex flex-col leading-[1.20] font-semibold w-[190px] md:w-[260px]">
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
                                    <div className="flex flex-col font-semibold w-[280px] leading-[1.20]">
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
                                    <div className="flex flex-col text-left w-[190px] font-semibold leading-[1.20]">
                                        <div className='block'>{t("Home.whatsappDescriptionMobile")}</div>
                                        <div className='block'>{t("Home.whatsappDescriptionMobile2")}</div>
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
                                    <div className="flex flex-col w-[170px] font-semibold text-left leading-[1.20]">
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
  );
};

export default OwnSite;
