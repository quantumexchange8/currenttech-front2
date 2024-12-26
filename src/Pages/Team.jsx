import { useEffect } from 'react';
import Image1 from '../Assets/Images/Team/1.png';
import Image2 from '../Assets/Images/Team/2.png';
import Image3 from '../Assets/Images/Team/3.png';
import Image4 from '../Assets/Images/Team/4.png';
import Image5 from '../Assets/Images/Team/5.png';
import AOS from 'aos';

const Team = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 200,
        });
    }, []);

    return (
        <div className='flex flex-col pt-[80px] pb-[250px]'>
            <div className='flex flex-col gap-[200px] w-full'>
                {/* Top Image */}
                <div className='relative'>
                    <img src={Image1} alt="" className='w-full'/>
                    <div className='absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px] text-[#D1D5DB] font-light'>
                        <div>
                            OUR TEAM
                        </div>
                    </div>
                </div>
                {/* OVER 15 SKILLED PROFESSIONALS */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-[30px] max-w-[1200px] w-[1200px]'>
                        <div className='text-5xl text-[#557AAA] font-bold' data-aos="fade-up">
                            OVER 15 SKILLED PROFESSIONALS
                        </div>
                        <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                            <div>
                                A strong team of 15+ professionals across IT, Mobile App, UI/UX, and Core Management, driving
                            </div> 
                            <div>
                                innovation and delivering tailored solutions that fuel growth and meet evolving client needs.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team & Career Page */}
                <div className='flex flex-col gap-[250px] w-full'>
                    {/* Team */}
                    <div className='flex flex-col w-full'>
                        {/* IT */}
                        <div className='flex flex-col gap-[50px] justify-center items-center bg-[#D5E7FF] w-full py-[101px]'>
                            <div className='flex flex-col gap-[50px] max-w-[1200px] w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-xl text-[#557AAA] font-light'>
                                        Team's Expertise
                                    </div>
                                    <div className='text-[32px] text-[#153764] font-bold'>
                                        IT ENGINEERING
                                    </div>
                                </div>
                                <div className='flex gap-[78px] text-xl text-[#4B5563] font-normal leading-[40px]' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            System Architecture Design
                                        </li>
                                        <li>
                                            Development and Maintenance
                                        </li>
                                        <li>
                                            Network Security Management
                                        </li>
                                        <li>
                                            Database Management
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            System Integration
                                        </li>
                                        <li>
                                            Technology Strategy Planning
                                        </li>
                                        <li>
                                            Process Automation Optimisation
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Data Analysis and Processing
                                        </li>
                                        <li>
                                            Cloud Infrastructure Management
                                        </li>
                                        <li>
                                            Support and Troubleshooting
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* WE'RE COOL CREW */}
                        <div className='flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="800">
                                <img src={Image2} alt="" className='w-full max-h-[600px]'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold w-[600px]' data-aos="fade-up" data-aos-delay="500">
                                    WE'RE COOL CREW
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        A dynamic IT team driving innovation and
                                    </div> 
                                    <div>
                                        excellence, delivering cutting-edge solutions
                                    </div>
                                    <div>
                                        that shape the future through technology.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* MOBILE */}
                        <div className='flex flex-col gap-[50px] justify-center items-center bg-[#D5E7FF] w-full py-[101px]'>
                            <div className='flex flex-col gap-[50px] max-w-[1200px] w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-xl text-[#557AAA] font-light'>
                                        Team's Expertise
                                    </div>
                                    <div className='text-[32px] text-[#153764] font-bold'>
                                        MOBILE APP ENGINEERING
                                    </div>
                                </div>
                                <div className='flex gap-[78px] text-xl text-[#4B5563] font-normal leading-[40px]' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            App Store Deployment
                                        </li>
                                        <li>
                                            UI and UX Design
                                        </li>
                                        <li>
                                            Cross-Platform Development
                                        </li>
                                        <li>
                                            Feature Development
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            API Development and Integration
                                        </li>
                                        <li>
                                            Technology Strategy Planning
                                        </li>
                                        <li>
                                            Version Control Management
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            In-App Purchase Implementation
                                        </li>
                                        <li>
                                            Push Notifications Management
                                        </li>
                                        <li>
                                            User Feedback and Testing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* EMPOWERING MOBILITY */}
                        <div className='flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image3} alt="" className='w-full max-h-[600px]'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    EMPOWERING MOBILITY
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        The Mobile App team creates high-performance,
                                    </div> 
                                    <div>
                                        user-friendly applications, ensuring seamless 
                                    </div>
                                    <div>
                                        experiences and superior performance across 
                                    </div>
                                    <div>
                                        devices, while adapting swiftly to market
                                    </div>
                                    <div>
                                        demands.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* UI AND UX DESIGN */}
                        <div className='flex flex-col gap-[50px] justify-center items-center bg-[#D5E7FF] w-full py-[101px]'>
                            <div className='flex flex-col justify-start gap-[50px] max-w-[1200px] w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-xl text-[#557AAA] font-light'>
                                        Team's Expertise
                                    </div>
                                    <div className='text-[32px] text-[#153764] font-bold'>
                                        UI AND UX DESIGN
                                    </div>
                                </div>
                                <div className='flex gap-[78px] text-xl text-[#4B5563] font-normal leading-[40px]' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            User Research
                                        </li>
                                        <li>
                                            Information Architecture
                                        </li>
                                        <li>
                                            Wireframing and Prototyping
                                        </li>
                                        <li>
                                            Visual Design
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Interaction Design
                                        </li>
                                        <li>
                                            Usability Testing
                                        </li>
                                        <li>
                                            Responsive Designnt
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Design System Creation
                                        </li>
                                        <li>
                                            User Journey Mapping
                                        </li>
                                        <li>
                                            Design Feedback Integration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* ENTER VIRTUAL REALITY */}
                        <div className='flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image4} alt="" className='w-full max-h-[600px]'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    ENTER VIRTUAL REALITY
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        Our UI/UX team creates exceptional, user-
                                    </div> 
                                    <div>
                                        centered designs that blend aesthetics and  
                                    </div>
                                    <div>
                                        functionality, enhancing usability through  
                                    </div>
                                    <div>
                                        minimalist design and in-depth user research.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CORE MANAGEMENT */}
                        <div className='flex flex-col gap-[50px] justify-center items-center bg-[#D5E7FF] w-full py-[101px]'>
                            <div className='flex flex-col gap-[50px] max-w-[1200px] w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-xl text-[#557AAA] font-light'>
                                        Team's Expertise
                                    </div>
                                    <div className='text-[32px] text-[#153764] font-bold'>
                                        CORE MANAGEMENT
                                    </div>
                                </div>
                                <div className='flex gap-[78px] text-xl text-[#4B5563] font-normal leading-[40px]' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Strategic Planning
                                        </li>
                                        <li>
                                            Performance Management
                                        </li>
                                        <li>
                                            Resource Allocation
                                        </li>
                                        <li>
                                            Financial Management
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Employee Benefits
                                        </li>
                                        <li>
                                            Communication Strategy
                                        </li>
                                        <li>
                                            Team Building
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-outside pl-7'>
                                        <li>
                                            Decision-Making Processes
                                        </li>
                                        <li>
                                            Customer Relationship
                                        </li>
                                        <li>
                                            Corporate Culture Development
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* DRIVING EXCELLENCE */}
                        <div className='flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image5} alt="" className='w-full max-h-[600px]'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    DRIVING EXCELLENCE
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        The Core Management team drives growth through 
                                    </div> 
                                    <div>
                                        strategic planning, data-driven decisions, and optimised  
                                    </div>
                                    <div>
                                        processes, ensuring sustained competitiveness and value  
                                    </div>
                                    <div>
                                        creation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Career Page */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col justify-center items-center gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-[32px] text-[#557AAA] font-medium">LET'S WORK TOGETHER</div>
                                    <div className="text-5xl text-[#153764] font-bold">JOIN OUR</div>
                                    <div className="text-5xl text-[#153764] font-bold">FANTASTIC TEAM TODAY!</div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            href='/careers'
                                            className="text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            CAREER PAGE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Team;