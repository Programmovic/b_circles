import config from "@config/config.json";
import { FaMarker, FaPaperPlane, FaGlobe } from "react-icons/fa";
import { useState, useRef } from "react";

const Contact_Form = (props) => {
  const [formStatus, setFormStatus] = useState(null);
  const [formStatusClass, setFormStatusClass] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameInput = event.target.elements.name.value;
    const emailInput = event.target.elements.email.value;
    const messageInput = event.target.elements.message.value;
    const honeypotInput = event.target.elements.honeypot.value;
    // Input validations
    if (!nameInput.trim() || !emailInput.trim() || !messageInput.trim() || honeypotInput !== '') {
      setFormStatus("Please fill in all the required fields.");
      setFormStatusClass("bg-red-400");
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput)) {
      setFormStatus("Please enter a valid email address.");
      setFormStatusClass("bg-red-400");
      return;
    }

    // Spam protection (e.g., add a honeypot field)

    if (honeypotInput) {
      // If the honeypot field is filled, consider it as spam
      return;
    }

    setIsSubmitting(true);
    setFormStatusClass("bg-orange-400");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          message: messageInput,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        setFormStatus("Your message was sent, thank you!");
        setFormStatusClass("bg-green-400");

        setTimeout(() => {
          setFormStatus(null);
          setFormStatusClass(null);
        }, 30000); // Clear the message status after 30 secondss
      } else {
        setFormStatus("Error while sending the message. Please try again.");
        setFormStatusClass("bg-red-400");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("Error while sending the message. Please try again.");
      setFormStatusClass("bg-red-400");
    } finally {
      setIsSubmitting(false);
      event.target.reset();
    }
  };


  return (
    <div className={`dark:bg-[#141111] flex flex-col md:flex-row rounded bg-theme-light ${props.className}`}>
      <div className="c_inputs w-full md:w-2/3 md:pr-4">
        <div className="p-8">
          
          <div className="seven">
              <h1 className={`section_title text-3xl`}>{props.data?.frontmatter.title ? props.data.frontmatter.title : "Contact Us"}</h1>
            </div>
          <div
            id="form-message-status"
            className={`mb-4 rounded-lg p-3 text-white ${formStatusClass}`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              formStatus
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            method="POST"
            id="contactForm"
            name="contactForm"
            className="contactForm"
            ref={form}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 dark:text-white" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border-none px-4 py-2 dark:bg-[#192221a1] focus:outline-none focus:ring focus:border-blue-300"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-white" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="block w-full rounded-lg border-none px-4 py-2 dark:bg-[#192221a1] focus:outline-none focus:ring focus:border-blue-300"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-gray-700 dark:text-white" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className="block w-full rounded-lg border-none px-4 py-2 dark:bg-[#192221a1] focus:outline-none focus:ring focus:border-blue-300"
                id="message"
                cols={30}
                rows={4}
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <input type="text" name="honeypot" style={{ display: 'none' }} />
            <div className="mt-4">
              <input
                type="submit"
                disabled={isSubmitting}
                value={props.data?.frontmatter.button ? props.data.frontmatter.button : "Contact"}
                className="cursor-pointer rounded bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-600"
              />
              <div className="submitting" />
            </div>
          </form>
        </div>
      </div>
      <div className="c_bg flex items-center w-full md:w-1/3 bg-[#4de2d014] p-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.92590207064!2d30.913491899999997!3d29.952809900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458571eba2ff341%3A0xffbdd7e79fb7293f!2sB-Circles%20_%20Marketing%20Agency!5e0!3m2!1sen!2seg!4v1700772621164!5m2!1sen!2seg" width={600} height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"/>
      </div>

    </div>
  );
};

export default Contact_Form;