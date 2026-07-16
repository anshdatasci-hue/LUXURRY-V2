import Link from "next/link";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Editorial", href: "/editorial" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#E5DED6] bg-[#FDFCFB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-xl font-semibold tracking-[0.28em] text-[#3A3530] sm:text-2xl">
              LUXURRY
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#7C6B58]">
              Discover the world's finest luxury brands, craftsmanship, and
              immersive experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#5F564E] lg:justify-end"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all duration-200 hover:text-[#3A3530]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-[#E5DED6] pt-6 text-center text-xs tracking-wide text-[#A99A91] sm:text-sm lg:text-left">
          © 2026 LUXURRY. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}