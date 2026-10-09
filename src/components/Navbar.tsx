import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1711]/90 backdrop-blur-md border-b border-[#C3A16A]/15 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C3A16A]"
        >
          <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-[#F8F3E9] group-hover:text-[#F3EBDD] transition-colors">
            restoweb<span className="text-[#C3A16A]">.az</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C3A16A] opacity-80" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#C9C0AF]">
          <a
            href="#hero"
            className="hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0"
          >
            Ana səhifə
          </a>
          <a
            href="#problem"
            className="hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0"
          >
            Niyə biz?
          </a>
          <a
            href="#nece-isleyir"
            className="hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0"
          >
            Necə işləyir?
          </a>
          <a
            href="#imkanlar"
            className="hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0"
          >
            İmkanlar
          </a>
          <a
            href="#elaqe"
            className="hover:text-[#F3EBDD] transition-colors whitespace-nowrap shrink-0"
          >
            Əlaqə
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B1711] bg-gradient-to-r from-[#D4B67F] via-[#C3A16A] to-[#B38F56] hover:from-[#DFBE86] hover:to-[#C3A16A] rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(195,161,106,0.3)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            Demo ilə tanış ol
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#0B1711] bg-[#C3A16A] rounded-md"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F3E9] hover:text-[#C3A16A] transition-colors cursor-pointer"
            aria-label="Menyunu açın"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1711] border-b border-[#C3A16A]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#C9C0AF]">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#F3EBDD] transition-colors"
            >
              Ana səhifə
            </a>
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#F3EBDD] transition-colors"
            >
              Niyə biz?
            </a>
            <a
              href="#nece-isleyir"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#F3EBDD] transition-colors"
            >
              Necə işləyir?
            </a>
            <a
              href="#imkanlar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#F3EBDD] transition-colors"
            >
              İmkanlar
            </a>
            <a
              href="#elaqe"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#F3EBDD] transition-colors"
            >
              Əlaqə
            </a>
          </nav>
          <div className="pt-2 border-t border-[#C3A16A]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#0B1711] bg-[#C3A16A] rounded-lg text-center"
            >
              Demo ilə tanış ol
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
