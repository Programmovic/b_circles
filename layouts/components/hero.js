import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import Snowfall from 'react-snowfall';

function Hero({ banner }) {
  const textRef = useRef(null);
  const hatRef = useRef(null);
  const [showHat, setShowHat] = useState(true);

  useEffect(() => {
    const animation = gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 2,
      ease: 'power3.easeOut',
    });

    return () => {
      animation.kill();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 10; // Adjust the threshold as needed

      if (scrollY > threshold && showHat) {
        gsap.to(hatRef.current, { opacity: 0, y: -30, duration: 0.5 });
        setShowHat(false);
      } else if (scrollY <= threshold && !showHat) {
        gsap.to(hatRef.current, { opacity: 1, y: 0, duration: 0.5 });
        setShowHat(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showHat]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='relative hero_section overflow-hidden'>

      <ul className='circles'>
        <li className="circle">
          <img
            className="absolute"
            src="/images/santa-claus.png"
            alt="Santa Claus icon"
          />
        </li>
        <li className="circle">
          <img
            className="absolute"
            src="/images/christmas-bell.png"
            alt="Santa Claus icon"
          />
        </li>
        <li className="circle">
          <img
            className="absolute"
            src="/images/sleigh.png"
            alt="Santa Claus icon"
          />
        </li>
        {/* <li className="circle" />
        <li className="circle" />
        <li className="circle" /> */}
        <li className="circle">
          <img
            className="absolute"
            src="/images/christmas-tree.png"
            alt="Santa Claus icon"
          />
        </li>
        <li className="circle">
          <img
            className="absolute"
            src="/images/letter.png"
            alt="Santa Claus icon"
          />
        </li>
      </ul>
      <div className="hero">

        <div className="hero__bg">
          <picture>
            <img src="/images/bg2.webp" />
          </picture>
          <Snowfall snowflakeCount={1000} snowflakeZIndex={2} />

        </div>
        <div className="hero__overlay bg-[#ffffff54] dark:bg-[#0000008f]"></div>
        <div className="hero__cnt">
          <div className="container">
            <motion.div
              className="lg:col-12 hero-img"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='relative'>
                <motion.img
                  className="mx-auto mb-5 pointer-events-none select-none"
                  src={banner?.image}
                  width={200}
                  height={200}
                  alt="banner image"
                  priority
                />
                <motion.img
                  ref={hatRef}
                  className="mx-auto mb-5 christmas-hat absolute pointer-events-none select-none"
                  src="/images/hat.png"
                  alt="Christmas hat"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:col-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-third font-bold text-white mb-2">
                <h1 className="m-0 text-[20px] uppercase text-dark dark:text-white font-third">B-Circles Agency</h1>
                <div className='py-4 flex justify-between __actions'>
                  <Link
                    className="inline-block rounded-full border-2  border-neutral-900 px-[30px] pt-[14px] pb-[12px] text-sm uppercase leading-normal text-neutral-900 font-bold transition duration-150 ease-in-out hover:border-neutral-100 bg-[#4552a4ab] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:border-neutral-100 dark:text-neutral-100"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    title="get free consultation"
                    href={`/free-consultation`}
                    role="button"
                  >
                    get a free consultation
                  </Link>
                  <Link
                    className="inline-block rounded-full px-12 pt-[14px] pb-[12px] text-sm uppercase leading-normal text-neutral-900 font-bold transition duration-150 ease-in-out bg-[#e0692396] hover:bg-neutral-500 hover:bg-opacity-50 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300 dark:text-neutral-100"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href={`/contact-us`}
                    title="Contact"
                    role="button"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className='flex justify-center'>
                <h1 className="text-[1em] pt-2 w-fit border-t border-solid dark:border-gray-500 border-black font-third font-bold text-dark dark:text-white m-0 uppercase __title">{banner?.title}</h1>
              </div>
              {banner?.button.enable && (
                <motion.a
                  className="btn btn-primary mt-4"
                  href={banner?.button.link}
                  rel={banner?.button.rel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  title={banner?.button.label}
                >
                  {banner?.button.label}
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
