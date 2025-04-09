import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_big}
        alt=""
        className="w-1/2 h-[400px] hidden md:block object-cover rounded-2xl"
      />
      <img
        src={assets.bottom_banner}
        alt=""
        className="w-full block md:hidden"
      />
      <div className=" sm:absolute bottom-0 inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Why are we the best?
          </h1>
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex items-center gap-5 py-2">
                <img src={feature.icon} alt={feature.title} width={30} />
                <div>
                  <h3 className="text-lg md:text-3xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500/70 text-xs md:text-sm ">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
