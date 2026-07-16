import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Heritage of Rolex",
    category: "Watchmaking",
    excerpt:
      "Discover how Rolex became one of the most prestigious watchmakers in history.",
  },
  {
    id: 2,
    title: "Inside Louis Vuitton",
    category: "Fashion",
    excerpt:
      "Explore the craftsmanship and artistry behind the world's most iconic luxury bags.",
  },
  {
    id: 3,
    title: "The Art of Dior",
    category: "Haute Couture",
    excerpt: "A journey through Dior's influence on modern luxury fashion.",
  },
  {
    id: 4,
    title: "Why Luxury Matters",
    category: "Lifestyle",
    excerpt:
      "Understanding exclusivity, craftsmanship, and timeless design in the luxury world.",
  },
  {
    id: 5,
    title: "Jewelry Beyond Beauty",
    category: "Jewelry",
    excerpt: "How Cartier and Tiffany transformed jewelry into wearable art.",
  },
];

export default function EditorialPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-[#3A3530]">Editorial</h1>

        <p className="mt-3 max-w-2xl text-[#7C6B58]">
          Stories, insights, heritage and craftsmanship from the world's most
          prestigious luxury maisons.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-2xl border border-[#E5DED6] bg-white p-6 transition hover:shadow-lg"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">
              {article.category}
            </span>

            <h2 className="mt-3 text-2xl font-semibold text-[#3A3530]">
              {article.title}
            </h2>

            <p className="mt-4 leading-7 text-[#6A625A]">{article.excerpt}</p>

            <Link
              href="#"
              className="mt-6 inline-block font-medium text-[#3A3530] hover:text-[#C8A96B]"
            >
              Read Story →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
