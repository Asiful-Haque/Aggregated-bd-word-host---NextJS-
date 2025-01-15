"use client"; // Mark as a client-side component
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/HeartButton.css";
import React from "react";


const HeartButton = ({ word }) => {
  const handleButtonClick = () => {
    // console.log("clicked on ",word);
    const event = new CustomEvent("addToLocalStorage:FavWords", {
      detail: { favWord: word, targetComponent: "FavWords" },
    });
    window.dispatchEvent(event);
   // console.log("Event dispatched!");
  };

  return (
    <button
      onClick={handleButtonClick}
      className="heart-button"
      aria-label="Speak"
    >
      <i className="fa-solid fa-heart"></i>
    </button>
  );
};

export default HeartButton;
