import React, { useState, useEffect, useContext } from 'react';
import { Gmail, WhatsApp, FormWhatsApp } from './Brand';
import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';
import WhatsappMobile from '../Assets/Images/mobile_whatsapp.png'
import { useMediaQuery } from 'react-responsive'
import { LanguageContext } from "../LanguagesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabComponent({ selectedButton }) {
  const {t} = useContext(LanguageContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedButton === 'whatsapp') {
      setTitle(t("WhatsappForm.whatsappFormTitle"));
      setContent(isMobile ? <>
        <span>{t("WhatsappForm.mobileWhatsappFormDescription")}</span><br />
        <span>{t("WhatsappForm.mobileWhatsappFormDescription2")}</span>
      </> :<>
      <span>{t("WhatsappForm.whatsappFormDescription")}</span><br />
      <span>{t("WhatsappForm.whatsappFormDescription2")}</span><br />
      <span>{t("WhatsappForm.whatsappFormDescription3")}</span>
    </>);
    } else if (selectedButton === 'gmail') {
      setTitle(t("MailForm.mailFormTitle"));
      setContent(isMobile ? <>
        <span>{t("MailForm.mobileMailFormDescription")}</span><br />
        <span>{t("MailForm.mobileMailFormDescription2")}</span><br />
      </> : <>
      <span>{t("MailForm.mailFormDescription")}</span><br />
    </>);
    }
  }, [selectedButton, isMobile,t]);

  return (
    <div className="w-full max-w-md flex flex-col md:gap-[30px]">
      <div className='flex flex-col items-center gap-[30px] md:gap-[10px]'>
        <div className="text-black text-center text-[20px] md:text-xl font-bold">
          {title}
        </div>

        <div className="text-black text-center text-[14px] md:text-base font-medium">
          {content}
        </div>
      </div>
      {/* mobile version */}
      {/* <div className='flex flex-col items-center gap-[30px] md:gap-[10px] md:hidden'>
        <div className="text-black text-center text-[20px] md:text-xl font-bold">
          {title}
        </div>

        <div className="text-black text-center text-[14px] md:text-base font-medium">
          <div className='flex flex-col gap-[20px]'>
            <div className='flex border border-dashed border-[#000] rounded-[5px] gap-4 w-[220px] h-[60px] justify-center'>
              <div className='flex flex-col justify-center'>
                <FormWhatsApp />
              </div>
              <div className='flex flex-row text-xl font-bold text-center items-center'>
                Whatsapp
              </div>
            </div>
            <div className='text-base font-medium text-[#666]'>
              {content}
            </div>
          </div>
        </div>
      </div> */}
      <div>
        {selectedButton === 'whatsapp' && (
          <div>
            <div className='hidden md:flex flex-col items-center gap-[30px]'>
              <div className='flex border border-dashed border-[#000] rounded-[5px] gap-4 w-[220px] h-[60px] justify-center'>
                <div className='flex flex-col justify-center'>
                  <FormWhatsApp />
                </div>
                <div className='flex flex-row text-xl font-bold text-center items-center'>
                  Whatsapp
                </div>
              </div>
              <img src={QRcode} alt="qr code" />
            </div>
          </div>
        )}
      </div>
    {selectedButton === 'gmail' && <SubmitEmail />}
    </div>
  )
}
