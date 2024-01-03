import React, { useState, useEffect } from "react";
import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaArrowUp, FaFacebookMessenger, FaWindowClose } from 'react-icons/fa';
import Contact_Form from "./components/Contact_Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
  keywords,
  data
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
    const handleClickOutsideMessage = (event) => {
      // Close the message box if clicked outside of it
      if (event.target.closest('.message-box-floating') === null) {
        setShowMessage(false);
      }
    };

    window.addEventListener("click", handleClickOutsideMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutsideMessage);
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
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/yourpage" },
    { name: "Twitter", url: "https://twitter.com/yourpage" },
    // Add more social links as needed
  ];

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };
  const [showMessage, setShowMessage] = useState(false);
  const closeMessage = () => {
    setShowMessage(false);
  };
  // useEffect(() => {
  //   const hasShownMessage = localStorage.getItem("hasShownMessage");

  //   if (!hasShownMessage) {
  //     const messageTimeout = setTimeout(() => {
  //       setShowMessage(true);
  //       localStorage.setItem("hasShownMessage", "true");
  //       // playMessageSound(); // Play the sound
  //     }, 3000);

  //     return () => clearTimeout(messageTimeout);
  //   }
  // }, []);

  const [showChristmasModal, setShowChristmasModal] = useState(false);

  // Function to close the Christmas modal
  const closeChristmasModal = () => {
    setShowChristmasModal(false);
  };

  // Check if it's Christmas (you can customize the date accordingly)
  useEffect(() => {
    const isNewYear = () => {
      const today = new Date();
      return today.getMonth() === 0 && today.getDate() === 1;
    };

    if (isNewYear) {
      toast(
        <div>
          <p>
            Happy New Year! 🎉 <br></br>Wishing you a fantastic year filled with joy and success. 🌟
          </p>
        </div>,
        {
          autoClose: 8000,
          hideProgressBar: false,
          position: toast.POSITION.BOTTOM_CENTER,
          bodyClassName: "new-year-toast"
        }
      );
      // localStorage.setItem("hasShownNewYearToast", "true");
    }
  }, []);
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
        <meta name="keywords" content={plainify(keywords ? keywords : "")} />
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
        <>
          {children}
          {showContactForm && (
            <div className="container floating-contact-us">
              <Contact_Form data={data} onClose={toggleContactForm} className="w-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 rounded-10 z-50 shadow-lg" />
            </div>


          )}

        </>
      </main>
      <Footer />

      {/* Scroll to top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
          <FaArrowUp />
        </button>
      )}
      {false && (
        <div className="christmas-modal">
        <div className="overlay" />
        <div className="content">
          <p>🎄 Merry Christmas! 🎅 Wishing you joy and happiness this festive season. 🌟</p>
          <button onClick={closeChristmasModal}>Close</button>
        </div>
      </div>
      )}
      <div className="container">
        <div className={`message-box-floating bg-primary w-80 animate-bounce ${showMessage ? 'visible' : 'hidden'}`}>
          <p className="text-white  ">Welcome to our website! If you have any questions or need assistance, feel free to contact us.</p>
          <button className="text-white text-center font-bold uppercase w-full" onClick={closeMessage}>Ok, thank you</button>
        </div>
      </div>
      <button className="floating-contact-button shadow-lg animate-pulse" onClick={toggleContactForm} title="Contact Us">

        {!showContactForm ? <img src={`/images/operator.png`} className=" w-[50px] h-[50px] rounded-full" alt="Info" /> : <img src={`/images/rejected.png`} className="w-[50px] h-[50px]" alt="Info" />}
      </button>


      {/* <ToastContainer/> */}

      {/* Styles for the scroll to top button */}
      <style jsx>{`
      .christmas-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url('https://static.pexels.com/photos/4803/winter-door-decoration-christmas-large.jpg');
        background-size: cover;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw; /* Use 100vw instead of 100% for full viewport width */
        height: 100vh; /* Use 100vh instead of 100% for full viewport height */
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      
      .snowfall {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: url('/images/snowflake.png');
        animation: snowfall 10s linear infinite;
        z-index: 2;
      }
      
      .content {
        text-align: center;
        color: #fff;
        z-index: 3;
      }
      @keyframes snowfall {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(100vh);
        }
      }
      .message-box-floating {
        position: fixed;
        bottom: 100px;
        left: 20px;
        
        color: #333;
        border-radius: 10px;
        padding: 15px;
        font-size: 14px;
        cursor: pointer;
        opacity: 0;
        transform: translateX(100%);
        transition: opacity 0.3s, transform 0.3s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 250px;
        z-index: 1
      }

      .message-box-floating.visible {
        opacity: 1;
        transform: translateX(0);
      }

      .message-box-floating p {
        margin: 0;
      }

      .message-box-floating button {
        background-color: #25d366;
        border: none;
        padding: 5px 10px;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 5px;
      }


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
          background-color: #ff572296; /* Change the color as needed */
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 10px;
          font-size: 25px;
          cursor: pointer;
          z-index: 999;
        }
        .menu{
          position: relative;
          width: 280px;
          height: 280px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          font-size: 2rem;
         cursor: pointer;
         transition: 1.25s;
         z-index: 5
        }
        .menu.active .toggle{
          transform: rotate(360deg)
        }
        .new-year-toast {
          background-color: darkblue;
          color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Base;