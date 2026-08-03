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

  // We only show up to 5 items in this layout (1 lead + 4 list)
  const displayArticles = articles.slice(0, 5);
  const leadArticle = displayArticles[0];
  const listArticles = displayArticles.slice(1);

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-5 pb-2 border-b-[3px] border-brand relative">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            {title}
          </h2>
          <Link 
            href={categoryLink} 
            className="bg-brand text-white px-3 py-1.5 text-sm font-semibold flex items-center gap-1 hover:bg-brand-dark transition-colors shadow-sm"
          >
            আরও <span className="text-lg leading-none font-normal">&rsaquo;</span>
          </Link>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          
          {/* Lead Article (Left side on desktop, top on mobile) */}
          {leadArticle && (
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              <Link href={`/news/${leadArticle.id}`} className="block relative w-full aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-xl shadow-sm mb-4 group">
                <Image 
                  src={leadArticle.image} 
                  alt={leadArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div>
                <Link href={`/news/${leadArticle.id}`} className="group">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-snug group-hover:text-brand transition-colors mb-2">
                    {leadArticle.title}
                  </h3>
                </Link>
                {leadArticle.excerpt && (
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
                    {leadArticle.excerpt}
                  </p>
                )}
                <div className="text-sm text-slate-400 font-medium">
                  {leadArticle.date}
                </div>
              </div>
            </div>
          )}

          {/* List Articles (Right side on desktop, bottom on mobile) */}
          {listArticles.length > 0 && (
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
              {listArticles.map((article) => (
                <div key={article.id} className="group flex flex-row items-center bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                  <Link href={`/news/${article.id}`} className="block relative shrink-0 overflow-hidden w-[110px] h-[75px] md:w-[130px] md:h-[90px] rounded-md mr-4">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  <div className="flex flex-col flex-1 justify-center">
                    <Link href={`/news/${article.id}`}>
                      <h3 className="text-[15px] md:text-base font-bold text-foreground leading-snug group-hover:text-brand transition-colors line-clamp-2 md:line-clamp-3 mb-1.5">
                        {article.title}
                      </h3>
                    </Link>
                    <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span> {article.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
