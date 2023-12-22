import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import social from '@config/social.json';

function Cta({ cta }) {
  const { facebook, twitter, instagram } = social;

  return (
    <section className="section px-4 dark:bg-[#231f20]">
      <div className="container">
        <div className="row mx-auto items-center justify-center">
          <div className="text-center md:mt-0 md:col-12 lg:col-12">
            <div className="seven">
              <h1 className="section_title">Follow b-circles</h1>
            </div>
            {cta?.button.enable && (
              <>
                <div className="container">
                  <ul className="menu">
                    <li><Link href="https://www.facebook.com/bcirclesagency" className="facebook"><FaFacebook /></Link></li>
                    <li><Link href="https://twitter.com/bcirclesagency" className="twitter"><FaTwitter /></Link></li>
                    <li><Link href="https://www.instagram.com/bcirclesagency/" className="instagram"><FaInstagram /></Link></li>
                    <li><Link href="https://www.instagram.com/bcirclesagency/" className="linkedin"><FaLinkedin /></Link></li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

