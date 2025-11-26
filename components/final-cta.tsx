"use client";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { calButtonProps } from "@/components/cal-embed";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Upload a sample intake or book a 3-minute demo.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 group text-base"
              {...calButtonProps}
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base"
              {...calButtonProps}
            >
              See Sample Summary
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
