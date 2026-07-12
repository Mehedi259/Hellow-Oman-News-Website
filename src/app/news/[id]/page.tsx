import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TOP_NEWS, TRENDING_NEWS, LATEST_NEWS } from "@/data/news";
import { FaFacebook, FaTwitter, FaWhatsapp, FaCopy } from "react-icons/fa";
import { Calendar, User } from "lucide-react";

export function generateStaticParams() {
  const allNews = [TOP_NEWS, ...TRENDING_NEWS, ...LATEST_NEWS];
  return allNews.map((news) => ({
    id: news.id,
  }));
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const allNews = [TOP_NEWS, ...TRENDING_NEWS, ...LATEST_NEWS];
  const article = allNews.find((n) => n.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Article Content */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand/10 text-brand font-bold px-3 py-1 rounded text-sm">
                  {article.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-slate-500 mb-8 border-y border-slate-100 dark:border-slate-800 py-3">
                <div className="flex items-center gap-2">
                  <User size={16} /> 
                  <span>ডেস্ক রিপোর্ট</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> 
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="hidden sm:inline">শেয়ার:</span>
                  <button className="text-slate-400 hover:text-blue-600 transition-colors"><FaFacebook size={18} /></button>
                  <button className="text-slate-400 hover:text-blue-400 transition-colors"><FaTwitter size={18} /></button>
                  <button className="text-slate-400 hover:text-green-500 transition-colors"><FaWhatsapp size={18} /></button>
                  <button className="text-slate-400 hover:text-brand transition-colors"><FaCopy size={18} /></button>
                </div>
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
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
                  article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>বিস্তারিত সংবাদ এখনো আপডেট করা হয়নি।</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-brand inline-block rounded-sm"></span>
              সর্বশেষ সংবাদ
            </h3>
            <div className="flex flex-col gap-4">
              {LATEST_NEWS.slice(0, 4).map((news) => (
                <Link href={`/news/${news.id}`} key={news.id} className="flex gap-4 group">
                  <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                    <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-brand mb-1">{news.category}</span>
                    <h4 className="text-sm font-bold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                      {news.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
