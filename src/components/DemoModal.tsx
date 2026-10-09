import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building2, Phone, Mail, User, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRestaurantName('');
    setContactName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0E1B15] border border-[#C3A16A]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle gold backlight */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#C3A16A]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#C9C0AF] hover:text-[#F8F3E9] transition-colors cursor-pointer rounded-full hover:bg-white/5"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#153D2B] border border-[#C3A16A] flex items-center justify-center text-[#C3A16A]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#F8F3E9]">
              Demo Müraciətiniz Qəbul Edildi!
            </h3>
            <p className="text-sm text-[#C9C0AF] leading-relaxed max-w-sm mx-auto">
              Hörmətli <span className="text-[#F8F3E9] font-medium">{contactName}</span>, <span className="text-[#F8F3E9]">{restaurantName}</span> üçün fərdi təqdimat hazırlayırıq. 24 saat ərzində sizinlə əlaqə saxlayacağıq.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#C3A16A] text-[#0B1711] text-xs font-bold uppercase tracking-wider hover:bg-[#D4B67F] transition-colors cursor-pointer"
              >
                Tamam
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#C3A16A] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>restoweb.az Demo Nümayişi</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F8F3E9]">
                Restoranınız üçün Canlı Təqdimat
              </h3>
              <p className="text-xs text-[#C9C0AF] mt-1 leading-relaxed">
                Məlumatlarınızı daxil edin, mütəxəssisimiz sistemin restoranınızın masalarına necə inteqrasiya olunduğunu nümayiş etdirsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1">
                  Restoranın Adı
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#C3A16A]/70 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    placeholder="Məs: Şirvanşah Sarayı və ya Matbəx"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/40 focus:border-[#C3A16A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1">
                  Əlaqədar Şəxs
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#C3A16A]/70 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Adınız və Vəzifəniz"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/40 focus:border-[#C3A16A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1">
                    Telefon Nömrəsi
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C3A16A]/70 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+994 (50) 000-00-00"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/40 focus:border-[#C3A16A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#C3A16A] uppercase tracking-wider mb-1">
                    E-poçt Ünvanı
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#C3A16A]/70 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@restoran.az"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#C3A16A]/30 text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/40 focus:border-[#C3A16A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B1711] bg-gradient-to-r from-[#D4B67F] via-[#C3A16A] to-[#B38F56] hover:from-[#DFBE86] hover:to-[#C3A16A] shadow-[0_4px_20px_rgba(195,161,106,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Təqdimat sifariş et</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-[#C9C0AF]/70 text-center">
                Məlumatlarınız tam məxfi saxlanılır və heç bir öhdəlik daşımır.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
