import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";
import config from "@config/config.json";
const { title } = config.site;

const notFound = ({ data }) => {
  return (
    <Base title={`${title} | Not Found`}>
      <NotFound data={data} />
    </Base>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage();
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
