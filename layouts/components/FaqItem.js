// components/FAQs.js

import { useState } from 'react';

const FAQ_ITEM = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{faqData?.title}</h2>
      <div className="space-y-4">
        {faqData?.faqQuestions?.map((faq, index) => (
          <div
            key={index}
            className="border-b rounded-2xl p-2 px-5 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex-1">
                <p className="text-lg font-semibold">{faq.question}</p>
              </div>
              <div className="ml-2">{activeIndex === index ? '-' : '+'}</div>
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
