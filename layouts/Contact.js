import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { FaMarker, FaPhone, FaPaperPlane, FaGlobe } from "react-icons/fa";
import c_photo from "../public/images/banner-bg.jpg";
import Image from "next/image";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="mb-5 flex md:flex-col">
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaMarker className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Address:</span> 198 West 21th
                    Street, Suite 721 New York NY 10016
                  </p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaPhone className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="w-1/4">
              <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaPaperPlane className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="w-1/4">
              <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400">
                    <FaGlobe className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mt-2">
                    <span className="font-bold">Website:</span>{" "}
                    <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3">
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
                  <div id="form-message-warning" className="mb-4" />
                  <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                  >
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-1/2 px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="block w-full rounded border border-gray-300 px-4 py-2"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="block w-full rounded border border-gray-300 px-4 py-2"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="subject">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="block w-full rounded border border-gray-300 px-4 py-2"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="#">
                            Message
                          </label>
                          <textarea
                            name="message"
                            className="block w-full rounded border border-gray-300 px-4 py-2"
                            id="message"
                            cols={30}
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <input
                            type="submit"
                            defaultValue="Send Message"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="w-1/3">
                <div class="h-full p-8">
                  <Image
                    src={c_photo}
                    alt="Banner"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
