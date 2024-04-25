import React from 'react';
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
import Meta_Editor from'../Assets/Images/Meta_Editor.png';
import Meta_Editor_Interface from'../Assets/Images/Meta_Editor_Interface.png';
import TT_Pay from'../Assets/Images/TT_Pay.png';
import TT_Pay_Interface from'../Assets/Images/TT_Pay_Interface.png';
import { WhatsApp, Gmail } from '../Components/Brand.jsx';
import {useState} from 'react';
import ButtonComponent from '../Components/ButtonComponent.jsx';

const Products = () => {

const [openButton, setOpenButton] = useState(false);
const [selectedButton, setSelectedButton] = useState(null);

const handleButtonClick = (button) => {
    setOpenButton(true);
    setSelectedButton(button);
};

    return (
        <div>
            <div className='Product_Video'>
                <video autoPlay muted playsInline loop className='w-full'>
                    <source src="\assets\videos\JobView.mp4" type="video/mp4"/>
                </video>

                <div className='absolute right-[100px] bottom-[100px] flex flex-col text-white text-right gap-5'>
                    <span className='text-5xl font-bold'>Developed </span>
                    <div className='flex flex-col text-4xl font-medium'>
                        <span>Development must go through drafting </span>
                        <span>frameworks, understanding details,</span>
                        <span>detailed communication, careful</span>
                        <span>planning, rigorous testing before it can</span>
                        <span>become a finished product.</span>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[200px]'>
                        <div className='flex flex-col md:gap-[200px]'>
                            <div className='flex flex-col gap-10'>
                                <div className='md:w-[863px] text-5xl font-bold text-left'>
                                High-quality products developed through cutting-edge technology
                                </div>
                                <div className='text-[#666] text-4xl font-medium text-left md:w-[1000px]'>
                                <span className='text-orange-400 text-[64px]'>Yes,</span> 
                                    we have meticulously developed software in these fields, and our 
                                    collaboration with businesses in these sectors is indispensable. 
                                    That's why we translate the most outstanding ideas from our technical 
                                    engineers into the most innovative creations and find more effective 
                                    solutions for our customers.
                                </div>
                            </div>

                             <div className='flex flex-col'>
                                <div className='w-full h-[1px] bg-[#333]'></div>
                                <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='max-w-[1000px] w-full mt-[200px]'>
                        <div className='flex flex-col md:gap-[200px]'>
                            <div className='text-8xl font-bold text-center '>
                                EDUCATION
                                <div className='text-[#666] text-2xl font-medium text-center '>
                                    Kindergarten | Primary | Secondary | University | Tuition Centre
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={Parents} alt="KinderTown_Parent"/>
                                    <div className='text-base font-bold text-center'>
                                        Kindertown <br />Parent
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={Teacher} alt="KinderTown_Teacher"/>
                                    <div className='text-base font-bold text-center '>
                                        Kindertown <br />Teacher
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={Admin} alt="KinderTown_Admin"/>
                                    <div className='text-base font-bold text-center '>
                                        Kindertown <br />Admin
                                    </div>
                                </div>
                                
                                
                            </div>

                            <div class="w-[62.5rem] h-[29.44rem] shrink-0">
                                <img src={Devices} alt="Devices" />
                            </div>

                            <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                            A child's learning journey begins in the classroom, using tools that are flexible, 
                            user-friendly, prioritize privacy, accessibility, and sustainability. That's why 
                            we have developed this product for education, enabling parents, teachers, and school 
                            owners to better understand their child's growth in kindergarten. Additionally, we are 
                            in the process of developing a series of educational software for primary schools, 
                            secondary schools, universities, and tuition centres in the future.
                            </div>
                            
                            
                            <div className='flex flex-col'>
                                <div className='w-full h-[1px] bg-[#333]'></div>
                                <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    ATTENDANCE
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                        Business | Company | Enterprise | Industries
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <img src={Mocap} alt="Mocap" />
                                        <div className='text-base font-bold text-center '>
                                            MOCAP
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <img src={Mocap_Interface} alt="User Interface" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                    In the current corporate landscape, businesses are confronted with challenges 
                                    such as inconsistent employee efficiency, talent attrition, and cost management. 
                                    Therefore, we have meticulously developed reward mechanisms and recognition programs 
                                    to assist companies in addressing these challenges effectively. The Moment Seize not 
                                    only significantly boosts employee productivity but also enhances morale and output 
                                    quality. Moreover, we firmly believe that recognizing and rewarding employees fosters 
                                    a positive organizational culture, where employees feel supported and appreciated in 
                                    their roles, thus aiding in mitigating talent turnover.
                                </div>

                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>


            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    FINANCIAL
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                        MetaTrader 4 | MetaTrader 5 | cTrader
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <img src={Smart_Dash} alt="Smart Dash" />
                                            <div className='text-base font-bold text-center '>
                                                Smart Dash
                                            </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <img src={Smart_Dash_Interface} alt="Smart Dash User Interface" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                    In the current corporate landscape, businesses are confronted with challenges 
                                    such as inconsistent employee efficiency, talent attrition, and cost management. 
                                    Therefore, we have meticulously developed reward mechanisms and recognition programs 
                                    to assist companies in addressing these challenges effectively. The Moment Seize not 
                                    only significantly boosts employee productivity but also enhances morale and output 
                                    quality. Moreover, we firmly believe that recognizing and rewarding employees fosters 
                                    a positive organizational culture, where employees feel supported and appreciated in 
                                    their roles, thus aiding in mitigating talent turnover.
                                </div>

                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    MANAGEMENT
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                        CopyTrading | Percentage Allocation Management Module (PAMM)
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <img src={Financial_Board} alt="Financial Board" />
                                        <div className='text-base font-bold text-center '>
                                            Financial Board
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center'>
                                    <img src={Financial_Board_Interface} alt="Financial Board User Interface" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                We fully understand that as a highly skilled and renowned trader, managing 
                                numerous investors and substantial funds requires not only delivering 
                                substantial and objective investment returns but also maintaining strict risk 
                                management in investments. Therefore, traders inevitably require a sophisticated 
                                and intelligent financial trading fund management system. Our proficient IT team 
                                is fully capable of undertaking the development of such a system. We have not only 
                                added personalized design to the dashboard but also incorporated simple and easy-to-operate 
                                modes, ensuring that investors and traders need not worry about encountering operational 
                                difficulties due to lack of understanding.
                                </div>

                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    LABEL SOLUTION
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                    Full Label Apply | Integration | Licensing | CRM Portal | Servicing
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                <div className='flex flex-col'>
                                    <img src={Meta_Trader_4} alt="Meta_Trader_4" className="m-9" />
                                    <div className='text-base font-bold text-center'>
                                        MetaTrader4
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <img src={Meta_Trader_5} alt="Meta_Trader_5" className="m-9" />
                                    <div className='text-base font-bold text-center '>
                                        MetaTrader5
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <img src={cTrader} alt="cTrader" className="m-9" />
                                    <div className='text-base font-bold text-center '>
                                        cTrader
                                    </div>
                                </div>
                                </div>
                                <div className='flex justify-center'>
                                    <img src={Trader_Interface} alt="Trader_Interface" />
                                </div>
                                <div className='flex justify-center'>
                                    <img src={Trader_Interface_1} alt="Trader_Interface_1" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                Not only do we seamlessly integrate the trading platform interface with our 
                                intelligent backend, but we also offer Metaquote (MT5) and cTrader white label 
                                and main label solutions. The advantage of our one-stop service ensures that 
                                you are relieved of many unnecessary hassles and allows you to accelerate the 
                                launch of operations, avoiding missing the absolute best timing for operations.
                                </div>

                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    META EDITOR
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                        MQL4 EA | MQL5 EA | cTrader EA | Automate Trading
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <img src={Meta_Editor} alt="Meta_Editor" />
                                        <div className='text-base font-bold text-center '>
                                            Meta Editor
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center'>
                                    <img src={Meta_Editor_Interface} alt="Meta Editor Interface" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                This is undoubtedly great news for traders, as the widespread use of AI is 
                                becoming an inevitable trend. Many investment firms and top traders have 
                                begun to adopt AI automated trading systems, and we specialize in the 
                                development of such intelligent trading systems. We can fully transform 
                                the mindset and strategies of top traders into AI trading systems and apply 
                                them to trading on MetaTrader 4, MetaTrader 5, and cTrader trading platforms.
                                </div>

                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <div>
                <div className='w-full flex flex-col items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[200px]'>
                            <div className='flex flex-col md:gap-[200px]'>
                                <div className='text-8xl font-bold text-center'>
                                    CRYPTO WALLET
                                    <div className='text-[#666] text-2xl font-medium text-center '>
                                        Crypto Payment Solution | Crypto Payment Gateway
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col'>
                                        <img src={TT_Pay} alt="TT_Pay" />
                                        <div className='text-base font-bold text-center '>
                                            TTPAY
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex justify-center'>
                                    <img src={TT_Pay_Interface} alt="TT_Pay_Interface" />
                                </div>

                                <div className='text-[#666] text-4xl font-medium text-left md:w-[950px]'>
                                    Many multinational operating companies conduct business through websites, 
                                    and even investment firms are not limited to operating solely within their 
                                    own countries. Therefore, it is essential to have a comprehensive and highly 
                                    secure payment system. The TTPAY payment system not only addresses the 
                                    challenges of cross-border payments but also significantly enhances the security 
                                    advantages for merchants. Moreover, the application for a TTPAY payment system 
                                    account is free.
                                </div>
                                
                                <div className='flex flex-col'>
                                    <div className='w-full h-[1px] bg-[#333]'></div>
                                    <div className='flex flex-col md:gap-[150px] md:mt-[50px]'></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>



            <div>
                <div className='w-full flex flex-col gap-[66px] my-[150px] items-center justify-center'>
                        <div className='max-w-[1000px] w-full mt-[80px]'>
                            <div className='flex flex-col md:gap-[50px]'>
                                <div className='text-5xl font-bold text-left'>
                                    No matter what field or industry you're in
                                </div>
                                <div className='flex flex-col text-[#666] text-4xl font-medium text-left'>
                                    <span>having your own intelligent system is worth it. Don't </span>
                                    <span>hesitate to contact us for efficient solutions tailored just  </span>
                                    <span>for you. </span>
                                </div>

                                <div 
                                    className='flex items-center gap-10'>
                                    <div 
                                    className=' w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('whatsapp')}>
                                        <WhatsApp/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Show QR to start</span>
                                            <span>communicate with us</span>
                                        </div>
                                    </div>
                                    <div 
                                    className='w-[280px] h-[70px] flex items-center gap-6 bg-white border border-white rounded-[15px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] px-6 py-4 cursor-pointer'
                                    onClick={() => handleButtonClick('gmail')}>
                                        <Gmail/>
                                        <div className='flex flex-col text-[#666] text-base font-medium text-left'>
                                            <span>Don't hesitate!</span>
                                            <span>Send us a message</span>
                                        </div>
                                    </div>
                                </div>
                                <ButtonComponent open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
                            </div>
                        </div>
                        <div id="Button_Component" class="fixed inset-0 flex justify-center z-50 items-center transition-colors invisible"></div>
                </div>
            </div>

        </div>
    )
}

export default Products;