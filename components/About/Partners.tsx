import Image from "next/image";
import React from "react";

const data = [
  { icon: "/sjimages/21.jpg" },
  { icon: "/sjimages/22.jpg" },
  { icon: "/sjimages/23.jpg" },
  { icon: "/sjimages/24.jpg" },
  { icon: "/sjimages/25.jpg" },
  { icon: "/sjimages/26.jpg" },
  { icon: "/sjimages/27.jpg" },
  { icon: "/sjimages/28.jpg" },
  { icon: "/sjimages/29.jpg" },
  { icon: "/sjimages/30.jpg" },
  { icon: "/sjimages/31.jpg" },
  { icon: "/sjimages/32.jpg" },
  { icon: "/sjimages/33.jpg" },
  { icon: "/sjimages/34.jpg" },
  { icon: "/sjimages/35.jpg" },
  { icon: "/sjimages/36.jpg" },
  { icon: "/sjimages/37.jpg" },
  { icon: "/sjimages/38.jpg" },
  { icon: "/sjimages/39.jpg" },
  { icon: "/sjimages/40.jpg" },
  { icon: "/sjimages/41.jpg" },
  { icon: "/sjimages/42.jpg" },
  { icon: "/sjimages/43.jpg" },
  { icon: "/sjimages/44.jpg" },
];

const Partners = () => {
  return (
    <div className=" py-10 md:py-4 ">
      <div className="sjcontainer my-4 md:my-20">
        <h2 title="Sectors We Work For" className="text-center" />

        <div className="flex items-center">
          {/* Vertical line */}
          <div className="w-[2px] h-[60px] bg-primary mr-4"></div>

          {/* Text Section */}
          <div className="z-10">
            <h4 className="text-2xl font-bold">Trusted Partnerships</h4>
            <h4 className="text-primary md:text-3xl text-lg font-semibold">
              Strengthening Agriculture, Together
            </h4>
          </div>
        </div>

        <div className="grid mt-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-2">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-1  md:p-4 group m-1.5 md:m-2 border-b shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-center"
            >
              <Image
                width={200}
                height={100}
                src={item.icon}
                alt="icon"
                className="w-full h-16  !object-contain mx-auto group-hover:scale-105 duration-300 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
