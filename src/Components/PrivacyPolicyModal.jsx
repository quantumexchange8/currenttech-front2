import React, { useState } from "react";
import { Close } from "./Outline";

const PrivacyPolicyModal = () => {
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
          PRIVACY POLICY
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
                    Privacy Policy (Compliant with Malaysian PDPA)
                  </div>
                  <div>
                    Effective Date: November 01, 2021
                  </div>
                </div>
                {/* Thank you */}
                <div className="text-2xl text-[#4B5563] font-normal">
                  <div>
                    Thank you for visiting our website.
                  </div>
                  <div>
                    We value your privacy and are committed to protecting your personal information.
                  </div>
                  <div>
                    This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our services.
                  </div>
                </div>
                {/* Points */}
                <div className="flex flex-col gap-8">
                  {/* 1 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      1. Collection of Information
                    </div>
                    <div className="flex flex-col gap-8">
                      <ul className="list-disc list-outside pl-8">
                        <li className="text-2xl text-[#557AAA] font-medium">
                          Persona Data:
                        </li>
                        <div className="text-2xl text-[#4B5563] font-normal">
                          <div>
                            We may collect personal data such as your name, email address, and contact information,
                          </div>
                          <div>
                            typically when you register for an account, subscribe to our services, or fill out forms.
                          </div>
                        </div>
                      </ul>
                      <ul className="list-disc list-outside pl-8">
                        <li className="text-2xl text-[#557AAA] font-medium">
                          Non-Personal Data:
                        </li>
                        <div className="text-2xl text-[#4B5563] font-normal">
                          <div>
                            We may collect non-personally identifiable information, including browser type, device information,
                          </div>
                          <div>
                            IP address, date and time of access, to improve our website and services.
                          </div>
                        </div>
                      </ul>
                      <ul className="list-disc list-outside pl-8">
                        <li className="text-2xl text-[#557AAA] font-medium">
                          Financial Data:
                        </li>
                        <div className="text-2xl text-[#4B5563] font-normal">
                          <div>
                            If our services involve financial transactions, we collect relevant payment information,
                          </div>
                          <div>
                            which is processed securely through encryption.
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  {/* 2 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      2. Use of Data
                    </div>
                    <ul className="flex flex-col gap-8 list-disc list-outside pl-8 text-2xl text-[#4B5563] font-normal">
                      <li>
                        <div>
                          We use your information to provide and maintain our services, including account management and transaction 
                        </div>
                        <div>
                          support, to improve our products, and to send you notifications about products and services you may be 
                        </div>
                        <div>
                          interested in. We ensure to obtain your consent before using your data, as required under the PDPA.
                        </div>
                      </li>
                      <li>
                        <div>
                          We provide an option to unsubscribe from marketing communications and explain how users can exercise their 
                        </div>
                        <div>
                          PDPA rights, including access, correction, and deletion of their personal data.
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* 3 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      3. Sharing and Disclosure of Data
                    </div>
                    
                    <div className="flex flex-col gap-8">
                      <div className="pl-8 text-2xl text-[#4B5563] font-normal">
                        <div>
                          We do not sell, rent, or otherwise disclose your personal data to third parties, except under the following 
                        </div>
                        <div>
                          conditions:
                        </div>
                      </div>

                      <ul className="list-disc list-outside pl-8">
                        <li>
                          <div className="text-2xl text-[#557AAA] font-medium">
                            Service Providers:
                          </div>
                          <div className="text-2xl text-[#4B5563] font-normal">
                            <div>
                              We may share information with third-party vendors who assist us in providing services
                            </div>
                            <div>
                              (e.g., payment processors, technical support providers).
                            </div>
                            <div>
                              These vendors are obligated to protect your privacy and only have access to data necessary for their functions.
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul className="list-disc list-outside pl-8">
                        <li>
                          <div className="text-2xl text-[#557AAA] font-medium">
                            Legal Compliance:
                          </div>
                          <div className="text-2xl text-[#4B5563] font-normal">
                            <div>
                              We may disclose information as required by Malaysian law or regulations, including sharing with regulatory
                            </div>
                            <div>
                              authorities.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 4 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      4. Data Security
                    </div>
                    <div className="text-2xl text-[#4B5563] font-normal pl-7">
                      <div>
                        We take reasonable technical and organisational measures to prevent unauthorised access, disclosure, 
                      </div>
                      <div>
                        alteration, or destruction of your personal data. Although we strive to use industry-standard measures, no system 
                      </div>
                      <div>
                        can guarantee absolute security. Users are advised to consider potential security risks when transmitting data.
                      </div>
                    </div>
                  </div>
                  {/* 5 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      5. Data Retention
                    </div>
                    <div className="text-2xl text-[#4B5563] font-normal pl-7">
                      <div>
                        We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. 
                      </div>
                      <div>
                        Once the data is no longer needed, we will either delete it or anonymise it.
                      </div>
                    </div>
                  </div>
                  {/* 6 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      6. Your Privacy Rights
                    </div>
                    <div className="text-2xl text-[#4B5563] font-normal pl-7">
                      <div>
                        In compliance with the PDPA, you have the right to view, correct, and delete your personal data. Please contact us
                      </div>
                      <div>
                        using the information provided below to exercise these rights.
                      </div>
                    </div>
                  </div>
                  {/* 7 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      7. Policy Updates
                    </div>
                    <div className="text-2xl text-[#4B5563] font-normal pl-7">
                      <div>
                        We may update this Privacy Policy periodically. Any changes will be posted on this page, and we will notify you if 
                      </div>
                      <div>
                        necessary. We recommend reviewing this policy regularly to stay informed.
                      </div>
                    </div>
                  </div>
                  {/* 8 */}
                  <div>
                    <div className="text-2xl text-[#557AAA] font-bold">
                      8. Contact Us
                    </div>
                    <ul className="list-disc list-outside text-2xl text-[#4B5563] font-normal pl-8">
                      <li>
                        <div className="flex gap-1"> 
                          <div>
                            Company Name:
                          </div> 
                            <a href="#" className="text-[#557AAA]">
                            CURRENT TECH INDUSTRIES SDN BHD
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1"> 
                          <div>
                            Company Infomation:
                          </div> 
                          <a href="mailto:marketing@currencttech.pro" className="text-[#557AAA]">
                            marketing@currencttech.pro
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyModal;
