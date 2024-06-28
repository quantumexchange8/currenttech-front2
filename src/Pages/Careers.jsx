import React, {useContext, useState } from 'react';
import Gear from '../Assets/Images/Gear.png';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Careers = () => {
    const { t, language} = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return(
        <div>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="\assets\videos\career.mp4" type="video/mp4"/>
                </video>

                <div className='flex flex-col absolute bottom-[50px] md:bottom-[100px] left-[20px] md:left-[410px] text-left text-white gap-5'>
                    <div className='text-2xl md:text-[80px] font-bold'>{t("Career.careerVideoTitle")}</div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] flex flex-col w-full'>
                        <div className='flex flex-col gap-[50px] md:gap-[150px] mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px] mx-5 md:mx-0'>
                            <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                                <div className='flex flex-col md:w-[863px] text-base md:text-5xl font-bold text-left leading-[1.20]'>
                                    <div className='block'>{t("Career.careerOpportunitiesTitle")}</div>
                                    <div className='block'>{t("Career.careerOpportunitiesTitle2")}</div>
                                </div>
                                <div className='text-[#666] text-sm md:text-2xl text-left'>
                                    <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                        {t("Career.careerOpportunitiesDescription")}
                                    </div>
                                </div>  
                            </div>

                            <div className='w-full h-[1px] bg-[#333]'></div>

                            <div className='flex flex-col gap-[30px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='w-[353px] md:w-[863px] text-base md:text-[48px] font-bold text-left'>
                                        {t("Career.ItProgrammer.ItProgrammerTitle")}
                                    </div>
                                    <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                        <div className='text-[#666] text-sm md:text-2xl text-left'>
                                            <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                                {t("Career.ItProgrammer.ItProgrammerDescription")}
                                            </div>
                                        </div>  
                                    </div>  
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex justify-left'>
                                        <div className='flex flex-row items-center gap-[20px]'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-[32px] font-semibold md:font-bold text-left '>
                                                {t("Career.ItProgrammer.Skill.skillTitle")}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-outside text-[#666] text-sm md:text-[32px] text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                        <li>{t("Career.ItProgrammer.Skill.skill_1")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_2")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_3")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_4")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_5")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_6")}</li>
                                        <li>{t("Career.ItProgrammer.Skill.skill_7")}</li>
                                        <li className={`mt-5 md:mt-12 ${language === 'en' ? 'font-bold w-[353px] md:w-[1000px]': 
                                                                        language === 'zh' ? 'font-bold w-[353px] md:w-[1000px]': 
                                                                        language === 'bm' ? 'font-bold w-[180px] md:w-[1000px]': ''}`}>
                                                            {t("Career.ItProgrammer.Skill.experience")}</li>
                                    </ul> 
                                </div>
                            </div>

                            <div className='w-full h-[1px] bg-[#333] self-center'></div>

                            <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                                <div className='flex flex-col gap-5 md:gap-[30px]'>
                                    <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                        {t("Career.UiDesigner.UiDesignerTitle")}
                                    </div>
                                    <div className='text-[#666] text-sm md:text-2xl font-semibold text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                            {t("Career.UiDesigner.UiDesignerDescription")}
                                        </div>
                                    </div>  
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-left'>
                                        <div className='flex flex-row items-center gap-[20px]'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-[32px] font-semibold md:font-bold text-left'>
                                                {t("Career.UiDesigner.Skill.skillTitle")}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-outside text-[#666] text-sm md:text-[32px] text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                        <li>{t("Career.UiDesigner.Skill.skill_1")}</li>
                                        <li>{t("Career.UiDesigner.Skill.skill_2")}</li>
                                        <li>{t("Career.UiDesigner.Skill.skill_3")}</li>
                                        <li className={`mt-5 md:mt-12 ${language === 'en' ? 'font-bold w-[353px] md:w-[1000px]': 
                                                                        language === 'zh' ? 'font-bold w-[353px] md:w-[1000px]': 
                                                                        language === 'bm' ? 'font-bold w-[180px] md:w-[1000px]': ''}`}>
                                                            {t("Career.ItProgrammer.Skill.experience")}
                                        </li>
                                    </ul> 
                                </div>
                            </div>

                            <div className='w-full h-[1px] bg-[#333] self-center'></div>

                            <div className='flex flex-col gap-[30px] md:gap-[100px] '>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                        {t("Career.Internship.InternshipTitle")}
                                    </div>
                                    <div className='text-[#666] text-sm md:text-2xl text-left'>
                                        <div className='flex flex-col leading-[1.20] font-semibold md:w-[1000px]'>
                                            {t("Career.Internship.InternshipDescription")}
                                        </div>
                                    </div>  
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex justify-left'>
                                        <div className='flex flex-row items-center gap-[20px]'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left'>
                                                {t("Career.Internship.Skill.skillTitle")}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-outside text-[#666] text-sm md:text-[32px] text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                        <li>{t("Career.Internship.Skill.skill_1")}</li>
                                        <li>{t("Career.Internship.Skill.skill_2")}</li>
                                        <li>{t("Career.Internship.Skill.skill_3")}</li>
                                        <li>{t("Career.Internship.Skill.skill_4")}</li>
                                        <li>{t("Career.Internship.Skill.skill_5")}</li>
                                        <li>{t("Career.Internship.Skill.skill_6")}</li>
                                        <li>{t("Career.Internship.Skill.skill_7")}</li>
                                        <li className='mt-5 md:mt-12'>{t("Career.Internship.Skill.skill_8")}</li>
                                        <li>{t("Career.Internship.Skill.skill_9")}</li>
                                        <li>{t("Career.Internship.Skill.skill_10")}</li>
                                        <li className='mt-5 md:mt-12' >{t("Career.Internship.Skill.skill_13")}</li>
                                    </ul> 
                                </div>
                            </div>

                            <div className='w-full h-[1px] bg-[#333] self-center md:hidden'></div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-5xl font-bold text-left'>
                                        {t("Career.careerReminderTitle")}
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm md:text-[32px] text-left leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-semibold w-[353px] md:w-[970px]': 
                                                            language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                            language === 'bm' ? 'font-semibold w-[353px] md:w-[1000px]': ''}`}>
                                            {t("Career.careerReminderDescription")}
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:flex flex-col gap-[50px]'>
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
                                                                        language === 'zh' ? 'w-[230px] font-semibold' : 
                                                                        language === 'bm' ? 'w-[230px] font-medium' : ''}`}>
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
export default Careers;