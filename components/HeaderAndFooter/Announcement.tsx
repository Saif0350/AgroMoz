"use client";
import {
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  PhoneCall,
  Twitter,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Announcement = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathanme = usePathname();
  console.log(pathanme, "pathname");

  const isBlogSlugPage = pathanme.startsWith("/blogs/");

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="hidden md:flex h-[12svh] px-16 bg-gradient-to-r from-primary to-primary items-center justify-between">
    <div
      className="hidden md:flex h-[8svh] px-16 items-center justify-end bg-gradient-to-r from-[#036939] to-[#036939]"
      // style={{ background: "linear-gradient(to right, #98c23c 20%, #036939 100%)" }}
    >
      <div
        className={`flex fixed top-0 left-10 z-[100] w-auto py-6 px-6 bg-white rounded-b-full ${
          isBlogSlugPage || isScrolled
            ? "shadow-md"
            : "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        }`}
      >
        <Link href={"/"}>
          <Image
            src="/AgroMoz.png"
            width={isScrolled ? 60 : 80}
            height={isScrolled ? 60 : 80}
            alt="agro"
            onClick={() => setMobileMenu(false)}
            className="transition-all duration-300"
          />
          {/* <h4 className="text-4xl text-white ">Robust Agriculture</h4> */}
        </Link>
      </div>
      <div className="flex items-center gap-10 text-white">
        {/* <div className="flex items-center gap-1">
          <div className="p-2.5 rounded-full">
            <PhoneCall color="#98c23c" size={25} />
          </div>
          <div className="">
            <p className="text-lg">
              {" "}
              <a href="tel:+919892582134">+91 9892582134</a>
            </p>
          </div>
        </div> */}
        <div className="flex items-center gap-1">
          <div className="p-2.5 rounded-full">
            <Mail color="#98c23c" size={22} />
          </div>
          <div className="">
            {/* <p className=" text-lg">EMAIL ADDRESS</p> */}
            <p className="text-base">
              <a href="mailto:admin@agro-moz.com">admin@agro-moz.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
