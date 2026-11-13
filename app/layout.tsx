import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vertex — Intelligent Learning Platform",
  description:
    "Search your learning in plain English. Vertex understands what you want to learn and finds the exact lessons across all your courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <ClerkProvider
          appearance={{
            cssLayerName: "clerk",
            variables: {
              colorPrimary: "#F97316",
              colorForeground: "#0F172A",
              colorMutedForeground: "#64748B",
              colorBackground: "#FAF8F6",
              colorInput: "#FFFFFF",
              colorInputForeground: "#0F172A",
              borderRadius: "0.625rem",
              fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
            },
            elements: {
              card: "border border-[#F1EDE8] shadow-vertex-md rounded-2xl bg-[#FAF8F6]",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
