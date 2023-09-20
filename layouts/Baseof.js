import React, { useState, useEffect } from "react";
import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaArrowUp, FaFacebookMessenger, FaWindowClose } from 'react-icons/fa';
import Contact_Form from "./components/Contact_Form";


const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the scroll-to-top button when the user scrolls down 20 pixels or more
      if (window.pageYOffset > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showContactForm, setShowContactForm] = useState(false);

  // Function to toggle the visibility of the contact form
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        {/* author from config.json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />

        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />

        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {/* main site */}
      <main>
        {children}
        {showContactForm && (
          <div className="container floating-contact-us">
            <Contact_Form onClose={toggleContactForm} className="dark:bg-[#141111] w-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 rounded-10 z-50 shadow-lg" />
            </div>


        )}
      </main>
      <Footer />

      {/* Scroll to top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
      
      <button className="floating-contact-button shadow-lg" onClick={toggleContactForm}>
        
       {!showContactForm ? <FaFacebookMessenger/> : <FaWindowClose/>}
      </button>



      {/* Styles for the scroll to top button */}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #325aa5;
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
          z-index: 999;
        }
        .floating-contact-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #ff5722; /* Change the color as needed */
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 10px;
          font-size: 25px;
          cursor: pointer;
          z-index: 999;
        }
        
      `}</style>
    </>
  );
};

export default Base;