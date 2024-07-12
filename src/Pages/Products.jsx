import React, { useState } from 'react';
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
import { WhatsApp, Gmail, MobileWhatsApp, MobileGmail } from '../Components/Brand.jsx';
import Modal from '../Components/Modal';
// import { LanguageContext } from "../LanguagesContext";
import productVideo from '../Assets/videos/JobView.mp4';
import { useTranslation } from 'react-i18next';

const Products = () => {

    const { t, i18n } = useTranslation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    return (
        <div className='flex flex-col w-full justify-center text-center'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src={productVideo} type="video/mp4"/>
                </video>

                <div className='flex flex-col absolute inset-0 justify-center items-center text-center text-white/80 gap-5'>
                    <div className='text-[32px] md:text-[96px] font-bold'>{t("Products.productVideoTitle")}</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-[50px] md:gap-[150px]'>
                <div className='max-w-[1000px] flex flex-col mx-5 md:mx-0 mt-[50px] md:mt-[150px] mb-[50px] md:mb-[150px] gap-[50px] md:gap-[150px]'>
                    <div className='flex flex-col gap-[10px] md:gap-[50px]'>
                        <div className='flex w-full md:w-[863px] text-base md:text-5xl font-bold text-left'>
                            <div className='flex flex-col leading-[1.20] md:w-[1000px]'>
                                {t("Products.productTechnologyTitle")}
                            </div>
                        </div>

                        <div className='hidden md:flex flex-col text-[#666] text-left md:w-[1000px] leading-[1.20]'>
                            <div className="flex items-baseline">
                            {
                                i18n.language === 'en' ? (
                                    <div className='text-orange-400 text-5xl font-bold w-[100px]'>
                                        {t("Products.productTechnologyDescription")}
                                    </div>
                                ) : (
                                    <div className='text-orange-400 text-5xl font-bold w-[120px]'>
                                        {t("Products.productTechnologyDescription")}
                                    </div>
                                )
                            }
                                {/* <div className="text-orange-400 text-5xl font-bold w-[100px]">
                                    {t("Products.productTechnologyDescription")}
                                </div> */}
                                <div className='text-2xl font-semibold'>
                                    {t("Products.productTechnologyDescription2")}
                                </div>
                            </div>
                            <div className='text-2xl font-semibold w-[1000px]'>
                                    {t("Products.productTechnologyDescription3")}
                            </div>
                        </div>

                        {/* mobile version */}
                        <div className='flex flex-col text-[#666] text-left md:w-[1000px] md:hidden leading-[1.20]'>
                            <div className="flex items-baseline">
                            {
                                i18n.language === 'en' ? (
                                    <div className='text-orange-400 text-[28px] font-bold w-[60px]'>
                                        {t("Products.mobileProductTechnologyDescription")}
                                    </div>
                                ) : (
                                    <div className='text-orange-400 text-[28px] font-bold w-[65px]'>
                                        {t("Products.mobileProductTechnologyDescription")}
                                    </div>
                                )
                            }
                                <div className='text-sm font-semibold'>
                                    {t("Products.mobileProductTechnologyDescription2")}
                                </div>
                            </div>
                            <div className="text-sm font-semibold w-[353px]">
                                    {t("Products.mobileProductTechnologyDescription3")}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333]'></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className=' text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                <div className='flex flex-col gap-[20px]' >
                                    {t("Products.education.educationTitle")}
                                    <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                        {t("Products.education.educationCategories1")} | {t("Products.education.educationCategories2")} | {t("Products.education.educationCategories3")} | {t("Products.education.educationCategories4")} | {t("Products.education.educationCategories5")}
                                    </div>
                                </div>

                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'>
                                    {i18n === 'zh' ? (
                                        <div>
                                        {t("Products.education.educationCategories1")} | {t("Products.education.educationCategories2")} | {t("Products.education.educationCategories3")} | {t("Products.education.educationCategories4")} | {t("Products.education.educationCategories5")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.education.educationCategories1")}</div>
                                        <div>{t("Products.education.educationCategories2")}</div>
                                        <div>{t("Products.education.educationCategories3")}</div>
                                        <div>{t("Products.education.educationCategories4")}</div>
                                        <div>{t("Products.education.educationCategories5")}</div>
                                        </>
                                    )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                {t("Products.education.educationDescription")}
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                {t("Products.attendance.attendanceTitle")}
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.attendance.attendanceCategories1")} | {t("Products.attendance.attendanceCategories2")} | {t("Products.attendance.attendanceCategories3")} | {t("Products.attendance.attendanceCategories4")}
                                </div>
                            
                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'>
                                    {i18n === 'zh' ? (
                                        <div>
                                        {t("Products.attendance.attendanceCategories1")} | {t("Products.attendance.attendanceCategories2")} | {t("Products.attendance.attendanceCategories3")} | {t("Products.attendance.attendanceCategories4")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.attendance.attendanceCategories1")}</div>
                                        <div>{t("Products.attendance.attendanceCategories2")}</div>
                                        <div>{t("Products.attendance.attendanceCategories3")}</div>
                                        <div>{t("Products.attendance.attendanceCategories4")}</div>
                                        </>
                                    )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] font-medium text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col leading-[1.20]'>
                                <div className="inline-block font-semibold w-[353px] md:w-[1000px]">
                                        {t("Products.attendance.attendanceDescription")}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                {t("Products.financial.financialTitle")}
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.financial.financialCategories1")} | {t("Products.financial.financialCategories2")} | {t("Products.financial.financialCategories3")}
                                </div>
                            
                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'>
                                    {i18n === 'zh' ? (
                                        <div>
                                            {t("Products.financial.financialCategories1")} | {t("Products.financial.financialCategories2")} | {t("Products.financial.financialCategories3")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.financial.financialCategories1")}</div>
                                        <div>{t("Products.financial.financialCategories2")}</div>
                                        <div>{t("Products.financial.financialCategories3")}</div>
                                        </>
                                    )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] font-semibold text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                {t("Products.financial.financialDescription")}
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full h-[1px] bg-[#333] '></div>
                    
                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                {t("Products.management.managementTitle")}
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.management.managementCategories1")} | {t("Products.management.managementCategories2")}
                                </div>
                            
                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'>
                                    {i18n === 'zh' ? (
                                        <div>
                                        {t("Products.management.mobileManagementCategories1")} | {t("Products.management.mobileManagementCategories2")} | {t("Products.management.mobileManagementCategories3")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.management.mobileManagementCategories1")}</div>
                                        <div>{t("Products.management.mobileManagementCategories2")}</div>
                                        <div>{t("Products.management.mobileManagementCategories3")}</div>
                                        </>
                                    )}
                                </div>
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
                            <img src={Financial_Board_Interface} alt="Financial Board User Interface" className='rounded-[20px]' />
                        </div>

                        <div className='text-[#666] text-sm md:text-[28px] font-medium text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col w-[353px] md:w-[1000px] leading-[1.20] font-semibold'>
                                {t("Products.management.managementDescription")}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col leading-tight md:hidden'>
                                <div>{t("Products.labelSolutions.mobileLabelSolutionsTitle1")}</div>
                                <div>{t("Products.labelSolutions.mobileLabelSolutionsTitle2")}</div>
                            </div>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                <div className='hidden md:flex justify-center'>{t("Products.labelSolutions.labelSolutionsTitle")}</div>
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.labelSolutions.labelSolutionsCategories1")} | {t("Products.labelSolutions.labelSolutionsCategories2")} | {t("Products.labelSolutions.labelSolutionsCategories3")} | {t("Products.labelSolutions.labelSolutionsCategories4")} | {t("Products.labelSolutions.labelSolutionsCategories5")}
                                </div>
                                
                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'>
                                    {i18n === 'zh' ? (
                                        <div className='w-[222px] self-center'>
                                        {t("Products.labelSolutions.labelSolutionsCategories1")} | {t("Products.labelSolutions.labelSolutionsCategories2")} | {t("Products.labelSolutions.labelSolutionsCategories3")} | {t("Products.labelSolutions.labelSolutionsCategories4")} | {t("Products.labelSolutions.labelSolutionsCategories5")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.labelSolutions.labelSolutionsCategories1")}</div>
                                        <div>{t("Products.labelSolutions.labelSolutionsCategories2")}</div>
                                        <div>{t("Products.labelSolutions.labelSolutionsCategories3")}</div>
                                        <div>{t("Products.labelSolutions.labelSolutionsCategories4")}</div>
                                        <div>{t("Products.labelSolutions.labelSolutionsCategories5")}</div>
                                        </>
                                    )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col font-semibold w-[353px] md:w-[1000px] leading-[1.20]'>
                                {t("Products.labelSolutions.labelSolutionsDescription")}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                {t("Products.metaEditor.metaEditorTitle")}
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.metaEditor.metaEditorCategories1")} | {t("Products.metaEditor.metaEditorCategories2")} | {t("Products.metaEditor.metaEditorCategories3")} | {t("Products.metaEditor.metaEditorCategories4")}
                                </div>
                            
                                <div className={`flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden ${i18n === 'en' || i18n === 'bm' ? 'font-medium' : i18n === 'zh' ? 'font-semibold' : ''}`}>
                                    {i18n === 'zh' ? (
                                        <div className='w-[254px] self-center'>
                                        {t("Products.metaEditor.metaEditorCategories1")} | {t("Products.metaEditor.metaEditorCategories2")} | {t("Products.metaEditor.metaEditorCategories3")} | {t("Products.metaEditor.metaEditorCategories4")}
                                        </div>
                                    ) : (
                                        <>
                                        <div>{t("Products.metaEditor.metaEditorCategories1")}</div>
                                        <div>{t("Products.metaEditor.metaEditorCategories2")}</div>
                                        <div>{t("Products.metaEditor.metaEditorCategories3")}</div>
                                        <div>{t("Products.metaEditor.metaEditorCategories4")}</div>
                                        </>
                                    )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] text-left flex flex-col gap-[50px] md:gap-[150px] leading-tight'>
                            <div className='flex flex-col font-semibold w-[353px] md:w-[1000px] leading-[1.20]'>
                                {t("Products.metaEditor.metaEditorDescription")}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        <div className='text-[32px] md:text-8xl font-bold text-center'>
                            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                {t("Products.cryptoWallet.cryptoWalletTitle")}
                                <div className='hidden md:flex text-[#666] text-2xl text-center justify-center font-semibold'>
                                    {t("Products.cryptoWallet.cryptoWalletCategories1")} | {t("Products.cryptoWallet.cryptoWalletCategories2")}
                                </div>
                            
                                <div className='flex flex-col text-[#666] text-sm md:text-2xl text-center leading-tight md:hidden font-semibold'> 
                                        {i18n === 'zh' ? (<div>{t("Products.cryptoWallet.cryptoWalletCategories1")} | {t("Products.cryptoWallet.cryptoWalletCategories2")}</div>) : (
                                        <>
                                        <div>{t("Products.cryptoWallet.cryptoWalletCategories1")}</div>
                                        <div>{t("Products.cryptoWallet.cryptoWalletCategories2")}</div>
                                        </>
                                        )}
                                </div>
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

                        <div className='text-[#666] text-sm md:text-[28px] text-left flex flex-col gap-[50px] md:gap-[150px]'>
                            <div className='flex flex-col leading-[1.20] font-semibold w-[353px] md:w-[1000px]'>
                                {t("Products.cryptoWallet.cryptoWalletDescription")}
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-[#333] '></div>

                    <div className='flex flex-col md:gap-[50px]'>
                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                            <div className='text-base md:text-5xl font-bold text-left'>
                                {t("Products.productsReminderTitle")}
                            </div>
                            <div className='flex flex-col text-[#666] text-sm md:text-[32px] font-semibold md:w-[1000px] text-left leading-[1.20]'>
                                {t("Products.productsReminderDescription")}
                            </div> 
                        </div>
                        <div 
                            className='flex flex-col gap-[30px] md:gap-[50px]'>
                            <div className='flex flex-row'>
                                <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                    <div 
                                        className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px]'>
                                        <WhatsApp/>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-2xl text-left'>
                                        <div className="flex flex-col leading-[1.20] font-semibold w-[190px] md:w-[260px]">
                                            <div className='hidden md:flex'>{t("Home.whatsappDescription")}</div>
                                            <div className='hidden md:flex'>{t("Home.whatsappDescription2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row'>
                                <div className='flex gap-9 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                    <div 
                                        className='hidden md:flex w-[100px] h-[100px] items-center justify-center gap-6 bg-white border border-[#CCCCCC] rounded-[21.43px] cursor-pointer'>
                                        <Gmail/> 
                                    </div>
                                    <div className='flex flex-col text-[#666] text-2xl text-left'>
                                        <div className="flex flex-col font-semibold w-[280px] leading-[1.20]">
                                            <div className='hidden md:flex'>{t("Home.gmailDescription")}</div>
                                            <div className='hidden md:flex'>{t("Home.gmailDescription2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Version */}
                        <div 
                            className='flex flex-col items-left gap-5 md:hidden'>
                            <div className='flex flex-row'>
                                <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('whatsapp')}>
                                    <div 
                                        className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'>
                                        <MobileWhatsApp />
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm'>
                                        <div className="flex flex-col text-left w-[190px] font-semibold leading-[1.20]">
                                            <div className='block'>{t("Home.whatsappDescriptionMobile")}</div>
                                            <div className='block'>{t("Home.whatsappDescriptionMobile2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row'>
                                <div className='flex gap-5 items-center cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                                    <div 
                                        className='flex flex-row w-[50px] h-[50px] items-center justify-center bg-white border border-[#CCCCCC] rounded-[10.71px] cursor-pointer'>
                                        <MobileGmail/>
                                    </div>
                                    <div className='flex flex-col text-[#666] text-sm'>
                                        <div className="flex flex-col w-[170px] font-semibold text-left leading-[1.20]">
                                            <div className='block'>{t("Home.gmailDescriptionMobile")}</div>
                                            <div className='block'>{t("Home.gmailDescriptionMobile2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div> 
    )
}
export default Products;