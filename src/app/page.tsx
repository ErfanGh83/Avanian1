import NavBar from "@/components/landing/nav/NavBar";
import CompanySection from "@/components/landing/sections/CompanySection";
import LoginSection from "@/components/landing/sections/LoginSection";
import QuickAccessSection from "@/components/landing/sections/QuickAccessSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <CompanySection />
      <QuickAccessSection />
      <LoginSection  />
    </div>
  );
}
