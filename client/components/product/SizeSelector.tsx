"use client";

interface SizeSelectorProps {
  sizes: string[];
  productName: string;
  productSlug: string;
}

export default function SizeSelector({
  sizes,
  productName,
  productSlug,
}: SizeSelectorProps) {
  if (!sizes.length) {
    return null;
  }

  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] text-[#6B6862] font-semibold uppercase mb-3">
        Available Sizes
      </p>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={`Available sizes for ${productName}`}
      >
        {sizes.map((size) => (
          <SizeOption key={size} size={size} groupName={productSlug} />
        ))}
      </div>
    </div>
  );
}

function SizeOption({
  size,
  groupName,
}: {
  size: string;
  groupName: string;
}) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={`size-${groupName}`}
        value={size}
        className="peer sr-only"
      />
      <span className="inline-flex min-w-[2.75rem] items-center justify-center border border-[#D9D5CE] px-3 py-2.5 text-xs font-medium tracking-wide text-[#171717] transition-all duration-200 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#9A7653] peer-checked:border-[#171717] peer-checked:bg-[#171717] peer-checked:text-[#F7F5F1] hover:border-[#9A7653]">
        {size}
      </span>
    </label>
  );
}
