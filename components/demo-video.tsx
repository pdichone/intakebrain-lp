"use client";

import { FadeIn } from "@/components/fade-in";

export function DemoVideo() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center mb-4">
            See It in Action
          </h2>
          <p className="text-center text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
            Watch how IntakeBrain transforms messy intake notes into clean case summaries
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl sm:shadow-2xl border border-gray-200 p-2 sm:p-3">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.canva.com/design/DAG5xiSFBDI/It3k_oSsU4D3rwYRle-o_g/watch?embed"
                className="absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl"
                allowFullScreen
                allow="fullscreen"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            45-second demo — no sound required
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
