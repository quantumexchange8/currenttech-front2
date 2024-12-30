import Image1 from '../Assets/Images/About/1.png';
import Image2 from '../Assets/Images/About/2.png';
import {Workhours, FinishWork, ClientsFollowed, DataStore, Design, Development, Launch, Growth} from '../Components/Outline'
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,  
            offset: 200,
        });
    }, []);

    return (
        <div className="flex flex-col gap-[250px] pt-[80px] pb-[250px]">
            <div className="flex flex-col gap-[200px] justify-center items-center">
                {/* Top Image */}
                <div className='relative w-full'>
                    <img src={Image1} alt="About Image 1" className='w-full' />
                    <div className='absolute flex flex-col gap-[50px] top-[35%] left-[16%] w-auto'>
                        <div className='flex flex-col gap-[10px] w-auto '>
                            <div className='text-2xl text-[#D1D5DB] font-normal'>
                                WE HAVE THE SOLUTION
                            </div>
                            <div className='flex flex-col gap-4 text-5xl text-[#D1D5DB] font-bold'>
                                <div>
                                    WE DESIGN & DEVELOP
                                </div>
                                <div>
                                    AMAZING STUFF
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='/team' className='text-2xl text-[#153764] font-normal w-auto py-[10px] px-[30px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)]'>
                                KNOW THE TEAM
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Current Tech Industries */}
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-[150px] max-w-[1200px]'>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='text-2xl text-[#557AAA] font-bold' data-aos="fade-up">
                                ABOUT CURRENT TECH INDUSTRIES
                            </div>
                            <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    Established in 2006, Current Tech Industries Sdn Bhd is a high-tech software enterprise based in
                                </div>
                                <div>
                                    Kuala Lumpur, Malaysia, with plans for expansion. Specialising in R&D, production, and sales of
                                </div>
                                <div>
                                    technology products, we offer comprehensive solutions to enhance enterprise management and
                                </div>
                                <div>
                                    production capacities, fostering competitive growth. Recognised as a "New Technology Enterprise,"
                                </div>
                                <div>
                                    we attract top talent and integrate advanced technologies for sustainable success.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between max-w-[1200px] w-[1200px]'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='text-2xl text-[#557AAA] font-bold' data-aos="fade-up">
                                    WE DESIGN SOLUTIONS
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div>
                                        We engineer innovative solutions using AI, 
                                    </div>
                                    <div>
                                        automation, and data insights to drive
                                    </div>
                                    <div>
                                        efficiency and growth. Our systems
                                    </div>
                                    <div>
                                        seamlessly blend digital and physical 
                                    </div>
                                    <div>
                                        infrastructures for high performance. By 
                                    </div>
                                    <div>
                                        collaborating with clients, we future-proof 
                                    </div>
                                    <div>
                                        businesses and transform industries with 
                                    </div>
                                    <div>
                                        precision and agility.
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='text-2xl text-[#557AAA] font-bold' data-aos="fade-up">
                                    STRATEGY PLANNING
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div>
                                        Leverage advanced analytics and AI to
                                    </div>
                                    <div>
                                        align with market trends, streamline
                                    </div>
                                    <div>
                                         decision-making, and optimise resources.
                                    </div>
                                    <div>
                                         Empower teams to deploy scalable solutions 
                                    </div>
                                    <div>
                                        for sustainable growth, ensuring long-term
                                    </div>
                                    <div>
                                        strategic success and competitive
                                    </div>
                                    <div>
                                         advantage.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Image */}
                <div className="relative leading-tight w-full">
                    <div className='w-full'>
                        {/* Background Image */}
                        <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                            <img src={Image2} alt="Image 5" className="w-full h-[500px] object-cover" />
                        </div>

                        {/* Centered Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[50px]">
                            {/* Main Title */}
                            <div className='text-center text-[#D1D5DB] leading-tight text-5xl font-bold ' data-aos="fade-up" data-aos-delay="500">
                                WE ALREADY HAVE THE EXPERIENCE
                            </div>

                            {/* Icons Section */}
                            <div className="flex justify-center items-center gap-[150px] text-sm text-center font-normal text-[#D1D5DB]" data-aos="fade-up" data-aos-delay="600">
                                {/* Icon 1 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <Workhours />
                                    <div>
                                        <div>
                                            6390 
                                        </div>
                                        <div>
                                        WORK HOURS
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 2 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <FinishWork />
                                    <div>
                                        <div>
                                            286
                                        </div>
                                        <div>
                                            FINISHED WORKS
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 3 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <ClientsFollowed />
                                    <div>
                                        <div>
                                            1396
                                        </div>
                                        <div>
                                            CLIENTS FOLLOWED
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 4 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <DataStore />
                                    <div>
                                        <div>
                                            328250
                                        </div>
                                        <div>
                                            DATA STORED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* We Highly Value */}
                <div className='flex flex-col gap-[50px] text-center w-[1200px] max-w-[1200px]'>
                    <div className='text-[32px] text-[#557AAA] font-normal'  data-aos="fade-up" data-aos-delay="600">
                        WE HIGHLY VALUE
                    </div>
                    <div className='flex justify-between' data-aos="fade-up" data-aos-delay="800">
                        {/* 1 */}
                        <div>
                            <div className='text-[64px] text-[#153764] font-bold'>
                                01
                            </div>
                            <div>
                                <div className='text-2xl text-[#557AAA] font-normal'>
                                    INNOVATIVE
                                </div>
                                <div className='text-xl text-[#4B5563] font-normal'>
                                    <div>
                                        We drive innovation delivering
                                    </div>
                                    <div>
                                        cutting-edge solutions that 
                                    </div>
                                    <div>
                                        shape the future
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div>
                            <div className='text-[64px] text-[#153764] font-bold'>
                                02
                            </div>
                            <div>
                                <div className='text-2xl text-[#557AAA] font-normal'>
                                    INNOVATIVE
                                </div>
                                <div className='text-xl text-[#4B5563] font-normal'>
                                    <div>
                                        Our technology is designed to
                                    </div>
                                    <div>
                                        be seamless and easy to use
                                    </div>
                                    <div>
                                        enhancing user experience
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div>
                            <div className='text-[64px] text-[#153764] font-bold'>
                                03
                            </div>
                            <div>
                                <div className='text-2xl text-[#557AAA] font-normal'>
                                    INNOVATIVE
                                </div>
                                <div className='text-xl text-[#4B5563] font-normal'>
                                    <div>
                                        Embracing modern trends,
                                    </div>
                                    <div>
                                        we craft sleek, future-ready
                                    </div>
                                    <div>
                                        solutions for today's needs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Crrent Tech */}
                <div className='flex flex-col justify-center items-center gap-[50px] py-[122px] bg-[#D5E7FF] w-full'>
                    {/* Title */}
                    <div className='text-[32px] text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="500">
                        WHY CURRENT TECH?
                    </div>
                    {/* Icons */}
                    <div className='flex flex-col gap-[100px]'>
                        <div className='flex flex-col text-5xl text-[#153764] text-center font-bold leading-normal' data-aos="fade-up" data-aos-delay="700">
                            <div>
                                BECAUSE WE BUILD
                            </div>
                            <div>
                                STRONG PRODUCTS
                            </div>
                        </div>
                        <div className='flex justify-between w-[800px] text-xl font-light text-[#557AAA]' data-aos="fade-up" data-aos-delay="900">
                            {/* Icon 1 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <Design />
                                <div>
                                    DESIGN
                                </div>
                            </div>
                            {/* Icon 2 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <Development />
                                <div>
                                    DEVELOPMENT
                                </div>
                            </div>
                            {/* Icon 3 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <Launch />
                                <div>
                                    LAUNCH
                                </div>
                            </div>
                            {/* Icon 4 */}
                            <div className='flex flex-col items-center gap-[10px]'>
                                <Growth />
                                <div>
                                    GROWTH
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Expertise */}
                    <div className='flex flex-col gap-[10px] text-center' data-aos="fade-up" data-aos-delay="1100">
                        <div className='text-[32px] text-[#153764] font-medium'>
                            OUR EXPERTISE IN PRODUCT DEVELOPMENT
                        </div>
                        <div className='text-xl text-[#557AAA] font-light'>
                            POWERFUL | UNIQUE | MODERN | INNOVATIVE | RESPONSIVE | DIFFERENT | CREATIVE | BEAUTIFUL
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Page */}
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-[1200px] flex flex-col gap-[250px]">
                    <div className="flex flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px] text-center" data-aos="fade-up" data-aos-delay="800">
                            <div className="text-5xl text-[#557AAA] font-bold leading-normal">LET'S EXPLORE OUR PRODUCTS</div>
                            <div className='flex flex-col gap-1'>
                                <div className="text-5xl text-[#153764] font-bold leading-normal">BUILD AN</div>
                                <div className="text-5xl text-[#153764] font-bold leading-normal">AMAZING SITE TODAY!</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
                                <a
                                    href='products'
                                    className="text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                >
                                    PRODUCT PAGE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default About;