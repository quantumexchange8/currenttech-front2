import { useState, useEffect } from 'react';
import { ECommerceExplore, Commercial, CMSDashboard, Investment, DigitalBoard, ECommerceExploreG, CommercialG, CMSDashboardG, InvestmentG, DigitalBoardG, Fire, FireM, Prev, Next, ECommerceExploreM, CommercialM, CMSDashboardM, InvestmentM, DigitalBoardM, ECommerceExploreMG, CommercialMG, CMSDashboardMG, InvestmentMG, DigitalBoardMG, PrevM, NextM } from '../Components/Outline';
import Image1 from '../Assets/Images/CreatingExplore/1.png';
import ImageM1 from '../Assets/Images/CreatingExplore/M1.png';
import Explore1 from '../Assets/Images/CreatingExplore/explore1.png';
import Explore2 from '../Assets/Images/CreatingExplore/explore2.png';
import Explore3 from '../Assets/Images/CreatingExplore/explore3.png';
import Explore4 from '../Assets/Images/CreatingExplore/explore4.png';
import Explore5 from '../Assets/Images/CreatingExplore/explore5.png';
import Explore6 from '../Assets/Images/CreatingExplore/explore6.png';
import Explore7 from '../Assets/Images/CreatingExplore/explore7.png';
import Explore8 from '../Assets/Images/CreatingExplore/explore8.png';
import Explore9 from '../Assets/Images/CreatingExplore/explore9.png';
import Explorecs from '../Assets/Images/CreatingExplore/explorecs.png';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

