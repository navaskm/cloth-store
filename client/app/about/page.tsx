import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type PhilosophyItem = {
  number: string;
  title: string;
  description: string;
};

type ApproachItem = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "About Us — FORMEN",
  description:
    "Learn about FORMEN, a curated contemporary menswear store focused on quality, simplicity, and everyday confidence.",
};

const philosophyItems: PhilosophyItem[] = [
  {
    number: "01",
    title: "QUALITY",
    description:
      "Pieces chosen with attention to fabric, construction and everyday wearability.",
  },
  {
    number: "02",
    title: "SIMPLICITY",
    description:
      "Clean silhouettes and versatile designs that work beyond a single season.",
  },
  {
    number: "03",
    title: "CONFIDENCE",
    description:
      "Clothing should feel natural, comfortable and unmistakably yours.",
  },
  {
    number: "04",
    title: "VERSATILITY",
    description:
      "Pieces that move easily between everyday moments and more refined occasions.",
  },
];

const approachItems: ApproachItem[] = [
  {
    title: "GOOD FABRICS",
    description:
      "Materials selected for comfort, feel and everyday practicality.",
  },
  {
    title: "CLEAN FITS",
    description:
      "Silhouettes that feel current without being overly trend-driven.",
  },
  {
    title: "REFINED DETAILS",
    description:
      "Small details that make a simple piece feel considered.",
  },
  {
    title: "EASY VERSATILITY",
    description:
      "Styles that can move naturally from casual days to more polished occasions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 bg-[#F7F5F1] min-h-screen">

        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-10 pb-16 md:pt-12 md:pb-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-end">
            <div className="max-w-xl order-2 lg:order-1">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-6">
                OUR STORY
              </p>
              <h1 className="font-editorial text-5xl md:text-6xl lg:text-[5rem] leading-[0.96] tracking-[-0.04em] text-[#171717] mb-6">
                STYLE WITH
                <br />
                INTENTION.
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-[#6B6862] max-w-md">
                Contemporary menswear selected for the way modern men live,
                move and express themselves.
              </p>
            </div>

            <div className="relative h-[420px] md:h-[520px] lg:h-[640px] overflow-hidden order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&q=85"
                alt="Contemporary menswear portrait of a man in a tailored outfit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#D9D5CE]">
          <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-5">
                WHO WE ARE
              </p>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.04em] text-[#171717] mb-8">
                A MODERN APPROACH TO MENSWEAR.
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#6B6862] max-w-3xl">
                <p>
                  We believe getting dressed should feel effortless. Our
                  collection brings together contemporary silhouettes,
                  versatile essentials and refined everyday pieces chosen for
                  modern wardrobes.
                </p>
                <p>
                  From everyday casualwear to more considered looks, we focus
                  on clothing that feels relevant today while remaining easy to
                  wear season after season.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#D9D5CE] bg-[#F3EFEA]">
          <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-24">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-6">
              WHAT WE BELIEVE
            </p>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.04em] text-[#171717] max-w-3xl">
              GOOD STYLE DOES NOT NEED TO BE COMPLICATED.
            </h2>

            <div className="mt-12 space-y-6">
              {philosophyItems.map((item) => (
                <div
                  key={item.number}
                  className="grid md:grid-cols-[90px_1fr] gap-6 md:gap-10 border-t border-[#D9D5CE] pt-6"
                >
                  <span className="font-editorial text-3xl md:text-4xl text-[#171717] leading-none pt-2">
                    {item.number}
                  </span>
                  <div className="border-t md:border-t-0 md:border-l border-[#D9D5CE] md:pl-10 pt-5 md:pt-0">
                    <h3 className="text-xs md:text-sm tracking-[0.22em] uppercase text-[#171717] mb-3 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#6B6862] leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div className="relative h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=85"
                alt="Man wearing a refined casual outfit in a modern editorial setting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-5">
                THE COLLECTION
              </p>
              <h2 className="font-editorial text-4xl md:text-5xl leading-[0.98] tracking-[-0.04em] text-[#171717] mb-6">
                DESIGNED FOR EVERYDAY LIFE.
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[#6B6862]">
                <p>
                  Our collection is built around the idea that great menswear
                  should work in real life. Comfortable enough for everyday
                  routines, considered enough to make an impression.
                </p>
                <p>
                  We look for pieces that balance modern proportions, wearable
                  colors, useful details and timeless appeal.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 hover:bg-[#9A7653]"
                >
                  EXPLORE THE COLLECTION →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#D9D5CE] bg-[#F7F5F1]">
          <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-24">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-5">
              OUR APPROACH
            </p>
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.04em] text-[#171717] max-w-3xl">
              LESS NOISE. BETTER CHOICES.
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#6B6862]">
              We focus on pieces that earn their place in a modern wardrobe.
            </p>

            <div className="mt-10 divide-y divide-[#D9D5CE]">
              {approachItems.map((item) => (
                <div
                  key={item.title}
                  className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-6"
                >
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#171717] font-medium pt-2">
                    {item.title}
                  </p>
                  <p className="text-base leading-relaxed text-[#6B6862] border-t md:border-t-0 md:border-l border-[#D9D5CE] md:pl-10 pt-4 md:pt-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#181818] text-[#F7F5F1]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=85"
              alt="Close-up of premium menswear fabric and tailoring details"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-[#181818]/65" />
          </div>

          <div className="relative max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D9D5CE] font-medium mb-5">
                THE DETAILS MATTER
              </p>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[0.96] tracking-[-0.04em] text-[#F7F5F1] mb-6">
                DEFINED BY THE DETAILS.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#D9D5CE] max-w-xl">
                From fabric texture and fit to finishing touches, we believe the
                difference is often found in the details.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-5">
                VISIT US
              </p>
              <h2 className="font-editorial text-4xl md:text-5xl leading-[0.98] tracking-[-0.04em] text-[#171717] mb-6">
                MORE THAN A COLLECTION.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[#6B6862] max-w-xl">
                While our website gives you a look at the collection, our
                physical store gives you the opportunity to see the pieces up
                close, explore different styles and find what feels right for
                you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 hover:bg-[#9A7653]"
                >
                  VISIT THE STORE →
                </Link>
              </div>
            </div>

            <div className="border border-[#D9D5CE] bg-[#F3EFEA] p-8 md:p-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#171717] font-medium mb-4">
                STORE VISIT
              </p>
              <p className="font-editorial text-3xl md:text-4xl leading-none text-[#171717] mb-4">
                SEE THE PIECES IN PERSON.
              </p>
              <p className="text-base leading-relaxed text-[#6B6862] mb-5">
                Visit the boutique to experience the collection in a more personal
                setting and explore what fits your everyday rhythm.
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#6B6862] font-medium">
                Details for the physical location can be updated here.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-b border-[#D9D5CE] bg-[#EFECE6]">
          <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-20 md:py-28">
            <p className="font-editorial text-5xl md:text-6xl lg:text-[6rem] leading-[0.9] tracking-[-0.06em] text-[#171717] max-w-5xl">
              GOOD STYLE
              <br />
              DOESN&apos;T NEED
              <br />
              TO TRY TOO HARD.
            </p>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#6B6862]">
              Explore a considered collection of modern menswear designed for
              everyday confidence.
            </p>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 md:py-20">
          <div className="border border-[#D9D5CE] bg-[#F3EFEA] p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#6B6862] font-medium mb-5">
                  DISCOVER MORE
                </p>
                <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[0.96] tracking-[-0.04em] text-[#171717] mb-4">
                  FIND YOUR EVERYDAY STYLE.
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[#6B6862]">
                  Explore our collection of contemporary men&apos;s clothing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link
                  href="/shop"
                  className="inline-block bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 transition-all duration-300 hover:bg-[#9A7653]"
                >
                  VIEW THE COLLECTION
                </Link>
                <Link
                  href="/shop?collection=new"
                  className="text-xs tracking-[0.15em] text-[#171717] hover:text-[#9A7653] transition-colors duration-200 font-medium border-b border-[#171717]/40 hover:border-[#9A7653] pb-0.5"
                >
                  NEW ARRIVALS →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
