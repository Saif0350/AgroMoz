import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    icon1: "/sjimages/11.png",
    icon2: "/sjimages/12.png",
    title: (
      <p>
        Efficiency from
        <br />
        farm to mandi
      </p>
    ),
  },
  {
    icon1: "/sjimages/13.png",
    icon2: "/sjimages/14.png",
    title: (
      <p>
        Effectiveness from
        <br />
        mandi to processing
      </p>
    ),
  },
  {
    icon1: "/sjimages/15.png",
    icon2: "/sjimages/16.png",
    title: (
      <p>
        Efficacy from from
        <br />
        processing to retail
      </p>
    ),
  },
];

const Whychooseus = () => {
  return (
    <div className="sjcontainer md:px-10 my-10">
      <div className=" w-full  my-12">
        <h2 className=" font-semibold text-3xl sm:text-6xl sm:leading-[65px]">
          How
          <br />
          <span className="text-secondary ">Oldest Industry.</span>
          <br />
          <span className="text-secondary ">Newest Tech.</span>
        </h2>

        <p className="text-base mb-4 text-gray-500">
          Modern technology has the power to simplify farmers’ lives: that’s the
          principle on which we started. We work closely with farmers to shape
          AI-driven technologies that can feed the world.
        </p>
        <p className="text-base text-gray-500 mb-4">
          Our ‘Sowing to Square-off’ model bridges the gap between growers and
          buyers of commodities, creating a seamless and transparent ecosystem
          that ensures fair and optimal price discovery for all stakeholders.
          Central to this model is our robust warehousing infrastructure, which
          supports farmers in storing their produce safely and efficiently,
          preserving quality, and providing them with the confidence to
          negotiate better prices.
        </p>
        <p className="text-base text-gray-500 mb-4">
          With state-of-the-art storage facilities, farmers gain the ability to
          store their produce safely, protecting it from spoilage,
          weather-related risks, and market fluctuations. These warehouses are
          equipped with quality preservation systems, such as temperature
          control and inventory management, ensuring that produce remains in
          peak condition for extended periods. By leveraging these facilities,
          farmers can reduce post-harvest losses, maximize market value, and
          confidently negotiate better prices without the urgency of immediate
          sales. Additionally, our warehouses act as key enablers for financial
          empowerment, allowing farmers to access credit and liquidity through
          collateralized storage. Through this integration of warehousing, price
          discovery, and financial tools, AgroMoz transforms the agricultural
          value chain, ensuring farmers thrive in a competitive and dynamic
          marketplace.
        </p>
      </div>
      <div className="md:flex">
        {data.map((item, i) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="flex md:justify-center space-x-4">
                <img
                  src={item.icon1}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <img
                  src={item.icon2}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-xl  md:text-center max-ml-4  flex items-start md:justify-center  mt-4 ">
                <span className="font-bold text-3xl -mt-1 text-green-700">
                  {i + 1}.{" "}
                </span>
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whychooseus;
