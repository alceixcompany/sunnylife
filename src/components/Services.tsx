'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    title: 'Solaryum',
    description: 'Ten tipinize ve bronzluk hedefinize göre planlanan kontrollü, hijyenik solaryum seansları.',
    image: '/banner/sunnylife-solarium-studio.webp',
    href: '/hizmetlerimiz/solaryum',
  },
  {
    title: 'Cilt Bakımı',
    description: 'Cilt ihtiyacınıza göre belirlenen, temizlik ve bakım adımlarıyla planlanan kişisel uygulamalar.',
    image: '/hizmetler/sunnylife-cilt-nem-bakimi.webp',
    href: '/hizmetlerimiz/cilt-bakimi',
  },
  {
    title: 'Epilasyon',
    description: 'Uygulama bölgesi ve kıl yapısı değerlendirilerek kişiye özel planlanan epilasyon seansları.',
    image: '/hizmetler/lazer-epilasyon.png',
    href: '/hizmetlerimiz/lazer-epilasyon',
  },
  {
    title: 'G5 / G8 Masaj',
    description: 'Ritmik mekanik masajla vücut bakımını ve daha pürüzsüz bir görünümü destekleyen uygulama.',
    image: '/hizmetler/masaj.png',
    href: '/iletisim?service=g5-g8-masaj',
  },
  {
    title: 'Rasping',
    description: 'Hedeflenen bölgeye göre planlanan, vücut konturunu ve sıkı görünümü destekleyen bakım.',
    image: '/hizmetler/bolgesel-zayiflama.png',
    href: '/iletisim?service=rasping',
  },
  {
    title: 'Dipotens',
    description: 'Mikro ve galvanik akım teknolojisiyle bölgesel toparlanma görünümünü destekleyen uygulama.',
    image: '/hizmetler/vucut-bakimi.png',
    href: '/iletisim?service=dipotens',
  },
] as const;

const Services = () => {
  return (
    <section id="hizmetler" className="relative overflow-hidden bg-[var(--lale-cream)] py-20 sm:py-24">
      <div className="pointer-events-none absolute right-10 top-20 h-60 w-60 rounded-full bg-white/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="lale-kicker">Hizmetlerimiz</div>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-[var(--lale-emerald-deep)] sm:text-4xl lg:text-5xl">
              Sunny Life&apos;ta sıcak, kontrollü ve size özel bakım
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[var(--dream-text)] sm:text-base">
            Instagram profilimizde yer alan solaryum, cilt bakımı, epilasyon ve
            cihaz destekli vücut bakımlarını özenli bir uygulama akışıyla sunuyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.62, delay: index * 0.06, ease: 'easeOut' }}
              className="group relative min-h-[430px] overflow-hidden rounded-[30px] bg-white shadow-[0_22px_70px_rgba(28,73,66,0.12)]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,73,66,0.02)_28%,rgba(28,73,66,0.82)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/16 px-4 py-2 text-xs backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Link
                    href={service.href}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--lale-emerald-deep)] transition-transform group-hover:rotate-45"
                    aria-label={`${service.title} detayları`}
                  >
                    <FiArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <h3 className="font-serif text-2xl font-normal">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-[30px] bg-[var(--lale-emerald-deep)] p-5 text-white md:grid-cols-[1fr_auto] md:items-center md:p-7">
          <div className="flex flex-wrap gap-3">
            {['Kişiye özel plan', 'Hijyenik ortam', 'Cihaz destekli uygulamalar'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <FiCheck className="h-4 w-4" />
                {item}
              </span>
            ))}
          </div>
          <Link href="/iletisim" className="lale-gold-button gap-3 justify-self-start md:justify-self-end">
            Randevu Al
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
