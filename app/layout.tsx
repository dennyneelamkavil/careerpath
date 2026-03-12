import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Providers } from "@/components/providers/ClientProviders";
import ToastProvider from "@/components/providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Career Path",
  description: "Discover the Right Career Path for Your Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SidebarProvider>
            <Providers>{children}</Providers>
          </SidebarProvider>
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
