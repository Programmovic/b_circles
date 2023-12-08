import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import config from "@config/config.json";
import Link from "next/link";
import Image from "next/image";

const Companies = ({ companies }) => {
  return (
    <section className="bg-theme-light dark:bg-[#231f20]">
      <div className="container">
        <div className="py-8 lg:py-16 mx-auto">
          {/* <h1 className="mb-8 lg:mb-16 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl font-third">
            Our Clients
          </h1> */}
          <Swiper
            pagination={false}
            loop={false}
            loopedSlides={2}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 5,
              },
            }}
          >
            {companies?.map((company, i) => (
              <SwiperSlide key={i}>
                <Link href={company.link} className="flex justify-center items-center h-full" target="_blank">
                  <div className="flex items-center">
                    <Image
                      width={250}
                      height={250}
                      className="grayscale hover:grayscale-0"
                      src={company.icon}
                      alt={company.name}
                      loading="eager"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companies;
