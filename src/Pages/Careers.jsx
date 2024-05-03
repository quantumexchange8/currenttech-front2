import React from 'react';
import Gear from '../Assets/Images/Gear.png';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import {useState} from 'react';
import ButtonComponent from '../Components/ButtonComponent.jsx';

const Careers = () => {

    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="\assets\videos\Career.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-5 md:left-[100px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <span className='text-xl md:text-5xl font-bold'>Career Opportunities </span>
                    <div className='flex flex-col text-base md:text-4xl font-medium leading-tight'>
                        <span>We're not just creating products. </span>
                        <span>We're crafting solutions to </span>
                        <span>problems for the people who </span>
                        <span>use them. That's our forte!</span>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[200px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='flex w-[230px] md:w-[863px] text-base md:text-5xl font-bold text-left leading-tight'>
                                Join Our Team for Exciting Career Opportunities
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                Empower your future with Current Tech Industries. Join our visionary team, 
                                embrace diversity, and work on impactful projects. Explore career opportunities 
                                that fuel your growth and make a difference.
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
                                <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                    IT Programmer
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                    We welcome IT programmers to join our team. They should be proficient in 
                                    programming, testing, and maintaining code for software applications, 
                                    capable of solving complex programming problems, collaborating with teams, 
                                    and staying updated with technology trends for efficient development and 
                                    secure solutions.
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                                Skill & Experience
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-tight"> 
                                    <li>LARAVEL PHP</li>
                                    <li>REACT JS</li>
                                    <li>VUE JS</li>
                                    <li>FLUTTER</li>
                                    <li>CSS / HTML</li>
                                    <li>JAVA SCRIPT</li>
                                    <li>MQL4 & MQL5</li>
                                    <li className='mt-5 md:mt-12' >AT LEAST 1 YEAR(S) OF EXPERIENCE.</li>
                                </ul> 
                            </div>
                            <div className='flex flex-col gap-[50px] md:hidden'></div>
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
                                    UI/UX & Designer
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                UI/UX & Graphic designer focuses on creating user-friendly interfaces, 
                                conducting research, wireframing, prototyping, and collaborating with 
                                stakeholders. They aim to enhance user satisfaction, engagement, and 
                                accessibility through visually appealing designs and seamless experiences.
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                            <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                                <img src={Gear} alt="Gear" />
                                            </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                                Skill & Experience
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-tight"> 
                                    <li>FIGMA</li>
                                    <li>PHOTOSHOP</li>
                                    <li>ILLUSTRATOR</li>
                                    <li>SKETCH</li>
                                    <li>ADOBE XD</li>
                                    <li className='mt-5 md:t-12' >AT LEAST 1 YEAR(S) OF EXPERIENCE.</li>
                                </ul> 
                            </div>
                            <div className='flex flex-col gap-[50px] md:hidden'></div>
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
                                    Internship
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                    We offer internship opportunities to students or recent graduates to 
                                    participate in programming, UI/UX, and graphic design within our company, 
                                    providing them with practical experience in specific fields. Interns 
                                    contribute to the company's projects and activities while gaining valuable 
                                    skills and exploring potential career paths.
                                </div>  
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-left'>
                                        <div className='flex flex-row'>
                                        <div className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>
                                            <img src={Gear} alt="Gear" />
                                        </div>
                                            <div className='w-[303px] md:w-[863px] text-base md:text-4xl font-semibold md:font-bold text-left mx-6'>
                                                Skill & Experience
                                            </div>
                                        </div>
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-tight"> 
                                    <li>LARAVEL PHP</li>
                                    <li>REACT JS</li>
                                    <li>VUE JS</li>
                                    <li>FLUTTER</li>
                                    <li>CSS / HTML</li>
                                    <li>JAVA SCRIPT</li>
                                    <li>MQL4 & MQL5</li>
                                    <li className='mt-5 md:mt-12'>FIGMA</li>
                                    <li>PHOTOSHOP</li>
                                    <li>ILLUSTRATOR</li>
                                    <li>SKETCH</li>
                                    <li>ADOBE XD</li>
                                    <li className='mt-5 md:mt-12' >DEGREE HOLDER</li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px]'>
                        <div className='flex flex-col gap-5 md:gap-[50px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-xl md:text-5xl font-bold text-left'>
                                Don't hesitate!
                            </div>
                            <div className='flex flex-col text-[#000] text-base md:text-2xl font-semibold md:font-bold text-left leading-tight'>
                                Join us on an exciting journey towards endless possibilities and growth.
                                Embrace diverse career opportunities, unleash your potential, and become
                                part of a supportive community that values lifelong learning and personal
                                fulfillment. Let's build a brighter future together.
                            </div>

                            <div className='mt-6'>
                            <div 
                                className='flex items-center gap-10'>
                                <div 
                                className='hidden md:flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                onClick={() => handleButtonClick('whatsapp')}>
                                    <WhatsApp/>
                                    <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                        <span>Show QR to start</span>
                                        <span>communicate with us</span>
                                    </div>
                                </div>
                                <div 
                                className='hidden md:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                onClick={() => handleButtonClick('gmail')}>
                                    <Gmail/>
                                    <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                        <span>Don't hesitate!</span>
                                        <span>Send us a message</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Version */}
                            <div 
                                    className='flex flex-col items-left gap-5 md:hidden'>
                                    <div 
                                    className='flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Link to whatsapp start</span>
                                            <span>communicate with us.</span>
                                        </div>
                                    </div>

                                    <div 
                                    className='flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Don't hesitate!</span>
                                            <span>Send us a message</span>
                                        </div>
                                    </div>
                                </div>

                            <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;