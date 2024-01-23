import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Base from "./Baseof";
import Image from "next/image";
import config from "@config/config.json";

const PostSingle = ({ frontmatter, content, mdxContent }) => {
  let { description, title, image, keywords, canonical } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={`${config.site.title} | ${title}`} description={description} keywords={keywords} image={image} canonical={canonical}>
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center">
              {image && (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  layout="responsive"
                  className="rounded-lg mb-6"
                />
              )}
              {/* {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")} */}

              <div className="content mb-16 text-left dark:text-white">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
