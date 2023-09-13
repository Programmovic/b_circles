import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { motion } from 'framer-motion';
import { markdownify } from "@lib/utils/textConverter";

function Hero({ banner }) {
  

  return (
    <section className="section hero-section min-h-screen flex items-center">
      
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
      <div className="container z-10">
        <div className="row text-start">
          <div className="lg:col-12 flex flex-wrap items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-third font-bold dark:text-white">{banner?.title}</h1>
              <motion.p
                className="mt-4 font-third"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {markdownify(banner?.content)}
              </motion.p>
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
            <motion.div
              className="lg:w-1/2 hero-img"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                className="mx-auto mt-12"
                src={banner?.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