const templates = [
  { id: 1, name: 'EC10001', image: Explore1, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 2, name: 'EC10002', image: Explore2, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 3, name: 'EC10003', image: Explore3, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 4, name: 'EC10004', image: Explore4, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 5, name: 'EC10005', image: Explore5, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 6, name: 'EC10006', image: Explore6, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 7, name: 'EC10007', image: Explore7, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 8, name: 'EC10008', image: Explore8, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 9, name: 'EC10009', image: Explore9, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '112' },
  { id: 10, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 11, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 12, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 13, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 14, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 15, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 16, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 18, name: 'COMMING SOON', image: Explorecs, title: 'COMMERCIAL Template', type: 'COMMERCIAL', firevalue: '' },
  { id: 19, name: 'COMMING SOON', image: Explorecs, title: 'CMS DASHBOARD Template', type: 'CMSDASHBOARD', firevalue: '' },
  { id: 20, name: 'COMMING SOON', image: Explorecs, title: 'INVESTMENT Template', type: 'INVESTMENT', firevalue: '' },
  { id: 21, name: 'COMMING SOON', image: Explorecs, title: 'DIGITAL BOARD Template', type: 'DIGITALBOARD', firevalue: '' },
  { id: 22, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 23, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 24, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 25, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 26, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 27, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 28, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },
  { id: 29, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE', firevalue: '' },

];

const ITEMS_PER_PAGE = 12;

const CreatingExplore = () => {
    const location = useLocation();
    const exploreType = location.state?.exploreType;
    const [selectedType, setSelectedType] = useState(exploreType || 'E-COMMERCE');
    const [currentPage, setCurrentPage] = useState(1);
    const {t, i18n} = useTranslation();

    const filteredTemplates = templates.filter(template => template.type === selectedType);

    const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);

    const paginatedTemplates = filteredTemplates.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const generatePagination = (currentPage, totalPages) => {
        const maxVisiblePages = 5;
        const pagination = [];
    
        if (totalPages <= maxVisiblePages) 
        {
            for (let i = 1; i <= totalPages; i++) 
            {
                pagination.push(i);
            }
        } 
        else 
        {
            if (currentPage <= 3) 
            {
                for (let i = 1; i <= maxVisiblePages; i++) {
                    pagination.push(i);
                }
                pagination.push('...');
                pagination.push(totalPages);
            } 
            else if (currentPage > totalPages - 3) 
            {
                pagination.push(1);
                pagination.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pagination.push(i);
                }
            } 
            else 
            {
                pagination.push(1);
                pagination.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pagination.push(i);
                }
                pagination.push('...');
                pagination.push(totalPages);
            }
        }
    
        return pagination;
    };
    
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    };

    const handlePageChangeMobile = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({
            top: 1200,
            behavior: 'smooth',
        });
    };

    const handleSelectedType = (type) => {
        setSelectedType(type);
        setCurrentPage(1);
        
    }

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,  
            offset: 200,
        });

        setTimeout(() => {
            AOS.refresh();
        }, 500);
    }, []);

    return (
        <div className='flex justify-center items-center pt-[50px] md:pt-[80px] pb-[200px]'>
            <div className='w-full flex flex-col gap-[150px] md:gap-[200px]'>
                {/* Top Image */}
                <div className='relative'>
                    <img src={Image1} alt="Creating Explore Image 1" className='hidden xl:block w-full' />
                    <img src={ImageM1} alt="Creating Explore Image Mobile 1" className='xl:hidden w-full' /> 
                    <div className='absolute text-center bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-16 text-[32px] md:text-[64px] text-[#D1D5DB] font-light'>
                        <div>{t("CreatingExplore.whatsOnYourMind")}</div>
                        <div>{t("CreatingExplore.whatsOnYourMind2")}</div>
                    </div>
                </div>
                {/* Body */}
                <div className="flex justify-center px-[25px]">
                    <div className="flex flex-col xl:flex-row gap-[100px] md:gap-[60px]">
                        {/* Left Sidebar */}
                        {/* Web */}
                        <div className='hidden xl:block'>   
                            <div className="flex justify-center sticky top-[80px]" data-aos="fade-up">
                                <div className="flex flex-col gap-8 bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('E-COMMERCE'), window.scrollTo({top: 700, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'E-COMMERCE' ? <ECommerceExplore /> : <ECommerceExploreG />}</div>
                                        <div className='md:hidden'>{selectedType === 'E-COMMERCE' ? <ECommerceExploreM /> : <ECommerceExploreMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'E-COMMERCE' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.eCommerce")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('COMMERCIAL'), window.scrollTo({top: 700, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'COMMERCIAL' ? <Commercial /> : <CommercialG />}</div>
                                        <div className='md:hidden'>{selectedType === 'COMMERCIAL' ? <CommercialM /> : <CommercialMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'COMMERCIAL' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.commercial")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('CMSDASHBOARD'), window.scrollTo({top: 700, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboard /> : <CMSDashboardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboardM /> : <CMSDashboardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'CMSDASHBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.cmsDashboard")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('INVESTMENT'), window.scrollTo({top: 700, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'INVESTMENT' ? <Investment /> : <InvestmentG />}</div>
                                        <div className='md:hidden'>{selectedType === 'INVESTMENT' ? <InvestmentM /> : <InvestmentMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'INVESTMENT' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.investment")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('DIGITALBOARD'), window.scrollTo({top: 700, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'DIGITALBOARD' ? <DigitalBoard /> : <DigitalBoardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'DIGITALBOARD' ? <DigitalBoardM /> : <DigitalBoardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'DIGITALBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.digitalBoard")}
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[1px] h-[500px] bg-[#9CA3AF]" />
                            </div>
                        </div>
                        {/* Lg */}
                        <div className='hidden xl:hidden lg:block'>   
                            <div className="flex justify-center sticky top-[80px]" data-aos="fade-up">
                                <div className="flex flex-col gap-8 bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('E-COMMERCE'), window.scrollTo({top: 1450, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'E-COMMERCE' ? <ECommerceExplore /> : <ECommerceExploreG />}</div>
                                        <div className='md:hidden'>{selectedType === 'E-COMMERCE' ? <ECommerceExploreM /> : <ECommerceExploreMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'E-COMMERCE' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.eCommerce")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('COMMERCIAL'), window.scrollTo({top: 1450, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'COMMERCIAL' ? <Commercial /> : <CommercialG />}</div>
                                        <div className='md:hidden'>{selectedType === 'COMMERCIAL' ? <CommercialM /> : <CommercialMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'COMMERCIAL' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.commercial")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('CMSDASHBOARD'), window.scrollTo({top: 1450, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboard /> : <CMSDashboardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboardM /> : <CMSDashboardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'CMSDASHBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.cmsDashboard")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('INVESTMENT'), window.scrollTo({top: 1450, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'INVESTMENT' ? <Investment /> : <InvestmentG />}</div>
                                        <div className='md:hidden'>{selectedType === 'INVESTMENT' ? <InvestmentM /> : <InvestmentMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'INVESTMENT' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.investment")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('DIGITALBOARD'), window.scrollTo({top: 1450, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'DIGITALBOARD' ? <DigitalBoard /> : <DigitalBoardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'DIGITALBOARD' ? <DigitalBoardM /> : <DigitalBoardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'DIGITALBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.digitalBoard")}
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[1px] h-[500px] bg-[#9CA3AF]" />
                            </div>
                        </div>
                        {/* Md */}
                        <div className='hidden lg:hidden md:block'>   
                            <div className="flex justify-center sticky top-[80px]" data-aos="fade-up">
                                <div className="flex flex-col gap-8 bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('E-COMMERCE'), window.scrollTo({top: 1200, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'E-COMMERCE' ? <ECommerceExplore /> : <ECommerceExploreG />}</div>
                                        <div className='md:hidden'>{selectedType === 'E-COMMERCE' ? <ECommerceExploreM /> : <ECommerceExploreMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'E-COMMERCE' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.eCommerce")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('COMMERCIAL'), window.scrollTo({top: 1200, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'COMMERCIAL' ? <Commercial /> : <CommercialG />}</div>
                                        <div className='md:hidden'>{selectedType === 'COMMERCIAL' ? <CommercialM /> : <CommercialMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'COMMERCIAL' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.commercial")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('CMSDASHBOARD'), window.scrollTo({top: 1200, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboard /> : <CMSDashboardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboardM /> : <CMSDashboardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'CMSDASHBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.cmsDashboard")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('INVESTMENT'), window.scrollTo({top: 1200, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'INVESTMENT' ? <Investment /> : <InvestmentG />}</div>
                                        <div className='md:hidden'>{selectedType === 'INVESTMENT' ? <InvestmentM /> : <InvestmentMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'INVESTMENT' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.investment")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => [handleSelectedType('DIGITALBOARD'), window.scrollTo({top: 1200, behavior: 'smooth'})]}>
                                        <div className='hidden md:block'>{selectedType === 'DIGITALBOARD' ? <DigitalBoard /> : <DigitalBoardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'DIGITALBOARD' ? <DigitalBoardM /> : <DigitalBoardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'DIGITALBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.digitalBoard")}
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[1px] h-[500px] bg-[#9CA3AF]" />
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className='md:hidden'>   
                            <div className="flex justify-center sticky top-[80px]" data-aos="fade-up">
                                <div className="absolute top-[23px] flex flex-col gap-[25px] md:gap-8">
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('E-COMMERCE')}>
                                        <div className='hidden md:block'>{selectedType === 'E-COMMERCE' ? <ECommerceExplore /> : <ECommerceExploreG />}</div>
                                        <div className='md:hidden'>{selectedType === 'E-COMMERCE' ? <ECommerceExploreM /> : <ECommerceExploreMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'E-COMMERCE' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.eCommerce")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('COMMERCIAL')}>
                                        <div className='hidden md:block'>{selectedType === 'COMMERCIAL' ? <Commercial /> : <CommercialG />}</div>
                                        <div className='md:hidden'>{selectedType === 'COMMERCIAL' ? <CommercialM /> : <CommercialMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'COMMERCIAL' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.commercial")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('CMSDASHBOARD')}>
                                        <div className='hidden md:block'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboard /> : <CMSDashboardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'CMSDASHBOARD' ? <CMSDashboardM /> : <CMSDashboardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'CMSDASHBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.cmsDashboard")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('INVESTMENT')}>
                                        <div className='hidden md:block'>{selectedType === 'INVESTMENT' ? <Investment /> : <InvestmentG />}</div>
                                        <div className='md:hidden'>{selectedType === 'INVESTMENT' ? <InvestmentM /> : <InvestmentMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'INVESTMENT' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.investment")}
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('DIGITALBOARD')}>
                                        <div className='hidden md:block'>{selectedType === 'DIGITALBOARD' ? <DigitalBoard /> : <DigitalBoardG />}</div>
                                        <div className='md:hidden'>{selectedType === 'DIGITALBOARD' ? <DigitalBoardM /> : <DigitalBoardMG />}</div>
                                        <div 
                                            className={`text-xl md:text-2xl text-[#153764] ${
                                                selectedType === 'DIGITALBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            {t("CreatingExplore.digitalBoard")}
                                        </div>
                                    </button>
                                </div>
                                <div className="relative left-[175px] w-[1px] h-[400px] md:h-[500px] bg-[#9CA3AF]" />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[20px] md:gap-x-[50px] gap-y-[50px] md:gap-y-[100px] max-w-[1140px]' data-aos="fade-up" data-aos-delay="200">
                                {paginatedTemplates.map(template => (
                                <div key={template.id} className='flex justify-center'>
                                    <div className='flex flex-col gap-5 w-[180px] md:w-[330px]'>
                                        <img src={template.image} alt={template.title} />
                                        <div className='flex flex-col gap-[10px]'>
                                            <div className='flex justify-between'>
                                                <div className='text-sm md:text-xl text-[#153764] font-medium md:font-semibold'>
                                                    {template.name}
                                                </div>
                                                <div className='flex items-center gap-[10px] md:gap-[19px] text-sm md:text-xl text-[#557AAA] font-normal'>
                                                    <div>
                                                        {template.firevalue}
                                                    </div>
                                                    {template.firevalue && (
                                                        <div>
                                                            <div className='hidden md:block'><Fire /></div>
                                                            <div className='md:hidden'><FireM /></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='hidden md:block text-base text-[#9CA3AF] font-normal'>
                                                {template.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            {/* Web */}
                            <div className="hidden md:flex justify-between gap-4 max-w-[1200px]">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={`${
                                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    <div className='hidden md:block'><Prev /></div>
                                    <div className='md:hidden'><PrevM /></div>
                                </button>
                                <div className="flex gap-[30px]">
                                    {generatePagination(currentPage, totalPages).map((page, index) => (
                                        <button
                                            key={index}
                                            onClick={() => page !== '...' && handlePageChange(page)}
                                            className={`text-xl font-normal ${
                                                currentPage === page ? 'text-[#153764]' : 'text-[#9CA3AF]'
                                            }`}
                                            disabled={page === '...'}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className={`${
                                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    <div className='hidden md:block'><Next /></div>
                                    <div className='md:hidden'><NextM /></div>
                                </button>
                            </div>
                            {/* Mobile */}
                            <div className="md:hidden flex justify-between gap-4 max-w-[1200px]">
                                <button
                                    onClick={() => handlePageChangeMobile(currentPage - 1)}
                                    className={`${
                                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    <div ><PrevM /></div>
                                </button>
                                <div className="flex gap-[30px]">
                                    {generatePagination(currentPage, totalPages).map((page, index) => (
                                        <button
                                            key={index}
                                            onClick={() => page !== '...' && handlePageChangeMobile(page)}
                                            className={`text-xl font-normal ${
                                                currentPage === page ? 'text-[#153764]' : 'text-[#9CA3AF]'
                                            }`}
                                            disabled={page === '...'}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => handlePageChangeMobile(currentPage + 1)}
                                    className={`${
                                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    <div><NextM /></div>
                                </button>
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
    );
};

export default CreatingExplore;
