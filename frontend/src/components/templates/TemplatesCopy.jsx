import React, { useState, useEffect } from "react";
import "./templatesCopy.scss";

const cardsData = [
  "/images/templates/template1.png",
  "/images/templates/template2.png",
  "/images/templates/template3.png",
];

const TemplatesCopy = () => {
  const [cardClasses, setCardClasses] = useState(["left", "active", "right"]);

  const changePositions = (index) => {
    if (cardClasses[index] === "active") return;
    const newClasses = [...cardClasses];
    const activeIndex = newClasses.indexOf("active");
    [newClasses[index], newClasses[activeIndex]] = [
      newClasses[activeIndex],
      newClasses[index],
    ];
    setCardClasses(newClasses);
  };

  useEffect(() => {
    setCardClasses(["left", "active", "right"]);
  }, []);

  return (
    <div className="h-[400px] app w-full md:w-1/2">
      <div className="h-full container flex m-auto justify-center relative w-full">
        {cardsData.map((image, index) => (
          <div
            key={index}
            className={`h-full cards absolute w-1/3  scale-125 duration-500 transition-all ease-in-out bg-contain bg-center ${cardClasses[index]}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => changePositions(index)}
          >
            <div className="relative h-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesCopy;
