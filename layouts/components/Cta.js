import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Image from "next/image";

function Cta({ cta }) {
  return (
    <section className="section px-4 dark:bg-[#231f20]">
      <div className="section container rounded-xl">
        <div className="row mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2 className="dark:text-white">{cta?.title}</h2>
            {cta?.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={cta?.button.link}
                rel={cta?.button.rel}
                title={cta?.button.label}
              >
                {cta?.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
