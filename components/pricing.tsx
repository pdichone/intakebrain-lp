"use client";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  onRequestDemo: () => void;
}

const features = [
  "Up to 3 users",
  "Unlimited intakes",
  "Unlimited summaries",
  "Priority support",
  "Free setup",
  "Cancel anytime",
];

export function Pricing({ onRequestDemo }: PricingProps) {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-16">
            Start with our pilot plan and scale as your firm grows
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-sm sm:max-w-md mx-auto">
            <Card className="relative overflow-hidden border-2 border-navy shadow-xl">
              {/* Popular badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span className="bg-gold text-navy text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
                  PILOT PLAN
                </span>
              </div>

              <CardHeader className="pt-6 sm:pt-8 pb-3 sm:pb-4">
                <CardTitle className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-navy">$300</span>
                    <span className="text-muted-foreground text-sm sm:text-base">/month</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6 sm:pb-8 px-4 sm:px-6">
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-base sm:text-lg text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full group text-base"
                  onClick={onRequestDemo}
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
