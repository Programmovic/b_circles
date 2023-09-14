import { markdownify } from "@lib/utils/textConverter";
import Image from 'next/image';
import Link from "next/link";


const NotFound = ({ data }) => {
  const { frontmatter, content } = data;

  return (

    <section className="section">
      <div className="container">
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="">
                  <h1 className="my-2 text-gray-800 font-bold text-2xl">
                    {frontmatter.title}
                  </h1>
                  <p className="my-2 text-gray-800">
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
              </div>
              <div>
                <Image
                  src="https://i.ibb.co/G9DC8S0/404-2.png"
                  alt="404 Image"
                  width={250} // Set the desired width
                  height={250} // Set the desired height
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://i.ibb.co/ck1SGFJ/Group.png"
              alt="Group Image"
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
