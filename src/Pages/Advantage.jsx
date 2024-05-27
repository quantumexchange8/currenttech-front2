import React, {useContext, useState } from 'react';
import { Website, ManagementSystem, PosSystem, SupportService, FrontBackend, ProjectTask, Reward} from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
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

                <div className='absolute left-5 md:left-[100px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <div className=' text-xl md:text-5xl font-bold'>{t("Advantage.advantageVideoTitle")}</div>
                    <div className='flex flex-col text-base md:text-4xl font-medium leading-[1.20]'>
                        <div className={`${language === 'en' ? 'font-medium w-[228px] md:w-[515px]' : 
                                            language === 'zh' ? 'font-semibold w-[240px] md:w-[540px]' : 
                                            language === 'bm' ? 'font-medium w-[260px] md:w-[600px]' : ''}`}>
                            {t("Advantage.advantageVideoDescription")}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                    <div className='flex flex-col gap-[50px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-5 md:gap-10'>
                            <div className='flex md:w-[930px] text-base md:text-5xl font-bold text-left'>
                                {t("Advantage.advantageSelfTitle")} 
                            </div>
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-medium md:w-[950px]' : 
                                                        language === 'zh' ? 'font-semibold md:w-[1000px]' : 
                                                        language === 'bm' ? 'font-medium md:w-[950px]' : ''}`}>
                                        {t("Advantage.advantageSelfDescription")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#333] md:mt-[150px]'></div>
                        <div className='flex flex-col gap-[30px] md:gap-[150px]'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                {t("Advantage.advantageSelfListTitle")}
                            </div>
                            <div className='flex flex-row gap-[20px] md:gap-[100px]'>
                                <div className='flex flex-shrink-0'>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        {t("Advantage.advantageSelfListSubtitle.websiteTitle")}
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[780px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[750px]' : ''}`}>
                                                {t("Advantage.advantageListDescription.websiteDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                <div className='flex flex-shrink-0'>
                                    <ManagementSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                    {t("Advantage.advantageSelfListSubtitle.managementTitle")}
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[760px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[780px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[760px]' : ''}`}>
                                                {t("Advantage.advantageListDescription.managementDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                <div className='flex flex-shrink-0'>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        {t("Advantage.advantageSelfListSubtitle.paymentTitle")}
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[690px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[760px]' : ''}`}>
                                                <div className='hidden md:block'>{t("Advantage.advantageListDescription.paymentDescription")}</div>
                                                <div className='hidden md:block'>{t("Advantage.advantageListDescription.paymentDescription2")}</div>
                                                <div className='md:hidden'>{t("Advantage.advantageListDescription.paymentDescription")}</div>
                                                <div className='md:hidden'>{t("Advantage.advantageListDescription.paymentDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                <div className='flex flex-shrink-0'>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        {t("Advantage.advantageSelfListSubtitle.supportTitle")}
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[750px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[760px]' : ''}`}>
                                                <div className='hidden md:block'>{t("Advantage.advantageListDescription.supportDescription")}</div>
                                                <div className='hidden md:block'>{t("Advantage.advantageListDescription.supportDescription2")}</div>
                                                <div className='md:hidden'>{t("Advantage.advantageListDescription.supportDescription")}</div>
                                                <div className='md:hidden'>{t("Advantage.advantageListDescription.supportDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-full h-[1px] bg-[#333] md:mb-[200px] mt-[20px]'></div>
                        </div>
                        
                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[20px] md:gap-[50px]'>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className=' text-xl md:text-5xl font-bold text-left md:mt-[150px]'>
                                        {t("Advantage.advantageSelfReminderTitle")}
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-8 text-left text-base md:text-2xl font-semibold md:font-bold md:w-[1000px] flex flex-col gap-6 leading-[1.20]">
                                            <li>{t("Advantage.advantageSelfReminderDescription")}</li>
                                            <li>{t("Advantage.advantageSelfReminderDescription2")}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div 
                                    className='flex items-center gap-10'>
                                    <div 
                                    className='hidden md:flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium w-[160px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                    language === 'bm' ? 'font-medium w-[160px]' : ''}`}>
                                                    <div className='block'>{t("Advantage.whatsappDescription")}</div>
                                                    <div className='block'>{t("Advantage.whatsappDescription2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    className='hidden md:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                            <div className={`${language === 'en' ? 'font-medium w-[140px]' : 
                                                                language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                language === 'bm' ? 'font-medium w-[140px]' : ''}`}>
                                                <div className='block'>{t("Advantage.gmailDescription")}</div>
                                                <div className='block'>{t("Advantage.gmailDescription2")}</div>
                                            </div>
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
                                                <div className={`${language === 'en' ? 'font-medium' : 
                                                                    language === 'zh' ? 'font-semibold' : 
                                                                    language === 'bm' ? 'font-medium' : ''}`}>    
                                                    <div className='block'>{t("Advantage.whatsappDescriptionMobile")}</div>
                                                    <div className='block'>{t("Advantage.whatsappDescriptionMobile2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
w
                                    <div 
                                    className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium' : 
                                                                    language === 'zh' ? 'font-semibold' : 
                                                                    language === 'bm' ? 'font-medium' : ''}`}>
                                                    <div className='block'>{t("Advantage.gmailDescriptionMobile")}</div>
                                                    <div className='block'>{t("Advantage.gmailDescriptionMobile2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='w-full h-[1px] bg-[#333] mb-[50px] md:mb-[200px]'></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="/assets/videos/advantage2.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-5 md:left-[100px] bottom-1 md:bottom-[100px] flex flex-col text-white text-left gap-5 -full'>
                    <div className='text-xl md:text-5xl font-bold md:gap-5'>{t("Advantage.enterpriseVideoTitle")} </div>
                    <div className='flex flex-col text-[16px] md:text-4xl font-medium leading-[1.20]'>
                        <div className={`${language === 'en' ? 'font-medium w-[320px] md:w-[580px]' : 
                                            language === 'zh' ? 'font-semibold w-[353px] md:w-[630px]' : 
                                            language === 'bm' ? 'font-medium w-[350px] md:w-[830px]' : ''}`}>
                            {t("Advantage.enterpriseVideoDescription")}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                    <div className='flex flex-col md:gap-[200px]'>
                        <div className='flex flex-col gap-5 md:gap-10 mx-5 md:mx-0'>
                            <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                <div>{t("Advantage.advantageEnterpriseTitle")}</div>
                            </div>
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left mb-[50px] md:mb-0'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-medium md:w-[950px]' : 
                                                        language === 'zh' ? 'font-semibold md:w-[1000px]' : 
                                                        language === 'bm' ? 'font-medium md:w-[950px]' : ''}`}>
                                        {t("Advantage.advantageEnterpriseDescription")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='w-full h-[1px] bg-[#333]'></div>
                            <div className='flex flex-col md:gap-[150px] mt-[50px]'>
                                <div className='text-base md:text-5xl font-bold text-left mb-[30px] md:mb-0'>
                                    {t("Advantage.advantageEnterpriseListTitle")}
                                </div>
                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <FrontBackend/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.frontendTitle")}
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-medium md:w-[752px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[750px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.frontendDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0 w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                                        <img src={AttendantSystem} alt="Attendant System"/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.attendanceTitle")}
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[752px]' : 
                                                                language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                language === 'bm' ? 'font-medium md:w-[750px]' : ''}`}>
                                                {t("Advantage.advantageEnterpriseListDescription.attendanceDescription")}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <ProjectTask/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.projectTitle")}
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-medium md:w-[760px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[760px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.projectDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0'>
                                        <Reward/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.rewardTitle")}
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-medium md:w-[760px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[770px]' : ''}`}>
                                                    {t("Advantage.advantageEnterpriseListDescription.rewardDescription")}
                                                    {/* ************************************************* BM*/}
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
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.supportTitle")}
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='flex flex-col leading-[1.20]'>
                                                <div className={`${language === 'en' ? 'font-medium md:w-[759px]' : 
                                                                    language === 'zh' ? 'font-semibold md:w-[800px]' : 
                                                                    language === 'bm' ? 'font-medium md:w-[790px]' : ''}`}>
                                                    <div className='hidden md:block'>{t("Advantage.advantageEnterpriseListDescription.supportDescription")}</div>
                                                    <div className='hidden md:block'>{t("Advantage.advantageEnterpriseListDescription.supportDescription2")}</div>
                                                    <div className='md:hidden'>{t("Advantage.advantageEnterpriseListDescription.supportDescription")}</div>
                                                    <div className='md:hidden'>{t("Advantage.advantageEnterpriseListDescription.supportDescription2")}</div>
                                                    {/* ************************************************* EN*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-full h-[1px] bg-[#333] mb-[50px] mt-[50px]'></div>
                        </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:mb-[200px] mx-5 md:mx-0'>
                            <div className='flex flex-col gap-5 md:gap-[30px] w-full'>
                                <div className='text-xl md:text-5xl font-bold text-left md:mt-[200px]'>
                                    {t("Advantage.advantageEnterpriseReminderTitle")}
                                </div>
                                <div>
                                    <ul className="list-disc pl-8 text-left text-base md:text-2xl flex flex-col gap-6 leading-[1.20]">
                                        <li className={`${language === 'en' ? 'font-semibold md:font-bold md:w-[950px]' : 
                                                            language === 'zh' ? 'font-semibold md:font-bold md:w-[950px]' : 
                                                            language === 'bm' ? 'font-semibold md:font-bold md:w-[950px]' : ''}`}>
                                            {t("Advantage.advantageEnterpriseReminderDescription")}
                                        </li>

                                        <li className={`${language === 'en' ? 'font-semibold md:font-bold md:w-[950px]' : 
                                                          language === 'zh' ? 'font-semibold md:font-bold md:w-[950px]' : 
                                                          language === 'bm' ? 'font-semibold md:font-bold md:w-[950px]' : ''}`}>
                                            {t("Advantage.advantageEnterpriseReminderDescription2")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className='hidden md:flex items-center gap-10'>
                                    <div 
                                    className=' w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base text-left leading-[1.20]'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium w-[160px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                    language === 'bm' ? 'font-medium w-[160px]' : ''}`}>
                                                    <div className='block'>{t("Advantage.whatsappDescription")}</div>
                                                    <div className='block'>{t("Advantage.whatsappDescription2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    className='w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium w-[140px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                    language === 'bm' ? 'font-medium w-[140px]' : ''}`}>
                                                    <div className='block'>{t("Advantage.gmailDescription")}</div>
                                                    <div className='block'>{t("Advantage.gmailDescription2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile Version */}
                            <div className='flex flex-col mt-10 md:mt-0 mb-[100px] md:mb-0 mx-5 md:mx-0'>
                                <div 
                                    className='flex flex-col items-left gap-5 md:hidden w-full'>
                                    <div 
                                    className='flex w-full h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium' : 
                                                                    language === 'zh' ? 'font-semibold' : 
                                                                    language === 'bm' ? 'font-medium' : ''}`}>    
                                                    <div className='block'>{t("Advantage.whatsappDescriptionMobile")}</div>
                                                    <div className='block'>{t("Advantage.whatsappDescriptionMobile2")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div 
                                    className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <div className={`${language === 'en' ? 'font-medium' : 
                                                                    language === 'zh' ? 'font-semibold' : 
                                                                    language === 'bm' ? 'font-medium' : ''}`}>
                                                    <div className='block'>{t("Advantage.gmailDescriptionMobile")}</div>
                                                    <div className='block'>{t("Advantage.gmailDescriptionMobile2")}</div>
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