"use client";

import { useCallback, useMemo, useState } from "react";
import CategoryControls from "@/components/category/CategoryControls";
import CategoryFilters from "@/components/category/CategoryFilters";
import CategoryProductGrid from "@/components/category/CategoryProductGrid";
import CategoryPagination from "@/components/category/CategoryPagination";
import type { Product, SortOption } from "@/lib/types";
import {
  getUniqueBrands,
  getUniqueColors,
  getUniqueFits,
  getUniqueMaterials,
  getUniqueSizes,
} from "@/lib/mockData";
import {
  DEFAULT_FILTERS,
  applyCatalogQuery,
  countActiveFilters,
  paginateProducts,
} from "@/lib/catalogQuery";

interface CategoryClientProps {
  categoryName: string;
  products: Product[];
}

export default function CategoryClient({
  categoryName,
  products,
}: CategoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState<SortOption>("recommended");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [page, setPage] = useState(1);

  const brands = useMemo(() => getUniqueBrands(products), [products]);
  const sizes = useMemo(() => getUniqueSizes(products), [products]);
  const colors = useMemo(() => getUniqueColors(products), [products]);
  const fits = useMemo(() => getUniqueFits(products), [products]);
  const materials = useMemo(() => getUniqueMaterials(products), [products]);

  const activeFilterCount = useMemo(
    () => countActiveFilters(filters),
    [filters],
  );

  const filteredProducts = useMemo(
    () =>
      applyCatalogQuery(products, {
        searchQuery,
        filters,
        sort: sortValue,
      }),
    [products, searchQuery, filters, sortValue],
  );

  const { pageItems, totalPages, currentPage } = useMemo(
    () => paginateProducts(filteredProducts, page),
    [filteredProducts, page],
  );

  const resetPage = useCallback(() => setPage(1), []);

  const handleClearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
    setSortValue("recommended");
    setPage(1);
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-10 lg:py-14 overflow-x-hidden">
        <div className="mb-10">
          <CategoryControls
            categoryName={categoryName}
            searchQuery={searchQuery}
            onSearchChange={(value) => {
              setSearchQuery(value);
              resetPage();
            }}
            sortValue={sortValue}
            onSortChange={(value) => {
              setSortValue(value);
              resetPage();
            }}
            onOpenFilter={() => setFilterPanelOpen(true)}
            activeFilterCount={activeFilterCount}
            filters={filters}
          />
        </div>

        <CategoryProductGrid
          products={pageItems}
          totalCount={products.length}
          onClearFilters={handleClearFilters}
        />

        <CategoryPagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>

      <CategoryFilters
        isOpen={filterPanelOpen}
        onClose={() => setFilterPanelOpen(false)}
        filters={filters}
        onFilterChange={(next) => {
          setFilters(next);
          resetPage();
        }}
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
