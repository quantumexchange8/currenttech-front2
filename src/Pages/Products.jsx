import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../Assets/Images/Product/1.png';
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
        once: false,  
        offset: 200,
        });
    }, []);

    return (
        <div className='flex flex-col w-full justify-center gap-[200px] pt-[80px] pb-[250px]'>
            {/* Top Image */}
            <div className='w-full relative'>
                <img src={image1} alt='Special Image 1' className='w-full' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 text-[#D1D5DB] text-[64px] text-center font-light w-full'>
                    <div>WE BUILD</div>
                    <div>AWESOME PRODUCT</div>
                </div>
            </div>

            {/* Title */}
            <div className='flex flex-col items-center gap-[30px]'>
                <div className='text-[64px] text-[#153764] font-normal' data-aos="fade-up">
                    OUR IMAGINATIVE STUDIO
                </div>
                <div className='text-[64px] text-[#557AAA] font-bold' data-aos="fade-up" data-aos-delay="200">
                    WEB DESIGN
                </div>
            </div>

            {/* Product List Bar */}
            <div className='flex justify-center items-center w-full bg-[#E5E7EB] h-[100px]'  data-aos="fade-up">
                <div className='w-[1200px] flex justify-between'>
                    {productData.map((product) => (
                    <button
                        key={product.name}
                        className={`text-xl font-semibold ${selectedProduct === product.name ? 'text-[#153764]' : 'text-[#557AAA]'}`}
                        onClick={() => setSelectedProduct(product.name)}
                    >
                        {product.name}
                    </button>
                    ))}
                </div>
            </div>

            {/* Product Image */}
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-delay="200">
                <div className='max-w-[1200px]'>
                    <img src={require(`../Assets/Images/Product/${currentProduct.image}`)} alt={currentProduct.title} />
                </div>
            </div>

            {/* Product Details */}
            {currentProduct && (
            <div className='flex justify-center'>
                <div className='flex flex-col gap-[100px] max-w-[1200px]'>
                    {/* Product Title */}
                    <div className='flex flex-col gap-[50px]'>
                        <div className=' flex flex-col gap-[10px]' data-aos="fade-up" data-aos-delay="400">
                            <div className='text-4xl text-[rgb(21,55,100)] font-bold'>{currentProduct.title}</div>
                            <div className='text-xl text-[#557AAA] font-normal'>{currentProduct.category}</div>
                        </div>
                        <div  data-aos="fade-up" data-aos-delay="600">
                            <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.description}</div>
                            <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.description2}</div>
                            <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.description3}</div>

                        </div>
                    </div>

                    {/* Dynamic Specification Sections */}
                    <div className='flex flex-col gap-20'>
                        {currentProduct.specifications && Object.keys(currentProduct.specifications).map((section) => (
                        <div className='flex flex-col gap-[10px]' key={section}>
                            {/* Use the custom section title from sectionTitles */}
                            <div className='text-2xl text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="600">
                                {currentProduct.sectionTitles[section] || section.toUpperCase()}
                            </div>
                            <div className='flex flex-wrap gap-5' data-aos="fade-up" data-aos-delay="800">
                            {Array.isArray(currentProduct.specifications[section]) ? (
                                currentProduct.specifications[section].map((item, index) => (
                                <div
                                key={index}
                                className='py-[10px] px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-xl text-[#4B5563] font-normal'
                                >
                                    <div>
                                        {item}
                                    </div>
                                </div>
                                ))
                            ) : (
                                <div className='py-[10px] px-5 rounded-[5px] bg-gradient-to-b from-[#EAF3FF] to-[#BBD7FE] shadow-custom text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="400">
                                    {currentProduct.specifications[section]}
                                </div>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-2xl text-[#557AAA] font-normal' data-aos="fade-up" data-aos-delay="600">SUMMARY:</div>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.summary}</div>
                            <div className='text-2xl text-[#4B5563] font-normal'>{currentProduct.summary2}</div>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Scroll To Top Button */}
            <div className='bg-opacity-20'>
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default Products;
