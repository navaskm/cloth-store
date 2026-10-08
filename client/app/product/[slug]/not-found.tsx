import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductNotFound() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 bg-[#F7F5F1] min-h-[60vh] flex items-center">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-24 text-center w-full">
          <p className="text-[10px] tracking-[0.25em] text-[#9A7653] font-semibold uppercase mb-4">
            404
          </p>
          <h1 className="font-editorial text-3xl md:text-4xl text-[#171717] tracking-tight mb-4">
            Product Not Found
          </h1>
          <p className="text-sm text-[#6B6862] leading-relaxed max-w-md mx-auto mb-10">
            The product you&apos;re looking for may no longer be available.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-10 py-4 hover:bg-[#9A7653] transition-all duration-300"
          >
            Back to Shop
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
