"use client";

import { FadeIn } from "@/components/fade-in";
import { Mail } from "lucide-react";

export function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center mb-8">
            About IntakeBrain
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-muted-foreground leading-relaxed text-xl mb-6">
              IntakeBrain was built after working directly with PI law firms
              frustrated with messy, inconsistent intakes that slow down case
              evaluation and cause missed opportunities. Our goal is simple:
              help firms process more leads, save attorney review time, and make
              intake teams faster and more accurate.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center">
                <span className="text-gold font-bold text-xl">PD</span>
              </div>
              <div>
                <p className="font-semibold text-navy">Paulo Dichone</p>
                <p className="text-sm text-muted-foreground">
                  Founder, IntakeBrain
                </p>
                <a
                  href="mailto:paulo@intakebrain.com"
                  className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold/80 transition-colors mt-1"
                >
                  <Mail className="w-3 h-3" />
                  paulo@intakebrain.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
