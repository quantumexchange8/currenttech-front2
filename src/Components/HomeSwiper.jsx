import React, { useState, useEffect } from "react";
import image1 from "../Assets/Images/Home/1.png";
import image2 from "../Assets/Images/Home/2.png";
import image3 from "../Assets/Images/Home/3.png";
import image4 from "../Assets/Images/Home/4.png";
import { useTranslation } from "react-i18next";

const imagesWithText = [
  { id: 1, src: image1, key: "homeSwiper.slide1" },
  { id: 2, src: image2, key: "homeSwiper.slide2" },
  { id: 3, src: image3, key: "homeSwiper.slide3" },
  { id: 4, src: image4, key: "homeSwiper.slide4" },
];

const HomeSwiper = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagesWithText.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[932px] xl:h-[1080px] pt-[50px] xl:pt-[80px] overflow-hidden">
      <div className="relative w-full h-full">
        {imagesWithText.map((item, index) => {
          const translation = t(item.key, { returnObjects: true });

          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in ${
                currentSlide === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              <img
                src={item.src}
                alt={translation.title}
                className="w-full h-full object-cover"
              />
              {/* Centered Text */}
              <div className="absolute top-1/2 left-0 flex flex-col gap-4 w-full text-center text-white transform -translate-y-1/2 px-[20px] h-[200px] xl:h-auto">
                <div className="text-2xl md:text-4xl xl:text-5xl font-bold leading-normal">
                  {translation.title}
                </div>
                <div className="w-full px-[10px] flex flex-col items-center">
                  <div className="hidden sm:block sm:text-base md:text-2xl font-normal text-[#D1D5DB] w-full">
                    {translation.description1}
                  </div>
                  <div className="hidden sm:block sm:text-base md:text-2xl font-normal text-[#D1D5DB] leading-normal w-full">
                    {translation.description2}
                  </div>
                  <div className="sm:hidden text-xl font-normal text-[#D1D5DB] leading-normal w-[360px]">
                    <div>{translation.descriptionMobile}</div>
                    <div>{translation.descriptionMobile2}</div>
                    <div>{translation.descriptionMobile3}</div>
                    <div>{translation.descriptionMobile4}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination */}
      <div className="absolute z-40 bottom-0 left-1/2 transform -translate-x-1/2 flex gap-[5px] md:gap-[10px] p-[50px]">
        {imagesWithText.map((_, index) => (
          <div
            key={index}
            className="relative w-[40px] md:w-[60px] h-[3px] bg-[#D1D5DB] rounded-full overflow-hidden"
          >
            <div
              className={`absolute top-0 left-0 h-full bg-[#6B7280] ${
                currentSlide === index
                  ? "transition-all duration-[4000ms] w-full"
                  : "w-0 transition-none"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSwiper;
