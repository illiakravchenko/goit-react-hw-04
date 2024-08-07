import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.galleryList}>
      {images.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onImageClick={onImageClick}>
            <ImageCard image={image} onImageClick={onImageClick}>
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
            </ImageCard>
            <ImageCard image={image} onImageClick={onImageClick}>
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
            </ImageCard>
            <ImageCard image={image} onImageClick={onImageClick}>
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
              <ImageCard image={image} onImageClick={onImageClick} />
            </ImageCard>
          </ImageCard>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
