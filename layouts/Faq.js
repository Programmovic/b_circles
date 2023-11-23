import { markdownify } from "@lib/utils/textConverter";
import Base from "./Baseof";
import config from "@config/config.json";
import PageHeader from "@layouts/partials/PageHeader";

const Faq = ({data}) => {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;

  return (
    
    <section className="section">
      
      <div className="container">
        <PageHeader title={title} image='/images/businessman-hand-hold-interface-question-marks-sign_218381-8871.webp'/>
        <div className="grid">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4", "dark:text-white")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Faq;
