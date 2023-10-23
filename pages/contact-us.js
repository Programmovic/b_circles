import Contact from "@layouts/Contact";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";


const ContactUs = ({ data }) => {
  return (
    <Base title={`${config.site.title} | Contact Us`}>
      <Contact data={data} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const contactUsData = await getListPage('content/contact.md');
  return {
    props: {
      data: contactUsData,
    },
  };
};
export default ContactUs;
