"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

const allScreenshots = [
  {
    src: "/images/dashboard.png",
    title: "Intake Dashboard",
    description: "View and manage all your case intakes in one place",
  },
  {
    src: "/images/case-summary.png",
    title: "Case Summary",
    description: "Attorney action items and client information at a glance",
  },
  {
    src: "/images/claim-viability.png",
    title: "AI Case Analysis",
    description: "Estimated claim value and viability assessment",
  },
  {
    src: "/images/accident-details.png",
    title: "Key Facts & Missing Info",
    description: "Extracted facts and flagged information gaps",
  },
];

export function Screenshots() {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = allScreenshots[featuredIndex];
  const thumbnails = allScreenshots
    .map((screenshot, index) => ({ ...screenshot, originalIndex: index }))
    .filter((_, index) => index !== featuredIndex);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
            See It in Action
          </h2>
          <p className="text-center text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Clean, professional interface designed for legal teams
          </p>
        </FadeIn>

        {/* Featured Screenshot */}
        <FadeIn delay={0.1}>
          <div className="mb-6 sm:mb-8">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl sm:shadow-2xl border border-gray-200 p-2 sm:p-3 transition-all duration-300">
              <Image
                src={featured.src}
                alt={featured.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg sm:rounded-xl"
                priority
              />
            </div>
            <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg font-semibold text-navy">
              {featured.title}
            </p>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              {featured.description}
            </p>
          </div>
        </FadeIn>

        {/* Thumbnail Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {thumbnails.map((item, index) => (
            <FadeIn key={item.src} delay={0.2 + index * 0.1}>
              <button
                onClick={() => setFeaturedIndex(item.originalIndex)}
                className="group w-full text-left focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-xl"
              >
                <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold p-2 cursor-pointer transform hover:scale-105">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="mt-3 text-sm sm:text-base font-semibold text-navy text-center group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Click to enlarge
                </p>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
