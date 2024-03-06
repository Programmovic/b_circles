import { useState } from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';
import PageHeader from '@layouts/partials/PageHeader';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

const Portfolio = ({ items, isHome = true, service = "all", classes }) => {
  const [selectedCategory, setSelectedCategory] = useState(service);
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
    <section className={`${classes} ${isHome && "bg-theme-light dark:bg-[#231f20]"} section `}>
      <div className="container">

        {/* Conditionally render PageHeader based on isHome prop */}
        {isHome ? null : (
          <PageHeader
            title={`Our Work${selectedCategory !== "all" ? ` "${selectedCategory}"` : ""}`}
            image="/images/business-concept-with-team-close-up.jpg"
            overlay=".8"
          />
        )}
        {isHome &&
          <div className="seven">
            <h1 className="section_title">Our Work</h1>
          </div>}
        <div className="mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
              <button
                onClick={() => handleCategoryChange('all')}
                type="button"
                className={`uppercase border-b-4 px-5 py-2.5 text-center me-3 mb-3 font-bold transition-all duration-300 
      ${selectedCategory === "all" ? 'text-[#e06923] border-[#e06923] animate-pulse' : ' border-transparent'}`}
              >
                All ({items.length})
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  type="button"
                  className={`uppercase border-b-4 px-5 py-2.5 text-center me-3 mb-3 font-bold transition-all duration-300 
        ${selectedCategory === category ? ' text-[#e06923] border-[#e06923]  animate-pulse' : ' border-transparent'}`}
                >
                  {category} ({items.filter((item) => item.category === category).length})
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
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full transition-opacity duration-300 hover:blur-lg"
                />
                <div className="overlay transition-opacity duration-300">
                  <div className="overlay-content flex flex-col justify-center w-full">
                    {/* First div at the top */}
                    <div className={`flex flex-row mb-4 ${item.link ? "justify-between" : "justify-center"}`}>
                      <button
                        onClick={() => handleItemClick(i)}
                        className="view-button uppercase rounded-lg text-white bg-blue-700 px-3 py-1 mt-2"
                      >
                        View Image
                      </button>
                      {item.link &&
                        <Link
                          href={item.link}
                          className="view-button uppercase rounded-lg text-white bg-blue-700 p-3 mt-2"
                          target='_blank'
                          title={`View ${item.name}`}
                        >
                          <FaEye />
                        </Link>
                      }
                    </div>
                    {/* Second div at the bottom */}
                    <div className="mt-auto text-center">
                      <p className="name uppercase">{item.name}</p>
                      <p className="name text-sm text-muted capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}

            {/* "See More" Box */}
            {isHome && remainingItems > 0 && (
              <Link href="/our-work">
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
                      <p className="name uppercase text-white">See More in {selectedCategory}</p>
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
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
