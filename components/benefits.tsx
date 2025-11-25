"use client";

import { FadeIn } from "@/components/fade-in";
import { TrendingUp, Clock, AlertTriangle, CheckSquare } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Intake Efficiency",
    description: "Process more leads without hiring more staff.",
  },
  {
    icon: Clock,
    title: "Reduce Review Time",
    description:
      "Attorneys get clean summaries fast—no digging through messy notes.",
  },
  {
    icon: AlertTriangle,
    title: "Catch Issues Early",
    description:
      "Spot weak cases, liability problems, and missing documents before spending billable time.",
  },
  {
    icon: CheckSquare,
    title: "Consistent Output",
    description:
      "Every intake is structured the same way, regardless of who collected it.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            Why Law Firms Choose IntakeBrain
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
