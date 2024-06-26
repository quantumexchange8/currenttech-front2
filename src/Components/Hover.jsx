import { Fire } from '../Components/Outline.jsx';

export default function Hover({ name, code, rate }) {
    return(
        <div className="absolute inset-0 md:bottom-0 left-0 md:right-0 bg-black bg-opacity-35 text-white py-[7px] md:py-[12px] px-[7px] md:px-[15px] opacity-0 
            group-hover:opacity-100 transition transform 
            md:group-hover:translate-y-[175px] md:translate-y-full 
            group-hover:translate-y-[115px] translate-y-full 
            duration-500 ease-in-out w-[150px] md:w-[230px] h-[60px] md:h-[100px]">
                
            <div className='flex flex-col gap-[4px]'>
                <div className='flex flex-col gap-[6px] md:gap-[11px]'>
                    <div className="text-white text-[10px] md:text-sm font-bold">{name}</div>
                    <div className="text-white text-[10px] md:text-sm font-medium">{code}</div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <div><Fire /></div>
                    <div className="text-[#F00] text-[10px] md:text-sm font-medium">{rate}</div>
                </div>
            </div>
        </div>
    );
}