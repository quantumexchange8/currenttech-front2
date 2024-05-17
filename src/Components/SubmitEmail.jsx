import React, { useRef, useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { LanguageContext } from "../LanguagesContext";

export default function FormSubmission() {
    const { t } = useContext(LanguageContext);
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({
        userName: '',
        userEmail: '',
        userMessage: ''
    });

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const validateForm = () => {
        const formData = new FormData(form.current);
        const userName = formData.get("userName");
        const userEmail = formData.get("userEmail");
        const userMessage = formData.get("userMessage");
        let valid = true;
        const newErrors = {
            userName: '',
            userEmail: '',
            userMessage: ''
        };

        if (!userName) {
            newErrors.userName = t("Your name is required.");
            valid = false;
        }
        if (!userEmail) {
            newErrors.userEmail = t("Your email is required.");
            valid = false;
        } else if (!validateEmail(userEmail)) {
            newErrors.userEmail = t("The email must be a valid email address.");
            valid = false;
        }
        if (!userMessage) {
            newErrors.userMessage = t("Your message is required.");
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (isSubmitting) return; // Prevent multiple submissions
        if (!validateForm()) return; // Validate form before sending

        setIsSubmitting(true);
        emailjs.sendForm('service_w2wr8zs', 'template_lqwi5ab', form.current, 'zJVrLr0TC5IaZBX3a')
        .then(() => {
            setIsSubmitting(false); // Enable the button after submission
            Swal.fire(t("MailForm.sendStatusSuccess"), t("MailForm.notificationSuccessfully"), "success");
            form.current.reset(); // Reset the form
        },
        (error) => {
            setIsSubmitting(false); // Enable the button after submission
            Swal.fire(t("MailForm.sendStatusFailure"), t("MailForm.notificationFailure"), "error");
        });
    };

    return (
        <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>{t("MailForm.name")}</label>
                    <input 
                        type="text" 
                        name="userName" 
                        className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md px-3" 
                        required="" 
                    />
                    {errors.userName && <span className="text-red-500">{errors.userName}</span>}
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>{t("MailForm.email")}</label>
                    <input 
                        type="text" 
                        name="userEmail" 
                        className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md px-3" 
                        required="" 
                    />
                    {errors.userEmail && <span className="text-red-500">{errors.userEmail}</span>}
                </div>
                <div className="w-full flex flex-col items-center text-base font-medium">
                    <label>{t("MailForm.message")}</label>
                    <textarea 
                        type="text" 
                        name="userMessage" 
                        className="w-full h-[230px] md:h-[200px] bg-[#DDD] rounded-md px-3 pt-2" 
                        required="" 
                    />
                    {errors.userMessage && <span className="text-red-500">{errors.userMessage}</span>}
                </div>

                <button type="submit" className="bg-black w-[200px] h-[50px] rounded-[10px] mt-[26px] md:mt-[42px]">
                    <span className="text-white text-xl font-bold">{t("MailForm.button")}</span>
                </button>
            </div>
        </form>
    );
}
