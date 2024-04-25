import React from 'react';
import { useEffect, useState } from 'react'
import CT_Logo from '../Assets/Images/CurrentTech_Logo.png'
import X from '../Assets/Images/X.png'
import {Tab} from '@headlessui/react'
import { WhatsApp, Gmail } from './Brand.jsx'
import QRcode from '../Assets/Images/QRCode.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyButton({ open, onClose, selectedButton}) {
  const [selectedTab, setSelectedTab] = useState(selectedButton);
  const [panelHeight, setPanelHeight] = useState(); // Default height for whatsapp panel

  // Define state for the content of each tab
const [whatsappContent, setWhatsappContent] = useState({});

const [gmailContent, setGmailContent] = useState({});

// Inside the useEffect hook that updates panelHeight based on selectedTab
useEffect(() => {
    
    if (selectedTab === 'whatsapp') {
        //Update content based on selectedTab
        setWhatsappContent({
            title: 'Instant chat now',
            description: 'Scan the QR code with your device\'s camera to chat with our customer service representative for more details.'
        });
        setPanelHeight('750px'); // Update panelHeight based on selectedTab

    } else if (selectedTab === 'gmail') {
        //Update content based on selectedTab
        setGmailContent({
            title: 'Send us a message',
            description: 'Welcome to Current Tech contact us page.'
        });
        setPanelHeight('930px');  // Update panelHeight based on selectedTab
    }
}, [selectedTab]);

// Update selected tab when selected button changes
useEffect(() => {
    setSelectedTab(selectedButton);
}, [selectedButton]);


  return (
    <div 
    id='Button_Component'
    onClick={onClose}
    className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      {selectedButton === 'whatsapp' && (
        <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[500px]] ease-out duration-100 height: panelHeight bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`} style={{ height: panelHeight }}>
          <div className="flex flex-col gap-8">
            <div className='flex flex-col gap-4'>
                <div className="relative">
                    <div className="flex justify-center items-center">
                        <div className="rounded-[20px] flex justify-center">
                            <img className="w-[99px]" src={CT_Logo} alt="icon"/>
                        </div>
                        <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                          <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                    
                      <div class="flex md:w-[262px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] font-bold ">
                        {selectedTab === 'whatsapp' && whatsappContent.title}
                      </div>
                      <div class="flex md:w-[302px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] font-bold ">
                        {selectedTab === 'gmail' && gmailContent.title}
                      </div>
                      <div class="flex md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] font-medium leading-normal">
                        {selectedTab === 'whatsapp' && whatsappContent.description}
                      </div>
                      <div class="flex md:w-[195px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] font-medium leading-normal">
                        {selectedTab === 'gmail' && gmailContent.description}   
                      </div>
                </div>
            </div>
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
                            'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
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
                    <Tab.Panels>
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
                                <form class="flex flex-col justify-center items-center gap-8">
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="name" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Your Name
                                        </label>
                                        <input type="name" id="name" class="w-[410px] h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="email" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Email
                                        </label>
                                        <input type="email" id="email" class="w-[410px] h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="textarea" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Message
                                        </label>
                                        <textarea class="resize-none w-[410px] h-[200px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""></textarea>
                                    </div>
                                    
                                    <div class="send-button">
                                        <button type="submit" class="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br bg-[black] text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
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
          </div>
        </div>
        )}

        {selectedButton === 'gmail' && (
          <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[500px] ease-out duration-100 bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`} style={{ height: panelHeight }}>
            <div className="flex flex-col gap-8">
              <div className='flex flex-col gap-4'>
                  <div className="relative">
                      <div className="flex justify-center items-center">
                          <div className="rounded-[20px] flex justify-center">
                              <img className="w-[99px]" src={CT_Logo} alt="icon"/>
                          </div>
                          <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                            <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
                          </button>
                      </div>
                  </div>
                  <div class="flex flex-col items-center gap-3">
                  <div class="flex md:w-[262px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] font-bold ">
                        {selectedTab === 'whatsapp' && whatsappContent.title}
                      </div>
                      <div class="flex md:w-[302px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] font-bold ">
                        {selectedTab === 'gmail' && gmailContent.title}
                      </div>
                      <div class="flex md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] font-medium leading-normal">
                        {selectedTab === 'whatsapp' && whatsappContent.description}
                      </div>
                      <div class="flex md:w-[195px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] font-medium leading-normal">
                        {selectedTab === 'gmail' && gmailContent.description}   
                      </div>
                  </div>
              </div>
              <div className='w-full flex flex-col items-center gap-12'>
                <Tab.Group >
                  <Tab.List className="w-[410px] md:w-[410px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
                    <Tab
                        key="gmail"
                        className={({ selected }) =>
                        classNames(
                            'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
                            selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]', 'order-last'
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
                    <Tab key="whatsapp" className={({ selected }) =>
                        classNames(
                            'w-[201px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
                            selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                        )
                        } 
                        onClick={() => setSelectedTab('whatsapp')} // Set selectedTab to 'whatsapp' when clicked
                    >
                        <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
                            <WhatsApp/>  
                            <div className="flex w-[101px] flex-col justify-center flex-shrink-0 text-center md:text-[20px] font-bold">
                                Whatsapp
                            </div>
                        </div>
                    </Tab>
                  </Tab.List>
                  <div className="hidden sm:block">
                      <Tab.Panels className="mt-[8px]">
                      <Tab.Panel
                              key="gmail"
                              className={classNames(
                              ' bg-white',
                              'ring-white/60'
                              )}
                          >
                              <div>
                                <form class="flex flex-col justify-center items-center gap-8">
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="name" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Your Name
                                        </label>
                                        <input type="name" id="name" class="w-[410px] h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="email" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Email
                                        </label>
                                        <input type="email" id="email" class="w-[410px] h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div class="flex flex-col items-center gap-[10px]">
                                        <label for="textarea" class="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium">
                                            Message
                                        </label>
                                        <textarea class="resize-none w-[410px] h-[200px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""></textarea>
                                    </div>
                                
                                    <div class="send-button">
                                        <button type="submit" class="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br bg-[black] text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                          </Tab.Panel>
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
                      </Tab.Panels>
                  </div>
                </Tab.Group>
                </div>
            </div>
          </div>
        )}
    </div>
  )
}




