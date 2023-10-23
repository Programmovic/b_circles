import Contact from "@layouts/Contact";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";


const Free_Consultation = ({ data }) => {
  return (
    <Base title={`${config.site.title} | Free Consultation`}>
      <Contact data={data} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const Free_ConsultationData = await getListPage('content/consultation.md');
  return {
    props: {
      data: Free_ConsultationData,
    },
  };
};

export default Free_Consultation;
