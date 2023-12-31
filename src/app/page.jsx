import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}