// import React from 'react';
// import { Dialog, Transition } from '@headlessui/react'
// import { useEffect, useState } from 'react'
// import CT_Logo from '../Assets/Images/CurrentTech_Logo.png'
// import X from '../Assets/Images/X.png'
// import Tab_Component from '../Components/Tab'
// import QRcode from '../Assets/Images/QRCode.png'

// export default function MyButton({ open, onClose, selectedButton}) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [panelHeight, setPanelHeight] = useState('770px'); // Default height for whatsapp panel

//   useEffect(() => {
//     // Update panel height based on selected tab
//     setPanelHeight(selectedButton === 'whatsapp' ? '1042px' : '770px');
//   }, [selectedButton]);
  
//   function closeButton() {
//     setIsOpen(false)
//   }

//   function openButton() {
//     setIsOpen(true)
//   }

//   return (
//     <div 
//     id='Button_Component'
//     onClick={onClose}
//     className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
//       {selectedButton === 'whatsapp' && (
//         <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[500px] h-[${panelHeight}] bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
//           <div className="flex flex-col gap-8">
//             <div className='flex flex-col gap-4'>
//                 <div className="relative">
//                     <div className="flex justify-center items-center">
//                         <div className="rounded-[20px] flex justify-center">
//                             <img className="w-[99px]" src={CT_Logo} alt="icon"/>
//                         </div>
//                         <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
//                           <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
//                         </button>
//                     </div>
//                 </div>
//                 <div class="flex flex-col items-center gap-3">
                    
//                       <div class="flex w-[302px] md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] md:text-[36px] font-bold ">
//                         Instant chat now
//                       </div>
//                       <div class="flex w-[195px] md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] md:text-[16px] font-medium leading-normal">
//                         Scan the QR code with your device's camera to chat with our customer service representative for more details.
//                       </div>
//                 </div>
//             </div>
//             <Tab_Component></Tab_Component>
//           </div>
          
//         </div>
//         )}

//         {selectedButton === 'gmail' && (
//           <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[500px] h-[${panelHeight}] bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
//             <div className="flex flex-col gap-8">
//               <div className='flex flex-col gap-4'>
//                   <div className="relative">
//                       <div className="flex justify-center items-center">
//                           <div className="rounded-[20px] flex justify-center">
//                               <img className="w-[99px]" src={CT_Logo} alt="icon"/>
//                           </div>
//                           <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
//                             <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
//                           </button>
//                       </div>
//                   </div>
//                   <div class="flex flex-col items-center gap-3">
//                     <div class="flex w-full md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[32px] md:text-[36px] font-bold ">
//                       <span>Send us a message</span> 
//                     </div>
//                     <div class="flex w-[195px] md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] md:text-[16px] font-medium leading-normal">
//                       <span>Welcome to Current Tech</span> 
//                       <span>contact us page</span>
//                     </div>
//                   </div>
//               </div>
//               <Tab_Component></Tab_Component>
//             </div>
//           </div>
//         )}
//     </div>
//   )
// }