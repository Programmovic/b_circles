import Portfolio from "@layouts/components/portfolio";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";
const { title } = config.site;

const Portfolio_Page = ({ portfolio }) => {
  return (
    <Base title={`${title} | Portfolio`}>
      <Portfolio items={portfolio.frontmatter.portfolio} isHome={false}/>
    </Base>
  );
};

export const getStaticProps = async () => {
  const portfolio = await getListPage(`content/portfolio.md`);
  return {
    props: {
      portfolio,
    },
  };
};

export default Portfolio_Page;
