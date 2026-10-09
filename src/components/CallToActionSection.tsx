import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

interface CallToActionSectionProps {
  onOpenContactModal: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onOpenContactModal }) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [tableCount, setTableCount] = useState('15-30 masa');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="elaqe" className="py-24 lg:py-32 bg-[#0B1711] relative border-t border-[#C3A16A]/15 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#153D2B]/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#C3A16A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Deep Forest Green Box Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#153D2B] via-[#0E271B] to-[#0B1711] border border-[#C3A16A]/35 p-8 sm:p-14 lg:p-16 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Subtle Decorative Golden Border Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#C3A16A] to-transparent" />

          <div className="text-center max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C3A16A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>İLK ADDIMI ATIN</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F3E9] leading-tight text-balance">
              Restoranınızın rezervasiya təcrübəsini yeniləyin.
            </h2>

            <p className="text-base sm:text-lg text-[#C9C0AF] leading-relaxed font-light">
              Restoranınız üçün müasir, rahat və peşəkar rezervasiya sistemini kəşf edin.
            </p>

            {/* Direct Action Trigger */}
            <div className="pt-3">
              <button
                onClick={onOpenContactModal}
                className="px-9 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-[#0B1711] bg-gradient-to-r from-[#D4B67F] via-[#C3A16A] to-[#B38F56] hover:from-[#DFBE86] hover:to-[#C3A16A] shadow-[0_10px_35px_rgba(195,161,106,0.35)] transition-all duration-300 cursor-pointer active:scale-[0.98] inline-flex items-center gap-2.5"
              >
                <span>Bizimlə əlaqə saxlayın</span>
                <Send className="w-4 h-4 text-[#0B1711]" />
              </button>
            </div>
          </div>

          {/* Quick Direct Request Card */}
          <div className="mt-12 pt-10 border-t border-[#C3A16A]/20">
            {isSent ? (
              <div className="p-8 rounded-2xl bg-[#0B1711]/90 border border-[#C3A16A]/50 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#C3A16A]/20 border border-[#C3A16A] flex items-center justify-center text-[#C3A16A]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F8F3E9]">
                  Müraciətiniz qəbul olundu
                </h3>
                <p className="text-sm text-[#C9C0AF] max-w-md mx-auto">
                  Təşəkkür edirik! Qısa müddətdə mütəxəssisimiz sizinlə əlaqə saxlayaraq sistemin canlı təqdimatını təşkil edəcək.
                </p>
                <div className="pt-2 text-xs text-[#C3A16A]">
                  Dərhal əlaqə: +994 (12) 505 00 20
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl font-semibold text-[#F3EBDD]">
                    Sürətli Təqdimat İstəyi
                  </h3>
                  <p className="text-xs text-[#C9C0AF] mt-1">
                    Restoranınız üçün fərdi həll və canlı nümayiş əldə edin
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1.5">
                      Restoranın Adı
                    </label>
                    <input
                      type="text"
                      required
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      placeholder="Məs: Mangal Steak House"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C]/90 border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1.5">
                      Əlaqədar Şəxs
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Adınız və Soyadınız"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C]/90 border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1.5">
                      Əlaqə Nömrəsi
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+994 (50) 000-00-00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C]/90 border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1.5">
                      Masa Həcmi
                    </label>
                    <select
                      value={tableCount}
                      onChange={(e) => setTableCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C]/90 border border-[#C3A16A]/30 text-xs text-[#F8F3E9] focus:border-[#C3A16A] focus:outline-none"
                    >
                      <option value="10-a qədər masa">10-a qədər masa</option>
                      <option value="15-30 masa">15-30 masa</option>
                      <option value="30-60 masa">30-60 masa</option>
                      <option value="60+ masa">60+ böyük kompleks</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#0B1711] bg-[#C3A16A] hover:bg-[#D4B67F] transition-colors cursor-pointer flex items-center gap-2 active:scale-[0.98]"
                  >
                    <span>Müraciət Göndər</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Direct Contact Markers */}
            <div className="mt-8 pt-6 border-t border-[#C3A16A]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left text-xs text-[#C9C0AF]">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C3A16A] shrink-0" />
                <span>+994 (12) 505 00 20</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C3A16A] shrink-0" />
                <span>salam@restoweb.az</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C3A16A] shrink-0" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
