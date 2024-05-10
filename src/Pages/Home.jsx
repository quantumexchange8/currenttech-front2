import React from 'react';
import {useState} from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService} from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
import useTranslation from '../useTranslation.js'

const Home = () => {
    const { t } = useTranslation();
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
                    <source src="/assets/videos/earth.mp4" type="video/mp4"/>
                </video>

                <div 
                    className='absolute inset-0 flex flex-col justify-center items-center text-white text-xl md:text-5xl font-bold' 
                    style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}
                >
                    <span className='w-[566px] text-center'>{t("Home.videoTitle")}</span>
                    
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px] '>
                    <div className='flex flex-col gap-[50px] md:gap-[200px]'>
                        <div className='flex flex-col gap-5 md:gap-10 text-left ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold justify-center'>
                                CURRENT TECH INDUSTRIES
                            </div>

                            <div className='hidden md:flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <span>Current Tech Industries Sdn Bhd was established in</span>
                                    <span>2006 as a high-tech software enterprise focused on </span>
                                    <span>research, development, production, and sales of </span>
                                    <span>technology products. Headquartered in Kuala Lumpur, </span>
                                    <span>Malaysia, we have plans to establish branches in</span>
                                    <span>Penang, Sabah, and Sarawak. With strong technological</span>
                                    <span>expertise and research capabilities, we are developers</span>
                                    <span>of projects across multiple fields and recognised as a</span>
                                    <span>"New Technology Enterprise" in the market.</span>
                                </div>
                                
                                <div className='flex flex-col leading-[1.20]'>
                                    <span>Since our inception, we have adhered to the principles</span>
                                    <span>of talent-oriented management and integrity-based</span>
                                    <span>operation, attracting industry elites. We integrate</span>
                                    <span>advanced information and software technologies, </span>
                                    <span>management methods, and corporate experience from </span>
                                    <span>both domestic and international sources, providing </span>
                                    <span>comprehensive solutions to assist enterprises in </span>
                                    <span>enhancing management capabilities and production </span>
                                    <span>capacity. Our goal is to help businesses maintain</span>
                                    <span>competitiveness in the fierce market competition, </span>
                                    <span>achieving rapid and stable development.</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium md:hidden'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <span>Current Tech Industries Sdn Bhd was</span>
                                    <span>established in 2006 as a high-tech software</span>
                                    <span>enterprise focused on research, development,</span>
                                    <span>production, and sales of technology products.</span>
                                    <span>Headquartered in Kuala Lumpur, Malaysia, we</span>
                                    <span>have plans to establish branches in Penang,</span>
                                    <span>Sabah, and Sarawak. With strong </span>
                                    <span>technological expertise and research</span>
                                    <span>capabilities, we are developers of projects </span>
                                    <span>across multiple fields and recognised as a</span>
                                    <span>"New Technology Enterprise" in the market.</span>
                                </div>
                                
                                <div className='flex flex-col leading-[1.20]'>
                                    <span>Since our inception, we have adhered to the</span>
                                    <span>principles of talent-oriented management and</span>
                                    <span>integrity-based operation, attracting industry</span>
                                    <span>elites. We integrate advanced information and</span>
                                    <span>software technologies, management</span>
                                    <span>methods, and corporate experience from both</span>
                                    <span>domestic and international sources, providing</span>
                                    <span>comprehensive solutions to assist enterprises</span>
                                    <span>in enhancing management capabilities and </span>
                                    <span>production capacity. Our goal is to help</span>
                                    <span>businesses maintain competitiveness in the</span>
                                    <span>fierce market competition, achieving rapid</span>
                                    <span>and stable development.</span>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>

                        <div className='flex flex-col gap-5 md:gap-[40px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold text-left justify-center'>
                                TECHNOLOGY
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                                <div className='hidden md:flex flex-col leading-[1.20]'>
                                    <span>Is the key to unlocking a sustainable and prosperous</span>
                                    <span>future. Through innovation and technological</span>
                                    <span>advancements. Technology has ushered in an era of</span>
                                    <span>intelligence, automation, and digitisation, propelling</span>
                                    <span>the transformation and upgrading of industries.</span>
                                </div>

                                <div className='flex flex-col leading-[1.20] md:hidden'>
                                    <span>Is the key to unlocking a sustainable and</span>
                                    <span>prosperous future. Through innovation and</span>
                                    <span>technological advancements. Technology has</span>
                                    <span>ushered in an era of intelligence, automation,</span>
                                    <span>and digitisation, propelling the transformation</span>
                                    <span>and upgrading of industries.</span>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>
                    </div>

                    <div className='flex flex-col gap-[50px] md:gap-[200px] mt-[50px]'>
                        <div className='flex flex-col gap-[30px] md:gap-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold text-left justify-center'>
                                Our Service
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px] flex-shrink-0 '>
                                <div>
                                <Software/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Software
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>Empower your business with customised software solutions.</span>
                                            <span>Our expert team of developers will bring your ideas to life, delivering </span>
                                            <span>innovative and reliable software tailored to your specific needs.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>Empower your business with</span>
                                            <span>customised software solutions. Our </span>
                                            <span>expert team of developers will bring</span>
                                            <span>your ideas to life, delivering innovative</span>
                                            <span>and reliable software tailored to your</span>
                                            <span>specific needs.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Website
                                    </div>
                                    <div className='flex flex-col leading-[1.20] text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>We develop websites, no matter big or small with a stage-by-stage</span>
                                            <span>approach. From pre-production planning, crafting the GUI design, to  </span>
                                            <span>backend development; we execute them with precision.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>We develop websites, no matter big or</span>
                                            <span>small with a stage-by-stage approach. </span>
                                            <span>From pre-production planning,</span>
                                            <span>crafting the GUI design, to backend </span>
                                            <span>development; we execute them with</span>
                                            <span>precision.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <MobileApp/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Mobile App
                                    </div>
                                    <div className='flex text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>We convert our clients’ core idea into innovative applications for </span>
                                            <span>mobile, cloud or web. We ensure the apps are developed to be </span>
                                            <span>compatible on major platforms as well as cater to mass devices.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>We convert our clients’ core idea into </span>
                                            <span>innovative applications for mobile, </span>
                                            <span>cloud or web. We ensure the apps</span>
                                            <span>are developed to be compatible on</span>
                                            <span>major platforms as well as cater to</span>
                                            <span>mass devices.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                    <ManagementSystem/>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Management System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>The Employee Intelligence Management System (EIMS)</span>
                                            <span>is a revolutionary human resources tool designed to optimise</span>
                                            <span>workflow efficiency. It drives organisational growth and unlocks</span>
                                            <span>employee potential through intuitive dashboards and automation, </span>
                                            <span>leveraging predictive analytics.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>The Employee Intelligence</span>
                                            <span>Management System (EIMS) is a</span>
                                            <span>revolutionary human resources tool</span>
                                            <span>designed to optimise workflow</span>
                                            <span>efficiency. It drives organisational</span>
                                            <span>growth and unlocks employee</span>
                                            <span>potential through intuitive dashboards</span>
                                            <span>and automation, leveraging predictive</span>
                                            <span>analytics.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        POS System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>Streamline your business operations with our powerful POS system. </span>
                                            <span>Manage sales, inventory, and customer data seamlessly, while </span>
                                            <span>providing a seamless checkout experience for your customers.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>Streamline your business operations</span>
                                            <span>with our powerful POS system. Manage</span>
                                            <span>sales, inventory, and customer data</span>
                                            <span>seamlessly, while providing a seamless</span>
                                            <span>checkout experience for your</span>
                                            <span>customers.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Support & Service
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        <div className='hidden md:flex flex-col leading-[1.20]'>
                                            <span>Optimise system performance with our expert support. Our team </span>
                                            <span>ensures timely updates and troubleshooting for seamless operations,</span>
                                            <span>keeping your systems at peak efficiency.</span>
                                        </div>

                                        <div className='flex flex-col leading-[1.20] md:hidden'>
                                            <span>Optimise system performance with our</span>
                                            <span>expert support. Our team ensures</span>
                                            <span>timely updates and troubleshooting for</span>
                                            <span>seamless operations, keeping your</span>
                                            <span>systems at peak efficiency.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-full h-[1px] bg-[#333] ml-5 md:ml-0 mr-5 md:mr-0'></div>
                    </div>

                    <div className='flex flex-col gap-5 md:gap-10 mt-[50px] mb-[50px] md:mb-[150px] space-x-5 md:space-x-0'>
                        <div className='flex flex-col text-base md:text-5xl font-bold text-left ml-5 md:ml-0'>
                            <span className="hidden md:block">Innovative Solutions</span>
                            <span className="hidden md:block">for Your Business</span>
                            <span className="block md:hidden">Innovative Solutions for Your Business</span>
                        </div>
                        <div className='flex text-base md:text-4xl font-medium text-[#666] text-left'>
                            <div className='hidden md:flex'>
                                Utilise our developed system to drive efficiency, 
                                sustainability, and customer experience in your business. 
                                Groundbreaking solutions change the landscape, meeting  
                                modern demands and ensuring competitiveness.
                            </div>
                           

                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                <span>Utilise our developed system to drive</span>
                                <span>efficiency, sustainability, and customer</span>
                                <span>experience in your business.</span>
                                <span>Groundbreaking solutions change the</span>
                                <span>landscape, meeting modern demands</span>
                                <span>and ensuring competitiveness.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 gap-0'>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full h-auto'>
                            <source src="/assets/videos/education.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left'>
                                <span>Education </span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="hidden md:block">Learning without limits. </span>
                                    <span className="hidden md:block">Schools are using our technology to </span>
                                    <span className="hidden md:block">do incredible things in the classroom </span>
                                    <span className="hidden md:block">and in their communities. </span>
                                </div>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                    <span className="block md:hidden">technology to do incredible things in the classroom</span>
                                    <span className="block md:hidden">and in their communities.</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/fnb.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-right'>
                                <span>Food & Beverage</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="hidden md:block">While enjoying delicious and enticing meal, </span>
                                    <span className="hidden md:block">both ordering applications and payment</span>
                                    <span className="hidden md:block">methods contribute to providing customers</span>
                                    <span className="hidden md:block">with a delightful dining experience.</span>
                                </div>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="block md:hidden">While enjoying delicious and enticing meal,</span>
                                    <span className="block md:hidden">both ordering applications and payment methods</span>
                                    <span className="block md:hidden">contribute to providing customers with a delightful</span>
                                    <span className="block md:hidden">dining experience.</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/retail.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left'>
                                <span>Retail </span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="hidden md:block">Whether it's customer lists, orders,</span>
                                    <span className="hidden md:block">inventory records, or employee </span>
                                    <span className="hidden md:block">attendance, all you need is one </span>
                                    <span className="hidden md:block">intelligent system. </span>
                                </div>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="block md:hidden">Whether it's customer lists, orders, inventory</span>
                                    <span className="block md:hidden">records, or employee attendance, all you need</span>
                                    <span className="block md:hidden">is one intelligent system.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/wholesale.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-right'>
                                <span>Wholesale</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="hidden md:block">Bulk discounts on goods, wholesale </span>
                                    <span className="hidden md:block">prices on merchandise, our intelligent</span>
                                    <span className="hidden md:block">system specializes in sourcing solutions</span>
                                    <span className="hidden md:block">for businesses and retailers.</span>
                                </div>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="block md:hidden">Bulk discounts on goods, wholesale prices on</span>
                                    <span className="block md:hidden">merchandise, our intelligent system specialises in</span>
                                    <span className="block md:hidden">sourcing solutions for businesses and retailers.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/logistic.mp4"/>
                        </video>

                        <div className='absolute left-5 md:left-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left'>
                                <span>Logistic </span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="hidden md:block">Designing an efficient transportation, </span>
                                    <span className="hidden md:block">logistics, and supply chain system is </span>
                                    <span className="hidden md:block">no longer a daunting task; it's all </span>
                                    <span className="hidden md:block">within our grasp. </span>
                                </div>
                                <div className='flex-flex-col text-left leading-[1.20]'>
                                    <span className="block md:hidden">Designing an efficient transportation, logistics, and </span>
                                    <span className="block md:hidden">supply chain system is no longer a daunting task; it's </span>
                                    <span className="block md:hidden">all within our grasp.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/enterprise.mp4"/>
                        </video>

                        <div className='absolute right-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-right'>
                                <span>Enterprise</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold'>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="hidden md:block">The characteristics of an efficient enterprise management </span>
                                    <span className="hidden md:block">system include enhancing communication between the</span>
                                    <span className="hidden md:block">company and employees, and employing methods that</span>
                                    <span className="hidden md:block">influence employee attitudes and work progress.</span>
                                </div>
                                <div className='flex-flex-col text-right leading-[1.20]'>
                                    <span className="block md:hidden">The characteristics of an efficient enterprise</span>
                                    <span className="block md:hidden">management system include enhancing</span>
                                    <span className="block md:hidden">communication between the company and </span>
                                    <span className="block md:hidden">employees, and employing methods that</span>
                                    <span className="block md:hidden">influence employee attitudes and work progress. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col max-w-[1000px] w-full'>
                <div className='flex flex-col gap-[66px] my-[50px] md:my-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <div className='flex flex-col gap-3 md:gap-10'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                No matter what field or industry you're in
                            </div>
                            <div className='flex flex-col text-[#666] text-base md:text-4xl font-medium text-left leading-[1.20]'>
                                <span className="hidden md:block">having your own intelligent system is worth it. Don't </span>
                                <span className="hidden md:block">hesitate to contact us for efficient solutions tailored just  </span>
                                <span className="hidden md:block">for you. </span>
                                <span className="block md:hidden">having your own intelligent system is worth it. </span>
                                <span className="block md:hidden">Don't hesitate to contact us for efficient</span>
                                <span className="block md:hidden">solutions tailored just for you. </span>
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
                        {/* <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/> */}
                    </div>
                </div>
                </div>
                <div id="Button_Component" className="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible">
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}

export default Home;
