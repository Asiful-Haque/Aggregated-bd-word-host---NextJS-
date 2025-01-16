import React from "react";
import "../styles/About.css";
import Image from "next/image";
import SearchList from "./Search_list";
import FavWords from "./FavWords";
import Link from "next/link";

const About = () => {
  return (
    <div className="hero-container">
      {/* Left Part */}
      <div className="left-part">
        <div className="left-part-up-down">
          <fieldset className="left-fieldset">
            <legend className="hero-title">About Us</legend>
            <div className="part-one">
              <h2 className="h3-class">Saiful Islam</h2>
              <h3>Founder of English-welsh.net</h3>
              <h4>CEO, SoftValley Technologies Ltd.</h4>
              <p className="hero-text">
                english-welsh.net is a multi dimensional online dictionary
                developed by some young geeks of Bangladesh. Md. Saiful Islam is
                the Core Developer of this innovative Initiative.
                english-welsh.net started journey on 25th July 2009. With the
                user friendly interface and value added features,
                english-welsh.net has become useful among online readers very
                fast. Now a days it is becoming popular across the country. To
                experience the beauty of english-welsh please visit
                english-welsh.net.
              </p>
            </div>
            <hr />
            <div className="part-two">
              <h3 className="h3-class">How the ideas come?</h3>
              <p className="hero-text">
                I came from a Bangla medium curriculum. In our graduation level
                we had all the text books and lectures written in English
                language. At that time we had to learn a lot of new words. At
                the beginning of my graduation it occurred to me that finding
                words in dictionaries is harder than learning meaning of any
                word. I am sure that all the students that come from Bangla
                medium face this sort of problem and they hate this. Then I was
                looking for an alternative to solve this problem. In our time I
                did not get any good solution. I was involved in two clubs
                (Computer Club and Language Club) in my university. At that time
                I was practicing PHP at home. To find a word manually I used
                famous English to Bangla dictionary called &quot;Bangla Academy
                English to Bangla Dictionary&quot;. It is very good English to
                Bangla dictionary. Then I had the idea to create computer
                software that will find word meaning for me and it has to be
                English to Bangla dictionary. At that time I planned to do it.
                Then I discussed it with Rebeka. Rebeka was the president of
                Language Club at that time. She helped to find volunteers from
                Language Club who helped to insert all the words manually using
                my software. I used PHP programming language to manage the
                dictionary data manipulation. Finally when we finished the
                project we decided to use it within our club members. Day by day
                the demand was growing in our university. Then we decided to
                release the software as an online version.
              </p>
            </div>
            <hr />
            <div className="part-three">
              <h3 className="h3-class">What is the specialty?</h3>
              <p className="hero-text">
                It gives word meaning within seconds. It can search meaning for
                both English to Bangla and Bangla to English. It has a unique
                feature called &quot;Read Text&quot;. We read a lot in websites;
                during our reading we find a lot of unknown words. To use this
                feature a user just has to copy any text from anywhere and paste
                it in the &quot;Read Text&quot; tab then a page will appear
                containing the text. Then the user will has to just double click
                on any unknown word to see word meaning. This dictionary also
                has two extensions for Firefox and Chrome. If a user installs
                the extension in any of these two browsers then he will have the
                opportunity to see any word meaning in any page. For instance,
                if a user reads the Daily Star and the browser extension is
                installed then he can get meaning of any word just clicking
                twice on any word. It is a simple process but helps a user to
                learn a lot of new word meanings within a minimal time.
              </p>
            </div>
            <hr />
            <div className="part-four">
              <h3 className="h3-class">
                How english-welsh.net is different from other online dictionaries?
              </h3>
              <p className="hero-text">
                The basic difference is other dictionaries are just
                dictionaries. But english-welsh.net is a tool which helps its&apos;
                users to read any text very conveniently by finding meanings for
                unknown words. It has browser extensions, misspelling detection,
                plenty of words and faster.
              </p>
            </div>
            <hr />
            <div className="part-five">
              <h3 className="h3-class">What value it is adding to our society?</h3>
              <p className="hero-text">
                Our society needs more automation in education system. Our govt.
                is trying to digitize all the books so that students get the
                digital books conveniently. We are creating a combined effort to
                create such online software so that people get benefited
                directly through internet. Our dictionary provides a great value
                to a person who wants to learn English language by reading. It
                saves their time and reduces extra headache for searching word
                meaning manually.
              </p>
            </div>
            <hr />
            <div className="part-six">
              <h3 className="h3-class">How user friendly it is?</h3>
              <p className="hero-text">
                It is very user friendly. The average page loading time is less
                than a second. And anybody wants to get word meaning he has to
                just type the word in input box and press search button then the
                word meaning appears instantly. If the user misspells any word
                our system automatically corrects it and gives him the desired
                word meaning. It also give English to English word meaning so
                that the user won&apos;t have to find another dictionary to find
                English to English meaning.
              </p>
            </div>
            <hr />
            <div className="part-seven">
              <h3 className="h3-class">Who is the user?</h3>
              <p className="hero-text">
                Around 60% users are from our country, about 20% from India.
                Users from 50 other countries access our dictionary from various
                locations.
              </p>
            </div>
            <hr />
            <div className="part-eight">
              <h3 className="h3-class">How many visitors per day?</h3>
              <p className="hero-text">
                We have 12 thousand visitors per day searching 50 thousand
                words.
              </p>
            </div>
            <hr />
            <div className="part-nine">
              <h3 className="h3-class">From which place this is using?</h3>
              <p className="hero-text">
                Mostly they use our dictionary from Desktop and tablet pcs.
              </p>
            </div>
            <hr />
            <div className="part-ten">
              <h3 className="h3-class">What is the technical background?</h3>
              <ol>
                <li>Language : PHP, Java Script</li>
                <li>Server : Ubuntu</li>
                <li>Amazon Web Services</li>
              </ol>
            </div>
            <hr />
            <div className="part-eleven">
              <h3 className="h3-class">What is the future plan?</h3>
              <ul>
                <li>
                  We are planning to create mobile phone apps. We have already
                  developed an android app which is in the state of testing. We
                  are developing an iphone app too.
                </li>
                <li>We will increase number of new words.</li>
                <li>We will add forum support.</li>
                <li>
                  We are preparing another support for English grammar, where
                  our member Rebeka is contributing.
                </li>
                <li>
                  We are considering to open a national Language Club in Dhaka
                </li>
              </ul>
            </div>
            <hr />
            <div className="part-twelve">
              <h3 className="h3-class">From which place this is using?</h3>
              <p className="hero-text">
                Mostly they use our dictionary from Desktop and tablet pcs.
              </p>
            </div>
            <hr />
            <div className="part-thirteen">
              <h3 className="h3-class">What do you expect from this?</h3>
              <p className="hero-text">
                In this year we are hoping to reach at least 25 thousand users
                and 80 thousand word search per day. We are looking forward to
                launching our new updated version and two mobile apps for both
                android and iphone.
              </p>
            </div>
            <hr />
            <div className="part-fourteen">
              <h3 className="h3-class">How youth can be added?</h3>
              <p className="hero-text">
                Most of our users are from age group of 15-30. These users have
                a good opportunity to learn the language for their higher study
                purposes. Most of the local users are struggling to get job
                where proficiency in English is a compulsory matter. Students
                need a tool like english-welsh.net so that they can utilize this to
                their study purposes.
              </p>
            </div>
            <hr />
            <div className="part-fifteen">
              <h3 className="h3-class">What is the scope for users?</h3>
              <p className="hero-text">
                Users can learn new words. They can learn English Language by
                reading texts.
              </p>
            </div>
            <hr />
            <div className="part-sixteen">
              <h3 className="h3-class">Any upgrade version?</h3>
              <p className="hero-text">
                We are bringing another update version of english-welsh.net. It will be
                our 11th update since the launch. Currently we have 1,43,442
                words. Our new version contains additional 4015 new words. And
                we have fixed few areas. We have also upgraded our server system
                so that it support up to 50k users in a day. Our new version
                will be launched in July.
              </p>
            </div>
            <hr />
            <div className="part-seventeen">
              <h3 className="h3-class">Media References: Please click on the links to know more about us :
              </h3>
              <ol className="media-links">
                <li>
                    <Link href="https://www.youtube.com/watch?v=hMQOt5OP9dw">ATN Bangla</Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/watch?v=hMQOt5OP9dw">Prothom Alo</Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/watch?v=hMQOt5OP9dw">E Prothom-Alo</Link>
                </li>
                <li>
                    <Link href="https://www.eobserverbd.com/share.php?q=2014%2F05%2F16%2F5%2Fdetails%2F5_r3_c3.jpg&d=2014%2F05%2F16%2F">Daily Observer</Link>
                </li>
              </ol>
            </div>
            <hr />
          </fieldset>
        </div>
      </div>

      <div className="right-part">
        <div className="right-part-up-down">
          <fieldset className="right-fieldset">
            <legend className="article-title">Article Section</legend>
            <div className="fieldset_body inner_details">
              <div>
                <Image
                  src="https://server3.mcqstudy.com/blog_image/Capt.webp" // Use absolute path from the public directory
                  alt="Native speaker 'mistakes' – past participles, 'me', splitting infinitives"
                  layout="responsive" // Makes the image responsive
                  width={303} // Original width of the image
                  height={227} // Original height of the image
                  style={{ maxHeight: "180px" }} // Applying maxHeight directly
                />
              </div>
              <a
                title="Native speaker 'mistakes' – past participles, 'me', splitting infinitives"
                href="https://www.bdword.com/english-to-bengali-blog?id=76"
                target="_blank"
                style={{ color: "blue" }}
              >
                Click to read..
              </a>
              <br />
              <b style={{ fontSize: "smaller" }}>Published: 12 Mar, 2023</b>
              <br />
              <label style={{ color: "#133330", cursor: "pointer" }}>
                More articles:
              </label>
              <br />
              <ul className="article-list">
                <li>
                  <a
                    title="Verb patterns – gerunds or infinitives"
                    href="https://www.bdword.com/english-to-bengali-blog?id=74"
                    target="_blank"
                  >
                    Verb Patterns – Gerunds Or Infinitives
                  </a>
                  <small>Published: 28 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Using the past to talk about the present or future"
                    href="https://www.bdword.com/english-to-bengali-blog?id=73"
                    target="_blank"
                  >
                    Using The Past To Talk About The Present Or Future
                  </a>
                  <small>Published: 27 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Conditionals review"
                    href="https://www.bdword.com/english-to-bengali-blog?id=72"
                    target="_blank"
                  >
                    Conditionals Review
                  </a>
                  <small>Published: 17 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Infinitives of purpose"
                    href="https://www.bdword.com/english-to-bengali-blog?id=71"
                    target="_blank"
                  >
                    Infinitives Of Purpose
                  </a>
                  <small>Published: 09 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Linking words of contrast"
                    href="https://www.bdword.com/english-to-bengali-blog?id=70"
                    target="_blank"
                  >
                    Linking Words Of Contrast
                  </a>
                  <small>Published: 08 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Stative verbs in the continuous form"
                    href="https://www.bdword.com/english-to-bengali-blog?id=69"
                    target="_blank"
                  >
                    Stative Verbs In The Continuous Form
                  </a>
                  <small>Published: 06 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Relative clauses"
                    href="https://www.bdword.com/english-to-bengali-blog?id=68"
                    target="_blank"
                  >
                    Relative Clauses
                  </a>
                  <small>Published: 02 Feb, 2023</small>
                </li>
                <li>
                  <a
                    title="Comparatives and Superlatives Meaning and use"
                    href="https://www.bdword.com/english-to-bengali-blog?id=67"
                    target="_blank"
                  >
                    Comparatives And Superlatives Meaning And Use
                  </a>
                  <small>Published: 30 Jan, 2023</small>
                </li>
                <li>
                  <a
                    title="Vocabulary Vs Dictionary Vs Thesaurus"
                    href="https://www.bdword.com/english-to-bengali-blog?id=66"
                    target="_blank"
                  >
                    Vocabulary Vs Dictionary Vs Thesaurus
                  </a>
                  <small>Published: 27 Jan, 2023</small>
                </li>
              </ul>
            </div>
          </fieldset>
        </div>

        <div className="box_wrapper3">
          <div className="inner_wrapper3">
            <button className="btn_default3 bdr_radius2">
              <a
                href="http://www.allbanglanewspaperlist24.com/"
                target="_blank"
              >
                <Image
                  src="https://content2.mcqstudy.com/bw-static-files/img/newspaper-icon.png"
                  alt="icon"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <label>All Bangla Newspapers</label>
              </a>
            </button>
          </div>
        </div>
        <FavWords></FavWords>
        <div className="box_wrapper2">
          <div className="inner_wrapper">
            <fieldset className="fieldset_custom">
              <legend className="custom_font2">Your Word History</legend>
              <div className="words-searched">
                <p>
                  You can found here all the words that you have searched on our
                  wibsite.
                </p>
                <SearchList></SearchList>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="game-container">
          {" "}
          {/*Taking css from global meaning.css*/}
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL_FRONT}/games/shuffle_game`}
            title="Play games"
          >
            <Image
              src="/games.webp"
              alt="Play games"
              width={400}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
