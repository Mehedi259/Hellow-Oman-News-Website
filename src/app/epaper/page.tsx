"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ChevronLeft, ChevronRight, Download, ZoomIn, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EPaperPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const pages = [
    "/images/hero_news_oman_1783894879641.png",
    "/images/sports_news_1783894897556.png",
    "/images/community_news_1783894917459.png",
    "/images/news-3.jpg",
    "/images/news-6.jpg",
  ];

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-100 dark:bg-slate-950 min-h-[calc(100vh-200px)]">
        {/* E-paper Toolbar */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[60px] md:top-[128px] z-40 shadow-sm">
          <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand/10 text-brand p-1.5 rounded-lg hidden sm:block">
                <BookOpen size={20} />
              </div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">আজকের ই-পেপার</h1>
              <span className="text-xs md:text-sm text-slate-500 font-medium ml-2">({new Date().toLocaleDateString("bn-BD")})</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                <button 
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`p-1.5 md:p-2 rounded transition-all shadow-sm ${currentPage === 1 ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-brand hover:bg-white dark:hover:bg-slate-700'}`}
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-sm font-medium px-3">পৃষ্ঠা {currentPage} / {totalPages}</span>
                <button 
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`p-1.5 md:p-2 rounded transition-all shadow-sm ${currentPage === totalPages ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-brand hover:bg-white dark:hover:bg-slate-700'}`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex items-center gap-1 md:gap-2 border-l border-slate-300 dark:border-slate-700 pl-2 md:pl-4">
                <button className="p-2 text-slate-500 hover:text-brand bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all" title="Zoom">
                  <ZoomIn size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-brand bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all" title="Download">
                  <Download size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-brand bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-all" title="Share">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* E-paper Content */}
        <div className="container mx-auto px-4 py-6 md:py-8 flex justify-center">
          <div className="relative w-full max-w-4xl bg-white shadow-xl border border-slate-200" style={{ aspectRatio: '1 / 1.4' }}>
            {/* E-paper Dummy Image */}
            <Image 
              src={pages[currentPage - 1]} 
              alt={`E-paper Page ${currentPage}`} 
              fill
              className="object-cover transition-opacity duration-300"
            />
            {/* Overlay to make it look like a newspaper */}
            <div className="absolute inset-0 bg-yellow-900/5 mix-blend-multiply pointer-events-none"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-6 py-3 rounded-full backdrop-blur-md font-medium shadow-2xl flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <ZoomIn size={20} /> জুম করতে ক্লিক করুন
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
