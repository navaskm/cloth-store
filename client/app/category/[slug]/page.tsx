import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryNavigation from "@/components/category/CategoryNavigation";
import CategoryClient from "@/components/category/CategoryClient";
import CategoryEditorial from "@/components/category/CategoryEditorial";
import RelatedCategories from "@/components/category/RelatedCategories";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getProductsByCategorySlug,
  getRelatedCategories,
} from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "Category Not Found — FORMEN" };
  }
  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategorySlug(slug);
  const related = getRelatedCategories(category);

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 bg-[#F7F5F1] min-h-screen overflow-x-hidden">
        <CategoryHero category={category} productCount={products.length} />
        <CategoryNavigation activeSlug={category.slug} />
        <CategoryClient categoryName={category.name} products={products} />
        <CategoryEditorial category={category} />
        <RelatedCategories categories={related} />
      </main>

      <Footer />
    </>
  );
}
