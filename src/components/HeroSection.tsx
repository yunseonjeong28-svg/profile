import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background artwork with slow ambient floating/panning animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/src/assets/images/hero_creative_artwork_1793930310378.jpg"
          alt="Creative Studio Abstract Artwork"
          className="w-full h-full object-cover object-center animate-gentle-pan opacity-60"
          referrerPolicy="no-referrer"
        />
        {/* Soft, measured scrim gradient ensuring pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EF]/75 via-[#F8F5EF]/85 to-[#F8F5EF]" />
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-[#F8F5EF]/40 to-[#F8F5EF]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Editorial Sub-Brand & Sub Slogan */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 text-xs font-medium tracking-widest uppercase text-[#343137]/75">
          <Sparkles className="w-3.5 h-3.5 text-[#C8B792]" />
          <span>MY CREATIVE JOURNEY</span>
          <span className="text-[#343137]/40">·</span>
          <span className="font-serif-display italic lowercase tracking-normal">Yunseon's Studio</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sans-kr text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#343137] leading-[1.25] sm:leading-[1.2] mb-6 max-w-3xl text-balance">
          상상을 작품으로,
          <br />
          일상을 이야기로.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-[#343137]/80 font-normal tracking-wide mb-3 max-w-2xl">
          AI와 함께 만드는 나만의 창작 세계
        </p>

        {/* English Sub Slogan */}
        <p className="font-serif-display italic text-base sm:text-lg text-[#343137]/65 mb-10 tracking-wide">
          &ldquo;Create with curiosity. Tell stories with heart.&rdquo;
        </p>

        {/* Explore My Work Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#343137] text-[#F8F5EF] text-sm font-medium tracking-wide shadow-md hover:bg-[#343137]/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <a
            href="#about"
            className="inline-flex items-center px-6 py-3.5 rounded-full border border-[#343137]/20 text-xs font-semibold uppercase tracking-wider text-[#343137]/85 hover:bg-[#F8F5EF]/80 hover:border-[#343137]/40 transition-colors"
          >
            About Creator
          </a>
        </div>

        {/* Subtle scroll indicator cue */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-[#343137]/50">
          <span>Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-[#343137]/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#C8B792] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
