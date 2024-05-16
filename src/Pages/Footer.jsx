import React from 'react';
import ct_logo from '../Assets/Images/currenttech_logo.svg';
import { QR, Calendar, FooterWhatsApp, FooterGmail } from '../Components/Brand.jsx';

const Footer = () => {

    return (
        <div className="w-full h-[400px] md:h-[300px] bg-[#aaaaaa80] flex justify-center items-center">
            <div className='max-w-[1000px] w-full flex justify-between ml-5 md:ml-0'>
                <div className='flex flex-col gap-[26px]'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <img src={ct_logo} alt='ct logo'/>
                        </div>
                        <div className='flex flex-col text-base font-normal text-left'>
                            <div className='hidden md:flex flex-col leading-[1.20]'>
                                <span>Current Tech Industries is a leading technology solutions development provider. Founded in 2006,</span>
                                <span>with a primary focus on technology development and distribution, the company is dedicated to </span>
                                <span>driving innovative solutions for digital transformation. By offering cutting-edge IT solutions, Current </span>
                                <span>Tech Industries aims to meet the diverse needs of its partners and customers.</span>
                            </div>

                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                <span>Current Tech Industries is a leading</span>
                                <span>technology solutions development provider.</span>
                                <span>Founded in 2006, with a primary focus on</span>
                                <span>technology development and distribution,</span>
                                <span>the company is dedicated to driving</span>
                                <span>innovative solutions for digital transformation.</span>
                                <span>By offering cutting-edge IT solutions, Current</span>
                                <span>Tech Industries aims to meet the diverse</span>
                                <span>needs of its partners and customers.</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-base font-bold text-left'>
                        <div className='hidden md:flex flex-col leading-[1.20]'>
                            <span>Copyright © Current Tech Industries 2023. All rights reserved.</span>
                        </div>
                        <div className='flex flex-col leading-[1.20] md:hidden'>
                            <span>Copyright © Current Tech Industries 2023.</span>
                            <span>All rights reserved.</span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-4 items-end justify-center'>
                    <div className='text-sm font-bold'>
                        Start to connect with us:
                    </div>
                    <div className='w-[96px] h-[40px] flex items-center gap-4 bg-white border border-white rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-[15px] py-2'>
                        <div>
                            <FooterWhatsApp/>
                        </div>
                        <div>
                            <QR/>
                        </div>
                    </div>
                    <div className='w-[96px] h-[40px] flex items-center gap-6 bg-white border border-white rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-[15px] py-2'>
                        <FooterGmail/>
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;