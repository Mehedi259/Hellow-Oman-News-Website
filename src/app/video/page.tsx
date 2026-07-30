import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlayCircle, Clock, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VideoPage() {
  const videos = [
    { id: 1, title: "ওমানে প্রবাসীদের জন্য নতুন আইন জারি", time: "২ ঘন্টা আগে", views: "১২ হাজার", image: "/images/hero_news_oman_1783894879641.png" },
    { id: 2, title: "আজকের খেলার সেরা মুহূর্ত", time: "৫ ঘন্টা আগে", views: "৪৫ হাজার", image: "/images/sports_news_1783894897556.png" },
    { id: 3, title: "বাজেট ২০২৬: সাধারণ মানুষের প্রত্যাশা", time: "১ দিন আগে", views: "৮ হাজার", image: "/images/news-3.jpg" },
    { id: 4, title: "তথ্য প্রযুক্তিতে বাংলাদেশের নতুন অর্জন", time: "২ দিন আগে", views: "৩২ হাজার", image: "/images/community_news_1783894917459.png" },
    { id: 5, title: "মধ্যপ্রাচ্যের বর্তমান পরিস্থিতি বিশ্লেষণ", time: "৩ দিন আগে", views: "১৯ হাজার", image: "/images/news-6.jpg" },
    { id: 6, title: "বিশ্বকাপ ক্রিকেটে বাংলাদেশ দলের প্রস্তুতি", time: "৪ দিন আগে", views: "৫৫ হাজার", image: "/images/sports_news_1783894897556.png" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="bg-red-600 text-white p-2 rounded-lg">
              <PlayCircle size={24} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">ভিডিও গ্যালারি</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="glass-card group overflow-hidden bg-white dark:bg-slate-900 rounded-xl cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={video.image} 
                    alt={video.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
                      <PlayCircle size={32} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm">
                    {Math.floor(Math.random() * 10) + 1}:{Math.floor(Math.random() * 50) + 10}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-brand transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-slate-500 text-xs gap-4">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {video.time}</span>
                    <span className="flex items-center gap-1.5"><Eye size={14} /> {video.views} ভিউ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
