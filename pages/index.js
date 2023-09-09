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
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from "react";
import about_bg from '../public/images/about us.jpeg'




const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Base title={title}>
      {/* Banner */}

      <Hero banner={banner} />
      <section
        className={`section bg-theme-light dark:bg-[#231f20]`}
        id='about'
      >
        <div className="container">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
           
            {/* Content */}
            <div
              className={`service-content mt-5 md:mt-0 md:order-1
                    `}
            >
              <h2 className="font-bold leading-[40px] dark:text-white">About Us</h2>
              <p className="mt-4 mb-2">We at B circles provide digital solutions and consulting that guarantee increased income for any business of any kind. We offer strategies and goals specific to each client, not only in the digital marketing field on the Internet or web development, but we also offer effective solutions on the ground from effective consulting, strategic partnerships, sales services that will take Your business is at an advanced and more prosperous stage, which makes us unique in what we offer under the slogan &quot;all under one roof&quot;</p>
              
            </div>
          </div>
        </div>
      </section>
      <motion.section
        className="section bg-light dark:bg-[#231f20]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id='services'
      >
        <div className="container">
          <div className="text-center">
            <h2 className="font-third dark:text-white">
              {markdownify(feature?.title)}
            </h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature?.features.map((item, i) => (
              <motion.div
                className="cursor-pointer feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {item?.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={70}
                    height={70}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3 dark:text-dark">{item?.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* services */}
      {services?.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${!isOdd && "bg-theme-light dark:bg-[#231f20]"}`}
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
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"
                    }`}
                >
                  <h2 className="font-bold leading-[40px] font-third dark:text-white">{service?.title}</h2>
                  <p className="mt-4 mb-2">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link cursor-pointer inline-flex items-center text-primary"
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
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
