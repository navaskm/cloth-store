import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import BrandIntro from "@/components/BrandIntro";
import ImageBanner from "@/components/ImageBanner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mt-16">
          <HeroSection />
        </div>
        <TrendingSection />
        <CategorySection />
        <ProductSection />
        <BrandIntro />
        <ImageBanner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
