import { ThemeProviders } from "@/providers/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className="w-screen h-screen">
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
