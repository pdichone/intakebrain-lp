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
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-10 sm:mb-16">
            Why Law Firms Choose IntakeBrain
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.1}>
              <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
