"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { calButtonProps } from "@/components/cal-embed";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-navy">
              Intake<span className="text-gold">Brain</span>
            </span>
          </Link>

          <Button size="sm" className="sm:h-10 sm:px-4 sm:text-sm" {...calButtonProps}>
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
