"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bookmark, Clock, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSavedNews } from "@/hooks/useSavedNews";
import { getRelativeTime } from "@/data/news";

export default function SavedNewsPage() {
  const { savedArticles, toggleSave } = useSavedNews();

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 py-6 min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand text-white p-2.5 rounded-lg shadow-sm">
                <Bookmark size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">সংরক্ষিত খবর</h1>
                <p className="text-sm text-slate-500 mt-1">আপনার সেভ করা সব খবর এখানে পাবেন</p>
              </div>
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-bold">
              {savedArticles.length}টি খবর
            </div>
          </div>

          {savedArticles.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Bookmark size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">কোনো খবর সংরক্ষিত নেই</h2>
              <p className="text-slate-500">আপনি এখনও কোনো খবর সেভ করেননি। খবরের পাশের বুকমার্ক বাটনে ক্লিক করে খবর সেভ করুন।</p>
              <Link href="/" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full font-medium mt-6 hover:bg-brand/90 transition-colors">
                হোমপেজে ফিরে যান <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {savedArticles.map((article) => (
                <div key={article.id} className="glass-card flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-900 rounded-xl p-4 transition-all">
                  <div className="relative w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden">
                    <Image 
                      src={article.image || "/images/hero_news_oman_1783894879641.png"} 
                      alt={article.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/news/${article.id}`} className="font-bold text-lg text-foreground hover:text-brand transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </Link>
                      <p className="text-sm text-slate-500 line-clamp-2">
                        {article.excerpt || "বিস্তারিত জানতে খবরের শিরোনামে ক্লিক করুন। এটি একটি সংরক্ষিত খবর যা আপনি পরে পড়ার জন্য সেভ করে রেখেছিলেন।"}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <span suppressHydrationWarning className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Clock size={14} /> {getRelativeTime(article.published_date || article.date)}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <Link href={`/news/${article.id}`} className="flex items-center gap-1.5 text-brand bg-brand/10 hover:bg-brand/20 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                          পড়ুন <ArrowRight size={14} />
                        </Link>
                        <button 
                          onClick={() => toggleSave(article)}
                          className="p-2 text-slate-400 hover:text-red-500 bg-slate-100 hover:bg-red-50 dark:bg-slate-800 dark:hover:bg-red-900/20 rounded-lg transition-colors" 
                          title="রিমুভ করুন"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
