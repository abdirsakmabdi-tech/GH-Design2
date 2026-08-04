import { HeroSlider } from "@/components/HeroSlider";
import { AboutTeaser } from "@/components/AboutTeaser";
import { OurWork } from "@/components/OurWork";
import { LeadershipSlider } from "@/components/LeadershipSlider";
import { ObjectivesStackSection } from "@/components/ObjectivesStackSection";
import { NewsEvents } from "@/components/NewsEvents";
import { PurposePanels } from "@/components/PurposePanels";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <main id="content-below-hero">
        <AboutTeaser />
        <OurWork />
        <LeadershipSlider />
        <ObjectivesStackSection />
        <NewsEvents />
        <PurposePanels />
      </main>
    </>
  );
}
