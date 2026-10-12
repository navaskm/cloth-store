import ProductCard from "@/components/ProductCard";
import { getTrendingProducts } from "@/lib/api";

export default async function TrendingSection() {
  const trendingProducts = await getTrendingProducts();

  return (
    <section
      className="bg-[#EFECE6] py-20 lg:py-28"
      aria-labelledby="trending-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 lg:mb-14">
          <div className="max-w-md">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#9A7653]">
              MOST WANTED
            </p>
            <h2
              id="trending-heading"
              className="font-editorial text-3xl leading-tight text-[#171717] md:text-4xl"
            >
              TRENDING NOW
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6B6862]">
              The pieces everyone is reaching for right now.
            </p>
          </div>
          <span className="hidden pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6862] md:block">
            SCROLL TO EXPLORE →
          </span>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide lg:-mx-10 lg:gap-5 lg:px-10">
          {trendingProducts.map((product) => (
            <div
              key={product._id}
              className="w-[72vw] min-w-[72vw] snap-start sm:w-[42vw] sm:min-w-[42vw] md:w-[29vw] md:min-w-[29vw] lg:w-[23%] lg:min-w-[23%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
