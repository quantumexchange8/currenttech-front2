import React, { useState,useEffect } from 'react';
import { Independent, Enterprise, IndependentG, EnterpriseG, IndependentM, EnterpriseM, IndependentGM, EnterpriseGM, FrontBackend, AttendentSystem, ProjectTask, Reward, FrontBackendM, AttendentSystemM, ProjectTaskM, RewardM} from '../Components/Outline.jsx';
import { Website, ManagementSystem, PosSystem, SupportService, WebsiteM, ManagementSystemM, PosSystemM, SupportServiceM } from '../Components/Outline.jsx';
import Modal from '../Components/Modal';
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Advantage/1.png';
import image2 from '../Assets/Images/Advantage/2.png';
import image3 from '../Assets/Images/Advantage/3.png';
import imageM1 from '../Assets/Images/Advantage/M1.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx';

const Advantage = () => {
    const { t } = useTranslation();
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
        AOS.refresh();
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
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
                        <div className='max-w-full flex flex-col items-center gap-[100px] md:gap-[150px]'>
                            {/* Advantage */}
                            <div className='flex flex-col gap-[50px] px-[25px] md:px-5 lg:px-[102px] xl:p-0' data-aos="fade-up">
                                <img src={image2} alt='' className='object-cover rounded-[10px] w-full md:w-full h-[230px] md:h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] text-left'>
                                    {/* Web */}
                                    <div className='hidden md:block text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="200">
                                        {t("Advantage.selfEmployed.advantage")}
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden text-xl text-[#557AAA] text-left font-bold' data-aos="fade-up" data-aos-delay="200">
                                        <div>
                                            {t("Advantage.selfEmployed.advantageMobile")}                                         
                                        </div>
                                        <div>
                                             {t("Advantage.selfEmployed.advantageMobile2")}
                                        </div>
                                    </div>
                                    {/* Md */}
                                    <div className='hidden lg:hidden md:block text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        <div className='leading-normal'>
                                            {t("Advantage.selfEmployed.professionalsMd")}
                                        </div>
                                    </div>
                                    {/* Web */}
                                    <div className='hidden lg:block text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        <div className='leading-normal'>
                                            {t("Advantage.selfEmployed.professionals")}
                                        </div> 
                                        <div className='leading-normal'>
                                            {t("Advantage.selfEmployed.customSystems")}
                                        </div> 
                                        <div className='leading-normal'>
                                            {t("Advantage.selfEmployed.customerManagement")}
                                        </div>
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden text-base text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        <div className='w-auto'>
                                            <div>{t("Advantage.selfEmployed.professionalsMobile")}</div>
                                            <div>{t("Advantage.selfEmployed.professionalsMobile2")}</div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        
                            {/* We Tailor for you */}
                            <div>
                                <div className='flex flex-col gap-[50px] px-[23px] md:px-5 lg:px-[102px] xl:p-0'>
                                    {/* Title */}
                                    <div className='text-xl md:text-[32px] font-bold text-left text-[#153764] leading-normal' data-aos="fade-up" data-aos-delay="200">
                                        {t("Advantage.advantageSelfListTitle")}
                                    </div>
                                    {/* Items */}
                                    <div className='flex flex-col gap-[100px]'> 
                                        {/* Website */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex items-center gap-[20px] md:gap-[30px]' data-aos="fade-up" data-aos-delay="400">
                                                <div className='flex'>
                                                    <div className='hidden md:block'><Website/></div>
                                                    <div className='md:hidden'><WebsiteM/></div>
                                                </div>
                                                <div className='text-xl md:text-2xl font-bold text-left text-[#557AAA] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.websiteTitle")}
                                                </div>
                                            </div>
                                            {/* Web */}
                                            <div className='hidden md:block text-sm md:text-xl xl:text-2xl text-[#4B5563] text-left'>
                                                <div className='flex flex-col font-normal w-[290px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Mobile */}
                                            <div className='md:hidden text-base  text-[#4B5563] text-left'>
                                                <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescriptionMobile")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageListDescription.websiteDescriptionMobile2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Management System */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex items-center gap-[20px] md:gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <div className='hidden md:block'><ManagementSystem/></div>
                                                    <div className='md:hidden'><ManagementSystemM/></div>
                                                </div>
                                                <div className='text-xl md:text-2xl font-bold text-left text-[#557AAA] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.managementTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                <div className='hidden xl:block text-sm  md:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal w-[290px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescription")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescription2")}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ipad */}
                                                <div className='hidden md:block xl:hidden text-xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescriptionIpad")}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:hidden text-base md:text-xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescriptionMobile")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.managementDescriptionMobile2")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Payment System */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[20px] md:gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <div className='hidden md:block'><PosSystem/></div>
                                                    <div className='md:hidden'><PosSystemM/></div>
                                                </div>
                                                <div className='text-xl md:text-2xl font-bold text-left text-[#557AAA] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.paymentTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                <div className='hidden md:block text-sm  md:text-xl xl:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal w-[303px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescription")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescription2")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescription3")}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:hidden text-base text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescriptionMobile")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescriptionMobile2")}
                                                        </div>
                                                        <div>
                                                            {t("Advantage.advantageListDescription.paymentDescriptionMobile3")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Support and Service */}
                                        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                            <div className='flex gap-[20px] md:gap-[30px]'>
                                                <div className='flex flex-shrink-0' data-aos="fade-up" data-aos-delay="400">
                                                    <div className='hidden md:block'><SupportService/></div>
                                                    <div className='md:hidden'><SupportServiceM/></div>
                                                </div>
                                                <div className='text-xl md:text-2xl font-bold text-left text-[#557AAA] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageSelfListSubtitle.supportTitle")}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                                <div className='text-base md:text-xl xl:text-2xl text-[#4B5563] text-left'>
                                                    <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
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
                <div className="flex flex-col gap-[50px] px-[25px] xl:p-0">
                    {/* Main Content */}
                    <div className='w-full flex flex-col justify-center items-center gap-[50px] md:gap-[150px]'>
                        <div className='max-w-full flex flex-col gap-[100px] md:gap-[150px]'>
                            {/* Advantage */}
                            <div className='flex flex-col  gap-[50px] lg:px-[102px] xl:p-0'>
                                <img src={image3} alt='' className='object-cover rounded-[10px] w-[380px] md:w-full h-[238px] md:h-[500px]' data-aos="fade-up" data-aos-delay="200"/>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] text-left'>
                                    <div className='text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="200">
                                        {t("Advantage.enterprise.advantage")}
                                    </div>
                                    {/* Web */}
                                    <div className='hidden lg:block text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="400">
                                        <div>
                                            {t("Advantage.enterprise.effective")}
                                        </div> 
                                        <div>
                                            {t("Advantage.enterprise.flexible")}
                                        </div> 
                                        <div>
                                            {t("Advantage.enterprise.anyBusiness")}
                                        </div>
                                    </div>
                                    {/* Mb */}
                                    <div className='hidden lg:hidden md:block text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="400">
                                        {t("Advantage.enterprise.effectiveMobile")}
                                    </div>
                                    {/* Mobile */}
                                    <div className='md:hidden text-base text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="400">
                                        <div>
                                            {t("Advantage.enterprise.effectiveMobile")}
                                        </div> 
                                        <div>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            {/* We Customise for you */}
                            <div> 
                                <div className='flex flex-col gap-[50px] md:gap-[50px] lg:px-[102px] xl:p-0'>
                                    {/* Title */}
                                    <div className='text-xl md:text-[32px] font-bold text-left text-[#153764] leading-normal' data-aos="fade-up" data-aos-delay="400">
                                        {t("Advantage.advantageEnterpriseListTitle")}
                                    </div>
                                    {/* Items */}
                                    <div className='flex flex-col gap-[100px]'> 
                                        {/* FrontBackend */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-5 md:gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <div className='hidden md:block'><FrontBackend/></div>
                                                    <div className='md:hidden'><FrontBackendM/></div>
                                                </div>
                                                <div className='text-xl xl:text-2xl font-bold text-left text-[#557AAA] leading-normal'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.frontendTitle")}
                                                </div>
                                            </div>
                                            {/* Web */}
                                            <div className='hidden xl:block text-sm md:text-2xl text-[#4B5563] text-left' data-aos="fade-up" data-aos-delay="800">
                                                <div className='flex flex-col font-normal w-[300px] md:w-full leading-normal'>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Mobile */}
                                            <div className='xl:hidden text-base md:text-xl text-[#4B5563] text-left' data-aos="fade-up" data-aos-delay="800">
                                                <div className='flex flex-col font-normal leading-normal'>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescriptionMobile")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescriptionMobile2")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.frontendDescriptionMobile3")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Attendent System */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex items-center gap-5 md:gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex'>
                                                    <div className='hidden md:block'><AttendentSystem /></div>
                                                    <div className='md:hidden'><AttendentSystemM /></div>
                                                </div>
                                                <div className='text-xl xl:text-2xl font-bold text-left text-[#557AAA]' data-aos="fade-up" data-aos-delay="600">
                                                    {t("Advantage.advantageEnterpriseListSubtitle.attendanceTitle")}
                                                </div>
                                            </div>
                                            <div className='hidden xl:block text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescription2")}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='xl:hidden text-base md:text-xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescriptionMobile")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.attendanceDescriptionMobile2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Project Task */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-5 md:gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <div className='hidden md:block'><ProjectTask/></div>
                                                    <div className='md:hidden'><ProjectTaskM/></div>
                                                </div>
                                                <div className='text-xl xl:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.projectTitle")}
                                                </div>
                                            </div>
                                            {/* Web */}
                                            <div className='hidden xl:block text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[290px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
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
                                            {/* Mobile */}
                                            <div className='xl:hidden text-base md:text-xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal leading-tight' data-aos="fade-up" data-aos-delay="800">
                                                    <div className='leading-normal'>
                                                        {t("Advantage.advantageEnterpriseListDescription.projectDescriptionMobile")}
                                                    </div>
                                                    <div className='leading-normal'>
                                                        {t("Advantage.advantageEnterpriseListDescription.projectDescriptionMobile2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reward Program */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-5 md:gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <div className='hidden md:block'><Reward/></div>
                                                    <div className='md:hidden'><RewardM/></div>
                                                </div>
                                                <div className='text-xl xl:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.rewardTitle")}
                                                </div>
                                            </div>
                                            <div className='hidden xl:block text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
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
                                            <div className='xl:hidden text-base md:text-xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.rewardDescriptionMobile")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.rewardDescriptionMobile2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Support Service */}
                                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                                            <div className='flex gap-5 md:gap-[30px]' data-aos="fade-up" data-aos-delay="600">
                                                <div className='flex flex-shrink-0'>
                                                    <div className='hidden md:block'><SupportService/></div>
                                                    <div className='md:hidden'><SupportServiceM/></div>
                                                </div>
                                                <div className='text-xl md:text-2xl font-bold text-left text-[#557AAA]'>
                                                    {t("Advantage.advantageEnterpriseListSubtitle.supportTitle")}
                                                </div>
                                            </div>
                                            <div className='hidden xl:block text-sm md:text-2xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal w-[300px] md:w-full leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescription")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescription2")}
                                                    </div>
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescription3")}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='xl:hidden text-base md:text-xl text-[#666] text-left'>
                                                <div className='flex flex-col font-normal leading-normal' data-aos="fade-up" data-aos-delay="800">
                                                    <div>
                                                        {t("Advantage.advantageEnterpriseListDescription.supportDescriptionMobile")}
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
        <div className="flex flex-col w-full justify-center text-center gap-[150px] xl:gap-[200px] pt-[50px] xl:pt-[80px] pb-[250px]">
            {/* Top Image */}
            <div className="relative">
                <img src={image1} alt="Advantage 1" className="hidden md:block w-full object-cover" />
                <img src={imageM1} alt="Advantage 1" className="md:hidden w-full h-[800px] md:h-[1000px]" />
                <div className="absolute top-[43%] xl:top-[40%] left-[5%] xl:left-[20%] text-left flex flex-col gap-[10px]">
                    {/* Web */}
                    <div className="hidden md:block text-2xl text-[#D1D5DB] font-normal leading-normal">{t("Advantage.noNeedToStress")}</div>
                    {/* Mobile */}
                    <div className="md:hidden text-base text-[#D1D5DB] font-medium">
                        <div className='leading-normal'>
                            {t("Advantage.noNeedToStressMobile")}
                        </div>
                        <div className='leading-normal'>
                             {t("Advantage.noNeedToStressMobile2")}
                        </div>
                    </div>
                    <div className="flex flex-col text-2xl xl:text-5xl text-[#D1D5DB] font-bold leading-normal">
                        <div className='leading-normal'>{t("Advantage.creatingAdvantage")}</div>
                        <div className='leading-normal'>{t("Advantage.strength")}</div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-[250px] ">
                <div className="flex justify-center">
                    <section className="flex flex-col xl:flex-row items-center md:items-stretch gap-[50px] md:gap-[50px] xl:max-w-[1200px]">
                        {/* Mobile */}
                        <div className='md:hidden flex justify-center items-center sticky top-[49px] w-full bg-white z-40' >
                            <div className=" h-auto md:h-auto xl:h-auto w-full max-w-[500px] p-5">
                                <div className='flex flex-col items-center'>
                                    <div className="xl:hidden flex justify-between w-full bottom-[-25px] md:bottom-[-30px]">
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-white'></div>
                                        <button className="flex items-center justify-center gap-3 min-w-[163px]" onClick={() => [handleSelectType('Independent'), window.scrollTo({ top: 1050, behavior: 'smooth'})]}>
                                            <div className="hidden md:block">
                                            {selectedType === 'Independent' ? <Independent /> : <IndependentG />}
                                            </div>
                                            <div className="md:hidden">
                                            {selectedType === 'Independent' ? <IndependentM /> : <IndependentGM />}
                                            </div>
                                            <div
                                            className={`text-lg md:text-2xl ${
                                                selectedType === 'Independent'
                                                ? 'text-[#153764] font-semibold md:font-bold'
                                                : 'text-[#9CA3AF] font-normal'
                                            }`}
                                            >
                                            {t('Advantage.independent')}
                                            </div>
                                        </button>
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-[#9CA3AF]'></div>
                                        <button className="flex items-center justify-center gap-3 min-w-[163px]" onClick={() => [handleSelectType('Enterprise'), window.scrollTo({ top: 1050, behavior: 'smooth'})]}>
                                            <div className="hidden md:block">
                                                {selectedType === 'Enterprise' ? <Enterprise /> : <EnterpriseG />}
                                            </div>
                                            <div className="md:hidden">
                                                {selectedType === 'Enterprise' ? <EnterpriseM /> : <EnterpriseGM />}
                                            </div>
                                            <div
                                                className={`text-lg md:text-2xl ${
                                                    selectedType === 'Enterprise'
                                                    ? 'text-[#153764] font-semibold md:font-bold'
                                                    : 'text-[#9CA3AF] font-normal'
                                                }`}
                                                >
                                                {t('Advantage.enterpriseA')}
                                            </div>
                                        </button>
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-white'></div>
                                    </div>
                                    <div className="w-full xl:w-[500px] h-[1px] bg-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>
                        {/* Ipad */}
                        <div className='hidden xl:hidden md:flex justify-center items-center sticky top-[49px] w-full bg-white z-40' >
                            <div className=" h-auto md:h-auto xl:h-auto w-full max-w-[500px] p-5">
                                <div className='flex flex-col items-center'>
                                    <div className="xl:hidden flex justify-between w-full bottom-[-25px] md:bottom-[-30px]">
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-white'></div>
                                        <button className="flex items-center justify-center gap-3 min-w-[212px]" onClick={() => [handleSelectType('Independent'), window.scrollTo({ top: 650, behavior: 'smooth'})]}>
                                            <div className="hidden md:block">
                                            {selectedType === 'Independent' ? <Independent /> : <IndependentG />}
                                            </div>
                                            <div className="md:hidden">
                                            {selectedType === 'Independent' ? <IndependentM /> : <IndependentGM />}
                                            </div>
                                            <div
                                            className={`text-lg md:text-2xl ${
                                                selectedType === 'Independent'
                                                ? 'text-[#153764] font-semibold md:font-bold'
                                                : 'text-[#9CA3AF] font-normal'
                                            }`}
                                            >
                                            {t('Advantage.independent')}
                                            </div>
                                        </button>
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-[#9CA3AF]'></div>
                                        <button className="flex items-center justify-center gap-3 min-w-[212px]" onClick={() => [handleSelectType('Enterprise'), window.scrollTo({ top: 650, behavior: 'smooth'})]}>
                                            <div className="hidden md:block">
                                                {selectedType === 'Enterprise' ? <Enterprise /> : <EnterpriseG />}
                                            </div>
                                            <div className="md:hidden">
                                                {selectedType === 'Enterprise' ? <EnterpriseM /> : <EnterpriseGM />}
                                            </div>
                                            <div
                                                className={`text-lg md:text-2xl ${
                                                    selectedType === 'Enterprise'
                                                    ? 'text-[#153764] font-semibold md:font-bold'
                                                    : 'text-[#9CA3AF] font-normal'
                                                }`}
                                                >
                                                {t('Advantage.enterpriseA')}
                                            </div>
                                        </button>
                                        <div className=' w-[1px] h-[50px] md:h-[70px] bg-white'></div>
                                    </div>
                                    <div className="w-full xl:w-[500px] h-[1px] bg-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>
                        {/* Web */}
                        <div>
                            <div className="hidden xl:flex flex-col items-center sticky top-[80px] z-50 h-auto md:h-[200px] xl:h-auto">
                                <div className="hidden xl:flex flex-col gap-[25px] md:gap-8 bottom-[-25px] md:bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectType('Independent'), window.scrollTo({ top: 1250, behavior: 'smooth'})]}>
                                        <div className="hidden md:block">
                                        {selectedType === 'Independent' ? <Independent /> : <IndependentG />}
                                        </div>
                                        <div className="md:hidden">
                                        {selectedType === 'Independent' ? <IndependentM /> : <IndependentGM />}
                                        </div>
                                        <div
                                        className={`text-xl md:text-2xl ${
                                            selectedType === 'Independent'
                                            ? 'text-[#153764] font-semibold md:font-bold'
                                            : 'text-[#9CA3AF] font-normal'
                                        }`}
                                        >
                                        {t('Advantage.independent')}
                                        </div>
                                    </button>
                                    {/* Horizontal line */}
                                    <div className="relative w-[350px] bg-[#9CA3AF] h-[1px]">
                                        <div className="absolute right-0 top-[-80px] md:top-[-100px] w-[1px] h-[160px] md:h-[200px] bg-[#9CA3AF]" />
                                    </div>
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectType('Enterprise'), window.scrollTo({ top: 1250, behavior: 'smooth'})]}>
                                        <div className="hidden md:block">
                                        {selectedType === 'Enterprise' ? <Enterprise /> : <EnterpriseG />}
                                        </div>
                                        <div className="md:hidden">
                                        {selectedType === 'Enterprise' ? <EnterpriseM /> : <EnterpriseGM />}
                                        </div>
                                        <div
                                        className={`text-xl md:text-2xl ${
                                            selectedType === 'Enterprise'
                                            ? 'text-[#153764] font-semibold md:font-bold'
                                            : 'text-[#9CA3AF] font-normal'
                                        }`}
                                        >
                                        {t('Advantage.enterpriseA')}
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="md:w-full flex flex-col justify-center items-center gap-[50px] md:gap-[150px]">
                            {renderMainContent()}
                        </div>
                    </section>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col justify-center items-center md:px-5 lg:p-0">
                    <div className="max-w-[1200px] flex flex-col gap-[250px]">
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex flex-col gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                <div className="text-base md:text-[32px] text-[#557AAA] font-normal md:font-medium leading-normal">{t("Advantage.advantageSelfReminderTitle")}</div>
                                {/* Web */}
                                <div className="hidden md:block md:text-4xl xl:text-5xl text-[#153764] font-bold leading-normal">
                                    <div>{t("Advantage.weWillGive")}</div>
                                    <div>{t("Advantage.weWillGive2")}</div>
                                </div>
                                {/* Mobile */}
                                <div className="md:hidden text-2xl text-[#153764] font-bold">
                                    <div className='leading-normal'>
                                        {t("Advantage.weWillGiveMobile")}
                                    </div>
                                    <div className='leading-normal'>
                                        {t("Advantage.weWillGiveMobile2")}
                                    </div>
                                </div>
                            </div>
                            <div> 
                                <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                    <button
                                        className="w-auto text-base md:text-2xl text-[#153764] font-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] leading-normal"
                                        onClick={handleContactUsClick}
                                    >
                                        {t("Home.contactUs")}
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
            <div className='absolute bg-opacity-20'>
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default Advantage;
