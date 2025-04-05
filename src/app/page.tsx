"use client";
import Hero from "@/app/components/Hero";
import Header from "./components/ui/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

import Contact from "./components/Contacts";

// import { AvatarCanvas } from "./components/ui/AvatarCanvas";

export default function Home() {
  return (
    <>
      <Header></Header>
      {/* <Chat></Chat> */}

      <div className="min-h-screen flex flex-col items-center justify-start px-4 w-full">
        <div className="w-full max-w-xl">
          <Hero></Hero>
          <About></About>
          <TechStack></TechStack>
          <Experience></Experience>
          {/* <Projects></Projects> */}
          {/* <Archive></Archive> */}
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
