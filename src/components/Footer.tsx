import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08100C] border-t border-[#C3A16A]/15 py-14 text-xs text-[#C9C0AF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#C3A16A]/10">
          
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-[#F8F3E9] tracking-tight">
                restoweb<span className="text-[#C3A16A]">.az</span>
              </span>
            </a>
            <p className="text-xs text-[#C9C0AF]/80 max-w-sm">
              Azərbaycanın aparıcı restoranları üçün rəqəmsal masa idarəetməsi və onlayn rezervasiya sistemi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#C9C0AF]">
            <a href="#hero" className="hover:text-[#F3EBDD] transition-colors">
              Ana səhifə
            </a>
            <a href="#problem" className="hover:text-[#F3EBDD] transition-colors">
              Niyə biz?
            </a>
            <a href="#nece-isleyir" className="hover:text-[#F3EBDD] transition-colors">
              Necə işləyir?
            </a>
            <a href="#imkanlar" className="hover:text-[#F3EBDD] transition-colors">
              İmkanlar
            </a>
            <a href="#elaqe" className="hover:text-[#F3EBDD] transition-colors">
              Əlaqə
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#153D2B]/50 border border-[#C3A16A]/30 text-[#C3A16A] hover:bg-[#153D2B] transition-colors cursor-pointer self-end md:self-auto"
            aria-label="Yuxarı qayıt"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#C9C0AF]/60">
          <div>
            © 2026 restoweb.az. Bütün hüquqlar qorunur. Bakı, Azərbaycan.
          </div>
          <div className="flex items-center gap-4">
            <span>Məxfilik Siyasəti</span>
            <span>·</span>
            <span>İstifadə Şərtləri</span>
            <span>·</span>
            <span>Qonaqpərvərlik Həlləri</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
