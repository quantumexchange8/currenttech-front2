import React from 'react';
import Gear from '../Assets/Images/Gear.png';
import { WhatsApp, Gmail, GmailIcon } from '../Components/Brand.jsx';
import {useState} from 'react';
// import ButtonContact from '../Components/ButtonContact.jsx';
import Modal from '../Components/Modal';

const Careers = () => {

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
                    <span className='text-xl md:text-5xl font-bold'>Career Opportunities </span>
                    <div className='flex flex-col text-base md:text-4xl font-medium'>
                        <div className='hidden md:flex flex-col leading-[1.20]'>
                            <span>We're not just creating products. </span>
                            <span>We're crafting solutions to </span>
                            <span>problems for the people who </span>
                            <span>use them. That's our forte!</span>
                        </div>

                        <div className='flex flex-col leading-[1.20] md:hidden'>
                            <span>We're not just creating</span>
                            <span>products. We're crafting</span>
                            <span>solutions to problems for</span>
                            <span>the people who use them.</span>
                            <span>That's our forte!</span>
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
                                    <span>Join Our Team for Exciting</span>
                                    <span>Career Opportunities</span>
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='hidden md:flex flex-col leading-[1.20]'>
                                        <span>Empower your future with Current Tech Industries.</span>
                                        <span>Join our visionary team, embrace diversity, and work on</span>
                                        <span>impactful projects. Explore career opportunities that fuel</span>
                                        <span>your growth and make a difference.</span>
                                    </div>

                                    <div className='flex flex-col leading-[1.20] md:hidden'>
                                        <span>Empower your future with</span>
                                        <span>Current Tech Industries. Join our visionary</span>
                                        <span>team, embrace diversity, and work on</span>
                                        <span>impactful projects. Explore career</span>
                                        <span>opportunities that fuel your growth and</span>
                                        <span>make a difference.</span>
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
                                <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                    IT Programmer
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-tight'>
                                    <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                        <span>We welcome IT programmers to join our team. They</span>
                                            <span>should be proficient in programming, testing, and </span>
                                            <span>maintaining code for software applications, capable of</span>
                                            <span>solving complex programming problems, collaborating</span>
                                            <span>with teams, and staying updated with technology trends</span>
                                            <span>for efficient development and secure solutions.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>We welcome IT programmers to join our team.</span>
                                            <span>They should be proficient in programming,</span>
                                            <span>testing, and maintaining code for software</span>
                                            <span>applications, capable of solving complex</span>
                                            <span>programming problems, collaborating with</span>
                                            <span>teams, and staying updated with technology</span>
                                            <span>trends for efficient development and secure</span>
                                            <span>solutions.</span>
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
                                                Skill & Experience
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
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
                                    UI/UX & Designer
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='hidden md:flex flex-col leading-[1.20]'>
                                        <span>UI/UX & Graphic designer focuses on creating user-</span>
                                        <span>friendly interfaces, conducting research, wireframing,</span>
                                        <span>prototyping, and collaborating with stakeholders. They</span>
                                        <span>aim to enhance user satisfaction, engagement, and</span>
                                        <span>accessibility through visually appealing designs and</span>
                                        <span>seamless experiences.</span>
                                    </div>

                                    <div className='flex flex-col leading-[1.20] md:hidden'>
                                        <span>UI/UX & Graphic designer focuses on creating</span>
                                        <span>user-friendly interfaces, conducting research,</span>
                                        <span>wireframing, prototyping, and collaborating</span>
                                        <span>with stakeholders. They aim to enhance user</span>
                                        <span>satisfaction, engagement, and accessibility</span>
                                        <span>through visually appealing designs and</span>
                                        <span>seamless experiences.</span>
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
                                                Skill & Experience
                                            </div>
                                        </div>
                                        
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
                                    <li>FIGMA</li>
                                    <li>PHOTOSHOP</li>
                                    <li>ILLUSTRATOR</li>
                                    <li>SKETCH</li>
                                    <li>ADOBE XD</li>
                                    <li className='mt-5 md:mt-12' >AT LEAST 1 YEAR(S) OF EXPERIENCE.</li>
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
                                    Internship
                                </div>
                                <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                    <div className='hidden md:flex flex-col leading-[1.20]'>
                                        <span>We offer internship opportunities to students or recent</span>
                                        <span>graduates to participate in programming, UI/UX, and</span>
                                        <span>graphic design within our company, providing them with</span>
                                        <span>practical experience in specific fields. Interns contribute</span>
                                        <span>to the company's projects and activities while gaining</span>
                                        <span>valuable skills and exploring potential career paths.</span>
                                    </div>

                                    <div className='flex flex-col leading-[1.20] md:hidden'>
                                        <span>We offer internship opportunities to students</span>
                                        <span>or recent graduates to participate in</span>
                                        <span>programming, UI/UX, and graphic design </span>
                                        <span>within our company, providing them with</span>
                                        <span>practical experience in specific fields. Interns</span>
                                        <span>contribute to the company's projects and</span>
                                        <span>activities while gaining valuable skills and </span>
                                        <span>exploring potential career paths.</span>
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
                                                Skill & Experience
                                            </div>
                                        </div>
                                    </div>

                                <ul className="list-disc list-inside text-[#666] text-base md:text-4xl text-left font-bold mx-[65px] md:mx-24 leading-[1.20]"> 
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
                        <div className='flex flex-col gap-5 md:gap-[30px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-xl md:text-5xl font-bold text-left'>
                                Don't hesitate!
                            </div>
                            <div className='flex flex-col text-[#000] text-base md:text-2xl font-semibold md:font-bold text-left leading-[1.20]'>
                                Join us on an exciting journey towards endless possibilities and growth.
                                Embrace diverse career opportunities, unleash your potential, and become
                                part of a supportive community that values lifelong learning and personal
                                fulfillment. Let's build a brighter future together.
                                {/* <span>Join us on an exciting journey towards endless possibilities and growth.</span>
                                <span>Embrace diverse career opportunities, unleash your potential, and become</span>
                                <span>part of a supportive community that values lifelong learning and personal</span>
                                <span>fulfillment. Let's build a brighter future together.</span> */}
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
                                    <GmailIcon/>
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
                                    className='flex w-full md:w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='hidden md:flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Link to whatsapp start</span>
                                            <span>communicate with us.</span>
                                        </div>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left md:hidden w-full'>
                                            Link to whatsapp start communicate with us.
                                        </div>
                                    </div>

                                    <div 
                                    className='flex w-full md:w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='hidden md:flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Don't hesitate!</span>
                                            <span>Send us a message</span>
                                        </div>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left md:hidden w-full'>
                                            Don't hesitate! Send us a message.
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