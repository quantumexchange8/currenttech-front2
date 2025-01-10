import React, { useState, useEffect } from "react";
import { Pos1, Pos2, Pos3, Pos4, Pos5, Pos6, Pos1S, Pos2S, Pos3S, Pos4S, Pos5S, Pos6S } from '../Components/Outline.jsx';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { useTranslation } from "react-i18next";

const HomeCircle = () => {
  const [centerTitle, setCenterTitle] = useState("POS SYSTEM");
  const [centerDescription, setCenterDescription] = useState();
  const [centerDescription2, setCenterDescription2] = useState();
  const [centerDescription3, setCenterDescription3] = useState();
  const [centerDescription4, setCenterDescription4] = useState();
  const [selectedIcon, setSelectedIcon] = useState(1);

  const {t, i18n} = useTranslation();
  

  useEffect(() => {
          AOS.init({
            duration: 1000, 
            once: true,  
            offset: 200,
          });
        }, []);
        

  // Icons with corresponding content and rotation
  const iconData = [
    { 
      id: 1, 
      defaultComponent: <Pos1 />, 
      selectedComponent: <Pos1S />,
      rotation: "0", 
      translateY: "-400px", 
      translateYMd: "-250px",
      title: <div>{t("homeCircle.posSystem.title")}</div>,
      description: <div>{t("homeCircle.posSystem.descriptionBold")} <span className="font-medium">400+</span> {t("homeCircle.posSystem.descriptionBold2")}</div>,
      description2: <div>{t("homeCircle.posSystem.description2")}</div>,
      description3: <div>{t("homeCircle.posSystem.description3")}</div>,
      description4: <div>{t("homeCircle.posSystem.description4")}</div>,
      
    },
    { 
      id: 2, 
      defaultComponent: <Pos2 />, 
      selectedComponent: <Pos2S />,
      rotation: "60", 
      translateY: "-400px", 
      translateYMd: "-250px",
      title: <div>{t("homeCircle.hrCmsSystem.title")}</div>,
      description: <div>{t("homeCircle.hrCmsSystem.description")}</div>,
      description2: <div>{t("homeCircle.hrCmsSystem.descriptionBold")} <span className="font-medium">30+</span> {t("homeCircle.hrCmsSystem.descriptionBold2")}</div>,
      description3: <div>{t("homeCircle.hrCmsSystem.description3")}</div>,
      description4: <div>{t("homeCircle.hrCmsSystem.description4")}</div>,
      
    },
    { 
      id: 3, 
      defaultComponent: <Pos3 />,
      selectedComponent: <Pos3S />, 
      rotation: "120", 
      translateY: "-400px", 
      translateYMd: "-250px",
      title: <div>{t("homeCircle.stockControl.title")}</div>,
      description: <div>{t("homeCircle.stockControl.description")}</div>,
      description2: <div>{t("homeCircle.stockControl.descriptionBold")} <span className="font-medium"> {t("homeCircle.stockControl.bold")} </span> {t("homeCircle.stockControl.descriptionBold2")}</div>,
      description3: <div>{t("homeCircle.stockControl.description3")}</div>,
      description4: <div>{t("homeCircle.stockControl.description4")}</div>,
      
    },
    { 
      id: 4, 
      defaultComponent: <Pos4 />, 
      selectedComponent: <Pos4S />,
      rotation: "0", 
      translateY: "400px", 
      translateYMd: "250px",
      title: <div>{t("homeCircle.foodOrdering.title")}</div>,
      description: <div>{t("homeCircle.foodOrdering.description")}</div>,
      description2: <div><span className="font-medium"> {t("homeCircle.foodOrdering.bold")} </span> {t("homeCircle.foodOrdering.descriptionBold")}</div>,
      description3: <div>{t("homeCircle.foodOrdering.description2")}</div>,
      description4: <div>{t("homeCircle.foodOrdering.description3")}</div>,
      
    },
    { 
      id: 5, 
      defaultComponent: <Pos5 />, 
      selectedComponent: <Pos5S />,
      rotation: "240", 
      translateY: "-400px", 
      translateYMd: "-250px",
      title: <div>{t("homeCircle.eInvoice.title")}</div>,
      description: <div>{t("homeCircle.eInvoice.description")}</div>,
      description2: <div>{t("homeCircle.eInvoice.descriptionBold")}<span className="font-medium"> {t("homeCircle.eInvoice.bold")} </span> </div>,
      description3: <div className="w-[310px]"><span className="font-medium"> {t("homeCircle.eInvoice.bold2")} </span>{t("homeCircle.eInvoice.descriptionBold2")}</div>,
      description4: <div>{t("homeCircle.eInvoice.description2")}</div>,
      
    },
    { 
      id: 6, 
      defaultComponent: <Pos6 />, 
      selectedComponent: <Pos6S />,
      rotation: "300", 
      translateY: "-400px", 
      translateYMd: "-250px",
      title: <div>{t("homeCircle.forexLabelSolution.title")}</div>,
      description: <div>{t("homeCircle.forexLabelSolution.descriptionBold")}<span className="font-medium"> {t("homeCircle.forexLabelSolution.bold2")} </span>{t("homeCircle.forexLabelSolution.descriptionBold2")} </div>,
      description2: <div>{t("homeCircle.forexLabelSolution.description")}</div>,
      description3: <div>{t("homeCircle.forexLabelSolution.description2")}</div>,
      description4: <div>{t("homeCircle.forexLabelSolution.description3")}</div>,
      
    },
  ];

  // Set default content when the selected icon changes
  useEffect(() => {
    const selectedItem = iconData.find(item => item.id === selectedIcon);
    setCenterTitle(selectedItem.title);
    setCenterDescription(selectedItem.description);
    setCenterDescription2(selectedItem.description2);
    setCenterDescription3(selectedItem.description3);
    setCenterDescription4(selectedItem.description4);
  }, [selectedIcon]);

  return (
    <div className="relative w-full md:h-[600px] lg:h-[925px] flex justify-center items-center" data-aos="fade-up">
      {/* Outer Circle */}
      <div className="relative md:w-[500px] lg:w-[800px] md:h-[500px] lg:h-[800px] border rounded-full" ></div>

      {/* Center Circle */}
      <div className="absolute md:w-[300px] lg:w-[500px] md:h-[300px] lg:h-[500px] bg-gray-200 rounded-full flex items-center justify-center text-center" data-aos="fade-up" data-aos-delay="400">
        <div className="flex flex-col gap-[10px]">
          <div className="font-bold text-lg lg:text-2xl text-[#153764]">{centerTitle}</div>
          <div className="md:text-sm lg:text-xl font-normal text-gray-600 md:w-[350px]">
            <div>{centerDescription}</div>
            <div>{centerDescription2}</div>
            <div>{centerDescription3}</div>
            <div>{centerDescription4}</div>
          </div>
        </div>
      </div>

      {/* Icons */}
      {iconData.map((item) => (
        <div
          key={item.id}
          className={`hidden lg:flex justify-center items-center absolute md:w-[80px] lg:w-[120px] md:h-[80px] lg:h-[120px] rounded-full cursor-pointer 
                      ${selectedIcon === item.id ? "bg-blue-100" : "bg-gray-100"}`}
          style={{
            transform: `rotate(${item.rotation}deg) translateY(${item.translateY}) rotate(-${item.rotation}deg)`,
          }}
          onClick={() => setSelectedIcon(item.id)}
        >
          {selectedIcon === item.id ? item.selectedComponent : item.defaultComponent}
        </div>
      ))}
      {iconData.map((item) => (
        <div
          key={item.id}
          className={`hidden lg:hidden md:flex justify-center items-center absolute w-[80px] h-[80px] rounded-full cursor-pointer 
                      ${selectedIcon === item.id ? "bg-blue-100" : "bg-gray-100"}`}
          style={{
            transform: `rotate(${item.rotation}deg) translateY(${item.translateYMd}) rotate(-${item.rotation}deg)`,
          }}
          onClick={() => setSelectedIcon(item.id)}
        >
          {selectedIcon === item.id ? item.selectedComponent : item.defaultComponent}
        </div>
      ))}
    </div>
  );
};

export default HomeCircle;
