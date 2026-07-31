"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Bookmark } from "lucide-react";
import { NewsArticle } from "@/data/news";
import { useSavedNews } from "@/hooks/useSavedNews";

export default function LatestNewsList({ title, articles, categoryLink }: { title: string, articles: NewsArticle[], categoryLink?: string }) {
  const { toggleSave, isSaved } = useSavedNews();

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-2 mb-4 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="w-1 h-5 bg-red-600 rounded-full"></span>
            <h2 className="text-[17px] font-bold text-foreground">{title}</h2>
          </div>
          {categoryLink && (
            <Link href={categoryLink} className="text-red-600 text-xs font-semibold flex items-center">
              সব দেখুন <span className="ml-0.5">›</span>
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {articles.map((news) => (
            <div key={news.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <Link href={`/news/${news.id}`} className="flex h-[90px] sm:h-[100px] relative">
                <div className="w-[120px] shrink-0 relative">
                  <Image 
                    src={news.image} 
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-2.5 flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock size={12} /> ২ ঘন্টা আগে
                    </span>
                    <button 
                      className={`transition-colors p-1 -mr-1 ${isSaved(news.id) ? 'text-green-500' : 'text-slate-400 hover:text-green-500'}`} 
                      onClick={(e) => { e.preventDefault(); toggleSave(news); }}
                    >
                      <Bookmark size={16} strokeWidth={1.5} className={isSaved(news.id) ? 'fill-green-500' : ''} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
