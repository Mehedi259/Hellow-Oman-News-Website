"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlaySquare, BookOpen, Bookmark, Menu } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('toggleMobileMenu'));
  };

  const navItems = [
    { name: "হোম", icon: Home, path: "/" },
    { name: "ভিডিও", icon: PlaySquare, path: "/video" },
    { name: "ই-পেপার", icon: BookOpen, path: "/epaper" },
    { name: "সংরক্ষিত", icon: Bookmark, path: "/saved" },
    { name: "মেনু", icon: Menu, path: "#", onClick: handleMenuClick },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
      <div className="flex justify-around items-center h-[65px] px-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link 
              key={idx} 
              href={item.path}
              onClick={item.onClick}
              className={`flex flex-col items-center justify-center w-[64px] h-[54px] rounded-xl transition-all [-webkit-tap-highlight-color:transparent] ${
                isActive 
                ? 'bg-slate-100 dark:bg-slate-800 text-foreground border border-slate-200 dark:border-slate-700 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              <Icon size={20} fill="none" strokeWidth={isActive ? 2 : 1.5} className="mb-1" />
              <span className={`text-[9px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
