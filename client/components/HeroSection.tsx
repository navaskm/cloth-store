import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(500px, 75vh, 750px)" }}
      aria-label="Hero — Men's Collection"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1800&q=85"
        alt="Stylish man in contemporary menswear"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#171717]/65 via-[#171717]/25 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-screen-xl mx-auto w-full px-5 lg:px-10">
          <div className="max-w-lg animate-[fadeSlideUp_0.8s_ease_forwards]">
            {/* Small label */}
            <p className="text-[10px] tracking-[0.35em] text-[#D9D5CE] mb-5 font-medium uppercase">
              MEN&apos;S COLLECTION
            </p>

            {/* Main heading */}
            <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#F7F5F1] leading-[1.05] mb-5 tracking-tight">
              STYLE, WITHOUT
              <br />
              COMPROMISE.
            </h1>

            {/* Supporting text */}
            <p className="text-sm md:text-base text-[#D9D5CE]/90 mb-8 leading-relaxed font-light tracking-wide max-w-sm">
              Contemporary menswear designed for everyday confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/shop"
                className="inline-block bg-[#F7F5F1] text-[#171717] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#9A7653] hover:text-[#F7F5F1] transition-all duration-300"
              >
                EXPLORE COLLECTION
              </Link>
              <Link
                href="/new-arrivals"
                className="text-xs tracking-[0.15em] text-[#F7F5F1]/80 hover:text-[#F7F5F1] transition-colors duration-200 font-medium border-b border-[#F7F5F1]/40 hover:border-[#F7F5F1] pb-0.5"
              >
                NEW ARRIVALS →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
