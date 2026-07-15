"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search as SearchIcon } from "lucide-react";
import { TOP_NEWS, TRENDING_NEWS, LATEST_NEWS } from "@/data/news";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const allNews = [TOP_NEWS, ...TRENDING_NEWS, ...LATEST_NEWS];
      const filtered = allNews.filter(
        (news) =>
          news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          news.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (news.excerpt && news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (news.content && news.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="খবর খুঁজুন..."
                className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:border-brand transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors"
              >
                <SearchIcon size={20} />
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="max-w-4xl mx-auto">
            {searchQuery.trim() ? (
              <>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-foreground">
                    সার্চ রেজাল্ট: <span className="text-brand">"{searchQuery}"</span>
                  </h1>
                  <p className="text-slate-500 mt-2">
                    {results.length} টি ফলাফল পাওয়া গেছে
                  </p>
                </div>

                {results.length > 0 ? (
                  <div className="space-y-6">
                    {results.map((article) => (
                      <div
                        key={article.id}
                        className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                      >
                        <Link href={`/news/${article.id}`} className="flex flex-col sm:flex-row">
                          <div className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col justify-center">
                            <span className="inline-block text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded mb-3 w-fit">
                              {article.category}
                            </span>
                            <h2 className="text-xl font-bold text-foreground mb-2 hover:text-brand transition-colors">
                              {article.title}
                            </h2>
                            {article.excerpt && (
                              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                {article.excerpt}
                              </p>
                            )}
                            <p className="text-xs text-slate-400 mt-3">{article.date}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <SearchIcon size={40} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      কোনো ফলাফল পাওয়া যায়নি
                    </h3>
                    <p className="text-slate-500">
                      অনুগ্রহ করে ভিন্ন কীওয়ার্ড দিয়ে চেষ্টা করুন
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <SearchIcon size={40} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">খবর খুঁজুন</h3>
                <p className="text-slate-500">
                  উপরের সার্চ বক্সে লিখে আপনার পছন্দের খবর খুঁজে নিন
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
