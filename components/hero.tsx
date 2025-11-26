"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onRequestDemo: () => void;
  onSeeSample: () => void;
}

export function Hero({ onRequestDemo, onSeeSample }: HeroProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-light to-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Turn Messy Intake Notes Into Clean, Attorney-Ready Case Summaries —{" "}
            <span className="text-gold">Instantly</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Upload any intake—PDFs, emails, handwritten notes, or call
            transcripts—and IntakeBrain transforms them into structured case
            briefs your team can review in seconds.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" onClick={onRequestDemo} className="group text-base">
              Request a 3-Minute Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={onSeeSample} className="text-base">
              See Sample Case Summary
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">
            No contracts. No setup fees. Works with any PI workflow.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
