import React from 'react';
import { 
  Clock, 
  LayoutGrid, 
  PhoneOff, 
  ArrowRight, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { IPhoneReservationApp } from './IPhoneReservationApp';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onExploreSystem: () => void;
  onHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDemo,
  onExploreSystem,
  onHowItWorks,
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center"
    >
      {/* Background Restaurant Image Atmosphere (faint, darkened, masked) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_restaurant_ambiance_1791576413582.jpg"
          alt="Lüks Restoran İnteryeri"
          className="w-full h-full object-cover object-center opacity-18 filter brightness-75 contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep Forest Green Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1711] via-[#0B1711]/90 to-[#0B1711]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1711] via-transparent to-[#0B1711]" />
        
        {/* Soft Warm Radial Lighting behind Mockup */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#153D2B]/70 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/6 -translate-y-1/2 w-[350px] h-[350px] bg-[#C3A16A]/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE — MARKETING CONTENT */}
          <div className="lg:col-span-7 space-y-7">
            {/* Brand Eyebrow & Label */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#C3A16A]">
                <span className="w-6 h-[1px] bg-[#C3A16A]" />
                <span>RESTORANLAR ÜÇÜN AĞILLI REZERVASİYA</span>
              </div>
              <div className="text-sm font-serif italic text-[#C9C0AF]/80">
                restoweb.az ilə qonaqlarınızı ən yüksək səviyyədə qarşılayın
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#F8F3E9] leading-[1.12] tracking-tight text-balance">
              Telefon zəngləri ilə{' '}
              <span className="text-[#C3A16A] italic font-normal underline decoration-[#C3A16A]/30 underline-offset-8">
                rezervasiya dövrü
              </span>{' '}
              geridə qalır.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#C9C0AF] leading-relaxed max-w-2xl font-light">
              Restoranınız üçün daha rahat, sürətli və məlumatlı rezervasiya təcrübəsi. Müştəriləriniz masalarını onlayn seçsin, rezervasiyalarınızı isə vahid sistemdən idarə edin.
            </p>

            {/* Secondary Statement */}
            <div className="p-4 rounded-xl bg-[#153D2B]/35 border border-[#C3A16A]/20 backdrop-blur-xs max-w-xl">
              <p className="text-sm sm:text-base font-medium text-[#F3EBDD] tracking-wide">
                Daha az telefon zəngi. Daha rahat idarəetmə. Daha yaxşı müştəri təcrübəsi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreSystem}
                className="px-7 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#0B1711] bg-gradient-to-r from-[#D4B67F] via-[#C3A16A] to-[#B38F56] hover:from-[#DFBE86] hover:to-[#C3A16A] shadow-[0_8px_30px_rgba(195,161,106,0.35)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Rezervasiya sistemini kəşf et</span>
                <ArrowRight className="w-4 h-4 text-[#0B1711] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onHowItWorks}
                className="px-7 py-4 rounded-xl text-sm font-semibold tracking-wider text-[#F8F3E9] bg-transparent border border-[#C3A16A]/50 hover:border-[#C3A16A] hover:bg-[#153D2B]/40 hover:text-[#F3EBDD] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <HelpCircle className="w-4 h-4 text-[#C3A16A]" />
                <span>Necə işləyir?</span>
              </button>
            </div>

            {/* Three Compact Benefits with refined icons */}
            <div className="pt-4 border-t border-[#C3A16A]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#153D2B]/80 border border-[#C3A16A]/30 flex items-center justify-center text-[#C3A16A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F8F3E9] leading-snug">
                  24/7 onlayn rezervasiya
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#153D2B]/80 border border-[#C3A16A]/30 flex items-center justify-center text-[#C3A16A] shrink-0">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F8F3E9] leading-snug">
                  Real vaxtda masa idarəetməsi
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#153D2B]/80 border border-[#C3A16A]/30 flex items-center justify-center text-[#C3A16A] shrink-0">
                  <PhoneOff className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#F8F3E9] leading-snug">
                  Telefon zənglərinə daha az ehtiyac
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — PREMIUM APPLE IPHONE MOCKUP */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Interactive hint label */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-9 right-6 px-3 py-1 bg-[#153D2B]/80 border border-[#C3A16A]/40 rounded-full text-[11px] font-medium text-[#F3EBDD] backdrop-blur-md shadow-sm z-20">
              <Sparkles className="w-3.5 h-3.5 text-[#C3A16A]" />
              <span>İnteraktiv test rejimindədir · Seçimləri yoxlayın</span>
            </div>

            {/* Apple iPhone Titanium Hardware Enclosure */}
            <div 
              className="relative w-full max-w-[340px] sm:max-w-[365px] transition-transform duration-500 hover:scale-[1.01]"
              style={{
                perspective: '1200px',
              }}
            >
              {/* Outer Hardware Chassis (Titanium rim with bevels and antenna lines) */}
              <div 
                className="relative rounded-[54px] p-[10px] bg-gradient-to-b from-[#2E3531] via-[#1B221E] to-[#121614] border border-[#525E57]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(195,161,106,0.15)] ring-1 ring-white/10"
                style={{
                  transform: 'rotateY(-3deg) rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Side hardware buttons (subtle) */}
                <div className="absolute -left-[13px] top-[105px] w-[3px] h-[26px] bg-[#3B423E] rounded-l-sm" /> {/* Action Button */}
                <div className="absolute -left-[13px] top-[145px] w-[3px] h-[48px] bg-[#3B423E] rounded-l-sm" /> {/* Vol Up */}
                <div className="absolute -left-[13px] top-[205px] w-[3px] h-[48px] bg-[#3B423E] rounded-l-sm" /> {/* Vol Down */}
                <div className="absolute -right-[13px] top-[155px] w-[3px] h-[75px] bg-[#3B423E] rounded-r-sm" /> {/* Power Button */}

                {/* Inner Black Bezel */}
                <div className="relative rounded-[45px] overflow-hidden bg-black p-[2px] shadow-inner">
                  
                  {/* Phone Screen Container */}
                  <div className="relative w-full h-[690px] sm:h-[720px] rounded-[43px] overflow-hidden bg-[#0B1711]">
                    
                    {/* The Live Mobile Reservation App */}
                    <IPhoneReservationApp />

                    {/* Subtle glass reflection sheen overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
                  </div>
                </div>
              </div>

              {/* Floor Shadow beneath phone */}
              <div className="w-[85%] h-8 bg-black/80 blur-xl mx-auto -mt-4 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
