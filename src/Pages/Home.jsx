import React, { useContext } from 'react';
import {useState} from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService} from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Home = () => {
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
                    <source src="/assets/videos/earth.mp4" type="video/mp4"/>
                </video>
                <div 
                    className='absolute inset-0 flex flex-col justify-center items-center text-white text-xl md:text-5xl font-bold' 
                    style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}
                >
                    <span className={`text-center ${
                        language === 'en' ? 'w-[260px] md:w-[1000px]' :
                        language === 'zh' ? 'w-[140px] md:w-[1000px]' :
                        language === 'bm' ? 'w-[200px] md:w-[1000px]' :
                        ''}`}>
                        <span className="block">{t("Home.homeVideoTitle")}</span>
                        <span className="block">{t("Home.homeVideoTitle2")}</span>
                    </span>

                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px] '>
                    <div className='flex flex-col mx-5 md:mx-0 gap-[50px] md:gap-[200px]'>
                        <div className='flex flex-col gap-5 md:gap-10 text-left md:ml-0 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold justify-center'>
                            {t("Home.industriesTitle")}
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                                <div className= "md:w-[910px] leading-tight">
                                    <div className={`${language === 'en' ? 'font-medium w-[340px] md:w-[910px]': 
                                                        language === 'zh' ? 'font-semibold w-[360px] md:w-[950px]': 
                                                        language === 'bm' ? 'font-medium w-[331px] md:w-[960px]': ''}`}>
                                        {t("Home.industriesDescription")}
                                    </div>
                                </div>
                                           
                                <div className="flex flex-col leading-[1.20]">
                                    <span className={`${language === 'en' ? 'font-medium w-[336px] md:w-[910px]' : 
                                                        language === 'zh' ? 'font-semibold w-[360px] md:w-[950px]' : 
                                                        language === 'bm' ? 'font-medium w-[335px] md:w-[940px]' : ''}`}>
                                        {t("Home.industriesDescription2")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>

                        <div className='flex flex-col gap-5 md:gap-[40px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl text-left justify-center'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.technologyTitle")}
                                </div>
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                                <div className='flex flex-col'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[353px] md:w-[910px]' : 
                                                            language === 'zh' ? 'font-semibold w-[360px] md:w-[980px]' : 
                                                            language === 'bm' ? 'font-medium w-[340px] md:w-[960px]' : ''}`}>
                                            {t("Home.technologyDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>
                    </div>

                    <div className='flex flex-col gap-[50px] md:gap-[200px] mt-[50px]'>
                        <div className='flex flex-col gap-[30px] md:gap-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl text-left justify-center'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.serviceTitle")}
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] flex-shrink-0 '>
                                <div>
                                <Software/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.softwareTitle")}
                                        </div>
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[290px] md:w-[790px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[300px] md:w-[760px]' : ''}`}>
                                                    <span className='hidden md:block'>{t("Home.serviceSubTitle_Description.softwareDescription")}</span>
                                                    <span className='hidden md:block'>{t("Home.serviceSubTitle_Description.softwareDescription2")}</span>
                                                    <span className='md:hidden'>{t("Home.serviceSubTitle_Description.softwareDescription")}</span>
                                                    <span className='md:hidden'>{t("Home.serviceSubTitle_Description.softwareDescription2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.websiteTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col leading-[1.20] text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[285px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[290px] md:w-[760px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.websiteDescription")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <MobileApp/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.mobileAppTitle")}
                                        </div>
                                    </div>
                                    <div className='flex text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[273px] md:w-[750px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[290px] md:w-[770px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.mobileAppDescription")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                    <ManagementSystem/>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.managementSystemTitle")}
                                        </div>
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[285px] md:w-[750px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[286px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[290px] md:w-[750px]' : ''}`}>
                                                    <span className='hidden md:block'>{t("Home.serviceSubTitle_Description.managementSystemDescription")}</span>
                                                    <span className='hidden md:block'>{t("Home.serviceSubTitle_Description.managementSystemDescription2")}</span>
                                                    <span className='md:hidden'>{t("Home.serviceSubTitle_Description.managementSystemDescription")}</span>
                                                    <span className='md:hidden'>{t("Home.serviceSubTitle_Description.managementSystemDescription2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.posSystemTitle")}
                                        </div>
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className={`flex flex-col leading-[1.20] ${language === 'en' ? 'font-medium' : 'font-semibold'}`}>
                                                <span className={`${language === 'en' ? 'font-medium w-[290px] md:w-[750px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[290px] md:w-[750px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.posSystemDescription")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold'>
                                            {t("Home.serviceSubTitle.support&serviceTitle")}
                                        </div>
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[290px] md:w-[780px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium w-[290px] md:w-[750px]' : ''}`}>
                                                    {t("Home.serviceSubTitle_Description.support&serviceDescription")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>
                    </div>

                    <div className='flex flex-col gap-5 md:gap-10 mt-[50px] mb-[50px] md:mb-[150px] space-x-5 md:space-x-0'>
                        <div className='flex flex-col text-base md:text-5xl text-left ml-5 md:ml-0'>
                            <div className='flex flex-col leading-[1.20] font-bold'>
                                <span className="hidden md:flex w-[530px]">{t("Home.innovativeTitle")}</span>
                                <span className="w-[289px] md:hidden">{t("Home.innovativeTitle")}</span>
                            </div>
                        </div>
                        <div className='flex text-base md:text-4xl font-medium text-[#666] text-left'>
                            <div className="flex flex-col leading-[1.20]">
                                <span className={`${language === 'en' ? 'font-medium w-[300px] md:w-[950px]' : 
                                                    language === 'zh' ? 'font-semibold w-[360px] md:w-[980px]' : 
                                                    language === 'bm' ? 'font-medium w-[330px] md:w-[950px]' : ''}`}>
                                    {t("Home.innovativeDescription")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 gap-0'>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full h-auto'>
                            <source src="/assets/videos/education.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-left'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.educationVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl'>
                                <div className='flex-flex-col text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[350px]' : 
                                                            language === 'zh' ? 'font-semibold w-[350px] md:w-[360px]' : 
                                                            language === 'bm' ? 'font-medium w-[330px] md:w-[400px]' : ''}`}>
                                            <span className='hidden md:block'>{t("Home.videoCombinationDescription.educationVideoDescription")}</span> 
                                            <span className='hidden md:block'>{t("Home.videoCombinationDescription.educationVideoDescription2")}</span>
                                            <span className='md:hidden'>{t("Home.videoCombinationDescription.educationVideoDescription")}</span> 
                                            <span className='md:hidden'>{t("Home.videoCombinationDescription.educationVideoDescription2")}</span>  
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/fnb.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-right'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.F&BVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl'>
                                <div className='flex-flex-col text-right'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[300px] md:w-[400px]' : 
                                                            language === 'zh' ? 'font-semibold w-[300px] md:w-[430px]' : 
                                                            language === 'bm' ? 'font-medium w-[300px] md:w-[500px]' : ''}`}>
                                            {t("Home.videoCombinationDescription.F&BVideoDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/retail.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-left'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.retailVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl'>
                                <div className='flex-flex-col text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[305px] md:w-[350px]' : 
                                                            language === 'zh' ? 'font-semibold w-[255px] md:w-[360px]' : 
                                                            language === 'bm' ? 'font-medium w-[330px] md:w-[370px]' : ''}`}>
                                            {t("Home.videoCombinationDescription.retailVideoDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/wholesale.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-right'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.wholesaleVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-right'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[370px]' : 
                                                            language === 'zh' ? 'font-semibold w-[290px] md:w-[400px]' : 
                                                            language === 'bm' ? 'font-medium w-[320px] md:w-[400px]' : ''}`}>
                                            {t("Home.videoCombinationDescription.wholesaleVideoDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/logistic.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-left'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.logisticVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex flex-col text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[350px]' : 
                                                            language === 'zh' ? 'font-semibold w-[300px] md:w-[421px]' : 
                                                            language === 'bm' ? 'font-medium w-[330px] md:w-[421px]' : ''}`}>
                                            {t("Home.videoCombinationDescription.logisticVideoDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/enterprise.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl text-right'>
                                <div className='flex flex-col leading-[1.20] font-bold'>
                                    {t("Home.videoCombinationTitle.enterpriseVideoTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-right'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[320px] md:w-[550px]' : 
                                                            language === 'zh' ? 'font-semibold w-[350px] md:w-[500px]' : 
                                                            language === 'bm' ? 'font-medium w-[330px] md:w-[530px]' : ''}`}>
                                            {t("Home.videoCombinationDescription.enterpriseVideoDescription")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col max-w-[1000px] w-full'>
                <div className='flex flex-col gap-[66px] my-[50px] md:my-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <div className='flex flex-col gap-3 md:gap-10'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                <div className='flex flex-col leading-[1.20] font-bold w-[353px] md:w-[950px]'>
                                    {t("Home.homeReminderTitle")}
                                </div>
                            </div>
                            <div className='flex flex-col text-[#666] text-base md:text-4xl font-medium text-left leading-[1.20]'>
                                <div className="flex flex-col leading-[1.20]">
                                    <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[950px]' : 
                                                        language === 'zh' ? 'font-semibold w-[360px] md:w-[1000px]' : 
                                                        language === 'bm' ? 'font-medium w-[330px] md:w-[950px]' : ''}`}>
                                        {t("Home.homeReminderDescription")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div 
                            className='flex items-center gap-10'>
                            <div 
                            className='hidden md:flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                            onClick={() => handleButtonClick('whatsapp')}>
                                <WhatsApp/>
                                <div className='flex flex-col text-[#666] text-base text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[160px]' : 
                                                            language === 'zh' ? 'font-semibold w-[130px]' : 
                                                            language === 'bm' ? 'font-medium w-[160px]' : ''}`}>
                                            <span className='block'>{t("Home.whatsappDescription")}</span>
                                            <span className='block'>{t("Home.whatsappDescription2")}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div 
                            className='hidden md:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                            onClick={() => handleButtonClick('gmail')}>
                                <Gmail/>
                                <div className='flex flex-col text-[#666] text-base text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[140px]' : 
                                                            language === 'zh' ? 'font-semibold w-[130px]' : 
                                                            language === 'bm' ? 'font-medium w-[140px]' : ''}`}>
                                            <span className='block'>{t("Home.gmailDescription")}</span>
                                            <span className='block'>{t("Home.gmailDescription2")}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div 
                            className='flex flex-col items-left gap-5 md:hidden'>
                            <div 
                            className='flex w-full h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                            onClick={() => handleButtonClick('whatsapp')}>
                                <WhatsApp/>
                                <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                            language === 'zh' ? 'font-semibold w-[170px]' : 
                                                            language === 'bm' ? 'font-medium w-[170px]' : ''}`}>
                                            <span className='block'>{t("Home.whatsappDescriptionMobile")}</span>
                                            <span className='block'>{t("Home.whatsappDescriptionMobile2")}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div 
                            className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                            onClick={() => handleButtonClick('gmail')}>
                                <Gmail/>
                                <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                    <div className="flex flex-col leading-[1.20]">
                                        <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                            language === 'zh' ? 'font-semibold w-[170px]' : 
                                                            language === 'bm' ? 'font-medium w-[170px]' : ''}`}>
                                            <span className='block'>{t("Home.gmailDescriptionMobile")}</span>
                                            <span className='block'>{t("Home.gmailDescriptionMobile2")}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div id="Button_Component" className="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible">
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}

export default Home;
