import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";

function MainBanner() {
  return (
    <div className="relative">
      <img
        src={assets.banner1}
        alt="banner"
        className="w-full hidden md:block z-0"
      />
      <img
        src={assets.bannerSm}
        alt="banner"
        className=" md:hidden w-full z-0"
      />
      {/* <div
        className="absolute inset-0 flex flex-col items-center md:items-start justify-end 
      md:justify-center pb-24 md:pb-0 md:pl-18 lg:pl-24"
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 
        md:max-w-105 leading-tight lg:pl-24"
        >
          Freshness You can Trust, Savings You will Love!
        </h1>
      </div> */}
      <div className="flex items-center mt-6 font-medium">
        <Link
          to={"/products"}
          className="group flex items-center gap-2 px-7 md:px-9 py-3
         bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
        >
          Shop now
          <img
            src={assets.rightArrow}
            alt=""
            width={15}
            className="transition group-hover:translate-x-1"
          />
        </Link>
        <Link
          to={"/products"}
          className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
        >
          Explore deals
          <img
            src={assets.rightArrowBlack}
            alt=""
            width={15}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export default MainBanner;
