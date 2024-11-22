import React from "react";

import {
  GiPlantWatering,
  GiFarmer,
  GiFertilizerBag,
  GiGrain,
  GiFarmTractor,
  GiThreeLeaves,
  GiTruck,
} from "react-icons/gi";

import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUsSection = () => {
  return (
    <>
      <div className="sjcontainer w-full flex flex-col md:flex-row md:px-20 px-4 gap-3">
        <div className="w-full md:w-[40%]">
          <h3 className="text-mainColor4 font-semibold md:text-2xl text-base uppercase">
            Why Choose Us
          </h3>

          <div className="md:mt-5 mt-1">
            <h4 className="md:text-5xl text-3xl font-bold md:leading-[50px] leading-0">
              We Nurture{" "}
              <span className="text-mainColor4 md:text-5xl text-3xl font-bold">
                Agriculture{" "}
              </span>
              Excellence
            </h4>
          </div>

          <div className="mt-4">
            <p>
              At AgroMoz, we are dedicated to empowering the agriculture sector
              with innovative solutions, sustainable practices, and unmatched
              support. From advanced farming tools to supply chain optimization,
              we ensure farmers and producers thrive. Our commitment to growth
              drives us to deliver excellence at every step of the journey.
            </p>

            <Link href={"/contact-us"}>
              <div className="mt-5 flex gap-2 items-center">
                <button className="uppercase font-semibold">Read More</button>
                <MdOutlineArrowOutward size={17} color="black" />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[60%]">
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="space-y-5 md:w-1/2 w-full mt-6 md:mt-0">
              <WhyChooseCard
                icon={GiPlantWatering}
                title="Sustainable Farming"
                description="We promote sustainable farming methods, providing tools and techniques that enhance crop yield while preserving the environment."
                iconColor="#ffffff"
                iconSize={70}
              />
              <WhyChooseCard
                icon={GiFarmer}
                title="Empowering Farmers"
                description="Our farmer-centric solutions empower agricultural communities by offering training, technology, and market access."
                iconColor="white"
                iconSize={70}
              />
              <WhyChooseCard
                icon={GiFertilizerBag}
                title="Efficient Inputs"
                description="Access high-quality fertilizers, seeds, and farming tools designed to maximize efficiency and productivity in every field."
                iconColor="white"
                iconSize={70}
              />
              <WhyChooseCard
                icon={GiGrain}
                title="Post-Harvest Excellence"
                description="Streamline post-harvest processes with our advanced storage and processing solutions, reducing wastage and enhancing quality."
                iconColor="white"
                iconSize={70}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <WhyChooseCard
                icon={GiFarmTractor}
                title="Modern Equipment"
                description="Our innovative farming equipment helps reduce labor, improve efficiency, and adapt to modern agricultural needs."
                iconColor="white"
                iconSize={70}
              />

              <WhyChooseCard
                icon={GiThreeLeaves}
                title="Optimized Harvesting"
                description="Our advanced harvesting solutions ensure minimal crop loss, maximizing the returns for every season."
                iconColor="white"
                iconSize={70}
              />

              <WhyChooseCard
                icon={GiTruck}
                title="Seamless Transportation"
                description="With efficient logistics, we ensure agricultural products are transported securely, maintaining freshness and quality."
                iconColor="white"
                iconSize={70}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;
