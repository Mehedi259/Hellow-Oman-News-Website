"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/data/news";
import { Calendar, Eye } from "lucide-react";

export default function HeroSliderMobile({ sliderNews }: { sliderNews: NewsArticle[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (el) {
        let newIndex = currentIndex + 1;
        if (newIndex >= sliderNews.length) {
          newIndex = 0;
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollTo({ left: el.clientWidth * newIndex, behavior: 'smooth' });
        }
        setCurrentIndex(newIndex);
      }
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex, sliderNews.length]);

  return (
    <div className="md:hidden relative w-full overflow-hidden mb-2">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {sliderNews.map((news, idx) => (
          <div key={`slider-${news.id}-${idx}`} className="w-full shrink-0 snap-center px-4 relative">
            <Link href={`/news/${news.id}`} className="block relative w-full h-[240px] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute top-2 left-2 z-20">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md">
                  শীর্ষ সংবাদ
                </span>
              </div>
              <Image 
                src={news.image} 
                alt={news.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                <div className="flex items-center gap-3 text-slate-300 text-[10px] mb-1.5">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {news.date}</span>
                  <span className="flex items-center gap-1"><Eye size={10} /> ২ ঘন্টা আগে</span>
                </div>
                <h2 className="text-base font-bold text-white leading-snug line-clamp-2">
                  {news.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Slider Dots */}
      <div className="flex justify-center gap-1.5 absolute bottom-1 left-0 right-0">
        {sliderNews.map((_, idx) => (
          <div key={`dot-${idx}`} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-red-600' : 'w-1.5 bg-slate-300 dark:bg-slate-600'}`}></div>
        ))}
      </div>
    </div>
  );
}
