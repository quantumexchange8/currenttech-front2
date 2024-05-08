import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Gmail, WhatsApp } from './Brand';
import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabComponent({ selectedButton }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedButton === 'whatsapp') {
      setTitle('Instant chat now');
      setContent('Scan the QR code with your device/s camera to chat with our customer service representative for more details.');
    } else if (selectedButton === 'gmail') {
      setTitle('Send us a message');
      setContent('Welcome to Current Tech contact us page');
    }
  }, [selectedButton]);

  return (
    <div className="w-full max-w-md flex flex-col gap-[50px]">
      <div className='flex flex-col items-center gap-2'>
        <div className="text-black text-center text-[20px] md:text-3xl font-bold">
          {title}
        </div>

        <div className="text-black text-center text-[12px] md:text-base font-medium">
          {content}
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="flex rounded-xl bg-[#CCC] p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center gap-4 w-full rounded-lg py-2. px-6 5 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected ? 'bg-white text-black shadow' : 'text-[#888] hover:bg-white/[0.12] hover:text-white'
              )
            }
            onClick={() => {}}
          >
            <WhatsApp /> <span className='text-xl font-bold'>Whatsapp</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center gap-4 w-full rounded-lg py-2.5 px-6  text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected ? 'bg-white text-black shadow' : 'text-[#888] hover:bg-white/[0.12] hover:text-white'
              )
            }
            onClick={() => {}}
          >
            <Gmail /> <span className='text-xl font-bold'>Send Mail</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white flex justify-center',
              'ring-white/60 ring-offset-2 ring-offset-blue-400'
            )}
          >
            <img src={QRcode} alt="qr code" />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white flex justify-center',
              'ring-white/60 ring-offset-2 ring-offset-blue-400'
            )}
          >
            {selectedButton === 'gmail' && <SubmitEmail />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
