import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export default function FormSubmission() {

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);
        const formData = new FormData(form.current);
        const userName = formData.get("userName"); // Assuming the input field has name="email"
        const userEmail = formData.get("userEmail"); // Assuming the input field has name="email"
        const userMessage = formData.get("userMessage"); // Assuming the input field has name="email"

        emailjs.sendForm('service_w2wr8zs', 'template_lqwi5ab', form.current, {publicKey:'zJVrLr0TC5IaZBX3a', userName: userName,userEmail: userEmail,userMessage: userMessage}
    )
        .then(() => {
            console.log("SUCCESS!");
          setIsSubmitting(false); // Enable the button after submission
          Swal.fire("Success!", "Form submitted successfully", "success");
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false); // Enable the button after submission
          Swal.fire("Error!", "Form submission failed", "error");

        });
    };

    return (
        <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Your Name
                    </label>
                    <input 
                    type="text" 
                    name="userName" 
                    className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md px-3" required=""/>
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Email
                    </label>
                    <input 
                    type="text" 
                    name="userEmail" 
                    className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md px-3" required=""/>
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>
                       Message
                    </label>
                    <textarea 
                    type="text" 
                    name="userMessage" 
                    className="w-full h-[230px] md:h-[200px] bg-[#DDD] rounded-md px-3 pt-2" required=""/>
                </div>

                <button type="submit" className="bg-black w-[200px] h-[50px] rounded-[10px] mt-[26px] md:mt-[42px]">
                    <span className="text-white text-xl font-bold">Send</span>
                </button>
            </div>
        </form>
    );
}