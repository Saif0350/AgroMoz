import React from "react";
import Banner from "../Banner";
import Image from "next/image";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Link from "next/link";

const CommitMentPage = () => {
  return (
    <>
      <Banner title="Commitment" bgImg="/services/12.avif" page="commitment" />

      <div className="sjcontainer md:px-20 px-4 md:py-4 py-7 ">
        <div className="flex flex-col relative">
          <div className="flex items-center">
            {/* Vertical line */}
            <div className="w-[2px] h-[60px] bg-primary   mr-4"></div>

            {/* Text Section */}
            <div className="z-10">
              <h4 className="text-2xl font-bold">Commitment</h4>
              <h4 className="text-primary text-3xl font-semibold">
                From sowing to square off
              </h4>
            </div>
          </div>

          <div className="mt-8 z-10">
            <h4 className="text-greish text-xl">
              At AgroMoz, we are deeply committed to transforming the
              agricultural sector with unwavering dedication. Our mission is to
              create a seamless and transparent platform that empowers farmers
              and producers while ensuring consumers receive the best in quality
              and freshness. From harvest to delivery, every step of the journey
              reflects our promise of excellence, sustainability, and trust.
            </h4>
          </div>

          <div className="absolute bottom-0 md:right-0 opacity-40">
            <Image
              src={"/banner/crop1.png"}
              width={800}
              height={800}
              alt="banneralytv"
              className="w-[40%]"
            />
          </div>

          <div className="bg-gradient-to-r from-white to-white border border-primary text-primary rounded-sm px-6 py-2 w-[160px] flex justify-center items-center hover:from-primary hover:to-secondary hover:border-white hover:text-white mt-5">
            <Link href={"/services"}>
              <button className="text-xl">Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12">
        <WhyChooseUsSection />
      </div>
    </>
  );
};

export default CommitMentPage;
