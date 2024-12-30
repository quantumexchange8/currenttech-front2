import React, { useState, useEffect } from 'react';
import { Lorry } from '../Components/Outline.jsx';
import { useTranslation } from 'react-i18next';
import Image1 from '../Assets/Images/Price/1.png';
import ImageM1 from '../Assets/Images/Price/M1.png';
import { PWebsite, PWebsiteG, PECommerce, PECommerceG, Basic, BasicG, Bulb } from '../Components/Outline.jsx';
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';
import { priceData } from '../Data/priceData.js';
import AOS from 'aos';

const Price = () => {
    const { t } = useTranslation();
    const [selectedWebsiteType, setSelectedWebsiteType] = useState('Website');
    const [selectedSolutionType, setSelectedSolutionType] = useState('Basic');

    const selectedData = priceData.find((plan) => plan.website === selectedWebsiteType && plan.solution === selectedSolutionType);

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,  
          offset: 200,
        });
    }, []);

    return(
        <div className='flex flex-col w-full justify-center text-center gap-[200px] pt-[80px] pb-[250px]'>
            {/* Top Image */}
            <div className='relative'>
                <div className='hidden md:block'>
                    <img src={Image1}alt="" className='w-full'/>
                </div>
                <div className='md:hidden'>
                    <img src={ImageM1}alt="" className='w-full'/>
                </div>
                <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 text-[32px] md:text-[64px] text-[#D1D5DB] font-light'>
                    <div>
                        START BUILD
                    </div>
                    <div>
                        YOUR BUSINESS
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className='flex flex-col gap-[250px]'>
                {/* Content */}
                <div className='flex justify-center gap-[100px]'>
                    {/* Left Details */}
                    {selectedData && (
                    <div className="flex flex-col gap-[100px]">
                        <div className="flex flex-col gap-[50px] max-w-[1200px]">
                            {/* Title */}
                            <div className="flex flex-col gap-[10px] text-left" data-aos="fade-up">
                                <div className="text-4xl text-[#153764] font-bold">{selectedData.title}</div>
                                <div className="flex gap-1">
                                    <div className="text-xl text-[#557AAA] font-normal">Order now from </div>
                                    <div className="text-xl text-[#557AAA] font-medium">{selectedData.price}</div>
                                    <div className="text-xl text-[#557AAA] font-normal">* </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex justify-between w-[600px]" data-aos="fade-up" deta-aos-delay="200">
                                <ul className="list-disc list-outside pl-7 text-xl text-left text-[#4B5563] font-medium leading-[50px]">
                                    {selectedData.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="text-[#6B7280] text-xl md:text-base font-normal text-right md:leading-[50px]">
                                    {selectedData.ans.map((ans, index) => (
                                    <div key={index}>{ans}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            {/* Left */}
                            <div className="flex flex-col gap-[30px] text-left" data-aos="fade-up" deta-aos-delay="200">
                                <div className="text-xl font-bold">
                                    <div className="text-[#557AAA]">
                                    The above are the requirements for
                                    </div>
                                    <div className="text-[#153764]">
                                    the new website you wish to build.
                                    </div>
                                </div>
                                <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">{selectedData.combination || ''}</div>
                                    <div className="text-[#153764] font-medium">{selectedData.price}</div>
                                </div>
                                {selectedData.discount && (
                                    <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">Now discount</div>
                                    <div className="text-[#153764] font-medium">{selectedData.discount}</div>
                                    </div>
                                )}
                                {selectedData.subtotal && (
                                    <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">Subtotal</div>
                                    <div className="text-[#153764] font-medium">{selectedData.subtotal}</div>
                                    </div>
                                )}
                            </div>

                            {/* Right Bottom */}
                            <div className="flex flex-col justify-end items-end gap-[10px]" data-aos="fade-up" deta-aos-delay="400">
                                <Lorry />
                                {selectedData.ship && (
                                    <div className="text-right">
                                    <div className="text-xl text-[#6B7280] font-light">Ships:</div>
                                    <div className="text-xl text-[#153764] font-medium">{selectedData.ship} Weeks</div>
                                    <div className="text-xl text-[#153764] font-medium">Free Testing</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    )}
                    {/* Right Sidebar */}
                    <div className='flex flex-col gap-[100px] pt-[136px]'>
                        {/* Website */}
                        <div className='flex flex-col gap-5 w-[500px]' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-xl text-[#557AAA] font-bold'>
                                What 
                                <div className='text-xl text-[#153764] font-bold'>type of website</div>
                                    do you want?
                            </div>
                            <button onClick={() => [setSelectedWebsiteType('Website'), window.scrollTo({top: 600,behavior: 'smooth'})]} className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedWebsiteType === 'Website' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    Website
                                </div>
                                {selectedWebsiteType === 'Website' ? <PWebsite /> : <PWebsiteG />}
                            </button>
                            <button onClick={() => [setSelectedWebsiteType('e-Commerce'), window.scrollTo({top: 600,behavior: 'smooth'})]}  className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedWebsiteType === 'e-Commerce' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    e-Commerce
                                </div>
                                {selectedWebsiteType === 'e-Commerce' ? <PECommerce /> : <PECommerceG />}
                            </button>
                        </div>
                        {/* Solution */}
                        <div className='flex flex-col gap-5 w-[500px]' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-xl text-[#557AAA] font-bold'>
                                Which is 
                                <div className='text-xl text-[#153764] font-bold'>best</div>
                                for you?
                            </div>
                            <button onClick={() => [setSelectedSolutionType('Basic'), window.scrollTo({top: 600,behavior: 'smooth'})]} className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    Basic Solution for Startup.
                                </div>
                            </button>
                            <button onClick={() => [setSelectedSolutionType('Advanced'), window.scrollTo({top: 600,behavior: 'smooth'})]}  className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    Advanced Solution for Professional.
                                </div>
                            </button>
                        </div>
                        {/* Discount */}
                        <div className='flex flex-col gap-5 w-[500px]' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-xl text-[#557AAA] font-bold'>
                                Now you can 
                                <div className='text-xl text-[#153764] font-bold'>save more costs.</div>
                            </div>
                            <div className={`text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left'>
                                    <div>
                                        Discount for startup business
                                    </div>
                                    <div>
                                        RM1,800.00
                                    </div>
                                </div>
                                {selectedSolutionType === 'Basic' ? <Basic /> : <BasicG />}
                            </div>
                            <div  className={`text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left'>
                                    <div>
                                        For professional save up to
                                    </div>
                                    <div>
                                        RM2,200.00
                                    </div>
                                </div>
                                {selectedSolutionType === 'e-commerce' ? <Basic /> : <BasicG />}
                            </div>
                            <button className='text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] bg-[#D1D5DB]'>
                                <div className='flex flex-col gap-[5px] text-left'>
                                    <div className='text-xl text-[#153764] font-medium'>
                                        Need custom made?
                                    </div>
                                    <div className='text-base text-[#6B7280] font-normal'>
                                        Let us know what you think.
                                    </div>
                                </div>
                                <Bulb />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Explore Template */}
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[1200px] flex flex-col gap-[250px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[10px]" data-aos="fade-up" deta-aos-delay="200">
                                <div className="text-[32px] text-[#557AAA] font-medium">WE DO AMAZING STUFF</div>
                                <div>
                                    <div className="text-5xl text-[#153764] font-bold">WE DESIGN & DEVELOP</div>
                                    <div className="text-5xl text-[#153764] font-bold">CREATIVE SOLUTIONS</div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center" data-aos="fade-up" deta-aos-delay="400">
                                <a href='#' className="w-auto text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]">
                                    EXPLORE TEMPLATE
                                </a>
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
    )
}
export default Price;