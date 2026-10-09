import React from 'react';
import { 
  Globe2, 
  LayoutDashboard, 
  Database, 
  Smile, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Onlayn rezervasiya qəbulu.',
      description:
        'Qonaqlarınız günün istənilən saatında, hətta restoran bağlı olduqda belə növbəti günlər üçün masalarını onlayn bron edə bilirlər.',
      icon: Globe2,
    },
    {
      title: 'Masaların daha rahat idarə edilməsi.',
      description:
        'Real vaxt rejimində hansı masanın boş, hansının məşğul və hansının yaxınlaşacaq qonaq üçün ayrıldığını interaktiv xəritədə aydın görün.',
      icon: LayoutDashboard,
    },
    {
      title: 'Rezervasiya məlumatlarının vahid sistemdə toplanması.',
      description:
        'Bütün qonaq adları, əlaqə nömrələri, xüsusi qeydlər və rezervasiya saatları vahid bazada saxlanılır, çaşqınlıq tam aradan qalxır.',
      icon: Database,
    },
    {
      title: 'Müştərilər üçün rahat və aydın istifadə təcrübəsi.',
      description:
        'Telefon zəngində xətdə gözləmədən, bir neçə toxunuşla istədiyi guşəni və masanı seçən qonaqlar restoranınıza daha yüksək rəğbət bəsləyir.',
      icon: Smile,
    },
  ];

  return (
    <section id="imkanlar" className="py-24 lg:py-32 bg-[#08100C] relative border-t border-[#C3A16A]/15 overflow-hidden">
      {/* Soft warm light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#153D2B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C3A16A]">
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
            <span>Məkanınız Üçün Dəyər</span>
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F3E9] leading-tight text-balance">
            Restoranınız üçün daha ağıllı idarəetmə.
          </h2>

          <p className="text-base sm:text-lg text-[#C9C0AF] leading-relaxed font-light">
            Müasir texnologiyanın rahatlığı ilə lüks restoran qonaqpərvərliyini bir araya gətirin.
          </p>
        </div>

        {/* Benefits Grid + Heritage Restaurant Ambiance Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 4 Core Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-[#0F1813] border border-[#C3A16A]/20 hover:border-[#C3A16A]/50 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-[#153D2B]/80 border border-[#C3A16A]/30 flex items-center justify-center text-[#C3A16A] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#F8F3E9] leading-snug group-hover:text-[#F3EBDD] transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#C9C0AF] leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#C3A16A]/10 flex items-center gap-1.5 text-[11px] text-[#C3A16A] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Dəqiqlik və Rahatlıq</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Atmospheric Restaurant Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#C3A16A]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="h-[460px] relative">
                <img
                  src="/src/assets/images/restaurant_wine_cellar_1791576437606.jpg"
                  alt="Restoran Zalı və Qonaqlar"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1711] via-[#0B1711]/40 to-transparent" />
                
                {/* Overlay Quote Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B1711]/90 backdrop-blur-md border border-[#C3A16A]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C3A16A]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Qüsursuz Qonaqpərvərlik</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg text-[#F8F3E9] italic leading-snug">
                    «Rezervasiya təcrübəsi qonağın restoranınızla ilk təmasıdır. Bu təması unudulmaz və zövqlü edin.»
                  </p>
                  <div className="pt-2 border-t border-[#C3A16A]/20 flex items-center justify-between text-xs text-[#C9C0AF]">
                    <span>Bakı, Azərbaycan</span>
                    <span className="font-semibold text-[#D4B67F]">restoweb.az</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backlight glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#153D2B]/30 to-[#C3A16A]/10 rounded-3xl blur-xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
};
