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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Start with our pilot plan and scale as your firm grows
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden border-2 border-navy shadow-xl">
              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  PILOT PLAN
                </span>
              </div>

              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-navy">$300</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-lg text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full group"
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
