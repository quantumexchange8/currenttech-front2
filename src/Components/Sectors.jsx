import React from 'react';
import img_FoodBeverage from "../Assets/Images/Home_F&B.png"
import img_Wholesale from "../Assets/Images/Home_Wholesale.png"
import img_Retail from "../Assets/Images/Home_Retail.png"
import img_Logistic from "../Assets/Images/Home_Logistic.png"
import img_Enterprise from "../Assets/Images/Home_Enterprise.png"
import img_Education from "../Assets/Images/Home_Education.png"
import { useTranslation } from 'react-i18next';


const Sectors = () => {
    const { t, i18n } = useTranslation();
  const sectors = [
    {
      id: "education",
      title: t("Home.ImgCombinationTitle.educationImgTitle"),
      description: t("Home.ImgCombinationDescription.educationImgDescription"),
      imgSrc: img_Education,
    },
    {
      id: "fnb",
      title: t("Home.ImgCombinationTitle.F&BImgTitle"),
      description: t("Home.ImgCombinationDescription.F&BImgDescription"),
      imgSrc: img_FoodBeverage,
    },
    {
      id: "wholesale",
      title: t("Home.ImgCombinationTitle.wholesaleImgTitle"),
      description: t("Home.ImgCombinationDescription.wholesaleImgDescription"),
      imgSrc: img_Wholesale,
    },
    {
      id: "logistic",
      title: t("Home.ImgCombinationTitle.logisticImgTitle"),
      description: t("Home.ImgCombinationDescription.logisticImgDescription"),
      imgSrc: img_Logistic,
    },
    {
      id: "enterprise",
      title: t("Home.ImgCombinationTitle.enterpriseImgTitle"),
      description: t("Home.ImgCombinationDescription.enterpriseImgDescription"),
      imgSrc: img_Enterprise,
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sectors.map((sector) => (
        <div
          key={sector.id}
          id={sector.id}
          className="snap-start h-screen flex flex-col justify-center items-center bg-[#D5E7FF] px-4"
        >
          <div className="text-4xl font-normal text-[#557AAA]" data-aos="fade-up">
            OUR UNIQUE PRODUCTS
          </div>
          <div
            className="text-[64px] font-bold text-[#153764] mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {sector.title}
          </div>
          <img
            src={sector.imgSrc}
            alt={sector.title}
            className="w-[650px] h-[406px] mt-5"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <div
            className="text-[#4B5563] text-sm md:text-2xl mt-5 leading-normal w-[80%] md:w-[50%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {sector.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sectors;
