import { useState,useEffect } from 'react';
import Image1 from '../Assets/Images/Support/1.png';
import ImageM1 from '../Assets/Images/Support/M1.png';
import {Tick, TickM} from '../Components/Outline';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';


const Support = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const {t} = useTranslation();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => {
        setIsSubmitted(false);
        }, 7000);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
        })
    })

    return(
        <div className="pt-[50px] xl:pt-[80px] relative">
            {/* Background Image */}
            <div className="relative">
                <img src={Image1} alt="" className="hidden xl:block w-full object-cover" />
                <img src={ImageM1} alt="" className="xl:hidden w-full object-cover" />
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 md:top-[-160px] flex flex-col justify-center xl:items-start gap-[50px] px-[25px] xl:px-0 xl:pl-[163px]">
                {/* Heading */}
                <div className="flex flex-col gap-[10px]">
                    <div className="text-sm md:text-2xl text-[#D1D5DB] font-normal leading-normal w-[266px] md:w-full xl:w-full" data-aos="fade-up">
                        {t("Support.inquiry")}
                    </div>
                    <div className="text-2xl md:text-5xl text-[#D1D5DB] font-light leading-normal " data-aos="fade-up" data-aos-delay="200">
                        <div className='hidden xl:block leading-normal'>{t("Support.hesitation")} <div>{t("Support.hesitation2C")} </div></div>
                        <div className='xl:hidden leading-normal'>{t("Support.hesitationMobile")} </div>
                        <div className='xl:hidden leading-normal'>{t("Support.hesitationMobile2")} </div>
                    </div> 
                </div>

                {/* Conditional Rendering: Form or Success Message */}
                {isSubmitted ? (
                    <div className="flex flex-col gap-[100px] text-center">
                        {/* Success Message */}
                        <div className="flex items-center gap-[30px] md:gap-[70px] rounded-[10px] bg-white opacity-80 py-[36px] md:py-[40px] px-[38px] md:px-[50px] md:w-[600px]">
                            <div data-aos="fade-up">
                                <div className='hidden md:block'>
                                    <Tick />
                                </div>
                                <div className='md:hidden'>
                                    <TickM />
                                </div>
                            </div>
                            {/* Web */}
                            <div className="hidden md:block text-xl text-left text-[#4B5563] font-normal" data-aos="fade-up" data-aos-delay="200">
                                <div>{t("Support.messageSuccessfully")}</div>
                                <div>{t("Support.sendToUs")}</div>
                            </div>
                            {/* Mobile */}
                            <div className="md:hidden text-base text-left md:text-xl text-[#4B5563] font-normal" data-aos="fade-up" data-aos-delay="200">
                                <div>{t("Support.messageSuccessfullyMobile")}</div>
                            </div>
                        </div>

                        {/* Bottom Message */}
                        {/* Web */}
                        <div className="hidden md:flex flex-col gap-8 text-xl text-left text-[#D1D5DB] font-normal">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <div>{t("Support.yourMessage")}</div>
                                <div>{t("Support.ourCustomerService")}</div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                {t("Support.thankYou")}
                            </div>
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden flex flex-col gap-8 text-base text-left text-[#D1D5DB] font-normal">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <div>{t("Support.yourMessageMobile")}</div>
                                <div> {t("Support.ourCustomerServiceMobile")}</div>
                                <div>{t("Support.ourCustomerServiceMobile2")}</div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                {t("Support.thankYou")}
                            </div>
                        </div>
                    </div>
                ) : (
                    // Form
                    <form
                        className="flex flex-col gap-[30px] md:gap-[50px] bg-[#E5E7EB] bg-opacity-80 md:bg-opacity-100 px-10 pt-[50px] pb-[30px] md:p-[50px] rounded-[10px] w-full max-w-[600px]"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {/* Input Fields */}
                        <div className="flex flex-col gap-[30px] md:gap-[50px]">
                            <input
                                type="text"
                                placeholder={t("Support.name")}
                                className="w-full py-2 px-5 md:p-3 bg-[#E5E7EB] bg-opacity-0 border border-[#9CA3AF] rounded focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder={t("Support.email")}
                                className="w-full py-2 px-5 md:p-3 bg-[#E5E7EB] bg-opacity-0 border border-[#9CA3AF] rounded focus:outline-none"
                            />
                            <textarea
                                placeholder={t("Support.message")}
                                rows="4"
                                className="w-full py-2 px-5 md:p-3 bg-[#E5E7EB] bg-opacity-0 border border-[#9CA3AF] rounded focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={handleFormSubmit}
                                className="text-base md:text-xl text-[#4B5563] font-normal shadow-custom px-6 xl:px-5 py-2 xl:py-[5px] rounded-[5px] bg-[linear-gradient(180deg,#EAF3FF_0%,#BBD7FE_72%)]"
                            >
                                {t("Support.send")}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>

    )
}

export default Support;