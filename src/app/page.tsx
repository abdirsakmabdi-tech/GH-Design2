import { HeroSlider } from "@/components/HeroSlider";
import { AboutTeaser } from "@/components/AboutTeaser";
import { CountriesWeWorkIn } from "@/components/CountriesWeWorkIn";
import { ImpactSection } from "@/components/ImpactSection";
import { OurWork } from "@/components/OurWork";
import { LeadershipSlider } from "@/components/LeadershipSlider";
import { ObjectivesStackSection } from "@/components/ObjectivesStackSection";
import { NewsEvents } from "@/components/NewsEvents";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <main id="content-below-hero">
        <AboutTeaser />
        <CountriesWeWorkIn />
        <ImpactSection />
        <OurWork />
        <LeadershipSlider />
        <ObjectivesStackSection />
        <NewsEvents />
      </main>
    </>
  );
}
