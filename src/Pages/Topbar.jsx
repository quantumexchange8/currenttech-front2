import React from 'react';
import { Earphone, Lang } from '../Components/Outline';
import Logo from '../Assets/Images/Logo.png';

const Topbar = () => {

    return (
        <div className="w-full h-[60px] fixed z-50 bg-[#aaaaaae6] flex justify-center">
            <div className="w-full max-w-[480px] h-full flex justify-center items-center gap-[50px]">
                <div>
                    <img src={Logo} alt="icon"/>
                </div>

                <div className="flex justify-center gap-[30px]">
                    <span>Advantage</span>
                    <span>Products</span>
                    <span>Career</span>
                </div>

                <div className='flex justify-center gap-[30px]'>
                    <Earphone/>
                    <Lang/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;