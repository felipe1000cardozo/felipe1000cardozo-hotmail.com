import React from "react";
import sliderInfo from "../../ultils/mockupSlider";
import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaRegDotCircle,
  FaRegCircle
} from "react-icons/fa";

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0);
  const nextIndex = () => {
    if (indexImg === sliderInfo.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  setTimeout(nextIndex, 300000);
  return (
    <div>
      <img src={sliderInfo[indexImg].img} alt="" />
      <h3>{sliderInfo[indexImg].legend}</h3>
      <FaChevronLeft size="45" />
      <FaChevronRight size="45" onClick={() => nextIndex()} />
      <div>
        {sliderInfo.map((img, index) => {
          return indexImg !== index ? (
            <FaRegCircle onClick={() => setIndexImg(index)} />
          ) : (
            <FaRegDotCircle />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
