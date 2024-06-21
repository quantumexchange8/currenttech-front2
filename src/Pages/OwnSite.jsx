import React, {useContext, useState } from 'react';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";
import Ecommerce_1 from "../Assets/Images/Ecom_1.svg"
import {Fire, MoreButton} from '../Components/Outline.jsx';

const OwnSite = () => {
    const { t, language} = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="/assets/videos/ownsite.mp4" type="video/mp4"/>
                </video>
                <div className='absolute left-5 md:left-[430px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <div className='text-2xl md:text-[80px] font-bold'>Own Site</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] mt-[50px] md:mt-[150px] mb-[150px] mx-5 md:mx-0'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                            <div className='flex flex-col text-base md:text-5xl font-bold'>
                                Let us help you craft an exceptional website for yourself.
                            </div>
                            <div className='flex flex-col text-sm md:text-2xl font-semibold text-[#666] leading-[1.20]'>
                                Whether you are a business or an individual, our company is dedicated to deeply 
                                understanding your needs and passionately crafting an exceptional one-stop website 
                                system that exceeds your expectations, covering everything from front-end to back-end.
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-[#666]'></div>

                        <div className='flex flex-col text-base md:text-[32px] font-bold leading-[1.20]'>
                            Whether you aim to transition from traditional business to 
                            modern digital platforms or you're already an established 
                            enterprise, we offer top-notch conceptual templates to prepare 
                            you for transformative growth and quality enhancement. 
                            You don’t need to worry about where to start, because our 
                            meticulous approach begins with a deep understanding of your 
                            unique needs.
                        </div>

                        <div className='w-full h-[1px] bg-[#666]'></div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex flex-col text-xl md:text-5xl font-bold'>
                                    e-Commerce
                                </div>
                                <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] leading-[1.20]'>
                                e-Commerce offers unparalleled convenience, enabling seamless transactions, expansive product 
                                selections, and effortless comparison shopping, ultimately empowering consumers with accessibility
                                and efficiency in their purchasing experience.
                                </div>
                            </div>
                            
                            {/*----------------------- This version having the grid -------------------------*/}
                            <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                <div className=' w-full flex flex-nowrap md:grid md:grid-cols-4 md:grid-rows-2 gap-[10px] md:gap-[27px] md:overflow-hidden overflow-x-auto'>
                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative group'>
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="focus:outline-none"/>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-full duration-500 ease-in-out focus:opacity-100 focus:translate-y-0">
                                            <div className='flex flex-col gap-[4px]'>
                                            <div className='flex flex-col gap-[10px]'>
                                                <div className="text-sm font-bold">e-Commerce Shoe House</div>
                                                <div className="text-sm font-medium">EC369001</div>
                                            </div>
                                            <div className='flex gap-[10px] items-center'>
                                                <Fire/>
                                                <div className="text-sm font-medium text-red-500">1264</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[20px] items-center'>
                                    <MoreButton/>
                                    <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-point'>
                                        View all e-Commerce demo
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#666]'></div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex flex-col text-xl md:text-5xl font-bold'>
                                    Commercial
                                </div>
                                <div className='flex flex-col text-sm md:text-xl font-semibold text-[#666] leading-[1.20]'>
                                A commercial web page offers many benefits, such as increased customer accessibility, 24/7 
                                availability, and dynamic product showcasing. It provides valuable analytics, enhances brand visibility, 
                                and streamlines purchasing, driving sales and fostering customer loyalty.
                                </div>
                            </div>
                            
                            {/*----------------------- This version is not having the grid, only the flex -------------------------*/}
                            <div className='flex flex-row overflow-auto w-full'>
                                <div className='flex flex-nowrap md:flex-wrap gap-[10px] w-full overflow-auto md:overflow-hidden'>
                                    <div className="relative group w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                        <div className="absolute inset-0 md:bottom-0 left-0 md:right-0 bg-black bg-opacity-35 text-white p-3 opacity-0 
                                                group-hover:opacity-100 transition transform 
                                                md:group-hover:translate-y-[175px] md:translate-y-full 
                                                group-hover:translate-y-[90px] translate-y-full 
                                                duration-500 ease-in-out focus:opacity-100 focus:translate-y-0 w-[110px] md:w-[230px] h-[90px] md:h-[100px]">
                                            <div className='flex flex-col gap-[4px]'>
                                                <div className='flex flex-col gap-[10px]'>
                                                    <div className="text-[10px] md:text-sm font-bold">e-Commerce Shoe House</div>
                                                    <div className="text-[10px] md:text-sm font-medium">EC369001</div>
                                                </div>
                                                <div className='flex gap-[10px] items-center'>
                                                    <Fire />
                                                    <div className="text-[10px] md:text-sm font-medium text-red-500">1264</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-[160px] md:w-[230px]">
                                        <img src={Ecommerce_1} alt="E-commerce 1" className="w-full h-full object-cover"/>
                                    </div>
                                </div> 
                            </div>
                            <div className='flex gap-[20px] items-center'>
                                <MoreButton/>
                                <div className='text-[#004EEB] text-sm md:text-xl font-light cursor-point'>
                                    View all e-Commerce demo
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full h-[1px] bg-[#666]'></div>

                        <div className='flex flex-col gap-[50px]'>
                            <div className='flex flex-col gap-5 md:gap-[50px]'>
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
                            <div 
                                className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex flex-row'>
                                    <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                        <div 
                                            className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px]'>
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
                                            <div className="flex flex-col leading-[1.20]">
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
                                            <div className="flex flex-col leading-[1.20]">
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


            )
        }

        export default OwnSite;