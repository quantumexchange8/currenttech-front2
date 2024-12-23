import React, { useState } from 'react';
import Gear from '../Assets/Images/Gear.png';
import { WhatsApp, MobileWhatsApp, Gmail, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import careerVideo from '../Assets/videos/career.mp4';
import { useTranslation } from 'react-i18next';

import Image1 from '../Assets/Images/Career/1.png';
import Image2 from '../Assets/Images/Career/2.png';
import Career1 from '../Assets/Images/Career/career1.png';
import Career2 from '../Assets/Images/Career/career2.png';
import Career3 from '../Assets/Images/Career/career3.png';
import { Designer, Internship, Programmer, GraphicDesign, WebAndAppDesign, WebAndAppDevelopment, BrandingDesign } from '../Components/Outline.jsx';

const Careers = () => {
    const { t } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return(
        <div className='flex flex-col w-full justify-center text-center gap-[200px] pt-[80px] pb-[250px]'>
            {/* Top Image */}
            <div className='relative'>
                <img src={Image1} alt="" className='w-full'/>
                <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px] text-[#D1D5DB] font-light'>
                    <div>
                        LET'S WORK TOGETHER
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex flex-col gap-[50px] md:gap-[150px] max-w-[1200px]'>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='flex flex-col text-5xl text-[#557AAA] font-bold text-left leading-tight'>
                            <div className='block'>{t("Career.careerOpportunitiesTitle")}</div>
                            <div className='block'>{t("Career.careerOpportunitiesTitle2")}</div>
                        </div>
                        <div className='flex flex-col leading-[1.20] font-normal text-[#4B5563] text-2xl text-left'>
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

                    
                </div>
            </div>

            {/* Career 1 */}
            <div className='flex justify-center items-center'>
                <div className='relative flex max-w-[1500px]'>
                    <img src={Career1} alt="" className=' w-[1000px] h-[700px]'/>
                    <div className='relative'>
                        <div className='relative top-[100px] left-[-200px] flex flex-col gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[50px] w-[700px] h-[364px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                            <div className='text-4xl text-[#557AAA] font-bold'>
                                IT PROGRAMMER
                            </div>
                            <div className='flex gap-[30px]'>
                                <Programmer />
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-xl text-[#153764] font-medium'>
                                        Skill & at lease 1 Year(s) experience.
                                    </div>
                                    <div className='flex justify-between gap-[97px] pl-7 text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-outside'>
                                            <li>LARAVEL PHP</li>
                                            <li>REACT JS</li>
                                            <li>VUE JS</li>
                                            <li>FLUTTER</li>
                                        </ul>
                                        <ul className=' list-disc list-outside'>
                                            <li>CSS / HTML</li>
                                            <li>JAVA SCRIPT</li>
                                            <li>MQL4 & MQL5</li>
                                            <li>cBot - cTrader</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career 2 */}
            <div className='flex justify-center items-center'>
                <div className='relative flex max-w-[1500px]'>
                    <img src={Career2} alt="" className=' w-[1000px] h-[700px]'/>
                    <div className='relative'>
                        <div className='relative top-[100px] left-[-200px] flex flex-col gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[50px] w-[700px] h-[364px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                            <div className='text-4xl text-[#557AAA] font-bold'>
                                UI & UX DESIGNER
                            </div>
                            <div className='flex gap-[30px]'>
                                <Designer />
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-xl text-[#153764] font-medium'>
                                        Skill & at lease 1 Year(s) experience.
                                    </div>
                                    <div className='flex justify-between gap-[97px] pl-7 text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-outside'>
                                            <li>FIGMA</li>
                                            <li>PHOTOSHOP</li>
                                            <li>PS ILLUSTRATOR</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career 3 */}
            <div className='flex justify-center items-center'>
                <div className='relative flex max-w-[1500px]'>
                    <img src={Career3} alt="" className=' w-[1000px] h-[700px]'/>
                    <div className='relative'>
                        <div className='relative top-[100px] left-[-200px] flex flex-col gap-[30px] text-left bg-[#D5E7FF] rounded-[10px] p-[50px] w-[700px] h-[364px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                            <div className='text-4xl text-[#557AAA] font-bold'>
                                INTERNSHIP
                            </div>
                            <div className='flex gap-[30px]'>
                                <Internship />
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-xl text-[#153764] font-medium'>
                                        Skill & at lease Degree Holder.
                                    </div>
                                    <div className='flex justify-between gap-[55px] pl-7 text-xl text-[#4B5563] font-normal'>
                                        <ul className=' list-disc list-outside'>
                                            <li>FIGMA</li>
                                            <li>PHOTOSHOP</li>
                                            <li>PS ILLUSTRATOR</li>
                                        </ul>
                                        <ul className=' list-disc list-outside'>
                                            <li>LARAVEL PHP</li>
                                            <li>REACT JS</li>
                                            <li>VUE JS</li>
                                            <li>FLUTTER</li>
                                        </ul>
                                        <ul className=' list-disc list-outside'>
                                            <li>CSS / HTML</li>
                                            <li>JAVA SCRIPT</li>
                                            <li>MQL4 & MQL5</li>
                                            <li>cBot - cTrader</li>
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
                        <div>
                            <img src={Image2} alt="Image 5" className="w-full h-[500px] object-cover" />
                        </div>

                        {/* Centered Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[50px]">
                            {/* Main Title */}
                            <div className="flex flex-col gap-[10px] text-center text-[#D1D5DB] leading-tight">
                                <div className='text-[32px] font-normal'>
                                    WE CREATE AMAZING THINGS
                                </div>
                                <div className=' text-5xl font-bold '>
                                    WE EXPLORE AND INNOVATE
                                </div>
                            </div>

                            {/* Icons Section */}
                            <div className="flex justify-center items-center gap-[150px] text-sm font-normal text-[#D1D5DB]">
                                {/* Icon 1 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <GraphicDesign />
                                    <div>
                                        <div>
                                            AWESOME 
                                        </div>
                                        <div>
                                            DESIGN
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 2 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <WebAndAppDesign />
                                    <div>
                                        <div>
                                            POWERFUL
                                        </div>
                                        <div>
                                            FRAMEWORK
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 3 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <WebAndAppDevelopment />
                                    <div>
                                        <div>
                                            MOBILE
                                        </div>
                                        <div>
                                            FRIENDLY
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 4 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <BrandingDesign />
                                    <div>
                                        <div>
                                            PREMIUM
                                        </div>
                                        <div>
                                            RESOURCES
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
                            <div className="flex flex-col gap-[10px]" >
                                <div className="text-5xl text-[#153764] font-bold">BUILD FANTASTIC</div>
                                <div className="text-5xl text-[#557AAA] font-bold">BUILD AWESOME</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center">
                                    <a
                                        href='#'
                                        className="text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                    >
                                        DISCOVER OUR STYLE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Careers;