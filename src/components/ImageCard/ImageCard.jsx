import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick, children }) => {
  return (
    <div onClick={() => onImageClick(image)} className={s.imageCard}>
      <img src={image.urls.small} alt={image.alt_description} />
      <div className={s.nestedCards}>{children}</div>
    </div>
  );
};

export default ImageCard;
