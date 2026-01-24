import "./globals.css"
import ClientLayout from "@/components/layout/ClientLayout"
import { geologica } from "./fonts"
import type { Metadata } from "next"

// METADATA
export const metadata: Metadata = {
  // Базовий URL для правильного відображення картинок у соцмережах
  // metadataBase: new URL(SITE_URL),

  // SITE TITLE
  title: {
    default: 'Терно-Топ — протезування, індивідуальні засоби реабілітації та ортопедичне взуття у Тернополі',
    template: '%s | Терно-Топ', // На інших сторінках буде: "Каталог | ПП "Терно-Топ""
  },

  // SITE DESCRIPTION
  description: 'Власне виробництво протезів, ортезів, корсетів та ортопедичного взуття. Забезпечення засобами реабілітації за державні кошти. Індивідуальний підхід та якість.',

  // KEYWORDS
  keywords: [
    'Терно-Топ',
    'протезування Тернопіль',
    'ортопедичне взуття',
    'жіноче ортопедичне взуття',
    'чоловіче ортопедичне взуття',
    'дитяче ортопедичне взуття',
    'ортопедичні вироби',
    'засоби реабілітації',
    'виготовлення протезів',
    'ортопедичні устілки',
    'корсети та бандажі',
    'протези за державні кошти',
    'ортези на замовлення',
    'протези нижніх та верхніх кінцівок',
  ],

  // OWNER SETTINGS
  authors: [{ name: 'ПП Терно-Топ' }],
  creator: 'ПП Терно-Топ',
  publisher: 'ПП Терно-Топ',

  // SOCIAL MEDIA PREVIEW SETTINGS
  openGraph: {
    title: 'Терно-Топ — центр протезування та виготовлення індивідуальних засобів реабілітації та ортопедичного взуття у Тернополі.',
    description: 'Виготовлення сучасних протезів та ортопедичного взуття. Безкоштовне забезпечення пільгових категорій. Власне виробництво у Тернополі.',
    // url: SITE_URL,
    siteName: 'Терно-Топ',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Терно-Топ — виробництво протезів та ортопедичного взуття в Тернополі',
      },
    ],
  },

  // X SETTINGS
  twitter: {
    card: 'summary_large_image',
    title: 'Терно-Топ — протезування, ортопедичне взуття, устілки та індивідуальні засоби реабілітації у Тернополі.',
    description: 'Якісні засоби реабілітації та ортопедичне взуття від виробника.',
    images: ['/opengraph-image.jpg'],
  },

  // SITE ICONS
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // SEARCH ENGINE INDEXING
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // GEO TAGGING
  category: 'medical',
}

// ROOT LAYOUT
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={geologica.className}>
        {modal}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}