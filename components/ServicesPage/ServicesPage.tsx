import React from "react";
import Banner from "../Banner";
import Image from "next/image";
import WareHouseComp2 from "../AgriServiceComp/WareHouseComp2";
import Partners from "../About/Partners";
import ServicesSection2 from "./ServicesSection2";
import ServicesSection3 from "./ServicesSection3";
import ServicesSection4 from "./ServicesSection4";

const ServicesPage = () => {
  return (
    <>
      <Banner
        title="Services"
        bgImg="https://img.freepik.com/premium-photo/farmer-writing-paperclip-background_488220-12053.jpg?w=1060"
        page="Services"
      />

      <div
        className="sjcontainer md:px-20 px-4 md:py-4 py-7 "
        //   style={{
        //     backgroundImage: `url("/banner/crop1.png")`,
        //     backgroundSize: "cover",
        //   }}
      >
        <div className="flex flex-col relative">
          <div className="flex items-center">
            {/* Vertical line */}
            <div className="w-[2px] h-[60px] bg-primary   mr-4"></div>

            {/* Text Section */}
            <div className="z-10">
              <h4 className="text-2xl font-bold">
                We Have Services All Over The Globe
              </h4>
              <h4 className="text-secondary md:text-3xl text-lg font-semibold">
                3PL warehousing & distribution solutions for manufacturing and
                trading companies
              </h4>
            </div>
          </div>

          <div className="mt-8 z-10">
            <h4 className="text-greish md:text-xl text-sm text-justify">
              At AgroMoz, We provides customized, 3PL solutions to manufacturing
              and trading companies across industries. This allows our clients
              to focus on their core business while outsourcing logistics
              functions to a specialized company like us. Our end-to-end
              solutions include transportation, warehousing, inventory
              management, order fulfillment, reverse logistics, other supply
              chain management functions, as well as value-added services. With
              a network of over 1300+ warehouses across Globe, and advanced
              technology and software tools, we help our clients meet their
              goals efficiently.
            </h4>
          </div>

          <div className="absolute bottom-0 md:right-0 opacity-40">
            <Image
              src={"/banner/12.webp"}
              width={800}
              height={800}
              alt="banneralytv"
              className="w-[40%]"
            />
          </div>

          <div className="bg-gradient-to-r from-white to-white border border-secondary text-secondary rounded-sm px-6 py-2 w-[160px] flex justify-center items-center hover:to-primary hover:from-secondary hover:border-white hover:text-white mt-5">
            <button className="text-xl">Read More</button>
          </div>
        </div>

        <div className="py-12">
          <ServicesSection3 />
        </div>

        <div>
          <ServicesSection4 />
        </div>

        <div className="py-12">
          <ServicesSection2 />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 my-12 gap-2">
          <WareHouseComp2 name={"Warehousing"} img={"/card/1.png"} />
          <WareHouseComp2 name={"Logistics"} img={"/card/2.png"} />{" "}
          <WareHouseComp2 name={"Procurement"} img={"/card/3.png"} />{" "}
          <WareHouseComp2
            name={"Warehouse & Distribution"}
            img={"/card/4.png"}
          />{" "}
          <WareHouseComp2 name={"Labs"} img={"/card/5.png"} />{" "}
          <WareHouseComp2 name={"Collateral Management"} img={"/card/6.png"} />
          {/* <WareHouseComp2 name={"Private Mandi"} img={"/card/7.png"} />{" "}
          <WareHouseComp2 name={"Robust Exports"} img={"/card/8.png"} />{" "} */}
          <WareHouseComp2 name={"Value Added Services"} img={"/card/9.png"} />
        </div>

        {/* <Partners /> */}
      </div>
    </>
  );
};

export default ServicesPage;
