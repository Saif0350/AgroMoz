import Image from "next/image";
import React from "react";

interface WareHouseComp1Props {
  name: string;
  img: string;
}

const WareHouseComp2: React.FC<WareHouseComp1Props> = ({ name, img }) => {
  return (
    <div className="group relative bg-bgmain  border flex items-center justify-between px-10 py-0 flex-row overflow-hidden">
      <div className="absolute inset-0 bg-black/[0.1] bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
      <div className="relative mt-8 z-10 w-1/2">
        <h4 className="md:text-2xl text-xl text-white text-center">{name}</h4>
      </div>

      <div className="relative overflow-hidden w-1/2">
        <Image
          src={img}
          width={800}
          height={800}
          alt={name}
          className="w-full transform transition-transform duration-300 group-hover:scale-110 md:w-full"
        />
      </div>
    </div>
  );
};

export default WareHouseComp2;
