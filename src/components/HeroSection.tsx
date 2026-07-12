import Image from "next/image";
import Link from "next/link";
import { TOP_NEWS, TRENDING_NEWS } from "@/data/news";

export default function HeroSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Article (Left) */}
          <div className="lg:col-span-8">
            <div className="glass-card overflow-hidden group h-full relative rounded-2xl">
              <Link href={`/news/${TOP_NEWS.id}`} className="block relative w-full h-full group">
                <div className="aspect-video lg:aspect-auto lg:h-[500px] w-full relative overflow-hidden">
                  <Image 
                    src={TOP_NEWS.image} 
                    alt={TOP_NEWS.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-10">
                  <span className="inline-block bg-brand text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded mb-2 sm:mb-3 shadow-sm">
                    {TOP_NEWS.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-snug mb-2 sm:mb-3 group-hover:text-brand-light transition-colors drop-shadow-md">
                    {TOP_NEWS.title}
                  </h2>
                  <p className="text-slate-200 text-xs sm:text-sm lg:text-base line-clamp-2 drop-shadow">
                    {TOP_NEWS.excerpt}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Sidebar Articles (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {TRENDING_NEWS.slice(0, 4).map((news) => (
              <div key={news.id} className="glass-card overflow-hidden group rounded-xl">
                <Link href={`/news/${news.id}`} className="flex h-[100px] sm:h-[110px]">
                  <div className="w-2/5 relative overflow-hidden shrink-0">
                    <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300"></div>
                  </div>
                  <div className="w-3/5 p-3 sm:p-4 flex flex-col justify-center bg-white dark:bg-slate-900">
                    <span className="text-[10px] sm:text-xs font-bold text-brand mb-1">
                      {news.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug line-clamp-3 group-hover:text-brand transition-colors">
                      {news.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
