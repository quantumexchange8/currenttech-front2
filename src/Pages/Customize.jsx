import React, {useContext, useState } from 'react';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";
import Cus1 from "../Assets/Images/cus1.png"
import Cus1Mobile from "../Assets/Images/cus1Mobile.svg"
import Cus2Mobile from "../Assets/Images/cus2Mobile.svg"
import Cus3Mobile from "../Assets/Images/cus3Mobile.svg"
import Explore1 from "../Assets/Images/Explore_1.png"
import Explore2 from "../Assets/Images/Explore_2.png"
import Explore3 from "../Assets/Images/Explore_3.png"
import Emoji from "../Assets/Images/Emoji.svg"
import MobileEmoji from "../Assets/Images/mobileEmoji.svg"
import Colour from "../Assets/Images/Colour.png"
import MobileColour from "../Assets/Images/mobileColour.svg"
import ConnectorLine1 from "../Assets/Images/ConnectorLine1.svg"
import ConnectorLine2 from "../Assets/Images/ConnectorLine2.svg"
import ConnectorLine3 from "../Assets/Images/ConnectorLine3.svg"
import ConnectorLine4 from "../Assets/Images/ConnectorLine4.svg"
import ConnectorLine5 from "../Assets/Images/ConnectorLine5.svg"

const Customize = () => {
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
                    <source src="/assets/videos/customize.mp4" type="video/mp4"/>
                </video>
                <div className='flex flex-col absolute bottom-[50px] md:bottom-[100px] left-[20px] md:left-[256px] text-left text-white gap-5'>
                    <div className='text-2xl md:text-[80px] font-bold'>{t("OwnSite.ownsiteVideoTitle")}</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                <div className={`flex flex-col text-base md:text-5xl font-bold leading-[1.20] 
                                                    ${language === 'en' ? 'w-[330px] md:w-[661px]' : 
                                                      language === 'zh' ? 'w-[330px] md:w-[661px]' : 
                                                      language === 'bm' ? 'w-[330px] md:w-[860px]' : ''}`}>
                                    {t("OwnSite.ownsiteCustomization_Title")}
                                </div>
                                <div className='text-[#666] text-sm md:text-2xl font-semibold leading-[1.20] w-[353px] md:w-[1000px]'>
                                    {t("OwnSite.ownsiteCustomization_Description")}
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#666]'></div>
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className={`flex flex-col text-base md:text-5xl font-bold 
                                                    ${language === 'en' ? 'w-[300px] md:w-[661px]' : 
                                                      language === 'zh' ? 'w-[300px] md:w-[661px]' : 
                                                      language === 'bm' ? 'w-[330px] md:w-[840px]' : ''}`}>
                                {t("OwnSite.ownsiteIdea_Title1")}
                            </div>

                            <div className='flex flex-col gap-[50px] md:gap-0'>
                                <img src={Cus1} alt="" className='hidden md:block' />
                                <img src={Cus1Mobile} alt="" className='block md:hidden' />

                                {/* web */}
                                <div className='hidden md:block'>
                                    <div className='relative hidden md:block'>
                                        <div className='flex justify-end md:pr-14'>
                                            <img src={ConnectorLine1} alt="" />
                                        </div>
                                        
                                        <div className={`absolute left-0 top-40 md:text-5xl font-bold
                                                    ${language === 'en' ? 'w-[860px]' : 
                                                      language === 'zh' ? 'w-[624px]' : 
                                                      language === 'bm' ? 'w-[674px]' : ''}`}>
                                            {t("OwnSite.ownsiteIdea_Title2")}
                                        </div>
                                    </div>

                                    <div className='hidden md:flex items-center justify-between '>
                                        <img src={Explore1} alt="Explore 1" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px]'/>
                                        <img src={Explore2} alt="Explore 2" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px] place-self-start' />
                                        <img src={Explore3} alt="Explore 3" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px] place-self-center' />
                                    </div>



                                    <div className='relative hidden md:block'>
                                        <div className='flex justify-end md:pr-5'>
                                            <div>
                                                <img src={ConnectorLine2} alt="" />
                                            </div>
                                            <div>
                                                <img src={ConnectorLine3} alt="" />
                                            </div>
                                        </div>

                                        <div className=' absolute left-0 top-40 md:w-[860px] md:text-5xl font-bold'>
                                            {t("OwnSite.ownsiteIdea_Title3")}
                                        </div>
                                    </div>

                                    <div>
                                        <img src={Emoji} alt="Explore 3" className='w-[353px] md:w-[1000px] h-[108px] md:h-[307px]' />
                                    </div>

                                    <div className='relative'>
                                        <div className='flex justify-end md:pr-5'>
                                            <img src={ConnectorLine3} alt="" />
                                        </div>

                                        <div className={`absolute left-0 top-40 md:text-5xl font-bold
                                                    ${language === 'en' ? 'w-[860px]' : 
                                                      language === 'zh' ? 'w-[624px]' : 
                                                      language === 'bm' ? 'w-[730px]' : ''}`}>
                                            {t("OwnSite.ownsiteIdea_Title4")}
                                        </div>
                                    </div>

                                    <div>
                                        <img src={Colour} alt="Colour" />
                                    </div>
                                </div>
                                
                                {/* mobile */}
                                <div className='flex flex-col md:hidden gap-[30px]'>
                                    <div className='w-[353px] text-base font-bold'>
                                        {t("OwnSite.ownsiteIdea_Title2")}
                                    </div>

                                    <div>
                                        <img src={Cus2Mobile} alt="" />
                                    </div>
                                </div>

                                <div className='flex flex-col md:hidden'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img src={Cus3Mobile} alt="" />
                                    </div>
                                    <div className='relative'>
                                        <div className='flex justify-end pr-6'>
                                            <img src={ConnectorLine4} alt="" />
                                        </div>
                                        <div className='absolute top-[85px] w-[280px] text-base font-bold'>
                                            {t("OwnSite.ownsiteIdea_Title3")}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={MobileEmoji} alt="Mobile Emoji"/>
                                    </div>
                                    <div className='relative'>
                                        <div className='flex justify-center pl-[100px]'>
                                            <img src={ConnectorLine5} alt="" />
                                        </div>
                                        <div className='absolute top-[65px] w-[290px] text-base font-bold'>
                                            {t("OwnSite.ownsiteIdea_Title4")}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={MobileColour} alt="Mobile Emoji"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className='w-full h-[1px] bg-[#666]'></div>
                        
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                        <div className=' text-base md:text-5xl font-bold w-[353px] md:w-[1000px]'>
                            <div className='block'>{t("OwnSite.ownsite_Reminder1")}</div>
                            <div className='block'>{t("OwnSite.ownsite_Reminder2")}</div>
                        </div>

                            
                        <div>
                            <div className='hidden md:flex flex-col gap-[30px] md:gap-[50px]'>    
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
                            <div className='flex flex-col items-left gap-5 md:hidden'>
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
        <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
    </div>
        
    )
}

        export default Customize;