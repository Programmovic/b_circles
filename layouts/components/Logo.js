import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand flex py-1"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <>
          {/* <Image
            width={logo_width.replace("px", "") * 2}
            height={logo_height.replace("px", "") * 2}
            src={src ? src : logo}
            alt={title}
            priority
          /> */}
          <span class="self-center  text-2xl font-semibold dark:text-white">{logo_text}</span>
        </>
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
