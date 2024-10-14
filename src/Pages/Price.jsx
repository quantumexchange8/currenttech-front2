import React, { useState } from 'react';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import { WebDesign, ECommerce, CMS, MobileApps, WebDesignMobile, ECommerceMobile, CMSMobile, MobileAppsMobile } from '../Components/Outline.jsx';
import Modal from '../Components/Modal';
import priceVideo from '../Assets/videos/price.mp4';
import { useTranslation } from 'react-i18next';

const Price = () => {
    const { t } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return(
        <div className='flex flex-col w-full justify-center text-center'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src={priceVideo} type="video/mp4"/>
                </video>

                <div className='flex flex-col absolute inset-0 justify-center items-center text-center text-white/80 gap-5'>
                    <div className='text-[32px] md:text-[96px] font-bold'>{t("Price.priceTitle")}</div>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
                <div className='max-w-[1000px] flex flex-col w-full'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                    <div className='text-base md:text-5xl font-bold text-left'>
                                        {/* The most important thing is your values, not the price. */}
                                        {t("Price.price_SubTitle")}
                    
                                    </div>
                                    <div className='text-sm md:text-2xl font-semibold text-[#666] text-left'>
                                        {/* In the journey of business development, it's essential to consider more than just 
                                        funding. However, funding is not the main focus. The key lies in the values you set for 
                                        your business, how you showcase your business's appeal, and how you allow 
                                        customers to assess your value. Whether you're a newcomer establishing a business 
                                        or a well-known company in the market, here you can find the tools and answers you 
                                        need. */}
                                        {t("Price.price_Description")}
                                    </div>
                                </div>

                                <div className=' bg-black h-[1px] w-full'></div>

                                <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                                    <div className='text-xl md:text-5xl font-bold text-center'>
                                        {/* Website Design Pricing */}
                                        {t("Price.website_Topic")}
                                    </div>

                                    <div className='flex gap-[40px] md:gap-[100px] items-center'>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                            <div className='hidden md:flex'><WebDesign/></div>
                                            <div className='md:hidden'><WebDesignMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* Web Design */}
                                                {t("Price.picture_1")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><ECommerce/></div>
                                            <div className='md:hidden'><ECommerceMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* e-Commerce */}
                                                {t("Price.picture_2")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><CMS/></div>
                                            <div className='md:hidden'><CMSMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* CMS */}
                                                {t("Price.picture_3")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><MobileApps/></div>
                                            <div className='md:hidden'><MobileAppsMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* Mobile App */}
                                                {t("Price.picture_4")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-[50px] md:gap-[40px] items-center'>
                                <div className='border-[#666] border-[2px] rounded-[20px] w-[353px] md:w-[480px] px-5 py-[30px] md:py-[50px] flex-shrink-0'>
                                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                        <div className='flex flex-col gap-[50px]'>
                                            <div className='flex flex-col text-[#000] text-xl md:text-[32px] font-bold text-center'>
                                                {/* Basic */}
                                                {t("Price.basicTitle")}
                                            </div>
                                            <div className='flex justify-between'>
                                                <ul className='list-disc pl-5 text-xs md:text-base font-bold list-outside text-left leading-[25px] md:leading-[30px]'>
                                                    <li>Design type</li>
                                                    <li>Pages</li>
                                                    <li>Revision</li>
                                                    <li>CRM system</li>
                                                    <li>Enquiry form</li>
                                                    <li>Stock pictures</li>
                                                    <li>Content writing</li>
                                                    <li>Domain Fee</li>
                                                    <li>Server hosting</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Website maintenance</li>
                                                    <li>Google analytic</li>
                                                    <li>Google submission</li>
                                                    <li>Google business</li>
                                                    <li>Google console</li>
                                                    <li>Chat Integration <br /> (Messenger / Whatsapp)</li>
                                                </ul>
                                                <div className='text-[#666] text-xs md:text-base font-medium text-right leading-[25px] md:leading-[30px]'>
                                                    <div>Template base</div>
                                                    <div>5 pages design</div>
                                                    <div>X 2</div>
                                                    <div>Yes</div>
                                                    <div>Unlimited</div>
                                                    <div>X 10</div>
                                                    <div>Yes</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>1st Year free</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className='text-[#666] text-right text-sm md:text-xl font-medium line-through'>
                                                RM8,388.00
                                            </div>
                                            <div className='text-[#666] text-right text-xs md:text-base font-medium'>
                                                {/* Now only */}
                                                {t("Price.currentPrice")}
                                            </div>
                                            <div className='text-[#000] text-right text-4xl md:text-5xl font-bold'>
                                                RM6,399.00
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='border-[#666] border-[2px] rounded-[20px] w-[353px] md:w-[480px] px-5 py-[30px] md:py-[50px] flex-shrink-0'>
                                    <div className='flex flex-col gap-[50px] md:gap-[40px]'>
                                        <div className='flex flex-col gap-[50px]'>
                                            <div className='flex flex-col text-[#000] text-xl md:text-[32px] font-bold text-center'>
                                                {/* Advance */}
                                                {t("Price.advanceTitle")}
                                            </div>
                                            <div className='flex justify-between'>
                                                <ul className='list-disc pl-5 text-xs md:text-base font-bold list-outside text-left leading-[25px] md:leading-[30px]'>
                                                    <li>Design type</li>
                                                    <li>Pages</li>
                                                    <li>Revision</li>
                                                    <li>CRM system</li>
                                                    <li>Enquiry form</li>
                                                    <li>Stock pictures</li>
                                                    <li>Content writing</li>
                                                    <li>Domain Fee</li>
                                                    <li>Server hosting</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Website maintenance</li>
                                                    <li>Google analytic</li>
                                                    <li>Google submission</li>
                                                    <li>Google business</li>
                                                    <li>Google console</li>
                                                    <li>Chat Integration <br /> (Messenger / Whatsapp)</li>
                                                    <li>Guarantee 80% test score</li>
                                                    <li>Guarantee 80% SEO Checkup score</li>
                                                    
                                                </ul>
                                                <div className='text-[#666] text-xs md:text-base font-medium text-right leading-[25px] md:leading-[30px]'>
                                                    <div>Custom</div>
                                                    <div>Unlimited</div>
                                                    <div>Unlimited</div>
                                                    <div>Yes</div>
                                                    <div>Unlimited</div>
                                                    <div>Unlimited</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div> </div>
                                                    <div> </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className='text-[#666] text-right text-sm md:text-xl font-medium line-through'>
                                                RM25,688.00
                                            </div>
                                            <div className='text-[#666] text-right text-xs md:text-base font-medium'>
                                                {/* Now only */}
                                                {t("Price.currentPrice")}
                                            </div>
                                            <div className='text-[#000] text-right text-4xl md:text-5xl font-bold'>
                                                RM16,299.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' bg-black h-[1px] w-full'></div>
                        
                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col gap-[150px]'>
                                <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                                    <div className='text-xl md:text-5xl font-bold text-center'>
                                        {/* e-Commerce Design Pricing */}
                                        {t("Price.e-Commerce_Topic")}
                                    </div>

                                    <div className='flex gap-[40px] md:gap-[100px] items-center'>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                            <div className='hidden md:flex'><WebDesign/></div>
                                            <div className='md:hidden'><WebDesignMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* Web Design */}
                                                {t("Price.picture_1")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><ECommerce/></div>
                                            <div className='md:hidden'><ECommerceMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* e-Commerce */}
                                                {t("Price.picture_2")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><CMS/></div>
                                            <div className='md:hidden'><CMSMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* CMS */}
                                                {t("Price.picture_3")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[20px] items-center'>
                                            <div className='hidden md:flex'><MobileApps/></div>
                                            <div className='md:hidden'><MobileAppsMobile/></div>
                                            <div className='text-[#666] text-[10px] md:text-base font-bold md:font-medium text-center'>
                                                {/* Mobile App */}
                                                {t("Price.picture_4")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-[50px] md:gap-[40px] items-center'>
                                <div className='border-[#666] border-[2px] rounded-[20px] w-[353px] md:w-[480px] px-5 py-[30px] md:py-[50px] flex-shrink-0'>
                                    <div className='flex flex-col gap-[50px] md:gap-[220px]'>
                                        <div className='flex flex-col gap-[50px]'>
                                            <div className='flex flex-col text-[#000] text-xl md:text-[32px] font-bold text-center'>
                                                {/* Basic */}
                                                {t("Price.basicTitle")}
                                            </div>
                                            <div className='flex justify-between'>
                                                <ul className='list-disc pl-5 text-xs md:text-base font-bold list-outside text-left leading-[25px] md:leading-[30px]'>
                                                    <li>Landing Page</li>
                                                    <li>Shopping cart</li>
                                                    <li>Revision</li>
                                                    <li>CRM system</li>
                                                    <li>Max products</li>
                                                    <li>Stock pictures</li>
                                                    <li>Order management portal</li>
                                                    <li>Payment gateway integrate</li>
                                                    <li>Enquiry form</li>
                                                    <li>Content writing</li>
                                                    <li>Domain Fee</li>
                                                    <li>Server hosting</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Website maintenance</li>
                                                    <li>Google analytic</li>
                                                    <li>Google submission</li>
                                                    <li>Google business</li>
                                                    <li>Google console</li>
                                                    <li>Chat Integration <br /> (Messenger / Whatsapp)</li>
                                                </ul>
                                                <div className='text-[#666] text-xs md:text-base font-medium text-right leading-[25px] md:leading-[30px]'>
                                                    <div>X 1</div>
                                                    <div>Yes</div>
                                                    <div>X 2</div>
                                                    <div>Yes</div>
                                                    <div>X 6</div>
                                                    <div>X 6</div>
                                                    <div>Yes</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>1st year free</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className='text-[#666] text-right text-sm md:text-xl font-medium line-through'>
                                                RM8,388.00
                                            </div>
                                            <div className='text-[#666] text-right text-xs md:text-base font-medium'>
                                                {/* Now only */}
                                                {t("Price.currentPrice")}
                                            </div>
                                            <div className='text-[#000] text-right text-4xl md:text-5xl font-bold'>
                                                RM6,399.00
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='border-[#666] border-[2px] rounded-[20px] w-[353px] md:w-[480px] px-5 py-[30px] md:py-[50px] flex-shrink-0'>
                                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                        <div className='flex flex-col gap-[50px]'>
                                            <div className='flex flex-col text-[#000] text-xl md:text-[32px] font-bold text-center'>
                                                {/* Advance */}
                                                {t("Price.advanceTitle")}
                                            </div>
                                            <div className='flex justify-between'>
                                                <ul className='list-disc pl-5 text-xs md:text-base font-bold list-outside text-left leading-[25px] md:leading-[30px]'>
                                                    <li>Landing Page</li>
                                                    <li>Shopping cart</li>
                                                    <li>Revision</li>
                                                    <li>CRM system</li>
                                                    <li>Guest Checkout</li>
                                                    <li>Customer Portal</li>
                                                    <li>Products & Variations</li>
                                                    <li>Stock pictures</li>
                                                    <li>Order management portal</li>
                                                    <li>Payment gateway integrate</li>
                                                    <li>Enquiry form</li>
                                                    <li>Content writing</li>
                                                    <li>Domain Fee </li>
                                                    <li>Server hosting</li>
                                                    <li>Mobile responsive</li>
                                                    <li>Website maintenance</li>
                                                    <li>Blog & article pages</li>
                                                    <li>Server database backup</li>
                                                    <li>Google analytic</li>
                                                    <li>Google submission</li>
                                                    <li>Google business</li>
                                                    <li>Google console</li>
                                                    <li>Chat Integration <br /> (Messenger / Whatsapp)</li>
                                                </ul>
                                                <div className='text-[#666] text-xs md:text-base font-medium text-right leading-[25px] md:leading-[30px]'>
                                                    <div>Custom</div>
                                                    <div>Yes</div>
                                                    <div>Unlimited</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Unlimited</div>
                                                    <div>Unlimited</div>
                                                    <div>Yes</div>
                                                    <div>Free</div>
                                                    <div>Unlimited</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>Free</div>
                                                    <div>Yes</div>
                                                    <div>1st year free</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                    <div>Yes</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className='text-[#666] text-right text-sm md:text-xl font-medium line-through'>
                                                RM28,388.00
                                            </div>
                                            <div className='text-[#666] text-right text-xs md:text-base font-medium'>
                                                {/* Now only */}
                                                {t("Price.currentPrice")}
                                            </div>
                                            <div className='text-[#000] text-right text-4xl md:text-5xl font-bold'>
                                                RM18,699.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-col gap-5 md:gap-[30px]'>
                                <div className='text-base md:text-5xl font-bold text-left'>
                                    {t("Price.priceReminderTitle")}
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-[32px] text-left leading-[1.20]'>
                                    <div className='font-semibold md:w-[1000px]'>
                                        {t("Price.priceReminderDescription")}
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
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}
export default Price;