interface EmptyProductsProps {
  onClearFilters: () => void;
}

export default function EmptyProducts({ onClearFilters }: EmptyProductsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center px-5">
      <p className="font-editorial text-3xl text-[#171717] mb-4">
        NO PRODUCTS FOUND
      </p>
      <p className="text-sm text-[#6B6862] mb-10 max-w-xs leading-relaxed">
        Try adjusting your search or filters to find what you&apos;re looking for.
      </p>
      <button
        onClick={onClearFilters}
        className="border border-[#171717] text-[#171717] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#171717] hover:text-[#F7F5F1] transition-all duration-300"
      >
        CLEAR FILTERS
      </button>
    </div>
  );
}
