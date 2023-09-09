import Base from "@layouts/Baseof";
import { getListPage } from "../lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";

const PrivacyPolicy = ({ data }) => {
  const { frontmatter } = data;
  const { title, last_updated, policies } = frontmatter;
  console.log(last_updated)
  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-center">
            <div>
              {markdownify(title, "h1", "font-normal dark:text-white mb-5")}
              <span className="font-normal dark:text-white">Last Updated: 9th Sep 2023</span>
              <p className="mt-5">This Privacy Policy describes how B-Circles (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services. For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.<br></br>

                Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
              </p>
              <div className="grid  -mt-6">
                {policies?.map((policy, index) => (
                  <div key={index} className="col-12 mt-6">
                    <div className="p-12  shadow">
                      <div className="faq-head relative">
                        {markdownify(policy.title, "h4", "dark:text-white")}
                      </div>
                      {markdownify(policy.answer, "p", "faq-body mt-4")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const privacyPolicyData = await getListPage('content/PrivacyPolicy.md');
  return {
    props: {
      data: privacyPolicyData,
    },
  };
};

export default PrivacyPolicy;
