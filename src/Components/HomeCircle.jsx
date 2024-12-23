import React, { useState, useEffect } from "react";
import { Pos1, Pos2, Pos3, Pos4, Pos5, Pos6, Pos1S, Pos2S, Pos3S, Pos4S, Pos5S, Pos6S } from '../Components/Outline.jsx';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const HomeCircle = () => {
  const [centerTitle, setCenterTitle] = useState("POS SYSTEM");
  const [centerDescription, setCenterDescription] = useState();
  const [centerDescription2, setCenterDescription2] = useState();
  const [centerDescription3, setCenterDescription3] = useState();
  const [centerDescription4, setCenterDescription4] = useState();
  const [selectedIcon, setSelectedIcon] = useState(1);

  useEffect(() => {
          AOS.init({
            duration: 1000, 
            once: false,  
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
      title: "POS SYSTEM",
      description: "With over 400+",
      description2: "premium retail clients",
      description3: "using our POS system.",
      description4: "",
    },
    { 
      id: 2, 
      defaultComponent: <Pos2 />, 
      selectedComponent: <Pos2S />,
      rotation: "60", 
      translateY: "-400px", 
      title: "HR & CMS SYSTEM",
      description: "Our management",
      description2: "system supports over 30+",
      description3: "traditional industry firms",
      description4: "and brokerages.",
    },
    { 
      id: 3, 
      defaultComponent: <Pos3 />,
      selectedComponent: <Pos3S />, 
      rotation: "120", 
      translateY: "-400px", 
      title: "STOCK CONTROL",
      description: "Wine & alcohol storage ",
      description2: "system amazes bars and",
      description3: "venues, easing record-",
      description4: "keeping hassles.", 
    },
    { 
      id: 4, 
      defaultComponent: <Pos4 />, 
      selectedComponent: <Pos4S />,
      rotation: "0", 
      translateY: "400px", 
      title: "FOOD ORDERING",
      description: "Our food ordering system ",
      description2: "impresses restaurants and ",
      description3: "cafes, simplifying order ",
      description4: "management effortlessly.", 
    },
    { 
      id: 5, 
      defaultComponent: <Pos5 />, 
      selectedComponent: <Pos5S />,
      rotation: "240", 
      translateY: "-400px", 
      title: "e-INVOICE",
      description: "Our LHDN-certified",
      description2: "e-Invoice system streamlines",
      description3: "invoicing and ensures ",
      description4: "effortless compliance.", 
    },
    { 
      id: 6, 
      defaultComponent: <Pos6 />, 
      selectedComponent: <Pos6S />,
      rotation: "300", 
      translateY: "-400px", 
      title: "FOREX LABEL SOLUTION",
      description: "Over 10+ brokerages have ",
      description2: "gained licensing and are ",
      description3: "operational through our ",
      description4: "Label solution.", 
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
    <div className="relative w-full h-[925px] flex justify-center items-center" data-aos="fade-up">
      {/* Outer Circle */}
      <div className="relative w-[800px] h-[800px] border rounded-full" ></div>

      {/* Center Circle */}
      <div className="absolute w-[500px] h-[500px] bg-gray-200 rounded-full flex items-center justify-center text-center" data-aos="fade-up" data-aos-delay="400">
        <div className="flex flex-col gap-[10px]">
          <div className="font-bold text-2xl text-[#153764]">{centerTitle}</div>
          <div className="text-xl font-normal text-gray-600 px-12">
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
          className={`absolute w-[120px] h-[120px] rounded-full flex justify-center items-center cursor-pointer 
                      ${selectedIcon === item.id ? "bg-blue-100" : "bg-gray-100"}`}
          style={{
            transform: `rotate(${item.rotation}deg) translateY(${item.translateY}) rotate(-${item.rotation}deg)`,
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
