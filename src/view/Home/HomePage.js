import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { AboutSection } from "./components/AboutSection";
import CollectionSection from "./components/CollectionSection";
import CreatorSection from "./components/CreatorSection";
import FeaturedSection from "./components/FeaturedSection";
import { HeroSection } from "./components/HeroSection";
import { NetworkSection } from "./components/NetworkSection";

const HomePage = () => {
  useDocumentTitle("Home || JapanNFT");

  return (
    <div>
      <HeroSection />
      <NetworkSection />
      <AboutSection />
      <CollectionSection />
      <FeaturedSection />
      <CreatorSection />
    </div>
  );
};

export default HomePage;
