import React, { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          className={s.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
