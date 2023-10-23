import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import LangSwitcher from "@layouts/components/LangSwitcher";



const Header = () => {
  const router = useRouter();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const { locale, locales, push } = useRouter()
  // Determine if you are on the homepage
  const isHomePage = router.pathname === "/";
  return (
    <header className={`dark:text-white header fixed w-full z-50 bg-transparent backdrop-blur-lg ${isSticky && "dark:bg-[#141111d9] shadow-md"}`}>
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} className={(isHomePage && !isSticky ? 'text-white' : 'text-dark')} />

        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
          title="Open Menu"
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3  md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"
            } `}
        >
          <ul className={`navbar-nav block w-full md:flex md:w-auto lg:space-x-2 `}>
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group">
                    <span className={`dark:text-white ${(isHomePage && !isSticky ? 'text-white' : 'text-dark')} font-third nav-link inline-flex items-center`}>
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className={`backdrop-blur-lg ${isSticky && "dark:bg-[#141111d9] shadow-md"} rounded-lg  nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100`}>
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className={`dark:text-white nav-link font-third block ${(isHomePage && !isSticky ? 'text-white' : 'text-dark')} ${router.asPath === menu.url ? "nav-link-active" : ""
                          }`}
                          onClick={() => setNavOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`dark:text-white nav-link font-third block ${(isHomePage && !isSticky ? 'text-white' : 'text-dark')} ${router.asPath === menu.url ? "nav-link-active" : ""
                        }`}
                      locale={locale}
                    >
                      {menu.name}
                    </Link>
                  </li>

                )}
              </React.Fragment>
            ))}
            {enable && (
              <li className="md:hidden">
                <Link
                  className="btn btn-primary z-0 py-[14px]"
                  href={link}
                  rel=""
                >
                  {label}
                </Link>
              </li>
            )}
            <li className="nav-item flex justify-center items-center">
              <ThemeSwitcher />
            </li>
            {/* <li className="nav-item flex justify-center items-center">
              <LangSwitcher />
            </li> */}
          </ul>
        </div>
        {enable && (
          <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
            <Link className="btn btn-primary b_circles_btns z-0 py-[14px] font-third" href={link} rel="">
              {label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
