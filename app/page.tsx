"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { DemoVideo } from "@/components/demo-video";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { Founder } from "@/components/founder";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { CalEmbed } from "@/components/cal-embed";
import { SampleViewer } from "@/components/sample-viewer";

export default function Home() {
  const [sampleOpen, setSampleOpen] = useState(false);

  const handleViewSample = () => {
    setSampleOpen(true);
  };

  return (
    <main className="min-h-screen">
      <CalEmbed />
      <Navbar />
      <Hero onViewSample={handleViewSample} />
      <Features />
      <DemoVideo />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Founder />
      <FinalCTA onViewSample={handleViewSample} />
      <Footer />
      <SampleViewer open={sampleOpen} onOpenChange={setSampleOpen} />
    </main>
  );
}
