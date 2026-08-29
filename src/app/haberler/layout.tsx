import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haberler & Blog',
  description: 'Bronzlaşma rehberleri, solaryum öncesi ve sonrası bakım önerileri ile Sunny Life Solarium & Beauty’den güncel içerikler.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/haberler',
  },
  openGraph: {
    title: 'Haberler & Blog',
    description: 'Güzellik ipuçları, cilt bakımı trendleri ve Sunny Life Solarium & Beauty’dan en son haberler.',
    url: 'https://sunnylifesolarium.com/haberler',
    type: 'website',
  },
};

export default function HaberlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
