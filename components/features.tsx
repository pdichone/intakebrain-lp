"use client";

import { FadeIn } from "@/components/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, FileText, Search } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatic Intake Cleanup",
    description:
      "Turns long, unorganized intake notes into clean summaries: key facts, injuries, red flags, missing info, claim value estimate.",
  },
  {
    icon: FileText,
    title: "Attorney-Ready Case Briefs",
    description:
      "Generate structured case summaries your attorneys can review or export as PDFs—ready for follow-up or rejection.",
  },
  {
    icon: Search,
    title: "Finds Missing Information",
    description:
      "Flags unclear details, inconsistent statements, missing police reports, insurance unknowns, and treatment gaps.",
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
            Built for Personal Injury Intake Teams
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-light">
                <CardContent className="p-5 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-navy flex items-center justify-center mb-4 sm:mb-6">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
