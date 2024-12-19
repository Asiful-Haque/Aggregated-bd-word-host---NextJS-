"use client";

import React, { useEffect, useState } from "react";

const SearchHistoryComponent = ({ word }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  // Effect to load the initial search history from localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistory(history);
      }
    } catch (error) {
      console.log("Error accessing localStorage:", error);
    }
  }, []); 

  // Effect to update the search history when the word changes
  useEffect(() => {
    if (word) {
    //   console.log("Word has changed, updating history:", word);

      setSearchHistory((prevHistory) => {
        // Remove the word if it's already in the history to prevent duplicates
        const updatedHistory = prevHistory.filter((item) => item !== word);

        // Add the new word to the top of the list
        updatedHistory.unshift(word);

        if (updatedHistory.length > 5) {
          updatedHistory.pop();
        }
        // Save the updated history to localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
        }

        return updatedHistory; 
      });
    }
  }, [word]); 

  return null; 
};

export default SearchHistoryComponent;
