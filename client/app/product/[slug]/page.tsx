import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import SizeGuide from "@/components/product/SizeGuide";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductEditorialCTA from "@/components/product/ProductEditorialCTA";
import {
  getProductBySlug,
  getRelatedProducts,
  getSizeGuideForProduct,
} from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found — FORMEN" };
  }
  return {
    title: `${product.name} — FORMEN`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const sizeGuide = getSizeGuideForProduct(product);
  const categoryHref = `/category/${product.categorySlug}`;

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 bg-[#F7F5F1] min-h-screen overflow-x-hidden">

        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-8 pb-12 lg:pt-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 xl:gap-16 items-start">
            <ProductGallery
              productName={product.name}
              images={product.images}
            />
            <ProductInfo product={product} />
          </div>
        </section>

        <ProductDetails product={product} />
        <SizeGuide guide={sizeGuide} />
        <RelatedProducts products={related} />
        <ProductEditorialCTA />
      </main>

      <Footer />
    </>
  );
}
