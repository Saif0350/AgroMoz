import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ServicesSection3 = () => {
  return (
    <>
      <div>
        <div className="w-full flex md:flex-row flex-col gap-6 items-center">
          <div className="md:w-[40%] w-full">
            <Image
              src={"/services/123.png"}
              width={1000}
              height={1000}
              alt="Image1"
              className="w-full"
            />
          </div>

          <div className="md:w-calc-width w-full flex-grow">
            <div className="flex items-center mb-7">
              {/* Vertical line */}
              <div className="w-[3px] h-[90px] bg-primary   mr-4"></div>

              {/* Text Section */}
              <div className="z-10">
                <h4 className="text-2xl font-bold">
                  {" "}
                  AgroMoz 3PL services include the following solutions:
                </h4>
                <h4 className="text-secondary md:text-xl text-lg ">
                  We specialize in providing top-notch services to meet your
                  logistics needs, even in challenging environments.
                </h4>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Serving clients in hard-to-reach locations",
                "Optimized warehousing and transportation volumes",
                "End-to-end automation with real-time visibility",
                "Cost-effective, flexible, and efficient inventory solutions",
                "Single-window approach",
                "Adherence to compliance, audits, and security",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center bg-gray-50 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-xl" />
                  <h4 className="text-gray-700 text-lg font-medium">
                    {service}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection3;
