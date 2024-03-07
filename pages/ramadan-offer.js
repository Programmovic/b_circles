import RamadanOfferWheel from "@layouts/components/ramdanLuckyWheel";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";
const { title } = config.site;

const Ramadan_Offers_Page = ({ offers }) => {
  return (
    <Base title={`${title} | Get Your Ramadan Offer`}>
      {/* Integrate RamadanOfferWheel component */}
      <RamadanOfferWheel offers={offers.frontmatter.offers} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const offers = await getListPage(`content/ramadan_offers.md`);
  return {
    props: {
      offers,
    },
  };
};

export default Ramadan_Offers_Page;
