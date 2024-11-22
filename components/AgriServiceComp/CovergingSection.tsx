import Image from "next/image";
import React from "react";

const CovergingSection = () => {
  return (
    <div className="sjcontainer md:px-20 px-4 md:py-24 py-12 relative">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center items-start justify-between">
          {/* Vertical line */}
          <div className="flex items-center">
            <div className="md:w-[2px] w-[6px] md:h-[60px] h-[100px] bg-primary   mr-4"></div>

            {/* Text Section */}
            <div className="z-10">
              <h4 className="md:text-2xl text-xl font-bold">
                Converging global linkages
              </h4>
              <h4 className="text-primary md:text-3xl text-2xl font-semibold">
                Meeting farmers’, FPOs, buyers’ & processors’ needs under a
                single roof
              </h4>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-white border border-primary text-primary rounded-sm px-6 py-2 w-[160px] flex justify-center items-center hover:from-primary hover:to-secondary hover:border-white hover:text-white mt-5">
            <button className="text-xl">Read More</button>
          </div>
        </div>

        {/* <div className="mt-8 z-10">
          <h4 className="text-greish text-xl">
            At Robust, we are revolutionizing the agricultural value chain by
            creating an efficient, seamless platform that connects farmers and
            producers directly with consumers. From the moment of harvest to the
            final delivery at your doorstep, we ensure that every step of the
            journey is optimized for freshness, quality, and sustainability.
          </h4>
        </div> */}

        <div>
          <Image
            src={"/card/10.png"}
            width={1000}
            height={1000}
            alt="kjhh"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CovergingSection;
