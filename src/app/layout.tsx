import { ReactNode } from "react";
import { Manrope } from "next/font/google"
import { Metadata } from "next";
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600"]
})

export const metadata: Metadata = {
  title: "Welcome!",
  description: "kuzntsv portfolio",
  icons: {
    icon: "favicon.png"
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body className={`${manrope.variable} ${manrope.className}`}>
        {children}
      </body>
    </html>
  )
}