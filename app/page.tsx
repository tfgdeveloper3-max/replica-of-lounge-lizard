"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/Aboutsection";
import StickyProposal from "@/components/Stickyproposal";
import FeaturedWork from "@/components/sections/Featuredwork";
import ClientsSection from "@/components/sections/Clientssection";
import Marketingsection from "@/components/sections/Marketingsection";

export default function Home() {
  const [isDay, setIsDay] = useState(true);

  return (
    <main>
      <Navbar isDay={isDay} />

      <HeroSection isDay={isDay} onDayChange={setIsDay} />

      <AboutSection />

      <FeaturedWork />

      <ClientsSection />

      <Marketingsection />

      <StickyProposal />
    </main>
  );
}