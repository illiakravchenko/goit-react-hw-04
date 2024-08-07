import React, { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "../index.css";
import s from "./App.module.css";

const ACCESS_KEY = "P8YOxxvxj-IShqxLQ2a2CMw_idw1NliSSjcumTjvNDM";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (searchQuery, pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: searchQuery,
            page: pageNum,
            per_page: 12,
            client_id: ACCESS_KEY,
          },
        }
      );

      const newImages = response.data.results.filter(
        (newImage) => !images.some((image) => image.id === newImage.id)
      );

      setImages((prevImages) =>
        pageNum === 1 ? newImages : [...prevImages, ...newImages]
      );
      setError(null);
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className={s.app}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!modalImage}
        onRequestClose={handleCloseModal}
        image={modalImage}
      />
      <Toaster />
    </div>
  );
};

export default App;
