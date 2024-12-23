import React, { useState,useEffect } from 'react';
import { Independent, Enterprise, IndependentG, EnterpriseG, FrontBackend, AttendentSystem, ProjectTask, Reward} from '../Components/Outline.jsx';
import { Website, ManagementSystem, PosSystem, SupportService } from '../Components/Outline.jsx';
import Modal from '../Components/Modal';
import { useTranslation } from 'react-i18next';

import image1 from '../Assets/Images/Advantage/1.png';
import image2 from '../Assets/Images/Advantage/2.png';
import image3 from '../Assets/Images/Advantage/3.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';

const Advantage = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('Independent');

    const handleContactUsClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectType = (type) => {
        setSelectedType(type); 
        window.scrollTo({
            top: 1200,
            behavior: 'smooth',
          });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,  
            offset: 200,
        });
    }, []);

    // Conditional content based on selectedType
    const renderMainContent = () => {
        if (selectedType === 'Independent') {
            return (
                <div className="flex flex-col gap-[50px]">
                    {/* Main Content */}
                    <div className='w-full flex flex-col justify-center items-center gap-[50px] md:gap-[150px]'>
                        <div className='max-w-[800px] flex flex-col gap-[50px] md:gap-[150px]'>
                            {/* Advantage */}
                            <div className='flex flex-col gap-[50px]' data-aos="fade-up">
                                <img src={image2} alt="Image 2" className='rounded-[10px] w-[800px] h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                                <div className='flex flex-col gap-[30px] text-left'>
                                    <div className='text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="200">
                                        THE ADVANTAGE FOR SELF-EMPLOYED
                                    </div>
                                    <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        <div>
                                            For self-employed professionals, technology is key. We specialise
                                        </div> 
                                        <div>
                                            in custom systems that enhance your business and simplify
                                        </div> 
                                        <div>
                                            customer management.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            {/* We Tailor for you */}
                            <div>
                                <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                                    {/* Title */}
                                    <div className='text-base md:text-[32px] font-bold text-left text-[#153764]' data-aos="fade-up" data-aos-delay="200">
                                        {t("Advantage.advantageSelfListTitle")}
                                    </div>
                                    {/* Items */}
                                    <div className='flex flex-col gap-[100px]'> 
                                        {/* Website */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[30px]' data-aos="fade-up" data-aos-delay="400">
                                                <div className='flex flex-shrink-0'>
                                                    <Website/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.websiteTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#4B5563] text-left'>
                                                <div className='flex flex-col font-normal w-[290px] md:w-[800px] leading-tight' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Management System */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <ManagementSystem/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.managementTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                
                                                <div className='text-sm md:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal w-[290px] md:w-[800px] leading-tight' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescription")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescription2")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Payment System */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <PosSystem/>
                                                </div>
                                                <div className='text-base md:text-2xl font-semibold text-lef text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.paymentTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                
                                                <div className='text-sm md:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal w-[303px] md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescription")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescription2")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Support and Service */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <SupportService/>
                                                </div>
                                                <div className='text-base md:text-2xl font-semibold text-left text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.supportTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                
                                                <div className='text-sm md:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col w-[303px] font-normal md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.supportDescription")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (selectedType === 'Enterprise') {
            return (
                <div className="flex flex-col gap-[50px]">
                    {/* Main Content */}
                    <div className='w-full flex flex-col justify-center items-center gap-[50px] md:gap-[150px]'>
                        <div className='max-w-[800px] flex flex-col gap-[50px] md:gap-[150px]'>
                            {/* Advantage */}
                            <div className='flex flex-col gap-[50px]'>
                                <img src={image3} alt="Image 2" className='rounded-[10px] w-[800px] h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                                <div className='flex flex-col gap-[30px] text-left'>
                                    <div className='text-2xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="200">
                                        THE ADVANTAGE FOR ENTERPRISE
                                    </div>
                                    <div className='text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="400">
                                        <div>
                                            Effective enterprise management covers HR, finance, and tracking
                                        </div> 
                                        <div>
                                            systems. Our tech team has crafted a flexible, precise solution for 
                                        </div> 
                                        <div>
                                            any business.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            {/* We Customise for you */}
                            <div>
                                <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                                    {/* Title */}
                                    <div className='text-base md:text-[32px] font-bold text-left text-[#153764]' data-aos="fade-up" data-aos-delay="400">
                                        {t("Advantage.advantageEnterpriseListTitle")}
                                    </div>
                                    {/* Items */}
                                    <div className='flex flex-col gap-[100px]'> 
                                        {/* FrontBackend */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <FrontBackend/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.frontendTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#4B5563] text-left' data-aos="fade-up" data-aos-delay="800">
                                                <div className='flex flex-col font-normal w-[300px] md:w-[800px] leading-[1.20]'>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Attendent System */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-[30px]'>
                                                <div className='flex flex-shrink-0 w-[30px]'>
                                                    <AttendentSystem />
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageEnterpriseListSubtitle.attendanceTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Project Task */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <ProjectTask/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.projectTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[290px] md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.projectDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.projectDescription2")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.projectDescription3")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reward Program */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <Reward/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.rewardTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.rewardDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.rewardDescription2")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.rewardDescription3")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Support Service */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <SupportService/>
                                                </div>
                                                <div className='text-base md:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.supportTitle")}
                                                </div>
                                            </div>
                                            <div className='text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-[800px] leading-[1.20]' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col w-full justify-center text-center gap-[200px] pt-[80px] pb-[250px]">
            {/* Top Image */}
            <div className="relative">
                <img src={image1} alt="Advantage Image 1" className="w-full h-[1000px] object-cover" />
                <div className="absolute top-[40%] left-[20%] text-left flex flex-col gap-[10px]">
                    <div className="text-2xl text-[#D1D5DB] font-normal">NO NEED TO STRESS ABOUT WHERE TO START</div>
                    <div className="flex flex-col gap-3 text-5xl text-[#D1D5DB] font-bold">
                        <div>CRAFTING ADVANTAGES</div>
                        <div>IS OUR STRENGTH</div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-[250px]">
                <div className="flex justify-center">
                    <section className="flex gap-[50px] max-w-[1200px]">
                        {/* Left Sidebar */}
                        <div>
                            <div className="flex sticky top-[80px] ">
                                <div className="flex flex-col gap-8 bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectType('Independent')}>
                                        {selectedType === 'Independent' ? <Independent /> : <IndependentG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'Independent' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            INDEPENDENT
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectType('Enterprise')}>
                                        {selectedType === 'Enterprise' ? <Enterprise /> : <EnterpriseG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'Enterprise' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            ENTERPRISE
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[1px] h-[200px] bg-[#9CA3AF]" />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-[800px] flex flex-col justify-center items-center gap-[50px] md:gap-[150px]">
                            {renderMainContent()}
                        </div>
                    </section>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[1200px] flex flex-col gap-[250px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                <div className="text-[32px] text-[#557AAA] font-medium">NO NEED TO HESITATE</div>
                                <div className="text-5xl text-[#153764] font-bold">WE’LL GIVE YOU THE BEST ADVICE</div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                    <button
                                        className="w-[220px] text-2xl text-[#153764] font-normal px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        onClick={handleContactUsClick}
                                    >
                                        CONTACT US
                                    </button>
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
    );
};

export default Advantage;
