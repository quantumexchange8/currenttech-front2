import React from 'react';
import {useState} from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService } from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import ButtonComponent from '../Components/ButtonComponent.jsx';

const Home = () => {

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
                    <source src="/assets/videos/earth.mp4" type="video/mp4"/>
                </video>

                <div 
                    className='absolute inset-0 flex flex-col justify-center items-center text-white text-xl md:text-5xl font-bold' 
                    style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}
                >
                    <span>You cannot stop the </span>
                    <span>Evolution of Technology </span>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px] '>
                    <div className='flex flex-col gap-[50px] md:gap-[200px]'>
                        <div className='flex flex-col gap-5 md:gap-10 text-left ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold justify-center'>
                                CURRENT TECH INDUSTRIES
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                                <span>
                                    Current Tech Industries Sdn Bhd was established in 
                                    2006 as a high-tech software enterprise focused on 
                                    research, development, production, and sales of 
                                    technology products. Headquartered in Kuala Lumpur, 
                                    Malaysia, we have plans to establish branches in 
                                    Penang, Sabah, and Sarawak. With strong technological 
                                    expertise and research capabilities, we are developers 
                                    of projects across multiple fields and recognised as a 
                                    "New Technology Enterprise" in the market.
                                </span>

                                <span>
                                    Since our inception, we have adhered to the principles 
                                    of talent-oriented management and integrity-based 
                                    operation, attracting industry elites. We integrate 
                                    advanced information and software technologies, 
                                    management methods, and corporate experience from 
                                    both domestic and international sources, providing 
                                    comprehensive solutions to assist enterprises in 
                                    enhancing management capabilities and production 
                                    capacity. Our goal is to help businesses maintain 
                                    competitiveness in the fierce market competition, 
                                    achieving rapid and stable development.
                                </span>
                            </div>
                        </div>

                        <div className='w-[353px] md:w-full h-[1px] bg-[#333] ml-5 md:ml-0'></div>

                        <div className='flex flex-col gap-5 md:gap-[40px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold text-left justify-center'>
                                TECHNOLOGY
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base md:text-4xl text-[#666] font-medium'>
                            Is the key to unlocking a sustainable and prosperous
                            future. Through innovation and technological 
                            advancements. Technology has ushered in an era of 
                            intelligence, automation, and digitisation, propelling
                            the transformation and upgrading of industries.
                            </div>
                        </div>

                        <div className='w-[353px] md:w-full h-[1px] bg-[#333] ml-5 md:ml-0'></div>
                    </div>

                    <div className='flex flex-col gap-[50px] md:gap-[200px] mt-[50px]'>
                        <div className='flex flex-col gap-[30px] md:gap-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='text-base md:text-5xl font-bold text-left justify-center'>
                                Our Service
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                <div className='flex-shrink-0 '>
                                <Software/>{/* Adjust width and height for mobile */}
                                </div>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Software
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        Empower your business with customised software solutions.
                                        Our expert team of developers will bring your ideas to life, delivering 
                                        innovative and reliable software tailored to your specific needs.
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
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        We develop websites, no matter big or small with a stage-by-stage 
                                        approach. From pre-production planning, crafting the GUI design, to 
                                        backend development; we execute them with precision.
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
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        We convert our clients' core idea into innovative applications for 
                                        mobile, cloud or web. We ensure the apps are developed to be 
                                        compatible on major platforms as well as cater to mass devices.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                    <ManagementSystem/>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-base md:text-4xl font-semibold text-left'>
                                        Management System
                                    </div>
                                    <div className='text-base md:text-2xl font-medium text-[#666] text-left'>
                                        The Employee Intelligence Management System (EIMS)
                                        is a revolutionary human resources tool designed to optimise 
                                        workflow efficiency. It drives organisational growth and unlocks 
                                        employee potential through intuitive dashboards and automation, 
                                        leveraging predictive analytics.
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
                                        Streamline your business operations with our powerful POS system. 
                                        Manage sales, inventory, and customer data seamlessly, while 
                                        providing a seamless checkout experience for your customers.
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
                                        Optimise system performance with our expert support. Our team 
                                        ensures timely updates and troubleshooting for seamless operations, 
                                        keeping your systems at peak efficiency.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[353px] md:w-full h-[1px] bg-[#333] ml-5 md:ml-0'></div>
                    </div>

                    <div className='flex flex-col gap-5 md:gap-10 mt-[50px] mb-[50px] md:mb-[150px] space-x-5 md:space-x-0'>
                        <div className='flex flex-col text-base md:text-5xl font-bold text-left ml-5 md:ml-0'>
                            <span className="hidden md:block">Innovative Solutions</span>
                            <span className="hidden md:block">for Your Business</span>
                            <span className="block md:hidden">Innovative Solutions for Your Business</span>
                        </div>
                        <div className='text-base md:text-4xl font-medium text-[#666] text-left'>
                            Utilise our developed system to drive efficiency, 
                            sustainability, and customer experience in your business. 
                            Groundbreaking solutions change the landscape, meeting  
                            modern demands and ensuring competitiveness.
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
                            <div className='flex flex-col text-white text-md md:text-xl font-medium md:font-semibold text-left leading-tight'>
                                <span className="hidden md:block">Learning without limits. </span>
                                <span className="hidden md:block">Schools are using our technology to </span>
                                <span className="hidden md:block">do incredible things in the classroom </span>
                                <span className="hidden md:block">and in their communities. </span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">technology to do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/fnb.mp4"/>
                        </video>

                        <div className='absolute left-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left md:text-right'>
                                <span>Food & Beverage</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold text-left md:text-right leading-tight'>
                                <span className="hidden md:block">While enjoying delicious and enticing meal, </span>
                                <span className="hidden md:block">both ordering applications and payment</span>
                                <span className="hidden md:block">methods contribute to providing customers</span>
                                <span className="hidden md:block">with a delightful dining experience.</span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
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
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold text-left leading-tight'>
                                <span className="hidden md:block">Whether it's customer lists, orders,  </span>
                                <span className="hidden md:block">inventory records, or employee </span>
                                <span className="hidden md:block">attendance, all you need is one </span>
                                <span className="hidden md:block">intelligent system. </span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/wholesale.mp4"/>
                        </video>

                        <div className='absolute left-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left md:text-right'>
                                <span>Wholesale</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold text-left md:text-right leading-tight'>
                                <span className="hidden md:block">Bulk discounts on goods, wholesale </span>
                                <span className="hidden md:block">prices on merchandise, our intelligent</span>
                                <span className="hidden md:block">system specializes in sourcing solutions</span>
                                <span className="hidden md:block">for businesses and retailers.</span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
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
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold text-left leading-tight'>
                                <span className="hidden md:block">Designing an efficient transportation, </span>
                                <span className="hidden md:block">logistics, and supply chain system is </span>
                                <span className="hidden md:block">no longer a daunting task; it's all </span>
                                <span className="hidden md:block">within our grasp. </span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/enterprise.mp4"/>
                        </video>

                        <div className='absolute left-5 md:right-[50px] bottom-[20px] md:bottom-[50px] flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-white text-xl md:text-5xl font-bold text-left md:text-right'>
                                <span>Enterprise</span>
                            </div>
                            <div className='flex flex-col text-white text-sm md:text-xl font-medium md:font-semibold text-left md:text-right leading-tight'>
                                <span className="hidden md:block">The characteristics of an efficient enterprise management </span>
                                <span className="hidden md:block">system include enhancing communication between the</span>
                                <span className="hidden md:block">company and employees, and employing methods that</span>
                                <span className="hidden md:block">influence employee attitudes and work progress.</span>
                                <span className="block md:hidden">Learning without limits. Schools are using our</span>
                                <span className="block md:hidden">do incredible things in the classroom</span>
                                <span className="block md:hidden">and in their communities.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col max-w-[1000px] w-full'>
                <div className='flex flex-col gap-[66px] my-[50px] md:my-[150px] ml-5 md:ml-0 mr-5 md:mr-0'>
                    <div className='flex flex-col gap-6 md:gap-10'>
                        <div className='flex flex-col gap-3 md:gap-0'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                No matter what field or industry you're in
                            </div>
                            <div className='flex flex-col text-[#666] text-base md:text-4xl font-medium text-left'>
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
                        <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                    </div>
                </div>
                </div>
                <div id="Button_Component" className="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible">
                </div>
            </div>
        </div>
    )
}

export default Home;
