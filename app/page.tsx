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

export default function Home() {
  return (
    <main className="min-h-screen">
      <CalEmbed />
      <Navbar />
      <Hero />
      <Features />
      <DemoVideo />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Founder />
      <FinalCTA />
      <Footer />
    </main>
  );
}
