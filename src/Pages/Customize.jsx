import React, {useContext, useState } from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService} from '../Components/Outline.jsx';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";
import Idea1 from "../Assets/Images/Idea_1.svg"
import Idea2 from "../Assets/Images/Idea_2.svg"
import Cus1 from "../Assets/Images/cus1.png"
import Cus1Mobile from "../Assets/Images/cus1Mobile.svg"
import Cus2Mobile from "../Assets/Images/cus2Mobile.svg"
import Explore1 from "../Assets/Images/Explore_1.png"
import Explore2 from "../Assets/Images/Explore_2.png"
import Explore3 from "../Assets/Images/Explore_3.png"
import Emoji from "../Assets/Images/Emoji.svg"
import Colour from "../Assets/Images/Colour.png"
import ConnectorLine1 from "../Assets/Images/ConnectorLine1.svg"
import ConnectorLine2 from "../Assets/Images/ConnectorLine2.svg"
import ConnectorLine3 from "../Assets/Images/ConnectorLine3.svg"
import ConnectorLine4 from "../Assets/Images/ConnectorLine4.svg"
import ConnectorLine5 from "../Assets/Images/ConnectorLine5.svg"
import MobileConnectorLine1 from "../Assets/Images/MobileConnectorLine_1.svg"
import MobileConnectorLine2 from "../Assets/Images/MobileConnectorLine_2.svg"
import MobileConnectorLine3 from "../Assets/Images/MobileConnectorLine_3.svg"
import MobileConnectorLine4 from "../Assets/Images/MobileConnectorLine_4.svg"

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
                <div className='absolute left-5 md:left-[430px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <div className='text-2xl md:text-[80px] font-bold'>Customize</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                <div className='flex flex-col text-base md:text-5xl font-bold w-[300px] md:w-[661px] leading-[1.20]'>
                                    Customization is your direct gateway to advantage. 
                                </div>
                                <div className='text-[#666] text-sm md:text-2xl font-semibold leading-[1.20] w-[353px] md:w-[1000px]'>
                                    Tailored web pages and apps offer a competitive edge by catering directly to user preferences, enhancing engagement and satisfaction. 
                                    Through personalized features and intuitive interfaces, they streamline user interactions, driving retention and loyalty.
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#666]'></div>
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-col text-base md:text-5xl font-bold w-[300px] md:w-[661px]'>
                                What we create for you is more than just ideas.
                            </div>

                            <div className='flex flex-col gap-[100px] md:gap-0'>
                                <img src={Cus1} alt="" className='hidden md:block' />
                                <img src={Cus1Mobile} alt="" className='block md:hidden' />
                                {/* <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-[50px] md:gap-[100px]'>
                                    <div className='flex flex-col items-start'>
                                        <img src={Idea1} alt="Idea 1" className='w-[250px] md:w-[450px] h-[376px] md:h-[677px]'/>
                                        <img src={MobileConnectorLine1} alt="Mobile Connector Line 1" className='absolute ml-[36px] mt-[190px] md:hidden' />
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <img src={Idea2} alt="Idea 2" className='w-[250px] md:w-[450px] h-[376px] md:h-[677px]'/>
                                    </div>
                                </div>
                                <div className='hidden md:flex flex-col md:items-center right ml-[80px] mb-[15px]'>
                                    <img src={ConnectorLine2} alt="Connector Line 2" className='absolute' />
                                </div> */}

                                {/* web */}
                                <div className='hidden md:block'>
                                    <div className='relative hidden md:block'>
                                        <div className='flex justify-end md:pr-14'>
                                            <img src={ConnectorLine2} alt="" />
                                        </div>
                                        
                                        <div className=' absolute left-0 top-40 md:w-[860px] md:text-5xl font-bold'>
                                            At the same time, we also need to understand what you're thinking.
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
                                                <img src={ConnectorLine3} alt="" />
                                            </div>
                                            <div>
                                                <img src={ConnectorLine4} alt="" />
                                            </div>
                                        </div>

                                        <div className=' absolute left-0 top-40 md:w-[860px] md:text-5xl font-bold'>
                                            Furthermore, it's essential to know what your customers like.
                                        </div>
                                    </div>

                                    <div>
                                        <img src={Emoji} alt="Explore 3" className='w-[353px] md:w-[1000px] h-[108px] md:h-[307px]' />
                                    </div>

                                    <div className='relative'>
                                        <div className='flex justify-end md:pr-5'>
                                            <img src={ConnectorLine4} alt="" />
                                        </div>

                                        <div className=' absolute left-0 top-40 md:w-[860px] md:text-5xl font-bold'>
                                            We believe you care just as much about the theme colors.
                                        </div>
                                    </div>

                                    <div>
                                        <img src={Colour} alt="Colour" />
                                    </div>
                                </div>
                                
                                {/* mobile */}
                                <div className='flex flex-col md:hidden gap-[30px]'>
                                    <div className=' w-full md:w-[860px] md:text-5xl font-bold'>
                                        At the same time, we also need to understand what you're thinking.
                                    </div>

                                    <div>
                                        <img src={Cus2Mobile} alt="" />
                                    </div>
                                </div>

                                {/* here */}
                            </div>
                        </div>
                        {/* <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[30px] md:gap-[150px]'>
                                <div className='flex flex-col text-base md:text-5xl font-bold w-[353px] md:w-[860px]'>
                                    
                                </div>
                                <div>
                                    <div className='flex flex-col md:flex-row gap-[50px] md:gap-[36px] items-end md:items-center'>
                                        <img src={Explore1} alt="Explore 1" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px]'/>
                                        <img src={MobileConnectorLine2} alt="Mobile Connector Line 2" className='absolute items-start mr-[100px] mt-[210px] md:hidden' />
                                        <img src={Explore2} alt="Explore 2" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px] place-self-start' />
                                        <img src={Explore3} alt="Explore 3" className='w-[200px] md:w-[309px] h-[433px] md:h-[669px] place-self-center' />
                                        <img src={MobileConnectorLine3} alt="Mobile Connector Line 3" className='md:hidden absolute mt-[1160px] mr-[23px]' />
                                    </div>
                                    
                                    
                                    <div className='flex flex-col items-end mr-5 mb-[15px]'>
                                    <img src={ConnectorLine3} alt="Connector Line 3" className='absolute hidden md:flex place-self-start ml-[150px]'/>
                                        <img src={ConnectorLine4} alt="Connector Line 4" className='absolute hidden md:flex' />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-[75px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[60px] md:gap-[150px]'>
                                    <div className='flex flex-col text-base md:text-5xl font-bold w-[303px] md:w-[860px]'>
                                        Furthermore, it's essential to know what your customers like.
                                    </div>
                                    <div>
                                        <div className='flex flex-col'>
                                            
                                            <img src={MobileConnectorLine4} alt="Mobile Connector Line 4" className='md:hidden absolute mt-[110px] ml-[165px]' />
                                            <div className='flex flex-col items-end right mr-[75px] mb-[15px]'>
                                                <img src={ConnectorLine5} alt="Connector Line 5" className='absolute hidden md:flex' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col text-base md:text-5xl font-bold w-[303px] md:w-[860px]'>
                                We believe you care just as much about the theme colors.
                                </div>

                                <div className='flex flex-col'>
                                    
                                </div>
                            </div>
                        </div> */}
                            
                        <div className='w-full h-[1px] bg-[#666]'></div>
                        
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                        <div className=' text-base md:text-5xl font-bold w-[353px] md:w-[860px]'>
                            Share your thoughts with us! 
                            Get in touch to turn your ideas into reality.
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
    </div>
        
    )
}

        export default Customize;