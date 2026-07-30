"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { NewsArticle } from "@/data/news";

export default function NewsTicker({ allTickerNews }: { allTickerNews: NewsArticle[] }) {
  if (!allTickerNews || allTickerNews.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center relative">
        {/* Label */}
        <div className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1.5 z-10 shrink-0 shadow-sm">
          <Zap size={16} fill="currentColor" className="animate-pulse" /> ব্রেকিং
        </div>
        
        {/* Ticker Content */}
        <div className="flex-1 overflow-hidden relative ml-4">
          <div className="whitespace-nowrap animate-ticker hover:[animation-play-state:paused] flex gap-8">
            {allTickerNews.map((news, i) => (
              <Link 
                key={`${news.id}-${i}`} 
                href={`/news/${news.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                {news.title}
              </Link>
            ))}
            {/* Duplicate for seamless looping */}
            {allTickerNews.map((news, i) => (
              <Link 
                key={`dup-${news.id}-${i}`} 
                href={`/news/${news.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                {news.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
