import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { CATEGORIES } from "@/data/news";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-[4px] border-brand mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold text-white m-0 leading-tight">হ্যালো ওমান</h1>
              <span className="text-xs font-semibold tracking-widest text-brand uppercase mt-0.5">বাংলা</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mt-4">
              হ্যালো ওমান বাংলা - ওমান ও মধ্যপ্রাচ্যসহ বিশ্বজুড়ে থাকা প্রবাসী বাংলাদেশীদের জন্য সবচেয়ে নির্ভরযোগ্য ও জনপ্রিয় সংবাদ মাধ্যম। সত্য ও বস্তুনিষ্ঠ সংবাদ প্রকাশে আমরা বদ্ধপরিকর।
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-brand rounded-sm"></span> সংবাদ বিভাগ
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {CATEGORIES.map((category) => (
                <li key={`footer-${category}`}>
                  <Link href="#" className="text-sm hover:text-brand transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-brand rounded-sm"></span> প্রয়োজনীয় লিংক
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-brand transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link href="#" className="text-sm hover:text-brand transition-colors">যোগাযোগ করুন</Link></li>
              <li><Link href="#" className="text-sm hover:text-brand transition-colors">বিজ্ঞাপন দিন</Link></li>
              <li><Link href="#" className="text-sm hover:text-brand transition-colors">গোপনীয়তা নীতি</Link></li>
              <li><Link href="#" className="text-sm hover:text-brand transition-colors">ব্যবহারের শর্তাবলী</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-brand rounded-sm"></span> যোগাযোগ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">রুই, মাস্কাট, সালতানাত অফ ওমান। <br />ঢাকা অফিস: কারওয়ান বাজার, ঢাকা।</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand shrink-0" />
                <span className="text-sm text-slate-400">news@helloomanbangla.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand shrink-0" />
                <span className="text-sm text-slate-400">+968 1234 5678</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-900 pt-6 mt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} হ্যালো ওমান বাংলা। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>ডেভেলপমেন্ট পার্টনার: মুসাফ্লাই আইটি</p>
        </div>
      </div>
    </footer>
  );
}
