interface AttributeRow {
  label: string;
  value: string;
}

interface ProductAttributesProps {
  attributes: AttributeRow[];
}

export default function ProductAttributes({ attributes }: ProductAttributesProps) {
  const rows = attributes.filter((a) => a.value && a.value !== "—");

  if (!rows.length) {
    return null;
  }

  return (
    <dl className="border-t border-[#D9D5CE] pt-6 space-y-4">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`grid grid-cols-1 gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4 ${
            index < rows.length - 1 ? "pb-4 border-b border-[#EFECE6]" : ""
          }`}
        >
          <dt className="text-[10px] tracking-[0.2em] text-[#6B6862] font-semibold uppercase">
            {row.label}
          </dt>
          <dd className="text-sm text-[#171717] tracking-wide">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
