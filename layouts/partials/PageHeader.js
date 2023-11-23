
const PageHeader = ({ title, image }) => {
  const headerStyle = {
    backgroundImage: image ? `url(${image})` : 'none',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 1, // Lower z-index for the background image
  };

  return (
    <section className="relative rounded-2xl">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full  rounded-2xl"
        style={headerStyle}
      ></div>

      {/* Overlay */}
      <div
        className="dark-overlay absolute top-0 left-0 w-full h-full  rounded-2xl"
        style={{
          backgroundColor: "rgb(70 82 164 / 48%)", // Adjust opacity as needed
          zIndex: 2, // Higher z-index for the overlay
        }}
      ></div>

      {/* Content (text) */}
      <div
        className="relative text-center px-8 py-20  rounded-2xl"
        style={{ zIndex: 3 }} // Highest z-index for the text
      >
        {title && <h1 className="font-third text-white uppercase">{title}</h1>}
      </div>
    </section>
  );
};

export default PageHeader;