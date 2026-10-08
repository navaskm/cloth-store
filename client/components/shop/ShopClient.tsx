"use client";

import { useState, useMemo, useCallback } from "react";
import CategoryNavigation from "@/components/shop/CategoryNavigation";
import ShopControls from "@/components/shop/ShopControls";
import ProductGrid from "@/components/shop/ProductGrid";
import FilterPanel from "@/components/shop/FilterPanel";
import { Product, SortOption } from "@/lib/types";
import {
  getUniqueBrands,
  getUniqueSizes,
  getUniqueColors,
  getUniqueFits,
  getUniqueMaterials,
} from "@/lib/mockData";
import {
  DEFAULT_FILTERS,
  applyCatalogQuery,
  countActiveFilters,
} from "@/lib/catalogQuery";

interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [sortValue, setSortValue] = useState<SortOption>("recommended");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  const brands = useMemo(() => getUniqueBrands(products), [products]);
  const sizes = useMemo(() => getUniqueSizes(products), [products]);
  const colors = useMemo(() => getUniqueColors(products), [products]);
  const fits = useMemo(() => getUniqueFits(products), [products]);
  const materials = useMemo(() => getUniqueMaterials(products), [products]);

  const activeFilterCount = useMemo(
    () => countActiveFilters(filters),
    [filters],
  );

  const displayedProducts = useMemo(() => {
    const scoped = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : products;

    return applyCatalogQuery(scoped, {
      searchQuery,
      filters,
      sort: sortValue,
    });
  }, [products, activeCategory, searchQuery, filters, sortValue]);

  const handleClearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
    setActiveCategory("");
    setSortValue("recommended");
  }, []);

  return (
    <>
      <CategoryNavigation
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-10 lg:py-14">
        <div className="mb-10">
          <ShopControls
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortValue={sortValue}
            onSortChange={setSortValue}
            onOpenFilter={() => setFilterPanelOpen(true)}
            activeFilterCount={activeFilterCount}
            filters={filters}
          />
        </div>

        <ProductGrid
          products={displayedProducts}
          totalCount={products.filter((p) => p.isActive !== false).length}
          onClearFilters={handleClearFilters}
        />
      </div>

      <FilterPanel
        isOpen={filterPanelOpen}
        onClose={() => setFilterPanelOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        brands={brands}
        sizes={sizes}
        colors={colors}
        fits={fits}
        materials={materials}
        onClearFilters={handleClearFilters}
      />
    </>
  );
}
