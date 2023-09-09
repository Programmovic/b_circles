import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { FaMarker, FaPhone, FaPaperPlane, FaGlobe } from 'react-icons/fa';
import c_photo from '../public/images/banner-bg.jpg'
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
            <div className="flex mb-5">
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <FaMarker className="w-16 h-16 bg-teal-400 mb-5 text-white rounded-full" />
                </div>
                <div className="text-center">
                  <p className="mt-2"><span className="font-bold">Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <FaPhone className="w-16 h-16 bg-teal-400 mb-5 text-white rounded-full" />
                </div>
                <div className="text-center">
                  <p className="mt-2"><span className="font-bold">Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <FaPaperPlane className="w-16 h-16 bg-teal-400 mb-5 text-white rounded-full" />
                </div>
                <div className="text-center">
                  <p className="mt-2"><span className="font-bold">Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex items-center justify-center">
                  <FaGlobe className="w-16 h-16 bg-teal-400 mb-5 text-white rounded-full" />
                </div>
                <div className="text-center">
                  <p className="mt-2"><span className="font-bold">Website:</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                  <div id="form-message-warning" className="mb-4" />
                  <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                    <div className="flex flex-wrap -mx-4">
                      <div className="w-1/2 px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="name">Full Name</label>
                          <input type="text" className="block w-full border border-gray-300 rounded px-4 py-2" name="name" id="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="w-1/2 px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="email">Email Address</label>
                          <input type="email" className="block w-full border border-gray-300 rounded px-4 py-2" name="email" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="subject">Subject</label>
                          <input type="text" className="block w-full border border-gray-300 rounded px-4 py-2" name="subject" id="subject" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label className="text-gray-700" htmlFor="#">Message</label>
                          <textarea name="message" className="block w-full border border-gray-300 rounded px-4 py-2" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <input type="submit" defaultValue="Send Message" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="w-1/3">
                <div class="p-8 h-full">
                  <Image src={c_photo} alt="Banner" width="100%" height="100%"  />
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
