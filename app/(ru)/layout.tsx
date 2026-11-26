import type { Metadata } from "next";
import "../globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://master-rem.com"),
  title: "Мастерская ремонта — создание пространства для вашего комфорта",
  description:
    "Дизайн, ремонт и комплектация квартир, домов и коммерческих помещений в Москве и Московской области.",
  alternates: {
    canonical: "/",
    languages: { ru: "/", en: "/en/", "x-default": "/" },
  },
  verification: {
    google: "yuZfCzxh245KEXnwyAMIRlIlH3vCloNjpt9J36WtIH0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Мастерская ремонта",
    title: "Мастерская ремонта — создание пространства для вашего комфорта",
    description:
      "Дизайн, ремонт и комплектация квартир, домов и коммерческих помещений в Москве и Московской области.",
  },
  icons: {
    icon: `${basePath}/workshop-icon.svg`,
    shortcut: `${basePath}/workshop-icon.svg`,
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://master-rem.com/#business",
  name: "Мастерская ремонта",
  telephone: "+7-999-888-89-69",
  openingHours: "Mo-Th 10:00-18:00",
  hasOfferCatalog: {"@type":"OfferCatalog",name:"Виды работ",itemListElement:["Демонтаж и подготовка","Черновые работы","Электромонтаж","Сантехника и водоснабжение","Чистовая отделка","Монтаж и комплектация"].map(name=>({"@type":"Offer",itemOffered:{"@type":"Service",name}}))},
  url: "https://master-rem.com/",
  logo: "https://master-rem.com/images/logo-approved-horizontal.png",
  areaServed: ["Москва", "Московская область"],
  description:
    "Дизайн, ремонт и комплектация квартир, домов и коммерческих помещений в Москве и Московской области.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        {children}
      </body>
    </html>
  );
}
