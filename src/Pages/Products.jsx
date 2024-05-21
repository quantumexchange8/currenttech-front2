import React, { useContext } from 'react';
import Admin from '../Assets/Images/KinderTown_Admin.png';
import Teacher from '../Assets/Images/KinderTown_Teacher.png';
import Parents from '../Assets/Images/KinderTown_Parent.png';
import Devices from '../Assets/Images/Device.png';
import Mocap from'../Assets/Images/Mocap.png';
import Mocap_Interface from'../Assets/Images/Mocap_Interface.png';
import Smart_Dash from'../Assets/Images/Smart_Dash.png';
import Smart_Dash_Interface from'../Assets/Images/Smart_Dash_Interface.png';
import Financial_Board from'../Assets/Images/Financial_Board.png';
import Financial_Board_Interface from'../Assets/Images/Financial_Board_Interface.png';
import Meta_Trader_4 from'../Assets/Images/Meta_Trader_4.png';
import Meta_Trader_5 from'../Assets/Images/Meta_Trader_5.png';
import cTrader from'../Assets/Images/cTrader.png';
import Trader_Interface from'../Assets/Images/Trader_Interface.png';
import Trader_Interface_1 from'../Assets/Images/Trader_Interface_1.png';
import MetaEditor_v4 from'../Assets/Images/MetaEditor_v4.png'
import MetaEditor_v5 from'../Assets/Images/MetaEditor_v5.png'
import Meta_Editor_Interface from'../Assets/Images/Meta_Editor_Interface.png';
import TT_Pay from'../Assets/Images/TT_Pay.png';
import TT_Pay_Interface from'../Assets/Images/TT_Pay_Interface.png';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import {useState} from 'react';
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext";

