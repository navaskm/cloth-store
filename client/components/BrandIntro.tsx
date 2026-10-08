import Link from "next/link";

export default function BrandIntro() {
  return (
    <section
      className="bg-[#F7F5F1] py-24 lg:py-36"
      aria-labelledby="brand-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="brand-heading"
            className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#171717] leading-tight mb-8 tracking-tight"
          >
            STYLE THAT SPEAKS
            <br />
            FOR ITSELF.
          </h2>
          <p className="text-sm md:text-base text-[#6B6862] leading-relaxed mb-10 max-w-xl mx-auto">
            We curate contemporary men&apos;s clothing with a focus on quality,
            comfort and timeless design. Each piece in our collection is
            selected to complement the way modern men live.
          </p>
          <Link
            href="/about"
            className="inline-block text-xs tracking-[0.2em] text-[#171717] hover:text-[#9A7653] transition-colors duration-200 font-semibold border-b border-[#171717] hover:border-[#9A7653] pb-0.5"
          >
            OUR STORY →
          </Link>
        </div>
      </div>
    </section>
  );
}
