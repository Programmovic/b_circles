import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Base from "./Baseof";
import Image from "next/image";
import config from "@config/config.json";
import PageHeader from "./partials/PageHeader";
import Contact_Form from "./components/Contact_Form";
import Link from "next/link";
import FAQ_ITEM from "./components/FaqItem";
import Portfolio from "./components/portfolio";

const ServiceSingle = ({ frontmatter, content, mdxContent, slug, portfolio }) => {
  let { description, title, bgImage, keywords, faqs, cta_text, cta_btn, overlay, canonical } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base canonical={canonical} title={`${config.site.title} | ${title}`} description={description} keywords={keywords} image={bgImage}>
      <section className="section">
        <div className="container">
          <PageHeader title={slug.split("-").join(" ")} image={bgImage} overlay={overlay}/>
          <div className="row mt-6 ">
            <article className="col-12 mx-auto text-center">

              <div className="content text-left dark:text-white">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            </article>
          </div>
          <div className="relative w-full z-10 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-3/4">
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  <span className="xs:block">{cta_text ? cta_text : (`Request For ${slug} Service`)}</span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/4">
                <div className="flex flex-wrap lg:justify-end">
                  <Link
                    href="/contact-us"
                    className="inline-flex text-center py-3 my-1 mr-4 text-base font-bold transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                  >
                    {cta_btn ? cta_btn : "Contact Us Now"}
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <FAQ_ITEM faqData={faqs} />
          {/* <Portfolio items={portfolio.frontmatter.portfolio} classes={`bg-transparent`} isHome={false}/> */}
        </div>
      </section>
    </Base>
  );
};

export default ServiceSingle;
