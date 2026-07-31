"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Download, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface EPaper {
  _id: string;
  title: string;
  date: string;
  pdf_url: string;
  thumbnail: string;
  created_at: string;
}

export default function EPaperPage() {
  const [epapers, setEpapers] = useState<EPaper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpapers = async () => {
      try {
        const res = await fetch('/api/epapers');
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setEpapers(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch epapers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpapers();
  }, []);

  const latestEpaper = epapers.length > 0 ? epapers[0] : null;
  const previousEpapers = epapers.length > 1 ? epapers.slice(1) : [];

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-8 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div className="bg-brand text-white p-2 rounded-lg">
              <BookOpen size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">ই-পেপার গ্যালারি</h1>
          </div>

          {loading ? (
            <div className="text-center py-12 text-slate-500">লোড হচ্ছে...</div>
          ) : epapers.length === 0 ? (
            <div className="text-center py-12 text-slate-500">কোনো ই-পেপার পাওয়া যায়নি।</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Latest Epaper - Main Focus */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <div>
                      <h2 className="font-bold text-lg text-slate-900">{latestEpaper?.title}</h2>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <Calendar size={14} /> {latestEpaper?.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a href={latestEpaper?.pdf_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors">
                        <BookOpen size={16} /> পড়ুন
                      </a>
                      <a href={latestEpaper?.pdf_url} download className="flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-300 transition-colors">
                        <Download size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex justify-center bg-slate-100/50">
                    <a href={latestEpaper?.pdf_url} target="_blank" rel="noreferrer" className="block relative w-full max-w-md shadow-2xl transition-transform hover:scale-[1.02] duration-300 group">
                      <div className="aspect-[1/1.4] relative bg-white border border-slate-200">
                        {latestEpaper?.thumbnail && (
                          <Image src={latestEpaper.thumbnail} alt={latestEpaper?.title || 'E-paper'} fill className="object-cover" />
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2">
                            <ExternalLink size={20} /> সম্পূর্ণ পত্রিকা পড়ুন
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Previous Epapers - Sidebar */}
              {previousEpapers.length > 0 && (
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-slate-200">পূর্ববর্তী ই-পেপারসমূহ</h3>
                  <div className="space-y-4">
                    {previousEpapers.map(epaper => (
                      <div key={epaper._id} className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm flex gap-4 hover:border-brand/30 transition-colors group">
                        <div className="w-24 h-32 relative flex-shrink-0 border border-slate-100 shadow-sm overflow-hidden bg-slate-50">
                          {epaper.thumbnail && <Image src={epaper.thumbnail} alt={epaper.title} fill className="object-cover group-hover:scale-105 transition-transform" />}
                        </div>
                        <div className="flex flex-col justify-between py-1">
                          <div>
                            <h4 className="font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-brand transition-colors">{epaper.title}</h4>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5"><Calendar size={12} /> {epaper.date}</p>
                          </div>
                          <div className="flex gap-2 mt-2">
                             <a href={epaper.pdf_url} target="_blank" rel="noreferrer" className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded font-medium transition-colors">
                               পড়ুন
                             </a>
                             <a href={epaper.pdf_url} download className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 p-1.5 rounded transition-colors">
                               <Download size={14} />
                             </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
