import { notFound } from "next/navigation";
import { Clock } from "lucide-react";

import academyArticles from "@/data/academy";
import AcademyArticleCard from "@/features/academy/components/AcademyArticleCard";

export default async function AcademyArticlePage({ params }) {
  const { slug } = await params;

  const article = academyArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = academyArticles
    .filter(
      (item) =>
        item.category === article.category && item.slug !== article.slug,
    )
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero Image */}

      <div className="overflow-hidden rounded-3xl border border-[#E5DED6] bg-[#F5F3EF]">
        <img
          src={article.image}
          alt={article.title}
          className="h-[420px] w-full object-cover"
        />
      </div>

      {/* Article Header */}

      <section className="mx-auto mt-10 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C8A96B]">
          {article.category}
        </p>

        <h1 className="mt-4 text-5xl font-light text-[#3A3530]">
          {article.title}
        </h1>

        <div className="mt-6 flex items-center gap-2 text-[#7C6B58]">
          <Clock size={18} />
          <span>{article.readTime} read</span>
        </div>
      </section>

      {/* Article Content */}

      <article className="mx-auto mt-12 max-w-4xl space-y-8">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-lg leading-9 text-[#5F564D]">
            {paragraph}
          </p>
        ))}
      </article>

      {/* Related Articles */}

      {relatedArticles.length > 0 && (
        <section className="mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-light text-[#3A3530]">
              Related Articles
            </h2>

            <p className="mt-2 text-[#7C6B58]">
              Continue exploring the world of luxury.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedArticles.map((related) => (
              <AcademyArticleCard key={related.id} article={related} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
