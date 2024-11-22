import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  MapPinned,
  Phone,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 border-t mt-20">
      <div className=" px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* <img
              src="/mainlogo2.png"
              className="mr-5 w-[150px] md:w-[280px]"
              alt="Footer Logo"
            /> */}
            <Image src="/AgroMoz.png" width={80} height={80} alt="ruby" />
            {/* <h4 className="text-4xl ">AgroMoz Agriculture</h4> */}
            <p className="mt-5 text-base font-light">
              At AgroMoz, we specialize in delivering innovative agricultural
              solutions that optimize efficiency and drive performance across
              farming and food production processes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl">Quick Links</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Home</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/about-us"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">About Us</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/services"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Services</span>
                </Link>

                <Link
                  className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/contact-us"}
                >
                  <ArrowRight className="" size={16} />
                  <span className="hover:text-primary">Contact Us </span>
                </Link>

                {/* {categories &&
                  categories?.map((item, index) => (
                    <>
                      <Link
                        key={index}
                        className="hover:text-primary"
                        href={`/category/${item?.slug}?cid=${item?.id}`}
                      >
                        {item?.name}
                      </Link>
                    </>
                  ))} */}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Commitment</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <Link className="hover:text-primary" href={"/commitment"}>
                  Global Food Security
                </Link>
                <Link className="hover:text-primary" href={"/commitment"}>
                  Sustainability
                </Link>
                {/* <Link className="hover:text-primary" href={"/blog"}>
                  Blog
                </Link> */}
                {/* <Link
                  className="hover:text-primary"
                  href={"/subcategories/hydrolic-system"}
                >
                  Hydrolic Systems
                </Link> */}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-3 mt-4 text-sm">
                <div className="flex  items-start gap-2">
                  <div className="mt-1">
                    <MapPin size={20} color="#036939" />
                  </div>
                  <h2>
                    Antigo Olam Fabrica de Algodao Ao lado Fabrica de Jam de
                    Ceramica Rua Estrada Nacional No 6 Zona de Ceramica
                    <br />
                    Beira, Sofala, Mozambique
                  </h2>
                </div>
                {/* <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#036939" />
                  <a href="tel:+919820891821">+91 97867564578</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#036939" />
                  <a href="tel:+919594082134">+91 89768576545</a>
                </div> */}

                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#036939" />
                  <a href="mailto:admin@agro-moz.com">admin@agro-moz.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="mt- text-base text-center">
          © {currentYear} All Rights Reserved{" "}
          <a
            href="/"
            className="text-primary hover:text-secondary"
            target="_blank"
          >
            AgroMoz
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
