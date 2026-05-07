import Banner from "@/components/Banner";
import TilesMarquee from "@/components/TilesMarquee";
import TopTiles from "@/components/TopTiles";
import WhyUs from "@/components/WhyUs";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <TilesMarquee />
      <main className="max-w-11/12 mx-auto">
        <TopTiles />
        <WhyUs />
      </main>
    </section>
  );
};

export default HomePage;
