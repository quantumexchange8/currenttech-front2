import React from 'react';
import { useEffect, useState } from 'react'
import CT_Logo from '../Assets/Images/CurrentTech_Logo.png'
import X from '../Assets/Images/X.png'
import {Tab} from '@headlessui/react'
import { WhatsApp, Gmail } from './Brand.jsx'
import QRcode from '../Assets/Images/QRCode.png'
import mobile_whatsapp from '../Assets/Images/mobile_whatsapp.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyButton({ open, onClose, selectedButton}) {
  const [selectedTab, setSelectedTab] = useState(selectedButton);
  const [whatsappContent, setWhatsappContent] = useState({});// Define state for the content of each tab
  const [gmailContent, setGmailContent] = useState({});

useEffect(() => {
    
    if (selectedTab === 'whatsapp') {
        // Update content based on selectedTab and screen width
        if (window.innerWidth <= 768) { // Adjust the threshold as needed
            setWhatsappContent({
                title: 'Instant chat now',
                description: 'Press direct link to whatsapp chat with our customer service representative for more details.'
            });
        } else {
            setWhatsappContent({
                title: 'Instant chat now',
                description: 'Scan the QR code with your device\'s camera to chat with our customer service representative for more details.'
            });
        }

    } else if (selectedTab === 'gmail') {
        //Update content based on selectedTab
        setGmailContent({
            title: 'Send us a message',
            description: 'Welcome to Current Tech contact us page.'
        });
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
        <div onClick={(e) => e.stopPropagation()} className={`px-4 md:px-7 py-4 md:py-7 w-[353px md:w-[500px] ] ${
            selectedTab === 'whatsapp' ? 'h-[500px] md:h-[800px]' :
            selectedTab === 'gmail' ? 'h-[810px] md:h-[930px]' :
            ''} ease-out duration-100 bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
          <div className="flex flex-col gap-8">
            <div className='flex flex-col gap-4'>
                <div className="relative">
                    <div className="flex justify-center items-center">
                        <div className="rounded-[20px] flex justify-center">
                            <img className="w-[70px] md:w-[99px]" src={CT_Logo} alt="icon"/>
                        </div>
                        <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                          <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    
                      <div className="flex w-[196px] md:w-[262px] flex-col justify-center flex-shrink-0 text-black text-center text-[24px] md:text-[32px] font-bold ">
                        {selectedTab === 'whatsapp' && whatsappContent.title}
                      </div>
                      <div className="flex w-[226px] md:w-[302px] flex-col justify-center flex-shrink-0 text-black text-center text-[24px] md:text-[32px] font-bold ">
                        {selectedTab === 'gmail' && gmailContent.title}
                      </div>
                      <div className="flex w-[210px] md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[14px] md:text-[16px] font-medium leading-normal">
                        {selectedTab === 'whatsapp' && whatsappContent.description}
                      </div>
                      <div className="flex w-[170px] md:w-[195px] flex-col justify-center flex-shrink-0 text-black text-center text-[14px] md:text-[16px] font-medium leading-normal">
                        {selectedTab === 'gmail' && gmailContent.description}   
                      </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center gap-[30px] md:gap-12'>
              <Tab.Group >
                <Tab.List className="w-[300px] md:w-[410px] h-[48px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
                    <Tab key="whatsapp" className={({ selected }) =>
                        classNames(
                            'w-[147px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
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
                            'w-[147px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
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
                <div className="md:block">
                    <Tab.Panels>
                        <Tab.Panel
                            key="whatsapp"
                            className={classNames(
                            'bg-white',
                            'ring-white/60 '
                            )}
                        >
                            <div className="hidden md:flex w-[300px] h-[300px] flex-shrink-0 rounded-[50px]">
                            <img src={QRcode} alt="whatsapp code"/>
                            </div>

                            {/* mobile view */}
                            <div className="w-[201px] h-[150px] flex-shrink-0 rounded-[50px] md:hidden">
                            <img src={mobile_whatsapp} alt="mobile whatsapp"/>
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
                                <form className="flex flex-col justify-center items-center gap-5 md:gap-8 w-[353px] md:w-[500px]">  
                                    <div className="flex flex-col items-center gap-2.5 md:gap-[10px]">
                                        <label for="name" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Your Name
                                        </label>
                                        <input type="name" id="name" className="w-[300px] md:w-[410px] h-[40px] md:h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3 text-[14px] md:text-[16px]" required=""/>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <label for="email" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Email
                                        </label>
                                        <input type="email" id="email" className="w-[300px] md:w-[410px] h-[40px] md:h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <label for="textarea" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Message
                                        </label>
                                        <textarea className="resize-none w-[300px] md:w-[410px] h-[230px] md:h-[200px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""></textarea>
                                    </div>
                                    
                                    <div className="send-button">
                                        <button type="submit" className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br bg-[black] text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
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
          <div onClick={(e) => e.stopPropagation()} className={`px-4 md:px-7 py-4 md:py-7 w-[353px md:w-[500px] ] ${
            selectedTab === 'whatsapp' ? 'h-[500px] md:h-[800px]' :
            selectedTab === 'gmail' ? 'h-[810px] md:h-[930px]' :
            ''} ease-out duration-100 bg-white rounded-[20px] rounded-md[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <div className="flex flex-col gap-8">
              <div className='flex flex-col gap-4'>
                  <div className="relative">
                      <div className="flex justify-center items-center">
                          <div className="rounded-[20px] flex justify-center">
                              <img className="w-[70px] md:w-[99px]" src={CT_Logo} alt="icon"/>
                          </div>
                          <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                            <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>
                          </button>
                      </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                  <div className="flex w-[196px] md:w-[262px] flex-col justify-center flex-shrink-0 text-black text-center text-[24px] md:text-[32px] font-bold ">
                        {selectedTab === 'whatsapp' && whatsappContent.title}
                      </div>
                      <div className="flex w-[226px] md:w-[302px] flex-col justify-center flex-shrink-0 text-black text-center text-[24px] md:text-[32px] font-bold ">
                        {selectedTab === 'gmail' && gmailContent.title}
                      </div>
                      <div className="flex w-[210px] md:w-[300px] flex-col justify-center flex-shrink-0 text-black text-center text-[14px] md:text-[16px] font-medium leading-normal">
                        {selectedTab === 'whatsapp' && whatsappContent.description}
                      </div>
                      <div className="flex w-[170px] md:w-[195px] flex-col justify-center flex-shrink-0 text-black text-center text-[14px] md:text-[16px] font-medium leading-normal">
                        {selectedTab === 'gmail' && gmailContent.description}   
                      </div>
                  </div>
              </div>
              <div className='w-full flex flex-col items-center gap-[30px] md:gap-12'>
                <Tab.Group >
                  <Tab.List className="w-[300px] md:w-[410px] h-[48px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
                    <Tab
                        key="gmail"
                        className={({ selected }) =>
                        classNames(
                            'w-[147px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
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
                            'w-[147px] md:w-[201px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
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
                  <div className="md:block">
                      <Tab.Panels>
                      <Tab.Panel
                              key="gmail"
                              className={classNames(
                              ' bg-white',
                              'ring-white/60'
                              )}
                          >
                              <div>
                                <form className="flex flex-col justify-center items-center gap-5 md:gap-8 w-[353px] md:w-[500px]">
                                    <div className="flex flex-col items-center gap-2.5 md:gap-[10px]">
                                        <label for="name" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Your Name
                                        </label>
                                        <input type="name" id="name" className="w-[300px] md:w-[410px] h-[40px] md:h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3 text-[14px] md:text-[16px]" required=""/>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <label for="email" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Email
                                        </label>
                                        <input type="email" id="email" className="w-[300px] md:w-[410px] h-[40px] md:h-[50px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""/>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <label for="textarea" className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-medium text-[14px] md:text-[16px]">
                                            Message
                                        </label>
                                        <textarea className="resize-none w-[300px] md:w-[410px] h-[230px] md:h-[200px] flex-shrink-0 rounded-[5px] bg-[#DDD] px-3" required=""></textarea>
                                    </div>
                                
                                    <div className="send-button">
                                        <button type="submit" className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br bg-[black] text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold">
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
                              <div className="hidden md:flex w-[300px] h-[300px] flex-shrink-0 rounded-[50px]">
                              <img src={QRcode} alt="whatsapp code"/>
                              </div>
                              <div className="w-[201px] h-[150px] flex-shrink-0 rounded-[50px] md:hidden">
                                <img src={mobile_whatsapp} alt="mobile whatsapp"/>
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