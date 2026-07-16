import academyArticles from "@/data/academy";
import AcademyArticleCard from "@/features/academy/components/AcademyArticleCard";

export default function AcademyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Hero */}

      <section className="rounded-3xl border border-[#E5DED6] bg-white p-12 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-[#C8A96B]">
          LUXURRY
        </p>

        <h1 className="mt-4 text-5xl font-light text-[#3A3530]">
          Luxury Academy
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#7C6B58]">
          Learn the craftsmanship, heritage, history and innovation behind the
          world's greatest luxury maisons.
        </p>
      </section>

      {/* Articles */}

      <section className="mt-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-light text-[#3A3530]">
            Featured Articles
          </h2>

          <p className="text-[#7C6B58]">{academyArticles.length} Articles</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {academyArticles.map((article) => (
            <AcademyArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
