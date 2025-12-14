import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://starr365-portfolio.vercel.app"),
  title: "Nzeribe Mmesoma Stella - Frontend Developer",
  description: "Portfolio of Nzeribe Mmesoma Stella - Frontend Engineer specializing in Web3 and modern technologies",
  keywords: [
    "Nzeribe Mmesoma Stella",
    "Frontend Developer",
    "Web3",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  openGraph: {
    title: "Nzeribe Mmesoma Stella - Frontend Developer",
    description: "Portfolio of Nzeribe Mmesoma Stella - Frontend Engineer specializing in Web3 and modern technologies",
    url: "https://starr365-portfolio.vercel.app/",
    siteName: "Nzeribe Mmesoma Stella Portfolio",
    images: [
      {
        url: "/Animated me.png",
        width: 1200,
        height: 630,
        alt: "Nzeribe Mmesoma Stella - Frontend Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nzeribe Mmesoma Stella - Frontend Engineer",
    description: "Portfolio of Nzeribe Mmesoma Stella - Frontend Engineer specializing in Web3 and modern technologies",
    images: ["/Animated me.png"],
    creator: "@starr_o25", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

