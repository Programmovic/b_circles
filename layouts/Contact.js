import config from "@config/config.json";
import { FaMarker, FaPaperPlane, FaGlobe } from "react-icons/fa";
import { useState, useRef } from "react";
import Contact_Form from "./components/Contact_Form";

const Contact = ({data}) => {
  
  

  return (
    <section className={`section `}>
      
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="contact-details  mb-5 flex justify-center">
              <div className="contact-details-div w-1/4">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaMarker className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Address:</span> 6th of October
                    City, Al Mehwar Al Markazi, Golden mall, 1st floor, office
                    #9
                  </p>
                </div>
              </div>
              <div className="contact-details-div w-1/4">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaPaperPlane className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Email:</span>{" "}
                    <a href="mailto:info@b-circles.co">info@b-circles.co</a>
                    <br></br>
                    <a href="mailto:support@b-circles.co">
                      support@b-circles.co
                    </a>
                    <br></br>
                    <a href="mailto:contact@b-circles.co">
                      contact@b-circles.co
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-details-div w-1/4">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaGlobe className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Website:</span>{" "}
                    <a href="http://b-circles.co/" target="_blank">
                      www.b-circles.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <Contact_Form data={data}/>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
