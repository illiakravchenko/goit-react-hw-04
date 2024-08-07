import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={s.errorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
