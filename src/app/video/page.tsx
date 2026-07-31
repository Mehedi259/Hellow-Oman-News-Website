"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlayCircle, Clock, Eye } from "lucide-react";

export default function VideoPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const videos = [
    { 
      id: "wENaPGIoQKU", 
      title: "ওমান হোটেলের কাজে বড় পরিবর্তন | বাড়ছে ওমানী কর্মী কমছে প্রবাসী কর্মী", 
      time: "১ দিন আগে", 
      views: "২.৫ হাজার" 
    },
    { 
      id: "HPc8Tayu9LY", 
      title: "ওমানে বাসে উঠতে লাগবে না নগদ টাকা । Oman News । Bus Service", 
      time: "২ দিন আগে", 
      views: "৩.১ হাজার" 
    },
    { 
      id: "7TlASBNyPlw", 
      title: "ওমানের ভিসা কবে খুলবে | ওমানের খবর | Oman Visa Update", 
      time: "৩ দিন আগে", 
      views: "৪.২ হাজার" 
    },
    { 
      id: "Q7hmMoq1pG8", 
      title: "ওমান প্রবাসীদের জন্য নতুন কানুন | না মানলে হতে পারে মহা বিপদ", 
      time: "৪ দিন আগে", 
      views: "৫ হাজার" 
    },
    { 
      id: "F6mWOcP-_do", 
      title: "ওমান প্রবাসীদের জন্য সুখবর | ওমানের খবর | Oman News", 
      time: "৫ দিন আগে", 
      views: "৩.৮ হাজার" 
    },
    { 
      id: "qAmRqFIwtu4", 
      title: "ওমানে ইউরোপে পাঠানোর নামে ভয়াবহ প্রতারণার ফাঁদ", 
      time: "১ সপ্তাহ আগে", 
      views: "৬ হাজার" 
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div className="bg-red-600 text-white p-2 rounded-lg">
              <PlayCircle size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">ভিডিও গ্যালারি</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="glass-card group overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200">
                {/* Video Area */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  {playingId === video.id ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setPlayingId(video.id)}
                    >
                      {/* Using standard img tag for external YouTube thumbnails to avoid next/image domain configuration issues */}
                      <img 
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                          <PlayCircle size={36} className="text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 leading-snug group-hover:text-brand transition-colors">
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
