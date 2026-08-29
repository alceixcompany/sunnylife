'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="lale-light-section text-[var(--dream-dark)]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="border-t border-[rgba(223,167,69,0.18)] py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.78fr_1.22fr_1fr] lg:gap-12">
            <div>
              <div className="inline-flex rounded-full border border-[rgba(223,167,69,0.18)] bg-white/[0.88] px-4 py-2 shadow-[0_12px_34px_rgba(95,89,108,0.08)]">
                <Image
                  src="/solaryumlogo.png"
                  alt="Sunny Life Solarium & Beauty Logo"
                  width={1254}
                  height={1254}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--dream-text)]">
                Anadolu Hisarı&apos;nda ten tipine özel planlanan solaryum seansları ve güzellik
                bakımlarıyla sıcak, hijyenik ve özenli bir deneyim sunuyoruz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/sunnylifesolariumbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/[0.88] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a
                  href="tel:+905385038730"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/[0.88] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Telefon"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/sunnylifesolariumbeauty/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/[0.88] text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Sayfalar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--dream-text)]">
                <li><Link href="/" className="transition-colors hover:text-[var(--lale-gold)]">Ana Sayfa</Link></li>
                <li><Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">Hakkımızda</Link></li>
                <li><Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri" className="transition-colors hover:text-[var(--lale-gold)]">Galeri</Link></li>
                <li><Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Bakımlar</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--dream-text)]">
                <li>Solaryum</li>
                <li>Cilt Bakımı</li>
                <li>Epilasyon</li>
                <li>G5 / G8 Masaj</li>
                <li>Rasping</li>
                <li>Dipotens</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">İletişim</h3>
              <ul className="mt-5 space-y-4 text-sm text-[var(--dream-text)]">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-4 w-4 text-[var(--lale-gold)]" />
                  <span>Anadolu Hisarı / İstanbul</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="tel:+905385038730" className="transition-colors hover:text-[var(--lale-gold)]">
                    0538 503 87 30
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiInstagram className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a
                    href="https://www.instagram.com/sunnylifesolariumbeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--lale-gold)]"
                  >
                    @sunnylifesolariumbeauty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(223,167,69,0.18)] py-6">
          <div className="flex flex-col gap-3 text-center text-sm text-[var(--dream-text)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2026 <span className="font-medium text-[var(--lale-gold)]">Sunny Life Solarium & Beauty</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--lale-gold)]"
              >
                Hakları Alceix tarafından saklıdır
              </a>
              <Link href="/gizlilik-politikasi" className="transition-colors hover:text-[var(--lale-gold)]">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
