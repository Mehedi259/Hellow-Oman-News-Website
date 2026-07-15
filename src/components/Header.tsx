"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, Search, MapPin, Calendar, Mail, Send, X, Sun, Moon } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { CATEGORIES } from "@/data/news";
import NewsletterModal from "./NewsletterModal";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const currentDate = new Date().toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-header">
      {/* Top Bar */}
      <div className="bg-brand text-white text-xs md:text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4 overflow-hidden">
            <span className="flex items-center gap-1 whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
              <MapPin size={12} className="md:w-3.5 md:h-3.5" /> ঢাকা
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap text-[10px] sm:text-xs md:text-sm truncate">
              <Calendar size={12} className="md:w-3.5 md:h-3.5" /> {currentDate}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors"><FaFacebook size={16} /></Link>
            <Link href="#" className="hover:text-gray-300 transition-colors"><FaTwitter size={16} /></Link>
            <Link href="#" className="hover:text-gray-300 transition-colors"><Mail size={16} /></Link>
            <Link href="#" className="hover:text-gray-300 transition-colors"><Send size={16} /></Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-2">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2 text-foreground shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center mx-auto md:mx-0 shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand m-0 leading-tight whitespace-nowrap">হ্যালো ওমান</h1>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-dark uppercase mt-0.5">বাংলা</span>
          </Link>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <Search size={20} className="text-foreground" />
            </button>
            <button 
              onClick={() => setIsNewsletterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand-dark text-white rounded-full transition-colors font-medium text-sm"
            >
              <Mail size={16} /> নিউজলেটার
            </button>
          </div>

          {/* Mobile Search & Theme Button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-foreground"
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-3">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link 
                  href={category === "প্রচ্ছদ" ? "/" : `/category/${category}`}
                  className="text-foreground/80 hover:text-brand font-medium transition-colors text-[15px]"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 w-[280px] sm:w-[320px] max-w-[85vw] h-[100dvh] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 flex justify-between items-center border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-brand/5 to-brand/10">
            <Link href="/" className="flex flex-col items-start" onClick={() => setIsMobileMenuOpen(false)}>
              <h2 className="text-2xl font-bold text-brand m-0 leading-tight">হ্যালো ওমান</h2>
              <span className="text-xs text-brand-dark">বাংলা</span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X size={22} className="text-foreground" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 min-h-0 py-2">
            {/* Categories Section */}
            <div className="mb-1">
              <h3 className="px-5 py-3 text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                📰 সংবাদ বিভাগ
              </h3>
              <ul className="flex flex-col space-y-0.5">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <Link 
                      href={category === "প্রচ্ছদ" ? "/" : `/category/${category}`}
                      className="block px-5 py-3.5 text-[15px] font-medium border-b border-slate-100 dark:border-slate-800/50 hover:bg-brand/5 hover:text-brand transition-all active:bg-brand/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages Section */}
            <div className="my-1 pt-2 border-t-2 border-slate-200 dark:border-slate-800">
              <h3 className="px-5 py-3 text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                📄 পেজ সমূহ
              </h3>
              <ul className="flex flex-col space-y-0.5">
                <li>
                  <Link 
                    href="/about"
                    className="block px-5 py-3.5 text-[15px] font-medium border-b border-slate-100 dark:border-slate-800/50 hover:bg-brand/5 hover:text-brand transition-all active:bg-brand/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="block px-5 py-3.5 text-[15px] font-medium border-b border-slate-100 dark:border-slate-800/50 hover:bg-brand/5 hover:text-brand transition-all active:bg-brand/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    যোগাযোগ
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy"
                    className="block px-5 py-3.5 text-[15px] font-medium border-b border-slate-100 dark:border-slate-800/50 hover:bg-brand/5 hover:text-brand transition-all active:bg-brand/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    গোপনীয়তা নীতি
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms"
                    className="block px-5 py-3.5 text-[15px] font-medium hover:bg-brand/5 hover:text-brand transition-all active:bg-brand/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    শর্তাবলী
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div className="mt-1 pt-3 px-5 pb-4 border-t-2 border-slate-200 dark:border-slate-800">
              <h3 className="py-2 text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                🌐 সোশ্যাল মিডিয়া
              </h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <FaFacebook size={19} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                  <FaTwitter size={19} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm">
                  <Mail size={19} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                  <Send size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="p-4 border-t-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsNewsletterOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-brand to-brand-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Mail size={20} /> নিউজলেটার সাবস্ক্রাইব
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Modal */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center pt-20 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">খবর খুঁজুন</h3>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="শিরোনাম, বিভাগ বা কীওয়ার্ড লিখুন..."
                  className="w-full px-6 py-4 pr-14 text-lg rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-brand transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </header>
  );
}
