"use client";

import Link from "next/link";
import Image from "next/image";

export default function CategoryQuickLinks() {
  const categories = [
    { name: "জাতীয়", icon: "/icons/categories/Parliament.png", link: "/category/বাংলাদেশ", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { name: "আন্তর্জাতিক", icon: "/icons/categories/World.png", link: "/category/আন্তর্জাতিক", bg: "bg-red-50 dark:bg-red-900/20" },
    { name: "অর্থনীতি", icon: "/icons/categories/Economy.png", link: "/category/অর্থনীতি", bg: "bg-green-50 dark:bg-green-900/20" },
    { name: "খেলা", icon: "/icons/categories/Sports.png", link: "/category/খেলাধুলা", bg: "bg-rose-50 dark:bg-rose-900/20" },
    { name: "বিনোদন", icon: "/icons/categories/Entertainment.png", link: "/category/বিনোদন", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { name: "প্রযুক্তি", icon: "/icons/categories/Technology.png", link: "/category/প্রযুক্তি", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { name: "স্বাস্থ্য", icon: "/icons/categories/Health.png", link: "/category/স্বাস্থ্য", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { name: "সব বিভাগ", icon: "/icons/categories/Grid.png", link: "#", bg: "bg-slate-100 dark:bg-slate-800", onClick: (e: any) => {
      e.preventDefault();
      window.dispatchEvent(new Event('openMobileMenu'));
    }},
  ];

  return (
    <div className="container mx-auto px-4 py-3 md:hidden">
      <div className="flex overflow-x-auto no-scrollbar gap-5 px-3 py-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
        {categories.map((cat, idx) => {
          return (
            <Link 
              key={idx} 
              href={cat.link} 
              onClick={cat.onClick}
              className="flex flex-col items-center justify-center gap-1.5 shrink-0 group"
              style={{ minWidth: '64px' }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.bg} shadow-sm border border-black/5 dark:border-white/5 transition-transform group-hover:scale-105`}>
                <Image src={cat.icon} alt={cat.name} width={26} height={26} className="object-contain drop-shadow-sm" />
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
