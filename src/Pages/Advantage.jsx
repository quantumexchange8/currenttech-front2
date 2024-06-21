import React, {useContext, useState } from 'react';
import { Website, ManagementSystem, PosSystem, SupportService, FrontBackend, ProjectTask, Reward} from '../Components/Outline.jsx';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import AttendantSystem from '../Assets/Images/AttendentSystemLogo.png';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Advantage = () => {
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
                    <source src="/assets/videos/advantage.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-5 md:left-[430px] bottom-[50px] md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <div className='text-2xl md:text-[80px] font-bold'>{t("Advantage.advantageVideoTitle")}</div>
                    {/* <div className='flex flex-col text-base md:text-4xl font-medium leading-[1.20]'>
                        <div className={`${language === 'en' ? 'font-medium w-[228px] md:w-[515px]' : 
                                            language === 'zh' ? 'font-semibold w-[240px] md:w-[540px]' : 
                                            language === 'bm' ? 'font-medium w-[260px] md:w-[600px]' : ''}`}>
                            {t("Advantage.advantageVideoDescription")}
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='w-full flex flex-col gap-[50px] md:gap-[150px]'>
                <div className=' flex flex-col items-center justify-center mx-5 md:mx-0'>
                    <div className='max-w-[1000px] w-full mt-[50px] md:mt-[150px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                <div className='flex w-[280px] md:w-[850px] text-base md:text-5xl font-bold text-left leading-[1.20]'>
                                    {t("Advantage.advantageSelfTitle")} 
                                </div>
                                <div className='text-[#666] text-sm md:text-2xl font-semibold text-left'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-semibold w-[343px] md:w-[990px]' : 
                                                            language === 'zh' ? 'font-semibold md:w-[1000px]' : 
                                                            language === 'bm' ? 'font-semibold md:w-[1000px]' : ''}`}>
                                            {t("Advantage.advantageSelfDescription")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#333]'></div>
                            <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                                    <div className='text-base md:text-5xl font-bold text-left'>
                                        {t("Advantage.advantageSelfListTitle")}
                                    </div>
                                    <div className='flex flex-row gap-[20px] md:gap-[100px]'>
                                        <div className='flex flex-shrink-0'>
                                            <Website/>
                                        </div>
                                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                            <div className='text-base md:text-[32px] font-semibold text-left'>
                                                {t("Advantage.advantageSelfListSubtitle.websiteTitle")}
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col leading-[1.20]'>
                                                    <div className={`${language === 'en' ? 'font-semibold w-[290px] md:w-[800px]' : 
                                                                        language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                        language === 'bm' ? 'font-medium md:w-[800px]' : ''}`}>
                                                        {t("Advantage.advantageListDescription.websiteDescription")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-[20px] md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <ManagementSystem/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                        {t("Advantage.advantageSelfListSubtitle.managementTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[290px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[800px]' : ''}`}>
                                                    {t("Advantage.advantageListDescription.managementDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-[20px] md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <PosSystem/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageSelfListSubtitle.paymentTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    {t("Advantage.advantageListDescription.paymentDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-[20px] md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <SupportService/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageSelfListSubtitle.supportTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[290px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[780px]' : ''}`}>
                                                    {t("Advantage.advantageListDescription.supportDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:hidden flex w-full h-[1px] bg-[#333] md:mb-[200px]'></div>
                            </div>
                            
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className=' text-xl md:text-5xl font-bold text-left'>
                                            {t("Advantage.advantageSelfReminderTitle")}
                                        </div>
                                        <div>
                                            <ul className="list-disc pl-5 md:pl-8 text-[#666] text-left text-sm md:text-2xl font-semibold md:font-bold w-[353px] md:w-[1000px] flex flex-col gap-6 leading-[1.20]">
                                                <li>{t("Advantage.advantageSelfReminderDescription")}</li>
                                                <li>{t("Advantage.advantageSelfReminderDescription2")}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div 
                                        className='hidden md:flex flex-col items-start md:gap-10'>
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
                                                                            language === 'bm' ? 'font-semibold w-[360px]' : ''}`}>
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
                                            <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                                <div 
                                                    className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'
                                                    onClick={() => handleButtonClick('gmail')}>
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
            
                <div className='relative'>
                    <video autoPlay muted playsInline loop className='w-full'>
                        <source src="/assets/videos/advantage2.mp4" type="video/mp4"/>
                    </video>
                                                            
                    <div className='absolute left-5 md:left-[430px] bottom-[50px] md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                        <div className='text-2xl md:text-[80px] font-bold'>{t("Advantage.enterpriseVideoTitle")} </div>
                        {/* <div className='flex flex-col text-[16px] md:text-4xl font-medium leading-[1.20]'>
                            <div className={`${language === 'en' ? 'font-medium w-[320px] md:w-[580px]' : 
                                                language === 'zh' ? 'font-semibold w-[353px] md:w-[630px]' : 
                                                language === 'bm' ? 'font-medium w-[350px] md:w-[830px]' : ''}`}>
                                {t("Advantage.enterpriseVideoDescription")}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                            <div className='w-[280px] md:w-[863px] text-base md:text-5xl font-bold text-left leading-[1.20]'>
                                <div>{t("Advantage.advantageEnterpriseTitle")}</div>
                            </div>
                            <div className='text-[#666] text-sm md:text-2xl text-left'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-semibold w-[335px] md:w-[1000px]' : 
                                                        language === 'zh' ? 'font-semibold md:w-[1000px]' : 
                                                        language === 'bm' ? 'font-medium md:w-[1000px]' : ''}`}>
                                        {t("Advantage.advantageEnterpriseDescription")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full h-[1px] bg-[#333]'></div>

                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                                <div className='text-base md:text-5xl font-bold text-left'>
                                    {t("Advantage.advantageEnterpriseListTitle")}
                                </div>
                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <FrontBackend/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.frontendTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[265px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.frontendDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0 w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                                        <img src={AttendantSystem} alt="Attendant System"/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.attendanceTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-semibold w-[295px] md:w-[800px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                {t("Advantage.advantageEnterpriseListDescription.attendanceDescription")}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <ProjectTask/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.projectTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[260px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.projectDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <Reward/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.rewardTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[290px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.rewardDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <SupportService/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.supportTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-semibold w-[300px] md:w-[800px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.supportDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-full h-[1px] bg-[#333] mb-[50px] mt-[50px]'></div>
                        </div>
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px] mb-[50px] md:mb-[200px] mx-5 md:mx-0 '>
                            <div className='flex flex-col gap-[10px] md:gap-[30px] md:w-full'>
                                <div className='text-base md:text-5xl font-bold text-left md:mt-[150px]'>
                                    {t("Advantage.advantageEnterpriseReminderTitle")}
                                </div>
                                <div>
                                    <ul className="list-disc pl-5 md:pl-8 text-left text-sm md:text-2xl flex flex-col gap-6 leading-[1.20] text-[#666]">
                                        <li className={`${language === 'en' ? 'font-semibold md:font-bold w-[300px] md:w-[1000px]' : 
                                                            language === 'zh' ? 'font-semibold md:font-bold md:w-[1000px]' : 
                                                            language === 'bm' ? 'font-semibold md:font-bold md:w-[1000px]' : ''}`}>
                                            {t("Advantage.advantageEnterpriseReminderDescription")}
                                        </li>

                                        <li className={`${language === 'en' ? 'font-semibold md:font-bold w-[330px] md:w-[1000px]' : 
                                                          language === 'zh' ? 'font-semibold md:font-bold md:w-[1000px]' : 
                                                          language === 'bm' ? 'font-semibold md:font-bold md:w-[950px]' : ''}`}>
                                            {t("Advantage.advantageEnterpriseReminderDescription2")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div 
                            className='hidden md:flex flex-col items-start gap-10'>
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
                                                                        language === 'bm' ? 'font-semibold w-[360px]' : ''}`}>
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
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}
export default Advantage; 