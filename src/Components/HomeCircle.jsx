import React, { useState, useEffect, useCallback, useMemo  } from "react";
import { Pos1, Pos2, Pos3, Pos4, Pos5, Pos6, Pos1S, Pos2S, Pos3S, Pos4S, Pos5S, Pos6S } from "../Components/Outline.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const HomeCircle = () => {
  const [centerTitle, setCenterTitle] = useState("");
  const [centerDescription, setCenterDescription] = useState("");
  const [centerDescription2, setCenterDescription2] = useState("");
  const [centerDescription3, setCenterDescription3] = useState("");
  const [centerDescription4, setCenterDescription4] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(1);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  const iconData = useMemo(() => [
    {
      id: 1,
      defaultComponent: <Pos1 />,
      selectedComponent: <Pos1S />,
      rotation: "0",
      translateY: "-400px",
      translateYMd: "-250px",
      getContent: () => ({
        title: t("homeCircle.posSystem.title"),
        description: (
          <div>
            {t("homeCircle.posSystem.descriptionBold")}{" "}
            <span className="font-medium">400+</span>{" "}
            {t("homeCircle.posSystem.descriptionBold2")}
          </div>
        ),
        description2: t("homeCircle.posSystem.description2"),
        description3: t("homeCircle.posSystem.description3"),
        description4: t("homeCircle.posSystem.description4"),
      }),
    },
    {
      id: 2,
      defaultComponent: <Pos2 />,
      selectedComponent: <Pos2S />,
      rotation: "60",
      translateY: "-400px",
      translateYMd: "-250px",
      getContent: () => ({
        title: t("homeCircle.hrCmsSystem.title"),
        description: (<div className="md:w-[250px] xl:w-[280px]">{t("homeCircle.hrCmsSystem.description")}</div>),
        description2: (
          <div>
            {t("homeCircle.hrCmsSystem.descriptionBold")}{" "}
            <span className="font-medium">30+</span>{" "}
            {t("homeCircle.hrCmsSystem.descriptionBold2")}
          </div>
        ),
        description3: t("homeCircle.hrCmsSystem.description3"),
        description4: t("homeCircle.hrCmsSystem.description4"),
      }),
    },
    {
      id: 3,
      defaultComponent: <Pos3 />,
      selectedComponent: <Pos3S />,
      rotation: "120",
      translateY: "-400px",
      translateYMd: "-250px",
      getContent: () => ({
        title: t("homeCircle.stockControl.title"),
        description: t("homeCircle.stockControl.description"),
        description2: (
          <div>
            {t("homeCircle.stockControl.descriptionBold")}{" "}
            <span className="font-medium">{t("homeCircle.stockControl.bold")}</span>{" "}
            {t("homeCircle.stockControl.descriptionBold2")}
          </div>
        ),
        description3: t("homeCircle.stockControl.description3"),
        description4: t("homeCircle.stockControl.description4"),
      }),
    },
    {
      id: 4,
      defaultComponent: <Pos4 />,
      selectedComponent: <Pos4S />,
      rotation: "0",
      translateY: "400px",
      translateYMd: "250px",
      getContent: () => ({
        title: t("homeCircle.foodOrdering.title"),
        description: t("homeCircle.foodOrdering.description"),
        description2: (
          <div>
            <span className="font-medium">{t("homeCircle.foodOrdering.bold")}</span>{" "}
            {t("homeCircle.foodOrdering.descriptionBold")}
          </div>
        ),
        description3: t("homeCircle.foodOrdering.description2"),
        description4: (<div className="w-[250px] xl:w-[280px]">{t("homeCircle.foodOrdering.description3")}</div>),
      }),
    },
    {
      id: 5,
      defaultComponent: <Pos5 />,
      selectedComponent: <Pos5S />,
      rotation: "240",
      translateY: "-400px",
      translateYMd: "-250px",
      getContent: () => ({
        title: t("homeCircle.eInvoice.title"),
        description: t("homeCircle.eInvoice.description"),
        description2: (
          <div>
            {t("homeCircle.eInvoice.descriptionBold")}{" "}
            <span className="font-medium">{t("homeCircle.eInvoice.bold")}</span>
          </div>
        ),
        description3: (
          <div className="w-[270px] xl:w-[300px]">
            <span className="font-medium">{t("homeCircle.eInvoice.bold2")}</span>{" "}
            {t("homeCircle.eInvoice.descriptionBold2")}
          </div>
        ),
        description4: (<div className="md:w-[230px] xl:w-[300px]">{t("homeCircle.eInvoice.description2")}</div>),
      }),
    },
    {
      id: 6,
      defaultComponent: <Pos6 />,
      selectedComponent: <Pos6S />,
      rotation: "300",
      translateY: "-400px",
      translateYMd: "-250px",
      getContent: () => ({
        title: t("homeCircle.forexLabelSolution.title"),
        description: (
          <div>
            {t("homeCircle.forexLabelSolution.descriptionBold")}{" "}
            <span className="font-medium">{t("homeCircle.forexLabelSolution.bold2")}</span>{" "}
            {t("homeCircle.forexLabelSolution.descriptionBold2")}
          </div>
        ),
        description2: (<div className="w-[270px] xl:w-[350px]">{t("homeCircle.forexLabelSolution.description")}</div>),
        description3: t("homeCircle.forexLabelSolution.description2"),
        description4: t("homeCircle.forexLabelSolution.description3"),
      }),
    },
  ], [t]);

  const updateContent = useCallback((iconId) => {
    const selectedItem = iconData.find((item) => item.id === iconId);
    if (selectedItem) {
      const content = selectedItem.getContent();
      setCenterTitle(content.title);
      setCenterDescription(content.description);
      setCenterDescription2(content.description2);
      setCenterDescription3(content.description3);
      setCenterDescription4(content.description4);
    }
  }, [iconData]);

  useEffect(() => {
    updateContent(selectedIcon);
  }, [selectedIcon, updateContent]);

  useEffect(() => {
    const handleLanguageChange = () => updateContent(selectedIcon);

    i18n.on("languageChanged", handleLanguageChange);

    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [i18n, selectedIcon, updateContent]);

  return (
    <div className="relative w-full md:h-[600px] xl:h-[920px] flex justify-center items-center" data-aos="fade-up">
      {/* Outer Circle */}
      <div className="relative md:w-[500px] xl:w-[800px] md:h-[500px] xl:h-[800px] border rounded-full"></div>

      {/* Center Circle */}
      <div
        className="absolute md:w-[300px] xl:w-[500px] md:h-[300px] xl:h-[500px] bg-gray-200 rounded-full flex items-center justify-center text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-col gap-[10px]">
          <div className="font-bold text-lg xl:text-2xl text-[#153764]">{centerTitle}</div>
          <div className="md:text-sm xl:text-xl flex flex-col justify-center items-center font-normal text-gray-600 w-[270px] xl:w-full">
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
          className={`hidden xl:flex justify-center items-center absolute xl:w-[120px] xl:h-[120px] rounded-full cursor-pointer 
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
          className={`hidden md:flex xl:hidden justify-center items-center absolute w-[80px] h-[80px] rounded-full cursor-pointer 
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
