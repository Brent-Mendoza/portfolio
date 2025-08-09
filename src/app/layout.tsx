import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  Inter,
  Londrina_Shadow,
  Moirai_One,
  Shizuru,
  Zen_Antique,
} from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const shizuru = Shizuru({
  variable: "--font-shizuru",
  subsets: ["latin"],
  weight: "400",
})

const moraiOne = Moirai_One({
  variable: "--font-morai-one",
  subsets: ["latin"],
  weight: "400",
})

const zenAntique = Zen_Antique({
  variable: "--font-zen-antique",
  subsets: ["latin"],
  weight: "400",
})

const londrinaShadow = Londrina_Shadow({
  variable: "--font-londrina-shadow",
  subsets: ["latin"],
  weight: "400",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Brent Porfolio",
  description:
    "A portfolio showcasing my work and skills. Explore my projects, experience, and more. Let's connect!",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shizuru.variable} ${moraiOne.variable} ${zenAntique.variable} ${londrinaShadow.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
