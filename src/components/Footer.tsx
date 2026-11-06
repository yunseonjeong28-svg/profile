import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#343137]/10 bg-[#F8F5EF] text-[#343137]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Slogan */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-serif-display font-bold text-base tracking-tight">
            YS. CREATIVE
          </span>
          <span className="hidden sm:inline text-[#343137]/30">·</span>
          <span className="font-serif-display italic text-xs text-[#343137]/65">
            &ldquo;Create with curiosity. Tell stories with heart.&rdquo;
          </span>
        </div>

        {/* Center/Right: Copyright */}
        <div className="text-xs text-[#343137]/60 text-center">
          © 2026 YS. CREATIVE. All Rights Reserved.
        </div>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#343137]/15 bg-white text-xs text-[#343137]/75 hover:text-[#343137] hover:border-[#343137]/30 transition-colors shadow-2xs cursor-pointer"
          aria-label="맨 위로 이동"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
