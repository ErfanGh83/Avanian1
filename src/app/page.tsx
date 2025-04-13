import NavBar from "@/components/landing/nav/NavBar";
import CompanySection from "@/components/landing/sections/CompanySection";
import QuickAccessSection from "@/components/landing/sections/QuickAccessSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <CompanySection />
      <QuickAccessSection />
    </div>
  );
}
