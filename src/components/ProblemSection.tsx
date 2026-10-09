import React from 'react';
import { PhoneOff, AlertCircle, CheckCircle2, Volume2, CalendarX, FileText } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-[#08100C] relative border-t border-[#C3A16A]/15">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#153D2B]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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
        </div>

        {/* Editorial Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Traditional Way (Problem) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F1612] border border-red-950/40 relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C3A16A]/10 pb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-red-400/80 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  Köhnə üsul
                </span>
                <span className="text-xs text-[#C9C0AF]/60">Yalnız telefon zəngi</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#F8F3E9]">
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

          {/* restoweb.az Way (Modern Solution) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#153D2B]/90 via-[#112F21]/80 to-[#0B1711] border border-[#C3A16A]/35 shadow-[0_10px_40px_-15px_rgba(195,161,106,0.15)] relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C3A16A]/20 pb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#C3A16A] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C3A16A]" />
                  restoweb.az yanaşması
                </span>
                <span className="text-xs text-[#D4B67F] font-serif">Rəqəmsal dəqiqlik</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#F8F3E9]">
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
              <span>Nəticə: Sıfır itirilmiş zəng və rahatlaşan xidmət heyəti.</span>
              <span className="font-serif italic text-[#C3A16A]">restoweb.az</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
