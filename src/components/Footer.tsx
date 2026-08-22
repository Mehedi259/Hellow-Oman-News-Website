"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { CATEGORIES } from "@/data/news";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMessage("ধন্যবাদ! আপনার সাবস্ক্রিপশন সফল হয়েছে।");
    setEmail("");
    setIsSubmitting(false);
    
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t-[4px] border-brand mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* About Column */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-block">
              {/* Note: You might want a white version of the logo for the dark footer if it's currently dark */}
              <Image src="/images/logo.png" alt="হ্যালো ওমান বাংলা" width={200} height={50} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mt-4">
              হ্যালো ওমান বাংলা - ওমান ও মধ্যপ্রাচ্যসহ বিশ্বজুড়ে থাকা প্রবাসী বাংলাদেশীদের জন্য সবচেয়ে নির্ভরযোগ্য ও জনপ্রিয় সংবাদ মাধ্যম। সত্য ও বস্তুনিষ্ঠ সংবাদ প্রকাশে আমরা বদ্ধপরিকর।
              <br /><br />
              <strong className="text-brand">সম্পাদক ও প্রকাশক:</strong> মুসা ইমন
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:border-brand transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-brand rounded-sm"></span> নিউজলেটার
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              সর্বশেষ খবর ও আপডেট পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand hover:bg-brand-dark text-white rounded-md transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
              {message && (
                <p className="text-xs text-green-500">{message}</p>
              )}
            </form>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-brand rounded-sm"></span> সংবাদ বিভাগ
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {CATEGORIES.map((category) => (
                <li key={`footer-${category}`}>
                  <Link 
                    href={category === "প্রচ্ছদ" ? "/" : `/category/${category}`}
                    className="text-sm text-slate-400 hover:text-brand transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact Group (2 Columns on mobile) */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-brand rounded-sm"></span> প্রয়োজনীয় লিংক
              </h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-slate-400 hover:text-brand transition-colors">আমাদের সম্পর্কে</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-400 hover:text-brand transition-colors">যোগাযোগ করুন</Link></li>
                <li><Link href="#" className="text-sm text-slate-400 hover:text-brand transition-colors">বিজ্ঞাপন দিন</Link></li>
                <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-brand transition-colors">গোপনীয়তা নীতি</Link></li>
                <li><Link href="/terms" className="text-sm text-slate-400 hover:text-brand transition-colors">ব্যবহারের শর্তাবলী</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-brand rounded-sm"></span> যোগাযোগ
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400">রুই, মাস্কাট, সালতানাত অফ ওমান।</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-brand shrink-0" />
                  <span className="text-sm text-slate-400 overflow-hidden text-ellipsis" style={{ wordBreak: 'break-all' }}>helloshebaofficial@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-brand shrink-0" />
                  <span className="text-sm text-slate-400">+968 78147442</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3">বিজ্ঞাপনের জন্য যোগাযোগ করুন</h4>
                <a 
                  href="https://wa.me/96878147442?text=আমি%20বিজ্ঞাপন%20দিতে%20চাই" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand transition-colors"
                >
                  <MessageCircle size={18} className="text-brand shrink-0" />
                  <span>+968 78147442 (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 pt-6 mt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} হ্যালো ওমান বাংলা। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="text-right">
            <p>ডেভেলপমেন্ট পার্টনার: মুসাফ্লাই আইটি</p>
            <p className="mt-1 font-medium">Developed by Hello Oman Tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
