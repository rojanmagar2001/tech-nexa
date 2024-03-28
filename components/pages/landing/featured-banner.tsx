import data from "@/data/image.json";

import InteractiveMarquee from "@/components/common/animations/marquee/InteractiveMarquee";
import SearchBanner from "./search-banner";

export default function FeaturedBanner() {
  const imageGallery1 = data.images.slice(0, 10);
  const imageGallery2 = data.images.slice(20, 30);
  const imageGallery3 = data.images.slice(30, 40);

  return (
    <section className="pt-4 pb-12 flex flex-col gap-y-12 sm:gap-y-8 lg:gap-y-10 relative">
      <InteractiveMarquee content={imageGallery1} />
      <InteractiveMarquee content={imageGallery2} reverse={true} />
      <InteractiveMarquee content={imageGallery3} />
      <SearchBanner />
    </section>
  );
}
