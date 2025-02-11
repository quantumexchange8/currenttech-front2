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
          {t("DisclaimerModal.name")}
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
              xs: '380px', 
              sm: '700px', 
              md: '900px', 
              xl: '1565px', 
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
            {/* Privacy Policy Header */}
            <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
              Disclaimer (Compliant with Malaysian Financial and E-commerce Regulations)
            </div>
            {/* Points */}
            <ul className="flex flex-col gap-6 md:gap-8 list-decimal list-outside pl-5 md:pl-7 text-sm md:text-2xl text-[#557AAA] font-bold">
              {/* 1 */}
              <li>
                <div className="">
                  Accuracy of Information
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    The information provided on this website and through our services is for general informational purposes only. 
                  </div>
                  <div>
                    While we strive to ensure the accuracy and relevance of all information, we do not guarantee its completeness, 
                  </div>
                  <div>
                    reliability, or suitability for any particular purpose. Users are advised to independently verify the information 
                  </div>
                  <div>
                    before relying on it for any decision-making.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  The information provided on this website and through our services is for general informational purposes only. While we strive to ensure the accuracy and relevance of all information, we do not guarantee its completeness, reliability, or suitability for any particular purpose. Users are advised to independently verify the information before relying on it for any decision-making.
                </div>
              </li>
              {/* 2 */}
              <li>
                <div className="">
                  Limitation of Liability
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    To the fullest extent permitted by Malaysian law, our company disclaims any liability for direct, indirect, incidental, or 
                  </div>
                  <div>
                    consequential damages that may arise from the use or inability to use our website or services. This includes, but is
                  </div>
                  <div>
                    not limited to, damages arising from errors, omissions, interruptions, defects, delays, computer viruses, or any
                  </div>
                  <div>
                    technical or other failure. Users access and use our website and services at their own risk.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  To the fullest extent permitted by Malaysian law, our company disclaims any liability for direct, indirect, incidental, or consequential damages that may arise from the use or inability to use our website or services. This includes, but is not limited to, damages arising from errors, omissions, interruptions, defects, delays, computer viruses, or any technical or other failure. Users access and use our website and services at their own risk.
                </div>
              </li>
              {/* 3 */}
              <li>
                <div className="">
                  Service Limitations
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    Our company makes no warranty that our website, software, or services will be uninterrupted, error-free, or free of 
                  </div>
                  <div>
                    viruses or other harmful components. Any downloadable materials provided on our site or through our services are
                  </div>
                  <div>
                    accessed at the user’s own discretion and risk. We are not responsible for any damage to your computer system or
                  </div>
                  <div>
                    data that may result from downloading any content or using our services.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  Our company makes no warranty that our website, software, or services will be uninterrupted, error-free, or free of viruses or other harmful components. Any downloadable materials provided on our site or through our services are accessed at the user’s own discretion and risk. We are not responsible for any damage to your computer system or data that may result from downloading any content or using our services.
                </div>
              </li>
              {/* 4 */}
              <li>
                <div className="">
                  No Professional Advice
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    The content provided on our website, in our applications, or through our customer support is intended solely for 
                  </div>
                  <div>
                    informational purposes and does not constitute legal, financial, technical, or professional advice. Users are 
                  </div>
                  <div>
                    encouraged to seek independent professional advice before acting on any information provided by our company. 
                  </div>
                  <div>
                    We shall not be liable for any decisions or actions taken based on our information.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  The content provided on our website, in our applications, or through our customer support is intended solely for informational purposes and does not constitute legal, financial, technical, or professional advice. Users are encouraged to seek independent professional advice before acting on any information provided by our company. We shall not be liable for any decisions or actions taken based on our information.
                </div>
              </li>
              {/* 5 */}
              <li>
                <div className="">
                  Third-Party Links and Content
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    Our website may contain links to third-party websites, services, or content that are not owned or controlled by us. 
                  </div>
                  <div>
                    These links are provided for convenience only and do not imply endorsement of the third-party’s products, services, 
                  </div>
                  <div>
                    or practices. We are not responsible for the content, privacy policies, or practices of any third-party websites or 
                  </div>
                  <div>
                    services. Users accessing third-party content do so at their own risk, and any interactions or transactions with such
                  </div>
                  <div>
                    third parties are solely between the user and the third party.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  Our website may contain links to third-party websites, services, or content that are not owned or controlled by us. These links are provided for convenience only and do not imply endorsement of the third-party’s products, services, or practices. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. Users accessing third-party content do so at their own risk, and any interactions or transactions with such third parties are solely between the user and the third party.
                </div>
              </li>
              {/* 6 */}
              <li>
                <div className="">
                  Intellectual Property
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    All content, trademarks, and data on this website, including but not limited to software, text, graphics, logos, icons, 
                  </div>
                  <div>
                    designs, and images, are the property of our company or have been licensed to us. Unauthorised use of any content
                  </div>
                  <div>
                    on our website or services may violate intellectual property laws. We reserve the right to enforce our intellectual 
                  </div>
                  <div>
                    property rights to the fullest extent of the law.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  All content, trademarks, and data on this website, including but not limited to software, text, graphics, logos, icons, designs, and images, are the property of our company or have been licensed to us. Unauthorised use of any content on our website or services may violate intellectual property laws. We reserve the right to enforce our intellectual property rights to the fullest extent of the law.
                </div>
              </li>
              {/* 7 */}
              <li>
                <div className="">
                  Technical Risks
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    Users acknowledge that using online services and software involves inherent technical risks, such as data loss, 
                  </div>
                  <div>
                    network failures, or unauthorised access. Although we take reasonable precautions to secure our systems, we 
                  </div>
                  <div>
                    cannot guarantee complete protection against all threats or vulnerabilities. Users are responsible for implementing
                  </div>
                  <div>
                    their own safeguards to protect their systems and data when using our services.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  Users acknowledge that using online services and software involves inherent technical risks, such as data loss, network failures, or unauthorised access. Although we take reasonable precautions to secure our systems, we cannot guarantee complete protection against all threats or vulnerabilities. Users are responsible for implementing their own safeguards to protect their systems and data when using our services.
                </div>
                
              </li>
              {/* 8 */}
              <li>
                <div className="">
                  Policy Changes
                </div>
                {/* Web */}
                <div className="hidden xl:block text-[#4B5563] font-normal">
                  <div>
                    We reserve the right to modify or update this Disclaimer at any time without prior notice. Changes will be effective
                  </div>
                  <div>
                    immediately upon posting on our website. Continued use of our services following any modifications indicates 
                  </div>
                  <div>
                    acceptance of the updated Disclaimer. Users are encouraged to review this Disclaimer periodically to remain 
                  </div>
                  <div>
                    informed about any updates.
                  </div>
                </div>
                {/* Mobile */}
                <div className="xl:hidden text-[#4B5563] font-normal">
                  We reserve the right to modify or update this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on our website. Continued use of our services following any modifications indicates acceptance of the updated Disclaimer. Users are encouraged to review this Disclaimer periodically to remain informed about any updates.
                </div>
              </li>
            </ul>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default PrivacyPolicyModal;
