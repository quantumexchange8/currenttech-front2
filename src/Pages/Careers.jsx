import React, { useContext } from 'react';
import Gear from '../Assets/Images/Gear.png';
import { WhatsApp, Gmail, GmailIcon } from '../Components/Brand.jsx';
import {useState} from 'react';
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

    return (
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="\assets\videos\Career.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-5 md:left-[100px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <span className='text-xl md:text-5xl font-bold'>{t("Career.careerVideoTitle")}</span>
                    <div className='flex flex-col text-base md:text-4xl'>
                        <div className='flex flex-col leading-[1.20]'>
                            <span className={`${language === 'en' ? 'font-medium w-[200px] md:w-[540px]': 
                                                language === 'zh' ? 'font-semibold w-[240px] md:w-[540px]': 
                                                language === 'bm' ? 'font-medium w-[299px] md:w-[690px]': ''}`}>
                                {t("Career.careerVideoDescription")}
                            </span>
                        </div>                
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[200px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='flex flex-col w-[230px] md:w-[863px] text-base md:text-5xl font-bold text-left leading-[1.20]'>
                                    <span className={`${language === 'en' ? 'font-bold w-[353px] md:w-[863px]': 
                                                        language === 'zh' ? 'font-bold w-[353px] md:w-[863px]': 
                                                        language === 'bm' ? 'font-bold w-[353px] md:w-[863px]': ''}`}>
                                        <span className='block'>{t("Career.careerOpportunitiesTitle")}</span>
                                        <span className='block'>{t("Career.careerOpportunitiesTitle2")}</span>
                                    </span>
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`${language === 'en' ? 'font-medium w-[330px] md:w-[890px]': 
                                                            language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                            language === 'bm' ? 'font-medium w-[330px] md:w-[890px]': ''}`}>
                                            {t("Career.careerOpportunitiesDescription")}
                                        </span>
                                    </div>
                                </div>  
                            </div>
                            <div className='w-full h-[1px] bg-[#333]'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[100px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='w-[353px] md:w-[863px] text-base md:text-[64px] font-bold text-left'>
                                {t("Career.ItProgrammer.ItProgrammerTitle")}
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                    <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                        <div className='flex flex-col leading-[1.20]'>
                                            <span className={`${language === 'en' ? 'font-medium w-[353px] md:w-[930px]': 
                                                                language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                                language === 'bm' ? 'font-medium w-[330px] md:w-[980px]': ''}`}>
                                                {t("Career.ItProgrammer.ItProgrammerDescription")}
                                            </span>
                                        </div>
                                    </div>  
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                            {t("Career.ItProgrammer.Skill.skillTitle")}
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-outside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                    <li>{t("Career.ItProgrammer.Skill.skill_1")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_2")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_3")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_4")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_5")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_6")}</li>
                                    <li>{t("Career.ItProgrammer.Skill.skill_7")}</li>
                                    <li className='mt-5 md:mt-12' >{t("Career.ItProgrammer.Skill.experience")}</li>
                                </ul> 
                            </div>
                            <div className='flex flex-col gap-[50px]'></div>
                            <div className='w-full h-[1px] bg-[#333] self-center'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[100px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                    {t("Career.UiDesigner.UiDesignerTitle")}
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[930px]': 
                                                            language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                            language === 'bm' ? 'font-medium w-[340px] md:w-[980px]': ''}`}>
                                            {t("Career.UiDesigner.UiDesignerDescription")}
                                        </span>
                                    </div>
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                                {t("Career.UiDesigner.Skill.skillTitle")}
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-outside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                    <li>{t("Career.UiDesigner.Skill.skill_1")}</li>
                                    <li>{t("Career.UiDesigner.Skill.skill_2")}</li>
                                    <li>{t("Career.UiDesigner.Skill.skill_3")}</li>
                                    <li>{t("Career.UiDesigner.Skill.skill_4")}</li>
                                    <li>{t("Career.UiDesigner.Skill.skill_5")}</li>
                                    <li className='mt-5 md:mt-12' >{t("Career.UiDesigner.Skill.experience")}</li>
                                </ul> 
                            </div>
                            <div className='flex flex-col gap-[50px]'></div>
                            <div className='w-[353px] md:w-full h-[1px] bg-[#333] self-center'></div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[100px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                    {t("Career.Internship.InternshipTitle")}
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`${language === 'en' ? 'font-medium w-[340px] md:w-[930px]': 
                                                            language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                            language === 'bm' ? 'font-medium w-[335px] md:w-[960px]': ''}`}>
                                            {t("Career.Internship.InternshipDescription")}
                                        </span>
                                    </div>
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                        <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                            <img src={Gear} alt="Gear" />
                                        </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                                {t("Career.Internship.Skill.skillTitle")}
                                            </div>
                                        </div>
                                    </div>

                                <ul className="list-disc list-outside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                    <li>{t("Career.Internship.Skill.skill_1")}</li>
                                    <li>{t("Career.Internship.Skill.skill_2")}</li>
                                    <li>{t("Career.Internship.Skill.skill_3")}</li>
                                    <li>{t("Career.Internship.Skill.skill_4")}</li>
                                    <li>{t("Career.Internship.Skill.skill_5")}</li>
                                    <li>{t("Career.Internship.Skill.skill_6")}</li>
                                    <li>M{t("Career.Internship.Skill.skill_7")}</li>
                                    <li className='mt-5 md:mt-12'>{t("Career.Internship.Skill.skill_8")}</li>
                                    <li>{t("Career.Internship.Skill.skill_9")}</li>
                                    <li>{t("Career.Internship.Skill.skill_10")}</li>
                                    <li>{t("Career.Internship.Skill.skill_11")}</li>
                                    <li>{t("Career.Internship.Skill.skill_12")}</li>
                                    <li className='mt-5 md:mt-12' >{t("Career.Internship.Skill.skill_13")}</li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px]'>
                        <div className='flex flex-col gap-5 md:gap-[30px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-xl md:text-5xl font-bold text-left'>
                            {t("Career.careerReminderTitle")}
                            </div>
                            <div className='flex flex-col text-[#000] text-base md:text-2xl font-semibold md:font-bold text-left leading-[1.20]'>
                                <span className={`${language === 'en' ? 'font-medium w-[330px] md:w-[930px]': 
                                                    language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]': 
                                                    language === 'bm' ? 'font-medium w-[340px] md:w-[930px]': ''}`}>
                                    {t("Career.careerReminderDescription")}
                                </span>
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
                                                <span className='block'>{t("Career.whatsappDescription")}</span>
                                                <span className='block'>{t("Career.whatsappDescription2")}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                className='hidden md:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                onClick={() => handleButtonClick('gmail')}>
                                    <GmailIcon/>
                                    <div className='flex flex-col text-[#666] text-base text-left'>
                                        <div className="flex flex-col leading-[1.20]">
                                            <span className={`${language === 'en' ? 'font-medium w-[140px]' : 
                                                                language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                language === 'bm' ? 'font-medium w-[140px]' : ''}`}>
                                                <span className='block'>{t("Career.gmailDescription")}</span>
                                                <span className='block'>{t("Career.gmailDescription2")}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                {/* Mobile Version */}
                                <div 
                                    className='flex flex-col items-left gap-5 md:hidden'>
                                    <div 
                                    className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[170px]' : 
                                                                    language === 'bm' ? 'font-medium w-[170px]' : ''}`}>    
                                                    <span className='block'>{t("Career.whatsappDescriptionMobile")}</span>
                                                    <span className='block'>{t("Career.whatsappDescriptionMobile2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div 
                                    className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left w-full'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[170px]' : 
                                                                    language === 'bm' ? 'font-medium w-[170px]' : ''}`}>
                                                    <span className='block'>{t("Career.gmailDescriptionMobile")}</span>
                                                    <span className='block'>{t("Career.gmailDescriptionMobile2")}</span>
                                                </span>
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