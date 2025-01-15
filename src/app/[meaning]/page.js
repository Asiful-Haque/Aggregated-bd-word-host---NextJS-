import Footer from '@/components/Footer';
import Header_bangla from '@/components/Header_bangla';
import Meaning from '@/components/Meaning';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }) {
  const { meaning } = await params;
  
  const wordParts = meaning.split('-').slice(4); 
  const word = wordParts.join(' '); 
  const language = meaning.split('-')[2];

  const capitalizedLanguage = language.charAt(0).toUpperCase() + language.slice(1);

  // Keywords dynamically based on language and word
  const keywords = `english to ${language}, translate english to ${language}, english to ${language} dictionary, english to ${language} meaning, english to ${language} translation online, ${language} to english translate, ${language} to english translation online, best ${language} to english translator, meaning english to ${language}, english to ${language} dictionary online, meaning ${language} to english, translate english to ${language} online`;

  // Return the SEO metadata object
  return {
    title: `Translate English to ${capitalizedLanguage}: ${word}`,
    description: `Find the meaning of "${word}" in ${capitalizedLanguage}. Get detailed translations, definitions, and examples.`,
    keywords, // Added dynamic keywords here
    openGraph: {
      title: `Translate English to ${capitalizedLanguage}: ${word}`,
      description: `Learn the meaning of "${word}" in ${capitalizedLanguage}.`,
      url: `https://english-welsh.net/english-to-${language}-meaning-${word}`,
    },
    canonical: `https://english-welsh.net/english-to-${language}-meaning-${word}`, // Add canonical URL
  };
}

const meaning = async({ params }) => {
    const { meaning } = await params;
    const wordParts = meaning.split('-').slice(4); // Starts from index 4 (after 'meaning')
    const word = wordParts.join(' '); // Join parts with spaces
    const language = meaning.split('-')[2];
    // console.log(language);
    // console.log(word);
    // console.log(process.env.NEXT_PUBLIC_BASE_URL);

    if (!language || !word) {
      notFound();
      // return <p>Invalid language or word</p>;
    }
    else if (meaning === 'shuffle_game') {
      notFound();
    }

  return (
    <div>
        <Header_bangla></Header_bangla>
        <Meaning language={language} word={word}></Meaning>
        <Footer></Footer>
    </div>
  )
}

export default meaning
