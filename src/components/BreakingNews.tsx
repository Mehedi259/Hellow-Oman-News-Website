"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, X } from "lucide-react";

const BREAKING_NEWS = {
  id: "breaking-1",
  title: "জরুরি: ওমানে সাইক্লোন সতর্কতা জারি, প্রবাসীদের সতর্ক থাকার আহ্বান",
  link: "/news/1",
};

export default function BreakingNews() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 flex items-center gap-3 relative z-10">
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full shrink-0 animate-pulse">
          <AlertCircle size={18} className="animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-sm font-bold whitespace-nowrap">ব্রেকিং নিউজ</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <Link 
            href={BREAKING_NEWS.link}
            className="block hover:underline"
          >
            <p className="text-sm md:text-base font-medium animate-[ticker_25s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
              {BREAKING_NEWS.title}
            </p>
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0"
          title="বন্ধ করুন"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
