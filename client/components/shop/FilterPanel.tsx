"use client";

import { FilterState, PriceRange } from "@/lib/types";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  brands: string[];
  sizes: string[];
  colors: string[];
  fits: string[];
  materials?: string[];
  priceRanges?: PriceRange[];
  onClearFilters: () => void;
}

const DEFAULT_PRICE_RANGES: PriceRange[] = [
  { label: "Under ₹1,000", min: null, max: 999 },
  { label: "₹1,000 – ₹2,000", min: 1000, max: 2000 },
  { label: "₹2,000 – ₹4,000", min: 2001, max: 4000 },
  { label: "₹4,000+", min: 4001, max: null },
];

export default function FilterPanel({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  brands,
  sizes,
  colors,
  fits,
  materials = [],
  priceRanges = DEFAULT_PRICE_RANGES,
  onClearFilters,
}: FilterPanelProps) {
  const setFilter = <K extends keyof FilterState>(key: K, val: FilterState[K]) => {
    onFilterChange({ ...filters, [key]: val });
  };

  const hasActiveFilters =
    filters.brand !== "" ||
    filters.size !== "" ||
    filters.color !== "" ||
    filters.material !== "" ||
    filters.fit !== "" ||
    filters.priceMin !== null ||
    filters.priceMax !== null;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-[#171717]/30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Product filters"
        className="fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-[#F7F5F1] flex flex-col shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-[#D9D5CE]">
          <h2 className="text-xs tracking-[0.2em] font-semibold text-[#171717]">
            FILTER
          </h2>
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-[10px] tracking-[0.15em] text-[#9A7653] hover:text-[#171717] transition-colors duration-200 font-medium"
              >
                CLEAR ALL
              </button>
            )}
            <button
              onClick={onClose}
              aria-label="Close filter panel"
              className="text-[#6B6862] hover:text-[#171717] transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-8">
          {/* Brand */}
          <FilterGroup label="BRAND">
            {brands.map((brand) => (
              <FilterChip
                key={brand}
                label={brand}
                active={filters.brand === brand}
                onClick={() =>
                  setFilter("brand", filters.brand === brand ? "" : brand)
                }
              />
            ))}
          </FilterGroup>

          {/* Size */}
          <FilterGroup label="SIZE">
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setFilter("size", filters.size === size ? "" : size)
                  }
                  className={`
                    min-w-[40px] px-3 py-2 text-[10px] tracking-[0.1em] font-medium border
                    transition-colors duration-200
                    ${
                      filters.size === size
                        ? "bg-[#171717] text-[#F7F5F1] border-[#171717]"
                        : "bg-transparent text-[#6B6862] border-[#D9D5CE] hover:border-[#171717] hover:text-[#171717]"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterGroup>

          {/* Color */}
          <FilterGroup label="COLOR">
            {colors.map((color) => (
              <FilterChip
                key={color}
                label={color}
                active={filters.color === color}
                onClick={() =>
                  setFilter("color", filters.color === color ? "" : color)
                }
              />
            ))}
          </FilterGroup>

          {materials.length > 0 && (
            <FilterGroup label="MATERIAL">
              {materials.map((material) => (
                <FilterChip
                  key={material}
                  label={material}
                  active={filters.material === material}
                  onClick={() =>
                    setFilter(
                      "material",
                      filters.material === material ? "" : material,
                    )
                  }
                />
              ))}
            </FilterGroup>
          )}

          {/* Price Range */}
          <FilterGroup label="PRICE RANGE">
            {priceRanges.map((range) => {
              const isActive =
                filters.priceMin === range.min &&
                filters.priceMax === range.max;
              return (
                <button
                  key={range.label}
                  onClick={() => {
                    if (isActive) {
                      onFilterChange({
                        ...filters,
                        priceMin: null,
                        priceMax: null,
                      });
                    } else {
                      onFilterChange({
                        ...filters,
                        priceMin: range.min,
                        priceMax: range.max,
                      });
                    }
                  }}
                  className={`
                    w-full text-left text-xs tracking-wide py-2.5 border-b border-[#D9D5CE]/60
                    transition-colors duration-200
                    ${
                      isActive
                        ? "text-[#171717] font-semibold"
                        : "text-[#6B6862] hover:text-[#171717] font-medium"
                    }
                  `}
                >
                  {range.label}
                  {isActive && (
                    <span className="ml-2 text-[#9A7653]">✓</span>
                  )}
                </button>
              );
            })}
          </FilterGroup>

          {/* Fit */}
          <FilterGroup label="FIT">
            {fits.map((fit) => (
              <FilterChip
                key={fit}
                label={fit}
                active={filters.fit === fit}
                onClick={() =>
                  setFilter("fit", filters.fit === fit ? "" : fit)
                }
              />
            ))}
          </FilterGroup>
        </div>

        {/* Apply button */}
        <div className="px-7 py-5 border-t border-[#D9D5CE]">
          <button
            onClick={onClose}
            className="w-full bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold py-4 hover:bg-[#9A7653] transition-colors duration-300"
          >
            APPLY FILTERS
          </button>
        </div>
      </aside>
    </>
  );
}

// ─── Helper sub-components ───────────────────────────────────────────────────

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[10px] tracking-[0.25em] font-semibold text-[#171717] mb-4">
        {label}
      </h3>
      <div className="flex flex-col gap-0">{children}</div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        text-left text-xs tracking-wide py-2.5 border-b border-[#D9D5CE]/60
        transition-colors duration-200
        ${
          active
            ? "text-[#171717] font-semibold"
            : "text-[#6B6862] hover:text-[#171717] font-medium"
        }
      `}
    >
      {label}
      {active && <span className="ml-2 text-[#9A7653]">✓</span>}
    </button>
  );
}
