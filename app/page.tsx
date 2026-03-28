import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { SectionLinks } from "@/components/section-links";
import { UniqueFeatures } from "@/components/unique-features";
import { NewsEvents } from "@/components/news-events";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionLinks />
      <UniqueFeatures />
      <NewsEvents />
      <Footer />
    </>
  );
}
