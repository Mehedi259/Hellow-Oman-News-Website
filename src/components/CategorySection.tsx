import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/data/news";

interface CategorySectionProps {
  title: string;
  articles: NewsArticle[];
  categoryLink?: string;
}

export default function CategorySection({ title, articles, categoryLink = "#" }: CategorySectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="w-1.5 h-5 md:h-6 bg-brand inline-block rounded-sm"></span>
            {title}
          </h2>
          <Link 
            href={categoryLink} 
            className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            সব খবর দেখুন &rarr;
          </Link>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="glass-card overflow-hidden group flex flex-col h-full rounded-xl">
              <Link href={`/news/${article.id}`} className="block relative aspect-video overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1 bg-white dark:bg-slate-900">
                <span className="text-xs font-semibold text-brand mb-2">
                  {article.category}
                </span>
                <Link href={`/news/${article.id}`}>
                  <h3 className="text-sm md:text-base font-bold text-foreground leading-snug group-hover:text-brand transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                </Link>
                {article.excerpt && (
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
                <div className="mt-auto pt-4 text-xs text-slate-400 font-medium">
                  {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
