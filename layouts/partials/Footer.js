import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0 dark:text-white dark:bg-[#141111d9]">
      <div className="container">
        {/* footer menu */}
        <div className="row text-center">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3 dark:text-white" key={col.name}>
                <h2 className="dark:text-white h4">{markdownify(col.name)}</h2>
                
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
