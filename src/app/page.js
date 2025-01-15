import Image from "next/image";

import Header_bangla from "@/components/Header_bangla";
import Hero_bangla from "@/components/Hero_bangla";

export const metadata = {
  title: "English Welsh | Largest Dictionary Online",
  description: "Bdword.com is the most comprehensive English to Bangla and Bangla to English dictionary. Explore 500,000+ word meanings, synonyms, antonyms, examples, grammar tips, TOEFL words, and vocabulary games.",
  keywords: "english to bangla dictionary, bangla to english dictionary, online bangla dictionary, english to bangla translation, learn english grammar, vocabulary games, TOEFL words, GRE words, common translations, fill in the blanks, bdword app, english bangla thesaurus",
  robots: "index, follow",
  openGraph: {
    title: "Bdword.Com | Largest English to Bangla Dictionary",
    description: "Instant English to Bangla and Bangla to English word meanings with examples, synonyms, and grammar tips. Learn new words and play vocabulary games.",
    url: "https://www.english-welsh.net",
    siteName: "Bdword",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bdword.Com | English to Bangla Dictionary",
    description: "Explore the largest English to Bangla and Bangla to English dictionary online with games, grammar lessons, and TOEFL vocabulary.",
  },
  alternates: {
    canonical: "https://www.english-welsh.net",
  },
};


export default async function Language({ params }) {
  return (
      <div>
          <Header_bangla></Header_bangla>
          <Hero_bangla></Hero_bangla>
      </div>   
  );
}


