import React from 'react';
import { Software, Website, MobileApp, ManagementSystem, PosSystem, SupportService } from '../Components/Outline.jsx';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';

const Home = () => {

    return (
        <div>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="/assets/videos/earth.mp4" type="video/mp4"/>
                </video>

                <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-5xl font-bold' style={{ textShadow: '2px 4px 4px rgba(255, 255, 255, 0.40)' }}>
                    <span>You cannot stop the </span>
                    <span>Evolution of Technology </span>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[200px]'>
                    
                    <div className='flex flex-col gap-[200px]'>
                        <div className='flex flex-col gap-10'>
                            <div className='text-5xl font-bold text-left'>
                                CURRENT TECH INDUSTRIES
                            </div>

                            <div className='flex flex-col gap-10 text-left text-4xl text-[#666] font-medium'>
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

                        <div className='w-full h-[1px] bg-[#333]'></div>

                        <div className='flex flex-col gap-10'>
                            <div className='text-5xl font-bold text-left'>
                                TECHNOLOGY
                            </div>

                            <div className='flex flex-col gap-10 text-left text-4xl text-[#666] font-medium'>
                            Is the key to unlocking a sustainable and prosperous
                            future. Through innovation and technological 
                            advancements. Technology has ushered in an era of 
                            intelligence, automation, and digitisation, propelling
                            the transformation and upgrading of industries.
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-[#333]'></div>
                    </div>

                    <div className='flex flex-col gap-[200px] mt-[50px]'>
                        <div className='flex flex-col gap-[150px]'>
                            <div className='text-5xl font-bold text-left'>
                                Our Service
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <Software/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        Software
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        Empower your business with customised software solutions.
                                        Our expert team of developers will bring your ideas to life, delivering 
                                        innovative and reliable software tailored to your specific needs.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <Website/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        Website
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        We develop websites, no matter big or small with a stage-by-stage 
                                        approach. From pre-production planning, crafting the GUI design, to 
                                        backend development; we execute them with precision.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <MobileApp/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        Mobile App
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        We convert our clients' core idea into innovative applications for 
                                        mobile, cloud or web. We ensure the apps are developed to be 
                                        compatible on major platforms as well as cater to mass devices.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <ManagementSystem/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        Management System
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        The Employee Intelligence Management System (EIMS)
                                        is a revolutionary human resources tool designed to optimise 
                                        workflow efficiency. It drives organisational growth and unlocks 
                                        employee potential through intuitive dashboards and automation, 
                                        leveraging predictive analytics.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <PosSystem/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        POS System
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        Streamline your business operations with our powerful POS system. 
                                        Manage sales, inventory, and customer data seamlessly, while 
                                        providing a seamless checkout experience for your customers.
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[100px]'>
                                <div>
                                    <SupportService/>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-4xl font-semibold text-left'>
                                        Support & Service
                                    </div>
                                    <div className='text-2xl font-medium text-[#666] text-left'>
                                        Optimise system performance with our expert support. Our team 
                                        ensures timely updates and troubleshooting for seamless operations, 
                                        keeping your systems at peak efficiency.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-[#333]'></div>
                    </div>

                    <div className='flex flex-col gap-10 mt-[50px] mb-[150px]'>
                        <div className='flex flex-col text-5xl font-bold text-left'>
                            <span>Innovative Solutions</span>
                            <span>for Your Business</span>
                        </div>
                        <div className='text-4xl font-medium text-[#666] text-left'>
                            Utilise our developed system to drive efficiency, 
                            sustainability, and customer experience in your business. 
                            Groundbreaking solutions change the landscape, meeting 
                            modern demands and ensuring competitiveness.
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 grid-rows-3 gap-0'>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/education.mp4"/>
                        </video>

                        <div className='absolute left-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-left'>
                                <span>Education </span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-left'>
                                <span>Learning without limits. </span>
                                <span>Schools are using our technology to </span>
                                <span>do incredible things in the classroom </span>
                                <span>and in their communities. </span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/fnb.mp4"/>
                        </video>

                        <div className='absolute right-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-right'>
                                <span>Food & Beverage</span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-right'>
                                <span>While enjoying delicious and enticing meal, </span>
                                <span>both ordering applications and payment</span>
                                <span>methods contribute to providing customers</span>
                                <span>with a delightful dining experience.</span>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/retail.mp4"/>
                        </video>

                        <div className='absolute left-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-left'>
                                <span>Retail </span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-left'>
                                <span>Whether it's customer lists, orders,  </span>
                                <span>inventory records, or employee </span>
                                <span>attendance, all you need is one </span>
                                <span>intelligent system. </span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/wholesale.mp4"/>
                        </video>

                        <div className='absolute right-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-right'>
                                <span>Wholesale</span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-right'>
                                <span>Bulk discounts on goods, wholesale </span>
                                <span>prices on merchandise, our intelligent</span>
                                <span>system specialises in sourcing solutions</span>
                                <span>for businesses and retailers.</span>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/logistic.mp4"/>
                        </video>

                        <div className='absolute left-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-left'>
                                <span>Logistic </span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-left'>
                                <span>Designing an efficient transportation, </span>
                                <span>logistics, and supply chain system is </span>
                                <span>no longer a daunting task; it's all </span>
                                <span>within our grasp. </span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <video autoPlay muted playsInline loop className='w-full'>
                            <source src="/assets/videos/enterprise.mp4"/>
                        </video>

                        <div className='absolute right-[50px] bottom-[50px] flex flex-col gap-5'>
                            <div className='text-white text-5xl font-bold text-right'>
                                <span>Enterprise</span>
                            </div>
                            <div className='flex flex-col text-white text-xl font-semibold text-right'>
                                <span>The characteristics of an efficient enterprise management </span>
                                <span>system include enhancing communication between the</span>
                                <span>company and employees, and employing methods that</span>
                                <span>influence employee attitudes and work progress.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[66px] my-[150px]'>
                    <div className='flex flex-col gap-10'>
                        <div className='text-5xl font-bold text-left'>
                            No matter what field or industry you're in
                        </div>
                        <div className='flex flex-col text-[#666] text-4xl font-medium text-left'>
                            <span>having your own intelligent system is worth it. Don't </span>
                            <span>hesitate to contact us for efficient solutions tailored just  </span>
                            <span>for you. </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div className='w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4'>
                            <WhatsApp/>
                            <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                <span>Show QR to start</span>
                                <span>communicate with us</span>
                            </div>
                        </div>
                        <div className='w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4'>
                            <Gmail/>
                            <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                <span>Don't hesitate!</span>
                                <span>Send us a message</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;