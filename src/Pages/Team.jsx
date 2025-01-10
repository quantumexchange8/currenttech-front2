import { useEffect } from 'react';
import Image1 from '../Assets/Images/Team/1.png';
import Image2 from '../Assets/Images/Team/2.png';
import Image3 from '../Assets/Images/Team/3.png';
import Image4 from '../Assets/Images/Team/4.png';
import Image5 from '../Assets/Images/Team/5.png';
import ImageM1 from '../Assets/Images/Team/M1.png';
import TeamM1 from '../Assets/Images/Team/TeamM1.png';
import TeamM2 from '../Assets/Images/Team/TeamM2.png';
import TeamM3 from '../Assets/Images/Team/TeamM3.png';
import TeamM4 from '../Assets/Images/Team/TeamM4.png';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const Team = () => {

    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
        });
    }, []);

    return (
        <div className='flex flex-col pt-[50px] md:pt-[80px] pb-[250px]'>
            <div className='flex flex-col gap-[150px] md:gap-[200px] w-full'>
                {/* Top Image */}
                {/* Web */}
                <div className='hidden xl:block relative'>
                    <img src={Image1} alt="" className='hidden md:block w-full object-cover'/>
                    <div className='absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[64px] text-[#D1D5DB] font-light'>
                        <div className='w-full'>
                            {t("Team.ourTeam")}
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='xl:hidden relative'>
                    <img src={ImageM1} alt="" className='w-full object-cover'/>
                    <div className='absolute top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl lg:text-8xl text-[#D1D5DB] font-light'>
                        <div className='w-[240px] md:w-full'>
                            {t("Team.ourTeam")}
                        </div>
                    </div>
                </div>
                
                {/* OVER 15 SKILLED PROFESSIONALS */}
                <div className='flex flex-col justify-center items-center px-[25px] xl:px-0'>
                    <div className='flex flex-col gap-[30px] max-w-[1200px] xl:w-[1200px]'>
                        <div className='text-xl md:text-4xl xl:text-5xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up">
                            {t("Team.skilledProfessionals")}
                        </div>
                        {/* Web */}
                        <div className='hidden xl:block text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                            <div>
                                {t("Team.strongTeam")}
                            </div> 
                            <div>
                                {t("Team.innovation")}
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                            {t("Team.strongTeamMobile")}
                        </div>
                    </div>
                </div>

                {/* Team & Career Page */}
                <div className='flex flex-col gap-[250px] w-full'>
                    {/* Team */}
                    <div className='flex flex-col w-full'>
                        {/* IT */}
                        <div className='flex flex-col gap-[50px] justify-start md:justify-center items-start md:items-center bg-[#D5E7FF] w-full py-[50px] md:py-[101px] px-[25px] xl:px-0'>
                            <div className='flex flex-col gap-[30px] xl:gap-[50px] max-w-[1200px] xl:w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-base md:text-xl lg:text-2xl text-[#557AAA] font-light leading-normal'>
                                        {t("Team.teamExpertise")}
                                    </div>
                                    <div className='text-xl md:text-[32px] lg:text-4xl text-[#153764] font-bold leading-normal'>
                                        {t("Team.itEngineering")}
                                    </div>
                                </div>
                                <div className='flex flex-col xl:flex-row justify-between text-base md:text-xl lg:text-2xl xl:text-xl text-[#4B5563] font-normal pl-3' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-inside leading-[40px] '>
                                        <li>
                                            {t("Team.systemArchitecture")}
                                        </li>
                                        <li>
                                            {t("Team.development")}
                                        </li>
                                        <li>
                                            {t("Team.networkSecurity")}
                                        </li>
                                        <li>
                                            {t("Team.databaseManagement")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px] '>
                                        <li>
                                            {t("Team.systemIntegration")}
                                        </li>
                                        <li>
                                            {t("Team.technologyStrategy")}
                                        </li>
                                        <li>
                                            {t("Team.processAutomation")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px] '>
                                        <li>
                                            {t("Team.DataAnalysis")}
                                        </li>
                                        <li>
                                            {t("Team.cloudInfrastructure")}
                                        </li>
                                        <li>
                                            {t("Team.support")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* WE'RE COOL CREW */}
                        {/* Web */}
                        <div className='hidden xl:flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="800">
                                <img src={Image2} alt="" className=' w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold md:w-[600px] leading-normal' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.coolCrew")}
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        {t("Team.dynamicItTeam")}
                                    </div> 
                                    <div>
                                        {t("Team.excellence")}
                                    </div>
                                    <div>
                                        {t("Team.shapeTheFuture")}
                                    </div>
                                    <div>
                                        {t("Team.teknologi")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden flex justify-center relative'>
                            {/* Left: Image */}
                            <div className='relative w-full' data-aos="fade-up" data-aos-delay="800">
                                <img src={TeamM1} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>

                            {/* Right: Text */}
                            <div className='absolute inset-0 flex flex-col gap-[10px] md:gap-5 justify-center z-10 px-[25px]'>
                                <div className='text-xl md:text-4xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.coolCrew")}
                                </div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="600">
                                    {t("Team.dynamicItTeamMobile")}
                                </div>
                            </div>
                        </div>

                        {/* MOBILE APP ENGINNERING*/}
                        <div className='flex flex-col gap-[50px] justify-start md:justify-center items-start md:items-center bg-[#D5E7FF] w-full py-[50px] md:py-[101px] px-[25px] xl:px-0'>
                            <div className='flex flex-col gap-[30px] xl:gap-[50px] max-w-[1200px] xl:w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-base md:text-xl lg:text-2xl text-[#557AAA] font-light leading-normal'>
                                        {t("Team.teamExpertise")}
                                    </div>
                                    <div className='text-xl md:text-[32px] lg:text-4xl text-[#153764] font-bold leading-normal'>
                                        {t("Team.mobileApp")}
                                    </div>
                                </div>
                                <div className='flex flex-col xl:flex-row justify-between text-base md:text-xl xl:text-xl lg:text-2xl text-[#4B5563] font-normal pl-3' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.appStore")}
                                        </li>
                                        <li>
                                            {t("Team.uiUx")}
                                        </li>
                                        <li>
                                            {t("Team.CrossPlatform")}
                                        </li>
                                        <li>
                                            {t("Team.futureDevelopment")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.apiDevelopment")}
                                        </li>
                                        <li>
                                            {t("Team.technologyStrategy")}
                                        </li>
                                        <li>
                                            {t("Team.versionCnotrol")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.inApp")}
                                        </li>
                                        <li>
                                            {t("Team.pushNotifications")}
                                        </li>
                                        <li>
                                            {t("Team.userFeedback")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* EMPOWERING MOBILITY */}
                        {/* Web */}
                        <div className='hidden xl:flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image3} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.empowering")}
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal md:w-[600px] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        {t("Team.mobileAppTeam")}
                                    </div> 
                                    <div>
                                         {t("Team.userFriendly")}
                                    </div>
                                    <div>
                                         {t("Team.experiences")}
                                    </div>
                                    <div>
                                        {t("Team.devices")}
                                    </div>
                                    <div>
                                        {t("Team.demands")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden flex justify-center relative'>
                            {/* Image */}
                            <div className='relative w-full' data-aos="fade-up" data-aos-delay="800">
                                <img src={TeamM2} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Text */}
                            <div className='absolute inset-0 flex flex-col gap-[10px] md:gap-5 justify-center z-10 px-[25px]'>
                                <div className='text-xl md:text-4xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.empowering")}
                                </div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal xl:w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        {t("Team.mobileAppTeamMobile")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UI AND UX DESIGN */}
                        <div className='flex flex-col gap-[50px] justify-center md:items-center bg-[#D5E7FF] w-full py-[50px] md:py-[100px] px-[25px] xl:px-0'>
                            <div className='flex flex-col justify-start gap-[30px] xl:gap-[50px] max-w-[1200px] xl:w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-base md:text-xl lg:text-2xl text-[#557AAA] font-light leading-normal'>
                                        {t("Team.teamExpertise")}
                                    </div>
                                    <div className='text-xl md:text-[32px] lg:text-4xl text-[#153764] font-bold leading-normal'>
                                        {t("Team.uiUxDesign")}
                                    </div>
                                </div>
                                <div className='flex flex-col xl:flex-row xl:gap-[78px] text-base md:text-xl lg:text-2xl xl:text-xl text-[#4B5563] font-normal leading-[40px] pl-3' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.userResearch")}
                                        </li>
                                        <li>
                                            {t("Team.informationArchitecture")}
                                        </li>
                                        <li>
                                            {t("Team.wireframing")}
                                        </li>
                                        <li>
                                            {t("Team.visualDesign")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.interactionDesign")}
                                        </li>
                                        <li>
                                            {t("Team.usabilityTesting")}
                                        </li>
                                        <li>
                                            {t("Team.responsive")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.designSystem")}
                                        </li>
                                        <li>
                                            {t("Team.useJourney")}
                                        </li>
                                        <li>
                                            {t("Team.designFeedback")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ENTER VIRTUAL REALITY */}
                        {/* Web */}
                        <div className='hidden xl:flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image4} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.enterVirtual")}
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal md:w-[600px] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        {t("Team.ourUiUx")}
                                    </div> 
                                    <div>
                                         {t("Team.centeredDesigns")}
                                    </div>
                                    <div>
                                        {t("Team.functionality")}
                                    </div>
                                    <div>
                                        {t("Team.minimalist")}
                                    </div>
                                    <div>
                                        {t("Team.bentuk")}
                                    </div>
                                    <div>
                                        {t("Team.yang")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden flex justify-center relative'>
                            {/* Image */}
                            <div className='relative w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={TeamM3} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Text */}
                            <div className='absolute inset-0 flex flex-col gap-[10px] md:gap-5 justify-center px-[25px]'>
                                <div className='text-xl md:text-4xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.enterVirtual")}
                                </div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal xl:w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    {t("Team.ourUiUxMobile")}
                                </div>
                            </div>
                        </div>

                        {/* CORE MANAGEMENT */}
                        <div className='flex flex-col gap-[50px] justify-center md:items-center bg-[#D5E7FF] w-full py-[50px] md:py-[100px] px-[25px] xl:px-0'>
                            <div className='flex flex-col gap-[30px] xl:gap-[50px] max-w-[1200px] xl:w-[1200px]'>
                                <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                                    <div className='text-base md:text-xl lg:text-2xl text-[#557AAA] font-light leading-normal'>
                                        {t("Team.teamExpertise")}
                                    </div>
                                    <div className='text-xl md:text-[32px] lg:text-4xl text-[#153764] font-bold leading-normal'>
                                        {t("Team.coreManagement")}
                                    </div>
                                </div>
                                <div className='flex flex-col xl:flex-row xl:gap-[78px] text-base md:text-xl lg:text-2xl xl:text-xl  text-[#4B5563] font-normal leading-[40px] pl-3' data-aos="fade-up" data-aos-delay="600">
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.strategicPlanning")}
                                        </li>
                                        <li>
                                            {t("Team.performanceManagement")}
                                        </li>
                                        <li>
                                            {t("Team.resourceAllocation")}
                                        </li>
                                        <li>
                                            {t("Team.financialManagement")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.employeeBenefits")}
                                        </li>
                                        <li>
                                            {t("Team.communicationStrategy")}
                                        </li>
                                        <li>
                                            {t("Team.teamBuilding")}
                                        </li>
                                    </ul>
                                    <ul className='list-disc list-inside leading-[40px]'>
                                        <li>
                                            {t("Team.decisionMaking")}
                                        </li>
                                        <li>
                                            {t("Team.customerRrelationship")}
                                        </li>
                                        <li>
                                            {t("Team.corporateCulture")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* DRIVING EXCELLENCE */}
                        {/* Web */}
                        <div className='hidden xl:flex justify-center'>
                            {/* Left */}
                            <div className='w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={Image5} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Right */}
                            <div className='flex flex-col gap-[30px] justify-center px-[132px]'>
                                <div className='text-[32px] text-[#557AAA] font-bold leading-normal' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.drivingExcellence")}
                                </div>
                                <div className='text-2xl text-[#4B5563] font-normal md:w-[600px] leading-normal' data-aos="fade-up" data-aos-delay="600">
                                    <div>
                                        {t("Team.coreManagementTeam")}
                                    </div> 
                                    <div>
                                        {t("Team.strategicPlanningDataDriven")} 
                                    </div>
                                    <div>
                                        {t("Team.decisions")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='xl:hidden flex justify-center relative'>
                            {/* Left */}
                            <div className='relative w-full' data-aos="fade-up" data-aos-delay="400">
                                <img src={TeamM4} alt="" className='w-full max-h-[600px] object-cover'/>
                            </div>
                            {/* Right */}
                            <div className='absolute inset-0 flex flex-col gap-[10px] md:gap-5 justify-center px-[25px]'>
                                <div className='text-xl md:text-4xl text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="500">
                                    {t("Team.drivingExcellence")}
                                </div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal xl:w-[600px]' data-aos="fade-up" data-aos-delay="600">
                                    {t("Team.coreManagementTeamMobile")}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Career Page */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-[1200px] flex flex-col gap-[250px]">
                            <div className="flex flex-col gap-[50px]">
                                <div className="flex flex-col justify-center items-center gap-[10px]" data-aos="fade-up" data-aos-delay="400">
                                    <div className="text-base md:text-[32px] text-[#557AAA] font-normal md:font-medium leading-normal">{t("Team.workTogether")}</div>
                                    <div className='flex flex-col items-center md:gap-3'>
                                        <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("Team.joinOur")}</div>
                                        <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("Team.fantastic")}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                                        <a
                                            href='/careers'
                                            className="text-base md:text-2xl text-[#153764] font-normal leading-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                        >
                                            {t("Team.careerPage")}
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