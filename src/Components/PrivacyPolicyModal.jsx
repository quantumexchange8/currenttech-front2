import React, { useState } from "react";
import { Close, CloseM } from "./Outline";
import { useTranslation } from "react-i18next";

const PrivacyPolicyModal = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

const { t, i18n } = useTranslation();

  return (
    <div>
      {/* Footer Button */}
      <div className="text-[#557AAA] text-base xl:text-xl font-medium md:font-normal">
        
        <button
          onClick={openModal}
        >
          {t("PrivacyPolicyModal.name")}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" w-[380px] md:w-[1570px] h-screen overflow-y-auto bg-white pt-[23px] pb-[87px] md:py-[96px] px-[15px] md:px-[56px]">
            <div className="w-[350px] md:w-[1428px] flex flex-col gap-6 md:gap-10">
              {/* Header */}
              {/* Web */}
              <div className="hidden xl:flex justify-between items-center">
                <div className="text-xl md:text-[40px] text-[#153764] font-bold">
                  {t("PrivacyPolicyModal.currentTech")}
                </div>
                <button
                  onClick={closeModal}
                  className="text-black"
                >
                  <Close />
                </button>
              </div>
              {/* Mobile */}
              <div className="md:hidden flex flex-col gap-[17px]">
                <div className="flex justify-end items-end">
                  <button
                    onClick={closeModal}
                    className="text-black"
                  >
                    <CloseM />
                  </button>
                </div>
                <div className="text-xl md:text-[40px] text-[#153764] font-bold">
                  <div>
                    CURRENT TECH INDUSTRIES
                  </div> 
                  <div>
                    SDN BHD
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Privacy Policy */}
                <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                  <div>
                    {t("PrivacyPolicyModal.privacyPolicy")}
                  </div>
                  <div>
                    {t("PrivacyPolicyModal.effectiveDate")}
                  </div>
                </div>
                {/* Thank you */}
                <div className="text-sm md:text-2xl text-[#4B5563] font-normal">
                  <div>
                    {t("PrivacyPolicyModal.thankYou")}
                  </div>
                  <div>
                    {t("PrivacyPolicyModal.weValueYour")}
                  </div>
                  <div>
                    {t("PrivacyPolicyModal.thePrivacyPolicy")}
                  </div>
                </div>
                {/* Points */}
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* 1 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.collectionOfInfo")}
                    </div>
                    <div className="flex flex-col gap-6 md:gap-8">
                      <ul className="list-disc list-outside pl-5 md:pl-8">
                        <li className="text-sm md:text-2xl text-[#557AAA] font-medium">
                          {t("PrivacyPolicyModal.personalData")}
                        </li>
                        <div className="text-sm md:text-2xl text-[#4B5563] font-normal ">
                          <div>
                            {t("PrivacyPolicyModal.weMayCollect")}
                          </div>
                          <div>
                            {t("PrivacyPolicyModal.typicallyWhen")}
                          </div>
                        </div>
                      </ul>
                      
                      <ul className="list-disc list-outside pl-5 md:pl-8">
                        <li className="text-sm md:text-2xl text-[#557AAA] font-medium">
                          {t("PrivacyPolicyModal.NonPersonalData")}
                        </li>
                        {/* Web */}
                        <div className="hidden md:block text-2xl text-[#4B5563] font-normal">
                          <div>
                            {t("PrivacyPolicyModal.collectNonPersonally")}
                          </div>
                          <div>
                            {t("PrivacyPolicyModal.ipAddress")}
                          </div>
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden text-sm text-[#4B5563] font-normal">
                          <div>
                            We may collect non-personally identifiable information, including browser type, device information, IP address, date and time of access, to improve our website and services.
                          </div>
                        </div>
                      </ul>

                      <ul className="list-disc list-outside pl-5 md:pl-8">
                        <li className="text-sm md:text-2xl text-[#557AAA] font-medium">
                          {t("PrivacyPolicyModal.financialData")}
                        </li>
                        {/* Web */}
                        <div className="hidden md:block text-2xl text-[#4B5563] font-normal">
                          <div>
                            {t("PrivacyPolicyModal.ifOurService")}
                          </div>
                          <div>
                            {t("PrivacyPolicyModal.whichIs")}
                          </div>
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden text-sm text-[#4B5563] font-normal">
                          <div>
                            If our services involve financial transactions, we collect relevant payment information, which is processed securely through encryption.
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  {/* 2 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.useOfData")}
                    </div>
                    {/* Web */}
                    <ul className="hidden md:flex flex-col gap-8 list-disc list-outside pl-8 text-2xl text-[#4B5563] font-normal">
                      <li>
                        <div>
                           {t("PrivacyPolicyModal.weUseYou")}
                        </div>
                        <div>
                          {t("PrivacyPolicyModal.support")}
                        </div>
                        <div>
                          {t("PrivacyPolicyModal.interestedIn")}
                        </div>
                      </li>
                      <li>
                        <div>
                          {t("PrivacyPolicyModal.weProvide")}
                        </div>
                        <div>
                          {t("PrivacyPolicyModal.pdpaRight")}
                        </div>
                      </li>
                    </ul>
                    {/* Mobile */}
                    <ul className="md:hidden flex flex-col gap-6 md:gap-8 list-disc list-outside pl-5 text-sm text-[#4B5563] font-normal">
                      <li>
                        <div>
                          We use your information to provide and maintain our services, including account management and transaction support, to improve our products, and to send you notifications about products and services you may be interested in. We ensure to obtain your consent before using your data, as required under the PDPA.
                        </div>
                      </li>
                      <li>
                        <div>
                          We provide an option to unsubscribe from marketing communications and explain how users can exercise their PDPA rights, including access, correction, and deletion of their personal data.
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* 3 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.sharingAndDisclosure")}
                    </div>
                    
                    <div className="flex flex-col gap-6 md:gap-8">
                      {/* Web */}
                      <div className="hidden md:block pl-8 text-2xl text-[#4B5563] font-normal">
                        <div>
                          {t("PrivacyPolicyModal.weDoNotSell")}
                        </div>
                        <div>
                          {t("PrivacyPolicyModal.conditions")}
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="md:hidden pl-5 text-sm text-[#4B5563] font-normal w-[345px]" >
                        <div>
                          We do not sell, rent, or otherwise disclose your personal data to third parties, except under the following conditions:
                        </div>
                      </div>

                      <ul className="list-disc list-outside pl-5 md:pl-8">
                        <li>
                          <div className="text-sm md:text-2xl text-[#557AAA] font-medium">
                            {t("PrivacyPolicyModal.serviceProviders")}
                          </div>
                          {/* Web */}
                          <div className="hidden md:block text-2xl text-[#4B5563] font-normal">
                            <div>
                              {t("PrivacyPolicyModal.weMayShare")}
                            </div>
                            <div>
                              {t("PrivacyPolicyModal.paymentProcessors")}
                            </div>
                            <div>
                              {t("PrivacyPolicyModal.theseVendors")}
                            </div>
                          </div>
                          {/* Mobile */}
                          <div className="md:hidden text-sm text-[#4B5563] font-normal">
                            <div>
                              We may share information with third-party vendors who assist us in providing services (e.g., payment processors, technical support providers). These vendors are obligated to protect your privacy and only have access to data necessary for their functions.
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul className="list-disc list-outside pl-5 md:pl-8">
                        <li>
                          <div className="text-sm md:text-2xl text-[#557AAA] font-medium">
                            {t("PrivacyPolicyModal.legalCompliance")}
                          </div>
                          {/* Web */}
                          <div className="hidden md:block text-2xl text-[#4B5563] font-normal">
                            <div>
                              {t("PrivacyPolicyModal.weMayDisclose")}
                            </div>
                            <div>
                              {t("PrivacyPolicyModal.authorities")}
                            </div>
                          </div>
                          {/* Mobile */}
                          <div className="md:hidden text-sm text-[#4B5563] font-normal">
                            We may disclose information as required by Malaysian law or regulations, including sharing with regulatory authorities.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 4 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.dataSecurity")}
                    </div>
                    {/* Web */}
                    <div className="hidden md:block text-2xl text-[#4B5563] font-normal pl-8">
                      <div>
                        {t("PrivacyPolicyModal.weTakeReasonable")}
                      </div>
                      <div>
                        {t("PrivacyPolicyModal.alteration")}
                      </div>
                      <div>
                        {t("PrivacyPolicyModal.canGuarantee")}
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden text-sm text-[#4B5563] font-normal pl-5">
                      We take reasonable technical and organisational measures to prevent unauthorised access, disclosure, alteration, or destruction of your personal data. Although we strive to use industry-standard measures, no system can guarantee absolute security. Users are advised to consider potential security risks when transmitting data.
                    </div>
                  </div>
                  {/* 5 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.dataRetention")}
                    </div>
                    {/* Web */}
                    <div className="hidden md:block text-2xl text-[#4B5563] font-normal pl-8">
                      <div>
                        {t("PrivacyPolicyModal.weRetain")}
                      </div>
                      <div>
                        {t("PrivacyPolicyModal.onceTheData")}
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden text-sm text-[#4B5563] font-normal pl-5">
                      We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Once the data is no longer needed, we will either delete it or anonymise it.
                    </div>
                  </div>
                  {/* 6 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.yourPrivacyRights")}
                    </div>
                    {/* Web */}
                    <div className="hidden md:block text-2xl text-[#4B5563] font-normal pl-8">
                      <div>
                        {t("PrivacyPolicyModal.incompliance")}
                      </div>
                      <div>
                        {t("PrivacyPolicyModal.usingTheInfo")}
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden text-sm text-[#4B5563] font-normal pl-5">
                      In compliance with the PDPA, you have the right to view, correct, and delete your personal data. Please contact us using the information provided below to exercise these rights.
                    </div>
                  </div>
                  {/* 7 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.policyUpdates")}
                    </div>
                    {/* Web */}
                    <div className="hidden md:block text-2xl text-[#4B5563] font-normal pl-8">
                      <div>
                        {t("PrivacyPolicyModal.weMayUpdate")}
                      </div>
                      <div>
                        {t("PrivacyPolicyModal.necessary")}
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden text-sm text-[#4B5563] font-normal pl-5">
                      We may update this Privacy Policy periodically. Any changes will be posted on this page, and we will notify you if necessary. We recommend reviewing this policy regularly to stay informed.
                    </div>
                  </div>
                  {/* 8 */}
                  <div>
                    <div className="text-sm md:text-2xl text-[#557AAA] font-bold">
                      {t("PrivacyPolicyModal.contactUs")}
                    </div>
                    <ul className="flex flex-col gap-4 md:gap-1 list-disc list-outside text-sm md:text-2xl text-[#4B5563] font-normal pl-5 md:pl-8">
                      <li>
                        <div className="flex flex-col md:flex-row md:gap-1"> 
                          <div>
                            {t("PrivacyPolicyModal.companyName")}
                          </div> 
                            <a href="#" className="text-[#153764] md:text-[#557AAA]">
                            {t("PrivacyPolicyModal.currentTech")}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col md:flex-row md:gap-1"> 
                          <div>
                            {t("PrivacyPolicyModal.companyInfo")}
                          </div> 
                          <a href="mailto:marketing@currencttech.pro" className="text-[#153764] md:text-[#557AAA]">
                            {t("PrivacyPolicyModal.marketing")}
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
