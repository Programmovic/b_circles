import Faq from "@layouts/Faq";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";
const { title } = config.site;

const FrequentlyAskedQuestions = ({ data }) => {
  return (
    <Base title={`${title} | Frequently Asked Questions`}>
      <Faq data={data} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const faqData = await getListPage('content/faq.md');
  return {
    props: {
      data: faqData,
    },
  };
};

export default FrequentlyAskedQuestions;
