"use client";
import "../styles/Meaning.css";
import React, { useEffect, useState } from "react";

const SearchList = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure we're in the browser before accessing localStorage
      const storedSearchHistory =
        JSON.parse(localStorage.getItem("searchHistory")) || [];
      setSearchHistory(storedSearchHistory);
    }
  }, []);

  return (
    <div className="search-list-container">
      {searchHistory.length === 0 ? (
        <p>Currently, you do not have any Search words.</p>
      ) : (
        <div className="search-history-container">
          {searchHistory.map((word, index) => (
            <div key={index} className="search-history-item">
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
  );
};

export default SearchList;
