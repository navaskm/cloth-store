import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-8 pb-0"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6862] transition-colors duration-200 hover:text-[#171717]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#171717]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-[10px] text-[#D9D5CE]" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
