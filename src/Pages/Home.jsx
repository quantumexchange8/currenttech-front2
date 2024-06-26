import React, {useContext, useState } from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService} from '../Components/Outline.jsx';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";
import img_Education from "../Assets/Images/Home_Education.png"
import img_FoodBeverage from "../Assets/Images/Home_F&B.png"
import img_Wholesale from "../Assets/Images/Home_Wholesale.png"
import img_Retail from "../Assets/Images/Home_Retail.png"
import img_Logistic from "../Assets/Images/Home_Logistic.png"
import img_Enterprise from "../Assets/Images/Home_Enterprise.png"

const Home = () => {
    const { t, language} = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return(
        <div className='flex flex-col w-full justify-center items-center text-center'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="/assets/videos/earth.mp4" type="video/mp4"/>
                </video>
                <div 
                    className='absolute inset-0 flex flex-col justify-center items-center text-white text-xl md:text-6xl font-bold' 
                    style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}
                >
                    <div className='text-center leading-[1.20] w-full'>  
                        <div className="block">{t("Home.homeVideoTitle")}</div>
                        <div className="block">{t("Home.homeVideoTitle2")}</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px]'>
                <div className='max-w-[1000px] flex flex-col mx-5 md:mx-0 gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col gap-[10px] md:gap-[50px] text-left'>
                        <div className='text-base md:text-5xl font-bold justify-center'>
                            {t("Home.industriesTitle")}
                        </div>

                        <div className='flex flex-col gap-10 text-left text-sm md:text-2xl text-[#666] w-full'>
                            <div className= "leading-tight font-semibold">
                                <div className='block'>{t("Home.industriesDescription")}</div>
                                <div className='block'>{t("Home.industriesDescription2")}</div>
                                <div className='block'>{t("Home.industriesDescription3")}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full h-[1px] bg-[#333]'></div>

                    <div className='flex flex-col gap-[10px] md:gap-[50px] w-full'>
                        <div className='text-base md:text-5xl text-left justify-center'>
                            <div className='flex flex-col leading-[1.20] font-bold'>
                                {t("Home.technologyTitle")}
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 text-left text-sm md:text-2xl text-[#666] font-medium'>
                            <div className='flex flex-col'>
                                <div className="flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]">
                                    {t("Home.technologyDescription")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333]'></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                            <div className='text-base md:text-5xl text-left justify-center'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.serviceTitle")}
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] flex-shrink-0 '>
                                <div className='flex flex-shrink-0'>
                                    <Software/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.softwareTitle")}
                                        </div>
                                    </div>
                                    <div className='text-sm md:text-2xl text-[#666] text-left w-full'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-semibold w-[303px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[303px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-semibold w-[303px] md:w-[770px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.softwareDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.websiteTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-sm md:text-2xl text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20] font-semibold w-[303px] md:w-[800px]">
                                                    {t("Home.serviceSubTitle_Description.websiteDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <MobileApp/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.mobileAppTitle")}
                                        </div>
                                    </div>
                                    <div className='flex text-sm md:text-2xl text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20] font-semibold w-[303px] md:w-[800px]">
                                                {t("Home.serviceSubTitle_Description.mobileAppDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <ManagementSystem/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.managementSystemTitle")}
                                        </div>
                                    </div>
                                    <div className='text-sm md:text-2xl text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20] font-semibold w-[303px] md:w-[800px]">
                                                <div className='hidden md:block'>{t("Home.serviceSubTitle_Description.managementSystemDescription")}</div>
                                                <div className='md:hidden'>{t("Home.serviceSubTitle_Description.managementSystemDescription")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.posSystemTitle")}
                                        </div>
                                    </div>
                                    <div className='text-sm md:text-2xl text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-semibold w-[303px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[303px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-semibold w-[303px] md:w-[770px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.posSystemDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                    <div className='text-base md:text-[32px] text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.support&serviceTitle")}
                                        </div>
                                    </div>
                                    <div className='text-sm md:text-2xl text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20] font-semibold w-[303px] md:w-[800px]">
                                                {t("Home.serviceSubTitle_Description.support&serviceDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='md:w-full h-[1px] bg-[#333]'></div>

                    <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                        <div className='flex flex-col text-base md:text-5xl text-left'>
                            <div className='flex flex-col leading-[1.20] font-bold'>
                                <div className="hidden md:flex w-[580px]">{t("Home.innovativeTitle")}</div>
                                <div className="md:hidden w-[200px]">{t("Home.innovativeTitle")}</div>
                            </div>
                        </div>
                        <div className='flex text-sm md:text-2xl font-semibold text-[#666] text-left'>
                            <div className="flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]">
                                {t("Home.innovativeDescription")}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[60px] md:gap-[100px]'>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_Education} alt="Education" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.educationImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex-flex-col'>
                                        <div className="flex flex-col leading-[1.20] text-left">
                                            <div className={`${language === 'en' ? 'font-semibold w-[303px] md:w-[450px]' : 
                                                                language === 'zh' ? 'font-semibold w-[353px] md:w-[450px]' : 
                                                                language === 'bm' ? 'font-semibold w-[353px] md:w-[450px]' : ''}`}>
                                                <div className='hidden md:block'>{t("Home.ImgCombinationDescription.educationImgDescription")}</div> 
                                                <div className='md:hidden'>{t("Home.ImgCombinationDescription.educationImgDescription")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_FoodBeverage} alt="F&B" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.F&BImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex-flex-col text-left'>
                                        <div className="hidden md:flex flex-col font-semibold leading-[1.20]">
                                            {t("Home.ImgCombinationDescription.F&BImgDescription")}
                                        </div>

                                        <div className="md:hidden flex flex-col leading-[1.20]">
                                            <div className={`${language === 'en' ? 'font-semibold w-[333px]' : 
                                                                language === 'zh' ? 'font-semibold w-[353px]' : 
                                                                language === 'bm' ? 'font-semibold w-[353px]' : ''}`}>
                                                <div className='block'>{t("Home.ImgCombinationDescription.F&BImgMobileDescription")}</div>
                                                <div className='block'>{t("Home.ImgCombinationDescription.F&BImgMobileDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_Retail} alt="Retail" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.retailImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex-flex-col text-left'>
                                        <div className="flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[450px]">
                                            {t("Home.ImgCombinationDescription.retailImgDescription")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_Wholesale} alt="Wholesale" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.wholesaleImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex-flex-col text-left'>
                                        <div className="hidden md:flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[450px]">
                                            {t("Home.ImgCombinationDescription.wholesaleImgDescription")}
                                        </div>

                                        <div className="md:hidden flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[450px]">
                                            <div className='block'>{t("Home.ImgCombinationDescription.wholesaleImgMobileDescription")}</div>
                                            <div className='block'>{t("Home.ImgCombinationDescription.wholesaleImgMobileDescription2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_Logistic} alt="Logistic" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.logisticImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex flex-col text-left'>
                                        <div className="flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[450px]">
                                            <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription")}</div>
                                            <div className='block'>{t("Home.ImgCombinationDescription.logisticImgDescription2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-[30px] md:items-start'>
                            <img src={img_Enterprise} alt="Enterprise" />
                            <div className='flex flex-col gap-[5px] md:gap-5'>
                                <div className='text-black text-base md:text-5xl text-left'>
                                    <div className='flex flex-col font-semibold md:font-bold'>
                                        {t("Home.ImgCombinationTitle.enterpriseImgTitle")}
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#666] text-sm md:text-xl'>
                                    <div className='flex-flex-col text-left'>
                                        <div className="flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[450px]">
                                            {t("Home.ImgCombinationDescription.enterpriseImgDescription")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-[66px]'>
                            <div className='flex flex-col md:gap-10'>
                                <div className='flex flex-col gap-5 md:gap-10'>
                                    <div className='text-base md:text-5xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-bold w-[353px] md:w-[1000px]'>
                                            {t("Home.homeReminderTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-[32px] font-medium text-left leading-[1.20]'>
                                        <div className="flex flex-col leading-[1.20]">
                                            <div className={`${language === 'en' ? 'font-semibold w-[323px] md:w-[1000px]' : 
                                                                language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                language === 'bm' ? 'font-semibold w-[353px] md:w-[1000px]' : ''}`}>
                                                {t("Home.homeReminderDescription")}
                                            </div>
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
                                                <div className="flex flex-col leading-[1.20] text-left">
                                                    <div className={`${language === 'en' ? 'w-[190px] font-semibold' : 
                                                                        language === 'zh' ? 'font-semibold' : 
                                                                        language === 'bm' ? 'font-semibold' : ''}`}>
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
                                                                        language === 'bm' ? 'font-semibold' : ''}`}>
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
export default Home;