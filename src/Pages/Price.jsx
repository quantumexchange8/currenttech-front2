import React, { useState, useEffect } from 'react';
import { Lorry } from '../Components/Outline.jsx';
import { useTranslation } from 'react-i18next';
import Image1 from '../Assets/Images/Price/1.png';
import ImageM1 from '../Assets/Images/Price/M1.png';
import { PWebsite, PWebsiteG, PECommerce, PECommerceG, Basic, BasicG, Bulb, PWebsiteM, PWebsiteGM, PECommerceM, PECommerceGM, BasicM, BasicGM, LorryM, BulbM } from '../Components/Outline.jsx';
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
          once: true,  
          offset: 200,
        });
    }, []);

    return(
        <div className='flex flex-col w-full justify-center text-center gap-[150px] md:gap-[200px] pt-[50px] xl:pt-[80px] pb-[250px]'>
            {/* Top Image */}
            {/* Web */}
            <div className='hidden xl:block relative'>
                <div>
                    <img src={Image1}alt="" className='w-full'/>
                </div>
                <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 text-[32px] md:text-[64px] text-[#D1D5DB] font-light'>
                    <div>
                        {t("Price.startBuild")}
                    </div>
                    <div>
                        {t("Price.yourBusiness")}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='xl:hidden relative'>
                <div>
                    <img src={ImageM1}alt="" className='w-full'/>
                </div>
                <div className='absolute w-full bottom-[17%] left-1/2 transform -translate-x-1/2 text-[32px] md:text-[64px] text-[#D1D5DB] font-light'>
                    <div>
                        {t("Price.startBuild")}
                    </div>
                    <div>
                        {t("Price.yourBusiness")}
                    </div>
                </div>
            </div>

            {/* Title (Mobile) */}
            <div className='md:hidden px-[25px]'>
                <div className='text-2xl text-[#557AAA] font-semibold'>
                    {t("Price.chooseYour")}
                </div>
                <div className='flex gap-1 justify-center text-2xl text-[#557AAA] font-semibold leading-normal'>
                    {t("Price.pilih")} <div className='text-[#153764]'> {t("Price.preferredSolution")}</div>
                </div>
                <div className='text-2xl text-[#557AAA] font-semibold leading-normal'>
                    {t("Price.forBuilding")}
                </div>
                <div className='text-2xl text-[#557AAA] font-semibold leading-normal'>
                    {t("Price.lamanWeb")}
                </div>
            </div>

            {/* Body */}
            <div className='flex flex-col gap-[250px] px-[24px] md:p-0'>
                {/* Content */}
                {/* Web */}
                <div className='hidden xl:flex justify-center gap-[100px]'>
                    {/* Left Details */}
                    {selectedData && (
                    <div className="flex flex-col gap-[100px]">
                        <div className="flex flex-col gap-[50px] max-w-[1200px]">
                            {/* Title */}
                            <div className="flex flex-col gap-[10px] text-left" data-aos="fade-up">
                                <div className="text-4xl text-[#153764] font-bold">{t(selectedData.title)}</div>
                                <div className="flex gap-1">
                                    <div className="text-xl text-[#557AAA] font-normal"> {t("Price.orderNow")} </div>
                                    <div className="text-xl text-[#557AAA] font-medium">{selectedData.price}</div>
                                    <div className="text-xl text-[#557AAA] font-normal">* </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex justify-between w-[600px]" data-aos="fade-up" deta-aos-delay="200">
                                <ul className="list-disc list-inside text-xl text-left text-[#4B5563] font-medium leading-[50px]">
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
                                    <div className="text-[#557AAA] flex gap-[1px]">
                                        {t("Price.requirement")}<div className="text-[#153764]">{t("Price.newWebsiteC")}</div>
                                    </div>
                                    <div className="text-[#153764]">
                                        {t("Price.newWebsite")}
                                    </div>
                                </div>
                                <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">{t(selectedData.combination)}</div>
                                    <div className="text-[#153764] font-medium">{selectedData.price}</div>
                                </div>
                                {selectedData.discount && (
                                    <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">{t("Price.nowDiscount")}</div>
                                    <div className="text-[#153764] font-medium">{selectedData.discount}</div>
                                    </div>
                                )}
                                {selectedData.subtotal && (
                                    <div className="text-xl">
                                    <div className="text-[#4B5563] font-light">{t("Price.subtotal")}</div>
                                    <div className="text-[#153764] font-medium">{selectedData.subtotal}</div>
                                    </div>
                                )}
                            </div>

                            {/* Right Bottom */}
                            <div className="flex flex-col justify-end items-end gap-[10px]" data-aos="fade-up" deta-aos-delay="400">
                                <Lorry />
                                {selectedData.ship && (
                                    <div className="text-right">
                                    <div className="text-xl text-[#6B7280] font-light">{t("Price.ship")}</div>
                                    <div className="text-xl text-[#153764] font-medium">{selectedData.ship} {t("Price.weeks")}</div>
                                    <div className="text-xl text-[#153764] font-medium">{t("Price.freeTesting")}</div>
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
                            <div className=' text-xl text-[#557AAA] font-bold'>
                                <div className='flex gap-[6px]'>
                                    {t("Price.what")}
                                    <div className='text-xl text-[#153764] font-bold'>{t("Price.typeOf")}</div>
                                    {t("Price.doYouWant")}                                            
                                </div>
                            </div>
                            <button onClick={() => setSelectedWebsiteType('Website')} className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedWebsiteType === 'Website' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.website")}
                                </div>
                                {selectedWebsiteType === 'Website' ? <PWebsite /> : <PWebsiteG />}
                            </button>
                            <button onClick={() => setSelectedWebsiteType('e-Commerce')}  className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedWebsiteType === 'e-Commerce' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.eCommerce")}
                                </div>
                                {selectedWebsiteType === 'e-Commerce' ? <PECommerce /> : <PECommerceG />}
                            </button>
                        </div>
                        {/* Solution */}
                        <div className='flex flex-col gap-5 w-[500px]' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-xl text-[#557AAA] font-bold'>
                                {t("Price.whichIs")}
                                <div className='text-xl text-[#153764] font-bold'>{t("Price.best")}</div>
                                {t("Price.foryou")}
                            </div>
                            <button onClick={() => setSelectedSolutionType('Basic')} className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.basic")}
                                </div>
                            </button>
                            <button onClick={() => setSelectedSolutionType('Advanced')}  className={`text-xl flex justify-between max-w-[500px] px-[30px] py-[25px] rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.advanced")}
                                </div>
                            </button>
                        </div>
                        {/* Discount */}
                        <div className='flex flex-col gap-5 w-[500px]' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-xl text-[#557AAA] font-bold'>
                                {t("Price.nowYouCan")}
                                <div className='text-xl text-[#153764] font-bold'>{t("Price.saveMore")}</div>
                                {t("Price.costC")}
                            </div>
                            <div className={`text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left'>
                                    <div>
                                        {t("Price.discount")}
                                    </div>
                                    <div>
                                        {t("Price.rm1800")}
                                    </div>
                                </div>
                                {selectedSolutionType === 'Basic' ? <Basic /> : <BasicG />}
                            </div>
                            <div  className={`text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left w-[380px]'>
                                    <div>
                                        {t("Price.professional")}
                                    </div>
                                    <div>
                                        {t("Price.rm2200")}
                                    </div>
                                </div>
                                {selectedSolutionType === 'Advanced' ? <Basic /> : <BasicG />}
                            </div>
                            <button className='text-xl flex justify-between items-center max-w-[500px] px-[30px] py-5 rounded-[10px] bg-[#D1D5DB]'>
                                <div className='flex flex-col gap-[5px] text-left'>
                                    <div className='text-xl text-[#153764] font-medium'>
                                        {t("Price.customMade")}
                                    </div>
                                    <div className='text-base text-[#6B7280] font-normal'>
                                        {t("Price.letUsKnow")}
                                    </div>
                                </div>
                                <Bulb />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='xl:hidden flex flex-col justify-center gap-[100px]'>
                    {/* Top */}
                    <div className='flex flex-col gap-[100px] md:px-5'>
                        {/* Website */}
                        <div className='flex flex-col gap-5 w-full' data-aos="fade-up" deta-aos-delay="200">
                            <div>
                                <div className='flex gap-[6px] text-base text-[#557AAA] font-bold'>
                                    {t("Price.what")} 
                                    <div className='text-base text-[#153764] font-bold'>{t("Price.typeOf")}</div>
                                    {t("Price.doYouWant")}
                                </div>
                                <div className='flex gap-[6px] text-base text-[#557AAA] font-bold'>
                                    {t("Price.apaYang")}
                                </div>
                            </div>
                            <button onClick={() => setSelectedWebsiteType('Website')} className={`text-base flex justify-between w-full px-[30px] py-[23px] md:py-[25px] rounded-[10px] ${selectedWebsiteType === 'Website' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.website")}
                                </div>
                                {selectedWebsiteType === 'Website' ? <PWebsiteM /> : <PWebsiteGM />}
                            </button>
                            <button onClick={() => setSelectedWebsiteType('e-Commerce')}  className={`text-base flex justify-between w-full px-[30px] py-[23px] md:py-[25px] rounded-[10px] ${selectedWebsiteType === 'e-Commerce' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.eCommerce")}
                                </div>
                                {selectedWebsiteType === 'e-Commerce' ? <PECommerceM /> : <PECommerceGM />}
                            </button>
                        </div>
                        {/* Solution */}
                        <div className='flex flex-col gap-5 w-full' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-base text-[#557AAA] font-bold'>
                                {t("Price.whichIs")} 
                                <div className='text-base text-[#153764] font-bold'>{t("Price.best")}</div>
                                {t("Price.foryou")}
                            </div>
                            <button onClick={() => setSelectedSolutionType('Basic')} className={`text-base flex justify-between px-[23px] py-[23px] md:py-[25px] rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.basic")}
                                </div>
                            </button>
                            <button onClick={() => setSelectedSolutionType('Advanced')}  className={`text-base flex justify-between px-[23px] py-[23px] md:py-[25px] rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div>
                                    {t("Price.advanced")}
                                </div>
                            </button>
                        </div>
                        {/* Discount */}
                        <div className='flex flex-col gap-5 w-full' data-aos="fade-up" deta-aos-delay="200">
                            <div className='flex gap-[6px] text-base text-[#557AAA] font-bold'>
                                {t("Price.nowYouCan")}
                                <div className='text-base text-[#153764] font-bold'>{t("Price.saveMore")}</div>
                                {t("Price.costC")}
                            </div>
                            <div className={`text-base flex justify-between items-center w-full xl:max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Basic' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left'>
                                    <div>
                                        {t("Price.discount")}
                                    </div>
                                </div>
                                {selectedSolutionType === 'Basic' ? <BasicM /> : <BasicGM />}
                            </div>
                            <div  className={`text-base flex justify-between items-center w-full xl:max-w-[500px] px-[30px] py-5 rounded-[10px] ${selectedSolutionType === 'Advanced' ? 'font-semibold text-[#153764] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'text-[#9CA3AF] font-normal bg-none border'}`}>
                                <div className='text-left md:flex gap-1'>
                                    <div>
                                        {t("Price.professional")}
                                    </div>
                                    <div>
                                        {t("Price.rm2200")}
                                    </div>
                                </div>
                                {selectedSolutionType === 'e-commerce' ? <BasicM /> : <BasicGM />}
                            </div>
                            <button className='text-base flex justify-between items-center w-full xl:max-w-[500px] px-[30px] py-5 rounded-[10px] bg-[#D1D5DB]'>
                                <div className='flex flex-col gap-[5px] text-left'>
                                    <div className='text-base text-[#153764] font-medium'>
                                        {t("Price.customMade")}
                                    </div>
                                    <div className='text-sm text-[#6B7280] font-normal'>
                                        {t("Price.letUsKnow")}
                                    </div>
                                </div>
                                <BulbM />
                            </button>
                        </div>
                    </div>
                    {/* Bottom Details */}
                    {selectedData && (
                    <div className="flex flex-col gap-[100px] md:px-5">
                        <div className="flex flex-col gap-[50px]">
                            {/* Title */}
                            <div className="flex flex-col gap-[5px] md:gap-[10px] text-left" data-aos="fade-up">
                                <div className="text-2xl text-[#153764] font-bold">{t(selectedData.title)}</div>
                                <div className="flex gap-1">
                                    <div className="text-base text-[#557AAA] font-normal">{t("Price.orderNow")}</div>
                                    <div className="text-base text-[#557AAA] font-medium">{selectedData.price}</div>
                                    <div className="text-base text-[#557AAA] font-normal">* </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex justify-between w-full" data-aos="fade-up" deta-aos-delay="200">
                                <ul className="list-disc list-inside text-base text-left text-[#4B5563] font-normal leading-[40px]">
                                    {selectedData.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="text-[#6B7280] text-base md:text-base font-normal text-right leading-[40px]">
                                    {selectedData.ans.map((ans, index) => (
                                    <div className='leading-[40px]' key={index}>{ans}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom */}
                        <div className="flex flex-col gap-[30px] text-left" data-aos="fade-up" deta-aos-delay="200">
                            {/* Text */}
                            <div className="text-base font-semibold">
                                <div className="text-[#557AAA] flex gap-[1px]">
                                    {t("Price.requirement")}<div className="text-[#153764]">{t("Price.newWebsiteC")}</div>
                                </div>
                                <div className="text-[#153764]">
                                    {t("Price.newWebsite")}
                                </div>
                            </div>
                            {/* Prices */}
                            <div className='flex justify-between'>
                                {/* Left */}
                                <div className='flex flex-col gap-[20px]'>
                                    <div className="text-base">
                                        <div className="text-[#4B5563] font-light">{t(selectedData.combination)}</div>
                                        <div className="text-[#153764] font-medium">{selectedData.price}</div>
                                    </div>
                                    {selectedData.discount && (
                                        <div className="text-base">
                                        <div className="text-[#4B5563] font-light">{t("Price.nowDiscount")}</div>
                                        <div className="text-[#153764] font-medium">{selectedData.discount}</div>
                                        </div>
                                    )}
                                    {selectedData.subtotal && (
                                        <div className="text-base">
                                        <div className="text-[#4B5563] font-light">{t("Price.subtotal")}</div>
                                        <div className="text-[#153764] font-medium">{selectedData.subtotal}</div>
                                        </div>
                                    )}
                                </div>
                                {/* Right Bottom */}
                                <div className="flex flex-col justify-end items-end gap-[10px]" data-aos="fade-up" deta-aos-delay="400">
                                    <LorryM />
                                    {selectedData.ship && (
                                        <div className="text-right">
                                        <div className="text-base text-[#6B7280] font-light">{t("Price.ship")}</div>
                                        <div className="text-base text-[#153764] font-medium">{selectedData.ship} {t("Price.weeks")}</div>
                                        <div className="text-base text-[#153764] font-medium">{t("Price.freeTesting")}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

                {/* Explore Template */}
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[1200px] flex flex-col gap-[250px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[10px] md:gap-[20px]" data-aos="fade-up" deta-aos-delay="200">
                                <div className="text-base md:text-[32px] text-[#557AAA] font-normal md:font-medium leading-normal">{t("Price.amazingStuff")}</div>
                                <div className='flex flex-col md:gap-5'>
                                    <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("Price.designAndDevelop")}</div>
                                    <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("Price.creativeSolution")}</div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center" data-aos="fade-up" deta-aos-delay="400">
                                <a href='/creating_explore' className="w-auto text-base md:text-2xl text-[#153764] font-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]">
                                    {t("Price.exploreTemplate")}
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