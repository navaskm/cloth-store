"use client";

import { SortOption } from "@/lib/types";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A–Z" },
];

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative">
      <label htmlFor="sort-select" className="sr-only">
        Sort products
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="
          appearance-none bg-transparent border border-[#D9D5CE]
          text-[10px] tracking-[0.15em] text-[#171717] font-medium
          pl-4 pr-10 py-2.5 cursor-pointer
          hover:border-[#171717] focus:outline-none focus:border-[#171717]
          transition-colors duration-200
        "
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label.toUpperCase()}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6862]"
        aria-hidden="true"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
}
