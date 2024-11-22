import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewAgriPage = () => {
  return (
    <div
      className="sjcontainer md:px-20 px-4 md:py-24 py-12 relative"
      //   style={{
      //     backgroundImage: `url("/banner/crop1.png")`,
      //     backgroundSize: "cover",
      //   }}
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          {/* Vertical line */}
          <div className="w-[2px] h-[60px] bg-primary mr-4"></div>

          {/* Text Section */}
          <div className="z-10">
            <h4 className="text-2xl font-bold">Services</h4>
            <h4 className="text-primary text-3xl font-semibold">
              From sowing to square off
            </h4>
          </div>
        </div>

        <div className="mt-8 z-10">
          <h4 className="text-greish text-xl">
            At AgroMoz, we are revolutionizing the agricultural value chain by
            creating an efficient, seamless platform that connects farmers and
            producers directly with consumers. From the moment of harvest to the
            final delivery at your doorstep, we ensure that every step of the
            journey is optimized for freshness, quality, and sustainability.
          </h4>
        </div>

        <div className="absolute bottom-0 md:right-0 opacity-60">
          <Image
            src={"/banner/crop1.png"}
            width={800}
            height={800}
            alt="banneralytv"
            className="w-[60%] z-0"
          />
        </div>

        {/* <div className="bg-gradient-to-r from-white to-white border border-primary text-primary rounded-sm px-6 py-2 w-[160px] flex justify-center items-center hover:from-primary hover:to-secondary hover:border-white hover:text-white mt-5"> */}
        <div className="bg-gradient-to-r from-primary to-primary rounded-sm px-6 py-2 text-white font-bold w-[160px] flex justify-center hover:from-primary hover:to-secondary mt-5 z-10">
          <Link href={"/about-us"}>
            <button className="text-xl">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewAgriPage;
