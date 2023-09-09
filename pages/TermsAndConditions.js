import Base from "@layouts/Baseof";
import { getRegularPage } from "../lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";

const TermsAndConditions = ({ data }) => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-start">
            <div>
              <h1 className="font-normal dark:text-white mb-5">Terms and Conditions</h1>
              <p className="font-normal dark:text-white">Last Updated: 9th Sep 2023</p>
              <p className="font-normal dark:text-white">Please read these terms and conditions carefully before using Our Service.</p>

              <h2 className="font-normal dark:text-white my-5 underline">Interpretation and Definitions</h2>
              <div className="p-3 bg-theme-light dark:bg-[#141111d9] rounded">
                <h3 className="dark:text-white">Interpretation</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              </div>
              <div className="p-3 bg-theme-light dark:bg-[#141111d9] rounded mt-3">
                <h3 className="dark:text-white">Definitions</h3>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul className="px-5">
                  <li><span className="font-bold">Country refers to:</span> Egypt</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const termsAndConditionsData = await getRegularPage();
  return {
    props: {
      data: termsAndConditionsData,
    },
  };
};

export default TermsAndConditions;
