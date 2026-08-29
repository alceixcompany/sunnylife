import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowRight,
  FiArrowUpRight,
  FiActivity,
  FiCheck,
  FiDroplet,
  FiShield,
  FiSun,
  FiTarget,
  FiZap,
} from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const services = [
  {
    title: 'Solaryum',
    category: 'İmza Deneyim',
    description:
      'Ten tipiniz, önceki bronzlaşma deneyiminiz ve hedefiniz değerlendirilerek size özel bir seans akışı oluşturulur.',
    highlights: ['Ten tipi değerlendirmesi', 'Kademeli süre planı', 'Hijyenik seans hazırlığı'],
    image: '/banner/sunnylife-solarium-studio.webp',
    href: '/hizmetlerimiz/solaryum',
    icon: FiSun,
  },
  {
    title: 'Cilt Bakımı',
    category: 'Kişisel Bakım',
    description:
      'Cildin ihtiyacı değerlendirilerek temizlik, bakım ve nemlendirme adımları kişiye özel bir akışta uygulanır.',
    highlights: ['Cilt ihtiyacı değerlendirmesi', 'Özenli bakım adımları', 'Kişisel uygulama'],
    image: '/hizmetler/sunnylife-cilt-nem-bakimi.webp',
    href: '/hizmetlerimiz/cilt-bakimi',
    icon: FiDroplet,
  },
  {
    title: 'Epilasyon',
    category: 'Bakım Teknolojisi',
    description:
      'Uygulama bölgesi ve kıl yapısı değerlendirilerek seans akışı ve ziyaret aralığı kişiye özel belirlenir.',
    highlights: ['Bölge değerlendirmesi', 'Kişisel seans planı', 'Düzenli takip'],
    image: '/hizmetler/lazer-epilasyon.png',
    href: '/hizmetlerimiz/lazer-epilasyon',
    icon: FiZap,
  },
  {
    title: 'G5 / G8 Masaj',
    category: 'Mekanik Masaj',
    description:
      'Ritmik titreşimli başlıklarla uygulanan cihaz destekli masaj, vücut bakımını ve pürüzsüz görünümü destekler.',
    highlights: ['Ritmik mekanik masaj', 'Bölgeye özel uygulama', 'Kişisel yoğunluk'],
    image: '/hizmetler/masaj.png',
    href: '/iletisim?service=g5-g8-masaj',
    icon: FiActivity,
  },
  {
    title: 'Rasping',
    category: 'Bölgesel Bakım',
    description:
      'Hedeflenen bölgeye göre planlanan cihazlı uygulama, vücut konturunu ve daha sıkı görünümü desteklemeyi amaçlar.',
    highlights: ['Hedef bölge planı', 'Cihazlı uygulama', 'Seans takibi'],
    image: '/hizmetler/bolgesel-zayiflama.png',
    href: '/iletisim?service=rasping',
    icon: FiTarget,
  },
  {
    title: 'Dipotens',
    category: 'Vücut Bakımı',
    description:
      'Mikro ve galvanik akım teknolojilerinin kullanıldığı uygulama, bölgesel toparlanma ve sıkı görünümü destekler.',
    highlights: ['Kişisel bölge seçimi', 'Kontrollü akım uygulaması', 'Planlı bakım süreci'],
    image: '/hizmetler/vucut-bakimi.png',
    href: '/iletisim?service=dipotens',
    icon: FiShield,
  },
] as const;

const values = [
  {
    number: '01',
    title: 'Ön değerlendirme',
    description: 'Beklentiniz, ten tipiniz ve önceki deneyiminiz birlikte değerlendirilir.',
  },
  {
    number: '02',
    title: 'Kişisel plan',
    description: 'Size uygun hizmet, seans süresi ve ziyaret ritmi netleştirilir.',
  },
  {
    number: '03',
    title: 'Özenli deneyim',
    description: 'Her ziyaret hijyenik hazırlık, bilgilendirme ve konforla tamamlanır.',
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="page-flow min-h-screen bg-[var(--lale-cream)]">
      <PageHero
        eyebrow="Sunny Life Hizmetleri"
        title={<>Işığınıza eşlik<br />eden ritüeller</>}
        description="Solaryum, cilt bakımı, epilasyon ve cihaz destekli vücut uygulamalarını kişiye özel, sakin ve özenli bir akışla planlıyoruz."
        image="/hizmetler/sunnylife-dikey-solaryum.webp"
        imageAlt="Sunny Life dikey solaryum ve beauty hizmetleri"
      />

      <section className="relative overflow-hidden bg-[var(--lale-cream)] py-24 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[rgba(184,121,56,0.12)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="lale-kicker">HİZMET MENÜSÜ</div>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-[var(--dream-dark)] sm:text-5xl lg:text-6xl">
                Bakımınızı kendi ritminizde seçin
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[var(--dream-text)] lg:justify-self-end">
              Instagram profilimizde duyurulan hizmetlerimiz; bronzlaşma, cilt bakımı,
              epilasyon ve bölgesel vücut bakımı ihtiyaçlarını aynı Sunny Life deneyiminde buluşturur.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = index === 0;

              return (
                <article
                  key={service.title}
                  className={`group relative min-h-[540px] overflow-hidden rounded-[30px] bg-[var(--brand-panel-deep)] shadow-[0_22px_70px_rgba(33,26,21,0.14)] ${
                    isFeatured ? 'xl:col-span-8' : index === 1 ? 'xl:col-span-4' : 'xl:col-span-6'
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes={isFeatured
                      ? '(max-width: 1280px) 100vw, 66vw'
                      : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,19,15,0.06)_12%,rgba(23,19,15,0.22)_42%,rgba(23,19,15,0.94)_100%)]" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      {service.category}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--lale-gold)] shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                    <p className="text-xs font-medium tracking-[0.2em] text-[var(--lale-gold-soft)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className={`mt-3 font-serif font-normal leading-tight ${
                      isFeatured ? 'text-4xl sm:text-5xl' : 'text-3xl'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/80 backdrop-blur-sm"
                        >
                          <FiCheck className="h-3.5 w-3.5 text-[var(--lale-gold-soft)]" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[var(--lale-gold-soft)]"
                    >
                      {service.href.startsWith('/iletisim') ? 'Bilgi ve Randevu' : 'Hizmeti İncele'}
                      <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--lale-cream)] pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="overflow-hidden rounded-[34px] bg-[var(--brand-panel-deep)] px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold-soft)]">
                  Sunny Life Akışı
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  İlk görüşmeden son dokunuşa kadar size özel
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {values.map((value) => (
                  <div key={value.number} className="border-t border-white/15 pt-5">
                    <p className="font-serif text-3xl text-[var(--lale-gold-soft)]">{value.number}</p>
                    <h3 className="mt-3 text-base font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--lale-cream)] pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="relative overflow-hidden rounded-[34px] border border-[rgba(184,121,56,0.18)] bg-white px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgba(184,121,56,0.14)] blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">Randevu Planlama</p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
                  Size en uygun hizmeti birlikte belirleyelim
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--dream-text)]">
                  İlk ziyaretiniz için kısa bir görüşme planlayın; beklentinize uygun hizmeti ve seans akışını birlikte oluşturalım.
                </p>
              </div>

              <Link href="/iletisim" className="lale-gold-button gap-3 justify-self-start lg:justify-self-end">
                Randevu Oluştur
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
