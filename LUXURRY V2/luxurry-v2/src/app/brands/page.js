import Link from "next/link";
import brands from "@/data/brands";

// const brands = [
//   {
//     name: "Rolex",
//     country: "Switzerland",
//     founded: "1905",
//     description:
//       "The world's most recognized luxury watch manufacturer, known for precision and timeless design.",
//   },
//   {
//     name: "Louis Vuitton",
//     country: "France",
//     founded: "1854",
//     description:
//       "A global symbol of luxury fashion, leather goods, and exceptional craftsmanship.",
//   },
//   {
//     name: "Dior",
//     country: "France",
//     founded: "1946",
//     description:
//       "One of the most influential luxury fashion houses, blending elegance with innovation.",
//   },
//   {
//     name: "Gucci",
//     country: "Italy",
//     founded: "1921",
//     description:
//       "Italian luxury brand celebrated for bold fashion, leather goods, and accessories.",
//   },
//   {
//     name: "Cartier",
//     country: "France",
//     founded: "1847",
//     description:
//       "Legendary jeweler and watchmaker renowned for timeless luxury creations.",
//   },
// ];

export default function BrandsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-semibold text-[#3A3530]">Luxury Brands</h1>

      <p className="mt-3 max-w-2xl text-[#7C6B58]">
        Explore the world's most prestigious luxury maisons and discover their
        heritage, craftsmanship, and timeless excellence.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="rounded-2xl border border-[#E5DED6] bg-white p-6 transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#3A3530]">
              {brand.name}
            </h2>

            <p className="mt-2 text-sm text-[#C8A96B]">
              {brand.country} • Founded {brand.founded}
            </p>

            <p className="mt-4 text-[#6A625A]">{brand.description}</p>

            <Link
              href="/products"
              className="mt-6 inline-block text-sm font-medium text-[#3A3530] hover:text-[#C8A96B]"
            >
              View Products →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
