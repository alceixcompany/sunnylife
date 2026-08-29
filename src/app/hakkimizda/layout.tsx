import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Sunny Life Solarium & Beauty’nin Anadolu Hisarı’ndaki modern solaryum yaklaşımını, hijyen standartlarını ve kişiye özel seans planlamasını keşfedin.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda',
    description: 'Sunny Life Solarium & Beauty hikayesi, misyonumuz, vizyonumuz ve zarafet felsefemiz hakkında bilgi edinin.',
    url: 'https://sunnylifesolarium.com/hakkimizda',
    type: 'website',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
