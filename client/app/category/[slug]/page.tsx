import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryNavigation from "@/components/category/CategoryNavigation";
import CategoryClient from "@/components/category/CategoryClient";
import CategoryEditorial from "@/components/category/CategoryEditorial";
import {
  getCategories,
  getAllCategorySlugs,
  getCategoryBySlug,
  getProductsByCategorySlug,
} from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (await getAllCategorySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
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
  const [category, categories] = await Promise.all([
    getCategoryBySlug(slug),
    getCategories(),
  ]);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategorySlug(slug);

  return (
    <>
      <Navbar />

      <main className="mt-16 bg-[#F7F5F1] min-h-screen overflow-x-hidden">
        <CategoryNavigation activeSlug={category.slug} categories={categories} />
        <CategoryClient categoryName={category.name} products={products} />
        <CategoryEditorial category={category} />
      </main>

      <Footer />
    </>
  );
}
