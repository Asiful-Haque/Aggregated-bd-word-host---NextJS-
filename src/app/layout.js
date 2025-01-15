import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "English Welsh",
  description: "This is not just an ordinary English to Bangla dictionary & Bangla to English dictionary. This dictionary has the largest database for word meaning. It does not only give you English to Bangla and Bangla to English word meaning, it provides English to English word meaning along with Antonyms, Synonyms, Examples, Related words and Examples from your favorite TV Shows. This dictionary helps you to search quickly for Bangla to English translation, English to Bangla translation. It has more than 500,000 word meaning and is still growing. This English to Bangla dictionary also provides you an Android application for your offline use. The dictionary has mainly three features : translate English words to Bangla, translate Bangla words to English, copy & paste any paragraph in the Reat Text box then tap on any word to get instant word meaning. This website also provides you English Grammar, TOEFL and most common words.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon reference */}
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
