import type { SizeGuide as SizeGuideData } from "@/lib/types";

interface SizeGuideProps {
  guide: SizeGuideData;
}

export default function SizeGuide({ guide }: SizeGuideProps) {
  return (
    <section
      className="max-w-screen-xl mx-auto px-5 lg:px-10 pb-16 lg:pb-24"
      aria-labelledby="size-guide-heading"
    >
      <h2
        id="size-guide-heading"
        className="text-[10px] tracking-[0.25em] text-[#6B6862] font-semibold uppercase mb-8"
      >
        Size Guide
      </h2>
      <div className="overflow-x-auto max-w-xl">
        <table className="w-full min-w-[280px] text-left border-collapse">
          <caption className="sr-only">{guide.heading}</caption>
          <thead>
            <tr className="border-b border-[#171717]">
              <th
                scope="col"
                className="py-3 pr-8 text-[10px] tracking-[0.2em] font-semibold uppercase text-[#171717]"
              >
                {guide.col1}
              </th>
              <th
                scope="col"
                className="py-3 text-[10px] tracking-[0.2em] font-semibold uppercase text-[#171717]"
              >
                {guide.col2}
              </th>
            </tr>
          </thead>
          <tbody>
            {guide.rows.map((row) => (
              <tr key={row.size} className="border-b border-[#D9D5CE]">
                <td className="py-3.5 pr-8 text-sm font-medium text-[#171717]">
                  {row.size}
                </td>
                <td className="py-3.5 text-sm text-[#6B6862]">{row.measurement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
