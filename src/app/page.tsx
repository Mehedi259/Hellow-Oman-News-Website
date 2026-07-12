import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { LATEST_NEWS, TRENDING_NEWS } from "@/data/news";

export default function Home() {
  return (
    <>
      <Header />
      <NewsTicker />
      <main className="flex-1">
        <HeroSection />
        
        {/* Ad Space Placeholder */}
        <div className="container mx-auto px-4 my-8">
          <div className="bg-slate-200 dark:bg-slate-800 w-full h-[90px] md:h-[120px] flex items-center justify-center rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
            <span className="text-slate-400 font-semibold text-sm">বিজ্ঞাপন স্থান</span>
          </div>
        </div>

        <CategorySection 
          title="সর্বশেষ সংবাদ" 
          articles={LATEST_NEWS} 
          categoryLink="#"
        />
        
        <CategorySection 
          title="প্রবাস" 
          articles={TRENDING_NEWS} 
          categoryLink="#"
        />
      </main>
      <Footer />
    </>
  );
}
