import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/lib/catalogData";
import { getProducts } from "@/lib/api";
import type { SortOption } from "@/lib/types";

type SearchParams = {
  q?: string | string[];
  category?: string | string[];
  sort?: string | string[];
};

interface SearchPageProps {
  searchParams: Promise<SearchParams>;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A–Z" },
];

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function isSortOption(value: string): value is SortOption {
  return sortOptions.some((option) => option.value === value);
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = firstParam(params.q).trim();
  return {
    title: query ? `Search results for “${query}” | FORMEN` : "Search Men's Clothing | FORMEN",
    description: query
      ? `Explore FORMEN search results for ${query}.`
      : "Search FORMEN's collection of contemporary men's clothing.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = firstParam(params.q).trim();
  const category = firstParam(params.category);
  const requestedSort = firstParam(params.sort);
  const sort: SortOption = isSortOption(requestedSort) ? requestedSort : "recommended";

  const results = await getProducts({ query, category, sort });

  const hasQuery = query.length > 0;
  const resultLabel = results.length === 1 ? "piece" : "pieces";

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 min-h-screen overflow-x-hidden bg-[#F7F5F1]">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />

        <section className="max-w-screen-xl mx-auto px-5 pt-10 pb-12 lg:px-10 md:pt-14 md:pb-16">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
            {hasQuery ? "SEARCH RESULTS" : "FIND YOUR STYLE"}
          </p>
          <h1 className="max-w-4xl font-editorial text-5xl leading-[0.94] tracking-[-0.05em] text-[#171717] md:text-6xl lg:text-[5rem]">
            {hasQuery ? <>RESULTS FOR<br />&ldquo;{query}&rdquo;</> : <>WHAT ARE YOU<br />LOOKING FOR?</>}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6B6862] md:text-lg">
            Search our collection by product, category, colour, fabric or style.
          </p>

          <form action="/search" method="get" className="mt-10 flex max-w-3xl border-b border-[#171717]">
            <label htmlFor="search-query" className="sr-only">Search products</label>
            <input
              id="search-query"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search products..."
              className="min-w-0 flex-1 bg-transparent py-4 text-base text-[#171717] outline-none placeholder:text-[#6B6862]"
            />
            <button type="submit" aria-label="Submit product search" className="shrink-0 px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] transition-colors hover:text-[#9A7653]">
              Search →
            </button>
          </form>
        </section>

        {hasQuery ? (
          <>
            <section className="border-y border-[#D9D5CE]">
              <div className="max-w-screen-xl mx-auto flex flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6862]">{results.length} {resultLabel}</p>
                <form action="/search" method="get" className="flex flex-wrap items-center gap-3">
                  <input type="hidden" name="q" value={query} />
                  <label htmlFor="category-filter" className="sr-only">Filter by category</label>
                  <select id="category-filter" name="category" defaultValue={category} className="border border-[#D9D5CE] bg-transparent px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]">
                    <option value="">All categories</option>
                    {CATEGORIES.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
                  </select>
                  <label htmlFor="sort-results" className="sr-only">Sort search results</label>
                  <select id="sort-results" name="sort" defaultValue={sort} className="border border-[#D9D5CE] bg-transparent px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#171717]">
                    {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                  <button type="submit" className="bg-[#171717] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F7F5F1] transition-colors hover:bg-[#9A7653]">Apply</button>
                </form>
              </div>
            </section>

            {results.length > 0 ? (
              <section className="max-w-screen-xl mx-auto px-5 py-12 lg:px-10 md:py-16" aria-labelledby="results-heading">
                <h2 id="results-heading" className="sr-only">Search results for {query}</h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-6" role="list">
                  {results.map((product) => <div key={product.id} role="listitem"><ProductCard product={product} /></div>)}
                </div>
              </section>
            ) : <NoResults query={query} />}
          </>
        ) : <SearchLanding />}

        <section className="border-t border-[#D9D5CE] bg-[#EFECE6]">
          <div className="max-w-screen-xl mx-auto flex flex-col gap-6 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10 md:py-20">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6B6862]">LOOKING FOR SOMETHING SPECIFIC?</p>
              <p className="max-w-xl font-editorial text-3xl leading-none tracking-[-0.03em] text-[#171717] md:text-4xl">We are happy to help you find your direction.</p>
            </div>
            <Link href="/contact" className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] transition-colors hover:text-[#9A7653]">Contact the store →</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SearchLanding() {
  return (
    <section className="max-w-screen-xl mx-auto px-5 pb-20 lg:px-10 md:pb-28">
      <div className="border-t border-[#D9D5CE] pt-8">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6B6862]">TRY BROWSING</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Browse categories">
          {CATEGORIES.map((category) => <Link key={category.slug} href={`/category/${category.slug}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] transition-colors hover:text-[#9A7653]">{category.name} →</Link>)}
        </nav>
      </div>
    </section>
  );
}

function NoResults({ query }: { query: string }) {
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-16 lg:px-10 md:py-24">
      <div className="max-w-2xl border-t border-[#D9D5CE] pt-8">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6B6862]">NO RESULTS</p>
        <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl">NOTHING MATCHED &ldquo;{query}&rdquo;.</h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B6862] md:text-lg">Try searching for a different product, category, colour or style.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link href="/search" className="bg-[#171717] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F5F1] transition-colors hover:bg-[#9A7653]">Clear search</Link>
          <Link href="/shop" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] transition-colors hover:text-[#9A7653]">Browse all products →</Link>
        </div>
        <div className="mt-14 border-t border-[#D9D5CE] pt-7">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6B6862]">TRY BROWSING</p>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {CATEGORIES.map((category) => <Link key={category.slug} href={`/category/${category.slug}`} className="text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] transition-colors hover:text-[#9A7653]">{category.name}</Link>)}
          </div>
        </div>
      </div>
    </section>
  );
}
