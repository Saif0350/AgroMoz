import React from "react";

import { GiCoconuts, GiCoffeeBeans, GiPeas, GiSesame } from "react-icons/gi";

const ServicesSection4 = () => {
  return (
    <>
      <div className="flex items-center my-6">
        {/* Vertical line */}
        <div className="w-[2px] h-[60px] bg-primary   mr-4"></div>

        {/* Text Section */}
        <div className="z-10">
          <h4 className="text-2xl font-bold">Our Products</h4>
          <h4 className="text-secondary md:text-3xl text-lg font-semibold">
            Comprehensive Warehousing & Distribution Solutions for Sesame,
            Soybeans, Pigeon Peas, and Raw Cashew Nuts
          </h4>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-fixed py-12 px-4"
        style={{
          backgroundImage: `url("/services/12.avif")`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Sesame",
              desc: "We specialize in exporting high-quality sesame products that meet the demands of international markets. With a commitment to quality and sustainability, we ensure that our sesame seeds and derived products are delivered fresh and ready for your culinary needs",
              icon: <GiSesame />,
            },
            {
              title: "Soya Beans",
              desc: "We partner with local farmers who practice sustainable farming methods to ensure the highest quality soybeans. Our products undergo stringent quality checks to meet international standards, ensuring that you receive only the best.",
              icon: <GiCoffeeBeans />,
            },
            {
              title: "Pigeon Peas",
              desc: "Carefully processed to retain nutrients, our split pigeon peas are ready to cook and are ideal for a variety of dishes. Our streamlined export process guarantees timely delivery, maintaining the freshness and quality of our products.",
              icon: <GiPeas />,
            },
            {
              title: "Raw Cashew Nuts",
              desc: "We specialize in the export of high-quality raw cashew nuts to markets around the globe. Known for their rich flavor and numerous health benefits, our cashew nuts are sourced from trusted farms that prioritize sustainability and quality.",
              icon: <GiCoconuts />,
            },
            // { title: "E-commerce", icon: <FaCogs /> },
            // { title: "Education & office technology", icon: <FaBook /> },
            // { title: "Sports and fitness (equipment)", icon: <FaDumbbell /> },
            // { title: "Oil & gas", icon: <FaGasPump /> },
            // {
            //   title: "Telecommunications & mobile phones",
            //   icon: <FaBroadcastTower />,
            // },
            // { title: "Others", icon: <FaEllipsisH /> },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-70 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl bg-secondary2 rounded-full w-16 flex items-center justify-center h-16 text-white mb-2">
                {service.icon}
              </div>
              <h3 className="md:text-xl text-lg font-medium text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection4;
