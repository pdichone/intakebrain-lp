"use client";

import { FadeIn } from "@/components/fade-in";
import { Upload, Brain, FileDown } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Upload,
    title: "Upload Intake",
    description: "PDF, notes, emails, voicemail transcript—anything.",
  },
  {
    number: "2",
    icon: Brain,
    title: "AI Processes the Case",
    description:
      "Key facts, injuries, damages, missing info, red flags, liability indicators.",
  },
  {
    number: "3",
    icon: FileDown,
    title: "Review & Export",
    description:
      "Download a polished PDF case brief or integrate into your workflow.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-10 sm:mb-16">
            How It Works
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-navy/20 via-gold/40 to-navy/20" />

          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-navy flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-base sm:text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
