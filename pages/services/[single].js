import config from "@config/config.json";
import ServiceSingle from "@layouts/ServiceSingle";
import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import { getListPage } from "@lib/contentParser";
const { blog_folder } = config.settings;

// post single layout
const Service = ({ post, authors, mdxContent, slug, portfolio }) => {
  const { frontmatter, content } = post[0];

  return (
    <ServiceSingle
      frontmatter={frontmatter}
      content={content}
      mdxContent={mdxContent}
      authors={authors}
      slug={slug}
      portfolio={portfolio}
    />
  );
};

// get post single slug
export const getStaticPaths = () => {
  const allSlug = getSinglePage(`content/services`);
  const paths = allSlug.map((item) => ({
    params: {
      single: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// get post single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const posts = getSinglePage(`content/services`);
  const post = posts.filter((p) => p.slug == single);
  const mdxContent = await parseMDX(post[0].content);
  const portfolio = await getListPage(`content/portfolio.md`);

  return {
    props: {
      post: post,
      mdxContent: mdxContent,
      slug: single,
      portfolio
    },
  };
};

export default Service;
