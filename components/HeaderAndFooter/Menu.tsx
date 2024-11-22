import { menuItems } from "@/app/layout";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const Menu = ({
 // This should contain your 8 categories, each with 5 subcategories
}) => {
  const path = usePathname();
 

  return (
    <ul className="hidden md:flex items-center gap-8 z-20 text-black m-auto">
      {menuItems.map((item,index) => {
        const isActive = path === item.url;

        return (
          <div key={index}>
           
              <li
                className={`relative uppercase cursor-pointer text-[14px] transition-all ease-in-out border-b-1 ${
                  isActive
                    ? "text-primary border-primary"
                    : "border-transparent hover:text-primary group"
                } pb-1`}
              >
                <Link href={item.url}>{item.name}</Link>
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] bg-primary transition-all ease-in-out duration-500 transform -translate-x-1/2 ${
                    isActive
                      ? "w-full -translate-x-1/2"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
          
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
