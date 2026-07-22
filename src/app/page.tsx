import { HeroSlider } from "@/components/HeroSlider";
import { AboutTeaser } from "@/components/AboutTeaser";
import { OurWork } from "@/components/OurWork";
import { LeadershipSlider } from "@/components/LeadershipSlider";
import { PurposePanels } from "@/components/PurposePanels";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <main id="content-below-hero">
        <AboutTeaser />
        <OurWork />
        <LeadershipSlider />
        <PurposePanels />
      </main>
    </>
  );
}
