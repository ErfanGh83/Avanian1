import { ThemeProviders } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Avanian",
  description: "Best app for awesome parents",
  keywords: ["Next.js", "Vazirmatn", "Tailwind"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className="w-screen h-screen font-vazirmatn overflow-x-hidden overflow-y-auto">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
