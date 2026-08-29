import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Sunny Life Solarium & Beauty salonumuzdan kareler, uzman uygulamalarımız ve misafirlerimizin değişim hikayelerini galerimizde inceleyin.',
  alternates: {
    canonical: 'https://sunnylifesolarium.com/galeri',
  },
  openGraph: {
    title: 'Galeri',
    description: 'Sunny Life Solarium & Beauty salonumuzdan kareler, uzman uygulamalarımız ve değişim hikayeleri.',
    url: 'https://sunnylifesolarium.com/galeri',
    type: 'website',
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
