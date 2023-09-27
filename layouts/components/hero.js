import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { motion, AnimatePresence } from 'framer-motion';
import { markdownify } from "@lib/utils/textConverter";
import Link from 'next/link';
import gsap from 'gsap';

function Hero({ banner }) {
  const textRef = useRef(null);
  useEffect(() => {
    const animation = gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 2,
      ease: 'power3.easeOut',
    });

    // Optional: You can add additional animations or callbacks here

    // Don't forget to clean up the animation on unmount
    return () => {
      animation.kill(); // Kill the animation to prevent memory leaks
    };
  }, []);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (

    <section className="hero relative flex items-center" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ul className='circles'>
        <li className="circle" />
        <li className="circle" />
        <li className="circle" />
        {/* <li className="circle" />
         <li className="circle" />
         <li className="circle" />
         <li className="circle" />
         <li className="circle" /> */}
        <li className="circle" />
        <li className="circle" />
      </ul>

      <div className="overlay">

        <div className="content text-white">
          <div className="row text-start">
            <div className="lg:col-12 flex flex-wrap items-center justify-center">
              <motion.div
                className="lg:col-12 hero-img"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  className="mx-auto mb-5 animated-logo pointer-events-none select-none"
                  src={banner?.image}
                  width={200}
                  height={200}
                  alt="banner image"
                  priority
                />
              </motion.div>
              <motion.div
                className="lg:col-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="font-third font-bold text-white mb-2">
                  <h1 className="m-0 text-[15px] uppercase text-white font-third">Welcome to B-Circles</h1>
                  <div className="flex space-x-4 justify-center py-4 action_btns">
                    <Link href={`/contact-us`}
                      title='Contact Us' className="font-bold bg-[#eb671b] text-[15px] border border-solid border-gray-500 px-10 p-2 text-white text-light hover:text-gray-300 focus:outline-none hover:bg-transparent uppercase rounded">
                      Contact
                    </Link>
                    <Link href={`/#about`}
                      title="About Us" className="font-bold bg-[#eb671b] text-[15px] border border-solid border-gray-500 p-2 px-10 text-white hover:text-gray-300 hover:bg-transparent focus:outline-none uppercase rounded">
                      About
                    </Link>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <h1 className="text-[2em] pt-2 w-fit border-t border-solid border-gray-500 font-third font-bold text-white m-0 uppercase">{banner?.title}</h1>
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
      </div>

    </section>
  );
}

export default Hero;
