import HeroSection from "@/components/sections/hero-section";
import ProjectOverview from "@/components/sections/project-overview";
import ResearchPhases from "@/components/sections/research-phases";
import PartnerInstitutions from "@/components/sections/partner-institutions";
import KeyTakeaways from "@/components/sections/key-takeaways";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProjectOverview />
      <ResearchPhases />
      <PartnerInstitutions />
      <KeyTakeaways />
    </div>
  );
}
