import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrustedSection = () => {
  return (
    <div className="sjcontainer md:px-20 px-4 md:py-24 py-12 relative">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
          <div className="flex items-center">
            {/* Vertical line */}
            <div className="w-[4px] h-[100px] bg-primary   mr-4"></div>

            {/* Text Section */}
            <div className="z-10">
              <h4 className="text-2xl font-bold">
                Trusted. Transparent. Tech-driven.
              </h4>
              <h4 className="text-primary text-3xl font-semibold">
                One-stop solution for all your warehousing needs and more
              </h4>
            </div>
          </div>

          <div className="mt-8 z-10">
            <h4 className="text-greish text-xl">
              At AgroMoz, we are revolutionizing the agricultural value chain by
              creating an efficient, seamless platform that connects farmers and
              producers directly with consumers. From the moment of harvest to
              the final delivery at your doorstep, we ensure that every step of
              the journey is optimized for freshness, quality, and
              sustainability.
            </h4>
          </div>

          {/* <div className="border border-secondary px-6 py-2 max-w-[250px] flex justify-center items-center mt-5 hover:bg-secondary hover:text-white"> */}
          <div className="bg-gradient-to-r from-white to-white border border-primary text-primary rounded-sm px-6 py-2 max-w-[250px] flex justify-center items-center hover:from-primary hover:to-secondary hover:border-white hover:text-white mt-5">
            <Link href={"/contact-us"}>
              <button className="text-xl">Warehouse Locations</button>
            </Link>
          </div>
        </div>

        <div className="">
          <Image
            src={"/card/11.png"}
            width={800}
            height={800}
            alt="banneralytv"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
