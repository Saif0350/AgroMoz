import React from "react";
import {
  FaTractor,
  FaSeedling,
  FaWarehouse,
  FaLeaf,
  FaWater,
  FaHandsHelping,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Modern Agricultural Machinery",
    description:
      "Empower your farming operations with our cutting-edge equipment, designed to boost efficiency and productivity.",
    icon: <FaTractor />,
  },
  {
    id: 2,
    title: "Sustainable Farming Solutions",
    description:
      "We provide eco-friendly tools and solutions to support sustainable agricultural practices and environmental conservation.",
    icon: <FaSeedling />,
  },
  {
    id: 3,
    title: "Advanced Storage Facilities",
    description:
      "Preserve the quality of your produce with our state-of-the-art warehousing and storage systems.",
    icon: <FaWarehouse />,
  },
  {
    id: 4,
    title: "Organic Farming Expertise",
    description:
      "Leverage our expertise in organic farming to cultivate healthier, chemical-free crops.",
    icon: <FaLeaf />,
  },
  {
    id: 5,
    title: "Efficient Irrigation Systems",
    description:
      "Optimize water usage with our modern irrigation systems, designed for precision and sustainability.",
    icon: <FaWater />,
  },
  {
    id: 6,
    title: "End-to-End Support",
    description:
      "From planning to harvest, we offer complete support to ensure the success of your agricultural endeavors.",
    icon: <FaHandsHelping />,
  },
];

const OurServices = () => {
  return (
    <div className="px-4 md:px-20 bg-gray-100 py-14">
      <p className="text-base text-primary font-bold text-center">
        Why Choose AgroMoz
      </p>
      <h2 className="text-3xl md:text-5xl font-[antonio] text-center mb-8">
        Transforming Agriculture with Excellence
      </h2>
      <div className="w-60 mx-auto -mt-4 mb-3 h-0.5 bg-primary rounded-full"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border-primary items-center group p-2 md:p-4 border bg-white shadow-md rounded-sm transform transition-transform duration-200 hover:rotate-1 hover:scale-105"
          >
            <div className="text-5xl text-primary mb-4">{item.icon}</div>
            <h3 className="text-xl md:text-2xl text-primary font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-800 text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
