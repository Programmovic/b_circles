import { useState } from 'react';

const FAQ_ITEM = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-10">
      <div className="ten mb-5">
            <h1 className={`section_title uppercase text-3xl md:text-2xl lg:text-3xl`}>{faqData?.title}</h1>
          </div>
      <div className="space-y-4">
        {faqData?.faqQuestions?.map((faq, index) => (
          <div
            key={index}
            className={`border-b rounded-lg p-2 px-5 transition duration-300 ease-in-out ${
              activeIndex === index ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex-1">
                <p className="text-lg font-semibold">{faq.question}</p>
              </div>
              <div
                className={`ml-2 transition-transform transform duration-700 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <span>&#11167;</span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ_ITEM;
