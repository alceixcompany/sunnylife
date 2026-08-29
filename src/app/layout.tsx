import type { Metadata } from "next";
import { DM_Sans, Marcellus, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const dmSans = DM_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-dm-sans',
});

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: '--font-marcellus',
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: '--font-dancing',
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Sunny Life Solarium & Beauty',
  url: 'https://sunnylifesolarium.com',
  image: 'https://sunnylifesolarium.com/banner/sunnylife-solarium-hero.webp',
  telephone: '+90 538 503 87 30',
  description: "Anadolu Hisarı'nda solaryum, cilt bakımı, epilasyon ve cihaz destekli vücut bakımı hizmetleri sunan güzellik merkezi.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Anadolu Hisarı',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  },
  sameAs: ['https://www.instagram.com/sunnylifesolariumbeauty/'],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnylifesolarium.com"),
  title: {
    default: "Sunny Life Solarium & Beauty | Anadolu Hisarı Solaryum",
    template: "%s | Sunny Life Solarium & Beauty",
  },
  description: "Anadolu Hisarı'nda solaryum, cilt bakımı, epilasyon, G5/G8 masaj, Rasping ve Dipotens hizmetleri. Sunny Life Solarium & Beauty ile tanışın.",
  keywords: [
    "sunny life solarium",
    "sunny life solarium beauty",
    "beykoz solaryum",
    "istanbul solaryum",
    "bronzlaşma merkezi",
    "solaryum seansı",
    "güzellik merkezi",
    "cilt bakımı",
    "epilasyon",
    "g5 masaj",
    "g8 masaj",
    "rasping",
    "dipotens",
    "istanbul güzellik merkezi",
    "beykoz güzellik merkezi",
    "profesyonel cilt bakımı",
    "premium güzellik merkezi",
    "anadolu hisarı solaryum",
    "bakım merkezi beykoz"
  ].join(", "),
  authors: [{ name: "Sunny Life Solarium & Beauty" }],
  creator: "Sunny Life Solarium & Beauty",
  publisher: "Sunny Life Solarium & Beauty",
  robots: "index, follow",
  alternates: {
    canonical: "https://sunnylifesolarium.com"
  },
  category: "beauty",
  classification: "Business",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Anadolu Hisarı, İstanbul"
  },
  icons: {
    icon: [{ url: '/solaryumlogo.png', type: 'image/png' }],
    shortcut: '/solaryumlogo.png',
  },
  openGraph: {
    title: "Sunny Life Solarium & Beauty | Işığını Keşfet",
    description: "Anadolu Hisarı'nda solaryum, cilt bakımı, epilasyon ve cihaz destekli vücut bakımları.",
    type: "website",
    locale: "tr_TR",
    siteName: "Sunny Life Solarium & Beauty",
    url: "https://sunnylifesolarium.com",
    images: [
      {
        url: '/banner/sunnylife-solarium-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Sunny Life Solarium & Beauty Beykoz solaryum deneyimi'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Life Solarium & Beauty",
    description: "Anadolu Hisarı'nda solaryum ve güzellik bakımları.",
    images: ['/banner/sunnylife-solarium-hero.webp']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="sunnylife-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} ${marcellus.variable} ${dancingScript.variable} font-sans`}>
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
