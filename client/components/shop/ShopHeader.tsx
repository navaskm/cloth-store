interface ShopHeaderProps {
  productCount: number;
}

export default function ShopHeader({ productCount }: ShopHeaderProps) {
  return (
    <header className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-10 pb-12 lg:pt-14 lg:pb-16">
      <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-5 font-medium uppercase">
        THE COLLECTION
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#171717] leading-tight tracking-tight mb-4">
            SHOP MEN&apos;S
            <br className="hidden md:block" /> COLLECTION
          </h1>
          <p className="text-sm text-[#6B6862] leading-relaxed max-w-xl">
            Explore our complete collection of contemporary menswear, from
            everyday essentials to refined wardrobe staples.
          </p>
        </div>
        <p className="text-xs tracking-[0.2em] text-[#6B6862] font-medium whitespace-nowrap self-end pb-1">
          {productCount} PRODUCTS
        </p>
      </div>
    </header>
  );
}
