import React, { useState } from "react";
import { Close } from "./Outline";

const DisclaimerModal = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Footer Button */}
      <div className="text-[#557AAA] text-base md:text-xl font-medium md:font-normal">
        
        <button
          onClick={openModal}
        >
          DISCLAIMER
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" w-[1570px] h-screen overflow-y-auto bg-white py-[96px] px-[56px]">
            <div className="w-[1428px] flex flex-col gap-10">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="text-[40px] text-[#153764] font-bold">
                  CURRENT TECH INDUSTRIES SDN BHD
                </div>
                <button
                  onClick={closeModal}
                  className="text-black"
                >
                  <Close />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col gap-8">
                {/* Privacy Policy */}
                <div className="text-2xl text-[#557AAA] font-bold">
                  <div>
                    Disclaimer (Compliant with Malaysian Financial and E-commerce Regulations)
                  </div>
                </div>
                {/* Points */}
                <ul className="flex flex-col gap-8 list-decimal list-outside pl-7 text-2xl text-[#557AAA] font-bold">
                  {/* 1 */}
                  <li>
                    <div className="">
                      Accuracy of Information
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 2 */}
                  <li>
                    <div className="">
                      Limitation of Liability
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 3 */}
                  <li>
                    <div className="">
                      Service Limitations
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 4 */}
                  <li>
                    <div className="">
                      No Professional Advice
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 5 */}
                  <li>
                    <div className="">
                      Third-Party Links and Content
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 6 */}
                  <li>
                    <div className="">
                      Intellectual Property
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 7 */}
                  <li>
                    <div className="">
                      Technical Risks
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                  {/* 8 */}
                  <li>
                    <div className="">
                      Policy Changes
                    </div>
                    <div className="text-[#4B5563] font-normal">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisclaimerModal;
