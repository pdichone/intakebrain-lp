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
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleRequestDemo = () => {
    setContactOpen(true);
  };

  const handleSeeSample = () => {
    // For now, open the contact form
    // Later, this could link to a hosted PDF
    setContactOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar onRequestDemo={handleRequestDemo} />
      <Hero onRequestDemo={handleRequestDemo} onSeeSample={handleSeeSample} />
      <Features />
      <DemoVideo />
      <HowItWorks />
      <Benefits />
      <Pricing onRequestDemo={handleRequestDemo} />
      <Founder />
      <FinalCTA onRequestDemo={handleRequestDemo} onSeeSample={handleSeeSample} />
      <Footer />
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </main>
  );
}
