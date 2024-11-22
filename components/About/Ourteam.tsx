import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Ourteam = () => {
  const data = [
    {
      icon: "/sjimages/1.png",
      name: "1100+",
      description: "warehouses1",
    },
    {
      icon: "/sjimages/2.png",
      name: "100+Mn",
      description: "tonnes of grains",
    },
    {
      icon: "/sjimages/3.png",
      name: "900+Bn",
      description: "collateral finance",
    },
    {
      icon: "/sjimages/4.png",
      name: "16+",
      description: "states presence",
    },
  ];

  const data2 = ["/sjimages/5.png", "/sjimages/6.png", "/sjimages/7.png"];

  return (
    <div>
      <div className="relative ">
        <div
          className="bg-bottom h-[100vh] lg:h-[90vh] text-white  object-cover relative"
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/rice-transplanting-with-machine-agriculture-concepts_942279-196.jpg?w=900")`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/60"></div>
          <div className="flex flex-col items-center justify-center relative z-10">
            {/* main content */}

            <div className="md:flex items-center justify-center h-screen lg:h-[90vh] w-full ">
              <div className=" p-4 md:p-10 text-white md:bg-gray-100/20 w-[90vw] ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                  <h2 className="font-bold text-left  max-md:w-full text-3xl md:text-6xl text-white">
                    Storied history. <br />
                    Bold future.
                  </h2>
                  <div className="flex items-center space-x-4 md:space-x-10 lg:justify-center gap-2 text-base md:text-lg w-full">
                    {data2?.map((item, index) => (
                      <Image
                        key={index} // Provide a unique key for each item
                        src={item}
                        width={100} // Set explicit width
                        height={100} // Set explicit height
                        className="  w-12 md:w-20 lg:w-28 h-12 md:h-20 lg:h-28" // Ensure this matches the intended size
                        alt="icon"
                      />
                    ))}
                  </div>
                </div>
                <div className="max-w-[1000px] mt-10 md:mt-12  text-white text-sm md:text-lg">
                  <p className="text-white font-semibold text-xl md:text-2xl mb-3">
                    AgroMoz is pushing the boundaries of science and technology.
                    Why?
                  </p>
                  <p className="flex items-center text-white mb-1.5">
                    <CheckCircle className="" color="#fff" />
                    <span className="pl-2 text-white">
                      To improve the efficiency of pre-harvest and post-harvest
                      methods.
                    </span>
                  </p>

                  <p className="flex items-center text-white">
                    <CheckCircle className="" color="#fff" />
                    <span className="pl-2 text-white">
                      To feed the world’s growing population sustainably.
                    </span>
                  </p>

                  <p className="text-white font-semibold mt-10 text-base md:text-xl mb-3">
                    Warehousing is more than just a storage solution—it’s a
                    critical enabler for efficiency and sustainability. It helps
                    farmers mitigate post-harvest losses, reduce logistical
                    challenges, and access market opportunities like never
                    before. Through this, we’re empowering farmers to adopt
                    innovative practices and achieve sustainable growth.
                  </p>
                  <p className="flex items-center text-white mb-1.5">
                    <CheckCircle className="" color="#fff" />
                    <span className="pl-2 text-white">
                      Silo-based warehousing.
                    </span>
                  </p>

                  <p className="flex items-center text-white mb-1.5">
                    <CheckCircle className="" color="#fff" />
                    <span className="pl-2 text-white">
                      Tech-enabled real-time inventory monitoring.
                    </span>
                  </p>

                  <p className="flex items-center text-white mb-1.5">
                    <CheckCircle className="" color="#fff" />
                    <span className="pl-2 text-white">
                      Rs. 10,000 crore assets under management.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 px-4 md:px-20 py-10">
        <p className="text-lg text-secondary font-bold text-center">
          Our speciality
        </p>
        <h2 className="text-5xl font-bold text-center mb-8">Why Choose us</h2>
        <div className=" md:flex gap-4 gap-x-12 items-center">
          <div className="md:w-[40%] relative">
            <img
              src="/sjimages/bg1.png"
              alt="Background"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gray-100 opacity-40"></div>
          </div>
          <div className="flex flex-col justify-center md:w-[60%] ">
            <div className="grid grid-cols-2 gap-8 duration-300">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 items-start border-2 border-white shadow-xl bg-gradient-to-br from-white to-gray-200 transition-shadow  hover:shadow-inner duration-300"
                >
                  <div className="p-2">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className=" w-16 md:w-24 h-16 md:h-24 "
                    />
                  </div>
                  <h3 className=" text-2xl md:text-4xl font-bold mt-2   bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.name}
                  </h3>
                  <p className=" text-base md:text-lg text-gray-500  mt-2 md:mt-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
