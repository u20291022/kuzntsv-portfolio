import { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Metadata, Viewport } from "next";
import "./globals.css";
import ScaleManager from "@/utils/ScaleManager";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Welcome!",
    description: "kuzntsv portfolio",
    icons: {
        icon: "favicon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <body className={`${manrope.variable} ${manrope.className}`}>
                <ScaleManager />
                {children}
            </body>
        </html>
    );
}
