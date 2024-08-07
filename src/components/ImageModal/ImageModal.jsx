import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className={s.modalContent}>
        <h2>{image.description || "No Description"}</h2>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
