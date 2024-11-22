"use client";
import { contactFormSubmission } from "@/lib/ContactFormSubmission";
import { send } from "@/lib/ContactMail";
import { ArrowRight, MailIcon, MapPin, PhoneCall } from "lucide-react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Email must be a valid Gmail address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a valid 10-digit number";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      alert(errorMessages);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      const { name, email, phone, message } = formData;

      try {
        const response = await contactFormSubmission(
          name,
          email,
          phone,
          message
        );

        if (response.status === 200) {
          toast("🥳⚡The message has been sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });

          const mailSent = await send({
            name,
            email,
            phone,
            message,
          });

          if (mailSent) {
            toast("🥳⚡The mail has been sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });

            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          } else {
            toast.error("Failed to send email. Please try again.");
          }
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <section
        className={`relative z-10 overflow-hidden  dark:bg-dark px-5 py-10 lg:p-20 lg:pt-0`}
      >
        <div className=" mx-auto">
          <div className="flex flex-wrap -mx-4 lg:justify-center">
            <div className="w-full  px-4 lg:w-1/2">
              <div className="relative px-3  dark:bg-dark-2 sm:px-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg ">
                <span className="block  text-xl font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="text-dark  font-[antonio] font-title -mt-2 mb-6 text-[25px] font-bold uppercase sm:text-[40px] lg:text-[44px] xl:text-[50px]">
                  GET IN TOUCH
                </h2>
                <div className="relative p-3 border-t-4 border-b-4 border-primary rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                  <form onSubmit={handleContactSubmit}>
                    <div className="mb-6">
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className=" border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6 flex gap-2 w-full">
                      <input
                        type="number"
                        required
                        name="phone"
                        value={formData.phone}
                        placeholder="9876543210"
                        onChange={handleChange}
                        className="dark:border-dark-3 border-gray-300 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md  border py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows="6"
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full text-base text-white p-3 transition border shadow-lg rounded-md bg-gradient-to-r from-primary to-secondary hover:to-primary hover:bg-opacity-60"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-[90%] md:w-full mx-auto my-12 md:my-2 rounded-lg  bg-gray-100 sm:p-12 lg:w-[40%]">
              <div className="mb-12 md:p-0  p-4 max-w-[570px] lg:mb-0">
                <span className="block  text-xl font-semibold text-primary">
                  Find Us
                </span>
                <h2 className="text-dark  font-[antonio] font-title -mt-2 mb-6 text-[25px] font-bold uppercase sm:text-[40px] lg:text-[44px] xl:text-[50px]">
                  In The Real World
                </h2>
                <p className="text-lg  text-gray-700 text-body-color dark:text-dark-6 mb-6">
                  Thank you for exploring our website! We're excited to connect
                  with you. If you have any questions, inquiries, or just want
                  to say hello, feel free to reach out to us. We value your
                  feedback and are here to assist you.
                </p>
                <div className="space-y-4 mt-8 text-sm">
                  <div className="flex  items-start gap-2">
                    <div className="mt-1">
                      <MapPin size={25} color="#036939" />
                    </div>
                    <h2 className="text-base">
                      Antigo Olam Fabrica de Algodao Ao lado Fabrica de Jam de
                      Ceramica Rua Estrada Nacional No 6 Zona de Ceramica
                      <br />
                      Beira, Sofala, Mozambique
                    </h2>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <PhoneCall size={25} color="#036939" />
                    <a href="tel:+919152709243" className="text-base">
                      +91 89765457656
                    </a>
                  </div> */}
                  <div className="flex items-center gap-2">
                    <MailIcon size={25} color="#036939" />
                    <a href="mailto:admin@agro-moz.com" className="text-base">
                      admin@agro-moz.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
