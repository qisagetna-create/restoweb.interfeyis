import React, { useRef, useState, useEffect } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Volume2, 
  CalendarX, 
  FileText, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="problem" className="py-24 lg:py-32 bg-[#08100C] relative border-t border-[#C3A16A]/15 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#153D2B]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C3A16A]">
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
            <span>Mövcud Çətinliklər</span>
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F3E9] leading-tight text-balance">
            Rezervasiya üçün zəng gözləməyə son.
          </h2>

          <p className="text-base sm:text-lg text-[#C9C0AF] leading-relaxed font-light">
            Ənənəvi telefon zəngləri ilə aparılan rezervasiyalar restoran heyətini gərgin anlarda yayındırır, anlaşılmazlıqlara səbəb olur və masa uçotunu mürəkkəbləşdirir.
          </p>

          {/* Mobile Swipe Guidance and Segmented Toggle */}
          <div className="flex lg:hidden items-center justify-between pt-4 pb-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToCard(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeIndex === 0
                    ? 'bg-[#153D2B] text-[#F3EBDD] border border-[#C3A16A]/40'
                    : 'bg-[#0F1612] text-[#C9C0AF] border border-[#C3A16A]/15'
                }`}
              >
                1. Köhnə üsul
              </button>
              <button
                onClick={() => scrollToCard(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeIndex === 1
                    ? 'bg-[#153D2B] text-[#F3EBDD] border border-[#C3A16A]/40'
                    : 'bg-[#0F1612] text-[#C9C0AF] border border-[#C3A16A]/15'
                }`}
              >
                2. restoweb.az
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#C3A16A]">
              <span className="text-[11px] text-[#C9C0AF]">Sürüşdürün</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Carousel / Slider Container: Horizontal on mobile with partial peek, side-by-side grid on desktop */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-12 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 phone-scroll items-stretch"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Card 1: Traditional Way (Tünd çərçivə) */}
          <div className="shrink-0 w-[84vw] sm:w-[440px] lg:w-auto snap-start p-7 sm:p-10 rounded-2xl bg-[#0F1612] border border-red-950/40 relative flex flex-col justify-between transition-all shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C3A16A]/10 pb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-red-400/90 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  KÖHNƏ ÜSUL
                </span>
                <span className="text-xs text-[#C9C0AF]/60">Yalnız telefon zəngi</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F3E9] leading-snug">
                Telefonla rezervasiyanın yaratdığı maneələr
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F3EBDD]">Səs-küy və anlaşılmazlıq</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      Zalın gurultulu saatlarında müştərinin adının, saatının və ya masa istəyinin səhv qeyd edilməsi riski.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <CalendarX className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F3EBDD]">İş saatından kənar itirilən müştərilər</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      Restoran bağlı olanda və ya administrator xətti məşğul olanda zəng vuran qonaq başqa məkana yönəlir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F3EBDD]">Qeyd dəftəri və xaotik masa planı</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      Kağız dəftərdə xətlənmiş rezervasiyalar, üst-üstə düşən saatlar və gəlişi ləğv olunmuş qonaqların izlənilə bilməməsi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C3A16A]/10 text-xs text-[#C9C0AF]/70 italic">
              Nəticə: İşçilərin vaxt itkisi və narazı qalan qonaqlar.
            </div>
          </div>

          {/* Card 2: restoweb.az Way (Yaşıl çərçivə) */}
          <div className="shrink-0 w-[84vw] sm:w-[440px] lg:w-auto snap-start p-7 sm:p-10 rounded-2xl bg-gradient-to-br from-[#153D2B]/95 via-[#112F21]/85 to-[#0B1711] border border-[#C3A16A]/40 shadow-[0_10px_40px_-15px_rgba(195,161,106,0.2)] relative flex flex-col justify-between transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C3A16A]/20 pb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#C3A16A] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C3A16A]" />
                  RESTOWEB.AZ YANAŞMASI
                </span>
                <span className="text-xs text-[#D4B67F] font-serif">Rəqəmsal dəqiqlik</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F3E9] leading-snug">
                Saniyələr içində tənzimlənən mükəmməl sistem
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-[#244B36] border border-[#C3A16A]/40 flex items-center justify-center text-[#C3A16A] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F8F3E9]">24/7 Fasiləsiz onlayn qəbul</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      Restoranınız gecə bağlı olsa belə, qonaqlar sabahkı şam yeməyi üçün masalarını sərbəst rezervasiya edirlər.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-[#244B36] border border-[#C3A16A]/40 flex items-center justify-center text-[#C3A16A] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F8F3E9]">Qonağın birbaşa masa seçimi</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      İnteraktiv zal planında pəncərə kənarı, mərkəz və ya VIP kabinet masası dərhal görünür və seçilir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-md bg-[#244B36] border border-[#C3A16A]/40 flex items-center justify-center text-[#C3A16A] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F8F3E9]">Avtomatlaşdırılmış təsdiq və bildirişlər</h4>
                    <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                      Qonağa dərhal SMS bildiriş çatdırılır, restoran inzibatçısı isə vahid idarəetmə panelindən bütün masaları izləyir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C3A16A]/20 text-xs text-[#D4B67F] font-medium flex items-center justify-between">
              <span>Nəticə: Sıfır itirilmiş zəng və rahat xidmət heyəti.</span>
              <span className="font-serif italic text-[#C3A16A]">restoweb.az</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dots / Controls below */}
        <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
          <button
            onClick={() => scrollToCard(0)}
            className={`transition-all rounded-full cursor-pointer ${
              activeIndex === 0 ? 'w-6 h-2 bg-[#C3A16A]' : 'w-2 h-2 bg-[#C3A16A]/30'
            }`}
            aria-label="Köhnə üsul"
          />
          <button
            onClick={() => scrollToCard(1)}
            className={`transition-all rounded-full cursor-pointer ${
              activeIndex === 1 ? 'w-6 h-2 bg-[#C3A16A]' : 'w-2 h-2 bg-[#C3A16A]/30'
            }`}
            aria-label="restoweb.az yanaşması"
          />
        </div>

      </div>
    </section>
  );
};
