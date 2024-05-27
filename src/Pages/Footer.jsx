import React, {useState} from 'react';
import ct_logo from '../Assets/Images/currenttech_logo.svg';
import { QR, Calendar, FooterWhatsApp, FooterGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';

const Footer = () => {
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

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
                                <div>Current Tech Industries is a leading technology solutions development provider. Founded in 2006,</div>
                                <div>with a primary focus on technology development and distribution, the company is dedicated to </div>
                                <div>driving innovative solutions for digital transformation. By offering cutting-edge IT solutions, Current </div>
                                <div>Tech Industries aims to meet the diverse needs of its partners and customers.</div>
                            </div>

                            <div className='flex flex-col leading-[1.20] md:hidden'>
                                <div>Current Tech Industries is a leading</div>
                                <div>technology solutions development provider.</div>
                                <div>Founded in 2006, with a primary focus on</div>
                                <div>technology development and distribution,</div>
                                <div>the company is dedicated to driving</div>
                                <div>innovative solutions for digital transformation.</div>
                                <div>By offering cutting-edge IT solutions, Current</div>
                                <div>Tech Industries aims to meet the diverse</div>
                                <div>needs of its partners and customers.</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-base font-bold text-left'>
                        <div className='hidden md:flex flex-col leading-[1.20]'>
                            <div>Copyright © Current Tech Industries 2023. All rights reserved.</div>
                        </div>
                        <div className='flex flex-col leading-[1.20] md:hidden'>
                            <div>Copyright © Current Tech Industries 2023.</div>
                            <div>All rights reserved.</div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-4 items-end justify-center'>
                    <div className='text-sm font-bold'>
                        Start to connect with us:
                    </div>
                    <div className='w-[96px] h-[40px] flex items-center gap-4 bg-white border border-white rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-[15px] py-2 cursor-pointer'
                        onClick={() => handleButtonClick('whatsapp')}>
                        <div>
                            <FooterWhatsApp/>
                        </div>
                        <div>
                            <QR/>
                        </div>
                    </div>
                    <div className='w-[96px] h-[40px] flex items-center gap-6 bg-white border border-white rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-[15px] py-2 cursor-pointer'
                        onClick={() => handleButtonClick('gmail')}>
                        <FooterGmail/>
                        <Calendar/>
                    </div>
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}

export default Footer;