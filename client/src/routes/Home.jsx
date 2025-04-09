import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <div className="mt-10 ">
        <MainBanner />
        <Categories />
        <BestSeller />
        <BottomBanner />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
