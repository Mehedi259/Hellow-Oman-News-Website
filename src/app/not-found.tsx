import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileQuestion, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-2xl">
          <div className="w-32 h-32 mx-auto mb-8 bg-brand/10 rounded-full flex items-center justify-center">
            <FileQuestion size={64} className="text-brand" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-brand mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            পৃষ্ঠা পাওয়া যায়নি
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন তা আর বিদ্যমান নেই অথবা সরানো হয়েছে।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors"
            >
              <Home size={20} />
              হোমপেজে যান
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-foreground rounded-lg font-medium transition-colors"
            >
              <Search size={20} />
              খবর খুঁজুন
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 mb-4">জনপ্রিয় বিভাগসমূহ:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["প্রবাস", "বাংলাদেশ", "মধ্যপ্রাচ্য", "খেলাধুলা", "অর্থনীতি"].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category}`}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
