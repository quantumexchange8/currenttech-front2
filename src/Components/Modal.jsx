import React from 'react';
import CT_Logo from '../Assets/Images/CurrentTech_Logo.png'
import X from '../Assets/Images/X.png'
import Form from './Form';

export default function Modal({ open, onClose, title, content, selectedButton }) {

    return (
        <div 
            id="modal-app" 
            onClick={onClose}
            className={`fixed overflow-y-auto py-8 inset-0 flex justify-center z-50 items-center transition-colors backdrop-blur-sm ${open ? "visible bg-black/20" : "invisible"}`}
        >
            <div onClick={(e) => e.stopPropagation()} className={`px-7 md:px-11 py-[52px] md:w-[500px] w-[349px] h-auto bg-white rounded-[35px] md:rounded-[20px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col gap-[26px] md:gap-[30px]'>
                        <div className="relative">
                            <div className="flex justify-center items-center">
                                <div className="rounded-[20px] flex justify-center">
                                    <img className='w-[70px] h-[47px] md:w-[99px] md:h-[66px] ' src={CT_Logo} alt="icon"/>
                                </div>
                                <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                                    <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={X} alt="close"/>    
                                </button>
                            </div>
                        </div>
                        <Form title={title} content={content} selectedButton={selectedButton}/>
                    </div>     
                </div>  
            </div>
        </div>
    );
}