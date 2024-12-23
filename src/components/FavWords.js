"use client";
import React, { useEffect, useState } from "react";
import "../styles/Meaning.css";

const FavWords = () => {
  const [favWords, setFavWords] = useState([]);
  // Load initial history from localStorage when component mounts
  useEffect(() => {
    const loadFavWords = () => {
      if (typeof window !== "undefined") {
        const storedFavWords =
          JSON.parse(localStorage.getItem("favWords")) || [];
        setFavWords(storedFavWords);
      }
    };

    loadFavWords(); // Load the search history initially

    // Listen to the custom event to update localStorage
    const handleEvent = (e) => {
      if (e.detail && e.detail.targetComponent === "FavWords") {
        const { favWord } = e.detail;
        console.log("Adding to favWords:", favWord);
        setFavWords((prevWords) => {
          const updatedWords = prevWords.filter((item) => item !== favWord);
          updatedWords.unshift(favWord);

          if (updatedWords.length > 5) {
            updatedWords.pop(); // Keep only the last 5 entries
          }

          if (typeof window !== "undefined") {
            localStorage.setItem("favWords", JSON.stringify(updatedWords));
          }

          return updatedWords;
        });
      }
    };

    window.addEventListener("addToLocalStorage:FavWords", handleEvent);

    return () => {
      window.removeEventListener("addToLocalStorage:FavWords", handleEvent);
    };
  }, []);
  return (
    <div className="box_wrapper2">
      <div className="inner_wrapper">
        <fieldset className="fieldset_custom">
          <legend className="custom_font2">Your Favorite Words</legend>

          <div className="fieldset_body">
            <div className="clear_fixdiv">
              {favWords.length === 0 ? (
                <p>
                  Currently, you do not have any favorite words. Please click on
                  the heart icon to add words to your favorite list.
                </p>
              ) : (
                <div className="fav-history-container">
                  <p>
                    You can found here all the words that you have marked as
                    favourite on our wibsite.
                  </p>
                  {favWords.map((word, index) => (
                    <div key={index} className="fav-history-item">
                      <a
                        href={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/english-to-bengali-meaning-${word}`}
                      >
                        {word}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default FavWords;
