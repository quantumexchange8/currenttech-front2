import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Close, CloseM } from "./Outline";
import { useTranslation } from "react-i18next";

const PrivacyPolicyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { t } = useTranslation();

  return (
    <div>
      {/* Footer Button */}
      <div className="text-[#557AAA] text-base xl:text-xl font-medium md:font-normal">
        <button onClick={openModal}>
          {t("termsAndConditionModal.name")}
        </button>
      </div>

      {/* Material-UI Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        fullWidth
        maxWidth="lg"
        scroll="paper"
        aria-labelledby="privacy-policy-title"
        aria-describedby="privacy-policy-content"
        sx={{
            '& .MuiDialog-paper': {
                width: {
                    xs: '384px', 
                    sm: '700px', 
                    md: '900px', 
                    xl: '1545px', 
                    },
                maxWidth: '100%', 
                borderRadius: '20px',
                margin: {
                    xs: 0,
                },
            },
          }}
      >
        {/* Dialog Title */}
        <DialogTitle id="privacy-policy-title" className="text-[#153764] font-bold flex flex-col gap-2 md:gap-4" sx={{ fontFamily: 'Poppins, sans-serif', padding: '20px 15px' }}>
          <div className="hidden xl:flex justify-between items-center xl:px-[32px] text-[40px] text-[#153764] font-bold ">
            {t("PrivacyPolicyModal.currentTech")}
            <button
                onClick={closeModal}
            >
                <div><Close /></div>
            </button>
        </div>
        <div className="xl:hidden flex justify-between gap-4 md:px-4 xl:px-[32px] text-xl text-[#153764] font-bold ">
            <div className="w-[300px] md:w-full">{t("PrivacyPolicyModal.currentTech")}</div>
            <button
            onClick={closeModal}
            >
            <div className="flex justify-end"><CloseM /></div>
            </button>
        </div>
        </DialogTitle>

        {/* Dialog Content */}
        <DialogContent dividers sx={{ padding: '15px' }}>
            {/* Modal Content */}
            <div className="flex flex-col gap-6 md:gap-8 md:px-4 xl:px-10">
                {/* Terms & Conditions */}
                <div className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                    <div className="w-[350px] md:w-full">
                        Terms & Conditions (Effective Date: November 01, 2021)
                    </div>
                </div>
                {/* Welcome */}
                {/* Web */}
                <div className="hidden xl:block text-2xl text-[#4B5563] font-normal">
                    <div>
                        Welcome to our company's website and services.
                    </div>
                    <div>
                        The following Terms & Conditions (hereinafter referred to as "These Terms") govern your access to and use of our 
                    </div>
                    <div>
                        website, software, applications, and related services. By accessing or using our website or services, you acknowledge
                    </div>
                    <div>
                        that you have read, understood, and agree to be bound by these Terms. Please read carefully.
                    </div>
                </div>

                {/* Mobile */}
                <div className="xl:hidden text-sm md:text-2xl text-[#4B5563] font-normal">
                    Welcome to our company’s website and services. The following Terms & Conditions (hereinafter referred to as "these Terms") govern your access to and use of our website, software, applications, and related services. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms. Please read carefully.
                </div>
                
                {/* Points */}
                <div>
                    <ul className="list-decimal list-outside pl-4 md:pl-7 text-sm md:text-2xl font-bold flex flex-col gap-8">
                        {/* 1 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div >
                                Use of Services
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        Our company provides IT services, including software development, technical consulting, and data processing. 
                                    </div>
                                    <div>
                                        Users must comply with all applicable laws and regulations while using our services and must not use our
                                    </div>
                                    <div>
                                        services for illegal purposes or beyond reasonable limits.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Users shall bear any consequences and liabilities resulting from improper or unauthorised use of our services, 
                                    </div>
                                    <div>
                                        including but not limited to legal liabilities, damage compensation, or other losses.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    Our company provides IT services, including software development, technical consulting, and data processing. Users must comply with all applicable laws and regulations while using our services and must not use our services for illegal purposes or beyond reasonable limits.
                                </li>
                                <li>
                                    Users shall bear any consequences and liabilities resulting from improper or unauthorised use of our services, including but not limited to legal liabilities, damage compensation, or other losses.
                                </li>
                            </ul>
                        </li>
                        {/* 2 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                User Responsibilities
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        You agree to provide accurate, truthful, complete, and up-to-date personal information and update this 
                                    </div>
                                    <div>
                                        information in the event of any changes. Our company is not liable for any issues arising from the provision of 
                                    </div>
                                    <div>
                                        false or inaccurate information.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        You must not attempt to reverse engineer, decode, tamper with, copy, or otherwise infringe on the integrity and 
                                    </div>
                                    <div>
                                        intellectual property of our company’s services and technology.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    You agree to provide accurate, truthful, complete, and up-to-date personal information and update this information in the event of any changes. Our company is not liable for any issues arising from the provision of false or inaccurate information.
                                </li>
                                <li>
                                    You must not attempt to reverse engineer, decode, tamper with, copy, or otherwise infringe on the integrity and intellectual property of our company’s services and technology.
                                </li>
                            </ul>
                        </li>
                        {/* 3 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Intellectual Property
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        All content on our website and within our services, including but not limited to text, images, software, code, 
                                    </div>
                                    <div>
                                        designs, and logos, is the property of our company or our licensors and is protected under Malaysian intellectual 
                                    </div>
                                    <div>
                                        property laws. Without prior written consent from our company, no part of our website or services may be used, 
                                    </div>
                                    <div>
                                        copied, modified, distributed, or published.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Users are prohibited from engaging in any activity that infringes on the company's intellectual property rights.
                                    </div>
                                    <div>
                                    Our company reserves the right to take legal action to protect its intellectual property.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    All content on our website and within our services, including but not limited to text, images, software, code, designs, and logos, is the property of our company or our licensors and is protected under Malaysian intellectual property laws. Without prior written consent from our company, no part of our website or services may be used, copied, modified, distributed, or published.
                                </li>
                                <li>
                                    Users are prohibited from engaging in any activity that infringes on the company’s intellectual property rights. Our company reserves the right to take legal action to protect its intellectual property.
                                </li>
                            </ul>
                        </li>
                        {/* 4 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Changes and Termination of Services
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        Our company reserves the right to modify, suspend, or terminate all or part of the services at any time without 
                                    </div>
                                    <div>
                                        prior notice. Our company is not responsible for any loss or inconvenience resulting from changes, suspension, or  
                                    </div>
                                    <div>
                                        termination of the services.

                                    </div>
                                </li>
                                <li>
                                    <div>
                                        If a user violates these Terms or engages in any inappropriate behavior, our company reserves the right to 
                                    </div>
                                    <div>
                                    immediately terminate the user's account and access to the services without notice.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li className="md:hidden">
                                    <div>
                                        Our company reserves the right to modify, suspend, or terminate all or part of the
                                    </div> 
                                    <div>
                                        services at any time without prior notice. Our company is not responsible for any loss or inconvenience resulting from changes, suspension, or termination of the services.
                                    </div>
                                </li>
                                <li className="hidden md:block">
                                    <div>
                                        Our company reserves the right to modify, suspend, or terminate all or part of the services at any time without prior notice. Our company is not responsible for any loss or inconvenience resulting from changes, suspension, or termination of the services.
                                    </div>
                                </li>
                                <li>
                                    If a user violates these Terms or engages in any inappropriate behavior, our company reserves the right to immediately terminate the user’s account and access to the services without notice.
                                </li>
                            </ul>
                        </li>
                        {/* 5 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Payments and Fees
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        Users who utilise our paid services must make timely payments as required. All fees are quoted in Malaysian
                                    </div>
                                    <div>
                                        Ringgit (MYR), and payment terms are specified in the relevant service agreement.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        In cases of overdue payments, our company reserves the right to suspend or terminate relevant services until all 
                                    </div>
                                    <div>
                                    outstanding fees are paid in full. Users bear any losses or liabilities resulting from overdue payments.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    Users who utilise our paid services must make timely payments as required. All fees are quoted in Malaysian Ringgit (MYR), and payment terms are specified in the relevant service agreement.
                                </li>
                                <li>
                                    In cases of overdue payments, our company reserves the right to suspend or terminate relevant services until all outstanding fees are paid in full. Users bear any losses or liabilities resulting from overdue payments.
                                </li>
                            </ul>
                        </li>
                        {/* 6 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Technical Risks and Data Security
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                        Users acknowledge and agree that using our company's services involves certain technical risks related to data 
                                    </div>
                                    <div>
                                        transmission, storage, and security. While our company takes reasonable measures to safeguard user data, we 
                                    </div>
                                    <div>
                                        cannot provide absolute protection against all network or data security issues.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Users are responsible for implementing necessary security measures (such as regular data backups) to mitigate
                                    </div>
                                    <div>
                                        potential risks when using our services.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    Users acknowledge and agree that using our company’s services involves certain technical risks related to data transmission, storage, and security. While our company takes reasonable measures to safeguard user data, we cannot provide absolute protection against all network or data security issues.
                                </li>
                                <li>
                                    Users are responsible for implementing necessary security measures (such as regular data backups) to mitigate potential risks when using our services.
                                </li>
                            </ul>
                        </li>
                        {/* 7 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Limitation of Liability
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                    To the fullest extent permitted by law, our company shall not be liable for any indirect, incidental, special, or 
                                    </div>
                                    <div>
                                        consequential damages arising from the use or inability to use our website or services, even if our company has
                                    </div>
                                    <div>
                                        been advised of the possibility of such damages.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Our company assumes no responsibility for service interruptions, data loss, or information leakage caused by 
                                    </div>
                                    <div>
                                        system failures, network delays, maintenance, or updates.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    To the fullest extent permitted by law, our company shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our website or services, even if our company has been advised of the possibility of such damages.
                                </li>
                                <li>
                                    Our company assumes no responsibility for service interruptions, data loss, or information leakage caused by system failures, network delays, maintenance, or updates.
                                </li>
                            </ul>
                        </li>
                        {/* 8 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Privacy and Data Protection
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                    Our company strictly adheres to the Personal Data Protection Act (PDPA) of Malaysia and is committed to
                                    </div>
                                    <div>
                                        protecting users’ personal privacy. For details on data collection, usage, sharing, and protection, please refer to 
                                    </div>
                                    <div>
                                        our Privacy Policy.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        By using our services, users consent to our collection, use, and sharing of personal data in accordance with our 
                                    </div>
                                    <div>
                                        Privacy Policy.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    Our company strictly adheres to the Personal Data Protection Act (PDPA) of Malaysia and is committed to protecting users’ personal privacy. For details on data collection, usage, sharing, and protection, please refer to our Privacy Policy.
                                </li>
                                <li>
                                    By using our services, users consent to our collection, use, and sharing of personal data in accordance with our Privacy Policy.
                                </li>
                            </ul>
                        </li>
                        {/* 9 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Third-Party Links
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                    Our website and services may contain links to third-party websites or services. These links are provided solely for 
                                    </div>
                                    <div>
                                        user convenience, and our company is not responsible for the content, privacy policies, or practices of any third-
                                    </div>
                                    <div>
                                        party sites.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        Accessing third-party content is at the user’s own risk, and any interactions or transactions with third parties are 
                                    </div>
                                    <div>
                                        solely between the user and the third party.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li className="md:hidden"> 
                                    <div>
                                        Our website and services may contain links to third-party websites or services. These links
                                    </div> 
                                    <div>
                                        are provided solely for user convenience, and our company is not responsible for the content, privacy policies, or practices of any third-party sites.
                                    </div>
                                </li>
                                <li className="hidden md:block"> 
                                    <div>
                                        Our website and services may contain links to third-party websites or services. These links are provided solely for user convenience, and our company is not responsible for the content, privacy policies, or practices of any third-party sites.
                                    </div> 
                                </li>
                                <li>
                                    Accessing third-party content is at the user’s own risk, and any interactions or transactions with third parties are solely between the user and the third party.
                                </li>
                            </ul>
                        </li>
                        {/* 10 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Governing Law and Dispute Resolution
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                    These Terms are governed by and construed in accordance with the laws of Malaysia. Any disputes arising from 
                                    </div>
                                    <div>
                                        these Terms shall be subject to the exclusive jurisdiction of Malaysian courts.
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        In the event of any dispute between the user and our company, both parties shall endeavor to resolve the issue 
                                    </div>
                                    <div>
                                        amicably. If an amicable resolution cannot be reached, either party may bring a claim before the Malaysian 
                                    </div>
                                    <div>
                                        courts.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li className="md:hidden">
                                    <div>
                                        These Terms are governed by and construed
                                    </div> 
                                    <div>
                                        in accordance with the laws of Malaysia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of Malaysian courts.
                                    </div>
                                </li>
                                <li className="hidden md:block">
                                    <div>
                                        These Terms are governed by and construed
                                    </div> 
                                    <div>
                                        in accordance with the laws of Malaysia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of Malaysian courts.
                                    </div>
                                </li>
                                <li>
                                    In the event of any dispute between the user and our company, both parties shall endeavor to resolve the issue amicably. If an amicable resolution cannot be reached, either party may bring a claim before the Malaysian courts.
                                </li>
                            </ul>
                        </li>
                        {/* 11 */}
                        <li className="text-sm md:text-2xl text-[#557AAA] font-bold leading-normal">
                            <div>
                                Amendments to the Terms
                            </div>
                            {/* Web */}
                            <ul className="list-disc list-outside hidden xl:flex flex-col gap-6 text-2xl text-[#4B5563] font-normal">
                                <li>
                                    <div>
                                    Our company reserves the right to modify or update these Terms at any time without prior notice. Any
                                    </div>
                                    <div>
                                        modifications will become effective immediately upon posting on our website. Continued use of our services 
                                    </div>
                                    <div>
                                        following any changes constitutes acceptance of the updated Terms. Users are encouraged to review these
                                    </div>
                                    <div>
                                        Terms periodically to stay informed about any updates.
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile */}
                            <ul className="xl:hidden list-disc list-outside flex flex-col gap-6 pl-2 text-sm md:text-2xl text-[#4B5563] font-normal">
                                <li>
                                    Our company reserves the right to modify or update these Terms at any time without prior notice. Any modifications will become effective immediately upon posting on our website. Continued use of our services following any changes constitutes acceptance of the updated Terms. Users are encouraged to review these Terms periodically to stay informed about any updates.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default PrivacyPolicyModal;
