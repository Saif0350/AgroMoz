"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [subMenuData, setSubMenuData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const divRef = useRef(null);
  const pathanme = usePathname();
  console.log(pathanme, "pathname");

  const handleCloseDiv = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleCloseDiv);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleCloseDiv);
    };
  }, []);

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };

  const [headerClass, setHeaderClass] = useState(
    "sticky top-0 z-50 bg-white w-full"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderClass("fixed top-0 z-50 bg-white shadow-md w-full");
      } else {
        setHeaderClass("sticky top-0 z-50 bg-white w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${headerClass} px-5 lg:px-20 h-[8svh] flex items-center justify-between transition-transform duration-300 ${"shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"}`}
    >
      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        subMenuData={subMenuData}
        setMobileMenu={setMobileMenu}
      />

      {mobileMenu && (
        <MenuMobile
          subMenuData={subMenuData}
          showCatMenu={showCatMenu}
          showContactMenu={showContactMenu}
          setShowCatMenu={setShowCatMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="flex items-center gap-2 justify-end w-full md:w-auto text-black">
        <div className="flex absolute top-0 left-5 z-[100] w-auto py-4 px-5 bg-white rounded-b-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <Link href={"/"} className="block md:hidden">
            {/* <img
            src="/mainlogo2.png"
            className="w-[180px] md:w-[250px]"
            alt="ruby"
            onClick={() => setMobileMenu(false)}
          /> */}

            <Image src="/AgroMoz.png" width={56} height={56} alt="ruby" />
            {/* <h4 className="text-2xl ">Robust Agriculture</h4> */}
          </Link>
        </div>
        {/* Mobile Icon Start */}
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer relative -mr-2 text-primary">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[20px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenuAltRight
              className="text-[30px]"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
