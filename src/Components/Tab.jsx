import {useState} from 'react'
import {Tab} from '@headlessui/react'
import { WhatsApp, Gmail } from '../Components/Brand.jsx'
import QRcode from '../Assets/Images/QRCode.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('whatsapp'); // Initialize selectedTab state

  return (
    <div className='w-full flex flex-col items-center gap-12'>
      <Tab.Group >
        <Tab.List className="w-[410px] md:w-[410px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
            <Tab key="whatsapp" className={({ selected }) =>
                classNames(
                    'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                } onClick={() => setSelectedTab('whatsapp')} // Set selectedTab to 'whatsapp' when clicked
            >
                <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
                    <WhatsApp/>  
                    <div className="flex w-[101px] flex-col justify-center flex-shrink-0 text-center md:text-[20px] font-bold">
                        Whatsapp
                    </div>
                </div>

            </Tab>
            <Tab
                key="gmail"
                className={({ selected }) =>
                classNames(
                    'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]',
                    'ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                }
                onClick={() => setSelectedTab('gmail')} // Set selectedTab to 'gmail' when clicked
            >
                <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
                    <Gmail/>  
                    <div className="flex w-[101px] flex-col justify-center flex-shrink-0 text-center md:text-[20px] font-bold">
                        Send Mail
                    </div>
                </div>
                
            </Tab>
        </Tab.List>
        <div className="hidden sm:block">
            <Tab.Panels className="mt-[8px]">
                <Tab.Panel
                    key="whatsapp"
                    className={classNames(
                    'bg-white',
                    'ring-white/60 '
                    )}
                >
                    <div className="w-[300px] h-[300px] flex-shrink-0 rounded-[50px]">
                    <img src={QRcode} alt="whatsapp code"/>
                    </div>
                </Tab.Panel>
                <Tab.Panel
                    key="gmail"
                    className={classNames(
                    ' bg-white',
                    'ring-white/60'
                    )}
                >
                    <div>
                        <form class="flex flex-col justify-center items-center gap-12">
                            <div class="flex flex-col items-center gap-5 md:gap-[30px]">
                                <div class="flex flex-col items-center gap-[10px]">
                                    <label for="name" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                        Your Name
                                    </label>
                                    <input type="name" id="name" class="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3" required="" value=""/>
                                </div>
                                <div class="flex flex-col items-center gap-[10px]">
                                    <label for="email" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                        Email
                                    </label>
                                    <input type="email" id="email" class="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3" required="" value=""/>
                                </div>
                                <div class="flex flex-col items-center gap-[10px]">
                                    <label for="textarea" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                        Message
                                    </label>
                                    <textarea class="resize-none w-[223.36px] h-[139.6px] md:w-[320px] md:h-[200px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3 py-3" required=""></textarea>
                                </div>
                            </div>
                            <div class="send-button">
                                <button type="submit" class="w-[139.6px] h-[34.9px] md:w-[200px] md:h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}




        {/* <div className="sm:hidden">
            <div className="flex w-full justify-center"> */}
            {/* w-[256px] h-[256px] flex-shrink-0 rounded-[50px] flex mx-[122px] mb-[48px] mt-[50px] */}
                {/* <img className="w-[60px] h-[50.4px]" src={DownloadPhone} alt="Download Phone Icon" style={{ cursor: 'pointer' }}/> */}
            {/* </div>
        </div> */}


        // import {useState} from 'react'
        // import {Tab} from '@headlessui/react'
        // import { WhatsApp, Gmail } from '../Components/Brand.jsx'
        // import QRcode from '../Assets/Images/QRCode.png'
        
        // function classNames(...classes) {
        //   return classes.filter(Boolean).join(' ');
        // }
        
        // export default function Example() {
        //   const [selectedTab, setSelectedTab] = useState('whatsapp'); // Initialize selectedTab state
        
        //   return (
        //     <div className='w-full flex flex-col items-center gap-12'>
        //       <Tab.Group >
        //         <Tab.List className="w-[410px] md:w-[410px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
        //             <Tab key="whatsapp" className={({ selected }) =>
        //                 classNames(
        //                     'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
        //                     selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
        //                 )
        //                 } onClick={() => setSelectedTab('whatsapp')} // Set selectedTab to 'whatsapp' when clicked
        //             >
        //                 <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
        //                     <WhatsApp/>  
        //                     <div className="flex w-[101px] flex-col justify-center flex-shrink-0 text-center md:text-[20px] font-bold">
        //                         Whatsapp
        //                     </div>
        //                 </div>
        
        //             </Tab>
        //             <Tab
        //                 key="gmail"
        //                 className={({ selected }) =>
        //                 classNames(
        //                     'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]',
        //                     'ring-white/60',
        //                     selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
        //                 )
        //                 }
        //                 onClick={() => setSelectedTab('gmail')} // Set selectedTab to 'gmail' when clicked
        //             >
        //                 <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
        //                     <Gmail/>  
        //                     <div className="flex w-[101px] flex-col justify-center flex-shrink-0 text-center md:text-[20px] font-bold">
        //                         Send Mail
        //                     </div>
        //                 </div>
                        
        //             </Tab>
        //         </Tab.List>
        //         <div className="hidden sm:block">
        //             <Tab.Panels className="mt-[8px]">
        //                 <Tab.Panel
        //                     key="whatsapp"
        //                     className={classNames(
        //                     'bg-white',
        //                     'ring-white/60 '
        //                     )}
        //                 >
        //                     <div className="w-[300px] h-[300px] flex-shrink-0 rounded-[50px]">
        //                     <img src={QRcode} alt="whatsapp code"/>
        //                     </div>
        //                 </Tab.Panel>
        //                 <Tab.Panel
        //                     key="gmail"
        //                     className={classNames(
        //                     ' bg-white',
        //                     'ring-white/60'
        //                     )}
        //                 >
        //                     <div>
        //                         <form class="flex flex-col justify-center items-center gap-12">
        //                             <div class="flex flex-col items-center gap-5 md:gap-[30px]">
        //                                 <div class="flex flex-col items-center gap-[10px]">
        //                                     <label for="name" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
        //                                         Your Name
        //                                     </label>
        //                                     <input type="name" id="name" class="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3" required="" value=""/>
        //                                 </div>
        //                                 <div class="flex flex-col items-center gap-[10px]">
        //                                     <label for="email" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
        //                                         Email
        //                                     </label>
        //                                     <input type="email" id="email" class="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3" required="" value=""/>
        //                                 </div>
        //                                 <div class="flex flex-col items-center gap-[10px]">
        //                                     <label for="textarea" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
        //                                         Message
        //                                     </label>
        //                                     <textarea class="resize-none w-[223.36px] h-[139.6px] md:w-[320px] md:h-[200px] flex-shrink-0 rounded-[10px] bg-[#DDD] px-3 py-3" required=""></textarea>
        //                                 </div>
        //                             </div>
        //                             <div class="send-button">
        //                                 <button type="submit" class="w-[139.6px] h-[34.9px] md:w-[200px] md:h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
        //                                     Send
        //                                 </button>
        //                             </div>
        //                         </form>
        //                     </div>
        //                 </Tab.Panel>
        //             </Tab.Panels>
        //         </div>
        //       </Tab.Group>
        //     </div>
        //   );
        // }