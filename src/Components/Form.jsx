import React, { useState, useEffect, useContext } from 'react';
import { FormWhatsApp } from './Brand';
import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';
import { useMediaQuery } from 'react-responsive'
// import { LanguageContext } from "../LanguagesContext";
import { useTranslation } from 'react-i18next';


export default function TabComponent({ selectedButton }) {
  const { t } = useTranslation();
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
      <div className='flex flex-col items-center gap-[20px] md:gap-[10px]'>
        <div className="text-black text-center text-xl font-bold">
          {title}
        </div>

        {!isMobile && (
          <div className="text-black text-center text-base font-medium">
            {content}
          </div>
        )}
      </div>
      <div>
        {selectedButton === 'whatsapp' && (
          <div>
            {isMobile ? (
              <div className='flex flex-col items-center gap-[20px] mt-[20px] md:hidden'>
                <div className='flex border border-dashed border-[#000] rounded-[5px] gap-4 w-[220px] h-[60px] justify-center'>
                  <div className='flex flex-col justify-center'>
                    <FormWhatsApp />
                  </div>
                  <div className='flex flex-row text-xl font-bold text-center items-center'>
                    Whatsapp
                  </div>
                </div>
                <div className="text-[#666] text-center text-base font-medium leading-[1.20]">
                  {content}
                </div>
              </div>
            ) : (
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
            )}
          </div>
        )}
      </div>
      {selectedButton === 'gmail' && (
        <div>
          {isMobile ? (
            <div className='flex flex-col items-center gap-[50px] mt-[20px] md:hidden'>
              <div className="text-black text-center text-sm font-medium leading-[1.20]">
                {content}
              </div>
              <SubmitEmail />
            </div>
          ) : (
            <SubmitEmail />
          )}
        </div>
        )}
    </div>
  )
}
