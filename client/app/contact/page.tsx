import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type ContactChannel = {
  label: string;
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Contact | FORMEN",
  description:
    "Get in touch with FORMEN for store visits, product questions and personal styling guidance.",
};

const contactChannels: ContactChannel[] = [
  {
    label: "STORE VISITS",
    title: "SEE IT IN PERSON.",
    description:
      "Visit the physical store to explore the collection up close, compare styles and find the pieces that feel right for you.",
  },
  {
    label: "PRODUCT QUESTIONS",
    title: "MAKE A BETTER CHOICE.",
    description:
      "Ask about fit, fabric, colour or availability before you make the trip. We are happy to help you narrow things down.",
  },
  {
    label: "STYLE GUIDANCE",
    title: "FIND YOUR DIRECTION.",
    description:
      "Looking for something specific? Share what you have in mind and we can point you towards a considered starting place.",
  },
];

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 min-h-screen bg-[#F7F5F1]">
        <section className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end">
            <div className="order-2 lg:order-1 max-w-xl">
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                GET IN TOUCH
              </p>
              <h1 className="mb-7 font-editorial text-5xl leading-[0.94] tracking-[-0.05em] text-[#171717] md:text-6xl lg:text-[5rem]">
                LET&apos;S TALK
                <br />
                STYLE.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-[#6B6862] md:text-lg">
                Whether you are planning a store visit, looking for a particular
                piece or simply want a second opinion, we are here to help.
              </p>
            </div>

            <div className="relative order-1 h-[390px] overflow-hidden md:h-[500px] lg:order-2 lg:h-[590px]">
              <Image
                src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=1400&q=85"
                alt="Man in a refined neutral outfit standing in a minimal fashion setting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#D9D5CE] bg-[#EFECE6]">
          <div className="max-w-screen-xl mx-auto px-5 py-16 lg:px-10 md:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                HOW WE CAN HELP
              </p>
              <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl lg:text-6xl">
                A MORE PERSONAL WAY TO SHOP.
              </h2>
            </div>

            <div className="mt-12 divide-y divide-[#D9D5CE] border-t border-[#D9D5CE]">
              {contactChannels.map((channel) => (
                <article
                  key={channel.label}
                  className="grid gap-5 py-7 md:grid-cols-[190px_1fr] md:gap-10"
                >
                  <p className="pt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#171717]">
                    {channel.label}
                  </p>
                  <div className="border-t border-[#D9D5CE] pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <h3 className="mb-3 font-editorial text-3xl leading-none tracking-[-0.03em] text-[#171717] md:text-4xl">
                      {channel.title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-[#6B6862]">
                      {channel.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-5 py-16 lg:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                STORE INQUIRIES
              </p>
              <h2 className="mb-6 font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl">
                START A CONVERSATION.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#6B6862] md:text-lg">
                Contact information for the physical store can be added here as
                soon as the final details are ready. For now, use this space for
                the preferred email, phone number or enquiry instructions.
              </p>

              <div className="mt-10 grid gap-7 border-t border-[#D9D5CE] pt-7 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#6B6862]">
                    EMAIL
                  </p>
                  <p className="text-sm text-[#171717]">Store email to be added</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#6B6862]">
                    PHONE
                  </p>
                  <p className="text-sm text-[#171717]">Store phone to be added</p>
                </div>
              </div>
            </div>

            <aside className="border border-[#D9D5CE] bg-[#F3EFEA] p-8 md:p-10">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#171717]">
                BEFORE YOU VISIT
              </p>
              <h3 className="mb-5 font-editorial text-3xl leading-none tracking-[-0.03em] text-[#171717] md:text-4xl">
                EXPLORE THE COLLECTION.
              </h3>
              <p className="text-base leading-relaxed text-[#6B6862]">
                Browse the current edit online, then visit the store to see the
                pieces in person and discover what works for your wardrobe.
              </p>
              <Link
                href="/shop"
                className="mt-8 inline-block bg-[#171717] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#F7F5F1] transition-all duration-300 hover:bg-[#9A7653]"
              >
                VIEW THE COLLECTION
              </Link>
            </aside>
          </div>
        </section>

        <section className="border-t border-[#D9D5CE] bg-[#181818] text-[#F7F5F1]">
          <div className="max-w-screen-xl mx-auto px-5 py-20 lg:px-10 md:py-28">
            <p className="max-w-5xl font-editorial text-5xl leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-[6rem]">
              GOOD STYLE
              <br />
              STARTS WITH
              <br />
              A CONVERSATION.
            </p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#D9D5CE] md:text-lg">
              Find a considered collection of modern menswear, then make it your
              own.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
