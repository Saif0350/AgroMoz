import Image from "next/image";
import React from "react";

interface WareHouseComp1Props {
  name: string;
  img: string;
}

const WareHouseComp1: React.FC<WareHouseComp1Props> = ({ name, img }) => {
  return (
    <div className="group relative bg-bgmain aspect-[4/4] border flex items-center justify-center flex-col overflow-hidden">
      <div className="absolute inset-0 bg-black/[0.4] bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>

      <div className="relative overflow-hidden">
        <Image
          src={img}
          width={800}
          height={800}
          alt={name}
          className="w-full transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="relative mt-8 z-10">
        <h4 className="text-3xl text-white text-center">{name}</h4>
      </div>
    </div>
  );
};

export default WareHouseComp1;
