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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            How It Works
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-navy/20 via-gold/40 to-navy/20" />

          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-12 h-12 text-gold" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-xs">
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
