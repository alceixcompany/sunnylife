import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Randevu',
  description: 'Sunny Life Solarium & Beauty ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da online randevu formu doldurarak hemen randevunuzu planlayın.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/iletisim',
  },
  openGraph: {
    title: 'İletişim & Randevu',
    description: 'Sunny Life Solarium & Beauty ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da randevunuzu planlayın.',
    url: 'https://sunnylifesolarium.com/iletisim',
    type: 'website',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
