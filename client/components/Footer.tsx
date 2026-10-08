import Link from "next/link";

const FOOTER_LINKS = {
  SHOP: [
    { label: "All Products", href: "/shop" },
    { label: "Shirts", href: "/category/shirts" },
    { label: "T-Shirts", href: "/category/t-shirts" },
    { label: "Jeans", href: "/category/jeans" },
    { label: "Trousers", href: "/category/trousers" },
    { label: "New Arrivals", href: "/shop?collection=new" },
  ],
  COMPANY: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  INFORMATION: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  FOLLOW: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};

type FooterSection = keyof typeof FOOTER_LINKS;

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCopyrightYear();

  return (
    <footer
      className="bg-[#F7F5F1] border-t border-[#D9D5CE]"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-xl tracking-[0.2em] font-semibold text-[#171717] hover:text-[#9A7653] transition-colors duration-200 mb-4"
            >
              FORMEN
            </Link>
            <p className="text-xs text-[#6B6862] leading-relaxed max-w-xs">
              Contemporary men&apos;s clothing for everyday style. Curated with
              care, designed to last.
            </p>
          </div>

          {/* Footer Link Columns */}
          {(Object.keys(FOOTER_LINKS) as FooterSection[]).map((section) => (
            <div key={section}>
              <h3 className="text-[10px] tracking-[0.25em] font-semibold text-[#171717] mb-5">
                {section}
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS[section].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#6B6862] hover:text-[#171717] transition-colors duration-200"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D9D5CE]">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] tracking-[0.1em] text-[#6B6862]">
            &copy; {currentYear} FORMEN. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.1em] text-[#D9D5CE]">
            Premium Men&apos;s Clothing
          </p>
        </div>
      </div>
    </footer>
  );
}
