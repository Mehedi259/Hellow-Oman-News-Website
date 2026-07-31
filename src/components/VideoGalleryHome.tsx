"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlayCircle, Clock } from "lucide-react";

export default function VideoGalleryHome() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          const reversed = data.data.reverse();
          setVideos(reversed.slice(0, 10));
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading || videos.length === 0) return null;

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 border-slate-200 dark:border-slate-800 pb-2">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="w-1.5 h-5 md:h-6 bg-brand inline-block rounded-sm"></span>
            ভিডিও গ্যালারি
          </h2>
          <Link 
            href="/video" 
            className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors whitespace-nowrap"
          >
            সব দেখুন &rarr;
          </Link>
        </div>

        {/* Horizontal Scrollable Video List */}
        <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {videos.map((video) => (
            <div 
              key={video._id} 
              className="glass-card group overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200 flex-shrink-0 snap-start w-[calc(50%-6px)] md:w-[280px] lg:w-[320px]"
            >
              {/* Video Area */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                {playingId === video._id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${video.embed_url}?autoplay=1`}
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
                    onClick={() => setPlayingId(video._id)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        <PlayCircle size={24} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-[12px] md:text-base text-slate-900 mb-2 line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-slate-500 text-[10px] md:text-xs gap-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {new Date(video.created_at).toLocaleDateString("bn-BD")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
