import { ThemeProviders } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Avanian",
  description: "Best app for awesome users",
  keywords: ["Next.js", "Vazirmatn", "Tailwind"],
  authors: [{ name: "Your Name", url: "https://your-site.com" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className="w-screen h-screen font-vazirmatn">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
