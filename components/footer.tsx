import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg sm:text-xl font-bold text-white">
              Intake<span className="text-gold">Brain</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm text-white/60">
            <a
              href="mailto:paulo@intakebrain.com"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              paulo@intakebrain.com
            </a>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/40">
            © {currentYear} IntakeBrain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
