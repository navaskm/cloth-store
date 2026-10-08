import Link from "next/link";
import Image from "next/image";

export default function ImageBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 55vh, 650px)" }}
      aria-label="Defined by Detail — Fashion Editorial"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1800&q=85"
        alt="Premium men's fashion editorial — Defined by Detail"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#171717]/55"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="px-5">
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#F7F5F1] leading-tight mb-5 tracking-tight">
            DEFINED BY DETAIL.
          </h2>
          <p className="text-sm md:text-base text-[#D9D5CE] mb-10 tracking-wide font-light max-w-sm mx-auto">
            Discover pieces designed with intention.
          </p>
          <Link
            href="/shop"
            className="inline-block border border-[#F7F5F1] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#F7F5F1] hover:text-[#171717] transition-all duration-300"
          >
            DISCOVER THE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
}
