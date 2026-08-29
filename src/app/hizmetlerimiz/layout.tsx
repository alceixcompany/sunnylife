import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Sunny Life Solarium & Beauty solaryum, cilt bakımı, epilasyon, G5/G8 masaj, Rasping ve Dipotens hizmetlerini inceleyin.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/hizmetlerimiz',
  },
  openGraph: {
    title: 'Hizmetlerimiz',
    description: 'Anadolu Hisarı’nda solaryum, cilt bakımı, epilasyon ve cihaz destekli vücut bakımları.',
    url: 'https://sunnylifesolarium.com/hizmetlerimiz',
    type: 'website',
  },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
