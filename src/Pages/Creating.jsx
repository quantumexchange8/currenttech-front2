import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import image1 from '../Assets/Images/Creating/1.png';
import imageM1 from '../Assets/Images/Creating/M1.png';
import Creating1 from '../Assets/Images/Creating/creating1.png';
import Creating2 from '../Assets/Images/Creating/creating2.png';
import Creating3 from '../Assets/Images/Creating/creating3.png';
import Creating4 from '../Assets/Images/Creating/creating4.png';
import Creating5 from '../Assets/Images/Creating/creating5.png';
import CreatingM1 from '../Assets/Images/Creating/creatingM1.png';
import CreatingM2 from '../Assets/Images/Creating/creatingM2.png';
import CreatingM3 from '../Assets/Images/Creating/creatingM3.png';
import CreatingM4 from '../Assets/Images/Creating/creatingM4.png';
import CreatingM5 from '../Assets/Images/Creating/creatingM5.png';
import AOS from 'aos'; 
import ScrollToTopButton from '../Components/ScrollToTopButton';


const Creating = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleContactUsClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleExplore = (type) => {
        navigate('/creating_explore', { state: { exploreType: type } });
      };

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,  
            offset: 200,
        });
    }, []);

    return (
        <div className="flex flex-col pt-20 pb-[250px] w-full">
            <div className='flex flex-col gap-[150px] md:gap-[200px]'>
                {/* Top Image */}
                <div className='relative'>
                    <div><img src={image1} alt="" className='hidden md:block w-full' /></div>
                    <div><img src={imageM1} alt="" className='md:hidden w-full' /></div>
                    <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-16 text-center text-[32px] md:text-[64px] text-[#D1D5DB] font-light'>
                        PICK WHAT YOU PREFER
                    </div>
                </div>
                {/* Title */}
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-[30px] text-center max-w-[1200px] w-auto'> 
                        {/* Web */}
                        <div className="hidden md:flex flex-col bg-text-gradient bg-clip-text text-transparent text-5xl font-normal leading-normal" data-aos="fade-up">
                            <div>
                                POWERHOUSE FOR YOUR
                            </div>
                            <div>
                                WEB AND APP NEEDS
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className=" md:hidden flex flex-col bg-text-gradient bg-clip-text text-transparent text-[32px] md:text-5xl font-normal " data-aos="fade-up">
                            <div>
                                POWERHOUSE
                            </div>
                            <div>
                                 FOR YOUR
                            </div>
                            <div>
                                WEB AND APP NEEDS
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className='flex flex-col justify-center items-center gap-[250px]'>
                    {/* Creating */}
                    <div className='max-w-[1500px] w-auto flex flex-col gap-[200px] md:gap-[300px] px-[25px] md:p-0'>
                        {/* 1 */}
                        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <img src={Creating1} alt="" className='hidden md:block'/>
                                <img src={CreatingM1} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full md:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="500">
                                        E-COMMERCE
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                        e-Commerce offers unmatched convenience with seamless transactions, vast product selections, and easy comparison shopping, empowering consumers with accessibility and efficiency.
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="700">
                                    <button onClick={() => handleExplore("E-COMMERCE")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE E-COMMERCE
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <img src={Creating2} alt="" className='hidden md:block'/>
                                <img src={CreatingM2} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full md:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="300">
                                        COMMERCIAL
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal w-[500px]' data-aos="fade-up" data-aos-delay="400">
                                        A commercial web page boosts customer accessibility, 24/7 availability, and dynamic product displays. It enhances brand visibility, streamlines purchases, and drives sales, fostering loyalty.                                    
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="500">
                                    <button onClick={() => handleExplore("COMMERCIAL")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE COMMERCIAL
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="300">
                                <img src={Creating3} alt=" " className='hidden md:block'/>
                                <img src={CreatingM3} alt=" " className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full md:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="400">
                                        CMS DASHBOARD
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="500">
                                        An admin dashboard offers centralised control, real-time data, and custom reports, streamlining workflows and enhancing security for swift business decisions.
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="600">
                                    <button onClick={() => handleExplore("CMSDASHBOARD")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE CMS DASHBOARD
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <img src={Creating4} alt="" className='hidden md:block'/>
                                <img src={CreatingM4} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full md:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                        INVESTMENT
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                        An investment website provides strategy control, real-time tracking, and personalised insights, boosting user experience, trust, and financial growth.
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="700">
                                    <button onClick={() => handleExplore("INVESTMENT")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE INVESTMENT
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className='flex flex-col md:flex-row gap-[30px] md:gap-[100px]'>
                            <div data-aos="fade-up" data-aos-delay="500">
                                <img src={Creating5} alt="" className='hidden md:block'/>
                                <img src={CreatingM5} alt="" className='md:hidden'/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-full md:w-[500px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="600">
                                        DIGITAL BOARD
                                    </div>
                                    <div className='text-base md:text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="700">
                                        A Fintech website with Crypto, Blockchain, NFT, or Gaming features enables real-time transactions, secure asset management, and new revenue streams, enhancing analytics, security, and trust in digital finance.
                                    </div>
                                </div>
                                <div className='flex justify-start' data-aos="fade-up" data-aos-delay="800">
                                    <button onClick={() => handleExplore("DIGITALBOARD")} className='text-base md:text-2xl text-[#153764] font-normal text-center px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE DIGITAL BOARD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DISCOVER UNIQUE */}
                    <div className="flex flex-col justify-center items-center w-full px-[25px]">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-base md:text-[32px] text-[#557AAA] text-center font-medium leading-normal">WE DO MORE THAN JUST THIS</div>
                                    <div className="hidden md:block text-5xl text-[#153764] font-bold leading-normal">
                                        <div>
                                            NO MATTER WHAT FIELD 
                                        </div>
                                        <div>
                                            OR INDUSTRY YOU’RE IN
                                        </div>
                                    </div>
                                    <div className="md:hidden flex flex-col items-center text-2xl text-[#153764] font-bold">
                                        <div>
                                            NO MATTER WHAT FIELD OR
                                        </div>
                                        <div>
                                            INDUSTRY YOU’RE IN
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            href='/products'
                                            className="w-auto text-base md:text-2xl text-[#153764] font-normal leading-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            DISCOVER UNIQUE
                                        </a>
                                    </div>
    
                                    <Modal
                                        open={isModalOpen}
                                        onClose={closeModal}
                                        title="Contact Us"
                                        content="Please enter your details to get in touch with us."
                                        selectedButton="gmail"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll To Top Button */}
                <div className='absolute bg-opacity-20'>
                    <ScrollToTopButton />
                </div>
            </div>
        </div>
    )
 }

 export default Creating;