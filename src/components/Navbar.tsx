import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/90 backdrop-blur-md shadow-xs border-b border-[#343137]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#343137] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          aria-label="YS. CREATIVE Homepage"
        >
          YS. CREATIVE
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#343137]/80">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#343137] transition-colors relative py-1 text-sm whitespace-nowrap shrink-0 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8B792] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                handleNavClick('#contact');
              }
            }}
            className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#343137] bg-[#D8CBE8]/60 hover:bg-[#D8CBE8] border border-[#343137]/15 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#343137] hover:bg-[#343137]/5 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#C8B792]"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#F8F5EF] border-b border-[#343137]/10 shadow-lg px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#343137]">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-md hover:bg-[#D8CBE8]/30 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#343137]/50 font-normal">이동</span>
              </button>
            ))}
            <div className="pt-2 border-t border-[#343137]/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                  else handleNavClick('#contact');
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#343137] bg-[#D8CBE8] rounded-full border border-[#343137]/15 shadow-xs"
              >
                Get in Touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
