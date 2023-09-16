import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import Hero from "@layouts/components/hero";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import about_bg from "../public/images/about us.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);
  const { locale } = useRouter()
  return (
    <>

      <Base title={`B-circles | Digital Marketing Agency - Business Solutions`}>

        {/* Banner */}

        <Hero banner={banner} />
        <section
          className={`section bg-theme-light dark:bg-[#231f20] overflow-hidden`}
          id="about"

        >
          <div className="container">
            <div className="items-center gap-8 md:grid md:grid-cols-2"
              data-aos="flip-up">
              <div className={`service-carousel md:order-2`}>
                <Image
                  className="ml-1 w-full rounded"
                  src={about_bg}
                  alt="arrow"
                  loading="eager"
                />
              </div>
              {/* Content */}
              <div
                className={`service-content mt-5 md:order-1 md:mt-0
                    `}
              >
                <h2 className="font-bold  leading-[40px] dark:text-white uppercase">
                  About Us
                </h2>
                <p className="mb-2 mt-4">
                  We at B circles provide digital solutions and consulting that
                  guarantee increased income for any business of any kind. We
                  offer strategies and goals specific to each client, not only in
                  the digital marketing field on the Internet or web development,
                  but we also offer effective solutions on the ground from
                  effective consulting, strategic partnerships, sales services
                  that will take Your business is at an advanced and more
                  prosperous stage, which makes us unique in what we offer under
                  the slogan &quot;all under one roof&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
        <motion.section
          className="section bg-light dark:bg-[#231f20] pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="services"
          data-aos="fade-up"
        >
          <div className="text-center  bg-[#eb671b] py-5 " data-aos="flip-down">
            <h2 className="font-third text-white uppercase">
              {markdownify(feature?.title)}
            </h2>

          </div>
          <div className="container">

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="zoom-in">
              {feature?.features.map((item, i) => (
                <Link
                  href={`/#${item.name.replace(' ', '-')}`}
                  title={item.name}
                  key={`feature-${i}`}
                >
                  <motion.div
                    className="feature-card cursor-pointer rounded-xl p-5 pb-8 text-center"

                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    data-aos="fade-up"
                  >
                    {item?.icon && (
                      <Image
                        className="mx-auto"
                        src={item.icon}
                        width={70}
                        height={70}
                        alt={item.name}
                      />
                    )}
                    <div className="mt-4">
                      {markdownify(item.name, "h3", "h5 dark:text-white uppercase")}
                      <p className="mt-3 dark:text-dark">{item?.content}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* services */}
        {services?.map((service, index) => {
          const isOdd = index % 2 > 0;
          return (
            <>
            <section
              key={`service-${index}`}
              className={`section ${!isOdd && "bg-theme-light dark:bg-[#231f20]"
                }`}
              id={service?.title.replace(' ', '-')}
            >
              
              <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                  {/* Carousel */}
                  <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      pagination={
                        service?.images.length > 1 ? { clickable: true } : false
                      }
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      init={service?.images > 1 ? false : true}
                    >
                      {/* Slides */}
                      {service?.images.map((slide, index) => (
                        <SwiperSlide key={index}
                          data-aos="fade-out">
                          <Image src={slide} alt={service?.title} width={600} height={500} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Content */}
                  <div
                    className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"
                      }`}
                  >
                    <h2 className="font-third font-bold leading-[40px] dark:text-white uppercase" data-aos="fade-in">
                      {service?.title}
                    </h2>
                    <p className="mb-2 mt-4" data-aos="fade-out">{service?.content}</p>
                    {service.button.enable && (
                      <Link
                        href={service?.button.link}
                        className="cta-link inline-flex cursor-pointer items-center text-primary"
                        title={service?.button.label}
                      >
                        {service?.button.label}
                        <Image
                          className="ml-1"
                          src="/images/arrow-right.svg"
                          width={18}
                          height={14}
                          alt="arrow"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
            </>
          );
        })}

        {/* workflow */}
        <section className="section pb-0 ">
          <div className="mb-8 text-center">
            {markdownify(
              workflow?.title,
              "h2",
              "mx-auto max-w-[400px] font-bold leading-[44px] dark:text-white"
            )}
            {markdownify(workflow?.description, "p", "mt-3")}
          </div>
          <Image
            src={workflow?.image}
            alt="workflow image"
            width={1920}
            height={296}
          />
        </section>

        {/* Cta */}
        <Cta cta={call_to_action} />
      </Base>
    </>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage(`public/locales/en-US/_index.md`);
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
      // ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
};

export default Home;
