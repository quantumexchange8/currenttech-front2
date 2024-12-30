import React, { useState, useEffect } from "react";
import image1 from "../Assets/Images/Home/1.png";
import image2 from "../Assets/Images/Home/2.png";
import image3 from "../Assets/Images/Home/3.png";
import image4 from "../Assets/Images/Home/4.png";

const imagesWithText = [
  {
    id: 1,
    src: image1,
    title: "EXPERIENCE THE REVOLUTION",
    description1: "Innovation and technological advancements are the",
    description2: "keys to unlocking a sustainable and prosperous future.",
    descriptionMobile: "Innovation and technological advancements are the keys to",
    descriptionMobile2: "unlocking a sustainable and",
    descriptionMobile3: "prosperous future.",
    descriptionMobile4: "",
  },
  {
    id: 2,
    src: image2,
    title: "ENGINEERING THE FUTURE",
    description1: "Advanced technologies and scientific",
    description2: "breakthroughs are paving the way for a smarter.",
    descriptionMobile: "Advanced technologies and",
    descriptionMobile2: "scientific breakthroughs are",
    descriptionMobile3: "paving the way for a smarter.",
    descriptionMobile4: "",
  },
  {
    id: 3,
    src: image3,
    title: "ELEVATE YOUR LIFESTYLE",
    description1:"Explore the latest trends in entertainment and living. Enhance your everyday",
    description2: "experiences with innovations designed for your comfort, joy, and excitement.",
    descriptionMobile: "Explore the latest trends in entertainment and living. Enhance",
    descriptionMobile2: "your everyday experiences with innovations designed for your ",
    descriptionMobile3: "comfort, joy, and excitement.",
    descriptionMobile4: "",
  },
  {
    id: 4,
    src: image4,
    title: "BOOSTING WORK QUALITY",
    description1: "Use advanced technology to enhance productivity",
    description2: "and streamline processes for improved work quality.",
    descriptionMobile: "Use advanced technology to ",
    descriptionMobile2: "enhance productivity and ",
    descriptionMobile3: "streamline processes for improved work quality.",
    descriptionMobile4: "work quality.",
  },
];

const HomeSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagesWithText.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[932px] md:h-[1080px] pt-[80px] overflow-hidden">
      <div className="relative w-full h-full">
        {imagesWithText.map((item, index) => (
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
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Centered Text */}
            <div className="absolute top-1/2 left-0 w-full text-center text-white p-4 transform -translate-y-1/2">
              <div className="text-2xl md:text-5xl font-bold mb-2">{item.title}</div>
              <div className="hidden md:block text-2xl font-normal text-[#D1D5DB]">
                {item.description1}
              </div>
              <div className="hidden md:block text-2xl font-normal text-[#D1D5DB]">
                {item.description2}
              </div>
              <div className="md:hidden text-xl font-normal text-[#D1D5DB]">
                {item.descriptionMobile}
              </div>
              <div className="md:hidden text-xl font-normal text-[#D1D5DB]">
                {item.descriptionMobile2}
              </div>
              <div className="md:hidden text-xl font-normal text-[#D1D5DB]">
                {item.descriptionMobile3}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 flex gap-[5px] md:gap-[10px] p-[50px]">
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