import AchievementSection from "@/components/achievement-section";
import CalenderSection from "@/components/calender-section";
import Clients from "@/components/clients";
import Community from "@/components/community";
import CustomerSection from "@/components/customer-section";
import Hero from "@/components/hero";
import UnlockSection from "@/components/unlock-section";

export default function IndexPage() {
  return (
    <div className="w-full mx-auto max-w-screen-xl py-4 px-4 md:py-6 md:px-6">
      <div className="flex flex-1 flex-col space-y-9">
        <Hero />
        <Clients />
        <Community />
        <UnlockSection />
        <AchievementSection />
        <CalenderSection />
        <CustomerSection/>
        <div>Community Updates</div>
      </div>
    </div>
  );
}
