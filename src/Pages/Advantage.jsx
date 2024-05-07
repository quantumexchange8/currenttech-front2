import React from 'react';
import { Website, ManagementSystem, PosSystem, SupportService, FrontBackend, ProjectTask, Reward} from '../Components/Outline.jsx';
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
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="/assets/videos/advantage.mp4" type="video/mp4"/>
                </video>

                <div className='absolute left-5 md:left-[100px] bottom-5 md:bottom-[100px] flex flex-col text-white text-left gap-5'>
                    <span className=' text-xl md:text-5xl font-bold'>Independent </span>
                    <div className='flex flex-col text-base md:text-4xl font-medium leading-[1.20]'>
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
                            <div className='flex w-[260px] md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                The advantage of our technology for Self-Employed

                            </div>
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px]'>
                                <div className='hidden md:flex flex-col leading-[1.20]'>
                                    <span>For self-employed individuals like you, regardless of the</span>
                                    <span>industry you're in, we firmly believe that your relationship</span>
                                    <span> with technology is indispensable. We specialize in </span>
                                    <span>tailoring high-quality systems specifically for you, </span>
                                    <span>ensuring that your business reaches new heights and</span>
                                    <span>making managing your relationships with customers</span>
                                    <span> easier and more intimate.</span>
                                </div>
                                
                                <div className='flex flex-col leading-[1.20] md:hidden'>
                                    <span>For self-employed individuals like you,</span>
                                    <span>regardless of the industry you're in, we</span>
                                    <span>firmly believe that your relationship with</span>
                                    <span>technology is indispensable. We specialise</span>
                                    <span>in tailoring high-quality systems specifically</span>
                                    <span>for you, ensuring that your business reaches </span>
                                    <span>new heights and making managing your</span>
                                    <span>relationships with customers easier and</span>
                                    <span>more intimate.</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#333]'></div>
                        <div className='flex flex-col gap-[30px] md:gap-[150px]'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                “We Tailor For You”
                            </div>
                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Website
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>From domain registration to web design, we have service personnel</span>
                                            <span>who will communicate with you in detail throughout the production</span>
                                            <span>process to ensure that the final product fully meets your conceptual</span>
                                            <span>requirements.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>From domain registration to web</span>
                                            <span>design, we have service personnel who</span>
                                            <span>will communicate with you in detail</span>
                                            <span>throughout the production process to</span>
                                            <span>ensure that the final product fully</span>
                                            <span>meets your conceptual requirements.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                    <ManagementSystem/>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Management System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>Whether your independent business is large or small, you still need a </span>
                                            <span>comprehensive management system. That's why we approach this</span>
                                            <span>task with rigour to ensure that your business management is free </span>
                                            <span>from any obstacles.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>Whether your independent business</span>
                                            <span>is large or small, you still need a</span>
                                            <span>comprehensive management system.</span>
                                            <span>That's why we approach this task</span>
                                            <span>with rigour to ensure that your </span>
                                            <span>business management is free from</span>
                                            <span>any obstacles.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                <div>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Payment System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>This is undoubtedly the most crucial service that businesses are</span>
                                            <span>concerned about, and we excel in handling it flawlessly.</span>
                                            <span>Self-employed individuals can choose to use existing payment</span>
                                            <span>channels or apply to integrate new payment solutions with us.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>This is undoubtedly the most crucial</span>
                                            <span>service that businesses are concerned</span>
                                            <span>about, and we excel in handling it</span>
                                            <span>flawlessly. Self-employed individuals</span>
                                            <span>can choose to use existing payment</span>
                                            <span>channels or apply to integrate new</span>
                                            <span>payment solutions with us.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] mt-[20px] md:mt-0'>
                                <div>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Support & Service
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>This is also one of the most important aspects we prioritise. We</span>
                                            <span>provide the most comprehensive 24/5 service to ensure smooth</span>
                                            <span>operation of your system, even if you need to add any new features</span>
                                            <span>or additional services.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>This is also one of the most important</span>
                                            <span>aspects we prioritise. We provide the</span>
                                            <span>most comprehensive 24/5 service to</span>
                                            <span>ensure smooth operation of your </span>
                                            <span>system, even if you need to add any</span>
                                            <span>new features or additional services.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-full h-[1px] bg-[#333] md:mb-[200px] mt-[20px]'></div>
                        </div>
                        

                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[20px] md:gap-[50px]'>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className=' text-xl md:text-5xl font-bold text-left'>
                                        Don't hesitate!
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-8 text-left text-base md:text-2xl font-bold md:w-[900px] flex flex-col gap-6 leading-[1.20]">
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
                    <div className='hidden md:flex flex-col text-[16px] md:text-4xl font-medium leading-[1.20]'>
                        <span>Powerful enterprises and robust</span>
                        <span>management systems are</span>
                        <span>absolutely inseparable, as they</span>
                        <span>possess the capability to manage</span>
                        <span>vast amounts of data effectively.</span>
                    </div>

                    <div className='flex flex-col text-[16px] md:text-4xl font-medium md:hidden leading-[1.20]'>
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
                            <div className='text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] mb-[50px] md:mb-0'>
                                <div className='hidden md:flex flex-col leading-[1.20]'>
                                    <span>Excellent enterprise management encompasses human</span>
                                    <span>resources, administration, finance, as well as employee</span>
                                    <span>work progress reports, attendance, and various employee</span>
                                    <span>incentive systems. That's why our technology team has</span>
                                    <span>developed a meticulous and carefully designed</span>
                                    <span>management system tailored for all types of businesses.</span>
                                </div>

                                <div className='flex flex-col md:hidden leading-[1.20]'>
                                    <span>Excellent enterprise management</span>
                                    <span>encompasses human resources,</span>
                                    <span>administration, finance, as well as</span>
                                    <span>employee work progress reports,</span>
                                    <span>attendance, and various employee incentive</span>
                                    <span>systems. That's why our technology team</span>
                                    <span>has developed a meticulous and carefully</span>
                                    <span>designed management system tailored for all</span>
                                    <span>types of businesses.</span>
                                </div>
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
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                                <span>A sophisticated management system's front-end and back-end</span>
                                                <span>reflect the professional image of the enterprise. To achieve even</span>
                                                <span>more positive results, we have dedicated technical personnel</span>
                                                <span>engaging in in-depth discussions with the enterprise management to</span>
                                                <span>customise development and provide explanations.</span>
                                            </div>

                                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                                <span>A sophisticated management system's</span>
                                                <span>front-end and back-end reflect the</span>
                                                <span>professional image of the enterprise. </span>
                                                <span>To achieve even more positive results, </span>
                                                <span>we have dedicated technical personnel</span>
                                                <span>engaging in in-depth discussions with</span>
                                                <span>the enterprise management to</span>
                                                <span>customise development and provide</span>
                                                <span>explanations.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mb-[50px] md:mb-0 gap-5 md:gap-[100px]'>
                                    <div className='flex w-[30px] h-[30px] md:w-[100px] md:h-[100px]'>
                                        <img src={AttendantSystem} alt="Attendant System"/>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-base md:text-4xl font-semibold text-left'>
                                            Attendance System
                                        </div>
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                                <span>We have meticulously developed an effortless attendance tracking</span>
                                                <span>system, providing a smooth and convenient solution for time</span>
                                                <span>management. Furthermore, we have incorporated a reward</span>
                                                <span>mechanism into the employee attendance system, encouraging</span>
                                                <span>employees to demonstrate outstanding time management skills.</span>
                                            </div>

                                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                                <span>We have meticulously developed an</span>
                                                <span>effortless attendance tracking system,</span>
                                                <span>providing a smooth and convenient</span>
                                                <span>solution for time management.</span>
                                                <span>Furthermore, we have incorporated a</span>
                                                <span>reward mechanism into the employee</span>
                                                <span>attendance system, encouraging</span>
                                                <span>employees to demonstrate outstanding</span>
                                                <span>time management skills.</span>
                                            </div>
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
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                                <span>Precise data visualisation enables real-time monitoring of project task</span>
                                                <span>metrics, sales performance, and goal achievements, serving as a</span>
                                                <span>driving force. Insights into team efficiency, challenges, and employee</span>
                                                <span>responsibilities and contributions empower agile adjustments,</span>
                                                <span> propelling sustainable company growth.</span>
                                            </div>

                                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                                <span>Precise data visualisation enables</span>
                                                <span>real-time monitoring of project task</span>
                                                <span>metrics, sales performance, and goal</span>
                                                <span>achievements, serving as a driving</span>
                                                <span>force. Insights into team efficiency,</span>
                                                <span>challenges, and employee</span>
                                                <span>responsibilities and contributions </span>
                                                <span>empower agile adjustments, propelling</span>
                                                <span>sustainable company growth.</span>
                                            </div>
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
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                                <span>We firmly believe that employees can enjoy unique company benefits</span>
                                                <span>by igniting and unleashing engagement, earning points, and</span>
                                                <span>unlocking badges. Additionally, our technology development team</span>
                                                <span>has also integrated features for personalised contests and surprise</span>
                                                <span>activities. Enhance employee work experience through rich.</span>
                                                <span>functionalities!</span>
                                            </div>

                                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                                <span>We firmly believe that employees</span>
                                                <span>can enjoy unique company benefits by</span>
                                                <span>igniting and unleashing engagement,</span>
                                                <span>earning points, and unlocking badges. </span>
                                                <span>Additionally, our technology</span>
                                                <span>development team has also integrated</span>
                                                <span>features for personalised contests and</span>
                                                <span>surprise activities. Enhance employee</span>
                                                <span>work experience through rich</span>
                                                <span>functionalities!</span>
                                            </div>
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
                                        <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                                <span>This is also one of the most important aspects we prioritise. In</span>
                                                <span>addition to offering online 24/5 service support, we also provide</span>
                                                <span>one-on-one tutorials for our products. This ensures smooth operation</span>
                                                <span>of your system throughout its usage, even if you need to add any new</span>
                                                <span>features or additional services.</span>
                                            </div>

                                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                                <span>This is also one of the most important</span>
                                                <span>aspects we prioritise. In addition to</span>
                                                <span>offering online 24/5 service support,</span>
                                                <span>we also provide one-on-one tutorials</span>
                                                <span>for our products. This ensures smooth</span>
                                                <span>operation of your system throughout</span>
                                                <span>its usage, even if you need to add any</span>
                                                <span>new features or additional services.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex w-[353px] h-[1px] bg-[#333] mb-[50px] mt-[50px]'></div>
                        </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:mb-[200px]'>
                            <div className='flex flex-col gap-5 md:gap-[30px] ml-5 md:ml-0 mr-5 md:mr-0'>
                                <div className='text-xl md:text-5xl font-bold text-left md:mt-[200px]'>
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
    )
}

export default Advantage;