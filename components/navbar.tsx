"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onRequestDemo: () => void;
}

export function Navbar({ onRequestDemo }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-navy">
              Intake<span className="text-gold">Brain</span>
            </span>
          </Link>

          <Button onClick={onRequestDemo} size="default">
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
