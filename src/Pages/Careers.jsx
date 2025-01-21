import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import Image1 from '../Assets/Images/Career/1.png';
import Image2 from '../Assets/Images/Career/2.png';
import Career1 from '../Assets/Images/Career/career1.png';
import Career2 from '../Assets/Images/Career/career2.png';
import Career3 from '../Assets/Images/Career/career3.png';
import ImageM1 from '../Assets/Images/Career/M1.png';
import ImageM2 from '../Assets/Images/Career/M2.png';
import { Designer, Internship, Programmer, GraphicDesign, WebAndAppDesign, WebAndAppDevelopment, BrandingDesign, ProgrammerM, DesignerM, InternshipM } from '../Components/Outline.jsx';
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';



const Careers = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
            offset: 200,
        });
    }, []);

    return(
        <div className='flex flex-col w-full justify-center text-center gap-[150px] md:gap-[200px] pt-[50px] xl:pt-[80px] pb-[250px]'>
            {/* Top Image */}
            {/* Web */}
            <div className='hidden xl:block relative'>
                <img src={Image1} alt='' className='object-cover w-full'/>
                <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px] text-[#D1D5DB] font-light'>
                    <div>
                        {t("Career.workTogether")}
                    </div>
                    <div>
                        {t("Career.workTogether2")}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='xl:hidden relative'>
                <img src={ImageM1} alt="" className='object-cover w-full'/>
                <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] md:text-6xl lg:text-8xl text-[#D1D5DB] font-light w-full'>
                    <div className='leading-normal'>
                        <div>
                            {t("Career.letsMobile")}
                        </div> 
                        <div>
                            {t("Career.workTogetherMobile")}
                        </div>
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className='flex flex-col justify-center items-center w-full px-[25px]'>
                <div className='flex flex-col gap-[50px] md:gap-[150px] max-w-[1200px]'>
                    {/* Web */}
                    <div className='hidden xl:flex flex-col gap-[30px]'>
                        <div className='hidden md:flex flex-col text-5xl text-[#557AAA] font-bold text-left leading-normal' data-aos="fade-up">
                            <div className='block'>{t("Career.careerOpportunitiesTitle")}</div>
                            <div className='block'>{t("Career.careerOpportunitiesTitle2")}</div>
                        </div>
                        <div className='flex flex-col leading-normal font-normal text-[#4B5563] text-2xl text-left' data-aos="fade-up" data-aos-delay="200">
                            <div>
                                {t("Career.careerOpportunitiesDescription")}
                            </div>
                            <div>
                                {t("Career.careerOpportunitiesDescription2")}
                            </div>
                            <div>
                                {t("Career.careerOpportunitiesDescription3")}
                            </div>
                        </div>  
                    </div>
                    {/* Mobile */}
                    <div className='xl:hidden flex flex-col gap-[30px] '>
                        <div className='xl:hidden flex flex-col text-xl md:text-4xl text-[#557AAA] font-bold text-left leading-normal' data-aos="fade-up">
                            <div className='md:hidden leading-normal'>
                                <div>{t("Career.careerOpportunitiesTitleMobile")}</div>
                                <div>{t("Career.careerOpportunitiesTitleMobile2")}</div>
                            </div>
                            <div className='hidden md:block leading-normal'>
                                <div>{t("Career.careerOpportunitiesTitleIpad")}</div>
                            </div>
                        </div>
                        <div className='flex flex-col leading-normal font-normal text-[#4B5563] text-base md:text-lg lg:text-2xl text-left' data-aos="fade-up" data-aos-delay="200">
                            <div className='flex flex-col md:flex-row leading-normal md:gap-1'>
                                <div className='leading-normal'>
                                    {t("Career.careerOpportunitiesDescriptionMobile")}
                                </div>
                                <div className='leading-normal'>
                                    {t("Career.careerOpportunitiesDescriptionMobile2")}
                                </div>
                            </div>
                            <div className='leading-normal'>
                                {t("Career.careerOpportunitiesDescriptionMobile3")}
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            {/* Careers */}
            <div className='flex flex-col gap-[100px] md:gap-[200px] px-[25px]'>
                {/* Career 1 */}  
                <div className='xl:flex xl:justify-center'>
                    <div className='relative flex flex-col xl:flex-row gap-[30px] md:gap-0 max-w-[1500px] md:h-[750px] lg:h-[850px] xl:h-auto'>
                        <div className='md:hidden flex justify-center items-center'>
                            <img src={Career1} alt="" className='object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        </div>
                        <img src={Career1} alt="" className='hidden md:flex object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        <div className='relative' data-aos="fade-up" data-aos-delay="600">
                            <div className='md:absolute xl:relative md:top-[-200px] xl:top-[100px] md:left-[90px] air:left-[110px] lg:left-[200px] xl:left-[-200px] flex flex-col items-center xl:items-start gap-[20px] md:gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[30px] md:p-[50px] w-full md:w-[540px] xl:w-[700px] h-auto shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-xl md:text-4xl text-[#557AAA] font-bold leading-normal'>
                                            {t("Career.ItProgrammer.ItProgrammerTitle")}
                                        </div>
                                        <div className='flex items-center gap-3 md:gap-[30px]'>
                                            <div className='hidden md:block'>
                                                <Programmer />
                                            </div>
                                            <div className='md:hidden'>
                                                <ProgrammerM />
                                            </div>
                                            <div className='text-sm md:text-xl text-[#153764] font-medium leading-normal'>
                                                <div>{t("Career.ItProgrammer.ItProgrammerDescription")}</div>
                                                <div>{t("Career.ItProgrammer.ItProgrammerDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-10 md:gap-[97px] pl-3 text-sm md:text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.ItProgrammer.Skill.skill_1")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_2")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_3")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_4")}</li>
                                        </ul>
                                        <ul className='list-disc list-inside leading-normal'>
                                            <li>{t("Career.ItProgrammer.Skill.skill_5")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_6")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_7")}</li>
                                            <li>{t("Career.ItProgrammer.Skill.skill_8")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career 2 */}
                <div className='xl:flex xl:justify-center'>
                    <div className='relative flex flex-col xl:flex-row gap-[30px] md:gap-0 max-w-[1500px] md:h-[710px] lg:h-[810px]'>
                        {/* Mobile */}
                        <div className='md:hidden flex justify-center items-center'>
                            <img src={Career2} alt="" className='object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        </div>
                        {/* web */}
                        <img src={Career2} alt="" className='hidden md:block object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        <div className='relative' data-aos="fade-up" data-aos-delay="400">
                            <div className='md:absolute xl:relative md:top-[-200px] xl:top-[100px] md:left-[90px] air:left-[110px] lg:left-[200px] xl:left-[-200px] flex flex-col items-center xl:items-start gap-[20px] md:gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[30px] md:p-[50px] w-full md:w-[540px] xl:w-[700px] h-auto shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                <div className='w-[285px] md:w-[432px] flex flex-col gap-[20px]'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-xl md:text-4xl text-[#557AAA] font-bold leading-normal'>
                                            {t("Career.UiDesigner.UiDesignerTitle")}
                                        </div>
                                        <div className='flex items-center gap-3 md:gap-[30px]'>
                                            <div className='hidden md:block'>
                                                <Designer />
                                            </div>
                                            <div className='md:hidden'>
                                                <DesignerM />
                                            </div>
                                            <div className='text-sm md:text-xl text-[#153764] font-medium leading-normal'>
                                                <div>{t("Career.UiDesigner.UiDesignerDescription")}</div>
                                                <div>{t("Career.UiDesigner.UiDesignerDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-[97px] pl-3 text-sm md:text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.UiDesigner.Skill.skill_1")}</li>
                                            <li>{t("Career.UiDesigner.Skill.skill_2")}</li>
                                            <li>{t("Career.UiDesigner.Skill.skill_3")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career 3 */}
                <div className='xl:flex xl:justify-center'>
                    <div className='relative flex flex-col xl:flex-row gap-[30px] md:gap-0 max-w-[1500px] md:h-[800px] lg:h-[900px]'>
                        <div className='md:hidden flex justify-center items-center'>
                            <img src={Career3} alt="" className='object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        </div>
                        <img src={Career3} alt="" className='hidden md:block object-cover w-[380px] md:w-full xl:w-[1000px] h-[266px] md:h-[600px] lg:h-[700px] rounded-[5px] md:rounded-[10px]' data-aos="fade-up" data-aos-delay="400"/>
                        <div className='relative' data-aos="fade-up" data-aos-delay="400">
                            <div className='md:absolute xl:relative md:top-[-200px] xl:top-[100px] md:left-[90px] air:left-[110px] lg:left-[200px] xl:left-[-200px] flex flex-col items-center xl:items-start gap-[20px] md:gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[30px] md:p-[50px] w-full md:w-[540px] xl:w-[700px] h-auto shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex flex-col gap-5 w-[305px] md:w-full'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-xl md:text-4xl text-[#557AAA] font-bold leading-normal'>
                                            {t("Career.Internship.InternshipTitle")}
                                        </div> 
                                        <div className='flex gap-3 md:gap-[30px]'>
                                            <div className='hidden md:block'>
                                                <Internship />
                                            </div>
                                            <div className='md:hidden'>
                                                <InternshipM />
                                            </div>
                                            <div className='text-sm md:text-xl text-[#153764] font-medium leading-normal'>
                                                <div>{t("Career.Internship.InternshipDescription")}</div>
                                                <div>{t("Career.Internship.InternshipDescription2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Web */}
                                    <div className='hidden xl:flex justify-between pl-3 text-sm md:text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.Internship.Skill.skill_1")}</li>
                                            <li>{t("Career.Internship.Skill.skill_2")}</li>
                                            <li>{t("Career.Internship.Skill.skill_3")}</li>
                                        </ul>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.Internship.Skill.skill_4")}</li>
                                            <li>{t("Career.Internship.Skill.skill_5")}</li>
                                            <li>{t("Career.Internship.Skill.skill_6")}</li>
                                            <li>{t("Career.Internship.Skill.skill_7")}</li>
                                        </ul>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.Internship.Skill.skill_8")}</li>
                                            <li>{t("Career.Internship.Skill.skill_9")}</li>
                                            <li>{t("Career.Internship.Skill.skill_10")}</li>
                                            <li>{t("Career.Internship.Skill.skill_11")}</li>
                                        </ul>
                                    </div>
                                    {/* Mobile */}
                                    <div className='xl:hidden flex justify-between pl-3 text-sm md:text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.Internship.Skill.skill_1")}</li>
                                            <li>{t("Career.Internship.Skill.skill_2")}</li>
                                            <li>{t("Career.Internship.Skill.skill_3")}</li>
                                            <li>{t("Career.Internship.Skill.skill_4")}</li>
                                            <li>{t("Career.Internship.Skill.skill_5")}</li>
                                        </ul>
                                        <ul className=' list-disc list-inside leading-normal'>
                                            <li>{t("Career.Internship.Skill.skill_6")}</li>
                                            <li>{t("Career.Internship.Skill.skill_7")}</li>
                                            <li>{t("Career.Internship.Skill.skill_8")}</li>
                                            <li>{t("Career.Internship.Skill.skill_9")}</li>
                                            <li>{t("Career.Internship.Skill.skill_10")}</li>
                                            <li>{t("Career.Internship.Skill.skill_11")}</li>    
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Image & Discover */}
            <div className='flex flex-col gap-[250px]'>
                <div className="relative leading-tight">
                    {/* Bottom Image */}
                    <div>
                        {/* Background Image */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <img src={Image2} alt='' className="hidden md:block w-full h-[500px] object-cover" />
                            <img src={ImageM2} alt='' className="md:hidden w-full h-[1066px] object-cover" />
                        </div>

                        {/* Centered Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[60px]">
                            {/* Main Title */}
                            <div className="flex flex-col items-center gap-5 text-center text-[#D1D5DB] leading-normal" data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base md:text-[32px] font-normal leading-normal w-[223px] md:w-full'>
                                    {t("Career.amazingThings")}
                                </div>
                                <div className='text-xl md:text-5xl font-bold leading-normal'>
                                    {t("Career.exploreInnovate")}
                                </div>
                            </div>

                            {/* Icons Section */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-[100px] md:gap-[80px] xl:gap-[150px] text-sm font-light text-[#D1D5DB]" data-aos="fade-up" data-aos-delay="400">
                                {/* Icon 1 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <GraphicDesign />
                                    <div>
                                        <div className='leading-normal'>
                                            {t("Career.graphic")} 
                                        </div>
                                        <div className='leading-normal'>
                                            {t("Career.design")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 2 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <WebAndAppDesign />
                                    <div>
                                        <div className='leading-normal'>
                                            {t("Career.webApp")}
                                        </div>
                                        <div className='leading-normal'>
                                            {t("Career.designW")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 3 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <WebAndAppDevelopment />
                                    <div>
                                        <div className='leading-normal'>
                                            {t("Career.webApp")}
                                        </div>
                                        <div className='leading-normal'>
                                            {t("Career.development")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 4 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <BrandingDesign />
                                    <div>
                                        <div className='leading-normal'>
                                            {t("Career.branding")}
                                        </div>
                                        <div className='leading-normal'>
                                            {t("Career.designB")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Discover Our Style Page */}
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[1200px] flex flex-col gap-[250px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col md:gap-5" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-4xl md:text-5xl text-[#153764] font-bold leading-normal flex gap-2 justify-center">{t("Career.buildFantastic")} <div className='text-[#557AAA]'>{t("Career.buildAwesomeC")}</div></div>
                                <div className="text-4xl md:text-5xl text-[#557AAA] font-bold leading-normal">{t("Career.buildAwesome")}</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="400">
                                    <a
                                        href='/team'
                                        className="text-base md:text-2xl text-[#153764] font-normal leading-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                    >
                                        {t("Career.discoverOurStyle")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll To Top Button */}
            <div className='absolute'>
                <ScrollToTopButton />
            </div>
        </div>
    )
}
export default Careers;