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
  },
  {
    id: 2,
    src: image2,
    title: "ENGINEERING THE FUTURE",
    description1: "Advanced technologies and scientific",
    description2: "breakthroughs are paving the way for a smarter.",
  },
  {
    id: 3,
    src: image3,
    title: "ELEVATE YOUR LIFESTYLE",
    description1:
      "Explore the latest trends in entertainment and living. Enhance your everyday",
    description2: "experiences with innovations designed for your comfort, joy, and excitement.",
  },
  {
    id: 4,
    src: image4,
    title: "BOOSTING WORK QUALITY",
    description1: "Use advanced technology to enhance productivity",
    description2: "and streamline processes for improved work quality.",
  },
];

const HomeSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagesWithText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[1080px] pt-[80px] overflow-hidden">
      <div className="relative w-full h-full">
        {imagesWithText.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-out ${
              currentSlide === index
                ? "scale-100 opacity-100 z-10"
                : "scale-50 opacity-0 z-0"
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Centered Text */}
            <div className="absolute top-1/2 left-0 w-full text-center text-white p-4 transform -translate-y-1/2">
              <div className="text-5xl font-bold mb-2">{item.title}</div>
              <div className="text-2xl font-normal text-[#D1D5DB]">
                {item.description1}
              </div>
              <div className="text-2xl font-normal text-[#D1D5DB]">
                {item.description2}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 flex gap-[10px] p-[50px]">
        {imagesWithText.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[60px] h-[1px] rounded-full ${
              currentSlide === index ? "bg-[#6B7280]" : "bg-[#D1D5DB]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSwiper;
