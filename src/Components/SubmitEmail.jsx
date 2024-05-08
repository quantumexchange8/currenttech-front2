import React from "react";


export default function FormSubmission() {

    return (
        <form className="w-full">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Your Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md"/>
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Email
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md"/>
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Message
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[230px] md:h-[200px] bg-[#DDD] rounded-md"/>
                </div>

                <button type="submit" className="bg-black w-[200px] h-[50px] rounded-[10px] mt-[26px] md:mt-[42px]">
                    <span className="text-white text-xl font-bold">Send</span>
                </button>
            </div>
        </form>
    );
}