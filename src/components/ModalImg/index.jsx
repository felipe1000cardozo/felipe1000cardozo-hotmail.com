import React, { useEffect } from "react";
import { BackgroundModal, ImgModal } from "./styles";
import { IoMdClose } from "react-icons/io";
import { Fragment } from "react";

const ModalImg = ({ img, onClickClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", onClickClose);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", onClickClose);
    };
  }, []);

  return (
    <Fragment>
      <BackgroundModal onClick={() => onClickClose()}></BackgroundModal>
      <ImgModal>
        <div>
          <div className="close-icon-container" onClick={() => onClickClose()}>
            <IoMdClose size="30" />
          </div>
          <img src={img} alt="" />
        </div>
      </ImgModal>
    </Fragment>
  );
};

export default ModalImg;
