import Banner from "@/components/Banner";
import ContactForm from "@/components/Contact/Contactform";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner title="Contact Us" bgImg="/services/13.avif" page="Contact" />

      <div>
        <ContactForm />
      </div>
      <div className="flex-1 mx-auto relative z-0 p-4 md:p-8 md:pt-0">
        <iframe
          className="w-full h-[40vh] md:h-[70vh] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557183.064293053!2d37.008519738930545!3d15.092566835741806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1731931380479!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
