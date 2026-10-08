import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandIntro from "@/components/BrandIntro";
import ImageBanner from "@/components/ImageBanner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed announcement bar + navbar (heights: 2rem + 4rem = 6rem) */}
      <AnnouncementBar />
      <Navbar />

      {/* Main content pushed below fixed header */}
      <main>
        {/* 1. Hero */}
        <div className="mt-24">
          <HeroSection />
        </div>

        {/* 2. Shop by Category */}
        <CategorySection />

        {/* 3. New Arrivals */}
        <ProductSection />

        {/* 4. Featured Collection */}
        <FeaturedCollection />

        {/* 5. Brand Introduction */}
        <BrandIntro />

        {/* 6. Full-width Fashion Image Banner */}
        <ImageBanner />

        {/* 7. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}