import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export const metadata = {
  title: "ব্যবহারের শর্তাবলী | হ্যালো ওমান বাংলা",
  description: "হ্যালো ওমান বাংলা ওয়েবসাইট ব্যবহারের শর্তাবলী এবং নিয়মাবলী",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-brand" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                ব্যবহারের শর্তাবলী
              </h1>
              <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400">
                সর্বশেষ আপডেট: ১৫ জুলাই ২০২৬
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  হ্যালো ওমান বাংলা ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। অনুগ্রহ করে সাবধানে পড়ুন।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">১. শর্তাবলীর স্বীকৃতি</h2>
                <p>
                  এই ওয়েবসাইটে প্রবেশ ও ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী এবং আমাদের গোপনীয়তা নীতি মেনে নিতে সম্মত হচ্ছেন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তাহলে অনুগ্রহ করে এই ওয়েবসাইট ব্যবহার করবেন না।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">২. সেবা বর্ণনা</h2>
                <p>
                  হ্যালো ওমান বাংলা একটি অনলাইন সংবাদ প্ল্যাটফর্ম যা প্রবাসী বাংলাদেশীদের জন্য সংবাদ, তথ্য এবং বিনোদন কন্টেন্ট প্রদান করে। আমরা আমাদের সেবা যে কোনো সময় পরিবর্তন বা বন্ধ করার অধিকার সংরক্ষণ করি।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৩. ব্যবহারকারীর দায়িত্ব</h2>
                <p>ওয়েবসাইট ব্যবহার করার সময় আপনি সম্মত হচ্ছেন যে:</p>
                <ul>
                  <li>আপনি সঠিক ও হালনাগাদ তথ্য প্রদান করবেন</li>
                  <li>আপনি অবৈধ বা ক্ষতিকর কোনো কার্যক্রমে জড়িত হবেন না</li>
                  <li>আপনি অন্যের বৌদ্ধিক সম্পত্তির অধিকার সম্মান করবেন</li>
                  <li>আপনি ওয়েবসাইটের নিরাপত্তা বা কার্যকারিতা ব্যাহত করবেন না</li>
                  <li>আপনি মিথ্যা বা বিভ্রান্তিকর তথ্য প্রচার করবেন না</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৪. কন্টেন্ট অধিকার</h2>
                <p>
                  হ্যালো ওমান বাংলা ওয়েবসাইটের সকল কন্টেন্ট, লোগো, ডিজাইন এবং অন্যান্য উপাদান আমাদের বা আমাদের লাইসেন্সদাতাদের সম্পত্তি এবং কপিরাইট আইন দ্বারা সুরক্ষিত।
                </p>
                <p>
                  আপনি ব্যক্তিগত, অবাণিজ্যিক ব্যবহারের জন্য আমাদের কন্টেন্ট দেখতে ও শেয়ার করতে পারেন, তবে আমাদের লিখিত অনুমতি ছাড়া পুনরুৎপাদন, বিতরণ বা বাণিজ্যিক ব্যবহার করতে পারবেন না।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৫. ব্যবহারকারীর সাবমিশন</h2>
                <p>
                  আপনি যদি মন্তব্য, ছবি বা অন্য কোনো কন্টেন্ট সাবমিট করেন, তাহলে আপনি আমাদের সেই কন্টেন্ট ব্যবহার, পরিবর্তন এবং প্রকাশ করার অধিকার প্রদান করছেন। আপনি নিশ্চিত করছেন যে আপনার সাবমিট করা কন্টেন্ট:
                </p>
                <ul>
                  <li>সত্য এবং সঠিক</li>
                  <li>আইনসম্মত এবং অন্যের অধিকার লঙ্ঘন করে না</li>
                  <li>ক্ষতিকর, হুমকিমূলক বা আপত্তিকর নয়</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৬. দায়বদ্ধতার সীমা</h2>
                <p>
                  হ্যালো ওমান বাংলা "যেমন আছে" ভিত্তিতে সেবা প্রদান করে। আমরা নিশ্চয়তা দিই না যে:
                </p>
                <ul>
                  <li>সেবা নিরবচ্ছিন্ন বা ত্রুটিমুক্ত হবে</li>
                  <li>সকল তথ্য সঠিক বা হালনাগাদ হবে</li>
                  <li>ওয়েবসাইট ভাইরাস বা ক্ষতিকর উপাদানমুক্ত হবে</li>
                </ul>
                <p>
                  আমরা আমাদের ওয়েবসাইট ব্যবহারের ফলে সৃষ্ট কোনো প্রত্যক্ষ বা পরোক্ষ ক্ষতির জন্য দায়ী নই।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৭. তৃতীয় পক্ষের লিংক</h2>
                <p>
                  আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে। আমরা এসব ওয়েবসাইটের কন্টেন্ট বা কার্যক্রমের জন্য দায়ী নই।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৮. অ্যাকাউন্ট স্থগিত বা বাতিল</h2>
                <p>
                  আমরা যে কোনো সময় যে কোনো কারণে আপনার অ্যাকাউন্ট স্থগিত বা বাতিল করার অধিকার সংরক্ষণ করি, বিশেষত যদি আপনি এই শর্তাবলী লঙ্ঘন করেন।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">৯. প্রযোজ্য আইন</h2>
                <p>
                  এই শর্তাবলী ওমান সালতানাত ও বাংলাদেশের আইন দ্বারা নিয়ন্ত্রিত হবে। যে কোনো বিরোধ সংশ্লিষ্ট আদালতে নিষ্পত্তি করা হবে।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">১০. শর্তাবলী পরিবর্তন</h2>
                <p>
                  আমরা যে কোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি এই পৃষ্ঠায় প্রকাশিত হবে এবং প্রকাশের সাথে সাথে কার্যকর হবে।
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">যোগাযোগ</h2>
                <p>
                  এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-4">
                  <strong>ইমেইল:</strong> legal@helloomanbangla.com<br />
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
