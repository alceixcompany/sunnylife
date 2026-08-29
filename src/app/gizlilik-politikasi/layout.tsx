import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Sunny Life Solarium & Beauty gizlilik politikası ve kişisel verilerin korunması (KVKK) hakkında detaylı bilgi edinin. Kişisel verilerinizin güvenliği bizim önceliğimizdir.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/gizlilik-politikasi',
  },
  openGraph: {
    title: 'Gizlilik Politikası',
    description: 'Sunny Life Solarium & Beauty gizlilik politikası ve kişisel verilerin korunması hakkında detaylı bilgi edinin.',
    url: 'https://sunnylifesolarium.com/gizlilik-politikasi',
    type: 'website',
  },
};

export default function GizlilikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
