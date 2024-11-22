import Ourteam from "@/components/About/Ourteam";
import Partners from "@/components/About/Partners";
import Whychooseus from "@/components/About/Whychooseus";
import Banner from "@/components/Banner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <Banner title="About Us" bgImg="/services/3.jpg" page="About" />

      <div className="sjcontainer md:px-20 px-4 md:py-6 py-12 relative">
        {/* //////////////SECTION 1 //////////////// */}

        <div className="grid md:grid-cols-[55%,45%]   items-start  gap-4 lg:gap-10">
          <div className=" w-full  my-12">
            <h2 className=" font-semibold text-3xl sm:text-6xl sm:leading-[65px]">
              What
              <br />
              <span className="text-secondary ">For Farmers.</span>
              <br />
              <span className="text-secondary ">With Farmers.</span>
            </h2>
            <img
              src="https://img.freepik.com/premium-vector/smart-farming-illustration-pack_220346-8957.jpg?w=900"
              className="md:-mt-20 w-full md:w-1/2 block sm:hidden "
            />
            <p className="text-xl md:my-4 mt-0">
              We Have Years Of Experience in Help Succeed Service!
            </p>
            <p className="text-base mb-4 text-gray-500">
              On any given day, over 3 lakh farmers and 10,000 FPOs leverage the
              comprehensive AgroMoz value chain to thrive. Our robust pan-India
              network of 1300+ warehouses spanning across 18+ states and 200+
              locations delivers a warehousing capacity of over 2 million MT,
              empowering farmers to minimize post-harvest losses and maximize
              returns on their produce.
            </p>
            <p className="text-base text-gray-500 mb-4">
              Our warehousing solutions go beyond just storage. They act as
              critical hubs in the agricultural ecosystem, offering inventory
              management, quality control, and cold storage facilities for
              perishable goods. These state-of-the-art warehouses are
              strategically located to ensure seamless access to markets,
              helping farmers achieve operational efficiency and financial
              growth.
            </p>
            <p className="text-base text-gray-500">
              At AgroMoz, we believe no one understands agriculture better than
              farmers. Improving yields, minimizing post-harvest losses, and
              enhancing farmer incomes requires putting advanced tools and
              technology directly in their hands. By redefining the agricultural
              value chain—from storage and warehousing to credit financing and
              logistics—we are creating a system that supports their success at
              every stage.
            </p>
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-secondary to-secondary rounded-sm px-4 py-2 mt-4 text-lg text-white font-bold w-40 flex items-center hover:to-primary hover:from-secondary gap-2"
            >
              Contact Us <ArrowRight size={20} color="white" />
            </Link>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/smart-farming-illustration-pack_220346-8957.jpg?w=900"
            className=" w-full  sm:block hidden "
          />
        </div>
        {/* //////////////SECTION 1 //////////////// */}
        <Ourteam />
        <Whychooseus />
        {/* <Partners /> */}
      </div>
    </main>
  );
};

export default Page;
