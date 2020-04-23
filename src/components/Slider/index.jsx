import React, { useEffect } from "react";
import sliderInfo from "../../ultils/mockupSlider";
import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaRegDotCircle,
  FaRegCircle,
} from "react-icons/fa";

import { SliderStyled } from "./styles";

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0);
  // eslint-disable-next-line
  const nextIndex = () => {
    if (indexImg === sliderInfo.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };
  const backIndex = () => {
    if (indexImg === 0) {
      setIndexImg(sliderInfo.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextIndex();
    }, 5000);
    return () => clearTimeout(timer);
  }, [indexImg, nextIndex]);

  return (
    <SliderStyled>
      <img src={sliderInfo[indexImg].img} alt="" />
      <h3 className="subtitle">{sliderInfo[indexImg].legend}</h3>
      <div className="arrowLeft" onClick={() => backIndex()}>
        <FaChevronLeft size="45" />
      </div>
      <div className="arrowRight" onClick={() => nextIndex()}>
        <FaChevronRight size="45" />
      </div>
      <div className="dots-container">
        {sliderInfo.map((img, index) => {
          return indexImg !== index ? (
            <FaRegCircle
              key={index}
              onClick={() => setIndexImg(index)}
              className="dot"
            />
          ) : (
            <FaRegDotCircle key={index} className="dot" />
          );
        })}
      </div>
    </SliderStyled>
  );
};

export default Slider;
