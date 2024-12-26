import { useState,useEffect } from 'react';
import Image1 from '../Assets/Images/Support/1.png';
import {Tick} from '../Components/Outline';
import AOS from 'aos';


const Support = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setIsSubmitted(true);
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 200,
        })
    })

    return(
        <div className="pt-[80px]">
            <div className='relative'>
                <img src={Image1} alt="" className='w-full'/>
            </div>
            <div className='absolute top-[30%] left-[10%] flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='text-2xl text-[#D1D5DB] font-normal' data-aos="fade-up">
                        INQUIRY BRINGS DELIGHTFUL SURPRISES
                    </div>
                    <div className='text-5xl text-[#D1D5DB] font-light leading-normal' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            Don’t let hesitation keep you
                        </div>
                        <div>
                            from reaching out to us
                        </div>
                    </div>
                </div>
                {isSubmitted ? (
                    <div className='flex flex-col gap-[100px]'>
                        <div className='flex items-center gap-[70px] rounded-[10px] bg-white opacity-80 py-[40px] px-[50px]'>
                            <div data-aos="fade-up">
                                <Tick />
                            </div>
                            <div className='text-xl text-[#4B5563] font-normal' data-aos="fade-up" data-aos-delay="200">
                                <div>
                                    Message has been successfully
                                </div>
                                <div>
                                    sent to us.
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[30px] text-xl text-[#D1D5DB] font-normal'>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <div>
                                    Your message is of utmost importance to us.
                                </div>
                                <div>
                                    Our customer service team will respond to you as soon as possible.
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                Thank you for your patience.
                            </div>
                        </div>
                    </div> 
                    ) : (
                    <form className='flex flex-col gap-[50px] md:gap-[100px] bg-[#E5E7EB] p-[50px] rounded-[10px]' data-aos="fade-up" data-aos-delay="400">
                        {/* Content */}
                        <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                            {/* Name Field */}
                            <input 
                                type="text" 
                                placeholder="Name *" 
                                className="w-full p-3 bg-[#E5E7EB] border border-[#9CA3AF]"
                            />

                            {/* Email Field */}
                            <input 
                                type="email" 
                                placeholder="Email *" 
                                className="w-full p-3 bg-[#E5E7EB] border border-[#9CA3AF]"
                            />

                            {/* Message Field */}
                            <textarea 
                                placeholder="Message *" 
                                rows="4"
                                className="w-full p-3 bg-[#E5E7EB] border border-[#9CA3AF]"
                            />
                        </div>
                        {/* Submit */}
                        <div className="flex items-center justify-end" data-aos="fade-up" data-aos-delay="600">
                            <button onClick={handleFormSubmit} className="shadow-custom px-5 py-[5px] rounded-[5px] bg-[linear-gradient(180deg,#EAF3FF_0%,#BBD7FE_72%)]">
                                SEND
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Support;