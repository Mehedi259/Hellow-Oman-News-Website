import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES, TOP_NEWS, TRENDING_NEWS, LATEST_NEWS } from "@/data/news";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.slug);

  if (!CATEGORIES.includes(categoryName)) {
    notFound();
  }

  const allNews = [TOP_NEWS, ...TRENDING_NEWS, ...LATEST_NEWS];
  const categoryNews = allNews.filter((news) => news.category === categoryName);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4">
          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
              <span className="w-2 h-8 md:h-10 bg-brand inline-block rounded"></span>
              {categoryName}
            </h1>
            <p className="text-slate-500 mt-3 ml-5">
              {categoryNews.length} টি সংবাদ পাওয়া গেছে
            </p>
          </div>

          {/* Category News Grid */}
          {categoryNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryNews.map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <Link href={`/news/${article.id}`} className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded mb-3 w-fit">
                      {article.category}
                    </span>
                    <Link href={`/news/${article.id}`}>
                      <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand transition-colors line-clamp-3 leading-snug">
                        {article.title}
                      </h2>
                    </Link>
                    {article.excerpt && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-400">{article.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                এই বিভাগে কোনো সংবাদ নেই
              </h3>
              <p className="text-slate-500 mb-6">শীঘ্রই এই বিভাগে নতুন সংবাদ যুক্ত করা হবে</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-dark transition-colors"
              >
                হোমপেজে ফিরে যান
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
