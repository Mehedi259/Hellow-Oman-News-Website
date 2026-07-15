import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

export const metadata = {
  title: "আমাদের সম্পর্কে | হ্যালো ওমান বাংলা",
  description: "হ্যালো ওমান বাংলা সম্পর্কে জানুন - প্রবাসী বাংলাদেশীদের জন্য নির্ভরযোগ্য সংবাদ মাধ্যম",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                আমাদের সম্পর্কে
              </h1>
              <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                প্রবাসীদের জন্য নির্ভরযোগ্য সংবাদ মাধ্যম
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>হ্যালো ওমান বাংলা</strong> ওমান ও মধ্যপ্রাচ্যসহ বিশ্বজুড়ে ছড়িয়ে থাকা প্রবাসী বাংলাদেশীদের জন্য একটি নির্ভরযোগ্য এবং জনপ্রিয় অনলাইন সংবাদ মাধ্যম। আমরা ২০২৪ সাল থেকে প্রবাসীদের সঠিক ও সময়োপযোগী তথ্য প্রদানে নিরলসভাবে কাজ করে যাচ্ছি।
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  আমাদের লক্ষ্য হলো প্রবাসী বাংলাদেশীদের কাছে দেশ-বিদেশের সর্বশেষ সংবাদ, প্রবাসজীবনের গুরুত্বপূর্ণ তথ্য, কমিউনিটি সংবাদ এবং বিনোদন সংক্রান্ত খবর দ্রুততম সময়ে পৌঁছে দেওয়া। আমরা বিশ্বাস করি যে সঠিক তথ্য প্রবাসীদের জীবনকে সহজ করতে সাহায্য করে।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">আমাদের মূল্যবোধ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">সত্যতা ও বস্তুনিষ্ঠতা</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      আমরা সর্বদা সত্য ও যাচাইকৃত সংবাদ প্রকাশে বিশ্বাসী। কোনো ধরনের পক্ষপাতিত্ব ছাড়াই আমরা সংবাদ উপস্থাপন করি।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">কমিউনিটি সেবা</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      প্রবাসী বাংলাদেশী কমিউনিটির কণ্ঠস্বর হিসেবে আমরা তাদের সমস্যা, সংগ্রাম ও সাফল্যের গল্প তুলে ধরি।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">পেশাদারিত্ব</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      আমাদের দক্ষ সাংবাদিক দল সর্বোচ্চ মান বজায় রেখে প্রতিটি সংবাদ তৈরি ও প্রকাশ করেন।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <Heart className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">সেবার মনোভাব</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      পাঠকদের সন্তুষ্টি আমাদের প্রথম অগ্রাধিকার। আমরা সবসময় পাঠকদের মতামত ও পরামর্শকে গুরুত্ব দিই।
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mt-8">
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">আমাদের সেবা সমূহ</h2>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>দেশ-বিদেশের সর্বশেষ সংবাদ</li>
                  <li>প্রবাসজীবন সংক্রান্ত তথ্য ও পরামর্শ</li>
                  <li>কমিউনিটি ইভেন্ট ও কার্যক্রম</li>
                  <li>খেলাধুলা ও বিনোদন সংবাদ</li>
                  <li>রাজনীতি ও অর্থনীতি বিশ্লেষণ</li>
                  <li>শিক্ষা ও ক্যারিয়ার সংক্রান্ত খবর</li>
                </ul>

                <p className="text-lg leading-relaxed mt-6">
                  আমরা বিশ্বাস করি যে সঠিক তথ্য একটি সমৃদ্ধ সমাজ গঠনের ভিত্তি। <strong>হ্যালো ওমান বাংলা</strong> প্রতিশ্রুতিবদ্ধ আপনাদের জন্য সর্বোত্তম সেবা প্রদানে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
