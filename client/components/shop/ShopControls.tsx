"use client";

import SortSelect from "@/components/shop/SortSelect";
import { SortOption, FilterState } from "@/lib/types";

interface ShopControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortValue: SortOption;
  onSortChange: (value: SortOption) => void;
  onOpenFilter: () => void;
  activeFilterCount: number;
  filters: FilterState;
  searchPlaceholder?: string;
  searchInputId?: string;
}

export default function ShopControls({
  searchQuery,
  onSearchChange,
  sortValue,
  onSortChange,
  onOpenFilter,
  activeFilterCount,
  searchPlaceholder = "Search products...",
  searchInputId = "shop-search",
}: ShopControlsProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Search */}
      <div className="relative flex-1 min-w-[180px] max-w-xs">
        <label htmlFor={searchInputId} className="sr-only">
          {searchPlaceholder}
        </label>
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6862] pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          id={searchInputId}
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="
            w-full border border-[#D9D5CE] bg-transparent
            pl-9 pr-4 py-2.5
            text-xs tracking-wide text-[#171717] placeholder:text-[#6B6862]
            hover:border-[#171717] focus:outline-none focus:border-[#171717]
            transition-colors duration-200
          "
        />
      </div>

      {/* Sort */}
      <SortSelect value={sortValue} onChange={onSortChange} />

      {/* Filter */}
      <button
        onClick={onOpenFilter}
        className={`
          flex items-center gap-2 border px-4 py-2.5
          text-[10px] tracking-[0.15em] font-medium
          transition-colors duration-200
          ${
            activeFilterCount > 0
              ? "border-[#171717] text-[#171717] bg-[#171717] text-[#F7F5F1]"
              : "border-[#D9D5CE] text-[#6B6862] hover:border-[#171717] hover:text-[#171717]"
          }
        `}
        aria-label={`Open filters${activeFilterCount > 0 ? ` (${activeFilterCount} active)` : ""}`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="10" y1="18" x2="14" y2="18" />
        </svg>
        FILTER
        {activeFilterCount > 0 && (
          <span className="bg-[#F7F5F1] text-[#171717] rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-bold leading-none">
            {activeFilterCount}
          </span>
        )}
      </button>
    </div>
  );
}
