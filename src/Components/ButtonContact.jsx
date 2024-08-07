import { useState, useEffect } from 'react';
import Icon from '../Assets/Images/icon.svg';
import Close from '../Assets/Images/close.svg';
import emailjs from 'emailjs-com';
// import { useTranslation } from 'react-i18next';

const sendEmail = (formData) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };
  
  const handleSendButtonClick = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message
    };
    sendEmail(formData);
  };

const ModalContact = ({ open, onClose }) => {
    // const { t } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (open) {
            const storedName = sessionStorage.getItem('contactFormName');
            const storedEmail = sessionStorage.getItem('contactFormEmail');
            const storedMessage = sessionStorage.getItem('contactFormMessage');

            if (storedName) setName(storedName);
            if (storedEmail) setEmail(storedEmail);
            if (storedMessage) setMessage(storedMessage);
        }
    }, [open]);

    const handleClose = () => {
        sessionStorage.setItem('contactFormName', name);
        sessionStorage.setItem('contactFormEmail', email);
        sessionStorage.setItem('contactFormMessage', message);
        onClose();
    };

    useEffect(() => {
        return () => {
            sessionStorage.removeItem('contactFormName');
            sessionStorage.removeItem('contactFormEmail');
            sessionStorage.removeItem('contactFormMessage');
        };
    }, []);

    return (
        <div id="modal-contact" onClick={handleClose} className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[349px] md:p-11 bg-white rounded-[30px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        <div className="relative">
                            <div className="flex justify-center items-center">
                                <div className="rounded-[20px] flex justify-center">
                                    <img className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src={Icon} alt="icon"/>
                                </div>
                                <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={handleClose}>
                                    <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={Close} alt="close"/>  
                                </button>
                            </div>
                        </div>
                        
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex w-full flex-col justify-center flex-shrink-0 text-black text-center text-[24px] md:text-[36px] font-bold" style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                {/* {t('contactModalTitle')} */} title 
                            </div>
                            <div className="flex w-full h-[10px] md:h-[20px] flex-col justify-center flex-shrink-0 text-black text-center text-[12px] md:text-[16px] font-medium" style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                {/* {t('contactTitleNormal')} */} normal
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <form className="flex flex-col justify-center items-center gap-12">
                            <div className="flex flex-col items-center gap-5 md:gap-[30px]">
                                <FormField label='name' type="name" value={name} onChange={setName} />
                                <FormField label='email' type="email" value={email} onChange={setEmail} />
                                <FormField label='message' type="textarea" value={message} onChange={setMessage} />
                            </div>
                            <div className="send-button">
                                <button type="submit"className="w-[139.6px] h-[34.9px] md:w-[200px] md:h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[13.96px] md:text-[20px] font-bold" style={{ cursor: 'pointer' }}>
                                    send
                                </button>
                                <button type="submit" onClick={handleSendButtonClick}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>                
            </div> 
        </div>
    );
}

const FormField = ({ label, type, value, onChange }) => {
    return (
        <div className="flex flex-col items-center gap-[10px]">
            <label htmlFor={type} className="flex w-full h-3 flex-col justify-center items-center flex-shrink-0 font-normal" style={{ fontFamily:"SF-Pro-Display-Regular", fontStyle:"normal", lineHeight:"normal" }}>
                {label}
            </label>
            {type === "textarea" ? (
                <textarea 
                    className="resize-none w-[223.36px] h-[139.6px] md:w-[320px] md:h-[200px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3 py-3" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    required
                    style={{
                        overflowY: 'scroll',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'none',
                        '&::WebkitScrollbar': {
                            display: 'none',
                        },
                    }}
                />
            ) : (
                <input 
                    type={type} 
                    id={type} 
                    className="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    required 
                />
            )}
        </div>
    );
}

export default ModalContact;
