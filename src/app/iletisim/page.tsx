'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '../../store';
import { clearError, fetchContactInfo, sendContactMessage } from '../../store/slices/contactSlice';
import PageHero from '@/components/PageHero';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  urgency: 'uygun-zaman',
  message: '',
};

const inputClass =
  'w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[var(--lale-gold-soft)] focus:bg-white/[0.09] focus:ring-1 focus:ring-[var(--lale-gold-soft)]';

const contactCards = [
  {
    icon: FiPhone,
    label: 'Randevu & bilgi',
    value: '0538 503 87 30',
    description: 'Bizi doğrudan arayın',
    href: 'tel:+905385038730',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@sunnylifesolariumbeauty',
    description: 'Mesaj gönderin ve bizi takip edin',
    href: 'https://www.instagram.com/sunnylifesolariumbeauty/',
  },
  {
    icon: FiMapPin,
    label: 'Konum',
    value: 'Anadolu Hisarı / İstanbul',
    description: 'Yol tarifi için haritayı açın',
    href: 'https://www.google.com/maps/search/?api=1&query=Sunny+Life+Solarium+Beauty+Anadolu+Hisarı+İstanbul',
  },
] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const { isSending, error } = useAppSelector((state: RootState) => state.contact) as {
    isSending: boolean;
    error: string | null;
  };

  useEffect(() => {
    dispatch(fetchContactInfo());
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSuccess(false);

    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      return;
    }

    try {
      await dispatch(
        sendContactMessage({
          ...formData,
          subject: `${formData.serviceType} - ${formData.urgency}`,
          priority: formData.urgency === 'en-kisa' ? 'medium' : 'low',
        }),
      ).unwrap();

      setFormData(initialForm);
      setSuccess(true);
      window.setTimeout(() => setSuccess(false), 5000);
    } catch (submitError) {
      console.error('Mesaj gönderilirken hata:', submitError);
    }
  };

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-cream)]">
      <PageHero
        eyebrow="Sunny Life İletişim"
        title={<>Işığınız için<br />buluşalım</>}
        description="Randevu planlamak, size uygun seans hakkında bilgi almak veya salonumuza ulaşmak için dilediğiniz kanaldan bize yazın."
        image="/galeri/solaryum-hazirlik.webp"
        imageAlt="Sunny Life Solarium & Beauty iletişim"
      />

      <section className="relative overflow-hidden bg-[var(--lale-cream)] py-24 sm:py-28">
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[rgba(184,121,56,0.10)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="lale-kicker">BİZE ULAŞIN</p>
              <h2 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-[var(--dream-dark)] sm:text-5xl">
                Sorularınız ve randevunuz için buradayız
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--dream-text)]">
                Ten tipinize uygun başlangıç süresi, seans aralığı ve hizmetlerimiz hakkında bilgi almak için bize ulaşabilirsiniz.
              </p>

              <div className="mt-10 space-y-4">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-5 rounded-[24px] border border-[rgba(184,121,56,0.14)] bg-white p-5 shadow-[0_14px_40px_rgba(55,39,26,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(55,39,26,0.10)]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(184,121,56,0.10)] text-[var(--lale-gold)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">{item.label}</span>
                        <span className="mt-1 block break-words font-serif text-xl text-[var(--dream-dark)]">{item.value}</span>
                        <span className="mt-1 block text-xs text-[var(--dream-text)]">{item.description}</span>
                      </span>
                      <FiArrowUpRight className="h-5 w-5 shrink-0 text-[var(--lale-gold)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-[22px] border border-dashed border-[rgba(184,121,56,0.24)] px-5 py-4 text-sm text-[var(--dream-text)]">
                <FiClock className="h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                Ziyaretler randevu planına göre gerçekleştirilmektedir.
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[32px] bg-[var(--brand-panel-deep)] p-6 shadow-[0_30px_80px_rgba(40,30,23,0.20)] sm:p-10"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[rgba(223,167,69,0.14)] blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold-soft)]">RANDEVU FORMU</p>
                <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Size geri dönüş yapalım</h2>
                <p className="mt-3 text-sm leading-7 text-white/55">Bilgilerinizi bırakın, talebiniz için sizinle iletişime geçelim.</p>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-7 flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100"
                  >
                    <FiCheckCircle className="h-5 w-5 shrink-0" />
                    Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                  </motion.div>
                )}

                {error && (
                  <div className="mt-7 rounded-2xl border border-red-300/20 bg-red-300/10 p-4 text-sm text-red-100">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Ad Soyad</span>
                      <input className={inputClass} type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Adınız ve soyadınız" />
                    </label>
                    <label className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Telefon</span>
                      <input className={inputClass} type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="05xx xxx xx xx" />
                    </label>
                  </div>

                  <label className="block space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">E-posta</span>
                    <input className={inputClass} type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="e-posta@adresiniz.com" />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">İlgilendiğiniz hizmet</span>
                      <span className="relative block">
                        <select className={`${inputClass} appearance-none pr-11`} name="serviceType" value={formData.serviceType} onChange={handleInputChange} required>
                          <option value="" className="bg-[#211a15]">Hizmet seçiniz</option>
                          <option value="solaryum" className="bg-[#211a15]">Solaryum</option>
                          <option value="cilt-bakimi" className="bg-[#211a15]">Cilt Bakımı</option>
                          <option value="epilasyon" className="bg-[#211a15]">Epilasyon</option>
                          <option value="g5-g8-masaj" className="bg-[#211a15]">G5 / G8 Masaj</option>
                          <option value="rasping" className="bg-[#211a15]">Rasping</option>
                          <option value="dipotens" className="bg-[#211a15]">Dipotens</option>
                          <option value="diger" className="bg-[#211a15]">Diğer</option>
                        </select>
                        <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--lale-gold-soft)]" />
                      </span>
                    </label>

                    <label className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Dönüş tercihi</span>
                      <span className="relative block">
                        <select className={`${inputClass} appearance-none pr-11`} name="urgency" value={formData.urgency} onChange={handleInputChange}>
                          <option value="uygun-zaman" className="bg-[#211a15]">Uygun olduğunuzda</option>
                          <option value="bugun" className="bg-[#211a15]">Bugün</option>
                          <option value="en-kisa" className="bg-[#211a15]">En kısa sürede</option>
                        </select>
                        <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--lale-gold-soft)]" />
                      </span>
                    </label>
                  </div>

                  <label className="block space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Mesajınız</span>
                    <textarea className={`${inputClass} min-h-32 resize-none rounded-[22px]`} name="message" value={formData.message} onChange={handleInputChange} required placeholder="Nasıl yardımcı olabiliriz?" />
                  </label>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--lale-gold-soft)] px-6 py-4 text-sm font-semibold text-[var(--brand-panel-deep)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {isSending ? (
                      <><span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> Gönderiliyor...</>
                    ) : (
                      <><FiSend className="h-4 w-4" /> Talebi Gönder</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--lale-cream)] pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="lale-kicker">KONUM</p>
              <h2 className="mt-5 font-serif text-4xl text-[var(--dream-dark)] sm:text-5xl">Anadolu Hisarı’nda sizi bekliyoruz</h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sunny+Life+Solarium+Beauty+Anadolu+Hisarı+İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--dream-dark)]"
            >
              Haritada Aç <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="h-[420px] overflow-hidden rounded-[30px] border border-[rgba(184,121,56,0.14)] bg-white shadow-[0_20px_60px_rgba(55,39,26,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=Sunny%20Life%20Solarium%20%26%20Beauty%20Anadolu%20Hisar%C4%B1%20%C4%B0stanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sunny Life Solarium & Beauty konumu"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--lale-cream)] px-5 pb-28 sm:px-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[32px] bg-[var(--brand-panel-deep)] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lale-gold-soft)]">INSTAGRAM</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Salonumuzdan güncel kareleri ve duyuruları keşfedin</h2>
          </div>
          <Link
            href="https://www.instagram.com/sunnylifesolariumbeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[var(--lale-gold-soft)] px-7 py-4 text-sm font-semibold text-[var(--brand-panel-deep)]"
          >
            <FiInstagram className="h-5 w-5" /> Instagram’a Git
          </Link>
        </div>
      </section>
    </main>
  );
}
