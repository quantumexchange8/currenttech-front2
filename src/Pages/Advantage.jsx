import React, {useContext, useState } from 'react';
import { Website, ManagementSystem, PosSystem, SupportService, FrontBackend, ProjectTask, Reward} from '../Components/Outline.jsx';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import AttendantSystem from '../Assets/Images/AttendentSystemLogo.png';
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import advantageVideo from '../Assets/videos/advantage.mp4';
import advantageVideo2 from '../Assets/videos/advantage2.mp4';
import { useTranslation } from 'react-i18next';

const Advantage = () => {
    const { t, i18n } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };    

    return (
        <div className='flex flex-col w-full justify-center text-center'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src={advantageVideo} type="video/mp4"/>
                </video>

                <div className='flex flex-col absolute inset-0 justify-center items-center text-center text-white/80 gap-5'>
                    <div className='text-[32px] md:text-[96px] font-bold'>
                        {t("Advantage.advantageVideoTitle")}
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-[50px] md:gap-[150px]'>
                <div className='max-w-[1000px] flex flex-col mx-5 md:mx-0 mt-[50px] md:mt-[150px] gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                        <div className='flex w-[280px] md:w-[850px] text-base md:text-5xl font-bold text-left'>
                            <div className='leading-tight'>{t("Advantage.advantageSelfTitle")} </div>
                        </div>
                        <div className='text-[#666] text-sm md:text-2xl font-semibold text-left w-[353px] md:w-[1000px] leading-[1.20]'>
                            {t("Advantage.advantageSelfDescription")}
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333]'></div>

                    <div>
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
                                            <div className='flex flex-col font-semibold w-[290px] md:w-[800px] leading-tight'>
                                                {t("Advantage.advantageListDescription.websiteDescription")}
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
                                        <div className='flex flex-col font-semibold w-[290px] md:w-[800px] leading-tight'>
                                            {t("Advantage.advantageListDescription.managementDescription")}
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
                                        <div className='flex flex-col font-semibold w-[303px] md:w-[800px] leading-[1.20]'>
                                            {t("Advantage.advantageListDescription.paymentDescription")}
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
                                        <div className='flex flex-col w-[303px] font-semibold md:w-[800px] leading-[1.20]'>
                                            {t("Advantage.advantageListDescription.supportDescription")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div>
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
                                                className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'>
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
                <div className='relative'>
                    <video autoPlay muted playsInline loop className='w-full'>
                        <source src={advantageVideo2} type="video/mp4"/>
                    </video>
                                                            
                    <div className='flex flex-col absolute inset-0 justify-center items-center text-center text-white/80 gap-5'>
                        <div className='text-[32px] md:text-[96px] font-bold'>{t("Advantage.enterpriseVideoTitle")} </div>
                    </div>
                </div>
                <div className='max-w-[1000px] flex flex-col gap-[50px] md:gap-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0 items-center justify-center'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                            <div className='w-[280px] md:w-[863px] text-base md:text-5xl font-bold text-left leading-[1.20]'>
                                <div>{t("Advantage.advantageEnterpriseTitle")}</div>
                            </div>
                            <div className='text-[#666] text-sm md:text-2xl text-left'>
                                <div className='flex flex-col font-semibold w-[353px] md:w-[1000px] leading-[1.20]'>
                                    {t("Advantage.advantageEnterpriseDescription")}
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
                                                <div className='flex flex-col font-semibold w-[300px] md:w-[800px] leading-[1.20]'>
                                                    {t("Advantage.advantageEnterpriseListDescription.frontendDescription")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div className='flex flex-shrink-0 w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                                        <img src={AttendantSystem} alt="Attendant System"/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-[32px] font-semibold text-left'>
                                            {t("Advantage.advantageEnterpriseListSubtitle.attendanceTitle")}
                                        </div>
                                        <div className='text-sm md:text-2xl text-[#666] text-left'>
                                            <div className='flex flex-col font-semibold w-[300px] md:w-[800px] leading-[1.20]'>
                                                {t("Advantage.advantageEnterpriseListDescription.attendanceDescription")}
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
                                            <div className='flex flex-col font-semibold w-[290px] md:w-[800px] leading-[1.20]'>
                                                {t("Advantage.advantageEnterpriseListDescription.projectDescription")}
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
                                            <div className='flex flex-col font-semibold w-[300px] md:w-[800px] leading-[1.20]'>
                                                {t("Advantage.advantageEnterpriseListDescription.rewardDescription")}
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
                                            <div className='flex flex-col font-semibold w-[300px] md:w-[800px] leading-[1.20]'>
                                                {t("Advantage.advantageEnterpriseListDescription.supportDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden flex w-full h-[1px] bg-[#333]'></div>

                    <div className='flex flex-col gap-[30px]'>
                        <div className='flex flex-col gap-[10px] md:gap-[30px] md:w-full'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                {t("Advantage.advantageEnterpriseReminderTitle")}
                            </div>
                            <div>
                                <ul className="list-disc pl-5 md:pl-8 text-left text-sm md:text-2xl flex flex-col gap-6 leading-[1.20] text-[#666] font-semibold md:font-bold md:w-[1000px]">
                                    <li>
                                        {t("Advantage.advantageEnterpriseReminderDescription")}
                                    </li>

                                    <li className='font-semibold md:font-bold w-[330px] md:w-[1000px]'>
                                        {t("Advantage.advantageEnterpriseReminderDescription2")}
                                    </li>
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
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}
export default Advantage; 