"use client";

import Link from "next/link";
import { Building2, Globe, TrendingUp, Trophy, Film, LayoutGrid, MonitorSmartphone, HeartPulse } from "lucide-react";

export default function CategoryQuickLinks() {
  const categories = [
    { name: "জাতীয়", icon: Building2, link: "/category/বাংলাদেশ", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { name: "আন্তর্জাতিক", icon: Globe, link: "/category/আন্তর্জাতিক", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { name: "অর্থনীতি", icon: TrendingUp, link: "/category/অর্থনীতি", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { name: "খেলা", icon: Trophy, link: "/category/খেলাধুলা", color: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-900/20" },
    { name: "বিনোদন", icon: Film, link: "/category/বিনোদন", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "প্রযুক্তি", icon: MonitorSmartphone, link: "/category/প্রযুক্তি", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "স্বাস্থ্য", icon: HeartPulse, link: "/category/স্বাস্থ্য", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { name: "সব বিভাগ", icon: LayoutGrid, link: "#", color: "text-slate-600", bg: "bg-slate-100 dark:bg-slate-800", onClick: (e: any) => {
      e.preventDefault();
      window.dispatchEvent(new Event('openMobileMenu'));
    }},
  ];

  return (
    <div className="container mx-auto px-4 py-3 md:hidden">
      <div className="flex overflow-x-auto no-scrollbar gap-5 px-3 py-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Link 
              key={idx} 
              href={cat.link} 
              onClick={cat.onClick}
              className="flex flex-col items-center justify-center gap-1.5 shrink-0"
              style={{ minWidth: '64px' }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.bg} ${cat.color} shadow-sm border border-black/5 dark:border-white/5`}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
