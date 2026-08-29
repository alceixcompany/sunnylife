import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowRight,
  FiCheck,
  FiMessageCircle,
  FiShield,
  FiStar,
  FiSun,
} from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const journey = [
  {
    number: '01',
    title: 'Sizi tanıyoruz',
    description:
      'Ten tipinizi, önceki bronzlaşma deneyiminizi ve ulaşmak istediğiniz tonu birlikte değerlendiriyoruz.',
  },
  {
    number: '02',
    title: 'Seansı planlıyoruz',
    description:
      'Başlangıç süresini ve ziyaret aralığını kişisel ihtiyaçlarınıza göre kontrollü biçimde belirliyoruz.',
  },
  {
    number: '03',
    title: 'Işığınızı koruyoruz',
    description:
      'Her ziyarette süreci takip ediyor, bronzluğunuzu kademeli ve dengeli bir deneyimle destekliyoruz.',
  },
] as const;

const principles = [
  {
    icon: FiShield,
    title: 'Kontrollü planlama',
    description: 'Standart süreler yerine ten tipinize ve seans geçmişinize uygun bir akış oluştururuz.',
  },
  {
    icon: FiStar,
    title: 'Özenli hijyen',
    description: 'Cihaz ve alan hazırlığını her seans öncesinde aynı titizlikle tamamlarız.',
  },
  {
    icon: FiMessageCircle,
    title: 'Açık iletişim',
    description: 'Süreç, seans aralığı ve bakım önerilerini anlaşılır biçimde sizinle paylaşırız.',
  },
  {
    icon: FiSun,
    title: 'Sıcak atmosfer',
    description: 'Modern cihazları sakin, konforlu ve size zaman ayıran bir hizmet anlayışıyla buluştururuz.',
  },
] as const;

export default function AboutPage() {
  return (
    <main className="page-flow min-h-screen bg-[var(--lale-cream)]">
      <PageHero
        eyebrow="Sunny Life Hakkında"
        title={<>Işığınıza özenle<br />eşlik ediyoruz</>}
        description="Anadolu Hisarı’nda solaryum deneyimini kişisel planlama, modern cihazlar ve sakin bir atmosferle buluşturuyoruz."
        image="/banner/sunnylife-solarium-studio.webp"
        imageAlt="Sunny Life Solarium & Beauty salonu"
      />

      <section className="relative overflow-hidden bg-[var(--lale-cream)] py-24 sm:py-28">
        <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-[rgba(184,121,56,0.12)] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24 lg:px-10">
          <div className="relative mx-auto w-full max-w-[590px] pb-16 pr-0 sm:pr-16 lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_28px_80px_rgba(55,39,26,0.18)]">
              <Image
                src="/banner/sunnylife-solarium-hero.webp"
                alt="Sunny Life modern solaryum cihazı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 44vw"
              />
            </div>

            <div className="absolute bottom-0 right-0 hidden w-[58%] overflow-hidden rounded-[28px] border-[10px] border-[var(--lale-cream)] shadow-[0_20px_55px_rgba(55,39,26,0.18)] sm:block">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/hizmetler/sunnylife-dikey-solaryum.webp"
                  alt="Sunny Life dikey solaryum deneyimi"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
            </div>

            <div className="absolute bottom-7 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:bottom-10 sm:left-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">Konum</p>
              <p className="mt-1 font-serif text-2xl text-[var(--dream-dark)]">Beykoz · İstanbul</p>
            </div>
          </div>

          <div>
            <p className="lale-kicker">BİZİM HİKÂYEMİZ</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-[var(--dream-dark)] sm:text-5xl lg:text-6xl">
              Bronzlaşmayı size özel bir ritüele dönüştürüyoruz
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[var(--dream-text)]">
              <p>
                Sunny Life Solarium & Beauty’de iyi bir deneyimin yalnızca ulaşılan tonla değil,
                kendinizi ne kadar rahat ve güvende hissettiğinizle da ilgili olduğuna inanıyoruz.
              </p>
              <p>
                Bu nedenle ilk ziyaretten itibaren sizi dinliyor; ten tipinizi, beklentinizi ve
                önceki deneyiminizi dikkate alan kademeli bir seans planı hazırlıyoruz. Modern
                cihazlarımızı hijyenik hazırlık ve özenli bilgilendirmeyle tamamlıyoruz.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Kişiye özel seans', 'Modern cihazlar', 'Özenli hazırlık'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(184,121,56,0.18)] bg-white px-4 py-3 text-sm text-[var(--dream-dark)] shadow-sm"
                >
                  <FiCheck className="h-4 w-4 text-[var(--lale-gold)]" />
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/hizmetlerimiz"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--brand-panel-deep)] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Hizmetleri İncele
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-panel-deep)] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--lale-gold-soft)]">SUNNY LIFE DENEYİMİ</p>
              <h2 className="mt-5 max-w-lg font-serif text-4xl font-normal leading-tight sm:text-5xl">
                Her seansın arkasında özenli bir akış var
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
              Hedefinizi anlamaktan seans sonrasındaki önerilere kadar sürecin her adımını sade,
              anlaşılır ve kişisel tutuyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] bg-white/10 md:grid-cols-3">
            {journey.map((item) => (
              <article key={item.number} className="bg-[var(--brand-panel-deep)] p-8 sm:p-10">
                <p className="font-serif text-4xl text-[var(--lale-gold-soft)]">{item.number}</p>
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--lale-cream)] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="lale-kicker justify-center">DEĞERLERİMİZ</p>
            <h2 className="mt-6 font-serif text-4xl font-normal leading-tight text-[var(--dream-dark)] sm:text-5xl">
              Kendinizi rahat hissetmeniz için tasarlandı
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[rgba(184,121,56,0.14)] bg-white p-7 shadow-[0_18px_55px_rgba(55,39,26,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(184,121,56,0.10)] text-[var(--lale-gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 font-serif text-2xl text-[var(--dream-dark)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--dream-text)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--lale-cream)] px-5 pb-28 sm:px-7 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[var(--brand-panel-deep)] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(223,167,69,0.18)] blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--lale-gold-soft)]">TANIŞALIM</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
              Size uygun bronzlaşma planını birlikte oluşturalım
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              Sorularınız ve randevu talebiniz için bize telefonla, Instagram’dan veya iletişim formundan ulaşabilirsiniz.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/iletisim" className="lale-gold-button">Randevu Planla</Link>
              <a href="tel:+905385038730" className="lale-outline-button">0538 503 87 30</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
