import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="md:flex mt-20 mx-4 md:mx-36 my-10 md:my-20 gap-10">
      <div className=" w-full md:w-1/2 mt-12">
        <h2 className="font-[antonio] font-semibold text-3xl sm:text-5xl sm:leading-[60px] md:mb-0 mb-4">
          WELCOME TO <br />
          <span className="text-primary font-[antonio]">
            AGROMOZ AGRICULTURAL SOLUTIONS
          </span>
        </h2>
        <Image
          src="/banner/23.jpg"
          width={900}
          height={900}
          alt="main_image"
          className="md:mt-10 w-full md:w-1/2 block sm:hidden "
        />
        <p className="text-xl md:my-4 mt-4">
          We Have 15+ Years Of Experience in Helping Farmers Grow!
        </p>

        <p className="text-base text-gray-500">
          At AgroMoz Agricultural Solutions, we are dedicated to providing
          farmers with the most advanced and reliable farming equipment. With
          over 15 years of experience, we specialize in high-performance
          machinery for crop protection, harvesting, and irrigation. Our
          solutions are designed to maximize productivity, reduce waste, and
          improve sustainability in agriculture. From tractors to advanced
          irrigation systems, trust us to support your farm's growth and
          success.
        </p>

        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-primary to-primary rounded-sm px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center hover:from-primary hover:to-secondary gap-2"
        >
          Contact Us <ArrowRight size={20} color="white" />
        </Link>
      </div>
      <Image
        src="/banner/23.jpg"
        width={900}
        height={900}
        alt="main_image"
        className="md:mt-10 w-full md:w-1/2 sm:block hidden "
      />
    </div>
  );
};

export default Aboutus;
