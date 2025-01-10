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

    useEffect(() => {
        AOS.refresh();
    }, [selectedProduct]);

    return (
        <div className='flex flex-col w-full justify-center gap-[150px] md:gap-[200px] pt-[50px[ md:pt-[80px] pb-[200px] md:pb-[250px]'>
            {/* Top Image */}
            <div className='w-full relative'>
                <img src={image1} alt='Special Image 1' className='hidden xl:block w-full object-cover' />
                <img src={imageM1} alt='Special Image 1' className='xl:hidden w-full' />
                <div className='hidden xl:block absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-[#D1D5DB] md:text-3xl lg:text-4xl xl:text-[64px] text-center font-light w-full'>
                    <div className='leading-normal'>{t("Products.weBuild")}</div>
                    <div className='leading-normal'>{t("Products.awesome")}</div>
                </div>
                {/* Mobile */}
                <div className='xl:hidden absolute bottom-[17%] left-1/2 transform -translate-x-1/2 text-[#D1D5DB] text-[32px] md:text-6xl text-center font-light w-full'>
                    <div className='leadning-normal'>{t("Products.weBuildMobile")}</div>
                    <div className='leadning-normal'>{t("Products.product")}</div>
                </div>
            </div>

            {/* Title */}
            <div className='flex flex-col items-center gap-[30px]'>
                <div className='text-2xl md:text-5xl lg:text-[64px] text-[#153764] font-normal leading-normal'>
                    {t("Products.imaginative")}
                </div>
                <div className='text-[32px] md:text-5xl lg:text-[64px] text-[#557AAA] font-bold leading-normal'>
                    {t("Products.webDesign")}
                </div>
            </div>

            {/* Product List Bar */}
            {/* Web */}
            <div className='sticky top-[80px] z-10 hidden lg:hidden xl:flex justify-center items-center w-full bg-[#E5E7EB] h-auto py-[35px]' >
                <div className='w-[1200px] flex justify-between'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-xl font-semibold leading-normal ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 1200, behavior: 'smooth'})]}
                    >
                        {t(product.name)}
                    </button>
                    ))}
                </div>
            </div>
            {/* Lg */}
            <div className='sticky top-[80px] z-10 hidden xl:hidden lg:flex justify-center items-center w-full bg-[#E5E7EB] h-auto py-[35px] lg:px-2' >
                <div className='w-[1200px] flex justify-between'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-xl font-semibold leading-normal ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 1000, behavior: 'smooth'})]}
                    >
                        {t(product.name)}
                    </button>
                    ))}
                </div>
            </div>
            {/* Md */}
            <div className='sticky top-[80px] z-10 hidden lg:hidden md:flex justify-center items-center w-full bg-[#E5E7EB] h-auto py-[35px]' >
                <div className='w-full flex flex-wrap justify-center gap-10'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-xl font-semibold leading-normal ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 900, behavior: 'smooth'})]}
                    >
                        {t(product.name)}
                    </button>
                    ))}
                </div>
            </div>
            {/* Mobile */}
            <div className='md:hidden sticky top-[50px] z-10 flex justify-center items-center p-[25px] w-full bg-[#E5E7EB]'>
                <div className='flex flex-wrap justify-center gap-5'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-sm font-semibold leading-normal ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => [setSelectedProduct(product.name), window.scrollTo({ top: 1000, behavior: 'smooth' })]}
                    >
                        {t(product.name)}
                    </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-[100px]'>
                {/* Product Image */}
                <div className='flex justify-center items-center px-[25px]' data-aos="fade-up">
                    <div className='max-w-[1200px]'>
                        <img src={require(`../Assets/Images/Product/${currentProduct.image}`)} />
                    </div>
                </div>

                {/* Product Details */}
                {currentProduct && (
                <div className='flex justify-center px-[25px]'>
                    <div className='flex flex-col gap-[100px] max-w-[1200px]'>
                        {/* Product Title */}
                        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className=' flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="200">
                                <div className='text-xl md:text-4xl text-[rgb(21,55,100)] font-bold text-shadow-custom'>{t(currentProduct.title)}</div>
                                <div className='text-sm md:text-xl text-[#557AAA] font-normal'>{t(currentProduct.category)}</div>
                            </div>
                            {/* Web */}
                            <div className='hidden md:block' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.description)}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.description2)}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.description3)}</div>
                            </div>
                            {/* Mobile */}
                            <div className='md:hidden' data-aos="fade-up" data-aos-delay="400">
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.description)}</div>
                                <div className='text-base md:text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.description)}</div>
                            </div>
                        </div>

                        {/* Dynamic Specification Sections */}
                        <div className='flex flex-col gap-[50px] md:gap-20'>
                            {currentProduct.specifications && Object.keys(currentProduct.specifications).map((section) => (
                            <div className='flex flex-col gap-[10px]'  data-aos="fade-up" data-aos-delay="200" key={section}>
                                <div className='text-base md:text-2xl text-[#557AAA] font-normal'>
                                    {t(currentProduct.sectionTitles[section])}
                                </div>
                                <div className='flex flex-wrap gap-[10px] md:gap-5 w-[379px] md:w-full'>
                                {Array.isArray(currentProduct.specifications[section]) ? (
                                    currentProduct.specifications[section].map((item, index) => (
                                    <div
                                    key={index}
                                    className='py-[5px] md:py-[10px] px-[10px] md:px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-sm md:text-xl text-[#4B5563] font-normal leading-normal'
                                    >
                                        <div>
                                            {item}
                                        </div>
                                    </div>
                                    ))
                                ) : (
                                    <div className='py-[10px] px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                        {t(currentProduct.specifications[section])}
                                    </div>
                                )}
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className='flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="200">
                            <div className='text-base md:text-2xl text-[#557AAA] font-normal'>{t("summary")}</div>
                            {/* Web */}
                            <div className='hidden md:block'>
                                <div className='text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.summary)}</div>
                                <div className='text-2xl text-[#4B5563] font-normal leading-normal'>{t(currentProduct.summary2)}</div>
                            </div>
                            {/* Mobile */}
                            <div className='md:hidden'>
                                <div className='text-base text-[#4B5563] font-normal'>{t(currentProduct.summaryMobile)}</div>
                                <div className='text-base text-[#4B5563] font-normal'>{t(currentProduct.summaryMobile2)}</div>
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
