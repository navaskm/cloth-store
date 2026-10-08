import Link from "next/link";
import Image from "next/image";

export default function ShopEditorialCTA() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(380px, 45vh, 560px)" }}
      aria-label="Explore New Arrivals"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1800&q=85"
        alt="Premium men's fashion — Everyday style, refined"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-[#171717]/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="px-5">
          <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-5 font-medium uppercase">
            JUST ARRIVED
          </p>
          <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[#F7F5F1] leading-tight mb-5 tracking-tight">
            EVERYDAY STYLE, REFINED.
          </h2>
          <p className="text-sm text-[#D9D5CE] mb-10 tracking-wide font-light max-w-sm mx-auto leading-relaxed">
            Discover pieces designed to become part of your everyday wardrobe.
          </p>
          <Link
            href="/new-arrivals"
            className="inline-block border border-[#F7F5F1] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#F7F5F1] hover:text-[#171717] transition-all duration-300"
          >
            EXPLORE NEW ARRIVALS
          </Link>
        </div>
      </div>
    </section>
  );
}
