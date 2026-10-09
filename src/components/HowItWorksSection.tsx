import React from 'react';
import { Compass, CalendarDays, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Müştəri restoranı seçir.',
      description:
        'Restoranın interyeri, menyusu, ab-havası və xüsusi şərtləri ilə tanış olur, birbaşa rəsmi rezervasiya səhifəsinə keçid edir.',
      icon: Compass,
      tag: 'Kəşf və Seçim',
    },
    {
      number: '02',
      title: 'Tarixi, saatı və masa seçimini müəyyənləşdirir.',
      description:
        'Təqvimdən uyğun günü, rahat saatı və qonaq sayını qeyd edərək interaktiv zal planında arzuladığı masanı sərbəst seçir.',
      icon: CalendarDays,
      tag: 'Canlı Plan',
    },
    {
      number: '03',
      title: 'Rezervasiyasını onlayn təsdiqləyir.',
      description:
        'Əlaqə nömrəsini daxil edir və rezervasiya anında qeydə alınır. Qonağa təsdiq SMS-i, restorana isə dərhal xəbərdarlıq çatdırılır.',
      icon: CheckCircle,
      tag: 'Dərhal Təsdiq',
    },
  ];

  return (
    <section id="nece-isleyir" className="py-24 lg:py-32 bg-[#0B1711] relative border-t border-[#C3A16A]/15">
      {/* Subtle gold line & background ambiance */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#C3A16A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C3A16A]">
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
            <span>Sadə Və Rahat Proses</span>
            <span className="w-5 h-[1px] bg-[#C3A16A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F3E9] leading-tight text-balance">
            Rezervasiya prosesi artıq daha sadədir.
          </h2>

          <p className="text-base sm:text-lg text-[#C9C0AF] leading-relaxed font-light">
            Qonaqlarınız üçün cəmi 3 addımda zəhmətsiz və zövqlü masa rezervasiyası təcrübəsi.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group p-8 rounded-2xl bg-[#0F1813] border border-[#C3A16A]/20 hover:border-[#C3A16A]/60 transition-all duration-300 relative flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(195,161,106,0.12)]"
              >
                <div>
                  {/* Step Top Bar: Number & Clean Text Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl font-bold text-[#C3A16A] tracking-wider group-hover:scale-105 transition-transform">
                      {step.number}
                    </span>
                    <div className="text-xs text-[#C9C0AF]/70 font-medium tracking-wide">
                      {step.tag}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#153D2B]/70 border border-[#C3A16A]/30 flex items-center justify-center text-[#D4B67F] mb-6 group-hover:bg-[#153D2B] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F3E9] leading-snug mb-3 group-hover:text-[#F3EBDD] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#C9C0AF] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Subtle gold line accent at bottom of card */}
                <div className="mt-8 pt-4 border-t border-[#C3A16A]/10 flex items-center justify-between text-xs text-[#C9C0AF]/60">
                  <span>Addım {step.number}</span>
                  <span className="w-8 h-[1px] bg-[#C3A16A]/30 group-hover:w-14 group-hover:bg-[#C3A16A] transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
