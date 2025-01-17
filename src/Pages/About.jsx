import Image1 from '../Assets/Images/About/1.png';
import Image2 from '../Assets/Images/About/2.png';
import ImageM1 from '../Assets/Images/About/M1.png';
import ImageM2 from '../Assets/Images/About/M2.png';
import {Workhours, FinishWork, ClientsFollowed, DataStore, Design, Development, Launch, Growth, DesignM, DevelopmentM, LaunchM, GrowthM} from '../Components/Outline'
import AOS from 'aos';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../Components/ScrollToTopButton';

const About = () => {

    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
            offset: 200,
        });
    }, []);

    return (
        <div className="flex flex-col gap-[250px] pt-[50px] md:pt-[80px] pb-[250px]">
            <div className="flex flex-col gap-[150px] md:gap-[200px] justify-center items-center">
                {/* Top Image */}
                <div className='relative w-full'>
                    <img src={Image1} alt="About 1" className='hidden xl:block w-full object-cover' />
                    <img src={ImageM1} alt="About 1" className='xl:hidden w-full object-cover' />
                    {/* Web */}
                    <div className='absolute hidden xl:flex flex-col gap-[50px] top-[35%] left-[16%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-2xl text-[#D1D5DB] font-normal leading-normal'>
                                {t("About.solution")}
                            </div>
                            <div className='flex flex-col text-5xl text-[#D1D5DB] font-bold leading-normal'>
                                <div>
                                    {t("About.designDevelop")}
                                </div>
                                <div>
                                    {t("About.amazingStuff")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='/team' 
                                className='inline-flex items-center bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] py-[10px] px-[30px] rounded-[5px] text-2xl text-[#153764] font-normal'>
                                {t("About.knowTheTeam")}
                            </a>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className="xl:hidden absolute flex flex-col gap-[50px] top-[38%] left-[6%] w-auto">
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-base text-[#D1D5DB] font-medium leading-normal'>
                                {t("About.solution")}
                            </div>
                            <div className='flex flex-col text-2xl text-[#D1D5DB] font-bold leading-normal'>
                                <div>
                                    {t("About.designDevelop")}
                                </div>
                                <div>
                                    {t("About.amazingStuff")}
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='/team' 
                                className='inline-flex items-center bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] py-[10px] px-[15px] rounded-[5px] text-base text-[#153764] font-normal'>
                                {t("About.knowTheTeam")}
                            </a>
                        </div>
                    </div>

                </div>

                {/* About Current Tech Industries */}
                <div className='flex justify-center items-center px-[25px] xl:px-0'>
                    <div className='flex flex-col gap-[100px] xl:gap-[150px] max-w-[1200px] md:w-full'>
                        {/* Paragraph 1 */}
                        <div className='flex flex-col gap-[30px]'>
                            <div className='hidden xl:block text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up">
                                {t("About.aboutCurrentTech")}
                            </div>
                            <div className='flex flex-col xl:hidden text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up">
                                <div>{t("About.aboutCurrentTechMobile")}</div>
                                <div>{t("About.aboutCurrentTechMobile2")}</div>
                            </div>
                            {/* Web */}
                            <div className='hidden xl:block text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    {t("About.establishedIn")}
                                </div>
                                <div>
                                    {t("About.kualaLumpur")}
                                </div>
                                <div>
                                    {t("About.technologyProduct")}
                                </div>
                                <div>
                                    {t("About.productionCapacities")}
                                </div>
                                <div>
                                    {t("About.attractTopTalent")}
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    {t("About.establishedInMobile")}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col xl:flex-row justify-between gap-[100px] xl:gap-0 max-w-[1200px] xl:w-[1200px]'>
                            {/* Paragraph 2 */}
                            <div className='flex flex-col gap-[30px]'>
                                <div className='text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up">
                                    {t("About.designSolution")}
                                </div>
                                {/* Web */}
                                <div className='hidden xl:flex flex-col gap-8 text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div>
                                        <div>
                                            {t("About.engineerInnovative")}
                                        </div>
                                        <div>
                                            {t("About.automation")}
                                        </div>
                                        <div>
                                            {t("About.efficiency")}
                                        </div>
                                        <div>
                                            {t("About.seamlessly")}
                                        </div>
                                        <div>
                                            {t("About.infrastructures")}
                                        </div>
                                        <div>
                                            {t("About.collaborating")}
                                        </div>
                                        <div>
                                            {t("About.businesses")}
                                        </div>
                                        <div>
                                            {t("About.precision")}
                                        </div>
                                        <div>
                                            {t("About.mengubah")}
                                        </div>
                                        <div>
                                            {t("About.dan")}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            {t("About.cD1")}
                                        </div>
                                        <div>
                                            {t("About.cD2")}
                                        </div>
                                        <div>
                                            {t("About.cD3")}
                                        </div>
                                        <div>
                                            {t("About.cD4")}
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile */}
                                <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div className='flex flex-col gap-8'>
                                        <div>
                                            <div>{t("About.engineerInnovativeMobile")}</div>
                                            <div>{t("About.engineerInnovativeMobiles")}</div>
                                        </div>
                                        <div>
                                            {t("About.engineerInnovativeMobile2")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Paragraph 3 */}
                            <div className='flex flex-col gap-[30px]'>
                                <div className='text-xl md:text-2xl text-[#557AAA] font-bold leading-normal' data-aos="fade-up">
                                    {t("About.strategyPlanning")}
                                </div>
                                {/* Web */}
                                <div className='hidden xl:flex flex-col gap-8 text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div>
                                        <div>
                                            {t("About.leverage")}
                                        </div>
                                        <div>
                                            {t("About.alignWith")}
                                        </div>
                                        <div>
                                            {t("About.decisionMaking")}
                                        </div>
                                        <div>
                                            {t("About.empowerTeams")}
                                        </div>
                                        <div>
                                            {t("About.suitainable")}
                                        </div>
                                        <div>
                                            {t("About.strategicSuccess")}
                                        </div>
                                        <div>
                                            {t("About.advantage")}
                                        </div>
                                        <div>
                                            {t("About.jangka")}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            {t("About.cP1")}
                                        </div>
                                        <div>
                                            {t("About.cP2")}
                                        </div>
                                        <div>
                                            {t("About.cP3")}
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile */}
                                <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal' data-aos="fade-up" data-aos-delay="200">
                                    <div className='flex flex-col gap-8'>
                                        <div>
                                            {t("About.leverageMobile")}
                                        </div>
                                        <div>
                                            {t("About.leverageMobile2")}
                                        </div>  
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
                            <img src={Image2} alt='' className="hidden xl:block w-full h-[500px] object-cover" />
                            <img src={ImageM2} alt='' className="xl:hidden w-full h-[1054px] object-cover" />
                        </div>

                        {/* Centered Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-[50px] px-[25px] md:px-0">
                            {/* Main Title */}
                            <div className='text-center text-[#D1D5DB] leading-normal text-2xl md:text-5xl font-bold lean' data-aos="fade-up" data-aos-delay="500">
                                {t("About.experience")}
                            </div>

                            {/* Icons Section */}
                            <div className="flex flex-col xl:flex-row justify-center items-center gap-[100px] xl:gap-[150px] text-base text-center font-light text-[#D1D5DB]" data-aos="fade-up" data-aos-delay="600">
                                {/* Icon 1 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <Workhours />
                                    <div>
                                        <div className='font-medium'>
                                             {t("About.6390")}
                                        </div>
                                        <div>
                                            {t("About.workHours")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 2 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <FinishWork />
                                    <div>
                                        <div className='font-medium'>
                                            {t("About.286")}
                                        </div>
                                        <div>
                                            {t("About.finishWorks")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 3 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <ClientsFollowed />
                                    <div>
                                        <div className='font-medium'>
                                            {t("About.1396")}
                                        </div>
                                        <div>
                                            {t("About.clientsFollowed")}
                                        </div>
                                    </div>
                                </div>
                                {/* Icon 4 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <DataStore />
                                    <div>
                                        <div className='font-medium'>
                                            {t("About.328250")}
                                        </div>
                                        <div>
                                            {t("About.dataStored")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* We Highly Value */}
                <div className='flex flex-col gap-[50px] text-center xl:w-[1200px] max-w-[1200px]'>
                    <div className='text-xl md:text-[32px] text-[#557AAA] font-normal leading-normal'  data-aos="fade-up" data-aos-delay="600">
                        {t("About.highlyValue")}
                    </div>
                    <div className='flex flex-col xl:flex-row justify-between gap-[100px] xl:gap-0' data-aos="fade-up" data-aos-delay="800">
                        {/* 1 */}
                        <div className='flex flex-col gap-[30px] w-[330px]'>
                            <div className='text-5xl md:text-[64px] text-[#153764] font-bold leading-normal'>
                                {t("About.01")}
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='text-xl md:text-3xl xl:text-2xl text-[#557AAA] font-normal leading-normal'>
                                    {t("About.innovative")}
                                </div>
                                {/* Web */}
                                <div className='hidden xl:block text-xl text-[#4B5563] font-normal leading-normal'>
                                    <div>
                                        {t("About.innoavtionDelivering")}
                                    </div>
                                    <div>
                                        {t("About.cuttingEdge")}
                                    </div>
                                    <div>
                                        {t("About.shapeTheFuture")}
                                    </div>
                                </div>
                                {/* Mobile */}
                                <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>
                                    <div>
                                        {t("About.driveInnoavtionMobile")}
                                    </div>
                                    <div>
                                        {t("About.cuttingEdgeMobile")}
                                    </div>
                                    <div>
                                        {t("About.shapeTheFutureMobile")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col gap-[30px] w-[330px]'>
                            <div className='text-5xl md:text-[64px] text-[#153764] font-bold leading-normal'>
                                {t("About.02")}
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='text-xl md:text-3xl xl:text-2xl text-[#557AAA] font-normal leading-normal'>
                                    {t("About.intuitive")}
                                </div>
                                {/* Web */}
                                <div className='hidden xl:block text-base md:text-xl text-[#4B5563] font-normal leading-normal'>
                                    <div>
                                        {t("About.technology")}
                                    </div>
                                    <div>
                                        {t("About.seamless")}
                                    </div>
                                    <div>
                                        {t("About.userExperience")}
                                    </div>
                                </div>
                                {/* Mobile */}
                                <div className='xl:hidden text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>
                                    <div>
                                        {t("About.technologyMobile")}
                                    </div>
                                    <div>
                                        {t("About.seamlessMobile")}
                                    </div>
                                    <div>
                                        {t("About.userExperienceMobile")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='flex flex-col gap-[30px] w-[330px]'>
                            <div className='text-5xl md:text-[64px] text-[#153764] font-bold leading-normal'>
                                {t("About.03")}
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='text-xl md:text-3xl xl:text-2xl text-[#557AAA] font-normal leading-normal'>
                                    {t("About.modern")}
                                </div>
                                <div className='text-base md:text-2xl xl:text-xl text-[#4B5563] font-normal leading-normal'>
                                    <div>
                                        {t("About.embracing")}
                                    </div>
                                    <div>
                                        {t("About.craftSleek")}
                                    </div>
                                    <div>
                                        {t("About.todayNeeds")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Crrent Tech */}
                <div className='flex flex-col justify-center items-center gap-[100px] md:gap-[50px] py-[100px] md:py-[122px] px-[57px] md:px-0 bg-[#D5E7FF] w-full'>
                    <div className='flex flex-col justify-center items-center gap-[30px] md:gap-[50px] w-full'>
                        {/* Title */}
                        <div className='text-xl md:text-[32px] text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="500">
                            {t("About.whyCurrentTech")}
                        </div>
                        {/* Icons */}
                        <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                            <div className='flex flex-col md:gap-4 text-2xl md:text-5xl text-[#153764] text-center font-bold leading-normal' data-aos="fade-up" data-aos-delay="700">
                                <div>
                                    {t("About.because")}
                                </div>
                                <div>
                                    {t("About.strongProduct")}
                                </div>
                            </div>
                            {/* Web */}
                            <div className='hidden xl:flex flex-col xl:flex-row justify-between gap-[50px] xl:gap-0 md:w-[800px] text-base md:text-xl font-light text-[#557AAA]' data-aos="fade-up" data-aos-delay="900">
                                {/* Icon 1 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <div className='hidden md:block'>
                                        <Design />
                                    </div>
                                    <div className='md:hidden'>
                                        <DesignM />
                                    </div>
                                    <div>
                                        {t("About.design")}
                                    </div>
                                </div>
                                {/* Icon 2 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <div className='hidden md:block'>
                                        <Development />
                                    </div>
                                    <div className='md:hidden'>
                                        <DevelopmentM />
                                    </div>
                                    <div>
                                        {t("About.development")}
                                    </div>
                                </div>
                                {/* Icon 3 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <div className="hidden md:block">
                                        <Launch />
                                    </div>
                                    <div className="md:hidden">
                                        <LaunchM />
                                    </div>
                                    <div>
                                        {t("About.launch")}
                                    </div>
                                </div>
                                {/* Icon 4 */}
                                <div className='flex flex-col items-center gap-[10px]'>
                                    <div className='hidden md:block'> 
                                        <Growth />
                                    </div>
                                    <div className='md:hidden'>
                                        <GrowthM />
                                    </div>
                                    <div>
                                        {t("About.growth")}
                                    </div>
                                </div>
                            </div>
                            {/* Mobile */}
                            <div className='xl:hidden flex flex-col justify-between gap-[50px] text-base font-light text-[#557AAA]' data-aos="fade-up" data-aos-delay="900">
                                <div className='flex justify-center gap-[50px] '>
                                    {/* Icon 1 */}
                                    <div className='flex flex-col items-center gap-[10px] w-[110px] xl:w-full'>
                                        <div className='hidden md:block'>
                                            <Design />
                                        </div>
                                        <div className='md:hidden'>
                                            <DesignM />
                                        </div>
                                        <div>
                                            {t("About.design")}
                                        </div>
                                    </div>
                                    {/* Icon 2 */}
                                    <div className='flex flex-col items-center gap-[10px] w-[110px] xl:w-full'>
                                        <div className='hidden md:block'>
                                            <Development />
                                        </div>
                                        <div className='md:hidden'>
                                            <DevelopmentM />
                                        </div>
                                        <div>
                                            {t("About.development")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-[50px]'>
                                    {/* Icon 3 */}
                                    <div className='flex flex-col items-center gap-[10px] w-[110px] xl:w-full'>
                                        <div className="hidden md:block">
                                            <Launch />
                                        </div>
                                        <div className="md:hidden">
                                            <LaunchM />
                                        </div>
                                        <div>
                                            {t("About.launch")}
                                        </div>
                                    </div>
                                    {/* Icon 4 */}
                                    <div className='flex flex-col items-center gap-[10px] w-[110px] xl:w-full'>
                                        <div className='hidden md:block'> 
                                            <Growth />
                                        </div>
                                        <div className='md:hidden'>
                                            <GrowthM />
                                        </div>
                                        <div>
                                            {t("About.growth")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Expertise */}
                    <div className='flex flex-col gap-[10px] text-center items-center' data-aos="fade-up" data-aos-delay="1100">
                        {/* Web */}
                        <div className='hidden md:block text-xl md:text-[32px] text-[#153764] font-medium leading-normal'>
                            {t("About.ourExpertise")}
                        </div>
                        {/* Mobile */}
                        <div className='md:hidden text-xl md:text-[32px] text-[#153764] font-medium leading-normal'>
                            <div>
                                {t("About.ourExpertiseMobile")}
                            </div> 
                            <div>
                                {t("About.ourExpertiseMobile2")}
                            </div>
                        </div>
                        <div className='hidden md:flex text-sm md:text-xl text-[#557AAA] font-normal md:font-light leading-normal'>
                            {t("About.powerful")}
                        </div>
                        <div className='md:hidden text-sm md:text-xl text-[#557AAA] font-normal md:font-light leading-normal'>
                            <div>{t("About.powerfulMobile")}</div>
                            <div>{t("About.powerfulMobile2")}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Page */}
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-[1200px] flex flex-col gap-[250px]">
                    <div className="flex flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px] text-center" data-aos="fade-up" data-aos-delay="800">
                            <div className="text-base md:text-[32px] text-[#557AAA] font-normal leading-normal">{t("About.exploreProducts")}</div>
                            <div className='flex flex-col md:gap-4'>
                                <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("About.buildAn")}</div>
                                <div className="text-2xl md:text-5xl text-[#153764] font-bold leading-normal">{t("About.amazingSite")}</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
                                <a
                                    href='products'
                                    className="text-base md:text-2xl text-[#153764] font-normal px-[15px] md:px-[30px] py-[10px] rounded-[5px] bg-[linear-gradient(180deg,_#EAF3FF_0%,_#BBD7FE_72%)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                                >
                                    {t("About.productPage")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll To Top Button */}
            <div className='absolute'>
                <ScrollToTopButton />
            </div>
        </div>
    )
 }

 export default About;