// Import necessary modules
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { FaBars } from "react-icons/fa"; // Ensure correct import
import "../styles/Header_bangla.css";

const Header_bangla = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const router = useRouter();
  const [apiSuggestions, setApiSuggestions] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      setSearchHistory(history);
    }
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchWord(value);

    if (value.length > 3) {
      fetchSuggestionsFromApi(value);
    }
  };

  const fetchSuggestionsFromApi = async (word_greater_than_3) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/wordSuggestion/${word_greater_than_3}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);
      setApiSuggestions(data.result_suggestion); // Assuming backend returns an array
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (searchWord.trim()) {
      const formattedQuery = searchWord.trim().replace(/\s+/g, "-");
      const targetUrl = `${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/english-to-bengali-meaning-${formattedQuery}`;

      setSearchWord(""); // Clear the input
      //   setSearchHistory(updatedHistory); // Update the local state

      router.replace(targetUrl); // Navigate to the target URL
    }
  };

  // Toggle menu visibility
  const showHideMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header_wrapper">
      <div className="content_wrapper">
        {/* Logo Section */}
        <div className="logo_div">
          <a href="https://www.bdword.com/">
            {/* Desktop Image */}
            <Image
              className="desktop-logo"
              src="https://content2.mcqstudy.com/bw-static-files/site_logo/bengali.webp"
              alt="BDWORD"
              height={55}
              width={192}
              loading="lazy"
              aria-label="https://www.bdword.com/"
            />
            {/* Mobile Image */}
            <Image
              className="mobile-logo"
              src="https://content2.mcqstudy.com/bw-static-files/mobile_logo/bengali.webp"
              alt="BDWORD"
              height={55}
              width={192}
              loading="lazy"
              aria-label="https://www.bdword.com/"
            />
          </a>
        </div>

        {/* Search Field */}
        <div className="search_fld">
          <form onSubmit={handleSearch} className="search_field">
            <input
              type="text"
              className="search-box"
              placeholder="Translate word"
              value={searchWord} // Controlled input
              onChange={handleSearchChange} // Update input value
              required
            />
            <div className="dropdown">
              <ul className="dropdown-list">
                {searchWord.length > 3
                  ? apiSuggestions.map((word, index) => (
                      <li key={index}>{word}</li>
                    ))
                  : searchHistory.map((word, index) => (
                      <li key={index}>{word}</li>
                    ))}
              </ul>
            </div>
            <button type="submit" className="search_btn" aria-label="search">
              🔍
            </button>
          </form>
        </div>

        {/* Hamburger Icon */}
        <div className="header_nav_collapse">
          <FaBars onClick={showHideMenu} className="hamburger-icon" />
        </div>
      </div>

      {/* Navigation Menu */}
      {menuOpen && (
        <ul className="menu">
          <li>
            <a
              href="https://www.bdword.com/"
              aria-label="https://www.bdword.com/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-read-text-with-translation"
              aria-label="https://www.bdword.com/english-to-bengali-read-text-with-translation"
            >
              Read Text
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-dictionary-vocabulary-game"
              aria-label="https://www.bdword.com/english-to-bengali-dictionary-vocabulary-game"
            >
              Vocabulary Games
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-dictionary-learn-ten-words-everyday"
              aria-label="https://www.bdword.com/english-to-bengali-dictionary-learn-ten-words-everyday"
            >
              Words Everyday
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/bengali-to-english-dictionary"
              aria-label="https://www.bdword.com/bengali-to-english-dictionary"
              title="Bangla to English Dictionary"
            >
              Bangla to English Dictionary
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-dictionary-favourite-words"
              title="Browse Favorite Words"
            >
              Favorite Words
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-dictionary-search-history"
              title="Browse Word Search History"
            >
              Word Search History
            </a>
          </li>
          <li>
            <a
              href="https://www.bdword.com/english-to-bengali-dictionary-browse-all-blogs"
              title="Blogs List"
            >
              Blogs
            </a>
          </li>
          <li>
            <a href="https://www.bdword.com/english-to-bengali-dictionary-contact-us">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header_bangla;
