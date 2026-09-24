import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getNewsBySlug, getLatestNews } from "@/data/news";
import { Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarAd from "@/components/SidebarAd";
import GoogleAd from "@/components/GoogleAd";
import ShareButtons from "@/components/ShareButtons";

interface NewsDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NewsDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsBySlug(id);

  if (!article) {
    return {
      title: "সংবাদ পাওয়া যায়নি",
      description: "অনুরোধকৃত সংবাদটি খুঁজে পাওয়া যায়নি।",
    };
  }

  const excerpt = article.excerpt || article.content?.substring(0, 160) || article.title;

  return {
    title: article.title,
    description: excerpt,
    openGraph: {
      title: article.title,
      description: excerpt,
      type: "article",
      publishedTime: article.published_date,
      authors: [article.reporter || "Hello Probash"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsDetailsPage({ params }: NewsDetailsProps) {
  const { id } = await params;
  const [article, latestNews] = await Promise.all([
    getNewsBySlug(id),
    getLatestNews(),
  ]);

  if (!article) {
    notFound();
  }

  const relatedNews = latestNews
    .filter((news) => news.category === article.category && news.id !== article.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: [article.image],
    datePublished: article.published_date || new Date().toISOString(),
    dateModified: article.published_date || new Date().toISOString(),
    author: [
      {
        "@type": "Person",
        name: article.reporter || "সম্পাদকীয় বিভাগ",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Hello Probash",
      logo: {
        "@type": "ImageObject",
        url: "https://helloprobash.com/icon.png",
      },
    },
    description: article.excerpt || article.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Link
                    href={`/category/${encodeURIComponent(article.category)}`}
                    className="bg-brand/10 text-brand font-bold px-3 py-1 rounded text-sm hover:bg-brand hover:text-white transition-colors"
                  >
                    {article.category}
                  </Link>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-slate-500 mb-8 border-y border-slate-100 dark:border-slate-800 py-3">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.reporter ? `রিপোর্টার: ${article.reporter}` : "সম্পাদক: মুসা ইমন"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={article.published_date}>{article.date}</time>
                  </div>
                  <ShareButtons title={article.title} />
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                  {article.excerpt && (
                    <p className="font-semibold text-lg text-foreground mb-6">
                      {article.excerpt}
                    </p>
                  )}
                  {article.content ? (
                    article.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p>বিস্তারিত সংবাদ এখনো আপডেট করা হয়নি।</p>
                  )}
                </div>

                {/* In-Article Google AdSense Space */}
                <div className="my-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <GoogleAd adFormat="auto" />
                </div>
              </div>
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mt-8">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-brand inline-block rounded-sm"></span>
                    সম্পর্কিত সংবাদ
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedNews.map((news) => (
                      <Link href={`/news/${news.id}`} key={news.id} className="group flex flex-col">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-xs font-bold text-brand mb-2 block">{news.category}</span>
                        <h3 className="font-bold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors text-base">
                          {news.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <SidebarAd />
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-brand inline-block rounded-sm"></span>
                সর্বশেষ সংবাদ
              </h2>
              <div className="flex flex-col gap-4">
                {latestNews.slice(0, 4).map((news) => (
                  <Link href={`/news/${news.id}`} key={news.id} className="flex gap-4 group">
                    <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes="96px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-brand mb-1">{news.category}</span>
                      <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
