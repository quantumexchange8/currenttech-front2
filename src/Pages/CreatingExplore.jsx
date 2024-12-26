import { useState, useEffect } from 'react';
import { ECommerceExplore, Commercial, CMSDashboard, Investment, DigitalBoard, ECommerceExploreG, CommercialG, CMSDashboardG, InvestmentG, DigitalBoardG, Fire, Prev, Next } from '../Components/Outline';
import Image1 from '../Assets/Images/CreatingExplore/1.png';
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
import AOS from 'aos';

const templates = [
  { id: 1, name: 'EC10001', image: Explore1, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 2, name: 'EC10002', image: Explore2, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 3, name: 'EC10003', image: Explore3, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 4, name: 'EC10004', image: Explore4, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 5, name: 'EC10005', image: Explore5, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 6, name: 'EC10006', image: Explore6, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 7, name: 'EC10007', image: Explore7, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 8, name: 'EC10008', image: Explore8, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 9, name: 'EC10009', image: Explore9, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 10, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 11, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 12, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 13, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 14, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 15, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 16, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'e-Commerce Template', type: 'E-COMMERCE' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'COMMERCIAL Template', type: 'COMMERCIAL' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'CMS DASHBOARD Template', type: 'CMSDASHBOARD' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'INVESTMENT Template', type: 'INVESTMENT' },
  { id: 17, name: 'COMMING SOON', image: Explorecs, title: 'DIGITAL BOARD Template', type: 'DIGITALBOARD' },

];

const ITEMS_PER_PAGE = 15;

const CreatingExplore = () => {
    const location = useLocation();
    const exploreType = location.state?.exploreType;
    const [selectedType, setSelectedType] = useState(exploreType);
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(page);
        window.scrollTo({
            top: 700,
            behavior: 'instant',
        });
    };

    const handleSelectedType = (type) => {
        setSelectedType(type);
        setCurrentPage(1);
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false,  
            offset: 200,
        });
    }, []);

    return (
        <div className='flex justify-center items-center pt-[80px] pb-[200px]'>
            <div className='w-full flex flex-col gap-[200px]'>
                {/* Top Image */}
                <div className='relative'>
                    <img src={Image1} alt="Creating Explore Image 1" className='w-full' />
                    <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-16 text-[64px] text-[#D1D5DB] font-light'>
                        WHAT’S ON YOUR MIND
                    </div>
                </div>
                {/* Body */}
                <div className="flex justify-center">
                    <div className="flex gap-[60px]">
                        {/* Left Sidebar */}
                        <div>   
                            <div className="flex sticky top-[80px]" data-aos="fade-up">
                                <div className="flex flex-col gap-8 bottom-[-30px] relative">
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('E-COMMERCE')}>
                                        {selectedType === 'E-COMMERCE' ? <ECommerceExplore /> : <ECommerceExploreG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'E-COMMERCE' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            E-COMMERCE
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('COMMERCIAL')}>
                                        {selectedType === 'COMMERCIAL' ? <Commercial /> : <CommercialG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'COMMERCIAL' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            COMMERCIAL
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('CMSDASHBOARD')}>
                                        {selectedType === 'CMSDASHBOARD' ? <CMSDashboard /> : <CMSDashboardG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'CMSDASHBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            CMS DASHBOARD
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('INVESTMENT')}>
                                        {selectedType === 'INVESTMENT' ? <Investment /> : <InvestmentG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'INVESTMENT' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            INVESTMENT
                                        </div>
                                    </button>
                                    <div className="h-[1px] w-[350px] bg-[#9CA3AF]" />
                                    <button className="flex items-center gap-[30px]" onClick={() => handleSelectedType('DIGITALBOARD')}>
                                        {selectedType === 'DIGITALBOARD' ? <DigitalBoard /> : <DigitalBoardG />}
                                        <div 
                                            className={`text-2xl text-[#153764] ${
                                                selectedType === 'DIGITALBOARD' ? 'text-[#153764] font-bold' : 'text-[#9CA3AF] font-normal'
                                                }`}
                                        >
                                            DIGITAL BOARD
                                        </div>
                                    </button>
                                </div>
                                <div className="w-[1px] h-[500px] bg-[#9CA3AF]" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[100px]'>
                            {/* Content */}
                            <div className='grid grid-cols-3 gap-x-[50px] gap-y-[100px] max-w-[1140px]' data-aos="fade-up" data-aos-delay="200">
                                {paginatedTemplates.map(template => (
                                <div key={template.id} className='flex flex-col gap-5 w-[330px]'>
                                    <img src={template.image} alt={template.title} />
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className='flex justify-between'>
                                            <div className='text-xl text-[#153764] font-semibold'>
                                                {template.name}
                                            </div>
                                            <div className='flex gap-[19px] text-xl text-[#557AAA] font-normal'>
                                                <div>
                                                    112
                                                </div>
                                                <Fire />
                                            </div>
                                        </div>
                                        <div className='text-base text-[#9CA3AF] font-normal'>
                                            {template.title}
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {/* Pagination */}
                            <div className="flex justify-between gap-4 mt-8 max-w-[1200px]">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <Prev />
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
                                    disabled={currentPage === totalPages}
                                >
                                    <Next />
                                </button>
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
    );
};

export default CreatingExplore;
