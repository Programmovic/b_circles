import { useState } from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';
import PageHeader from '@layouts/partials/PageHeader';
import Link from 'next/link';

const Portfolio = ({ items, isHome = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const categories = [...new Set(items.map((item) => item.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleItemClick = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);
  const numItemsToShow = isHome ? 3 : filteredItems.length;
  const remainingItems = filteredItems.length - numItemsToShow;
  return (
    <section className="bg-theme-light dark:bg-[#231f20] section">
      <div className="container">
        {/* Conditionally render PageHeader based on isHome prop */}
        {isHome ? null : (
          <PageHeader
            title="Our Work"
            image="/images/businessman-hand-hold-interface-question-marks-sign_218381-8871.webp"
          />
        )}

        <div className="mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
              <button
                onClick={() => handleCategoryChange('all')}
                type="button"
                className="uppercase text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
              >
                All
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  type="button"
                  className={`${selectedCategory === category && 'ring-blue-800'
                    } uppercase text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Display only 3 items if isHome is true */}
            {filteredItems.slice(0, numItemsToShow).map((item, i) => (
              <div
                key={i}
                className="portfolio-item relative overflow-hidden rounded-md cursor-pointer"
                onClick={() => handleItemClick(i)}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full transition-opacity duration-300"
                />
                <div className="overlay transition-opacity duration-300">
                  <div className="overlay-content">
                    <p className="name uppercase">{item.name}</p>
                    <p className="name text-sm text-muted">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* "See More" Box */}
            {isHome && remainingItems > 0 && (
              <Link href="/portfolio">
                <div className="portfolio-item relative overflow-hidden rounded-md cursor-pointer">
                  <Image
                    src={'/images/see-more-background.jpg'}
                    alt={`See More in ${selectedCategory}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full transition-opacity duration-300"
                  />
                  <div className="overlay transition-opacity duration-300">
                  <div className="overlay-content">
                    <p className="name uppercase text-white">See More</p>
                    <p className="name text-sm text-muted text-white">{remainingItems}+ Items</p>
                  </div>
                  </div>
                </div>
              </Link>
            )}

          </div>

          {/* Display selected image in gallery */}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={filteredItems.map((item) => item.icon)}
            slide={lightboxController.slide}
            onClose={() => setLightboxController({ toggler: false })}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
