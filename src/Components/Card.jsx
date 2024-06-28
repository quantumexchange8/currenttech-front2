import React from 'react';
import { Link } from 'react-router-dom';
import { Fire } from './Outline.jsx';

const Card = ({ card, index, handleButtonClick }) => {
  return (
    <div key={index} className="max-w-[150px] md:max-w-[230px]">
      <div className="group relative border rounded-lg overflow-hidden shadow-lg">
        <img src={card.image} alt={`${card.title} ${card.code} ${card.rate}`} className="w-full object-cover"/>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-35 md:transform md:translate-y-full md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:ease-in-out p-2">
          <div className="flex flex-col gap-[4px] text-left">
            <div className="flex flex-col gap-[10px]">
              <div className="text-white text-[10px] md:text-sm font-bold">
                {card.title}
              </div>
              <div className="text-white text-[10px] md:text-sm font-medium">
                {card.code}
              </div>
            </div>
            <div className="flex gap-[10px] items-center">
              <div>
                <Fire />
              </div>
              <div className="text-[10px] md:text-sm text-[#F00] font-medium">
                {card.rate}
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between mt-2">
            <Link to={card.link} className="text-blue-500">Learn More</Link>
            <button
              onClick={() => handleButtonClick(index)}
              className="text-blue-500"
            >
              Share
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
