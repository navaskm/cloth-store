import Link from "next/link";
import Image from "next/image";

export default function FeaturedCollection() {
  return (
    <section
      className="bg-[#F7F5F1] py-0 overflow-hidden"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-screen-xl mx-auto lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
          {/* Left — Image */}
          <div className="relative overflow-hidden min-h-[420px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85"
              alt="Everyday Collection — Modern menswear essentials"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right — Text */}
          <div className="flex items-center bg-[#EFECE6] px-8 py-16 md:px-14 lg:px-16">
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-6 font-medium uppercase">
                THE EVERYDAY COLLECTION
              </p>
              <h2
                id="featured-heading"
                className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[#171717] leading-tight mb-6"
              >
                ESSENTIALS,
                <br />
                REFINED.
              </h2>
              <p className="text-sm md:text-base text-[#6B6862] leading-relaxed mb-10">
                Thoughtfully selected pieces designed to move effortlessly from
                everyday moments to evening occasions.
              </p>
              <Link
                href="/shop"
                className="inline-block border border-[#171717] text-[#171717] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#171717] hover:text-[#F7F5F1] transition-all duration-300"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
