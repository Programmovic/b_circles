import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import social from '@config/social.json'

function Cta({ cta }) {
  const {facebook, twitter, instagram} = social
  return (
    <section className="section px-4 dark:bg-[#231f20]">
      <div className="section container rounded-xl">
        <div className="row mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:col-6 lg:col-5">
            <h2 className="dark:text-white">{cta?.title}</h2>
            {cta?.button.enable && (
              <>

                <div className="drawer">
                  <div className="box">
                    <Link href={twitter} className="ball ball-1 twitter"><FaTwitter/></Link>
                    <Link href={facebook} className="ball ball-2 github">
                    <FaFacebook/>
                      </Link>
                    <Link href="https://www.nourabusoud.com" className="ball ball-3 website"><FaInstagram/></Link>
                    <Link
                      className="ball ball-4"
                      href={cta?.button.link}
                      rel={cta?.button.rel}
                      title={cta?.button.label}
                    >
                      <FaPhone/>
                    </Link>
                  </div>
                  <div className="cover"><span /></div>
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
