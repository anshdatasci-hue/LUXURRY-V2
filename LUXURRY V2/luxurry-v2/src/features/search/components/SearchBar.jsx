"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { searchLuxury } from "../actions/search-actions";

export default function SearchBar({
  mobile = false,
  onClose,
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    products: [],
    brands: [],
  });

  useEffect(() => {
    async function fetchResults() {
      if (query.trim().length < 2) {
        setResults({
          products: [],
          brands: [],
        });
        return;
      }

      const data = await searchLuxury(query);

      setResults(data);
    }

    fetchResults();
  }, [query]);

  return (
    <div
  className={
    mobile
      ? "relative w-full"
      : "relative hidden flex-1 justify-center px-8 md:flex"
  }
>
      <div className="w-full max-w-lg">
        <form
  action="/search"
  onSubmit={() => {
    if (mobile && onClose) {
      onClose();
    }
  }}
  className="flex items-center rounded-full border border-[#E5DED6] bg-white px-4 py-2"
>

          <input
  name="q"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search brands and products..."
  className="w-full bg-transparent text-sm outline-none placeholder:text-[#A99A91]"
/>
        </form>

        {(results.products.length > 0 ||
          results.brands.length > 0) && (
          <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-[#E5DED6] bg-white shadow-xl">

            {results.products.length > 0 && (
              <>
                <div className="border-b bg-[#F8F6F2] px-4 py-2 text-xs font-semibold uppercase text-[#7C6B58]">
                  Products
                </div>

                {results.products.map((product) => (
  <Link
    key={product.id}
    href={`/products/${product.slug}`}
    onClick={() => {
      if (mobile && onClose) {
        onClose();
      }
    }}
    className="block px-4 py-3 hover:bg-[#F8F6F2]"
  >
    {product.name}
  </Link>
))}
              </>
            )}

            {results.brands.length > 0 && (
              <>
                <div className="border-y bg-[#F8F6F2] px-4 py-2 text-xs font-semibold uppercase text-[#7C6B58]">
                  Brands
                </div>

                {results.brands.map((brand) => (
  <Link
    key={brand.id}
    href={`/brands/${brand.slug}`}
    onClick={() => {
      if (mobile && onClose) {
        onClose();
      }
    }}
    className="block px-4 py-3 hover:bg-[#F8F6F2]"
  >
    {brand.name}
  </Link>
))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}