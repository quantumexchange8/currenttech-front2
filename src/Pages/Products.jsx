import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Product/1.png';
import imageM1 from '../Assets/Images/Product/M1.png';
import { productData } from '../Data/productData';
import AOS from 'aos'; 
import ScrollToTopButton from '../Components/ScrollToTopButton';


const Products = () => {
    const { t } = useTranslation();
    const [selectedProduct, setSelectedProduct] = useState('EDUCATION');

    const currentProduct = productData.find((product) => product.name === selectedProduct);

    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,  
        offset: 200,
        });
    }, []);

    return (
        <div className='flex flex-col w-full justify-center gap-[150px] md:gap-[200px] pt-[50px[ md:pt-[80px] pb-[200px] md:pb-[250px]'>
            {/* Top Image */}
            <div className='w-full relative'>
                <img src={image1} alt='Special Image 1' className='hidden md:block w-full' />
                <img src={imageM1} alt='Special Image 1' className='md:hidden w-full' />
                <div className='hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 text-[#D1D5DB] text-[64px] text-center font-light w-full'>
                    <div>WE BUILD</div>
                    <div>AWESOME PRODUCT</div>
                </div>
                <div className='md:hidden absolute bottom-[17%] left-1/2 transform -translate-x-1/2 text-[#D1D5DB] text-[32px] text-center font-light w-full'>
                    <div>WE BUILD AWESOME</div>
                    <div>PRODUCT</div>
                </div>
            </div>

            {/* Title */}
            <div className='flex flex-col items-center gap-[30px]'>
                <div className='text-2xl md:text-[64px] text-[#153764] font-normal' data-aos="fade-up">
                    OUR IMAGINATIVE STUDIO
                </div>
                <div className='text-[32px] md:text-[64px] text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="200">
                    WEB DESIGN
                </div>
            </div>

            {/* Product List Bar */}
            {/* Web */}
            <div className='sticky top-[80px] z-10 hidden md:flex justify-center items-center w-full bg-[#E5E7EB] h-[100px]' data-aos="fade-up" data-aos-delay="400">
                <div className='w-[1200px] flex justify-between'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-xl font-semibold ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 1200, behavior: 'smooth'})]}
                    >
                        {product.name}
                    </button>
                    ))}
                </div>
            </div>
            {/* Mobile */}
            <div className='md:hidden sticky top-[50px] z-10 flex justify-center items-center p-[25px] w-full bg-[#E5E7EB]' data-aos="fade-up" data-aos-delay="400">
                <div className='flex flex-wrap justify-between gap-y-5'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-sm font-semibold ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 1000, behavior: 'smooth' })]}
                    >
                        {product.name}
                    </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-[100px]'>
                {/* Product Image */}
                <div className='flex justify-center items-center px-[25px]' data-aos="fade-up" data-aos-delay="400">
                    <div className='max-w-[1200px]'>
                        <img src={require(`../Assets/Images/Product/${currentProduct.image}`)} alt={currentProduct.title} />
                    </div>
                </div>

                {/* Product Details */}
                {currentProduct && (
                <div className='flex justify-center px-[25px]'>
                    <div className='flex flex-col gap-[100px] max-w-[1200px]'>
                        {/* Product Title */}
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className=' flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="200">
                                <div className='text-xl md:text-4xl text-[rgb(21,55,100)] font-bold text-shadow-custom'>{currentProduct.title}</div>
                                <div className='text-sm md:text-xl text-[#557AAA] font-normal'>{currentProduct.category}</div>
                            </div>
                            {/* Web */}
                            <div className='hidden md:block' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-tight'>{currentProduct.description}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-tight'>{currentProduct.description2}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-tight'>{currentProduct.description3}</div>
                            </div>
                            {/* Mobile */}
                            <div className='md:hidden' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{currentProduct.descriptionMobile}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{currentProduct.descriptionMobile2}</div>
                            </div>
                        </div>

                        {/* Dynamic Specification Sections */}
                        <div className='flex flex-col gap-[50px] md:gap-20'>
                            {currentProduct.specifications && Object.keys(currentProduct.specifications).map((section) => (
                            <div className='flex flex-col gap-[10px]' key={section}>
                                <div className='text-base md:text-2xl text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="200">
                                    {currentProduct.sectionTitles[section] || section.toUpperCase()}
                                </div>
                                <div className='flex flex-wrap gap-[10px] md:gap-5' data-aos="fade-up" data-aos-delay="400">
                                {Array.isArray(currentProduct.specifications[section]) ? (
                                    currentProduct.specifications[section].map((item, index) => (
                                    <div
                                    key={index}
                                    className='py-[5px] md:py-[10px] px-[9px] md:px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-sm md:text-xl text-[#4B5563] font-normal'
                                    >
                                        <div>
                                            {item}
                                        </div>
                                    </div>
                                    ))
                                ) : (
                                    <div className='py-[10px] px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        {currentProduct.specifications[section]}
                                    </div>
                                )}
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-base md:text-2xl text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="200">SUMMARY:</div>
                            {/* Web */}
                            <div className='hidden md:block' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.summary}</div>
                                <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.summary2}</div>
                            </div>
                            {/* Mobile */}
                            <div className='md:hidden' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base text-[#4B5563] font-normal'>{currentProduct.summaryMobile}</div>
                                <div className='text-base text-[#4B5563] font-normal'>{currentProduct.summaryMobile2}</div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>

            {/* Scroll To Top Button */}
            <div className='absolute bg-opacity-20'>
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default Products;
