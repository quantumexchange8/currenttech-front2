import React from 'react';
import { Website, ManagementSystem, PosSystem, SupportService, FrontBackend, ProjectTask, Reward,ManagementSystemMobile } from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import {useState} from 'react';
import ButtonComponent from '../Components/ButtonComponent.jsx';
import AttendantSystem from '../Assets/Images/AttendentSystemLogo.png';

const Advantage = () => {

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
                    <source src="/assets/videos/advantage.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-[20px] md:left-[100px] bottom-[20px] md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <span className=' text-xl md:text-5xl font-bold'>Independent </span>
                    <div className='flex flex-col text-base md:text-4xl font-medium leading-tight'>
                        <span>Having a powerful personal</span>
                        <span>system to accomplish your</span>
                        <span>goals is like technology</span>
                        <span>walking hand in hand with you.</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center '>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[200px] ml-5 md:ml-0 mr-5 md:mr-0'>
                        <div className='flex flex-col gap-5 md:gap-10'>
                            <div className='flex w-[260px] md:w-[863px] text-base md:text-5xl font-bold text-left leading-tight'>
                                The advantage of our technology for Self-Employed
                                {/* <span>The advantage of our technology</span>
                                <span>for Self-Employed</span> */}
                            </div>
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[950px] leading-tight'>
                                For self-employed individuals like you, regardless of the 
                                industry you're in, we firmly believe that your relationship 
                                with technology is indispensable. We specialize in 
                                tailoring high-quality systems specifically for you, 
                                ensuring that your business reaches new heights and 
                                making managing your relationships with customers 
                                easier and more intimate.
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#333]'></div>
                        <div className='flex flex-col md:gap-[150px] mt-[50px]'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                “We Tailor For You”
                            </div>
                            <div className='flex gap-[20px] md:gap-[100px] space-y-[50px] md:space-y-0'>
                                <div className='mt-[50px] md:mt-0'>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Website
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                        From domain registration to web design, we have service personnel 
                                        who will communicate with you in detail throughout the production 
                                        process to ensure that the final product fully meets your conceptual 
                                        requirements.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] space-y-[50px] md:space-y-0'>
                                <div className='md:flex mt-[50px] md:mt-0'>
                                    <ManagementSystem/>
                                </div>
                                <div className='mt-[50px] md:mt-0'>
                                    <ManagementSystemMobile/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Management System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                        Whether your independent business is large or small, you still need a 
                                        comprehensive management system. That's why we approach this 
                                        task with rigour to ensure that your business management is free 
                                        from any obstacles.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] space-y-[50px] md:space-y-0'>
                                <div className='mt-[50px] md:mt-0'>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Payment System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                        This is undoubtedly the most crucial service that businesses are 
                                        concerned about, and we excel in handling it flawlessly.
                                        Self-employed individuals can choose to use existing payment 
                                        channels or apply to integrate new payment solutions with us.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] space-y-[50px] md:space-y-0'>
                                <div className='mt-[50px] md:mt-0'>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Support & Service
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                        This is also one of the most important aspects we prioritise. We 
                                        provide the most comprehensive 24/5 service to ensure smooth 
                                        operation of your system, even if you need to add any new features 
                                        or additional services.
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-full h-[1px] bg-[#333] md:mb-[200px] mt-[50px]'></div>
                        </div>
                        

                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[20px] md:gap-[50px]'>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className=' text-xl md:text-5xl font-bold text-left'>
                                        Don't hesitate!
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-8 text-left text-base md:text-2xl font-bold md:w-[900px] flex flex-col gap-6">
                                            <li>Request a quote now for developing your personal independent system.</li>
                                            <li>Your can also schedule consultations with our service staff to discuss any development ideas. We do not charge any consultation fees for this service.</li>
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

                <div className='absolute left-5 md:left-[100px] bottom-1 md:bottom-[100px] flex flex-col text-white text-left gap-5 w-full'>
                    <span className='text-xl md:text-5xl font-bold md:gap-5'>Enterprise </span>
                    <div className='hidden md:flex flex-col text-[16px] md:text-4xl font-medium'>
                        <span>Powerful enterprises and robust</span>
                        <span>management systems are</span>
                        <span>absolutely inseparable, as they</span>
                        <span>possess the capability to manage</span>
                        <span>vast amounts of data effectively.</span>
                    </div>

                    <div className='flex flex-col text-[16px] md:text-4xl font-medium md:hidden'>
                        <span>Powerful enterprises and robust</span>
                        <span>management systems are absolutely</span>
                        <span>inseparable, as they possess the capability</span>
                        <span> to manage vast amounts of data effectively.</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                    <div className='flex flex-col md:gap-[200px]'>
                        <div className='flex flex-col gap-5 md:gap-10 ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                The advantage of our technology for Enterprise
                            </div>
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[950px] mb-[50px] md:mb-0 leading-tight'>
                                Excellent enterprise management encompasses human 
                                resources, administration, finance, as well as employee 
                                work progress reports, attendance, and various employee 
                                incentive systems. That's why our technology team has 
                                developed a meticulous and carefully designed 
                                management system tailored for all types of businesses.
                            </div>
                        </div>

                        <div className='flex flex-col ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='w-full h-[1px] bg-[#333]'></div>
                            <div className='flex flex-col md:gap-[150px] mt-[50px]'>
                                <div className='text-base md:text-5xl font-bold text-left mb-[30px] md:mb-0'>
                                    “We Customise For You”
                                </div>
                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div>
                                        <FrontBackend/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Frontend / Backend
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                            A sophisticated management system's front-end and back-end 
                                            reflect the professional image of the enterprise. To achieve even 
                                            more positive results, we have dedicated technical personnel 
                                            engaging in in-depth discussions with the enterprise management to 
                                            customise development and provide explanations.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='w-[120px] md:w-[300px] h-[24.63px] md:h-[112.31px]'>
                                        <img src={AttendantSystem} alt="Attendant System"/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Attendance System
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                            We have meticulously developed an effortless attendance tracking 
                                            system, providing a smooth and convenient solution for time 
                                            management. Furthermore, we have incorporated a reward 
                                            mechanism into the employee attendance system, encouraging 
                                            employees to demonstrate outstanding time management skills.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div>
                                        <ProjectTask/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Project Task
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                            Precise data visualisation enables real-time monitoring of project task 
                                            metrics, sales performance, and goal achievements, serving as a 
                                            driving force. Insights into team efficiency, challenges, and employee 
                                            responsibilities and contributions empower agile adjustments, 
                                            propelling sustainable company growth.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div>
                                        <Reward/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Reward Program
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                            We firmly believe that employees can enjoy unique company benefits 
                                            by igniting and unleashing engagement, earning points, and 
                                            unlocking badges. Additionally, our technology development team 
                                            has also integrated features for personalised contests and surprise 
                                            activities. Enhance employee work experience through rich 
                                            functionalities!
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 md:gap-[100px]'>
                                    <div>
                                        <SupportService/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Support & Service
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left leading-tight'>
                                            This is also one of the most important aspects we prioritise. In 
                                            addition to offering online 24/5 service support, we also provide
                                            one-on-one tutorials for our products. This ensures smooth operation 
                                            of your system throughout its usage, even if you need to add any new 
                                            features or additional services.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-[353px] h-[1px] bg-[#333] mb-[50px] mt-[50px]'></div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:mb-[200px]'>
                            <div className='flex flex-col gap-5 md:gap-[30px] ml-5 md:ml-0 mr-5 md:mr-0'>
                                <div className='text-xl md:text-5xl font-bold text-left'>
                                    Don't hesitate!
                                </div>
                                <div>
                                    <ul className="list-disc pl-8 text-left text-base md:text-2xl font-bold md:w-[900px] flex flex-col gap-6">
                                        <li>Request a quote now for developing your Enterprise system.</li>
                                        <li>Your company can also schedule consultations with our service staff to discuss any development ideas. We do not charge any consultation fees for this service.</li>
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className='hidden md:flex items-center gap-10'>
                                    <div 
                                    className=' w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Show QR to start</span>
                                            <span>communicate with us</span>
                                        </div>
                                    </div>
                                    <div 
                                    className='w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Don't hesitate!</span>
                                            <span>Send us a message</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile Version */}
                            <div className='flex flex-col mt-10 md:mt-0 mb-[100px] md:mb-0 ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div 
                                className='md:hidden flex flex-col items-left gap-5 '>
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
                            </div></div>
                        </div><ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                </div>
            </div>
        </div>
    )
}

export default Advantage;