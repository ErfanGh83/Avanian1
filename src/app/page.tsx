import NavBar from "@/components/landing/nav/NavBar";
import ChatBotSection from "@/components/landing/sections/ChatBotSection";
import CompanySection from "@/components/landing/sections/CompanySection";
import LoginSection from "@/components/landing/sections/LoginSection";
import QuickAccessSection from "@/components/landing/sections/QuickAccessSection";
import ShopSection from "@/components/landing/sections/ShopSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <CompanySection />
      <QuickAccessSection />
      <LoginSection />
      <ChatBotSection />
      <ShopSection />
    </div>
  );
}
