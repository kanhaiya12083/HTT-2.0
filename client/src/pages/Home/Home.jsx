import React from "react";
import HeroSection from "./HeroSection";
import CounterSection from "./CounterSection";
import AboutSection from "./AboutSection";

import ComitteeSection from "./CommitteeSection";

import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CounterSection />
      <AboutSection />

      <ComitteeSection />

      <FAQ />
    </>
  );
};

export default Home;
