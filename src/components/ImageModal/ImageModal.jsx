import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const truncateText = (text, maxLength) => {
  if (!text) return "No Description";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  const maxLength = 20;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className={s.modalContent}>
        <h2>{truncateText(image.description, maxLength)}</h2>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
