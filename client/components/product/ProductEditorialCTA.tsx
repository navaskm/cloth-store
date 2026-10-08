import Link from "next/link";

export default function ProductEditorialCTA() {
  return (
    <section
      className="bg-[#181818] py-24 lg:py-32"
      aria-labelledby="product-cta-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 text-center">
        <h2
          id="product-cta-heading"
          className="font-editorial text-4xl md:text-5xl text-[#F7F5F1] leading-tight mb-6 tracking-tight"
        >
          Discover Your Everyday Style.
        </h2>
        <p className="text-sm text-[#6B6862] mb-10 max-w-md mx-auto leading-relaxed">
          Explore the complete collection of contemporary menswear.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-[#F7F5F1] text-[#171717] text-xs tracking-[0.2em] font-semibold px-10 py-4 hover:bg-[#9A7653] hover:text-[#F7F5F1] transition-all duration-300"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}
