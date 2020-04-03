import React, { useEffect } from "react";
import sliderInfo from "../../ultils/mockupSlider";
import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaRegDotCircle,
  FaRegCircle
} from "react-icons/fa";

import { SliderStyled } from "./styles";

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0);
  const nextIndex = () => {
    if (indexImg === sliderInfo.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
    console.log("next");
  };
  const backIndex = () => {
    if (indexImg === 0) {
      setIndexImg(sliderInfo.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
    console.log("prev");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextIndex();
    }, 1000);
    return () => clearTimeout(timer);
  }, [indexImg, nextIndex]);

  return (
    <SliderStyled>
      <img src={sliderInfo[indexImg].img} alt="" />
      <h3 className="subtitle">{sliderInfo[indexImg].legend}</h3>
      <div className="arrowLeft">
        <FaChevronLeft size="45" onClick={() => backIndex()} />
      </div>
      <div className="arrowRight">
        <FaChevronRight size="45" onClick={() => nextIndex()} />
      </div>
      <div className="dots">
        {sliderInfo.map((img, index) => {
          return indexImg !== index ? (
            <FaRegCircle onClick={() => setIndexImg(index)} />
          ) : (
            <FaRegDotCircle />
          );
        })}
      </div>
    </SliderStyled>
  );
};

export default Slider;
