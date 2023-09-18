import { markdownify } from "@lib/utils/textConverter";
import Image from 'next/image';
import Link from "next/link";
import NotFound_img from '../public/images/404.svg'


const NotFound = ({ data }) => {
  const { frontmatter, content } = data;

  return (

    <section className="section">
      <div className="container">
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="w-full xl:w-1/2 pb-12 lg:pb-0">

            <h1 className="my-2 text-gray-800 font-bold text-2xl dark:text-white">
              {frontmatter.title}
            </h1>
            <p className="my-2 text-gray-800 dark:text-white">
              Sorry about that! Please visit our homepage to get where
              you need to go.
            </p>
            <div className="mt-5">
              <Link className="sm:w-full lg:w-auto my-2 border md py-4 px-8 text-center bg-[#325aa5] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 rounded-lg"
                href='/'
                title="Back to B-Circles">
                Back to B-Circles!
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={NotFound_img}
              alt="Not Found"
              width={250} // Set the desired width
              height={250} // Set the desired height
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
