import React from "react";
import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { SliderStyled } from "./styles";
import ModalImg from "../ModalImg";

const SliderGallery = ({ imgs }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const nextIndex = () => {
    if (currentImg === imgs.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };
  const backIndex = () => {
    if (currentImg === 0) {
      setCurrentImg(imgs.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };

  const onClickClose = () => {
    setShowModal(false);
  };

  return (
    <SliderStyled>
      {showModal ? (
        <ModalImg img={imgs[currentImg]} onClickClose={onClickClose} />
      ) : null}
      <div className="main-img-container">
        <div className="arrowLeft" onClick={() => backIndex()}>
          <FaChevronLeft size="45" />
        </div>
        <div className="arrowRight" onClick={() => nextIndex()}>
          <FaChevronRight size="45" />
        </div>
        <img src={imgs[currentImg]} alt="" onClick={() => setShowModal(true)} />
      </div>

      <div className="miniature-img-container">
        {imgs.map((img, index) => {
          return currentImg !== index ? (
            <img
              key={index}
              onClick={() => setCurrentImg(index)}
              src={img}
              alt="Moto"
            />
          ) : (
            <img key={index} src={img} alt="Moto" className="selected" />
          );
        })}
      </div>
    </SliderStyled>
  );
};

export default SliderGallery;
