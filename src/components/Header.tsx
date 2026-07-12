"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User, MapPin, Calendar, Mail, Send, X } from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { CATEGORIES } from "@/data/news";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center mx-auto md:mx-0 shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand m-0 leading-tight whitespace-nowrap">হ্যালো ওমান</h1>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-dark uppercase mt-0.5">বাংলা</span>
          </Link>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Search size={20} className="text-foreground" />
            </button>
            <Link 
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand-dark text-white rounded-full transition-colors font-medium text-sm"
            >
              <User size={16} /> লগইন
            </Link>
          </div>

          {/* Mobile Search Button */}
          <button className="md:hidden p-2 text-foreground">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-3">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link 
                  href="#"
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
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 w-[280px] h-full bg-background shadow-2xl transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
            <Link href="/" className="flex flex-col items-start" onClick={() => setIsMobileMenuOpen(false)}>
              <h2 className="text-2xl font-bold text-brand m-0 leading-tight">হ্যালো ওমান</h2>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={24} className="text-foreground" />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 py-4">
            <ul className="flex flex-col">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <Link 
                    href="#"
                    className="block px-6 py-3 text-lg font-medium border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-brand transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <Link 
              href="#"
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand text-white rounded-lg font-medium"
            >
              <User size={18} /> লগইন
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
