import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import image1 from '../Assets/Images/Creating/1.png';
import Creating1 from '../Assets/Images/Creating/creating1.png';
import Creating2 from '../Assets/Images/Creating/creating2.png';
import Creating3 from '../Assets/Images/Creating/creating3.png';
import Creating4 from '../Assets/Images/Creating/creating4.png';
import Creating5 from '../Assets/Images/Creating/creating5.png';
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
        <div className="flex pt-20 pb-[250px] w-full">
            <div className='flex flex-col gap-[200px]'>
                {/* Top Image */}
                <div className='relative w-screen'>
                    <img src={image1} alt="" className='w-full' />
                    <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-16 text-[64px] text-[#D1D5DB] font-normal'>
                        PICK WHAT YOU PREFER
                    </div>
                </div>
                {/* Title */}
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-[30px] text-center max-w-[1200px] w-auto'> 
                        <div className="bg-text-gradient bg-clip-text text-transparent text-5xl font-normal flex flex-col gap-4">
                            <div>
                                POWERHOUSE FOR YOUR
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
                    <div className='max-w-[1500px] w-auto flex flex-col gap-[300px]'>
                        {/* 1 */}
                        <div className='flex gap-[100px]'>
                            <div>
                                <img src={Creating1} alt=""/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-[500px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-2xl text-[#557AAA] font-bold'>
                                        E-COMMERCE
                                    </div>
                                    <div className='text-xl text-[#4B5563] font-normal'>
                                        e-Commerce offers unmatched convenience with seamless transactions, vast product selections, and easy comparison shopping, empowering consumers with accessibility and efficiency.
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <button onClick={() => handleExplore("E-COMMERCE")} className='text-2xl text-[#153764] font-normal text-center px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE E-COMMERCE
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex gap-[100px]'>
                            <div>
                                <img src={Creating2} alt=""/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-[500px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-2xl text-[#557AAA] font-bold'>
                                        COMMERCIAL
                                    </div>
                                    <div className='text-xl text-[#4B5563] font-normal'>
                                        A commercial web page boosts customer accessibility, 24/7 availability, and dynamic product displays. It enhances brand visibility, streamlines purchases, and drives sales, fostering loyalty.                                    
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <button onClick={() => handleExplore("COMMERCIAL")} className='text-2xl text-[#153764] font-normal text-center px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE COMMERCIAL
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex gap-[100px]'>
                            <div>
                                <img src={Creating3} alt=""/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-[500px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-2xl text-[#557AAA] font-bold'>
                                        CMS DASHBOARD
                                    </div>
                                    <div className='text-xl text-[#4B5563] font-normal'>
                                        An admin dashboard offers centralised control, real-time data, and custom reports, streamlining workflows and enhancing security for swift business decisions.
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <button onClick={() => handleExplore("CMSDASHBOARD")} className='text-2xl text-[#153764] font-normal text-center px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE CMS DASHBOARD
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='flex gap-[100px]'>
                            <div>
                                <img src={Creating4} alt=""/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-[500px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-2xl text-[#557AAA] font-bold'>
                                        INVESTMENT
                                    </div>
                                    <div className='text-xl text-[#4B5563] font-normal'>
                                        An investment website provides strategy control, real-time tracking, and personalised insights, boosting user experience, trust, and financial growth.
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <button onClick={() => handleExplore("INVESTMENT")} className='text-2xl text-[#153764] font-normal text-center px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE INVESTMENT
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className='flex gap-[100px]'>
                            <div>
                                <img src={Creating5} alt=""/>
                            </div>
                            <div className='flex flex-col gap-[50px] w-[500px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-2xl text-[#557AAA] font-bold'>
                                        DIGITAL BOARD
                                    </div>
                                    <div className='text-xl text-[#4B5563] font-normal'>
                                        A Fintech website with Crypto, Blockchain, NFT, or Gaming features enables real-time transactions, secure asset management, and new revenue streams, enhancing analytics, security, and trust in digital finance.
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <button onClick={() => handleExplore("DIGITALBOARD")} className='text-2xl text-[#153764] font-normal text-center px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                                        EXPLORE DIGITAL BOARD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DISCOVER UNIQUE */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-[32px] text-[#557AAA] text-center font-medium">WE DO MORE THAN JUST THIS</div>
                                    <div className="text-5xl text-[#153764] font-bold">
                                        <div>
                                            NO MATTER WHAT FIELD 
                                        </div>
                                        <div>
                                            OR INDUSTRY YOU’RE IN
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            className="w-[220px] text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            CONTACT US
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
                <div className='bg-opacity-20'>
                    <ScrollToTopButton />
                </div>
            </div>
        </div>
    )
 }

 export default Creating;