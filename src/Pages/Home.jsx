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
                    className='absolute inset-0 flex flex-col justify-center items-center text-white text-xl sm:text-5xl font-bold' 
                    style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}
                >
                    <span>You cannot stop the </span>
                    <span>Evolution of Technology </span>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center space-x-5 sm:space-x-0'>
                <div className='max-w-[1000px] w-full mt-[50px] sm:mt-[200px] '>
                    <div className='flex flex-col gap-[50px] sm:gap-[200px]'>
                        <div className='flex flex-col gap-5 sm:gap-10 text-left space-x-5 sm:space-x-0'>
                            <div className='text-base sm:text-5xl font-bold justify-center ml-5 sm:ml-0'>
                                CURRENT TECH INDUSTRIES
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base sm:text-4xl text-[#666] font-medium'>
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

                        <div className='w-[353px] sm:w-full h-[1px] bg-[#333] ml-5 sm:ml-0'></div>

                        <div className='flex flex-col gap-5 sm:gap-[40px] space-x-5 sm:space-x-0'>
                            <div className='text-base sm:text-5xl font-bold text-left ml-5 sm:ml-0 justify-center'>
                                TECHNOLOGY
                            </div>

                            <div className='flex flex-col gap-10 text-left text-base sm:text-4xl text-[#666] font-medium'>
                            Is the key to unlocking a sustainable and prosperous
                            future. Through innovation and technological 
                            advancements. Technology has ushered in an era of 
                            intelligence, automation, and digitisation, propelling
                            the transformation and upgrading of industries.
                            </div>
                        </div>

                        <div className='w-[353px] sm:w-full h-[1px] bg-[#333] ml-5 sm:ml-0'></div>
                    </div>

                    <div className='flex flex-col gap-[50px] sm:gap-[200px] mt-[50px]'>
                        <div className='flex flex-col gap-[30px] sm:gap-[150px]'>
                            <div className='text-base sm:text-5xl font-bold text-left ml-5 sm:ml-0 justify-center'>
                                Our Service
                            </div>

                            <div className='flex gap-[20px] md:gap-[100px]'>
                                <div>
                                <div className='flex-shrink-0'>
                                    <Software className="w-20 h-20 md:w-auto md:h-auto" /> {/* Adjust width and height for mobile */}
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

                        <div className='w-[353px] sm:w-full h-[1px] bg-[#333] ml-5 sm:ml-0'></div>
                    </div>

                    <div className='flex flex-col gap-5 sm:gap-10 mt-[50px] mb-[50px] sm:mb-[150px] space-x-5 md:space-x-0'>
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

                <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 gap-0'>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full h-auto'>
                            <source src="/assets/videos/education.mp4"/>
                        </video>

                        <div className='absolute left-5 sm:left-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left'>
                                <span>Education </span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left leading-tight'>
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

                        <div className='absolute left-5 sm:right-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left sm:text-right'>
                                <span>Food & Beverage</span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left sm:text-right leading-tight'>
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

                        <div className='absolute left-5 sm:left-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left'>
                                <span>Retail </span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left leading-tight'>
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

                        <div className='absolute left-5 sm:right-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left sm:text-right'>
                                <span>Wholesale</span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left sm:text-right leading-tight'>
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

                        <div className='absolute left-5 sm:left-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left'>
                                <span>Logistic </span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left leading-tight'>
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

                        <div className='absolute left-5 sm:right-[50px] bottom-[20px] sm:bottom-[50px] flex flex-col gap-[10px] sm:gap-5'>
                            <div className='text-white text-xl sm:text-5xl font-bold text-left sm:text-right'>
                                <span>Enterprise</span>
                            </div>
                            <div className='flex flex-col text-white text-sm sm:text-xl font-medium sm:font-semibold text-left sm:text-right leading-tight'>
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
                <div className='flex flex-col gap-[66px] my-[50px] sm:my-[150px] ml-[10px] sm:ml-0'>
                    <div className='flex flex-col gap-6 sm:gap-10'>
                        <div className='flex flex-col gap-3 sm:gap-0'>
                            <div className='text-base sm:text-5xl font-bold text-left'>
                                No matter what field or industry you're in
                            </div>
                            <div className='flex flex-col text-[#666] text-base sm:text-4xl font-medium text-left'>
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
                            className='hidden sm:flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                            onClick={() => handleButtonClick('whatsapp')}>
                                <WhatsApp/>
                                <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                    <span>Show QR to start</span>
                                    <span>communicate with us</span>
                                </div>
                            </div>
                            <div 
                            className='hidden sm:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
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
                            className='flex flex-col items-left gap-5 sm:hidden'>
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





// {/* <div id="Button_Component" class="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible">
//                     <div class="p-7 md:w-[500px] w-[349px] h-auto md:h-[800px] bg-white rounded-[20px] md:rounded-[30px] shadow transition-all scale-125 opacity-0">
//                         <div class="flex flex-col gap-10">
//                             <div class="flex flex-col gap-5">
//                                 <div class="relative">
//                                     <div class="flex justify-center items-center">
//                                         <div class="rounded-[20px] flex justify-center">
//                                             <img class="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src={CT_Logo} alt="icon"/>
//                                             {/* <img src={LogoSvg} alt="icon" className='w-full h-full'/> */}
//                                         </div>
//                                         <button class="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center">
//                                             {/* <img class="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src="/static/media/close.11feea34c15d5f8f975c8add840302ed.svg" alt="close"> */}
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div class="flex flex-col items-center gap-2">
//                                     <div class="flex w-full md:w-[250px] md:h-[80px] flex-col justify-center flex-shrink-0 text-black text-center text-[20px] md:text-[36px] font-bold"> 
//                                         <div class="font-family: SF-Pro-Display-Bold; font-style: normal; line-height: normal;">Install the TTpay.io Wallet</div>
//                                     </div>
//                                     <div class="flex w-[210px] md:w-[300px] md:h-[50px] flex-col justify-center flex-shrink-0 text-black text-center text-[12px] md:text-[16px] font-medium"> 
//                                         <div class="font-family: SF-Pro-Display-Medium; font-style: normal; line-height: normal;">Scan this QR code with your device's camera, then follow the instructions to download the app.</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="w-full flex flex-col items-center gap-12">
//                                 <div class="w-[245px] h-[46.2px] md:w-[350px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center" role="tablist" aria-orientation="horizontal">
//                                     <button class="w-[119.7px] py-2 md:w-[171px] md:h-[58px] flex-shrink-0 rounded-[10px] ring-white/60 bg-white text-black focus:outline-none" id="headlessui-tabs-tab-:r6:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r8:">
//                                         <div class="flex flex-row justify-center items-center ml-[9px] md:ml-0">
//                                             <div class="flex flex-col justify-center items-center">
//                                                 <div class="ml-1">
//                                                     {/* <img class="w-[5px] h-[6px] md:w-full md:h-full" src="/static/media/appstore-leaf-black.68b78b0ec23255444475dc04a7c00d09.svg" alt="ios"> */}
//                                                 </div>
//                                                 {/* <img class="w-[19px] h-[17px] md:w-full md:h-full" src="/static/media/appstore-black.2c3bbc27e7fbfdbceae9101c86966ba0.svg" alt="ios"></div> */}
//                                                 <div class="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[10px] font-bold md:font-normal md:text-[16px]"> 
//                                                     <div class="font-family: SF-Pro-Display-Bold; font-style: normal; line-height: normal;">App Store</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </button>
//                                     <button class="w-[119.7px] py-2 md:w-[171px] md:h-[58px] flex-shrink-0 rounded-[10px] ring-white/60 text-[#888]" id="headlessui-tabs-tab-:r7:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r9:">
//                                         <div class="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
//                                             {/* <img class="w-[20px] md:w-[30px]" src="/static/media/playstore.fb0cdada8a4f0e6a389ee812a56e99b4.svg" alt="android"> */}
//                                             <div class="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[10px] md:text-[16px]"> 
//                                                 <div class="font-family: SF-Pro-Display-Bold; font-style: normal; line-height: normal;">Google Play</div>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </div>
//                             <div class="hidden sm:block">
//                                 <div class="mt-[8px]">
//                                     <div class="bg-white ring-white/60 " id="headlessui-tabs-panel-:r8:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r6:">
//                                         <div class="w-[256px] h-[256px] flex-shrink-0 rounded-[50px] flex mx-[122px] mb-[48px] mt-[50px]">
//                                             {/* <img src="/static/media/appstore-code.58a17c72e4fa2e59256f372c56a26427.svg" alt="ios"> */}
//                                         </div>
//                                     </div>
//                                     <span aria-hidden="true" id="headlessui-tabs-panel-:r9:" role="tabpanel" tabindex="-1" aria-labelledby="headlessui-tabs-tab-:r7:"> 
//                                         <div class="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></div>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="sm:hidden">
//                                 <div class="flex w-full justify-center">
//                                     {/* <img class="w-[60px] h-[50.4px]" src="/static/media/download-phone.3b18ae896e8b394e210d5db5ee097903.svg" alt="Download Phone Icon" style="cursor: pointer;"> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div></div> */}
