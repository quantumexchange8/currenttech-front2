import React from "react";


export default function FormSubmission() {

    return (
        <form className="w-full">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-col items-center ">
                    <label>
                       Your Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[50px] bg-[#DDD] rounded-md"/>
                </div>
                <div className="w-full flex flex-col items-center ">
                    <label>
                       Your Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[50px] bg-[#DDD] rounded-md"/>
                </div>
                <div className="w-full flex flex-col items-center ">
                    <label>
                       Your Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    className="w-full h-[150px] bg-[#DDD] rounded-md"/>
                </div>

                <button type="submit" className="bg-black md:w-[200px] md:h-[50px] rounded-[10px]">
                    <span className="text-white text-xl font-bold">Send</span>
                </button>
            </div>
        </form>
    );
}