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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center mb-4">
            Built for Personal Injury Intake Teams
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-light">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
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
