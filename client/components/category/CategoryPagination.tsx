interface CategoryPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CategoryPagination({
  page,
  totalPages,
  onPageChange,
}: CategoryPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-14 flex items-center justify-center gap-2 flex-wrap"
      aria-label="Product pages"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 text-[10px] tracking-[0.2em] font-medium text-[#6B6862] disabled:opacity-30 hover:text-[#171717] transition-colors duration-200"
      >
        Previous
      </button>
      {pages.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onPageChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`min-w-[2.25rem] py-2 text-[10px] tracking-[0.15em] font-medium transition-colors duration-200 ${
            n === page
              ? "text-[#171717] border-b border-[#171717]"
              : "text-[#6B6862] hover:text-[#171717]"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 text-[10px] tracking-[0.2em] font-medium text-[#6B6862] disabled:opacity-30 hover:text-[#171717] transition-colors duration-200"
      >
        Next
      </button>
    </nav>
  );
}
