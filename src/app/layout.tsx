import { Providers } from "@/components/providers";
import { cn } from "@heroui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="dark"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* <Script
          src="//unpkg.com/react-scan/dist/auto.global.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        /> */}
      </head>
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground antialiased",
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}