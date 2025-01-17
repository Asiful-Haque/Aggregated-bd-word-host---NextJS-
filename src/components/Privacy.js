import React from "react";
import "../styles/About.css";
import Image from "next/image";
import SearchList from "./Search_list";
import FavWords from "./FavWords";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className="hero-container">
      {/* Left Part */}
      <div className="left-part">
        <div className="left-part-up-down">
          <fieldset className="left-fieldset">
            <legend className="hero-title">Privacy</legend>
            <div className="part-one">
              <p className="hero-text">
                This privacy policy has been compiled to better serve those who
                are concerned with how their &apos;Personally identifiable
                information&apos; (PII) is being used online. PII, as used in US
                privacy law and information security, is information that can be
                used on its own or with other information to identify, contact,
                or locate a single person, or to identify an individual in
                context. Please read our privacy policy carefully to get a clear
                understanding of how we collect, use, protect or otherwise
                handle your Personally Identifiable Information in accordance
                with our website.
              </p>
            </div>
            <hr />
            <div className="part-two">
              <h3 className="h3-class">
                What personal information do we collect from the people that
                visit our blog, website or app?
              </h3>
              <p className="hero-text">
                When ordering or registering on our site, as appropriate, you
                may be asked to enter your name, email address, phone number or
                other details to help you with your experience.
              </p>
            </div>
            <hr />
            <div className="part-three">
              <h3 className="h3-class">When do we collect information?</h3>
              <p className="hero-text">
                We collect information from you when you fill out a form or
                enter information on our site.
              </p>
            </div>
            <hr />
            <div className="part-four">
              <h3 className="h3-class">How do we use your information?</h3>
              <p className="hero-text">
                We may use the information we collect from you when you
                register, make a purchase, sign up for our newsletter, respond
                to a survey or marketing communication, surf the website, or use
                certain other site features in the following ways:
              </p>
              <ul>
                <li>To improve our website in order to better serve you</li>
              </ul>
            </div>
            <hr />
            <div className="part-five">
              <h3 className="h3-class">
                How do we protect visitor information?
              </h3>
              <ul>
                <li>
                  We are planning to create mobile phone apps. We have already
                  developed an android app which is in the state of testing. We
                  are developing an iphone app too.
                </li>
                <li>
                  We do not use vulnerability scanning and/or scanning to PCI
                  standards.
                </li>
                <li>We do not use Malware Scanning.</li>
                <li>We do not use an SSL certificate.</li>
                <li>
                  We only provide articles and information, we never ask for
                  personal or private information like email addresses, or
                  credit card numbers.
                </li>
              </ul>
            </div>
            <hr />
            <div className="part-six">
              <h3 className="h3-class">Do we use &apos;cookies&apos;?</h3>
              <p className="hero-text">
                Yes. Cookies are small files that a site or its service provider
                transfers to your computer&apos;s hard drive through your Web
                browser (if you allow) that enables the site&apos;s or service
                provider&apos;s systems to recognize your browser and capture
                and remember certain information. For instance, we use cookies
                to help us remember and process the items in your shopping cart.
                They are also used to help us understand your preferences based
                on previous or current site activity, which enables us to
                provide you with improved services. We also use cookies to help
                us compile aggregate data about site traffic and site
                interaction so that we can offer better site experiences and
                tools in the future. We use cookies to Understand and save
                user&apos;s preferences for future visits You can choose to have
                your computer warn you each time a cookie is being sent, or you
                can choose to turn off all cookies. You do this through your
                browser (like Internet Explorer) settings. Each browser is a
                little different, so look at your browser&apos;s Help menu to
                learn the correct way to modify your cookies. If you disable
                cookies off, some features will be disabled It won&apos;t affect
                the users experience that make your site experience more
                efficient and some of our services will not function properly.
                However, you can still place orders .
              </p>
            </div>
            <hr />
            <div className="part-seven">
              <h3 className="h3-class">Third Party Disclosure</h3>
              <p className="hero-text">
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information.
              </p>
            </div>
            <hr />
            <div className="part-eight">
              <h3 className="h3-class">Third party links</h3>
              <p className="hero-text">
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites.
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
              <h3 className="h3-class">Google</h3>
              <p className="hero-text">
                Google&apos;s advertising requirements can be summed up by
                Google&apos;s Advertising Principles. 
                They are put in place to
                provide a positive experience for users.  
                
                We use Google AdSense Advertising on our website. Google, as a
                third party vendor, uses cookies to serve ads on our site.
                Google &apos;s use of the DART cookie enables it to serve ads to
                our users based on their visit to our site and other sites on
                the Internet. Users may opt out of the use of the DART cookie by
                visiting the Google ad and content network privacy policy.
                <br />
                <Link className="link" href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
                    https://support.google.com/adwordspolicy/answer/1316548?hl=en
                </Link>
              </p>
            </div>
            <hr />
            <div className="part-eleven">
              <h3 className="h3-class">We have implemented the following:</h3>
              <ul>
                <li>
                  Google Display Network Impression Reporting We along with
                  third-party vendors, such as Google use first-party cookies
                  (such as the Google Analytics cookies) and third-party cookies
                  (such as the DoubleClick cookie) or other third-party
                  identifiers together to compile data regarding user
                  interactions with ad impressions, and other ad service
                  functions as they relate to our website.
                </li>
                <li>
                  Opting out Users can set preferences for how Google advertises
                  to you using the Google Ad Settings page. Alternatively, you
                  can opt out by visiting the Network Advertising initiative opt
                  out page or permanently using the Google Analytics Opt Out
                  Browser add on.
                </li>
              </ul>
            </div>
            <hr />
            <div className="part-twelve">
              <h3 className="h3-class">COPPA (Children Online Privacy Protection Act)</h3>
              <p className="hero-text">
                When it comes to the collection of personal information from
                children under 13, the
                <Link className="link" href="http://www.coppa.org/">
                    Children&apos;s Online Privacy Protection Act (COPPA)
                </Link>
                puts parents in control. The Federal Trade Commission, United
                States&apos; consumer protection agency, enforces the COPPA Rule,
                which spells out what operators of websites and online services
                must do to protect children&apos;s privacy and safety online. We
                do not specifically market to children under 13.
              </p>
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

export default Privacy;
