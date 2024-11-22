import { menuItems } from "@/app/layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  subMenuData,
 
}) => {


  return (
    <>
      <ul className="flex flex-col lg:hidden font-normal text-lg absolute top-[8svh] h-[100vh] left-0 w-full bg-white border-t text-black z-50 pt-7">
        {menuItems.map((item,index) => {
          return (
            <React.Fragment key={index}>
              
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => {
                    setMobileMenu(false)
                  }
                  } >
                    {item.name}
                  </Link>
                </li>
      
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
