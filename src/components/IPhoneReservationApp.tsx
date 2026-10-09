import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Check, 
  RotateCcw,
  Sparkles,
  Phone,
  User,
  MessageSquare
} from 'lucide-react';

export const IPhoneReservationApp: React.FC = () => {
  // State for interactive reservation flow
  const [selectedDate, setSelectedDate] = useState('Bu gün, 9 Okt');
  const [selectedTime, setSelectedTime] = useState('19:30');
  const [guestCount, setGuestCount] = useState('4');
  const [selectedTable, setSelectedTable] = useState<number>(3);
  const [guestName, setGuestName] = useState('Elmir Məmmədov');
  const [guestPhone, setGuestPhone] = useState('+994 (50) 842-19-20');
  const [specialRequest, setSpecialRequest] = useState('Pəncərə kənarı, şam yeməyi');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dates = [
    { label: 'Bu gün', date: '9 Okt', value: 'Bu gün, 9 Okt' },
    { label: 'Sabah', date: '10 Okt', value: 'Sabah, 10 Okt' },
    { label: 'Şənbə', date: '11 Okt', value: 'Şənbə, 11 Okt' },
    { label: 'Bazar', date: '12 Okt', value: 'Bazar, 12 Okt' },
  ];

  const times = ['18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
  const guestOptions = ['2', '3', '4', '6', '8'];

  // Floor plan tables
  const tables = [
    { id: 1, name: 'Masa 01', zone: 'Pəncərə', capacity: 2, status: 'available' },
    { id: 2, name: 'Masa 02', zone: 'Əsas Zal', capacity: 4, status: 'occupied' },
    { id: 3, name: 'Masa 03', zone: 'Əsas Zal', capacity: 4, status: 'available' },
    { id: 4, name: 'Masa 04', zone: 'Teras', capacity: 2, status: 'available' },
    { id: 5, name: 'Masa 05', zone: 'VIP Otaq', capacity: 6, status: 'available' },
    { id: 6, name: 'Masa 06', zone: 'Şöminə yanı', capacity: 4, status: 'occupied' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full h-full bg-[#0B1711] text-[#F8F3E9] flex flex-col font-sans select-none overflow-hidden relative">
      {/* Top iOS Status Bar */}
      <div className="h-10 px-6 pt-3 flex items-center justify-between text-[11px] font-medium text-[#C9C0AF]/80 shrink-0 z-20">
        <span>19:42</span>
        <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center mx-auto -mt-1 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#153D2B]/80 ml-auto mr-1.5" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span>5G</span>
          <div className="w-4 h-2 border border-[#C9C0AF]/70 rounded-xs p-0.5 flex items-center">
            <div className="h-full w-2.5 bg-[#C3A16A] rounded-xs" />
          </div>
        </div>
      </div>

      {/* Scrollable Mobile App Body */}
      <div className="flex-1 overflow-y-auto phone-scroll px-4 pb-6 space-y-4">
        {/* 1. Refined Restaurant Header */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C3A16A]/25 bg-[#153D2B]/50 shadow-sm mt-1">
          <div className="h-28 relative">
            <img 
              src="/src/assets/images/matbax_gourmet_dish_1791576426186.jpg" 
              alt="Matbəx Milli Restoranı" 
              className="w-full h-full object-cover object-center filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1711] via-[#0B1711]/40 to-transparent" />
            
            {/* Verified badge */}
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#0B1711]/85 backdrop-blur-md rounded-md border border-[#C3A16A]/30 text-[10px] text-[#C3A16A] font-medium flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Premium Seçim</span>
            </div>
          </div>

          <div className="p-3 -mt-4 relative bg-[#0B1711]/95 backdrop-blur-md border-t border-[#C3A16A]/20">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#F8F3E9] leading-tight tracking-wide">
                  Matbəx Milli Restoranı
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-[#C9C0AF] mt-0.5">
                  <MapPin className="w-3 h-3 text-[#C3A16A] shrink-0" />
                  <span>Fəvvarələr Meydanı, Bakı</span>
                  <span className="text-[#C3A16A]/60">·</span>
                  <span className="text-[#C3A16A]">★ 4.9</span>
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#153D2B] text-[#D4B67F] border border-[#C3A16A]/30">
                Açıqdır
              </span>
            </div>
          </div>
        </div>

        {/* Success Modal / State */}
        {isSubmitted ? (
          <div className="p-5 rounded-2xl bg-[#153D2B]/80 border border-[#C3A16A]/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#C3A16A]/20 border border-[#C3A16A] flex items-center justify-center text-[#C3A16A]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A]">
                Təsdiqləndi
              </span>
              <h4 className="font-serif text-xl font-bold text-[#F8F3E9] mt-0.5">
                Rezervasiyanız Qeydə Alındı
              </h4>
              <p className="text-xs text-[#C9C0AF] mt-1.5 leading-relaxed">
                Təşəkkür edirik, cənab <span className="text-[#F8F3E9] font-medium">{guestName}</span>. Təsdiq SMS-i <span className="text-[#F8F3E9]">{guestPhone}</span> nömrəsinə göndərildi.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0B1711]/80 border border-[#C3A16A]/25 text-left text-xs space-y-1.5">
              <div className="flex justify-between text-[#C9C0AF]">
                <span>Rezervasiya Kodu:</span>
                <span className="font-mono font-bold text-[#C3A16A]">#RW-8492</span>
              </div>
              <div className="flex justify-between text-[#C9C0AF]">
                <span>Tarix və Saat:</span>
                <span className="text-[#F8F3E9] font-medium">{selectedDate} · {selectedTime}</span>
              </div>
              <div className="flex justify-between text-[#C9C0AF]">
                <span>Seçilmiş Masa:</span>
                <span className="text-[#F8F3E9] font-medium">Masa 0{selectedTable} ({tables.find(t => t.id === selectedTable)?.zone})</span>
              </div>
              <div className="flex justify-between text-[#C9C0AF]">
                <span>Qonaq sayı:</span>
                <span className="text-[#F8F3E9] font-medium">{guestCount} nəfər</span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0B1711] hover:bg-[#153D2B] border border-[#C3A16A]/40 text-xs font-semibold text-[#F3EBDD] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#C3A16A]" />
              Yenidən Rezervasiya Et
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 2. Heading */}
            <div className="border-b border-[#C3A16A]/15 pb-2">
              <h2 className="font-serif text-lg font-semibold text-[#F3EBDD] tracking-wide">
                Masanızı rezervasiya edin
              </h2>
              <p className="text-[11px] text-[#C9C0AF]">
                Zövqünüzə uyğun masa və saatı dərhal onlayn seçin
              </p>
            </div>

            {/* 3. Tarix (Date selector) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A] flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  Tarix
                </label>
                <span className="text-[10px] text-[#C9C0AF]">{selectedDate}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {dates.map((d) => {
                  const active = selectedDate === d.value;
                  return (
                    <button
                      type="button"
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#153D2B] border-[#C3A16A] text-[#F3EBDD] shadow-[0_0_12px_rgba(195,161,106,0.2)]'
                          : 'bg-[#153D2B]/30 border-[#C3A16A]/15 text-[#C9C0AF] hover:border-[#C3A16A]/40'
                      }`}
                    >
                      <div className="text-[10px] opacity-75">{d.label}</div>
                      <div className="text-xs font-bold mt-0.5">{d.date}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Saat (Time selector) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A] flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  Saat
                </label>
                <span className="text-[10px] text-[#C9C0AF]">{selectedTime}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {times.map((t) => {
                  const active = selectedTime === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-1.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C3A16A] border-[#C3A16A] text-[#0B1711] font-bold shadow-sm'
                          : 'bg-[#153D2B]/30 border-[#C3A16A]/15 text-[#C9C0AF] hover:border-[#C3A16A]/40'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Qonaq sayı (Guest selector) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A] flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  Qonaq sayı
                </label>
                <span className="text-[10px] text-[#C9C0AF]">{guestCount} nəfər</span>
              </div>
              <div className="flex items-center gap-1.5">
                {guestOptions.map((g) => {
                  const active = guestCount === g;
                  return (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setGuestCount(g)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C3A16A] border-[#C3A16A] text-[#0B1711]'
                          : 'bg-[#153D2B]/30 border-[#C3A16A]/15 text-[#C9C0AF] hover:border-[#C3A16A]/40'
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6. & 7. & 8. Masa seçimi & Restaurant Floor Plan */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A]">
                  Masa seçimi
                </label>
                {/* Visual distinction legend */}
                <div className="flex items-center gap-2.5 text-[9px] text-[#C9C0AF]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#244B36] border border-[#C3A16A]/40" />
                    Boş
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#C3A16A]" />
                    Seçilib
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#2B1B1B] border border-red-900/40 opacity-70" />
                    Məşğul
                  </span>
                </div>
              </div>

              {/* Compact Restaurant Floor Plan Grid */}
              <div className="p-3 rounded-2xl bg-[#08100C] border border-[#C3A16A]/25 relative">
                <div className="text-[9px] uppercase tracking-wider text-[#C9C0AF]/60 text-center mb-2 pb-1 border-b border-[#C3A16A]/10 flex items-center justify-center gap-1.5">
                  <span>Pəncərə və Mənzərə İstiqaməti</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {tables.map((tbl) => {
                    const isOccupied = tbl.status === 'occupied';
                    const isSelected = selectedTable === tbl.id;

                    return (
                      <button
                        type="button"
                        key={tbl.id}
                        disabled={isOccupied}
                        onClick={() => setSelectedTable(tbl.id)}
                        className={`p-2 rounded-xl text-left border relative transition-all cursor-pointer ${
                          isOccupied
                            ? 'bg-[#1C1212]/70 border-red-950/60 opacity-55 cursor-not-allowed'
                            : isSelected
                            ? 'bg-[#153D2B] border-[#C3A16A] shadow-[0_0_15px_rgba(195,161,106,0.3)]'
                            : 'bg-[#153D2B]/40 border-[#C3A16A]/20 hover:border-[#C3A16A]/50'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#C3A16A] text-[#0B1711] flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                        <div className="text-[11px] font-bold text-[#F8F3E9]">{tbl.name}</div>
                        <div className="text-[9px] text-[#C9C0AF] mt-0.5">{tbl.zone}</div>
                        <div className="text-[9px] text-[#C3A16A] mt-1 font-medium">
                          {tbl.capacity} yer
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#C3A16A]/10 flex items-center justify-between text-[10px]">
                  <span className="text-[#C9C0AF]">Seçilən:</span>
                  <span className="font-semibold text-[#D4B67F]">
                    Masa 0{selectedTable} ({tables.find(t => t.id === selectedTable)?.zone})
                  </span>
                </div>
              </div>
            </div>

            {/* 9. Customer Information Section */}
            <div className="space-y-2 pt-1 border-t border-[#C3A16A]/15">
              <label className="text-[11px] font-semibold tracking-wider uppercase text-[#C3A16A]">
                Qonaq məlumatları
              </label>

              <div className="space-y-1.5">
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#C3A16A] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Adınız və Soyadınız"
                    className="w-full pl-8 pr-3 py-2 bg-[#08100C] border border-[#C3A16A]/25 rounded-xl text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-[#C3A16A] absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+994 (50) 000-00-00"
                    className="w-full pl-8 pr-3 py-2 bg-[#08100C] border border-[#C3A16A]/25 rounded-xl text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C3A16A] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Xüsusi istək və ya qeyd (könüllü)"
                    className="w-full pl-8 pr-3 py-2 bg-[#08100C] border border-[#C3A16A]/25 rounded-xl text-xs text-[#F8F3E9] placeholder-[#C9C0AF]/50 focus:border-[#C3A16A] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 10. Prominent Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-[#0B1711] bg-gradient-to-r from-[#D4B67F] via-[#C3A16A] to-[#B38F56] hover:from-[#DFBE86] hover:to-[#C3A16A] shadow-[0_4px_16px_rgba(195,161,106,0.3)] transition-all cursor-pointer active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                <span>Rezervasiyanı təsdiqlə</span>
              </button>
              <p className="text-[10px] text-[#C9C0AF]/70 text-center mt-1.5">
                Dərhal təsdiq və pulsuz ləğv imkanı
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Bottom iOS Home Indicator */}
      <div className="h-4 flex items-center justify-center shrink-0 pb-1">
        <div className="w-28 h-1 bg-[#F8F3E9]/30 rounded-full" />
      </div>
    </div>
  );
};
