import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Base from "./Baseof";
import Image from "next/image";
import config from "@config/config.json";
import PageHeader from "./partials/PageHeader";
import Contact_Form from "./components/Contact_Form";

const ServiceSingle = ({ frontmatter, content, mdxContent, slug }) => {
  let { description, title, image, keywords } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={`${config.site.title} | ${title}`} description={description} keywords={keywords} image={image}>
      <section className="section">
        <div className="container">
          <PageHeader title={title} image='/images/businessman-hand-hold-interface-question-marks-sign_218381-8871.webp' />
          <div className="row mt-6">
            <article className="col-12 mx-auto text-center">

              <div className="content mb-16 text-left dark:text-white">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            </article>
          </div>
          <Contact_Form data={{ frontmatter: { title: `Request For ${slug} Service` } }} />
        </div>
      </section>
    </Base>
  );
};

export default ServiceSingle;
