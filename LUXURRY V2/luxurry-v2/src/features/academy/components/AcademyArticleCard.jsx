import Link from "next/link";
import { Clock } from "lucide-react";

export default function AcademyArticleCard({ article }) {
  return (
    <Link
      href={`/academy/${article.slug}`}
      className="group overflow-hidden rounded-2xl border border-[#E5DED6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#F5F3EF]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">
          {article.category}
        </p>

        <h3 className="mt-3 text-2xl font-medium text-[#3A3530]">
          {article.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#7C6B58]">
          {article.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-[#7C6B58]">
          <Clock size={16} />
          {article.readTime}
        </div>
      </div>
    </Link>
  );
}