const Products = () => {

    const { t, language} = useContext(LanguageContext);
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

const handleButtonClick = (button) => {
    setOpenButton(true);
    setSelectedButton(button);
};

    return (
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="\assets\videos\JobView.mp4" type="video/mp4"/>
                </video>

                <div className='absolute right-5 md:right-[100px] bottom-5 md:bottom-[100px] flex flex-col text-white text-right gap-5'>
                    <span className='text-xl md:text-5xl font-bold'>{t("Products.productVideoTitle")}</span>
                    <div className='flex flex-col text-base md:text-4xl leading-[1.20]'>
                        <span className={`${language === 'en' ? 'font-medium w-[306px] md:w-[680px]' : 
                                            language === 'zh' ? 'font-semibold w-[256px] md:w-[576px]' : 
                                            language === 'bm' ? 'font-medium w-[306px] md:w-[650px]' : ''}`}>
                            {t("Products.productVideoDescription")}
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[50px] md:mt-[200px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[200px] ml-5 md:ml-0 mr-5 md:mr-0'>
                            <div className='flex flex-col gap-5 md:gap-10'>
                                <div className='flex w-full md:w-[863px] text-base md:text-5xl font-bold text-left'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`${language === 'en' ? 'w-[353px] md:w-[900px]' : 
                                                            language === 'zh' ? 'w-[353px] md:w-[1000px]' : 
                                                            language === 'bm' ? 'w-[353px] md:w-[1000px]' : ''}`}>
                                            {t("Products.productTechnologyTitle")}
                                        </span>
                                    </div>
                                </div>

                                <div className='hidden md:flex flex-col text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] leading-[1.20]'>
                                    <div className="flex items-baseline">
                                        <span className={`${language === 'en' ? 'text-orange-400 text-[64px] font-bold w-[115px]' : 
                                                            language === 'zh' ? 'text-orange-400 text-[64px] font-semibold w-[145px]' : 
                                                            language === 'bm' ? 'text-orange-400 text-[64px] font-bold w-[90px]' : ''}`}>
                                            {t("Products.productTechnologyDescription")}
                                        </span>
                                        <span className={`${language === 'en' ? 'font-medium' : 
                                                            language === 'zh' ? 'font-semibold' : 
                                                            language === 'bm' ? 'font-medium' : ''}`}>
                                            {t("Products.productTechnologyDescription2")}
                                        </span>
                                    </div>
                                    <span className={`inline-block ${language === 'en' ? 'font-medium w-[930px]' : 
                                                                     language === 'zh' ? 'font-semibold w-[1000px]' : 
                                                                     language === 'bm' ? 'font-medium w-[1000px]' : ''}`}>
                                            {t("Products.productTechnologyDescription3")}
                                    </span>
                                </div>

                                {/* mobile version */}
                                <div className='flex flex-col text-[#666] text-base md:text-4xl font-medium text-left md:w-[1000px] md:hidden leading-[1.20]'>
                                    <div className="flex items-baseline">
                                        <span className={`${language === 'en' ? 'text-orange-400 text-[32px] font-bold w-[60px]' : 
                                                            language === 'zh' ? 'text-orange-400 text-[32px] font-semibold w-[73px]' : 
                                                            language === 'bm' ? 'text-orange-400 text-[32px] font-bold w-[45px]' : ''}`}>
                                            {t("Products.mobileProductTechnologyDescription")}
                                        </span>
                                        <span className={`${language === 'en' ? 'font-medium' : 
                                                            language === 'zh' ? 'font-semibold' : 
                                                            language === 'bm' ? 'font-medium' : ''}`}>
                                            {t("Products.mobileProductTechnologyDescription2")}
                                        </span>
                                    </div>
                                    <span className={`${language === 'en' ? 'font-medium w-[340px]' : 
                                                                     language === 'zh' ? 'font-semibold w-[353px]' : 
                                                                     language === 'bm' ? 'font-medium w-[320px]' : ''}`}>
                                            {t("Products.mobileProductTechnologyDescription3")}
                                    </span>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#333]'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className=' text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                <div className='flex flex-col gap-[20px]'>
                                    {t("Products.education.educationTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                         language === 'zh' ? 'font-semibold' : 
                                                                         language === 'bm' ? 'font-medium' : ''}`}>
                                                {t("Products.education.educationCategories1")} | {t("Products.education.educationCategories2")} | {t("Products.education.educationCategories3")} | {t("Products.education.educationCategories4")} | {t("Products.education.educationCategories5")}
                                        </span>
                                    </div>
                                </div>
                                <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                    ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                    {language === 'zh' ? (
                                        <span>
                                        {t("Products.education.educationCategories1")} | {t("Products.education.educationCategories2")} | {t("Products.education.educationCategories3")} | {t("Products.education.educationCategories4")} | {t("Products.education.educationCategories5")}
                                        </span>
                                    ) : (
                                        <>
                                        <span>{t("Products.education.educationCategories1")}</span>
                                        <span>{t("Products.education.educationCategories2")}</span>
                                        <span>{t("Products.education.educationCategories3")}</span>
                                        <span>{t("Products.education.educationCategories4")}</span>
                                        <span>{t("Products.education.educationCategories5")}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-row gap-[10px] md:gap-[100px] justify-center'>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={Parents} alt="KinderTown_Parent"/>
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center w-[100px]'>
                                        {t("Products.education.educationImage1")}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={Teacher} alt="KinderTown_Teacher"/>
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center w-[100px]'>
                                        {t("Products.education.educationImage2")}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={Admin} alt="KinderTown_Admin"/>
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center w-[100px]'>
                                        {t("Products.education.educationImage3")}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-[353px] md:w-[1000px] h-[166.26px] md:h-[471px] shrink-0 self-center">
                                <img src={Devices} alt="Devices" />
                            </div>

                            <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                            <div className='flex flex-col leading-[1.20]'>
                                <span className={`inline-block ${language === 'en' ? 'font-medium w-[320px] md:w-[960px]' : 
                                                                 language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                 language === 'bm' ? 'font-medium w-[337px] md:w-[950px]' : ''}`}>
                                        {t("Products.education.educationDescription")}
                                </span>
                            </div>
                            <div className='w-full h-[1px] bg-[#333] '></div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                <div className='flex flex-col gap-[20px]'>
                                    {t("Products.attendance.attendanceTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                         language === 'zh' ? 'font-semibold' : 
                                                                         language === 'bm' ? 'font-medium' : ''}`}>
                                                {t("Products.attendance.attendanceCategories1")} | {t("Products.attendance.attendanceCategories2")} | {t("Products.attendance.attendanceCategories3")} | {t("Products.attendance.attendanceCategories4")}
                                        </span>
                                    </div>
                                </div>
                                <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                     ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                     {language === 'zh' ? (
                                        <span>
                                        {t("Products.attendance.attendanceCategories1")} | {t("Products.attendance.attendanceCategories2")} | {t("Products.attendance.attendanceCategories3")} | {t("Products.attendance.attendanceCategories4")}
                                        </span>
                                    ) : (
                                        <>
                                        <span>{t("Products.attendance.attendanceCategories1")}</span>
                                        <span>{t("Products.attendance.attendanceCategories2")}</span>
                                        <span>{t("Products.attendance.attendanceCategories3")}</span>
                                        <span>{t("Products.attendance.attendanceCategories4")}</span>
                                        </>
                                    )}
                                </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                            <img src={Mocap} alt="Mocap" />
                                        </div>
                                        <div className='text-xs md:text-base font-bold text-center '>
                                            {t("Products.attendance.attendanceImage")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center w-[353px] md:w-[1000px] h-[225.70px] md:h-[640px] self-center'>
                                    <img src={Mocap_Interface} alt="User Interface" />
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium w-[335px] md:w-[1000px]' : 
                                                                         language === 'zh' ? 'font-semibold w-[353px] md:w-[990px]' : 
                                                                         language === 'bm' ? 'font-medium w-[340px] md:w-[1000px]' : ''}`}>
                                                {t("Products.attendance.attendanceDescription")}
                                        </span>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>


            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                <div className='flex flex-col gap-[20px]'>
                                    {t("Products.financial.financialTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                         language === 'zh' ? 'font-semibold' : 
                                                                         language === 'bm' ? 'font-medium' : ''}`}>
                                                {t("Products.financial.financialCategories1")} | {t("Products.financial.financialCategories2")} | {t("Products.financial.financialCategories3")}
                                        </span>
                                    </div>
                                </div>
                                <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                    ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                    {language === 'zh' ? (
                                        <span>
                                        {t("Products.financial.financialCategories1")} | {t("Products.financial.financialCategories2")} | {t("Products.financial.financialCategories3")}
                                        </span>
                                    ) : (
                                        <>
                                        <span>{t("Products.financial.financialCategories1")}</span>
                                        <span>{t("Products.financial.financialCategories2")}</span>
                                        <span>{t("Products.financial.financialCategories3")}</span>
                                        </>
                                    )}
                                </div>

                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                            <img src={Smart_Dash} alt="Smart Dash" />
                                        </div>
                                        <div className='text-xs md:text-base font-bold text-center '>
                                            {t("Products.financial.financialImage")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center w-[347.44px] md:w-[984.25px] h-[409.87px] md:h-[1161.11px] self-center'>
                                    <img src={Smart_Dash_Interface} alt="Smart Dash User Interface" />
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium w-[335px] md:w-[1000px]' : 
                                                                         language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                         language === 'bm' ? 'font-medium w-[335px] md:w-[930px]' : ''}`}>
                                                {t("Products.financial.financialDescription")}
                                        </span>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                <div className='flex flex-col gap-[20px]'>
                                    {t("Products.management.managementTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                         language === 'zh' ? 'font-semibold' : 
                                                                         language === 'bm' ? 'font-medium' : ''}`}>
                                                {t("Products.management.managementCategories1")} | {t("Products.management.managementCategories2")}
                                        </span>
                                    </div>
                                </div>
                                <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                     ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                    {language === 'zh' ? (
                                        <span>
                                        {t("Products.management.mobileManagementCategories1")} | {t("Products.management.mobileManagementCategories2")} | {t("Products.management.mobileManagementCategories3")}
                                        </span>
                                    ) : (
                                        <>
                                        <span>{t("Products.management.mobileManagementCategories1")}</span>
                                        <span>{t("Products.management.mobileManagementCategories2")}</span>
                                        <span>{t("Products.management.mobileManagementCategories3")}</span>
                                        </>
                                    )}
                                </div>

                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                            <img src={Financial_Board} alt="Financial Board" />
                                        </div>
                                        <div className='text-xs md:text-base font-bold text-center '>
                                            {t("Products.management.managementImage")}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center w-[353px] md:w-[1000px] h-[198.56px] md:h-[563px] self-center'>
                                    <img src={Financial_Board_Interface} alt="Financial Board User Interface" />
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium w-[335px] md:w-[950px]' : 
                                                                         language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                         language === 'bm' ? 'font-medium w-[335px] md:w-[950px]' : ''}`}>
                                                {t("Products.management.managementDescription")}
                                        </span>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                    <div className='flex flex-col leading-tight md:hidden'>
                                    <span>{t("Products.labelSolutions.mobileLabelSolutionsTitle1")}</span>
                                    <span>{t("Products.labelSolutions.mobileLabelSolutionsTitle2")}</span>
                                    </div>
                                    <div className='flex flex-col gap-[20px]'>
                                        <div className='hidden md:flex justify-center'>{t("Products.labelSolutions.labelSolutionsTitle")}</div>
                                        <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                            <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                             language === 'zh' ? 'font-semibold' : 
                                                                             language === 'bm' ? 'font-medium' : ''}`}>
                                                    {t("Products.labelSolutions.labelSolutionsCategories1")} | {t("Products.labelSolutions.labelSolutionsCategories2")} | {t("Products.labelSolutions.labelSolutionsCategories3")} | {t("Products.labelSolutions.labelSolutionsCategories4")} | {t("Products.labelSolutions.labelSolutionsCategories5")}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                         ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                        {language === 'zh' ? (
                                            <span className='w-[222px] self-center'>
                                            {t("Products.labelSolutions.labelSolutionsCategories1")} | {t("Products.labelSolutions.labelSolutionsCategories2")} | {t("Products.labelSolutions.labelSolutionsCategories3")} | {t("Products.labelSolutions.labelSolutionsCategories4")} | {t("Products.labelSolutions.labelSolutionsCategories5")}
                                            </span>
                                        ) : (
                                            <>
                                            <span>{t("Products.labelSolutions.labelSolutionsCategories1")}</span>
                                            <span>{t("Products.labelSolutions.labelSolutionsCategories2")}</span>
                                            <span>{t("Products.labelSolutions.labelSolutionsCategories3")}</span>
                                            <span>{t("Products.labelSolutions.labelSolutionsCategories4")}</span>
                                            <span>{t("Products.labelSolutions.labelSolutionsCategories5")}</span>
                                            </>
                                        )}
                                    </div>

                                </div>
                                <div className='flex flex-row gap-[30px] md:gap-[100px] justify-center'>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={Meta_Trader_4} alt="Meta_Trader_4"  />
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center'>
                                        {t("Products.labelSolutions.labelSolutionsImage1")}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={Meta_Trader_5} alt="Meta_Trader_5" />
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center '>
                                        {t("Products.labelSolutions.labelSolutionsImage2")}
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={cTrader} alt="cTrader"  />
                                    </div>
                                    <div className='text-xs md:text-base font-bold text-center '>
                                        {t("Products.labelSolutions.labelSolutionsImage3")}
                                    </div>
                                </div>
                                </div>
                                <div className="w-[353px] md:w-[1000px] h-[173.32px] md:h-[491px] shrink-0 self-center">
                                    <img src={Trader_Interface} alt="Trader_Interface" />
                                </div>
                                <div className="w-[353px] md:w-[1000px] h-[165.56px] md:h-[469px] shrink-0 self-center">
                                    <img src={Trader_Interface_1} alt="Trader_Interface_1" />
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <span className={`inline-block ${language === 'en' ? 'font-medium w-[335px] md:w-[950px]' : 
                                                                     language === 'zh' ? 'font-semibold w-[353px] md:w-[980px]' : 
                                                                     language === 'bm' ? 'font-medium w-[335px] md:w-[950px]' : ''}`}>
                                            {t("Products.labelSolutions.labelSolutionsDescription")}
                                    </span>
                                    </div>
                                <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center space-y-4 md:space-y-0'>
                                    <div className='flex flex-col gap-[20px]'>
                                        {t("Products.metaEditor.metaEditorTitle")}
                                        <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                            <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                            language === 'zh' ? 'font-semibold' : 
                                                                            language === 'bm' ? 'font-medium' : ''}`}>
                                                    {t("Products.metaEditor.metaEditorCategories1")} | {t("Products.metaEditor.metaEditorCategories2")} | {t("Products.metaEditor.metaEditorCategories3")} | {t("Products.metaEditor.metaEditorCategories4")}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden ${language === 'en' || language === 'bm' ? 'font-medium' : language === 'zh' ? 'font-semibold' : ''}`}>
                                        {language === 'zh' ? (
                                            <span className='w-[254px] self-center'>
                                            {t("Products.metaEditor.metaEditorCategories1")} | {t("Products.metaEditor.metaEditorCategories2")} | {t("Products.metaEditor.metaEditorCategories3")} | {t("Products.metaEditor.metaEditorCategories4")}
                                            </span>
                                        ) : (
                                            <>
                                            <span>{t("Products.metaEditor.metaEditorCategories1")}</span>
                                            <span>{t("Products.metaEditor.metaEditorCategories2")}</span>
                                            <span>{t("Products.metaEditor.metaEditorCategories3")}</span>
                                            <span>{t("Products.metaEditor.metaEditorCategories4")}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className='hidden md:flex justify-center'>
                                    <div className='flex flex-row gap-[100px]'>
                                        <div className='w-[200px] md:w-[323.01px] h-[105.33px] md:h-[170.12px]'>
                                            <img src={MetaEditor_v4} alt="Meta_Editor" />
                                        </div>
                                        <div className='w-[200px] md:w-[323.01px] h-[105.33px] md:h-[170.12px]'>
                                            <img src={MetaEditor_v5} alt="Meta_Editor" />
                                        </div>
                                    </div>
                                </div>

                                {/* mobile version */}
                                <div className='flex justify-center md:hidden'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='w-[200px] md:w-[323.01px] h-[105.33px] md:h-[170.12px]'>
                                            <img src={MetaEditor_v4} alt="Meta_Editor" />
                                        </div>
                                        <div className='w-[200px] md:w-[323.01px] h-[105.33px] md:h-[170.12px]'>
                                            <img src={MetaEditor_v5} alt="Meta_Editor" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center'>
                                <div className='w-[353px] md:w-[1000px] h-[196.11px] md:h-[555.56px]'>
                                    <img src={Meta_Editor_Interface} alt="Meta Editor Interface" />
                                </div>
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px] leading-tight'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <span className={`inline-block ${language === 'en' ? 'font-medium w-[313px] md:w-[935px]' : 
                                                                     language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                     language === 'bm' ? 'font-medium w-[340px] md:w-[950px]' : ''}`}>
                                            {t("Products.metaEditor.metaEditorDescription")}
                                    </span>
                                </div>
                                <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px] md:mt-[150px]'>
                            <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                                <div className='text-[32px] md:text-8xl font-bold text-center'>
                                <div className='flex flex-col gap-[20px]'>
                                    {t("Products.cryptoWallet.cryptoWalletTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium' : 
                                                                         language === 'zh' ? 'font-semibold' : 
                                                                         language === 'bm' ? 'font-medium' : ''}`}>
                                                {t("Products.cryptoWallet.cryptoWalletCategories1")} | {t("Products.cryptoWallet.cryptoWalletCategories2")}
                                        </span>
                                    </div>
                                </div>
                                    <div className={`flex flex-col text-[#666] text-base md:text-2xl text-center leading-tight md:hidden 
                                        ${language === 'en' ||language === 'bm' ? 'font-medium' :language === 'zh' ? 'font-semibold' : ''}`}> 
                                           {language === 'zh' ? (<span>{t("Products.cryptoWallet.cryptoWalletCategories1")} | {t("Products.cryptoWallet.cryptoWalletCategories2")}</span>) : (
                                            <>
                                            <span>{t("Products.cryptoWallet.cryptoWalletCategories1")}</span>
                                            <span>{t("Products.cryptoWallet.cryptoWalletCategories2")}</span>
                                            </>
                                           )}
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                    <div className='w-[80px] md:w-[150px] h-[80px] md:h-[150px]'>
                                        <img src={TT_Pay} alt="TT_Pay" />
                                    </div>
                                        <div className='text-xs md:text-base font-bold text-center '>
                                            {t("Products.cryptoWallet.cryptoWalletImage")}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center w-[353px] md:w-[1011px] h-[160.96px] md:h-[461px] self-center'>
                                    <img src={TT_Pay_Interface} alt="TT_Pay_Interface" />
                                </div>

                                <div className='text-[#666] text-base md:text-4xl font-medium text-left ml-5 md:ml-0 mr-5 md:mr-0 flex flex-col gap-[100px] md:gap-[150px]'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        <span className={`inline-block ${language === 'en' ? 'font-medium w-[329px] md:w-[850px]' : 
                                                                         language === 'zh' ? 'font-semibold w-[353px] md:w-[1000px]' : 
                                                                         language === 'bm' ? 'font-medium w-[329px] md:w-[950px]' : ''}`}>
                                                {t("Products.cryptoWallet.cryptoWalletDescription")}
                                        </span>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#333] '></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div>
                <div className='w-[353px] md:w-full flex flex-col items-center ml-5 md:ml-0 mr-5 md:mr-0'>
                        <div className='max-w-[1000px] mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px]'>
                            <div className='flex flex-col gap-5 md:gap-[50px]'>
                                <div className='text-base md:text-5xl font-bold text-left'>
                                    {t("Products.productsReminderTitle")}
                                </div>
                                <div className='flex flex-col text-[#666] text-base md:text-4xl font-medium text-left leading-[1.20]'>
                                    <span className={`${language === 'en' ? 'font-medium w-[350px] md:w-[950px]' : 
                                                        language === 'zh' ? 'font-semibold w-[355px] md:w-[1000px]' : 
                                                        language === 'bm' ? 'font-medium w-[340px] md:w-[950px]' : ''}`}>
                                        {t("Products.productsReminderDescription")}
                                    </span>
                                </div>

                                <div 
                                    className='flex items-center gap-10'>
                                    <div 
                                    className='hidden md:flex w-[280px] h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[160px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                    language === 'bm' ? 'font-medium w-[160px]' : ''}`}>
                                                    <span className='block'>{t("Products.whatsappDescription")}</span>
                                                    <span className='block'>{t("Products.whatsappDescription2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                    className='hidden md:flex w-[280px] h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[140px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[130px]' : 
                                                                    language === 'bm' ? 'font-medium w-[140px]' : ''}`}>
                                                    <span className='block'>{t("Products.gmailDescription")}</span>
                                                    <span className='block'>{t("Products.gmailDescription2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Version */}
                                <div 
                                    className='flex flex-col items-left gap-5 md:hidden'>
                                    <div 
                                    className='flex w-full h-[70px]  items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[170px]' : 
                                                                    language === 'bm' ? 'font-medium w-[170px]' : ''}`}>    
                                                    <span className='block'>{t("Products.whatsappDescriptionMobile")}</span>
                                                    <span className='block'>{t("Products.whatsappDescriptionMobile2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div 
                                    className='flex w-full h-[70px] items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <div className="flex flex-col leading-[1.20]">
                                                <span className={`${language === 'en' ? 'font-medium w-[170px]' : 
                                                                    language === 'zh' ? 'font-semibold w-[170px]' : 
                                                                    language === 'bm' ? 'font-medium w-[170px]' : ''}`}>
                                                    <span className='block'>{t("Products.gmailDescriptionMobile")}</span>
                                                    <span className='block'>{t("Products.gmailDescriptionMobile2")}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Button_Component" className="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible"></div>
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div>
    )
}

export default Products;