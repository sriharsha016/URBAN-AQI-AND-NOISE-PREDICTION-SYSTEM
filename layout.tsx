import type React from "react"
import type { Metadata } from "next"
import { Sora, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Urban AQI & Noise — Cyberpunk Dashboard",
  description: "Clean dashboard with neon cyberpunk theme for AQI and noise prediction.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${sora.variable} ${jetbrains.variable} antialiased bg-background text-foreground min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-1 container mx-auto px-4 py-6">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
