import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata = {
  title: "গোপনীয়তা নীতি | হ্যালো ওমান বাংলা",
  description: "হ্যালো ওমান বাংলার গোপনীয়তা নীতি এবং ব্যবহারকারীর তথ্য সুরক্ষা সম্পর্কে জানুন",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-brand" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                গোপনীয়তা নীতি
              </h1>
              <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400">
                সর্বশেষ আপডেট: ১৫ জুলাই ২০২৬
              </p>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  হ্যালো ওমান বাংলা আপনার গোপনীয়তাকে অত্যন্ত গুরুত্বের সাথে বিবেচনা করে। এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে যে আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">১. তথ্য সংগ্রহ</h2>
                <p>আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করতে পারি:</p>
                <ul>
                  <li><strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল ঠিকানা, ফোন নম্বর যা আপনি স্বেচ্ছায় প্রদান করেন</li>
                  <li><strong>ব্যবহার সংক্রান্ত তথ্য:</strong> আপনি কীভাবে আমাদের ওয়েবসাইট ব্যবহার করেন তার তথ্য</li>
                  <li><strong>কুকিজ:</strong> আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করা হয়</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">২. তথ্যের ব্যবহার</h2>
                <p>আমরা আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:</p>
                <ul>
                  <li>আপনাকে সংবাদ ও আপডেট প্রদান করতে</li>
                  <li>আপনার জিজ্ঞাসা ও মতামতের উত্তর দিতে</li>
                  <li>আমাদের সেবার মান উন্নত করতে</li>
                  <li>নিউজলেটার ও বিশেষ অফার পাঠাতে (যদি আপনি সাবস্ক্রাইব করে থাকেন)</li>
                  <li>ওয়েবসাইটের নিরাপত্তা নিশ্চিত করতে</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৩. তথ্য শেয়ারিং</h2>
                <p>
                  আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রয়, বিনিময় বা শেয়ার করি না। তবে নিম্নলিখিত ক্ষেত্রে তথ্য শেয়ার করা হতে পারে:
                </p>
                <ul>
                  <li>আইনি বাধ্যবাধকতা মেনে চলতে</li>
                  <li>আমাদের অধিকার ও সম্পত্তি রক্ষা করতে</li>
                  <li>বিশ্বস্ত সেবা প্রদানকারীদের সাথে যারা আমাদের পক্ষে কাজ করে</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৪. তথ্যের সুরক্ষা</h2>
                <p>
                  আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে উপযুক্ত প্রযুক্তিগত ও সাংগঠনিক ব্যবস্থা গ্রহণ করি। তবে ইন্টারনেটের মাধ্যমে কোনো তথ্য স্থানান্তর সম্পূর্ণ নিরাপদ নয়।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৫. কুকিজ</h2>
                <p>
                  আমাদের ওয়েবসাইট কুকিজ ব্যবহার করে যা আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে সাহায্য করে। আপনি চাইলে আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিষ্ক্রিয় করতে পারেন।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৬. তৃতীয় পক্ষের লিংক</h2>
                <p>
                  আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে। আমরা এসব ওয়েবসাইটের গোপনীয়তা নীতির জন্য দায়ী নই।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৭. শিশুদের গোপনীয়তা</h2>
                <p>
                  আমাদের সেবা ১৮ বছরের কম বয়সী ব্যক্তিদের জন্য নয়। আমরা জেনেশুনে শিশুদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৮. আপনার অধিকার</h2>
                <p>আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
                <ul>
                  <li>আপনার তথ্য দেখার ও সংশোধন করার অধিকার</li>
                  <li>আপনার তথ্য মুছে ফেলার অনুরোধ করার অধিকার</li>
                  <li>নিউজলেটার থেকে সদস্যপদ বাতিল করার অধিকার</li>
                  <li>তথ্য প্রক্রিয়াকরণে আপত্তি জানানোর অধিকার</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৯. নীতি পরিবর্তন</h2>
                <p>
                  আমরা যে কোনো সময় এই গোপনীয়তা নীতি আপডেট করার অধিকার সংরক্ষণ করি। কোনো পরিবর্তন হলে এই পৃষ্ঠায় তা প্রকাশ করা হবে।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">১০. যোগাযোগ</h2>
                <p>
                  গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-4">
                  <strong>ইমেইল:</strong> privacy@helloomanbangla.com<br />
                  <strong>ঠিকানা:</strong> রুই, মাস্কাট, সালতানাত অফ ওমান
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
